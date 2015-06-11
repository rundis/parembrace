(ns lt.plugins.parembrace.core
  (:require [rewrite-clj.paredit :as pe]
            [rewrite-clj.zip :as z]
            [rewrite-clj.zip.whitespace :as ws]
            [clojure.zip :as zz]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.plugins.parembrace.util :as u])
  (:require-macros [lt.macros :refer [behavior]]))


(defn- zpos-gt? [l1 l2]
  (cond
   (> (:row l1) (:row l2)) true
   (> (:row l2) (:row l1)) false
   (> (:col l1) (:col l2)) true
   :else false))


(defn- ->zipper-pos-start [pos form]
  (let [row (inc (- (:line pos) (-> form :start :line)))]
    {:row row
     :col (inc (- (:ch pos)
                  (if (= 1 row) (-> form :start :ch) 0)))}))

(defn ->start-pos [z-pos form]
  {:ch (+ (dec (:col z-pos))
          (if (= 1 (:row z-pos)) (-> form :start :ch) 0))
   :line (+ (-> form :start :line) (dec (:row z-pos)))})

(defn ->end-pos [z-pos form]
  {:ch (+ (dec (:end-col z-pos))
          (if (= 1 (:end-row z-pos)) (-> form :start :ch) 0))
   :line (+ (-> form :start :line) (dec (:end-row z-pos)))})


(defn positioned-zip [pos form]
  (try
    (-> (:form-str form)
        z/of-string
        (z/find-last-by-pos (->zipper-pos-start pos form) (constantly true)))
    (catch :default e
      )))


(defn format-keep-pos [ed]
  (let [pos (editor/->cursor ed)]
    (when-let [form (u/get-top-level-form ed pos)]
      (let [hist (editor/get-history ed)]
        (editor/set-selection ed (:start form) (:end form))
        (editor/set-history ed hist))
      (editor/indent-selection ed "smart")
      (editor/move-cursor ed pos))))



(defn- maybe-col-adjust-cursor [pos opts]
  (if-let [col-adjust (:col-adjust opts)]
    (update-in pos [:ch] #(+ % col-adjust))
    pos))


(defn- maybe-add-space [ed expr]
  (let [right-char (editor/get-char ed 1)]
    (if (and (not (empty? right-char))
             (not (u/whitespace? right-char))
             (not (u/end-pair? right-char)))
      (str expr " ")
      expr)))


(defn- in-seq-past-rightmost? [zloc pos form]
  (let [bounds-rightmost (some-> zloc z/down zz/rightmost z/node meta)]
    (if (and zloc
               bounds-rightmost
               (zpos-gt? (->zipper-pos-start pos form) bounds-rightmost))
      true
      false)))


(defn- maybe-reposition-rightmost [zloc pos form]
  (if (in-seq-past-rightmost? zloc pos form)
    (-> zloc z/down z/rightmost)
    zloc))



(defn paredit-cmd [ed f opts]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)
        zloc (positioned-zip pos form)]
    (when zloc
      (editor/replace ed (:start form) (:end form) (-> zloc (maybe-reposition-rightmost pos form)  f z/root-string))
      (editor/move-cursor ed (maybe-col-adjust-cursor pos opts))
      (format-keep-pos ed))))




(defn position-after-move-prev [zloc pos form]
  (if-let [prev (z/prev zloc)]
    (if-not (some-> zloc z/left z/seq?)
      (->start-pos (-> prev z/node meta) form)
      (->end-pos (-> prev z/node meta (update-in [:end-col] inc)) form))
    pos))


(defn move-to-previous* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)
        zloc (positioned-zip pos form)]
    (when-let [res (some-> zloc (maybe-reposition-rightmost pos form) pe/move-to-prev z/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed (position-after-move-prev zloc pos form)))))


(defn splice* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)
        zloc (some-> (positioned-zip pos form) (maybe-reposition-rightmost pos form)  z/up)]
    (when zloc
      (editor/replace ed (:start form) (:end form) (-> zloc pe/splice z/root-string))
      (editor/move-cursor ed pos))))


(defn kill* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)]
    (when-let [res (some-> (:form-str form)
                           z/of-string
                           (pe/kill-at-pos (->zipper-pos-start pos form))
                           z/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed pos))))

(defn kill-one* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)]
    (when-let [res (some-> (:form-str form)
                           z/of-string
                           (pe/kill-one-at-pos (->zipper-pos-start pos form))
                           z/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed pos))))


(defn split* [ed]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)]
    (when-let [res (some-> (:form-str form)
                           z/of-string
                           (pe/split-at-pos (->zipper-pos-start pos form))
                           z/root-string)]
      (editor/replace ed (:start form) (:end form) res)
      (editor/move-cursor ed pos))))


(defn paredit-navigate [ed f & {:keys [dir] :or {dir :left}}]
  (let [pos (editor/->cursor ed)
        form (u/get-top-level-form ed)
        zloc (positioned-zip pos form)]

    (some-> (positioned-zip pos form)
            (maybe-reposition-rightmost pos form)
            f
            z/node
            meta
            (#(if (= :left dir)
                (->start-pos % form)
                (->end-pos % form)))
            (#(editor/move-cursor ed %)))))




(defn paredit-select [ed]
  (let [pos (editor/->cursor ed)
        form  (u/get-top-level-form ed)
        zloc (positioned-zip pos form)]
    (when-let [bounds (some-> zloc
                              (#(if (ws/whitespace? %) (z/up %) %))
                              z/node
                              meta)]

      ;; TODO: When comment adjust for newline !
      (editor/set-selection ed
                            (->start-pos bounds form)
                            (->end-pos bounds form)))))


(defn- ->pair [t pos]
  (let [np (fn [n] (update-in pos [:ch] #(+ % n)))]
    (case t
      :list         ["()" (np 1)]
      :vector       ["[]" (np  1)]
      :set          ["#{}" (np 2)]
      :map          ["{}" (np 1)]
      :fn           ["#()" (np 2)]
      :doublequote  ["\"\"" (np 1)]
      (println "Pair type Not found"))))

(defn lookup-start-pair [t]
  (case t
    :list "("
    :vector "["
    :map "{"
    :doublequote "\""
    nil))


;; ================================
;; Behaviors
;; ================================

(behavior ::open-pair!
          :triggers #{:parembrace.open-pair!}
          :reaction (fn [ed t]
                      (let [pos (editor/->cursor ed)
                            line (editor/line ed (:line pos))
                            [pair new-pos] (->pair t pos)]
                        (cond
                         (and (= :doublequote t)
                              (u/stringz? ed pos line (editor/->token-type ed pos)))
                           (do
                             (editor/insert-at-cursor ed "\\\"")
                             (editor/move-cursor ed (editor/adjust-loc pos 2)))
                         (and (u/string|comment? ed pos line) (lookup-start-pair t))
                           (do
                             (editor/insert-at-cursor ed (lookup-start-pair t))
                             (editor/move-cursor ed (editor/adjust-loc pos 1)))
                         :else
                           (do
                             (editor/insert-at-cursor ed (maybe-add-space ed pair))
                             (editor/move-cursor ed new-pos))))))



(behavior ::slurp-forward!
          :triggers #{:parembrace.slurp-forward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/slurp-forward {:dec-pos-when-last-before-seq true})))

(behavior ::slurp-forward-fully!
          :triggers #{:parembrace.slurp-forward-fully!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/slurp-forward-fully {:dec-pos-when-last-before-seq true})))

(behavior ::slurp-backward!
          :triggers #{:parembrace.slurp-backward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/slurp-backward {:dec-pos-when-last-before-seq true})))

(behavior ::slurp-backward-fully!
          :triggers #{:parembrace.slurp-backward-fully!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/slurp-backward-fully {:dec-pos-when-last-before-seq true})))

(behavior ::barf-forward!
          :triggers #{:parembrace.barf-forward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/barf-forward {:dec-pos-when-last-before-seq true})))

(behavior ::barf-backward!
          :triggers #{:parembrace.barf-backward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/barf-backward {:dec-pos-when-last-before-seq true})))

(behavior ::kill!
          :triggers #{:parembrace.kill!}
          :reaction (fn [ed opts]
                      (kill* ed)))

(behavior ::kill-one!
          :triggers #{:parembrace.kill-one!}
          :reaction (fn [ed opts]
                      (kill-one* ed)))



(behavior ::wrap-around!
          :triggers #{:parembrace.wrap-around!}
          :reaction (fn [ed seq-type opts]
                      (paredit-cmd ed #(pe/wrap-around % seq-type) opts)))


(behavior ::wrap-fully-forward-slurp!
          :triggers #{:parembrace.wrap-fully-forward-slurp!}
          :reaction (fn [ed seq-type opts]
                      (paredit-cmd ed #(pe/wrap-fully-forward-slurp % seq-type) opts)))

(behavior ::split!
          :triggers #{:parembrace.split!}
          :reaction (fn [ed opts]
                      (split* ed)))

(behavior ::join!
          :triggers #{:parembrace.join!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/join opts)))

(behavior ::splice!
          :triggers #{:parembrace.splice!}
          :reaction (fn [ed opts]
                      (splice* ed)))

(behavior ::splice-killing-backward!
          :triggers #{:parembrace.splice-killing-backward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/splice-killing-backward {})))

(behavior ::splice-killing-forward!
          :triggers #{:parembrace.splice-killing-forward!}
          :reaction (fn [ed opts]
                      (paredit-cmd ed pe/splice-killing-forward {})))

(behavior ::move-to-previous!
          :triggers #{:parembrace.move-to-previous!}
          :reaction (fn [ed opts]
                      (move-to-previous* ed)))

(behavior ::move-next!
          :triggers #{:parembrace.move-next!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/next)))

(behavior ::move-prev!
          :triggers #{:parembrace.move-prev!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/prev)))

(behavior ::move-down!
          :triggers #{:parembrace.move-down!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/down)))

(behavior ::move-up!
          :triggers #{:parembrace.move-up!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/up)))

(behavior ::move-up-pos-right!
          :triggers #{:parembrace.move-up-pos-right!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/up :dir :right)))

(behavior ::move-right!
          :triggers #{:parembrace.move-right!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/right)))

(behavior ::move-left!
          :triggers #{:parembrace.move-left!}
          :reaction (fn [ed]
                      (paredit-navigate ed z/left)))


(behavior ::select!
          :triggers #{:parembrace.select!}
          :reaction (fn [ed]
                      (paredit-select ed)))



;; ================================
;; Commands
;; ================================

(cmd/command {:command :parembrace.open-list
              :desc "Parembrace: Open list"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.open-pair! :list)))})

(cmd/command {:command :parembrace.open-vector
              :desc "Parembrace: Open vector"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.open-pair! :vector)))})

(cmd/command {:command :parembrace.open-map
              :desc "Parembrace: Open map"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.open-pair! :map)))})

(cmd/command {:command :parembrace.open-set
              :desc "Parembrace: Open set"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.open-pair! :set)))})

(cmd/command {:command :parembrace.open-fn
              :desc "Parembrace: Open anonymous function"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.open-pair! :fn)))})

(cmd/command {:command :parembrace.open-doublequote
              :desc "Parembrace: Open doublequote"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.open-pair! :doublequote)))})


(cmd/command {:command :parembrace.slurp-forward
              :desc "Parembrace: Slurp forward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.slurp-forward! {})))})

(cmd/command {:command :parembrace.slurp-forward-fully
              :desc "Parembrace: Slurp forward fully"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.slurp-forward-fully! {})))})

(cmd/command {:command :parembrace.slurp-backward
              :desc "Parembrace: Slurp backward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.slurp-backward! {})))})

(cmd/command {:command :parembrace.slurp-backward-fully
              :desc "Parembrace: Slurp backward fully"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.slurp-backward-fully! {})))})

(cmd/command {:command :parembrace.barf-forward
              :desc "Parembrace: Barf forward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.barf-forward! {})))})

(cmd/command {:command :parembrace.barf-backward
              :desc "Parembrace: Barf backward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.barf-backward! {})))})

(cmd/command {:command :parembrace.kill
              :desc "Parembrace: Kill"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.kill! {})))})

(cmd/command {:command :parembrace.kill-one
              :desc "Parembrace: Kill one"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.kill-one! {})))})

(cmd/command {:command :parembrace.wrap-around-list
              :desc "Parembrace: Wrap around - list"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.wrap-around! :list {:col-adjust 1})))})

(cmd/command {:command :parembrace.wrap-around-vector
              :desc "Parembrace: Wrap around - vector"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.wrap-around! :vector {:col-adjust 1})))})

(cmd/command {:command :parembrace.wrap-around-map
              :desc "Parembrace: Wrap around - map"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.wrap-around! :map {:col-adjust 1})))})

(cmd/command {:command :parembrace.wrap-around-set
              :desc "Parembrace: Wrap around - set"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.wrap-around! :set {:col-adjust 2})))})

(cmd/command {:command :parembrace.wrap-fully-forward-slurp-list
              :desc "Parembrace: Wrap around slurping forward - list"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.wrap-fully-forward-slurp! :list {:col-adjust 1})))})

(cmd/command {:command :parembrace.wrap-fully-forward-slurp-vector
              :desc "Parembrace: Wrap around slurping forward - vector"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.wrap-fully-forward-slurp! :vector {:col-adjust 1})))})

(cmd/command {:command :parembrace.wrap-fully-forward-slurp-set
              :desc "Parembrace: Wrap around slurping forward - set"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.wrap-fully-forward-slurp! :set {:col-adjust 2})))})

(cmd/command {:command :parembrace.wrap-fully-forward-slurp-map
              :desc "Parembrace: Wrap around slurping forward - map"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.wrap-fully-forward-slurp! :map {:col-adjust 1})))})


(cmd/command {:command :parembrace.split
              :desc "Parembrace: Split"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.split! {})))})

(cmd/command {:command :parembrace.join
              :desc "Parembrace: Join"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.join! {})))})

(cmd/command {:command :parembrace.splice
              :desc "Parembrace: Splice"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.splice! {})))})

(cmd/command {:command :parembrace.splice-killing-forward
              :desc "Parembrace: Splice - killing forward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.splice-killing-forward! {})))})

(cmd/command {:command :parembrace.splice-killing-backward
              :desc "Parembrace: Splice - killing backward"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.splice-killing-backward! {})))})


(cmd/command {:command :parembrace.move-to-previous
              :desc "Parembrace: Move node to previous"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.move-to-previous! {})))})





; Navigation only

(cmd/command {:command :parembrace.move-next
              :desc "Parembrace: Move next (depth first)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.move-next!)))})

(cmd/command {:command :parembrace.move-prev
              :desc "Parembrace: Move previous (reverse depth first)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.move-prev!)))})

(cmd/command {:command :parembrace.move-down
              :desc "Parembrace: Move down (into sexpr)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.move-down!)))})

(cmd/command {:command :parembrace.move-up
              :desc "Parembrace: Move up (out of sexpr)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.move-up!)))})

(cmd/command {:command :parembrace.move-up-pos-right
              :desc "Parembrace: Move up right (out of sexpr and move cursor to the right)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.move-up-pos-right!)))})


(cmd/command {:command :parembrace.move-right
              :desc "Parembrace: Move right (right sibling)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.move-right!)))})

(cmd/command {:command :parembrace.move-left
              :desc "Parembrace: Move left (left sibling)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.move-left!)))})

;; Misc
(cmd/command {:command :parembrace.select
              :desc "Parembrace: Select (expanding)"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :parembrace.select!)))})
