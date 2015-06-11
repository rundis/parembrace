if(!lt.util.load.provided_QMARK_('cljs.extended.reader')) {
goog.provide('cljs.extended.reader');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string');
cljs.extended.reader.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"deftype*","deftype*",-978581244,null),null,new cljs.core.Symbol(null,"new","new",-1640422567,null),null,new cljs.core.Symbol(null,"try*","try*",-1636962424,null),null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),null,new cljs.core.Symbol(null,"&","&",-1640531489,null),null,new cljs.core.Symbol(null,"set!","set!",-1637004872,null),null,new cljs.core.Symbol(null,"recur","recur",-1532142362,null),null,new cljs.core.Symbol(null,".",".",-1640531481,null),null,new cljs.core.Symbol(null,"ns","ns",-1640528002,null),null,new cljs.core.Symbol(null,"do","do",-1640528316,null),null,new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),null,new cljs.core.Symbol(null,"throw","throw",-1530191713,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",1548249632,null),null,new cljs.core.Symbol(null,"js*","js*",-1640426054,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",774272013,null),null,new cljs.core.Symbol(null,"let*","let*",-1637213400,null),null,new cljs.core.Symbol(null,"loop*","loop*",-1537374273,null),null,new cljs.core.Symbol(null,"if","if",-1640528170,null),null,new cljs.core.Symbol(null,"def","def",-1640432194,null),null], null), null);
cljs.extended.reader.symbol_pattern = cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.extended.reader.Reader = (function (){var obj8858 = {};return obj8858;
})();
cljs.extended.reader.read_char = (function read_char(reader){if((function (){var and__6359__auto__ = reader;if(and__6359__auto__)
{return reader.cljs$extended$reader$Reader$read_char$arity$1;
} else
{return and__6359__auto__;
}
})())
{return reader.cljs$extended$reader$Reader$read_char$arity$1(reader);
} else
{var x__6998__auto__ = (((reader == null))?null:reader);return (function (){var or__6371__auto__ = (cljs.extended.reader.read_char[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (cljs.extended.reader.read_char["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.extended.reader.peek_char = (function peek_char(reader){if((function (){var and__6359__auto__ = reader;if(and__6359__auto__)
{return reader.cljs$extended$reader$Reader$peek_char$arity$1;
} else
{return and__6359__auto__;
}
})())
{return reader.cljs$extended$reader$Reader$peek_char$arity$1(reader);
} else
{var x__6998__auto__ = (((reader == null))?null:reader);return (function (){var or__6371__auto__ = (cljs.extended.reader.peek_char[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (cljs.extended.reader.peek_char["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.peek-char",reader);
}
}
})().call(null,reader);
}
});
cljs.extended.reader.IPushbackReader = (function (){var obj8860 = {};return obj8860;
})();
cljs.extended.reader.unread = (function unread(reader,ch){if((function (){var and__6359__auto__ = reader;if(and__6359__auto__)
{return reader.cljs$extended$reader$IPushbackReader$unread$arity$2;
} else
{return and__6359__auto__;
}
})())
{return reader.cljs$extended$reader$IPushbackReader$unread$arity$2(reader,ch);
} else
{var x__6998__auto__ = (((reader == null))?null:reader);return (function (){var or__6371__auto__ = (cljs.extended.reader.unread[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (cljs.extended.reader.unread["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
cljs.extended.reader.IndexingReader = (function (){var obj8862 = {};return obj8862;
})();
cljs.extended.reader.get_line_number = (function get_line_number(reader){if((function (){var and__6359__auto__ = reader;if(and__6359__auto__)
{return reader.cljs$extended$reader$IndexingReader$get_line_number$arity$1;
} else
{return and__6359__auto__;
}
})())
{return reader.cljs$extended$reader$IndexingReader$get_line_number$arity$1(reader);
} else
{var x__6998__auto__ = (((reader == null))?null:reader);return (function (){var or__6371__auto__ = (cljs.extended.reader.get_line_number[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (cljs.extended.reader.get_line_number["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-line-number",reader);
}
}
})().call(null,reader);
}
});
cljs.extended.reader.get_column_number = (function get_column_number(reader){if((function (){var and__6359__auto__ = reader;if(and__6359__auto__)
{return reader.cljs$extended$reader$IndexingReader$get_column_number$arity$1;
} else
{return and__6359__auto__;
}
})())
{return reader.cljs$extended$reader$IndexingReader$get_column_number$arity$1(reader);
} else
{var x__6998__auto__ = (((reader == null))?null:reader);return (function (){var or__6371__auto__ = (cljs.extended.reader.get_column_number[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (cljs.extended.reader.get_column_number["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-column-number",reader);
}
}
})().call(null,reader);
}
});

/**
* @constructor
*/
cljs.extended.reader.StringReader = (function (s,s_len,s_pos){
this.s = s;
this.s_len = s_len;
this.s_pos = s_pos;
})
cljs.extended.reader.StringReader.cljs$lang$type = true;
cljs.extended.reader.StringReader.cljs$lang$ctorStr = "cljs.extended.reader/StringReader";
cljs.extended.reader.StringReader.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"cljs.extended.reader/StringReader");
});
cljs.extended.reader.StringReader.prototype.cljs$extended$reader$Reader$ = true;
cljs.extended.reader.StringReader.prototype.cljs$extended$reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{var r = (self__.s[self__.s_pos]);self__.s_pos = (self__.s_pos + 1);
return r;
} else
{return null;
}
});
cljs.extended.reader.StringReader.prototype.cljs$extended$reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{return (self__.s[self__.s_pos]);
} else
{return null;
}
});
cljs.extended.reader.__GT_StringReader = (function __GT_StringReader(s,s_len,s_pos){return (new cljs.extended.reader.StringReader(s,s_len,s_pos));
});

/**
* @constructor
*/
cljs.extended.reader.PushbackReader = (function (rdr,buf,buf_len,buf_pos){
this.rdr = rdr;
this.buf = buf;
this.buf_len = buf_len;
this.buf_pos = buf_pos;
})
cljs.extended.reader.PushbackReader.cljs$lang$type = true;
cljs.extended.reader.PushbackReader.cljs$lang$ctorStr = "cljs.extended.reader/PushbackReader";
cljs.extended.reader.PushbackReader.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"cljs.extended.reader/PushbackReader");
});
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$IPushbackReader$ = true;
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(ch))
{if((self__.buf_pos === 0))
{throw (new Error("Pushback buffer is full"));
} else
{}
self__.buf_pos = (self__.buf_pos - 1);
return (self__.buf[self__.buf_pos] = ch);
} else
{return null;
}
});
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$Reader$ = true;
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buf_pos < self__.buf_len))
{var r = (self__.buf[self__.buf_pos]);self__.buf_pos = (self__.buf_pos + 1);
return r;
} else
{return cljs.extended.reader.read_char.call(null,self__.rdr);
}
});
cljs.extended.reader.PushbackReader.prototype.cljs$extended$reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buf_pos < self__.buf_len))
{return (self__.buf[self__.buf_pos]);
} else
{return cljs.extended.reader.peek_char.call(null,self__.rdr);
}
});
cljs.extended.reader.__GT_PushbackReader = (function __GT_PushbackReader(rdr,buf,buf_len,buf_pos){return (new cljs.extended.reader.PushbackReader(rdr,buf,buf_len,buf_pos));
});
cljs.extended.reader.normalize_newline = (function normalize_newline(rdr,ch){if(("\r" === ch))
{var c = cljs.extended.reader.peek_char.call(null,rdr);if(("\f" === c))
{cljs.extended.reader.read_char.call(null,rdr);
} else
{}
return "\n";
} else
{return ch;
}
});

/**
* @constructor
*/
cljs.extended.reader.IndexingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
})
cljs.extended.reader.IndexingPushbackReader.cljs$lang$type = true;
cljs.extended.reader.IndexingPushbackReader.cljs$lang$ctorStr = "cljs.extended.reader/IndexingPushbackReader";
cljs.extended.reader.IndexingPushbackReader.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"cljs.extended.reader/IndexingPushbackReader");
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IndexingReader$ = true;
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line + 1);
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return self__.column;
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IPushbackReader$ = true;
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
} else
{}
self__.line_start_QMARK_ = self__.prev;
self__.column = (self__.column - 1);
return cljs.extended.reader.unread.call(null,self__.rdr,ch);
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$Reader$ = true;
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4092__auto__ = cljs.extended.reader.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;var ch__$1 = cljs.extended.reader.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.extended.reader.newline_QMARK_.call(null,ch__$1);
if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.column = 0;
self__.line = (self__.line + 1);
} else
{}
self__.column = (self__.column + 1);
return ch__$1;
} else
{return null;
}
});
cljs.extended.reader.IndexingPushbackReader.prototype.cljs$extended$reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.extended.reader.peek_char.call(null,self__.rdr);
});
cljs.extended.reader.__GT_IndexingPushbackReader = (function __GT_IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev){return (new cljs.extended.reader.IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev));
});
/**
* Returns an object of the same type and value as `obj`, with its metadata merged over `m`.
*/
cljs.extended.reader.merge_meta = (function merge_meta(obj,m){var orig_meta = cljs.core.meta.call(null,obj);return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,m,cljs.core.dissoc.call(null,orig_meta,new cljs.core.Keyword(null,"source","source",4412365709))));
});
/**
* Returns a string containing the contents of the top most source logging frame.
*/
cljs.extended.reader.peek_source_log = (function peek_source_log(source_log_frames){var current_frame = cljs.core.deref.call(null,source_log_frames);return new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(current_frame).toString().substring(new cljs.core.Keyword(null,"offset","offset",4289091589).cljs$core$IFn$_invoke$arity$1(current_frame));
});
/**
* Logs `char` to all currently active source logging frames.
*/
cljs.extended.reader.log_source_char = (function log_source_char(source_log_frames,char$){var temp__4092__auto__ = new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,source_log_frames));if(cljs.core.truth_(temp__4092__auto__))
{var buffer = temp__4092__auto__;return buffer.append(char$);
} else
{return null;
}
});
/**
* Removes the last logged character from all currently active source logging frames. Called when pushing a character back.
*/
cljs.extended.reader.drop_last_logged_char = (function drop_last_logged_char(source_log_frames){var temp__4092__auto__ = new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,source_log_frames));if(cljs.core.truth_(temp__4092__auto__))
{var buffer = temp__4092__auto__;var s = buffer.toString();return buffer.set(s.substring(0,(buffer.getLength() - 1)));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.extended.reader.SourceLoggingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev,source_log_frames){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
this.source_log_frames = source_log_frames;
})
cljs.extended.reader.SourceLoggingPushbackReader.cljs$lang$type = true;
cljs.extended.reader.SourceLoggingPushbackReader.cljs$lang$ctorStr = "cljs.extended.reader/SourceLoggingPushbackReader";
cljs.extended.reader.SourceLoggingPushbackReader.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"cljs.extended.reader/SourceLoggingPushbackReader");
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IndexingReader$ = true;
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line | 0);
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.column | 0);
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IPushbackReader$ = true;
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
} else
{self__.column = (self__.column - 1);
}
self__.line_start_QMARK_ = self__.prev;
if(cljs.core.truth_(ch))
{cljs.extended.reader.drop_last_logged_char.call(null,self__.source_log_frames);
} else
{}
return cljs.extended.reader.unread.call(null,self__.rdr,ch);
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$Reader$ = true;
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4092__auto__ = cljs.extended.reader.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;var ch__$1 = cljs.extended.reader.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.extended.reader.newline_QMARK_.call(null,ch__$1);
if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.column = 0;
self__.line = (self__.line + 1);
} else
{}
self__.column = (self__.column + 1);
cljs.extended.reader.log_source_char.call(null,self__.source_log_frames,ch__$1);
return ch__$1;
} else
{return null;
}
});
cljs.extended.reader.SourceLoggingPushbackReader.prototype.cljs$extended$reader$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.extended.reader.peek_char.call(null,self__.rdr);
});
cljs.extended.reader.__GT_SourceLoggingPushbackReader = (function __GT_SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,source_log_frames){return (new cljs.extended.reader.SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,source_log_frames));
});
/**
* Creates a StringReader from a given string
*/
cljs.extended.reader.string_reader = (function string_reader(s){return (new cljs.extended.reader.StringReader(s,cljs.core.count.call(null,s),0));
});
/**
* Creates a PushbackReader from a given string
*/
cljs.extended.reader.string_push_back_reader = (function() {
var string_push_back_reader = null;
var string_push_back_reader__1 = (function (s){return string_push_back_reader.call(null,s,1);
});
var string_push_back_reader__2 = (function (s,buf_len){return (new cljs.extended.reader.PushbackReader(cljs.extended.reader.string_reader.call(null,s),cljs.core.object_array.call(null,buf_len),buf_len,buf_len));
});
string_push_back_reader = function(s,buf_len){
switch(arguments.length){
case 1:
return string_push_back_reader__1.call(this,s);
case 2:
return string_push_back_reader__2.call(this,s,buf_len);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
string_push_back_reader.cljs$core$IFn$_invoke$arity$1 = string_push_back_reader__1;
string_push_back_reader.cljs$core$IFn$_invoke$arity$2 = string_push_back_reader__2;
return string_push_back_reader;
})()
;
/**
* Creates an IndexingPushbackReader from a given string
*/
cljs.extended.reader.indexing_push_back_reader = (function() {
var indexing_push_back_reader = null;
var indexing_push_back_reader__1 = (function (s){return (new cljs.extended.reader.IndexingPushbackReader(cljs.extended.reader.string_push_back_reader.call(null,s),0,1,true,null));
});
var indexing_push_back_reader__2 = (function (s,buf_len){return (new cljs.extended.reader.IndexingPushbackReader(cljs.extended.reader.string_push_back_reader.call(null,s,buf_len),0,1,true,null));
});
indexing_push_back_reader = function(s,buf_len){
switch(arguments.length){
case 1:
return indexing_push_back_reader__1.call(this,s);
case 2:
return indexing_push_back_reader__2.call(this,s,buf_len);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1 = indexing_push_back_reader__1;
indexing_push_back_reader.cljs$core$IFn$_invoke$arity$2 = indexing_push_back_reader__2;
return indexing_push_back_reader;
})()
;
/**
* Creates a SourceLoggingPushbackReader from a given string or PushbackReader
*/
cljs.extended.reader.source_logging_push_back_reader = (function() {
var source_logging_push_back_reader = null;
var source_logging_push_back_reader__1 = (function (s_or_rdr){return source_logging_push_back_reader.call(null,s_or_rdr,1);
});
var source_logging_push_back_reader__2 = (function (s_or_rdr,buf_len){return source_logging_push_back_reader.call(null,s_or_rdr,buf_len,null);
});
var source_logging_push_back_reader__3 = (function (s_or_rdr,buf_len,file_name){return (new cljs.extended.reader.SourceLoggingPushbackReader(((typeof s_or_rdr === 'string')?cljs.extended.reader.string_push_back_reader.call(null,s_or_rdr,buf_len):s_or_rdr),1,1,true,null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",3930752946),(new goog.string.StringBuffer()),new cljs.core.Keyword(null,"offset","offset",4289091589),0], null))));
});
source_logging_push_back_reader = function(s_or_rdr,buf_len,file_name){
switch(arguments.length){
case 1:
return source_logging_push_back_reader__1.call(this,s_or_rdr);
case 2:
return source_logging_push_back_reader__2.call(this,s_or_rdr,buf_len);
case 3:
return source_logging_push_back_reader__3.call(this,s_or_rdr,buf_len,file_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1 = source_logging_push_back_reader__1;
source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$2 = source_logging_push_back_reader__2;
source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$3 = source_logging_push_back_reader__3;
return source_logging_push_back_reader;
})()
;
/**
* Checks whether a given character is whitespace
*/
cljs.extended.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){var or__6371__auto__ = goog.string.isBreakingWhitespace(ch);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.extended.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){return goog.string.isNumeric(ch);
});
/**
* Checks whether the character is a newline.
*/
cljs.extended.reader.newline_QMARK_ = (function newline_QMARK_(ch){return ("\n" === ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.extended.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.extended.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.extended.reader.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.extended.reader.numeric_QMARK_.call(null,cljs.extended.reader.peek_char.call(null,reader))));
});
/**
* @param {...*} var_args
*/
cljs.extended.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){var error_msg = cljs.core.apply.call(null,cljs.core.str,msg);throw (new Error([cljs.core.str(error_msg),cljs.core.str((((function (){var G__8864 = rdr;if(G__8864)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8864.cljs$extended$reader$IndexingReader$;
}
})()))
{return true;
} else
{if((!G__8864.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.extended.reader.IndexingReader,G__8864);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.extended.reader.IndexingReader,G__8864);
}
})())?[cljs.core.str(", on line: "),cljs.core.str(cljs.extended.reader.get_line_number.call(null,rdr)),cljs.core.str(", on column: "),cljs.core.str(cljs.extended.reader.get_column_number.call(null,rdr))].join(''):null))].join('')));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__8956){
var rdr = cljs.core.first(arglist__8956);
var msg = cljs.core.rest(arglist__8956);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.extended.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var and__6359__auto__ = !((ch === "#"));if(and__6359__auto__)
{var and__6359__auto____$1 = !((ch === "'"));if(and__6359__auto____$1)
{var and__6359__auto____$2 = !((ch === ":"));if(and__6359__auto____$2)
{return cljs.extended.reader.macros.call(null,ch);
} else
{return and__6359__auto____$2;
}
} else
{return and__6359__auto____$1;
}
} else
{return and__6359__auto__;
}
});
cljs.extended.reader.read_token = (function read_token(rdr,initch){var sb = (new goog.string.StringBuffer(initch));var ch = cljs.extended.reader.read_char.call(null,rdr);while(true){
if(((ch == null)) || (cljs.extended.reader.whitespace_QMARK_.call(null,ch)) || (cljs.extended.reader.macro_terminating_QMARK_.call(null,ch)))
{cljs.extended.reader.unread.call(null,rdr,ch);
return sb.toString();
} else
{{
var G__8957 = (function (){sb.append(ch);
return sb;
})();
var G__8958 = cljs.extended.reader.read_char.call(null,rdr);
sb = G__8957;
ch = G__8958;
continue;
}
}
break;
}
});
/**
* Reads to the end of a line and returns the line.
*/
cljs.extended.reader.read_line = (function read_line(rdr){var sb = (new goog.string.StringBuffer());var ch = cljs.extended.reader.read_char.call(null,rdr);while(true){
if(((ch == null)) && (cljs.core._EQ_.call(null,0,sb.getLength())))
{return null;
} else
{if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return sb.toString();
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__8959 = (function (){sb.append(ch);
return sb;
})();
var G__8960 = cljs.extended.reader.read_char.call(null,rdr);
sb = G__8959;
ch = G__8960;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.extended.reader.line_seq = (function line_seq(rdr){var temp__4092__auto__ = cljs.extended.reader.read_line.call(null,rdr);if(cljs.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;return cljs.core.cons.call(null,line,(new cljs.core.LazySeq(null,((function (line,temp__4092__auto__){
return (function (){return line_seq.call(null,rdr);
});})(line,temp__4092__auto__))
,null,null)));
} else
{return null;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.extended.reader.skip_line = (function skip_line(reader,_){while(true){
var ch = cljs.extended.reader.read_char.call(null,reader);if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.extended.reader.int_pattern = cljs.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$");
cljs.extended.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.extended.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.extended.reader.re_find_STAR_ = (function re_find_STAR_(re,s){var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
}
});
cljs.extended.reader.match_int = (function match_int(s){var groups = cljs.extended.reader.re_find_STAR_.call(null,cljs.extended.reader.int_pattern,s);var group3 = (groups[2]);if(!(((group3 == null)) || ((group3.length < 1))))
{return 0;
} else
{var negate = ((("-" === (groups[1])))?-1:1);var a = (cljs.core.truth_((groups[3]))?[(groups[3]),10]:(cljs.core.truth_((groups[4]))?[(groups[4]),16]:(cljs.core.truth_((groups[5]))?[(groups[5]),8]:(cljs.core.truth_((groups[7]))?[(groups[7]),parseInt((groups[7]))]:((new cljs.core.Keyword(null,"default","default",2558708147))?[null,null]:null)))));var n = (a[0]);var radix = (a[1]);if((n == null))
{return null;
} else
{return (negate * parseInt(n,radix));
}
}
});
cljs.extended.reader.match_ratio = (function match_ratio(s){var groups = cljs.extended.reader.re_find_STAR_.call(null,cljs.extended.reader.ratio_pattern,s);var numinator = (groups[1]);var denominator = (groups[2]);return (parseInt(numinator) / parseInt(denominator));
});
cljs.extended.reader.match_float = (function match_float(s){return parseFloat(s);
});
cljs.extended.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){var matches = re.exec(s);if((!((matches == null))) && (((matches[0]) === s)))
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
} else
{return null;
}
});
cljs.extended.reader.match_number = (function match_number(s){if(cljs.core.truth_(cljs.extended.reader.re_matches_STAR_.call(null,cljs.extended.reader.int_pattern,s)))
{return cljs.extended.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.extended.reader.re_matches_STAR_.call(null,cljs.extended.reader.ratio_pattern,s)))
{return cljs.extended.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.extended.reader.re_matches_STAR_.call(null,cljs.extended.reader.float_pattern,s)))
{return cljs.extended.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.extended.reader.escape_char_map = (function escape_char_map(c){if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.extended.reader.read_2_chars = (function read_2_chars(reader){return (new goog.string.StringBuffer(cljs.extended.reader.read_char.call(null,reader),cljs.extended.reader.read_char.call(null,reader))).toString();
});
cljs.extended.reader.read_4_chars = (function read_4_chars(reader){return (new goog.string.StringBuffer(cljs.extended.reader.read_char.call(null,reader),cljs.extended.reader.read_char.call(null,reader),cljs.extended.reader.read_char.call(null,reader),cljs.extended.reader.read_char.call(null,reader))).toString();
});
cljs.extended.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.extended.reader.octal_pattern = cljs.core.re_pattern.call(null,"[0-7]{1,3}");
cljs.extended.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.extended.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.extended.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
/**
* @param {...*} var_args
*/
cljs.extended.reader.make_unicode_char = (function() { 
var make_unicode_char__delegate = function (code_str,p__8865){var vec__8867 = p__8865;var base = cljs.core.nth.call(null,vec__8867,0,null);var base__$1 = (function (){var or__6371__auto__ = base;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return 16;
}
})();var code = parseInt(code_str,base__$1);return String.fromCharCode(code);
};
var make_unicode_char = function (code_str,var_args){
var p__8865 = null;if (arguments.length > 1) {
  p__8865 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_unicode_char__delegate.call(this,code_str,p__8865);};
make_unicode_char.cljs$lang$maxFixedArity = 1;
make_unicode_char.cljs$lang$applyTo = (function (arglist__8961){
var code_str = cljs.core.first(arglist__8961);
var p__8865 = cljs.core.rest(arglist__8961);
return make_unicode_char__delegate(code_str,p__8865);
});
make_unicode_char.cljs$core$IFn$_invoke$arity$variadic = make_unicode_char__delegate;
return make_unicode_char;
})()
;
cljs.extended.reader.escape_char = (function escape_char(buffer,reader){var ch = cljs.extended.reader.read_char.call(null,reader);var mapresult = cljs.extended.reader.escape_char_map.call(null,ch);if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.extended.reader.make_unicode_char.call(null,cljs.extended.reader.validate_unicode_escape.call(null,cljs.extended.reader.unicode_2_pattern,reader,ch,cljs.extended.reader.read_2_chars.call(null,reader)));
} else
{if((ch === "u"))
{return cljs.extended.reader.make_unicode_char.call(null,cljs.extended.reader.validate_unicode_escape.call(null,cljs.extended.reader.unicode_4_pattern,reader,ch,cljs.extended.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.extended.reader.numeric_QMARK_.call(null,ch))
{return String.fromCharCode(ch);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.extended.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.extended.reader.read_past = (function read_past(pred,rdr){var ch = cljs.extended.reader.read_char.call(null,rdr);while(true){
if(cljs.core.truth_(pred.call(null,ch)))
{{
var G__8962 = cljs.extended.reader.read_char.call(null,rdr);
ch = G__8962;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.extended.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
var ch = cljs.extended.reader.read_past.call(null,cljs.extended.reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch))
{} else
{cljs.extended.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch))
{return cljs.core.persistent_BANG_.call(null,a);
} else
{var temp__4090__auto__ = cljs.extended.reader.macros.call(null,ch);if(cljs.core.truth_(temp__4090__auto__))
{var macrofn = temp__4090__auto__;var mret = macrofn.call(null,rdr,ch);{
var G__8963 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__8963;
continue;
}
} else
{cljs.extended.reader.unread.call(null,rdr,ch);
var o = cljs.extended.reader.read.call(null,rdr,true,null,recursive_QMARK_);{
var G__8964 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__8964;
continue;
}
}
}
break;
}
});
cljs.extended.reader.not_implemented = (function not_implemented(rdr,ch){return cljs.extended.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.extended.reader.read_dispatch = (function read_dispatch(rdr,_){var ch = cljs.extended.reader.read_char.call(null,rdr);var dm = cljs.extended.reader.dispatch_macros.call(null,ch);if(cljs.core.truth_(dm))
{return dm.call(null,rdr,_);
} else
{var temp__4090__auto__ = cljs.extended.reader.maybe_read_tagged_type.call(null,rdr,ch);if(cljs.core.truth_(temp__4090__auto__))
{var obj = temp__4090__auto__;return obj;
} else
{return cljs.extended.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
cljs.extended.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){return cljs.extended.reader.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljs.extended.reader.maybe_get_pos = (function maybe_get_pos(rdr){if((function (){var G__8869 = rdr;if(G__8869)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8869.cljs$extended$reader$IndexingReader$;
}
})()))
{return true;
} else
{if((!G__8869.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.extended.reader.IndexingReader,G__8869);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.extended.reader.IndexingReader,G__8869);
}
})())
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.extended.reader.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"column","column",3954034376),(cljs.extended.reader.get_column_number.call(null,rdr) - 1)], null);
} else
{return null;
}
});
cljs.extended.reader.prep_meta = (function prep_meta(rdr,pos,source){if(cljs.core.truth_(pos))
{return cljs.core.merge.call(null,pos,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),cljs.extended.reader.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"end-column","end-column",3799845882),cljs.extended.reader.get_column_number.call(null,rdr),new cljs.core.Keyword(null,"source","source",4412365709),source], null));
} else
{return null;
}
});
cljs.extended.reader.with_source_log = (function with_source_log(rdr,f,prefix){if(cljs.core._EQ_.call(null,cljs.extended.reader.SourceLoggingPushbackReader,cljs.core.type.call(null,rdr)))
{var frame = rdr.source_log_frames;var new_frame = cljs.core.atom.call(null,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,frame),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",4289091589)], null),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frame)).getLength()));var ret = f.call(null);var source = [cljs.core.str(prefix),cljs.core.str(cljs.extended.reader.peek_source_log.call(null,new_frame))].join('');return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret,source], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
});
cljs.extended.reader.read_list = (function read_list(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__8871 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,")",rdr,true);
});})(pos))
,"(");var the_list = cljs.core.nth.call(null,vec__8871,0,null);var source = cljs.core.nth.call(null,vec__8871,1,null);return cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.list,the_list),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended.reader.read_comment = cljs.extended.reader.skip_line;
cljs.extended.reader.read_vector = (function read_vector(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__8873 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,"]",rdr,true);
});})(pos))
,"[");var the_vec = cljs.core.nth.call(null,vec__8873,0,null);var source = cljs.core.nth.call(null,vec__8873,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_vec),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended.reader.read_map = (function read_map(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__8875 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"{");var l = cljs.core.nth.call(null,vec__8875,0,null);var source = cljs.core.nth.call(null,vec__8875,1,null);if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))
{cljs.extended.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.hash_map,l),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
});
cljs.extended.reader.read_number = (function read_number(reader,initch){var buffer = (new goog.string.StringBuffer(initch));var ch = cljs.extended.reader.read_char.call(null,reader);while(true){
if(cljs.core.truth_((function (){var or__6371__auto__ = (ch == null);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = cljs.extended.reader.whitespace_QMARK_.call(null,ch);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{return cljs.extended.reader.macros.call(null,ch);
}
}
})()))
{cljs.extended.reader.unread.call(null,reader,ch);
var s = buffer.toString();var or__6371__auto__ = cljs.extended.reader.match_number.call(null,s);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.extended.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else
{{
var G__8965 = (function (){buffer.append(ch);
return buffer;
})();
var G__8966 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__8965;
ch = G__8966;
continue;
}
}
break;
}
});
cljs.extended.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.extended.reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.extended.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{{
var G__8967 = (function (){buffer.append(cljs.extended.reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__8968 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__8967;
ch = G__8968;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__8969 = (function (){buffer.append(ch);
return buffer;
})();
var G__8970 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__8969;
ch = G__8970;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.extended.reader.special_symbols = (function special_symbols(t,not_found){if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.extended.reader.parse_symbol = (function parse_symbol(token){if(cljs.core.truth_(goog.string.contains(token,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,0,token.indexOf("/")),cljs.core.subs.call(null,token,(token.indexOf("/") + 1),token.length));
} else
{return cljs.extended.reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token));
}
});
cljs.extended.reader.read_symbol = (function read_symbol(reader,initch){var pos = cljs.extended.reader.maybe_get_pos.call(null,reader);var vec__8878 = cljs.extended.reader.with_source_log.call(null,reader,((function (pos){
return (function (){return cljs.extended.reader.read_token.call(null,reader,initch);
});})(pos))
,initch);var token = cljs.core.nth.call(null,vec__8878,0,null);var source = cljs.core.nth.call(null,vec__8878,1,null);if((function (){var G__8879 = token;if(G__8879)
{var bit__7021__auto__ = (G__8879.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__7021__auto__) || (G__8879.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__8879.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__8879);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__8879);
}
})())
{return cljs.core.with_meta.call(null,cljs.extended.reader.parse_symbol.call(null,token),cljs.extended.reader.prep_meta.call(null,reader,pos,source));
} else
{return cljs.extended.reader.parse_symbol.call(null,token);
}
});
cljs.extended.reader.read_keyword = (function read_keyword(reader,initch){var tok = cljs.extended.reader.read_token.call(null,reader,cljs.extended.reader.read_char.call(null,reader));var a = cljs.extended.reader.re_matches_STAR_.call(null,cljs.extended.reader.symbol_pattern,tok);var token = (a[0]);var ns = (a[1]);var name = (a[2]);if(((!((void 0 === ns))) && ((ns.substring((ns.length - 2),ns.length) === ":/"))) || (((name[(name.length - 1)]) === ":")) || (!((token.indexOf("::",1) === -1))))
{return cljs.extended.reader.reader_error.call(null,reader,"Invalid token: ",token);
} else
{if((!((ns == null))) && ((ns.length > 0)))
{return cljs.core.keyword.call(null,ns.substring(0,ns.indexOf("/")),name);
} else
{return cljs.core.keyword.call(null,token.substring(1));
}
}
});
cljs.extended.reader.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Symbol))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
} else
{if(typeof f === 'string')
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
} else
{if((f instanceof cljs.core.Keyword))
{return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return f;
} else
{return null;
}
}
}
}
});
cljs.extended.reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended.reader.read.call(null,rdr,true,null,true)),sym);
});
});
cljs.extended.reader.throwing_reader = (function throwing_reader(msg){return (function (rdr,_){return cljs.extended.reader.reader_error.call(null,rdr,msg);
});
});
cljs.extended.reader.read_meta = (function read_meta(rdr,_){var vec__8883 = (((function (){var G__8884 = rdr;if(G__8884)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8884.cljs$extended$reader$IndexingReader$;
}
})()))
{return true;
} else
{if((!G__8884.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.extended.reader.IndexingReader,G__8884);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.extended.reader.IndexingReader,G__8884);
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.extended.reader.get_line_number.call(null,rdr),(cljs.extended.reader.get_column_number.call(null,rdr) - 1)], null):null);var line = cljs.core.nth.call(null,vec__8883,0,null);var column = cljs.core.nth.call(null,vec__8883,1,null);var m = cljs.extended.reader.desugar_meta.call(null,cljs.extended.reader.read.call(null,rdr,true,null,true));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.extended.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljs.extended.reader.read.call(null,rdr,true,null,true);if((function (){var G__8885 = o;if(G__8885)
{var bit__7021__auto__ = (G__8885.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__7021__auto__) || (G__8885.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__8885.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__8885);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__8885);
}
})())
{var m__$1 = (cljs.core.truth_((function (){var and__6359__auto__ = line;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.seq_QMARK_.call(null,o);
} else
{return and__6359__auto__;
}
})())?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"column","column",3954034376),column):m);return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else
{return cljs.extended.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.extended.reader.UNQUOTE = new cljs.core.Keyword(null,"__thisInternalKeywordRepresentsUnquoteToTheReader__","__thisInternalKeywordRepresentsUnquoteToTheReader__",2893248321);
cljs.extended.reader.UNQUOTE_SPLICING = new cljs.core.Keyword(null,"__thisInternalKeywordRepresentsUnquoteSplicingToTheReader__","__thisInternalKeywordRepresentsUnquoteSplicingToTheReader__",556409224);
cljs.extended.reader._STAR_gensym_env_STAR_ = cljs.core.atom.call(null,null);
cljs.extended.reader._STAR_arg_env_STAR_ = cljs.core.atom.call(null,null);
cljs.extended.reader.isUnquote_QMARK_ = (function isUnquote_QMARK_(form){var and__6359__auto__ = (function (){var G__8889 = form;if(G__8889)
{var bit__7021__auto__ = (G__8889.cljs$lang$protocol_mask$partition0$ & 64);if((bit__7021__auto__) || (G__8889.cljs$core$ISeq$))
{return true;
} else
{if((!G__8889.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__8889);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__8889);
}
})();if(and__6359__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,form),cljs.extended.reader.UNQUOTE);
} else
{return and__6359__auto__;
}
});
cljs.extended.reader.isUnquoteSplicing_QMARK_ = (function isUnquoteSplicing_QMARK_(form){var and__6359__auto__ = (function (){var G__8893 = form;if(G__8893)
{var bit__7021__auto__ = (G__8893.cljs$lang$protocol_mask$partition0$ & 64);if((bit__7021__auto__) || (G__8893.cljs$core$ISeq$))
{return true;
} else
{if((!G__8893.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__8893);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__8893);
}
})();if(and__6359__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,form),cljs.extended.reader.UNQUOTE_SPLICING);
} else
{return and__6359__auto__;
}
});
cljs.extended.reader.sqExpandList = (function sqExpandList(sq){return cljs.core.doall.call(null,(function (){var iter__7088__auto__ = (function iter__8898(s__8899){return (new cljs.core.LazySeq(null,(function (){var s__8899__$1 = s__8899;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8899__$1);if(temp__4092__auto__)
{var s__8899__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8899__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__8899__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__8901 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__8900 = 0;while(true){
if((i__8900 < size__7087__auto__))
{var item = cljs.core._nth.call(null,c__7086__auto__,i__8900);cljs.core.chunk_append.call(null,b__8901,((cljs.extended.reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended.reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended.reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))));
{
var G__8971 = (i__8900 + 1);
i__8900 = G__8971;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8901),iter__8898.call(null,cljs.core.chunk_rest.call(null,s__8899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8901),null);
}
} else
{var item = cljs.core.first.call(null,s__8899__$2);return cljs.core.cons.call(null,((cljs.extended.reader.isUnquote_QMARK_.call(null,item))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):((cljs.extended.reader.isUnquoteSplicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.extended.reader.syntaxQuote.call(null,item)),new cljs.core.Symbol(null,"list","list",-1637209513,null)):null))),iter__8898.call(null,cljs.core.rest.call(null,s__8899__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7088__auto__.call(null,sq);
})());
});
cljs.extended.reader.syntaxQuote = (function syntaxQuote(form){if(cljs.core.truth_(cljs.core.get.call(null,cljs.extended.reader.specials,form)))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((form instanceof cljs.core.Symbol))
{var sym = form;var name = cljs.core.name.call(null,sym);var ns = cljs.core.namespace.call(null,sym);if((cljs.core.not.call(null,ns)) && (cljs.core._EQ_.call(null,"#",cljs.core.last.call(null,name))))
{var new_name = cljs.core.subs.call(null,name,0,(cljs.core.count.call(null,name) - 1));var gmap = cljs.core.deref.call(null,cljs.extended.reader._STAR_gensym_env_STAR_);if(cljs.core.not.call(null,gmap))
{cljs.extended.reader.reader_error.call(null,null,"Gensym literal not in syntax-quote");
} else
{}
var gs = (function (){var or__6371__auto__ = cljs.core.get.call(null,gmap,sym);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.gensym.call(null,[cljs.core.str(new_name),cljs.core.str("__auto__")].join(''));
}
})();cljs.core.swap_BANG_.call(null,cljs.extended.reader._STAR_gensym_env_STAR_,cljs.core.assoc,sym,gs);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,gs),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((cljs.core.not.call(null,ns)) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,name))))
{throw (new Error("Syntax quote with no namespace ending with . not supported"));
} else
{if((cljs.core.not.call(null,ns)) && (cljs.core._EQ_.call(null,".",cljs.core.first.call(null,name))))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,sym),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Syntax quote resolving existing var not supported"));
} else
{return null;
}
}
}
}
} else
{if(cljs.extended.reader.isUnquote_QMARK_.call(null,form))
{return cljs.core.second.call(null,form);
} else
{if(cljs.extended.reader.isUnquoteSplicing_QMARK_.call(null,form))
{throw (new Error("Reader ~@ splice not in list"));
} else
{if((form == null))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((function (){var G__8910 = form;if(G__8910)
{var bit__7021__auto__ = (G__8910.cljs$lang$protocol_mask$partition0$ & 8);if((bit__7021__auto__) || (G__8910.cljs$core$ICollection$))
{return true;
} else
{if((!G__8910.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__8910);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__8910);
}
})())
{if((function (){var G__8911 = form;if(G__8911)
{var bit__7021__auto__ = (G__8911.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__7021__auto__) || (G__8911.cljs$core$IRecord$))
{return true;
} else
{if((!G__8911.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__8911);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__8911);
}
})())
{return form;
} else
{if((function (){var G__8912 = form;if(G__8912)
{var bit__7021__auto__ = (G__8912.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__7021__auto__) || (G__8912.cljs$core$IMap$))
{return true;
} else
{if((!G__8912.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__8912);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__8912);
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended.reader.sqExpandList.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,form))))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null))),new cljs.core.Symbol(null,"hash-map","hash-map",-1493492266,null)),new cljs.core.Symbol(null,"apply","apply",-1547502297,null));
} else
{if((function (){var G__8913 = form;if(G__8913)
{var bit__7021__auto__ = (G__8913.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__7021__auto__) || (G__8913.cljs$core$IVector$))
{return true;
} else
{if((!G__8913.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__8913);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__8913);
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended.reader.sqExpandList.call(null,form))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null))),new cljs.core.Symbol(null,"vector","vector",1834048252,null)),new cljs.core.Symbol(null,"apply","apply",-1547502297,null));
} else
{if((function (){var G__8914 = form;if(G__8914)
{var bit__7021__auto__ = (G__8914.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__7021__auto__) || (G__8914.cljs$core$ISet$))
{return true;
} else
{if((!G__8914.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__8914);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__8914);
}
})())
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended.reader.sqExpandList.call(null,cljs.core.seq.call(null,form)))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null))),new cljs.core.Symbol(null,"hash-set","hash-set",-1493486372,null)),new cljs.core.Symbol(null,"apply","apply",-1547502297,null));
} else
{if((function (){var or__6371__auto__ = (function (){var G__8916 = form;if(G__8916)
{var bit__7021__auto__ = (G__8916.cljs$lang$protocol_mask$partition0$ & 64);if((bit__7021__auto__) || (G__8916.cljs$core$ISeq$))
{return true;
} else
{if((!G__8916.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__8916);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__8916);
}
})();if(or__6371__auto__)
{return or__6371__auto__;
} else
{var G__8917 = form;if(G__8917)
{var bit__7021__auto__ = (G__8917.cljs$lang$protocol_mask$partition0$ & 33554432);if((bit__7021__auto__) || (G__8917.cljs$core$IList$))
{return true;
} else
{if((!G__8917.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__8917);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__8917);
}
}
})())
{var temp__4090__auto__ = cljs.core.seq.call(null,form);if(temp__4090__auto__)
{var sq = temp__4090__auto__;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"concat","concat",1299640525,null),cljs.extended.reader.sqExpandList.call(null,sq))),new cljs.core.Symbol(null,"seq","seq",-1640417768,null));
} else
{return cljs.core.cons.call(null,new cljs.core.Symbol(null,"list","list",-1637209513,null),null);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Unknown Collection type"));
} else
{return null;
}
}
}
}
}
}
} else
{if(((form instanceof cljs.core.Keyword)) || (typeof form === 'number') || (typeof form === 'string'))
{return form;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.extended.reader.read_syntax_quote = (function read_syntax_quote(rdr,_){var _STAR_gensym_env_STAR_8919 = cljs.extended.reader._STAR_gensym_env_STAR_;try{cljs.extended.reader._STAR_gensym_env_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var form = cljs.extended.reader.read.call(null,rdr,true,null,true);return cljs.extended.reader.syntaxQuote.call(null,form);
}finally {cljs.extended.reader._STAR_gensym_env_STAR_ = _STAR_gensym_env_STAR_8919;
}});
cljs.extended.reader.read_unquote = (function read_unquote(rdr,_){var ch = cljs.extended.reader.read_char.call(null,rdr);if(cljs.core._EQ_.call(null,null,ch))
{return cljs.extended.reader.reader_error.call(null,rdr,"EOF while reading unquote character");
} else
{if(cljs.core._EQ_.call(null,"@",ch))
{var o = cljs.extended.reader.read.call(null,rdr,true,null,true);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,o),cljs.extended.reader.UNQUOTE_SPLICING);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cljs.extended.reader.unread.call(null,rdr,ch);
var o = cljs.extended.reader.read.call(null,rdr,true,null,true);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,o),cljs.extended.reader.UNQUOTE);
} else
{return null;
}
}
}
});
cljs.extended.reader.read_character = (function read_character(rdr,_){var ch = cljs.extended.reader.read_char.call(null,rdr);if(cljs.core._EQ_.call(null,null,ch))
{cljs.extended.reader.reader_error.call(null,rdr,"EOF while reading character constant");
} else
{}
var token = cljs.extended.reader.read_token.call(null,rdr,ch);if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,token)))
{return token;
} else
{if(cljs.core._EQ_.call(null,"newline",token))
{return "\n";
} else
{if(cljs.core._EQ_.call(null,"space",token))
{return " ";
} else
{if(cljs.core._EQ_.call(null,"tab",token))
{return "\t";
} else
{if(cljs.core._EQ_.call(null,"backspace",token))
{return "\b";
} else
{if(cljs.core._EQ_.call(null,"formfeed",token))
{return "\f";
} else
{if(cljs.core._EQ_.call(null,"return",token))
{return "\r";
} else
{if(cljs.core._EQ_.call(null,"u",cljs.core.first.call(null,token)))
{var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,token));cljs.extended.reader.validate_unicode_escape.call(null,cljs.extended.reader.unicode_4_pattern,rdr,"u",chars);
var c = cljs.extended.reader.make_unicode_char.call(null,chars,16);var cval = parseInt(chars,16);if(((cval >= 55296)) && ((cval <= 57343)))
{cljs.extended.reader.reader_error.call(null,rdr,"Invalid character constant: \\",token);
} else
{}
return c;
} else
{if(cljs.core._EQ_.call(null,"o",cljs.core.first.call(null,token)))
{var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,token));cljs.extended.reader.validate_unicode_escape.call(null,cljs.extended.reader.octal_pattern,rdr,"o",chars);
var c = cljs.extended.reader.make_unicode_char.call(null,chars,8);var cval = parseInt(chars,8);if((cval > 255))
{cljs.extended.reader.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377].");
} else
{}
return c;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.extended.reader.reader_error.call(null,rdr,"Unsupported character: \\",token);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});
cljs.extended.reader.garg = (function garg(n){var pre = ((cljs.core._EQ_.call(null,n,-1))?"rest":[cljs.core.str("p"),cljs.core.str(n)].join(''));return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.gensym.call(null,pre)),cljs.core.str("#")].join(''));
});
cljs.extended.reader.read_fn = (function read_fn(rdr,_){if(cljs.core.truth_(cljs.core.deref.call(null,cljs.extended.reader._STAR_arg_env_STAR_)))
{cljs.extended.reader.reader_error.call(null,null,"nested #()s are not allowed");
} else
{}
var _STAR_arg_env_STAR_8926 = cljs.extended.reader._STAR_arg_env_STAR_;try{cljs.extended.reader._STAR_arg_env_STAR_ = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
cljs.extended.reader.unread.call(null,rdr,"(");
var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__8927 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos,_STAR_arg_env_STAR_8926){
return (function (){return cljs.extended.reader.read.call(null,rdr,true,null,true);
});})(pos,_STAR_arg_env_STAR_8926))
,"#");var form = cljs.core.nth.call(null,vec__8927,0,null);var source = cljs.core.nth.call(null,vec__8927,1,null);var argsyms = cljs.core.deref.call(null,cljs.extended.reader._STAR_arg_env_STAR_);var rargs = cljs.core.rseq.call(null,argsyms);var highpair = cljs.core.first.call(null,rargs);var higharg = (cljs.core.truth_(highpair)?cljs.core.key.call(null,highpair):0);var args = (((higharg > 0))?cljs.core.doall.call(null,(function (){var iter__7088__auto__ = ((function (pos,vec__8927,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_8926){
return (function iter__8928(s__8929){return (new cljs.core.LazySeq(null,((function (pos,vec__8927,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_8926){
return (function (){var s__8929__$1 = s__8929;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8929__$1);if(temp__4092__auto__)
{var s__8929__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8929__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__8929__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__8931 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__8930 = 0;while(true){
if((i__8930 < size__7087__auto__))
{var i = cljs.core._nth.call(null,c__7086__auto__,i__8930);cljs.core.chunk_append.call(null,b__8931,(function (){var or__6371__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.extended.reader.garg.call(null,i);
}
})());
{
var G__8972 = (i__8930 + 1);
i__8930 = G__8972;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8931),iter__8928.call(null,cljs.core.chunk_rest.call(null,s__8929__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8931),null);
}
} else
{var i = cljs.core.first.call(null,s__8929__$2);return cljs.core.cons.call(null,(function (){var or__6371__auto__ = cljs.core.get.call(null,argsyms,i);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.extended.reader.garg.call(null,i);
}
})(),iter__8928.call(null,cljs.core.rest.call(null,s__8929__$2)));
}
} else
{return null;
}
break;
}
});})(pos,vec__8927,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_8926))
,null,null));
});})(pos,vec__8927,form,source,argsyms,rargs,highpair,higharg,_STAR_arg_env_STAR_8926))
;return iter__7088__auto__.call(null,cljs.core.range.call(null,1,(1 + higharg)));
})()):rargs);var restsym = cljs.core.get.call(null,argsyms,-1);var args__$1 = (cljs.core.truth_(restsym)?cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-1640531489,null),restsym], null)):args);return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,form),cljs.core.vec.call(null,args__$1)),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null)),cljs.extended.reader.prep_meta.call(null,rdr,pos,source));
}finally {cljs.extended.reader._STAR_arg_env_STAR_ = _STAR_arg_env_STAR_8926;
}});
cljs.extended.reader.registerArg = (function registerArg(n){var argsyms = cljs.core.deref.call(null,cljs.extended.reader._STAR_arg_env_STAR_);if(cljs.core.truth_(argsyms))
{} else
{cljs.extended.reader.reader_error.call(null,null,"arg literal not in #()");
}
var ret = cljs.core.get.call(null,argsyms,n);if(cljs.core.truth_(ret))
{return ret;
} else
{var ret__$1 = cljs.extended.reader.garg.call(null,n);cljs.core.swap_BANG_.call(null,cljs.extended.reader._STAR_arg_env_STAR_,cljs.core.assoc,n,ret__$1);
return ret__$1;
}
});
cljs.extended.reader.read_arg = (function read_arg(rdr,pct){if(cljs.core.not.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_arg_env_STAR_)))
{return cljs.extended.reader.read_symbol.call(null,rdr,"%");
} else
{var ch = cljs.extended.reader.peek_char.call(null,rdr);if(((ch == null)) || (cljs.extended.reader.whitespace_QMARK_.call(null,ch)) || (cljs.extended.reader.macro_terminating_QMARK_.call(null,ch)))
{return cljs.extended.reader.registerArg.call(null,1);
} else
{var n = cljs.extended.reader.read.call(null,rdr,true,null,true);if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&","&",-1640531489,null),n))
{return cljs.extended.reader.registerArg.call(null,-1);
} else
{if(!(typeof n === 'number'))
{return cljs.extended.reader.reader_error.call(null,rdr,"arg literal must be %, %& or %integer");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.extended.reader.registerArg.call(null,(n | 0));
} else
{return null;
}
}
}
}
}
});
cljs.extended.reader.read_set = (function read_set(rdr,_){var pos = cljs.extended.reader.maybe_get_pos.call(null,rdr);var vec__8933 = cljs.extended.reader.with_source_log.call(null,rdr,((function (pos){
return (function (){return cljs.extended.reader.read_delimited_list.call(null,"}",rdr,true);
});})(pos))
,"#{");var the_set = cljs.core.nth.call(null,vec__8933,0,null);var source = cljs.core.nth.call(null,vec__8933,1,null);return cljs.core.with_meta.call(null,cljs.core.identity.call(null,the_set),cljs.extended.reader.prep_meta.call(null,rdr,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",3954034376)], null),cljs.core.dec),source));
});
cljs.extended.reader.read_regex = (function read_regex(reader){var buffer = "";var ch = cljs.extended.reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.extended.reader.reader_error.call(null,reader,"EOF while reading regex");
} else
{if(("\\" === ch))
{{
var G__8973 = [cljs.core.str(buffer),cljs.core.str(ch),cljs.core.str(cljs.extended.reader.read_char.call(null,reader))].join('');
var G__8974 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__8973;
ch = G__8974;
continue;
}
} else
{if(("\"" === ch))
{return cljs.core.re_pattern.call(null,buffer);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__8975 = [cljs.core.str(buffer),cljs.core.str(ch)].join('');
var G__8976 = cljs.extended.reader.read_char.call(null,reader);
buffer = G__8975;
ch = G__8976;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.extended.reader.read_discard = (function read_discard(rdr,_){cljs.extended.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.extended.reader.macros = (function macros(c){if((c === "\""))
{return cljs.extended.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.extended.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.extended.reader.read_comment;
} else
{if((c === "'"))
{return cljs.extended.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((c === "@"))
{return cljs.extended.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",-1545057749,null));
} else
{if((c === "^"))
{return cljs.extended.reader.read_meta;
} else
{if((c === "`"))
{return cljs.extended.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.extended.reader.read_unquote;
} else
{if((c === "("))
{return cljs.extended.reader.read_list;
} else
{if((c === ")"))
{return cljs.extended.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.extended.reader.read_vector;
} else
{if((c === "]"))
{return cljs.extended.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.extended.reader.read_map;
} else
{if((c === "}"))
{return cljs.extended.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.extended.reader.read_character;
} else
{if((c === "%"))
{return cljs.extended.reader.read_arg;
} else
{if((c === "#"))
{return cljs.extended.reader.read_dispatch;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.extended.reader.dispatch_macros = (function dispatch_macros(s){if((s === "{"))
{return cljs.extended.reader.read_set;
} else
{if((s === "("))
{return cljs.extended.reader.read_fn;
} else
{if((s === "<"))
{return cljs.extended.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.extended.reader.read_regex;
} else
{if((s === "!"))
{return cljs.extended.reader.read_comment;
} else
{if((s === "_"))
{return cljs.extended.reader.read_discard;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.extended.reader.read = (function() {
var read = null;
var read__1 = (function (reader){return read.call(null,reader,true,null);
});
var read__3 = (function (reader,eof_is_error,sentinel){return read.call(null,reader,eof_is_error,sentinel,false);
});
var read__4 = (function (reader,eof_is_error,sentinel,is_recursive){while(true){
var ch = cljs.extended.reader.read_char.call(null,reader);if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.extended.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.extended.reader.whitespace_QMARK_.call(null,ch))
{{
var G__8977 = reader;
var G__8978 = eof_is_error;
var G__8979 = sentinel;
var G__8980 = is_recursive;
reader = G__8977;
eof_is_error = G__8978;
sentinel = G__8979;
is_recursive = G__8980;
continue;
}
} else
{if(cljs.extended.reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__8981 = cljs.extended.reader.read_comment.call(null,reader,ch);
var G__8982 = eof_is_error;
var G__8983 = sentinel;
var G__8984 = is_recursive;
reader = G__8981;
eof_is_error = G__8982;
sentinel = G__8983;
is_recursive = G__8984;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var f = cljs.extended.reader.macros.call(null,ch);var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.extended.reader.number_literal_QMARK_.call(null,reader,ch))?cljs.extended.reader.read_number.call(null,reader,ch):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.extended.reader.read_symbol.call(null,reader,ch):null)));if((res === reader))
{{
var G__8985 = reader;
var G__8986 = eof_is_error;
var G__8987 = sentinel;
var G__8988 = is_recursive;
reader = G__8985;
eof_is_error = G__8986;
sentinel = G__8987;
is_recursive = G__8988;
continue;
}
} else
{return res;
}
} else
{return null;
}
}
}
}
break;
}
});
read = function(reader,eof_is_error,sentinel,is_recursive){
switch(arguments.length){
case 1:
return read__1.call(this,reader);
case 3:
return read__3.call(this,reader,eof_is_error,sentinel);
case 4:
return read__4.call(this,reader,eof_is_error,sentinel,is_recursive);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
read.cljs$core$IFn$_invoke$arity$1 = read__1;
read.cljs$core$IFn$_invoke$arity$3 = read__3;
read.cljs$core$IFn$_invoke$arity$4 = read__4;
return read;
})()
;
/**
* Reads one object from the string s
*/
cljs.extended.reader.read_string = (function read_string(s){var r = cljs.extended.reader.string_push_back_reader.call(null,s);return cljs.extended.reader.read.call(null,r,true,null,false);
});
/**
* Reads one object indexed from the string s
*/
cljs.extended.reader.read_string_indexed = (function read_string_indexed(s){var r = cljs.extended.reader.indexing_push_back_reader.call(null,s);return cljs.extended.reader.read.call(null,r,true,null,false);
});
/**
* Reads one object indexed and source-logged for the string s (source and bounds only for colls)
*/
cljs.extended.reader.read_string_source_logged = (function read_string_source_logged(s){var r = cljs.extended.reader.source_logging_push_back_reader.call(null,s);return cljs.extended.reader.read.call(null,r,true,null,false);
});
cljs.extended.reader.zero_fill_right = (function zero_fill_right(s,width){if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var b = (new goog.string.StringBuffer(s));while(true){
if((b.getLength() < width))
{{
var G__8989 = b.append("0");
b = G__8989;
continue;
}
} else
{return b.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.extended.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){return (cljs.core.mod.call(null,num,div) === 0);
});
cljs.extended.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){return !(cljs.extended.reader.divisible_QMARK_.call(null,num,div));
});
cljs.extended.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){return (cljs.extended.reader.divisible_QMARK_.call(null,year,4)) && ((cljs.extended.reader.indivisible_QMARK_.call(null,year,100)) || (cljs.extended.reader.divisible_QMARK_.call(null,year,400)));
});
cljs.extended.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,28,31,30,31,30,31,31,30,31,30,31], null);var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,29,31,30,31,30,31,31,30,31,30,31], null);return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.extended.reader.parse_and_validate_timestamp = (function (){var timestamp = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;var check = ((function (timestamp){
return (function (low,n,high,msg){if(((low <= n)) && ((n <= high)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",-1640529606,null),new cljs.core.Symbol(null,"low","low",-1640424179,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),new cljs.core.Symbol(null,"high","high",-1637329061,null))))].join('')));
}
return n;
});})(timestamp))
;return ((function (timestamp,check){
return (function (ts){var temp__4092__auto__ = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp,ts)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__8938 = temp__4092__auto__;var vec__8939 = cljs.core.nth.call(null,vec__8938,0,null);var _ = cljs.core.nth.call(null,vec__8939,0,null);var years = cljs.core.nth.call(null,vec__8939,1,null);var months = cljs.core.nth.call(null,vec__8939,2,null);var days = cljs.core.nth.call(null,vec__8939,3,null);var hours = cljs.core.nth.call(null,vec__8939,4,null);var minutes = cljs.core.nth.call(null,vec__8939,5,null);var seconds = cljs.core.nth.call(null,vec__8939,6,null);var milliseconds = cljs.core.nth.call(null,vec__8939,7,null);var vec__8940 = cljs.core.nth.call(null,vec__8938,1,null);var ___$1 = cljs.core.nth.call(null,vec__8940,0,null);var ___$2 = cljs.core.nth.call(null,vec__8940,1,null);var ___$3 = cljs.core.nth.call(null,vec__8940,2,null);var V = vec__8938;var vec__8941 = cljs.core.map.call(null,((function (vec__8938,vec__8939,_,years,months,days,hours,minutes,seconds,milliseconds,vec__8940,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (v){return cljs.core.map.call(null,((function (vec__8938,vec__8939,_,years,months,days,hours,minutes,seconds,milliseconds,vec__8940,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__8937_SHARP_){return parseInt(p1__8937_SHARP_,10);
});})(vec__8938,vec__8939,_,years,months,days,hours,minutes,seconds,milliseconds,vec__8940,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,v);
});})(vec__8938,vec__8939,_,years,months,days,hours,minutes,seconds,milliseconds,vec__8940,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,cljs.core.map.call(null,((function (vec__8938,vec__8939,_,years,months,days,hours,minutes,seconds,milliseconds,vec__8940,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__8935_SHARP_,p2__8934_SHARP_){return cljs.core.update_in.call(null,p2__8934_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),p1__8935_SHARP_);
});})(vec__8938,vec__8939,_,years,months,days,hours,minutes,seconds,milliseconds,vec__8940,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constantly.call(null,null),((function (vec__8938,vec__8939,_,years,months,days,hours,minutes,seconds,milliseconds,vec__8940,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check){
return (function (p1__8936_SHARP_){if(cljs.core._EQ_.call(null,p1__8936_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
});})(vec__8938,vec__8939,_,years,months,days,hours,minutes,seconds,milliseconds,vec__8940,___$1,___$2,___$3,V,temp__4092__auto__,timestamp,check))
], null),V));var vec__8942 = cljs.core.nth.call(null,vec__8941,0,null);var ___$4 = cljs.core.nth.call(null,vec__8942,0,null);var y = cljs.core.nth.call(null,vec__8942,1,null);var mo = cljs.core.nth.call(null,vec__8942,2,null);var d = cljs.core.nth.call(null,vec__8942,3,null);var h = cljs.core.nth.call(null,vec__8942,4,null);var m = cljs.core.nth.call(null,vec__8942,5,null);var s = cljs.core.nth.call(null,vec__8942,6,null);var ms = cljs.core.nth.call(null,vec__8942,7,null);var vec__8943 = cljs.core.nth.call(null,vec__8941,1,null);var offset_sign = cljs.core.nth.call(null,vec__8943,0,null);var offset_hours = cljs.core.nth.call(null,vec__8943,1,null);var offset_minutes = cljs.core.nth.call(null,vec__8943,2,null);var offset = (offset_sign * ((offset_hours * 60) + offset_minutes));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not.call(null,years))?1970:y),((cljs.core.not.call(null,months))?1:check.call(null,1,mo,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days))?1:check.call(null,1,d,cljs.extended.reader.days_in_month.call(null,mo,cljs.extended.reader.leap_year_QMARK_.call(null,y)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours))?0:check.call(null,0,h,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes))?0:check.call(null,0,m,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds))?0:check.call(null,0,s,((cljs.core._EQ_.call(null,m,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds))?0:check.call(null,0,ms,999,"timestamp millisecond field must be in range 0..999")),offset], null);
} else
{return null;
}
});
;})(timestamp,check))
})();
cljs.extended.reader.parse_timestamp = (function parse_timestamp(ts){var temp__4090__auto__ = cljs.extended.reader.parse_and_validate_timestamp.call(null,ts);if(cljs.core.truth_(temp__4090__auto__))
{var vec__8945 = temp__4090__auto__;var years = cljs.core.nth.call(null,vec__8945,0,null);var months = cljs.core.nth.call(null,vec__8945,1,null);var days = cljs.core.nth.call(null,vec__8945,2,null);var hours = cljs.core.nth.call(null,vec__8945,3,null);var minutes = cljs.core.nth.call(null,vec__8945,4,null);var seconds = cljs.core.nth.call(null,vec__8945,5,null);var ms = cljs.core.nth.call(null,vec__8945,6,null);var offset = cljs.core.nth.call(null,vec__8945,7,null);return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
} else
{return cljs.extended.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.extended.reader.read_date = (function read_date(s){if(typeof s === 'string')
{return cljs.extended.reader.parse_timestamp.call(null,s);
} else
{return cljs.extended.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.extended.reader.read_queue = (function read_queue(elems){if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,(new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0)),elems);
} else
{return cljs.extended.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.extended.reader.read_uuid = (function read_uuid(uuid){if(typeof uuid === 'string')
{return (new cljs.core.UUID(uuid));
} else
{return cljs.extended.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.extended.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, ["inst",cljs.extended.reader.read_date,"uuid",cljs.extended.reader.read_uuid,"queue",cljs.extended.reader.read_queue], null));
cljs.extended.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){var tag = cljs.extended.reader.read_symbol.call(null,rdr,initch);var temp__4090__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag));if(cljs.core.truth_(temp__4090__auto__))
{var pfn = temp__4090__auto__;return pfn.call(null,cljs.extended.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.extended.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_tag_table_STAR_))));
}
});
cljs.extended.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){var tag__$1 = cljs.core.name.call(null,tag);var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.extended.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.extended.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){var tag__$1 = cljs.core.name.call(null,tag);var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.extended.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.extended.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.protocols')) {
goog.provide('rewrite_clj.node.protocols');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
rewrite_clj.node.protocols.Node = (function (){var obj8798 = {};return obj8798;
})();
rewrite_clj.node.protocols.tag = (function tag(_){if((function (){var and__6359__auto__ = _;if(and__6359__auto__)
{return _.rewrite_clj$node$protocols$Node$tag$arity$1;
} else
{return and__6359__auto__;
}
})())
{return _.rewrite_clj$node$protocols$Node$tag$arity$1(_);
} else
{var x__6998__auto__ = (((_ == null))?null:_);return (function (){var or__6371__auto__ = (rewrite_clj.node.protocols.tag[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (rewrite_clj.node.protocols.tag["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Node.tag",_);
}
}
})().call(null,_);
}
});
rewrite_clj.node.protocols.printable_only_QMARK_ = (function printable_only_QMARK_(_){if((function (){var and__6359__auto__ = _;if(and__6359__auto__)
{return _.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1;
} else
{return and__6359__auto__;
}
})())
{return _.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1(_);
} else
{var x__6998__auto__ = (((_ == null))?null:_);return (function (){var or__6371__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (rewrite_clj.node.protocols.printable_only_QMARK_["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Node.printable-only?",_);
}
}
})().call(null,_);
}
});
rewrite_clj.node.protocols.sexpr = (function sexpr(_){if((function (){var and__6359__auto__ = _;if(and__6359__auto__)
{return _.rewrite_clj$node$protocols$Node$sexpr$arity$1;
} else
{return and__6359__auto__;
}
})())
{return _.rewrite_clj$node$protocols$Node$sexpr$arity$1(_);
} else
{var x__6998__auto__ = (((_ == null))?null:_);return (function (){var or__6371__auto__ = (rewrite_clj.node.protocols.sexpr[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (rewrite_clj.node.protocols.sexpr["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Node.sexpr",_);
}
}
})().call(null,_);
}
});
rewrite_clj.node.protocols.length = (function length(_){if((function (){var and__6359__auto__ = _;if(and__6359__auto__)
{return _.rewrite_clj$node$protocols$Node$length$arity$1;
} else
{return and__6359__auto__;
}
})())
{return _.rewrite_clj$node$protocols$Node$length$arity$1(_);
} else
{var x__6998__auto__ = (((_ == null))?null:_);return (function (){var or__6371__auto__ = (rewrite_clj.node.protocols.length[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (rewrite_clj.node.protocols.length["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Node.length",_);
}
}
})().call(null,_);
}
});
rewrite_clj.node.protocols.string = (function string(_){if((function (){var and__6359__auto__ = _;if(and__6359__auto__)
{return _.rewrite_clj$node$protocols$Node$string$arity$1;
} else
{return and__6359__auto__;
}
})())
{return _.rewrite_clj$node$protocols$Node$string$arity$1(_);
} else
{var x__6998__auto__ = (((_ == null))?null:_);return (function (){var or__6371__auto__ = (rewrite_clj.node.protocols.string[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (rewrite_clj.node.protocols.string["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Node.string",_);
}
}
})().call(null,_);
}
});
(rewrite_clj.node.protocols.Node["object"] = true);
(rewrite_clj.node.protocols.tag["object"] = (function (_){return new cljs.core.Keyword(null,"unknown","unknown",729063356);
}));
(rewrite_clj.node.protocols.printable_only_QMARK_["object"] = (function (_){return false;
}));
(rewrite_clj.node.protocols.sexpr["object"] = (function (this$){return this$;
}));
(rewrite_clj.node.protocols.length["object"] = (function (this$){return cljs.core.count.call(null,rewrite_clj.node.protocols.string.call(null,this$));
}));
(rewrite_clj.node.protocols.string["object"] = (function (this$){return cljs.core.pr_str.call(null,this$);
}));
/**
* Given a seq of nodes, convert those that represent s-expressions
* to the respective forms.
*/
rewrite_clj.node.protocols.sexprs = (function sexprs(nodes){return cljs.core.map.call(null,rewrite_clj.node.protocols.sexpr,cljs.core.remove.call(null,rewrite_clj.node.protocols.printable_only_QMARK_,nodes));
});
/**
* Sum up lengths of the given nodes.
*/
rewrite_clj.node.protocols.sum_lengths = (function sum_lengths(nodes){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,rewrite_clj.node.protocols.length,nodes));
});
/**
* Convert nodes to strings and concatenate them.
*/
rewrite_clj.node.protocols.concat_strings = (function concat_strings(nodes){return cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,rewrite_clj.node.protocols.string,nodes));
});
rewrite_clj.node.protocols.InnerNode = (function (){var obj8800 = {};return obj8800;
})();
rewrite_clj.node.protocols.inner_QMARK_ = (function inner_QMARK_(_){if((function (){var and__6359__auto__ = _;if(and__6359__auto__)
{return _.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1;
} else
{return and__6359__auto__;
}
})())
{return _.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1(_);
} else
{var x__6998__auto__ = (((_ == null))?null:_);return (function (){var or__6371__auto__ = (rewrite_clj.node.protocols.inner_QMARK_[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (rewrite_clj.node.protocols.inner_QMARK_["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InnerNode.inner?",_);
}
}
})().call(null,_);
}
});
rewrite_clj.node.protocols.children = (function children(_){if((function (){var and__6359__auto__ = _;if(and__6359__auto__)
{return _.rewrite_clj$node$protocols$InnerNode$children$arity$1;
} else
{return and__6359__auto__;
}
})())
{return _.rewrite_clj$node$protocols$InnerNode$children$arity$1(_);
} else
{var x__6998__auto__ = (((_ == null))?null:_);return (function (){var or__6371__auto__ = (rewrite_clj.node.protocols.children[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (rewrite_clj.node.protocols.children["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InnerNode.children",_);
}
}
})().call(null,_);
}
});
rewrite_clj.node.protocols.replace_children = (function replace_children(_,children){if((function (){var and__6359__auto__ = _;if(and__6359__auto__)
{return _.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2;
} else
{return and__6359__auto__;
}
})())
{return _.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2(_,children);
} else
{var x__6998__auto__ = (((_ == null))?null:_);return (function (){var or__6371__auto__ = (rewrite_clj.node.protocols.replace_children[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (rewrite_clj.node.protocols.replace_children["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"InnerNode.replace-children",_);
}
}
})().call(null,_,children);
}
});
(rewrite_clj.node.protocols.InnerNode["object"] = true);
(rewrite_clj.node.protocols.inner_QMARK_["object"] = (function (_){return false;
}));
(rewrite_clj.node.protocols.children["object"] = (function (_){throw (new Error("UnsupportedOperationException"));
}));
(rewrite_clj.node.protocols.replace_children["object"] = (function (_,___$1){throw (new Error("UnsupportedOperationException"));
}));
/**
* Get all child s-expressions for the given node.
*/
rewrite_clj.node.protocols.child_sexprs = (function child_sexprs(node){if(cljs.core.truth_(rewrite_clj.node.protocols.inner_QMARK_.call(null,node)))
{return rewrite_clj.node.protocols.sexprs.call(null,rewrite_clj.node.protocols.children.call(null,node));
} else
{return null;
}
});
rewrite_clj.node.protocols.NodeCoerceable = (function (){var obj8802 = {};return obj8802;
})();
rewrite_clj.node.protocols.coerce = (function coerce(_){if((function (){var and__6359__auto__ = _;if(and__6359__auto__)
{return _.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1;
} else
{return and__6359__auto__;
}
})())
{return _.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1(_);
} else
{var x__6998__auto__ = (((_ == null))?null:_);return (function (){var or__6371__auto__ = (rewrite_clj.node.protocols.coerce[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (rewrite_clj.node.protocols.coerce["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"NodeCoerceable.coerce",_);
}
}
})().call(null,_);
}
});
rewrite_clj.node.protocols.assert_sexpr_count = (function assert_sexpr_count(nodes,c){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.remove.call(null,rewrite_clj.node.protocols.printable_only_QMARK_,nodes)),c))
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("can only contain"),cljs.core.str(c),cljs.core.str(" non-whitespace form(s).")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1719824957,null),new cljs.core.Symbol(null,"printable-only?","printable-only?",1939999750,null),new cljs.core.Symbol(null,"nodes","nodes",-1535538070,null))),new cljs.core.Symbol(null,"c","c",-1640531428,null))))].join('')));
}
});
rewrite_clj.node.protocols.assert_single_sexpr = (function assert_single_sexpr(nodes){return rewrite_clj.node.protocols.assert_sexpr_count.call(null,nodes,1);
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.reader')) {
goog.provide('rewrite_clj.reader');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');
goog.require('goog.string');
goog.require('goog.string');
goog.require('cljs.extended.reader');
goog.require('cljs.extended.reader');
/**
* Throw reader exception, including line/column.
* @param {...*} var_args
*/
rewrite_clj.reader.throw_reader = (function() { 
var throw_reader__delegate = function (reader,fmt,data){var c = cljs.extended.reader.get_column_number.call(null,reader);var l = cljs.extended.reader.get_line_number.call(null,reader);throw (new Error([cljs.core.str(data),cljs.core.str(fmt),cljs.core.str(" [at line "),cljs.core.str(l),cljs.core.str(", column "),cljs.core.str(c),cljs.core.str("]")].join('')));
};
var throw_reader = function (reader,fmt,var_args){
var data = null;if (arguments.length > 2) {
  data = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return throw_reader__delegate.call(this,reader,fmt,data);};
throw_reader.cljs$lang$maxFixedArity = 2;
throw_reader.cljs$lang$applyTo = (function (arglist__8785){
var reader = cljs.core.first(arglist__8785);
arglist__8785 = cljs.core.next(arglist__8785);
var fmt = cljs.core.first(arglist__8785);
var data = cljs.core.rest(arglist__8785);
return throw_reader__delegate(reader,fmt,data);
});
throw_reader.cljs$core$IFn$_invoke$arity$variadic = throw_reader__delegate;
return throw_reader;
})()
;
rewrite_clj.reader.boundary_QMARK_ = (function boundary_QMARK_(c){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [null,null,"@",null,"`",null,"\"",null,"'",null,"(",null,")",null,":",null,";",null,"[",null,"{",null,"\\",null,"]",null,"}",null,"^",null,"~",null], null), null),c);
});
rewrite_clj.reader.whitespace_QMARK_ = (function whitespace_QMARK_(c){var and__6359__auto__ = c;if(cljs.core.truth_(and__6359__auto__))
{return (cljs.extended.reader.whitespace_QMARK_.call(null,c)) || (cljs.core._EQ_.call(null,c,","));
} else
{return and__6359__auto__;
}
});
rewrite_clj.reader.linebreak_QMARK_ = (function linebreak_QMARK_(c){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null),c);
});
rewrite_clj.reader.space_QMARK_ = (function space_QMARK_(c){var and__6359__auto__ = rewrite_clj.reader.whitespace_QMARK_.call(null,c);if(cljs.core.truth_(and__6359__auto__))
{return !(rewrite_clj.reader.linebreak_QMARK_.call(null,c));
} else
{return and__6359__auto__;
}
});
rewrite_clj.reader.whitespace_or_boundary_QMARK_ = (function whitespace_or_boundary_QMARK_(c){var or__6371__auto__ = rewrite_clj.reader.whitespace_QMARK_.call(null,c);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return rewrite_clj.reader.boundary_QMARK_.call(null,c);
}
});
/**
* Read while the chars fulfill the given condition. Ignores
* the unmatching char.
* @param {...*} var_args
*/
rewrite_clj.reader.read_while = (function() { 
var read_while__delegate = function (reader,p_QMARK_,p__8771){var vec__8773 = p__8771;var eof_QMARK_ = cljs.core.nth.call(null,vec__8773,0,null);var buf = (new goog.string.StringBuffer(""));var eof_QMARK___$1 = (((eof_QMARK_ == null))?cljs.core.not.call(null,p_QMARK_.call(null,null)):eof_QMARK_);while(true){
var temp__4090__auto__ = cljs.extended.reader.read_char.call(null,reader);if(cljs.core.truth_(temp__4090__auto__))
{var c = temp__4090__auto__;if(cljs.core.truth_(p_QMARK_.call(null,c)))
{buf.append(c);
{
continue;
}
} else
{cljs.extended.reader.unread.call(null,reader,c);
return buf.toString();
}
} else
{if(cljs.core.truth_(eof_QMARK___$1))
{return buf.toString();
} else
{return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF.");
}
}
break;
}
};
var read_while = function (reader,p_QMARK_,var_args){
var p__8771 = null;if (arguments.length > 2) {
  p__8771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return read_while__delegate.call(this,reader,p_QMARK_,p__8771);};
read_while.cljs$lang$maxFixedArity = 2;
read_while.cljs$lang$applyTo = (function (arglist__8786){
var reader = cljs.core.first(arglist__8786);
arglist__8786 = cljs.core.next(arglist__8786);
var p_QMARK_ = cljs.core.first(arglist__8786);
var p__8771 = cljs.core.rest(arglist__8786);
return read_while__delegate(reader,p_QMARK_,p__8771);
});
read_while.cljs$core$IFn$_invoke$arity$variadic = read_while__delegate;
return read_while;
})()
;
/**
* Read until a char fulfills the given condition. Ignores the
* matching char.
*/
rewrite_clj.reader.read_until = (function read_until(reader,p_QMARK_){return rewrite_clj.reader.read_while.call(null,reader,cljs.core.complement.call(null,p_QMARK_),p_QMARK_.call(null,null));
});
/**
* Read until linebreak and include it.
*/
rewrite_clj.reader.read_include_linebreak = (function read_include_linebreak(reader){return [cljs.core.str(rewrite_clj.reader.read_until.call(null,reader,(function (p1__8774_SHARP_){return ((p1__8774_SHARP_ == null)) || (rewrite_clj.reader.linebreak_QMARK_.call(null,p1__8774_SHARP_));
}))),cljs.core.str(cljs.extended.reader.read_char.call(null,reader))].join('');
});
/**
* Convert string to EDN value.
*/
rewrite_clj.reader.string__GT_edn = (function string__GT_edn(s){return cljs.extended.reader.read_string.call(null,s);
});
/**
* Ignore the next character.
*/
rewrite_clj.reader.ignore = (function ignore(reader){cljs.extended.reader.read_char.call(null,reader);
return null;
});
/**
* Read next char.
*/
rewrite_clj.reader.next = (function next(reader){return cljs.extended.reader.read_char.call(null,reader);
});
/**
* Peek next char.
*/
rewrite_clj.reader.peek = (function peek(reader){return cljs.extended.reader.peek_char.call(null,reader);
});
/**
* Use the given function to read value, then attach row/col metadata.
*/
rewrite_clj.reader.read_with_meta = (function read_with_meta(reader,read_fn){var row = cljs.extended.reader.get_line_number.call(null,reader);var col = cljs.extended.reader.get_column_number.call(null,reader);var entry = read_fn.call(null,reader);if(cljs.core.truth_(entry))
{var end_row = cljs.extended.reader.get_line_number.call(null,reader);var end_col = cljs.extended.reader.get_column_number.call(null,reader);var end_col__$1 = ((cljs.core._EQ_.call(null,0,end_col))?(col + cljs.core.count.call(null,rewrite_clj.node.protocols.string.call(null,entry))):end_col);if(cljs.core._EQ_.call(null,0,col))
{return entry;
} else
{return cljs.core.with_meta.call(null,entry,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",1014017356),row,new cljs.core.Keyword(null,"col","col",1014002930),col,new cljs.core.Keyword(null,"end-row","end-row",3700475226),end_row,new cljs.core.Keyword(null,"end-col","end-col",3700460800),end_col__$1], null));
}
} else
{return null;
}
});
/**
* Call the given function on the given reader until it returns
* a non-truthy value.
*/
rewrite_clj.reader.read_repeatedly = (function read_repeatedly(reader,read_fn){return cljs.core.doall.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,(function (){return read_fn.call(null,reader);
}))));
});
/**
* Call the given function on the given reader until `n` values matching `p?` have been
* collected.
*/
rewrite_clj.reader.read_n = (function read_n(reader,node_tag,read_fn,p_QMARK_,n){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"n","n",-1640531417,null))))].join('')));
}
var c = 0;var vs = cljs.core.PersistentVector.EMPTY;while(true){
if((c < n))
{var temp__4090__auto__ = read_fn.call(null,reader);if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;{
var G__8787 = (cljs.core.truth_(p_QMARK_.call(null,v))?(c + 1):c);
var G__8788 = cljs.core.conj.call(null,vs,v);
c = G__8787;
vs = G__8788;
continue;
}
} else
{return rewrite_clj.reader.throw_reader.call(null,reader,"%s node expects %d value%s.",node_tag,n,((cljs.core._EQ_.call(null,n,1))?"":"s"));
}
} else
{return vs;
}
break;
}
});
/**
* Create reader for strings.
*/
rewrite_clj.reader.string_reader = (function string_reader(s){return cljs.extended.reader.indexing_push_back_reader.call(null,s);
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.stringz')) {
goog.provide('rewrite_clj.node.stringz');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.node.stringz.wrap_string = (function wrap_string(v){return [cljs.core.str("\""),cljs.core.str(v),cljs.core.str("\"")].join('');
});
rewrite_clj.node.stringz.join_lines = (function join_lines(lines){return clojure.string.join.call(null,"\n",lines);
});

/**
* @constructor
* @param {*} lines
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.stringz.StringNode = (function (lines,__meta,__extmap){
this.lines = lines;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.next.call(null,self__.lines))
{return new cljs.core.Keyword(null,"multi-line","multi-line",2217102202);
} else
{return new cljs.core.Keyword(null,"token","token",1124445547);
}
});
rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return rewrite_clj.node.stringz.join_lines.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,rewrite_clj.reader.string__GT_edn,rewrite_clj.node.stringz.wrap_string),self__.lines));
});
rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (2 + cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,self__.lines)));
});
rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return rewrite_clj.node.stringz.wrap_string.call(null,rewrite_clj.node.stringz.join_lines.call(null,self__.lines));
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9053,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9053,new cljs.core.Keyword(null,"lines","lines",1116881521)))
{return self__.lines;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9053,else__6960__auto__);
} else
{return null;
}
}
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9052){var self__ = this;
var this__6964__auto____$1 = this;var pred__9055 = cljs.core.keyword_identical_QMARK_;var expr__9056 = k__6965__auto__;if(cljs.core.truth_(pred__9055.call(null,new cljs.core.Keyword(null,"lines","lines",1116881521),expr__9056)))
{return (new rewrite_clj.node.stringz.StringNode(G__9052,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9052),null));
}
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.stringz.StringNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",1116881521),self__.lines],null))], null),self__.__extmap));
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.stringz.StringNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",1116881521),self__.lines],null))], null),self__.__extmap));
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9052){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.stringz.StringNode(self__.lines,G__9052,self__.__extmap,self__.__hash));
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",1116881521),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.stringz.StringNode.cljs$lang$type = true;
rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.stringz/StringNode");
});
rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.stringz/StringNode");
});
rewrite_clj.node.stringz.__GT_StringNode = (function __GT_StringNode(lines){return (new rewrite_clj.node.stringz.StringNode(lines));
});
rewrite_clj.node.stringz.map__GT_StringNode = (function map__GT_StringNode(G__9054){return (new rewrite_clj.node.stringz.StringNode(new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(G__9054),null,cljs.core.dissoc.call(null,G__9054,new cljs.core.Keyword(null,"lines","lines",1116881521))));
});
/**
* Create node representing a string value.
* Takes either a seq of strings or a single one.
*/
rewrite_clj.node.stringz.string_node = (function string_node(lines){if(typeof lines === 'string')
{return rewrite_clj.node.stringz.__GT_StringNode.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lines], null));
} else
{return rewrite_clj.node.stringz.__GT_StringNode.call(null,lines);
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.token')) {
goog.provide('rewrite_clj.node.token');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
* @param {*} value
* @param {*} string_value
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.token.TokenNode = (function (value,string_value,__meta,__extmap){
this.value = value;
this.string_value = string_value;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.token.TokenNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"token","token",1124445547);
});
rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.count.call(null,self__.string_value);
});
rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.string_value;
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9305,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9305,new cljs.core.Keyword(null,"value","value",1125876963)))
{return self__.value;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9305,new cljs.core.Keyword(null,"string-value","string-value",4303153191)))
{return self__.string_value;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9305,else__6960__auto__);
} else
{return null;
}
}
}
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9304){var self__ = this;
var this__6964__auto____$1 = this;var pred__9307 = cljs.core.keyword_identical_QMARK_;var expr__9308 = k__6965__auto__;if(cljs.core.truth_(pred__9307.call(null,new cljs.core.Keyword(null,"value","value",1125876963),expr__9308)))
{return (new rewrite_clj.node.token.TokenNode(G__9304,self__.string_value,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9307.call(null,new cljs.core.Keyword(null,"string-value","string-value",4303153191),expr__9308)))
{return (new rewrite_clj.node.token.TokenNode(self__.value,G__9304,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9304),null));
}
}
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.token.TokenNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",4303153191),self__.string_value],null))], null),self__.__extmap));
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.token.TokenNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",4303153191),self__.string_value],null))], null),self__.__extmap));
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9304){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,G__9304,self__.__extmap,self__.__hash));
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-value","string-value",4303153191),null,new cljs.core.Keyword(null,"value","value",1125876963),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.token.TokenNode.cljs$lang$type = true;
rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.token/TokenNode");
});
rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.token/TokenNode");
});
rewrite_clj.node.token.__GT_TokenNode = (function __GT_TokenNode(value,string_value){return (new rewrite_clj.node.token.TokenNode(value,string_value));
});
rewrite_clj.node.token.map__GT_TokenNode = (function map__GT_TokenNode(G__9306){return (new rewrite_clj.node.token.TokenNode(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__9306),new cljs.core.Keyword(null,"string-value","string-value",4303153191).cljs$core$IFn$_invoke$arity$1(G__9306),null,cljs.core.dissoc.call(null,G__9306,new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"string-value","string-value",4303153191))));
});
/**
* Create node for an unspecified EDN token.
* @param {...*} var_args
*/
rewrite_clj.node.token.token_node = (function() { 
var token_node__delegate = function (value,p__9310){var vec__9312 = p__9310;var string_value = cljs.core.nth.call(null,vec__9312,0,null);return rewrite_clj.node.token.__GT_TokenNode.call(null,value,(function (){var or__6371__auto__ = string_value;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.pr_str.call(null,value);
}
})());
};
var token_node = function (value,var_args){
var p__9310 = null;if (arguments.length > 1) {
  p__9310 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return token_node__delegate.call(this,value,p__9310);};
token_node.cljs$lang$maxFixedArity = 1;
token_node.cljs$lang$applyTo = (function (arglist__9323){
var value = cljs.core.first(arglist__9323);
var p__9310 = cljs.core.rest(arglist__9323);
return token_node__delegate(value,p__9310);
});
token_node.cljs$core$IFn$_invoke$arity$variadic = token_node__delegate;
return token_node;
})()
;
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.whitespace')) {
goog.provide('rewrite_clj.node.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');
/**
* This function is applied to every newline string.
*/
rewrite_clj.node.whitespace._STAR_newline_fn_STAR_ = cljs.core.identity;
/**
* This function is applied to every newline string and should produce
* the eventual character count.
*/
rewrite_clj.node.whitespace._STAR_count_fn_STAR_ = cljs.core.count;

/**
* @constructor
* @param {*} whitespace
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.whitespace.WhitespaceNode = (function (whitespace,__meta,__extmap){
this.whitespace = whitespace;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"whitespace","whitespace",1290815983);
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;throw (new Error("Unsupported operation"));
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.count.call(null,self__.whitespace);
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.whitespace;
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9280,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9280,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return self__.whitespace;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9280,else__6960__auto__);
} else
{return null;
}
}
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9279){var self__ = this;
var this__6964__auto____$1 = this;var pred__9282 = cljs.core.keyword_identical_QMARK_;var expr__9283 = k__6965__auto__;if(cljs.core.truth_(pred__9282.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983),expr__9283)))
{return (new rewrite_clj.node.whitespace.WhitespaceNode(G__9279,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9279),null));
}
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.whitespace.WhitespaceNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",1290815983),self__.whitespace],null))], null),self__.__extmap));
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",1290815983),self__.whitespace],null))], null),self__.__extmap));
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9279){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,G__9279,self__.__extmap,self__.__hash));
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whitespace","whitespace",1290815983),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$type = true;
rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.whitespace/WhitespaceNode");
});
rewrite_clj.node.whitespace.WhitespaceNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.whitespace/WhitespaceNode");
});
rewrite_clj.node.whitespace.__GT_WhitespaceNode = (function __GT_WhitespaceNode(whitespace){return (new rewrite_clj.node.whitespace.WhitespaceNode(whitespace));
});
rewrite_clj.node.whitespace.map__GT_WhitespaceNode = (function map__GT_WhitespaceNode(G__9281){return (new rewrite_clj.node.whitespace.WhitespaceNode(new cljs.core.Keyword(null,"whitespace","whitespace",1290815983).cljs$core$IFn$_invoke$arity$1(G__9281),null,cljs.core.dissoc.call(null,G__9281,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))));
});

/**
* @constructor
* @param {*} newlines
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.whitespace.NewlineNode = (function (newlines,__meta,__extmap){
this.newlines = newlines;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"newline","newline",2859826438);
});
rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;throw (new Error("Unsupported operation"));
});
rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return rewrite_clj.node.whitespace._STAR_count_fn_STAR_.call(null,self__.newlines);
});
rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return rewrite_clj.node.whitespace._STAR_newline_fn_STAR_.call(null,self__.newlines);
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9286,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9286,new cljs.core.Keyword(null,"newlines","newlines",2402917585)))
{return self__.newlines;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9286,else__6960__auto__);
} else
{return null;
}
}
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9285){var self__ = this;
var this__6964__auto____$1 = this;var pred__9288 = cljs.core.keyword_identical_QMARK_;var expr__9289 = k__6965__auto__;if(cljs.core.truth_(pred__9288.call(null,new cljs.core.Keyword(null,"newlines","newlines",2402917585),expr__9289)))
{return (new rewrite_clj.node.whitespace.NewlineNode(G__9285,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9285),null));
}
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.whitespace.NewlineNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",2402917585),self__.newlines],null))], null),self__.__extmap));
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.whitespace.NewlineNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",2402917585),self__.newlines],null))], null),self__.__extmap));
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9285){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,G__9285,self__.__extmap,self__.__hash));
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.whitespace.NewlineNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"newlines","newlines",2402917585),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.whitespace.NewlineNode.cljs$lang$type = true;
rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.whitespace/NewlineNode");
});
rewrite_clj.node.whitespace.NewlineNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.whitespace/NewlineNode");
});
rewrite_clj.node.whitespace.__GT_NewlineNode = (function __GT_NewlineNode(newlines){return (new rewrite_clj.node.whitespace.NewlineNode(newlines));
});
rewrite_clj.node.whitespace.map__GT_NewlineNode = (function map__GT_NewlineNode(G__9287){return (new rewrite_clj.node.whitespace.NewlineNode(new cljs.core.Keyword(null,"newlines","newlines",2402917585).cljs$core$IFn$_invoke$arity$1(G__9287),null,cljs.core.dissoc.call(null,G__9287,new cljs.core.Keyword(null,"newlines","newlines",2402917585))));
});
/**
* Create whitespace node.
*/
rewrite_clj.node.whitespace.whitespace_node = (function whitespace_node(s){return rewrite_clj.node.whitespace.__GT_WhitespaceNode.call(null,s);
});
/**
* Create newline node.
*/
rewrite_clj.node.whitespace.newline_node = (function newline_node(s){return rewrite_clj.node.whitespace.__GT_NewlineNode.call(null,s);
});
/**
* Check whether a character represents a linebreak.
*/
rewrite_clj.node.whitespace.newline_QMARK_ = (function newline_QMARK_(c){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null),c);
});
/**
* Convert a string of whitespace to whitespace/newline nodes.
*/
rewrite_clj.node.whitespace.whitespace_nodes = (function whitespace_nodes(s){return cljs.core.map.call(null,(function (char_seq){var s__$1 = cljs.core.apply.call(null,cljs.core.str,char_seq);if(rewrite_clj.node.whitespace.newline_QMARK_.call(null,cljs.core.first.call(null,char_seq)))
{return rewrite_clj.node.whitespace.newline_node.call(null,s__$1);
} else
{return rewrite_clj.node.whitespace.whitespace_node.call(null,s__$1);
}
}),cljs.core.partition_by.call(null,rewrite_clj.node.whitespace.newline_QMARK_,s));
});
/**
* Create node representing the given number of spaces.
*/
rewrite_clj.node.whitespace.spaces = (function spaces(n){return rewrite_clj.node.whitespace.whitespace_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n," ")));
});
/**
* Create node representing the given number of newline characters.
*/
rewrite_clj.node.whitespace.newlines = (function newlines(n){cljs.core.println.call(null,"creating newlines");
return rewrite_clj.node.whitespace.newline_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"\n")));
});
var comma_9301 = rewrite_clj.node.whitespace.whitespace_node.call(null,", ");/**
* Interleave the given seq of nodes with `", "` nodes.
*/
rewrite_clj.node.whitespace.comma_separated = ((function (comma_9301){
return (function comma_separated(nodes){return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,comma_9301)));
});})(comma_9301))
;
var nl_9302 = rewrite_clj.node.whitespace.newline_node.call(null,"\n");/**
* Interleave the given seq of nodes with newline nodes.
*/
rewrite_clj.node.whitespace.line_separated = ((function (nl_9302){
return (function line_separated(nodes){return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,nl_9302)));
});})(nl_9302))
;
var space_9303 = rewrite_clj.node.whitespace.whitespace_node.call(null," ");/**
* Interleave the given seq of nodes with `" "` nodes.
*/
rewrite_clj.node.whitespace.space_separated = ((function (space_9303){
return (function space_separated(nodes){return cljs.core.butlast.call(null,cljs.core.interleave.call(null,nodes,cljs.core.repeat.call(null,space_9303)));
});})(space_9303))
;
/**
* Check whether a node represents whitespace.
*/
rewrite_clj.node.whitespace.whitespace_QMARK_ = (function whitespace_QMARK_(node){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"newline","newline",2859826438),null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983),null], null), null),rewrite_clj.node.protocols.tag.call(null,node));
});
/**
* Check whether a ndoe represents linebreaks.
*/
rewrite_clj.node.whitespace.linebreak_QMARK_ = (function linebreak_QMARK_(node){return cljs.core._EQ_.call(null,rewrite_clj.node.protocols.tag.call(null,node),new cljs.core.Keyword(null,"newline","newline",2859826438));
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.meta')) {
goog.provide('rewrite_clj.node.meta');
goog.require('cljs.core');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
* @param {*} tag
* @param {*} prefix
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.meta.MetaNode = (function (tag,prefix,children,__meta,__extmap){
this.tag = tag;
this.prefix = prefix;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.tag;
});
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var vec__9264 = rewrite_clj.node.protocols.sexprs.call(null,self__.children);var mta = cljs.core.nth.call(null,vec__9264,0,null);var data = cljs.core.nth.call(null,vec__9264,1,null);if((function (){var G__9265 = data;if(G__9265)
{var bit__7021__auto__ = (G__9265.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__7021__auto__) || (G__9265.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__9265.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__9265);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__9265);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cannot attach metadata to: "),cljs.core.str(cljs.core.pr_str.call(null,data))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-1317016307,null),new cljs.core.Symbol(null,"data","data",-1637455517,null))))].join('')));
}
return cljs.core.with_meta.call(null,data,((cljs.core.map_QMARK_.call(null,mta))?mta:new cljs.core.PersistentArrayMap.fromArray([mta,true], true, false)));
});
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.count.call(null,self__.prefix) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return [cljs.core.str(self__.prefix),cljs.core.str(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9262,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9262,new cljs.core.Keyword(null,"tag","tag",1014018828)))
{return self__.tag;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9262,new cljs.core.Keyword(null,"prefix","prefix",4328760836)))
{return self__.prefix;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9262,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9262,else__6960__auto__);
} else
{return null;
}
}
}
}
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9261){var self__ = this;
var this__6964__auto____$1 = this;var pred__9266 = cljs.core.keyword_identical_QMARK_;var expr__9267 = k__6965__auto__;if(cljs.core.truth_(pred__9266.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828),expr__9267)))
{return (new rewrite_clj.node.meta.MetaNode(G__9261,self__.prefix,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9266.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),expr__9267)))
{return (new rewrite_clj.node.meta.MetaNode(self__.tag,G__9261,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9266.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__9267)))
{return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,G__9261,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9261),null));
}
}
}
});
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$ = true;
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.children;
});
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){var self__ = this;
var this$__$1 = this;rewrite_clj.node.protocols.assert_sexpr_count.call(null,children_SINGLEQUOTE_,2);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",2673430897),children_SINGLEQUOTE_);
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.meta.MetaNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",4328760836),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.meta.MetaNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",4328760836),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9261){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,G__9261,self__.__extmap,self__.__hash));
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.meta.MetaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),null,new cljs.core.Keyword(null,"tag","tag",1014018828),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.meta.MetaNode.cljs$lang$type = true;
rewrite_clj.node.meta.MetaNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.meta/MetaNode");
});
rewrite_clj.node.meta.MetaNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.meta/MetaNode");
});
rewrite_clj.node.meta.__GT_MetaNode = (function __GT_MetaNode(tag,prefix,children){return (new rewrite_clj.node.meta.MetaNode(tag,prefix,children));
});
rewrite_clj.node.meta.map__GT_MetaNode = (function map__GT_MetaNode(G__9263){return (new rewrite_clj.node.meta.MetaNode(new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(G__9263),new cljs.core.Keyword(null,"prefix","prefix",4328760836).cljs$core$IFn$_invoke$arity$1(G__9263),new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__9263),null,cljs.core.dissoc.call(null,G__9263,new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"prefix","prefix",4328760836),new cljs.core.Keyword(null,"children","children",2673430897))));
});
/**
* Create node representing a form and its metadata.
*/
rewrite_clj.node.meta.meta_node = (function() {
var meta_node = null;
var meta_node__1 = (function (children){rewrite_clj.node.protocols.assert_sexpr_count.call(null,children,2);
return rewrite_clj.node.meta.__GT_MetaNode.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215),"^",children);
});
var meta_node__2 = (function (metadata,data){return meta_node.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_clj.node.whitespace.spaces.call(null,1),data], null));
});
meta_node = function(metadata,data){
switch(arguments.length){
case 1:
return meta_node__1.call(this,metadata);
case 2:
return meta_node__2.call(this,metadata,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meta_node.cljs$core$IFn$_invoke$arity$1 = meta_node__1;
meta_node.cljs$core$IFn$_invoke$arity$2 = meta_node__2;
return meta_node;
})()
;
/**
* Create node representing a form and its metadata using the
* `#^` prefix.
*/
rewrite_clj.node.meta.raw_meta_node = (function() {
var raw_meta_node = null;
var raw_meta_node__1 = (function (children){rewrite_clj.node.protocols.assert_sexpr_count.call(null,children,2);
return rewrite_clj.node.meta.__GT_MetaNode.call(null,new cljs.core.Keyword(null,"meta*","meta*",1117691447),"#^",children);
});
var raw_meta_node__2 = (function (metadata,data){return raw_meta_node.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_clj.node.whitespace.spaces.call(null,1),data], null));
});
raw_meta_node = function(metadata,data){
switch(arguments.length){
case 1:
return raw_meta_node__1.call(this,metadata);
case 2:
return raw_meta_node__2.call(this,metadata,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
raw_meta_node.cljs$core$IFn$_invoke$arity$1 = raw_meta_node__1;
raw_meta_node.cljs$core$IFn$_invoke$arity$2 = raw_meta_node__2;
return raw_meta_node;
})()
;
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.uneval')) {
goog.provide('rewrite_clj.node.uneval');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.uneval.UnevalNode = (function (children,__meta,__extmap){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"uneval","uneval",4468227623);
});
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;throw (new Error("Unsupported operation for unevalnode"));
});
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (2 + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return [cljs.core.str("#_"),cljs.core.str(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9245,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9245,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9245,else__6960__auto__);
} else
{return null;
}
}
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9244){var self__ = this;
var this__6964__auto____$1 = this;var pred__9247 = cljs.core.keyword_identical_QMARK_;var expr__9248 = k__6965__auto__;if(cljs.core.truth_(pred__9247.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__9248)))
{return (new rewrite_clj.node.uneval.UnevalNode(G__9244,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.uneval.UnevalNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9244),null));
}
});
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$ = true;
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.children;
});
rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){var self__ = this;
var this$__$1 = this;rewrite_clj.node.protocols.assert_single_sexpr.call(null,children_SINGLEQUOTE_);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",2673430897),children_SINGLEQUOTE_);
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.uneval.UnevalNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.uneval.UnevalNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9244){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.uneval.UnevalNode(self__.children,G__9244,self__.__extmap,self__.__hash));
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.uneval.UnevalNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.uneval.UnevalNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.uneval.UnevalNode.cljs$lang$type = true;
rewrite_clj.node.uneval.UnevalNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.uneval/UnevalNode");
});
rewrite_clj.node.uneval.UnevalNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.uneval/UnevalNode");
});
rewrite_clj.node.uneval.__GT_UnevalNode = (function __GT_UnevalNode(children){return (new rewrite_clj.node.uneval.UnevalNode(children));
});
rewrite_clj.node.uneval.map__GT_UnevalNode = (function map__GT_UnevalNode(G__9246){return (new rewrite_clj.node.uneval.UnevalNode(new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__9246),null,cljs.core.dissoc.call(null,G__9246,new cljs.core.Keyword(null,"children","children",2673430897))));
});
/**
* Create node representing an EDN uneval `#_` form.
*/
rewrite_clj.node.uneval.uneval_node = (function uneval_node(children){while(true){
if(cljs.core.sequential_QMARK_.call(null,children))
{rewrite_clj.node.protocols.assert_single_sexpr.call(null,children);
return rewrite_clj.node.uneval.__GT_UnevalNode.call(null,children);
} else
{{
var G__9260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__9260;
continue;
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('clojure.walk')) {
goog.provide('clojure.walk');
goog.require('cljs.core');
/**
* Traverses form, an arbitrary data structure.  inner and outer are
* functions.  Applies inner to each element of form, building up a
* data structure of the same type, then applies outer to the result.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.walk = (function walk(inner,outer,form){if(cljs.core.seq_QMARK_.call(null,form))
{return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else
{if(cljs.core.coll_QMARK_.call(null,form))
{return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return outer.call(null,form);
} else
{return null;
}
}
}
});
/**
* Performs a depth-first, post-order traversal of form.  Calls f on
* each sub-form, uses f's return value in place of the original.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.postwalk = (function postwalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,postwalk,f),f,form);
});
/**
* Like postwalk, but does pre-order traversal.
*/
clojure.walk.prewalk = (function prewalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,prewalk,f),cljs.core.identity,f.call(null,form));
});
/**
* Recursively transforms all map keys from strings to keywords.
*/
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__8791){var vec__8792 = p__8791;var k = cljs.core.nth.call(null,vec__8792,0,null);var v = cljs.core.nth.call(null,vec__8792,1,null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,((function (f){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms all map keys from keywords to strings.
*/
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__8795){var vec__8796 = p__8795;var k = cljs.core.nth.call(null,vec__8796,0,null);var v = cljs.core.nth.call(null,vec__8796,1,null);if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,((function (f){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the root of the tree first.
*/
clojure.walk.prewalk_replace = (function prewalk_replace(smap,form){return clojure.walk.prewalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the leaves of the tree first.
*/
clojure.walk.postwalk_replace = (function postwalk_replace(smap,form){return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.quote')) {
goog.provide('rewrite_clj.node.quote');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
* @param {*} tag
* @param {*} prefix
* @param {*} sym
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.quote.QuoteNode = (function (tag,prefix,sym,children,__meta,__extmap){
this.tag = tag;
this.prefix = prefix;
this.sym = sym;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.tag;
});
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children))),self__.sym);
});
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.count.call(null,self__.prefix) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return [cljs.core.str(self__.prefix),cljs.core.str(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9225,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9225,new cljs.core.Keyword(null,"tag","tag",1014018828)))
{return self__.tag;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9225,new cljs.core.Keyword(null,"prefix","prefix",4328760836)))
{return self__.prefix;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9225,new cljs.core.Keyword(null,"sym","sym",1014018617)))
{return self__.sym;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9225,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9225,else__6960__auto__);
} else
{return null;
}
}
}
}
}
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9224){var self__ = this;
var this__6964__auto____$1 = this;var pred__9227 = cljs.core.keyword_identical_QMARK_;var expr__9228 = k__6965__auto__;if(cljs.core.truth_(pred__9227.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828),expr__9228)))
{return (new rewrite_clj.node.quote.QuoteNode(G__9224,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9227.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),expr__9228)))
{return (new rewrite_clj.node.quote.QuoteNode(self__.tag,G__9224,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9227.call(null,new cljs.core.Keyword(null,"sym","sym",1014018617),expr__9228)))
{return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,G__9224,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9227.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__9228)))
{return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,G__9224,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9224),null));
}
}
}
}
});
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$ = true;
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.children;
});
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){var self__ = this;
var this$__$1 = this;rewrite_clj.node.protocols.assert_single_sexpr.call(null,children_SINGLEQUOTE_);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",2673430897),children_SINGLEQUOTE_);
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.quote.QuoteNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",4328760836),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",1014018617),self__.sym],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.quote.QuoteNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",4328760836),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",1014018617),self__.sym],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9224){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,G__9224,self__.__extmap,self__.__hash));
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"sym","sym",1014018617),null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),null,new cljs.core.Keyword(null,"tag","tag",1014018828),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.quote.QuoteNode.cljs$lang$type = true;
rewrite_clj.node.quote.QuoteNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.quote/QuoteNode");
});
rewrite_clj.node.quote.QuoteNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.quote/QuoteNode");
});
rewrite_clj.node.quote.__GT_QuoteNode = (function __GT_QuoteNode(tag,prefix,sym,children){return (new rewrite_clj.node.quote.QuoteNode(tag,prefix,sym,children));
});
rewrite_clj.node.quote.map__GT_QuoteNode = (function map__GT_QuoteNode(G__9226){return (new rewrite_clj.node.quote.QuoteNode(new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(G__9226),new cljs.core.Keyword(null,"prefix","prefix",4328760836).cljs$core$IFn$_invoke$arity$1(G__9226),new cljs.core.Keyword(null,"sym","sym",1014018617).cljs$core$IFn$_invoke$arity$1(G__9226),new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__9226),null,cljs.core.dissoc.call(null,G__9226,new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"prefix","prefix",4328760836),new cljs.core.Keyword(null,"sym","sym",1014018617),new cljs.core.Keyword(null,"children","children",2673430897))));
});
rewrite_clj.node.quote.__GT_node = (function __GT_node(t,prefix,sym,children){rewrite_clj.node.protocols.assert_single_sexpr.call(null,children);
return rewrite_clj.node.quote.__GT_QuoteNode.call(null,t,prefix,sym,children);
});
/**
* Create node representing a quoted form.
* Takes either a seq of nodes or a single one.
*/
rewrite_clj.node.quote.quote_node = (function quote_node(children){while(true){
if(cljs.core.sequential_QMARK_.call(null,children))
{return rewrite_clj.node.quote.__GT_node.call(null,new cljs.core.Keyword(null,"quote","quote",1121858030),"'",new cljs.core.Symbol(null,"quote","quote",-1532577739,null),children);
} else
{{
var G__9240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__9240;
continue;
}
}
break;
}
});
/**
* Create node representing a syntax-quoted form.
* Takes either a seq of nodes or a single one.
*/
rewrite_clj.node.quote.syntax_quote_node = (function syntax_quote_node(children){while(true){
if(cljs.core.sequential_QMARK_.call(null,children))
{return rewrite_clj.node.quote.__GT_node.call(null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",3009198980),"`",new cljs.core.Symbol(null,"quote","quote",-1532577739,null),children);
} else
{{
var G__9241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__9241;
continue;
}
}
break;
}
});
/**
* Create node representing an unquoted form. (`~...`)
* Takes either a seq of nodes or a single one.
*/
rewrite_clj.node.quote.unquote_node = (function unquote_node(children){while(true){
if(cljs.core.sequential_QMARK_.call(null,children))
{return rewrite_clj.node.quote.__GT_node.call(null,new cljs.core.Keyword(null,"unquote","unquote",734812917),"~",new cljs.core.Symbol(null,"unquote","unquote",-1919622852,null),children);
} else
{{
var G__9242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__9242;
continue;
}
}
break;
}
});
/**
* Create node representing an unquote-spliced form. (`~@...`)
* Takes either a seq of nodes or a single one.
*/
rewrite_clj.node.quote.unquote_splicing_node = (function unquote_splicing_node(children){while(true){
if(cljs.core.sequential_QMARK_.call(null,children))
{return rewrite_clj.node.quote.__GT_node.call(null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1895073461),"~@",new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-759362308,null),children);
} else
{{
var G__9243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__9243;
continue;
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.forms')) {
goog.provide('rewrite_clj.node.forms');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.forms.FormsNode = (function (children,__meta,__extmap){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"forms","forms",1111523233);
});
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var es = rewrite_clj.node.protocols.sexprs.call(null,self__.children);if(cljs.core.next.call(null,es))
{return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"do","do",-1640528316,null),es);
} else
{return cljs.core.first.call(null,es);
}
});
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return rewrite_clj.node.protocols.sum_lengths.call(null,self__.children);
});
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return rewrite_clj.node.protocols.concat_strings.call(null,self__.children);
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9191,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9191,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9191,else__6960__auto__);
} else
{return null;
}
}
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9190){var self__ = this;
var this__6964__auto____$1 = this;var pred__9193 = cljs.core.keyword_identical_QMARK_;var expr__9194 = k__6965__auto__;if(cljs.core.truth_(pred__9193.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__9194)))
{return (new rewrite_clj.node.forms.FormsNode(G__9190,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.forms.FormsNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9190),null));
}
});
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$ = true;
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.children;
});
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){var self__ = this;
var this$__$1 = this;return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",2673430897),children_SINGLEQUOTE_);
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.forms.FormsNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.forms.FormsNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9190){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.forms.FormsNode(self__.children,G__9190,self__.__extmap,self__.__hash));
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.forms.FormsNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.forms.FormsNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.forms.FormsNode.cljs$lang$type = true;
rewrite_clj.node.forms.FormsNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.forms/FormsNode");
});
rewrite_clj.node.forms.FormsNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.forms/FormsNode");
});
rewrite_clj.node.forms.__GT_FormsNode = (function __GT_FormsNode(children){return (new rewrite_clj.node.forms.FormsNode(children));
});
rewrite_clj.node.forms.map__GT_FormsNode = (function map__GT_FormsNode(G__9192){return (new rewrite_clj.node.forms.FormsNode(new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__9192),null,cljs.core.dissoc.call(null,G__9192,new cljs.core.Keyword(null,"children","children",2673430897))));
});
/**
* Create top-level node wrapping multiple children
* (equals an implicit `do` on the top-level).
*/
rewrite_clj.node.forms.forms_node = (function forms_node(children){return rewrite_clj.node.forms.__GT_FormsNode.call(null,children);
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.seq')) {
goog.provide('rewrite_clj.node.seq');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.node.seq.wrap_vec = (function wrap_vec(s){return [cljs.core.str("["),cljs.core.str(s),cljs.core.str("]")].join('');
});
rewrite_clj.node.seq.wrap_list = (function wrap_list(s){return [cljs.core.str("("),cljs.core.str(s),cljs.core.str(")")].join('');
});
rewrite_clj.node.seq.wrap_set = (function wrap_set(s){return [cljs.core.str("#{"),cljs.core.str(s),cljs.core.str("}")].join('');
});
rewrite_clj.node.seq.wrap_map = (function wrap_map(s){return [cljs.core.str("{"),cljs.core.str(s),cljs.core.str("}")].join('');
});

/**
* @constructor
* @param {*} tag
* @param {*} wrap_fn
* @param {*} wrap_length
* @param {*} seq_fn
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.seq.SeqNode = (function (tag,wrap_fn,wrap_length,seq_fn,children,__meta,__extmap){
this.tag = tag;
this.wrap_fn = wrap_fn;
this.wrap_length = wrap_length;
this.seq_fn = seq_fn;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.tag;
});
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.seq_fn.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children));
});
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.wrap_length + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.wrap_fn.call(null,rewrite_clj.node.protocols.concat_strings.call(null,self__.children));
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9173,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9173,new cljs.core.Keyword(null,"tag","tag",1014018828)))
{return self__.tag;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9173,new cljs.core.Keyword(null,"wrap-fn","wrap-fn",2609347741)))
{return self__.wrap_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9173,new cljs.core.Keyword(null,"wrap-length","wrap-length",3865755963)))
{return self__.wrap_length;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9173,new cljs.core.Keyword(null,"seq-fn","seq-fn",4402945128)))
{return self__.seq_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9173,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9173,else__6960__auto__);
} else
{return null;
}
}
}
}
}
}
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9172){var self__ = this;
var this__6964__auto____$1 = this;var pred__9175 = cljs.core.keyword_identical_QMARK_;var expr__9176 = k__6965__auto__;if(cljs.core.truth_(pred__9175.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828),expr__9176)))
{return (new rewrite_clj.node.seq.SeqNode(G__9172,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9175.call(null,new cljs.core.Keyword(null,"wrap-fn","wrap-fn",2609347741),expr__9176)))
{return (new rewrite_clj.node.seq.SeqNode(self__.tag,G__9172,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9175.call(null,new cljs.core.Keyword(null,"wrap-length","wrap-length",3865755963),expr__9176)))
{return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,G__9172,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9175.call(null,new cljs.core.Keyword(null,"seq-fn","seq-fn",4402945128),expr__9176)))
{return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,G__9172,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9175.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__9176)))
{return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,G__9172,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9172),null));
}
}
}
}
}
});
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$ = true;
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.children;
});
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){var self__ = this;
var this$__$1 = this;return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",2673430897),children_SINGLEQUOTE_);
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.seq.SeqNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-fn","wrap-fn",2609347741),self__.wrap_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-length","wrap-length",3865755963),self__.wrap_length],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq-fn","seq-fn",4402945128),self__.seq_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.seq.SeqNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-fn","wrap-fn",2609347741),self__.wrap_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-length","wrap-length",3865755963),self__.wrap_length],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq-fn","seq-fn",4402945128),self__.seq_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9172){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,G__9172,self__.__extmap,self__.__hash));
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"wrap-fn","wrap-fn",2609347741),null,new cljs.core.Keyword(null,"seq-fn","seq-fn",4402945128),null,new cljs.core.Keyword(null,"wrap-length","wrap-length",3865755963),null,new cljs.core.Keyword(null,"tag","tag",1014018828),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.seq.SeqNode.cljs$lang$type = true;
rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.seq/SeqNode");
});
rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.seq/SeqNode");
});
rewrite_clj.node.seq.__GT_SeqNode = (function __GT_SeqNode(tag,wrap_fn,wrap_length,seq_fn,children){return (new rewrite_clj.node.seq.SeqNode(tag,wrap_fn,wrap_length,seq_fn,children));
});
rewrite_clj.node.seq.map__GT_SeqNode = (function map__GT_SeqNode(G__9174){return (new rewrite_clj.node.seq.SeqNode(new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(G__9174),new cljs.core.Keyword(null,"wrap-fn","wrap-fn",2609347741).cljs$core$IFn$_invoke$arity$1(G__9174),new cljs.core.Keyword(null,"wrap-length","wrap-length",3865755963).cljs$core$IFn$_invoke$arity$1(G__9174),new cljs.core.Keyword(null,"seq-fn","seq-fn",4402945128).cljs$core$IFn$_invoke$arity$1(G__9174),new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__9174),null,cljs.core.dissoc.call(null,G__9174,new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"wrap-fn","wrap-fn",2609347741),new cljs.core.Keyword(null,"wrap-length","wrap-length",3865755963),new cljs.core.Keyword(null,"seq-fn","seq-fn",4402945128),new cljs.core.Keyword(null,"children","children",2673430897))));
});
/**
* Create a node representing an EDN list.
*/
rewrite_clj.node.seq.list_node = (function list_node(children){return rewrite_clj.node.seq.__GT_SeqNode.call(null,new cljs.core.Keyword(null,"list","list",1017226256),rewrite_clj.node.seq.wrap_list,2,(function (p1__9178_SHARP_){return cljs.core.apply.call(null,cljs.core.list,p1__9178_SHARP_);
}),children);
});
/**
* Create a node representing an EDN vector.
*/
rewrite_clj.node.seq.vector_node = (function vector_node(children){return rewrite_clj.node.seq.__GT_SeqNode.call(null,new cljs.core.Keyword(null,"vector","vector",4488484021),rewrite_clj.node.seq.wrap_vec,2,cljs.core.vec,children);
});
/**
* Create a node representing an EDN set.
*/
rewrite_clj.node.seq.set_node = (function set_node(children){return rewrite_clj.node.seq.__GT_SeqNode.call(null,new cljs.core.Keyword(null,"set","set",1014018004),rewrite_clj.node.seq.wrap_set,3,cljs.core.set,children);
});
/**
* Create a node representing an EDN map.
*/
rewrite_clj.node.seq.map_node = (function map_node(children){return rewrite_clj.node.seq.__GT_SeqNode.call(null,new cljs.core.Keyword(null,"map","map",1014012110),rewrite_clj.node.seq.wrap_map,2,(function (p1__9179_SHARP_){return cljs.core.apply.call(null,cljs.core.hash_map,p1__9179_SHARP_);
}),children);
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.comment')) {
goog.provide('rewrite_clj.node.comment');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
* @param {*} s
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.comment.CommentNode = (function (s,__meta,__extmap){
this.s = s;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"comment","comment",1964302801);
});
rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;throw (new Error("Unsupported operation"));
});
rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (1 + cljs.core.count.call(null,self__.s));
});
rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return [cljs.core.str(";"),cljs.core.str(self__.s)].join('');
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9157,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9157,new cljs.core.Keyword(null,"s","s",1013904357)))
{return self__.s;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9157,else__6960__auto__);
} else
{return null;
}
}
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9156){var self__ = this;
var this__6964__auto____$1 = this;var pred__9159 = cljs.core.keyword_identical_QMARK_;var expr__9160 = k__6965__auto__;if(cljs.core.truth_(pred__9159.call(null,new cljs.core.Keyword(null,"s","s",1013904357),expr__9160)))
{return (new rewrite_clj.node.comment.CommentNode(G__9156,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9156),null));
}
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.comment.CommentNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1013904357),self__.s],null))], null),self__.__extmap));
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.comment.CommentNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1013904357),self__.s],null))], null),self__.__extmap));
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9156){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.comment.CommentNode(self__.s,G__9156,self__.__extmap,self__.__hash));
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1013904357),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.comment.CommentNode.cljs$lang$type = true;
rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.comment/CommentNode");
});
rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.comment/CommentNode");
});
rewrite_clj.node.comment.__GT_CommentNode = (function __GT_CommentNode(s){return (new rewrite_clj.node.comment.CommentNode(s));
});
rewrite_clj.node.comment.map__GT_CommentNode = (function map__GT_CommentNode(G__9158){return (new rewrite_clj.node.comment.CommentNode(new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(G__9158),null,cljs.core.dissoc.call(null,G__9158,new cljs.core.Keyword(null,"s","s",1013904357))));
});
/**
* Create node representing an EDN comment.
*/
rewrite_clj.node.comment.comment_node = (function comment_node(s){return rewrite_clj.node.comment.__GT_CommentNode.call(null,s);
});
/**
* Check whether a node represents a comment.
*/
rewrite_clj.node.comment.comment_QMARK_ = (function comment_QMARK_(node){return cljs.core._EQ_.call(null,rewrite_clj.node.protocols.tag.call(null,node),new cljs.core.Keyword(null,"comment","comment",1964302801));
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.fn')) {
goog.provide('rewrite_clj.node.fn');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');
/**
* Construct function form.
*/
rewrite_clj.node.fn.construct_fn = (function construct_fn(syms,vararg,body){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,body),cljs.core.vec.call(null,cljs.core.concat.call(null,syms,(cljs.core.truth_(vararg)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,vararg),new cljs.core.Symbol(null,"&","&",-1640531489,null)):null)))),new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null));
});
/**
* Get index based on the substring following the parameter's `%`.
* Zero means vararg.
*/
rewrite_clj.node.fn.sym_index = (function sym_index(n){if(cljs.core._EQ_.call(null,n,"&"))
{return 0;
} else
{if(cljs.core._EQ_.call(null,n,""))
{return 1;
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,n)))
{return parseInt(n);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("arg literal must be %, %& or %integer."));
} else
{return null;
}
}
}
}
});
/**
* If symbol starting with `%`, convert to respective gensym.
*/
rewrite_clj.node.fn.symbol__GT_gensym = (function symbol__GT_gensym(sym_seq,vararg_QMARK_,max_n,sym){if((sym instanceof cljs.core.Symbol))
{var nm = cljs.core.name.call(null,sym);if(cljs.core._EQ_.call(null,nm.indexOf("%"),0))
{var i = rewrite_clj.node.fn.sym_index.call(null,cljs.core.subs.call(null,nm,1));cljs.core.swap_BANG_.call(null,max_n,cljs.core.max,i);
return cljs.core.nth.call(null,sym_seq,i);
} else
{return null;
}
} else
{return null;
}
});
/**
* Walk the form and create an expand function form.
*/
rewrite_clj.node.fn.fn_walk = (function fn_walk(form){var syms = (function (){var iter__7088__auto__ = (function iter__9135(s__9136){return (new cljs.core.LazySeq(null,(function (){var s__9136__$1 = s__9136;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9136__$1);if(temp__4092__auto__)
{var s__9136__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9136__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__9136__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__9138 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__9137 = 0;while(true){
if((i__9137 < size__7087__auto__))
{var i = cljs.core._nth.call(null,c__7086__auto__,i__9137);var base = ((cljs.core._EQ_.call(null,i,0))?"rest__":[cljs.core.str("p"),cljs.core.str(i),cljs.core.str("__")].join(''));var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));cljs.core.chunk_append.call(null,b__9138,cljs.core.symbol.call(null,[cljs.core.str(s),cljs.core.str("#")].join('')));
{
var G__9155 = (i__9137 + 1);
i__9137 = G__9155;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9138),iter__9135.call(null,cljs.core.chunk_rest.call(null,s__9136__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9138),null);
}
} else
{var i = cljs.core.first.call(null,s__9136__$2);var base = ((cljs.core._EQ_.call(null,i,0))?"rest__":[cljs.core.str("p"),cljs.core.str(i),cljs.core.str("__")].join(''));var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));return cljs.core.cons.call(null,cljs.core.symbol.call(null,[cljs.core.str(s),cljs.core.str("#")].join('')),iter__9135.call(null,cljs.core.rest.call(null,s__9136__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7088__auto__.call(null,cljs.core.range.call(null));
})();var vararg_QMARK_ = false;var max_n = cljs.core.atom.call(null,0);var body = clojure.walk.prewalk.call(null,((function (syms,vararg_QMARK_,max_n){
return (function (p1__9130_SHARP_){var or__6371__auto__ = rewrite_clj.node.fn.symbol__GT_gensym.call(null,syms,vararg_QMARK_,max_n,p1__9130_SHARP_);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return p1__9130_SHARP_;
}
});})(syms,vararg_QMARK_,max_n))
,form);return rewrite_clj.node.fn.construct_fn.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,max_n),cljs.core.rest.call(null,syms)),null,body);
});

/**
* @constructor
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.fn.FnNode = (function (children,__meta,__extmap){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"fn","fn",1013907514);
});
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return rewrite_clj.node.fn.fn_walk.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children));
});
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (3 + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return [cljs.core.str("#("),cljs.core.str(rewrite_clj.node.protocols.concat_strings.call(null,self__.children)),cljs.core.str(")")].join('');
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9140,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9140,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9140,else__6960__auto__);
} else
{return null;
}
}
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9139){var self__ = this;
var this__6964__auto____$1 = this;var pred__9142 = cljs.core.keyword_identical_QMARK_;var expr__9143 = k__6965__auto__;if(cljs.core.truth_(pred__9142.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__9143)))
{return (new rewrite_clj.node.fn.FnNode(G__9139,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9139),null));
}
});
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$ = true;
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.children;
});
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){var self__ = this;
var this$__$1 = this;return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",2673430897),children_SINGLEQUOTE_);
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.fn.FnNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.fn.FnNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9139){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.fn.FnNode(self__.children,G__9139,self__.__extmap,self__.__hash));
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.fn.FnNode.cljs$lang$type = true;
rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.fn/FnNode");
});
rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.fn/FnNode");
});
rewrite_clj.node.fn.__GT_FnNode = (function __GT_FnNode(children){return (new rewrite_clj.node.fn.FnNode(children));
});
rewrite_clj.node.fn.map__GT_FnNode = (function map__GT_FnNode(G__9141){return (new rewrite_clj.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__9141),null,cljs.core.dissoc.call(null,G__9141,new cljs.core.Keyword(null,"children","children",2673430897))));
});
/**
* Create node representing an anonymous function.
*/
rewrite_clj.node.fn.fn_node = (function fn_node(children){return rewrite_clj.node.fn.__GT_FnNode.call(null,children);
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.reader-macro')) {
goog.provide('rewrite_clj.node.reader_macro');
goog.require('cljs.core');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
* @param {*} tag
* @param {*} prefix
* @param {*} suffix
* @param {*} sexpr_fn
* @param {*} sexpr_count
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.reader_macro.ReaderNode = (function (tag,prefix,suffix,sexpr_fn,sexpr_count,children,__meta,__extmap){
this.tag = tag;
this.prefix = prefix;
this.suffix = suffix;
this.sexpr_fn = sexpr_fn;
this.sexpr_count = sexpr_count;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.tag;
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.not.call(null,self__.sexpr_fn);
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.sexpr_fn))
{return self__.sexpr_fn.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children));
} else
{throw (new Error("Unsupported operation"));
}
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (((rewrite_clj.node.protocols.sum_lengths.call(null,self__.children) + 1) + cljs.core.count.call(null,self__.prefix)) + cljs.core.count.call(null,self__.suffix));
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return [cljs.core.str("#"),cljs.core.str(self__.prefix),cljs.core.str(rewrite_clj.node.protocols.concat_strings.call(null,self__.children)),cljs.core.str(self__.suffix)].join('');
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9099,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9099,new cljs.core.Keyword(null,"tag","tag",1014018828)))
{return self__.tag;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9099,new cljs.core.Keyword(null,"prefix","prefix",4328760836)))
{return self__.prefix;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9099,new cljs.core.Keyword(null,"suffix","suffix",4417448643)))
{return self__.suffix;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9099,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",2559563583)))
{return self__.sexpr_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9099,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",1404326748)))
{return self__.sexpr_count;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9099,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9099,else__6960__auto__);
} else
{return null;
}
}
}
}
}
}
}
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9098){var self__ = this;
var this__6964__auto____$1 = this;var pred__9101 = cljs.core.keyword_identical_QMARK_;var expr__9102 = k__6965__auto__;if(cljs.core.truth_(pred__9101.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828),expr__9102)))
{return (new rewrite_clj.node.reader_macro.ReaderNode(G__9098,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9101.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),expr__9102)))
{return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,G__9098,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9101.call(null,new cljs.core.Keyword(null,"suffix","suffix",4417448643),expr__9102)))
{return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,G__9098,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9101.call(null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",2559563583),expr__9102)))
{return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,G__9098,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9101.call(null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",1404326748),expr__9102)))
{return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,G__9098,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9101.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__9102)))
{return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,G__9098,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9098),null));
}
}
}
}
}
}
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$ = true;
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.children;
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.sexpr_count))
{rewrite_clj.node.protocols.assert_sexpr_count.call(null,children_SINGLEQUOTE_,self__.sexpr_count);
} else
{}
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",2673430897),children_SINGLEQUOTE_);
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.reader-macro.ReaderNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",4328760836),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",4417448643),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",2559563583),self__.sexpr_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-count","sexpr-count",1404326748),self__.sexpr_count],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",4328760836),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",4417448643),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",2559563583),self__.sexpr_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-count","sexpr-count",1404326748),self__.sexpr_count],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (6 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9098){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,G__9098,self__.__extmap,self__.__hash));
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",1404326748),null,new cljs.core.Keyword(null,"suffix","suffix",4417448643),null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",2559563583),null,new cljs.core.Keyword(null,"tag","tag",1014018828),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$type = true;
rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.reader-macro/ReaderNode");
});
rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.reader-macro/ReaderNode");
});
rewrite_clj.node.reader_macro.__GT_ReaderNode = (function __GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children){return (new rewrite_clj.node.reader_macro.ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children));
});
rewrite_clj.node.reader_macro.map__GT_ReaderNode = (function map__GT_ReaderNode(G__9100){return (new rewrite_clj.node.reader_macro.ReaderNode(new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(G__9100),new cljs.core.Keyword(null,"prefix","prefix",4328760836).cljs$core$IFn$_invoke$arity$1(G__9100),new cljs.core.Keyword(null,"suffix","suffix",4417448643).cljs$core$IFn$_invoke$arity$1(G__9100),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",2559563583).cljs$core$IFn$_invoke$arity$1(G__9100),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",1404326748).cljs$core$IFn$_invoke$arity$1(G__9100),new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__9100),null,cljs.core.dissoc.call(null,G__9100,new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"prefix","prefix",4328760836),new cljs.core.Keyword(null,"suffix","suffix",4417448643),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",2559563583),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",1404326748),new cljs.core.Keyword(null,"children","children",2673430897))));
});

/**
* @constructor
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.reader_macro.ReaderMacroNode = (function (children,__meta,__extmap){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"reader-macro","reader-macro",3215531444);
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,rewrite_clj.node.protocols.string.call(null,this$__$1)),new cljs.core.Symbol(null,"read-string","read-string",641340897,null));
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (rewrite_clj.node.protocols.sum_lengths.call(null,self__.children) + 1);
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return [cljs.core.str("#"),cljs.core.str(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9105,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9105,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9105,else__6960__auto__);
} else
{return null;
}
}
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9104){var self__ = this;
var this__6964__auto____$1 = this;var pred__9107 = cljs.core.keyword_identical_QMARK_;var expr__9108 = k__6965__auto__;if(cljs.core.truth_(pred__9107.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__9108)))
{return (new rewrite_clj.node.reader_macro.ReaderMacroNode(G__9104,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9104),null));
}
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$ = true;
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.children;
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){var self__ = this;
var this$__$1 = this;rewrite_clj.node.protocols.assert_sexpr_count.call(null,children_SINGLEQUOTE_,2);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",2673430897),children_SINGLEQUOTE_);
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.reader-macro.ReaderMacroNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9104){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,G__9104,self__.__extmap,self__.__hash));
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$type = true;
rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.reader-macro/ReaderMacroNode");
});
rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.reader-macro/ReaderMacroNode");
});
rewrite_clj.node.reader_macro.__GT_ReaderMacroNode = (function __GT_ReaderMacroNode(children){return (new rewrite_clj.node.reader_macro.ReaderMacroNode(children));
});
rewrite_clj.node.reader_macro.map__GT_ReaderMacroNode = (function map__GT_ReaderMacroNode(G__9106){return (new rewrite_clj.node.reader_macro.ReaderMacroNode(new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__9106),null,cljs.core.dissoc.call(null,G__9106,new cljs.core.Keyword(null,"children","children",2673430897))));
});

/**
* @constructor
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.reader_macro.DerefNode = (function (children,__meta,__extmap){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"deref","deref",1109378020);
});
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"deref","deref",-1545057749,null),rewrite_clj.node.protocols.sexprs.call(null,self__.children));
});
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (rewrite_clj.node.protocols.sum_lengths.call(null,self__.children) + 1);
});
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return [cljs.core.str("@"),cljs.core.str(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9111,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9111,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9111,else__6960__auto__);
} else
{return null;
}
}
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9110){var self__ = this;
var this__6964__auto____$1 = this;var pred__9113 = cljs.core.keyword_identical_QMARK_;var expr__9114 = k__6965__auto__;if(cljs.core.truth_(pred__9113.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__9114)))
{return (new rewrite_clj.node.reader_macro.DerefNode(G__9110,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9110),null));
}
});
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$ = true;
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.children;
});
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){var self__ = this;
var this$__$1 = this;rewrite_clj.node.protocols.assert_sexpr_count.call(null,children_SINGLEQUOTE_,1);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",2673430897),children_SINGLEQUOTE_);
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.reader-macro.DerefNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.reader_macro.DerefNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9110){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,G__9110,self__.__extmap,self__.__hash));
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.reader_macro.DerefNode.cljs$lang$type = true;
rewrite_clj.node.reader_macro.DerefNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.reader-macro/DerefNode");
});
rewrite_clj.node.reader_macro.DerefNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.reader-macro/DerefNode");
});
rewrite_clj.node.reader_macro.__GT_DerefNode = (function __GT_DerefNode(children){return (new rewrite_clj.node.reader_macro.DerefNode(children));
});
rewrite_clj.node.reader_macro.map__GT_DerefNode = (function map__GT_DerefNode(G__9112){return (new rewrite_clj.node.reader_macro.DerefNode(new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__9112),null,cljs.core.dissoc.call(null,G__9112,new cljs.core.Keyword(null,"children","children",2673430897))));
});
rewrite_clj.node.reader_macro.__GT_node = (function __GT_node(tag,prefix,suffix,sexpr_fn,sexpr_count,children){if(cljs.core.truth_(sexpr_count))
{rewrite_clj.node.protocols.assert_sexpr_count.call(null,children,sexpr_count);
} else
{}
return rewrite_clj.node.reader_macro.__GT_ReaderNode.call(null,tag,prefix,suffix,sexpr_fn,sexpr_count,children);
});
/**
* Create node representing a var.
* Takes either a seq of nodes or a single one.
*/
rewrite_clj.node.reader_macro.var_node = (function var_node(children){while(true){
if(cljs.core.sequential_QMARK_.call(null,children))
{return rewrite_clj.node.reader_macro.__GT_node.call(null,new cljs.core.Keyword(null,"var","var",1014020761),"'","",((function (children){
return (function (p1__9116_SHARP_){return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"var","var",-1640415008,null),p1__9116_SHARP_);
});})(children))
,1,children);
} else
{{
var G__9128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__9128;
continue;
}
}
break;
}
});
/**
* Create node representing an inline evaluation. (`#=...`)
* Takes either a seq of nodes or a single one.
*/
rewrite_clj.node.reader_macro.eval_node = (function eval_node(children){while(true){
if(cljs.core.sequential_QMARK_.call(null,children))
{return rewrite_clj.node.reader_macro.__GT_node.call(null,new cljs.core.Keyword(null,"eval","eval",1017029646),"=","",((function (children){
return (function (p1__9117_SHARP_){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),p1__9117_SHARP_)),new cljs.core.Symbol(null,"eval","eval",-1637406123,null));
});})(children))
,1,children);
} else
{{
var G__9129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__9129;
continue;
}
}
break;
}
});
/**
* Create node representing a reader macro. (`#... ...`)
*/
rewrite_clj.node.reader_macro.reader_macro_node = (function() {
var reader_macro_node = null;
var reader_macro_node__1 = (function (children){return rewrite_clj.node.reader_macro.__GT_ReaderMacroNode.call(null,children);
});
var reader_macro_node__2 = (function (macro_node,form_node){return rewrite_clj.node.reader_macro.__GT_ReaderMacroNode.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [macro_node,rewrite_clj.node.whitespace.spaces.call(null,1),form_node], null));
});
reader_macro_node = function(macro_node,form_node){
switch(arguments.length){
case 1:
return reader_macro_node__1.call(this,macro_node);
case 2:
return reader_macro_node__2.call(this,macro_node,form_node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader_macro_node.cljs$core$IFn$_invoke$arity$1 = reader_macro_node__1;
reader_macro_node.cljs$core$IFn$_invoke$arity$2 = reader_macro_node__2;
return reader_macro_node;
})()
;
/**
* Create node representing the dereferencing of a form. (`@...`)
* Takes either a seq of nodes or a single one.
*/
rewrite_clj.node.reader_macro.deref_node = (function deref_node(children){if(cljs.core.sequential_QMARK_.call(null,children))
{return rewrite_clj.node.reader_macro.__GT_DerefNode.call(null,children);
} else
{return rewrite_clj.node.reader_macro.__GT_DerefNode.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null));
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.keyword')) {
goog.provide('rewrite_clj.node.keyword');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
* @param {*} k
* @param {*} namespaced_QMARK_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rewrite_clj.node.keyword.KeywordNode = (function (k,namespaced_QMARK_,__meta,__extmap){
this.k = k;
this.namespaced_QMARK_ = namespaced_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6952__auto__){var self__ = this;
var this__6952__auto____$1 = this;var h__6782__auto__ = self__.__hash;if(!((h__6782__auto__ == null)))
{return h__6782__auto__;
} else
{var h__6782__auto____$1 = cljs.core.hash_imap.call(null,this__6952__auto____$1);self__.__hash = h__6782__auto____$1;
return h__6782__auto____$1;
}
});
rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$ = true;
rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"token","token",1124445547);
});
rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = self__.namespaced_QMARK_;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.not.call(null,cljs.core.namespace.call(null,self__.k));
} else
{return and__6359__auto__;
}
})()))
{throw (new Error("Namespaced keywords not supported !"));
} else
{return self__.k;
}
});
rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var c = (cljs.core.count.call(null,cljs.core.name.call(null,self__.k)) + 1);if(cljs.core.truth_(self__.namespaced_QMARK_))
{return (c + 1);
} else
{var temp__4090__auto__ = cljs.core.namespace.call(null,self__.k);if(cljs.core.truth_(temp__4090__auto__))
{var nspace = temp__4090__auto__;return ((1 + c) + cljs.core.count.call(null,nspace));
} else
{return c;
}
}
});
rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var v = cljs.core.pr_str.call(null,self__.k);if(cljs.core.truth_(self__.namespaced_QMARK_))
{return [cljs.core.str(":"),cljs.core.str(v)].join('');
} else
{return v;
}
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6957__auto__,k__6958__auto__){var self__ = this;
var this__6957__auto____$1 = this;return cljs.core._lookup.call(null,this__6957__auto____$1,k__6958__auto__,null);
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6959__auto__,k9079,else__6960__auto__){var self__ = this;
var this__6959__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9079,new cljs.core.Keyword(null,"k","k",1013904349)))
{return self__.k;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9079,new cljs.core.Keyword(null,"namespaced?","namespaced?",1804757608)))
{return self__.namespaced_QMARK_;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9079,else__6960__auto__);
} else
{return null;
}
}
}
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6964__auto__,k__6965__auto__,G__9078){var self__ = this;
var this__6964__auto____$1 = this;var pred__9081 = cljs.core.keyword_identical_QMARK_;var expr__9082 = k__6965__auto__;if(cljs.core.truth_(pred__9081.call(null,new cljs.core.Keyword(null,"k","k",1013904349),expr__9082)))
{return (new rewrite_clj.node.keyword.KeywordNode(G__9078,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9081.call(null,new cljs.core.Keyword(null,"namespaced?","namespaced?",1804757608),expr__9082)))
{return (new rewrite_clj.node.keyword.KeywordNode(self__.k,G__9078,self__.__meta,self__.__extmap,null));
} else
{return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6965__auto__,G__9078),null));
}
}
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6971__auto__,writer__6972__auto__,opts__6973__auto__){var self__ = this;
var this__6971__auto____$1 = this;var pr_pair__6974__auto__ = ((function (this__6971__auto____$1){
return (function (keyval__6975__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,cljs.core.pr_writer,""," ","",opts__6973__auto__,keyval__6975__auto__);
});})(this__6971__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__6972__auto__,pr_pair__6974__auto__,"#rewrite-clj.node.keyword.KeywordNode{",", ","}",opts__6973__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",1013904349),self__.k],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespaced?","namespaced?",1804757608),self__.namespaced_QMARK_],null))], null),self__.__extmap));
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6962__auto__,entry__6963__auto__){var self__ = this;
var this__6962__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6963__auto__))
{return cljs.core._assoc.call(null,this__6962__auto____$1,cljs.core._nth.call(null,entry__6963__auto__,0),cljs.core._nth.call(null,entry__6963__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6962__auto____$1,entry__6963__auto__);
}
});
rewrite_clj.node.keyword.KeywordNode.prototype.toString = (function (){var self__ = this;
var this$ = this;return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6969__auto__){var self__ = this;
var this__6969__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",1013904349),self__.k],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespaced?","namespaced?",1804757608),self__.namespaced_QMARK_],null))], null),self__.__extmap));
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6961__auto__){var self__ = this;
var this__6961__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6953__auto__,other__6954__auto__){var self__ = this;
var this__6953__auto____$1 = this;if(cljs.core.truth_((function (){var and__6359__auto__ = other__6954__auto__;if(cljs.core.truth_(and__6359__auto__))
{return ((this__6953__auto____$1.constructor === other__6954__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6953__auto____$1,other__6954__auto__));
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6956__auto__,G__9078){var self__ = this;
var this__6956__auto____$1 = this;return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,G__9078,self__.__extmap,self__.__hash));
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6951__auto__){var self__ = this;
var this__6951__auto____$1 = this;return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6955__auto__){var self__ = this;
var this__6955__auto____$1 = this;return self__.__meta;
});
rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6966__auto__,k__6967__auto__){var self__ = this;
var this__6966__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",1013904349),null,new cljs.core.Keyword(null,"namespaced?","namespaced?",1804757608),null], null), null),k__6967__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6966__auto____$1),self__.__meta),k__6967__auto__);
} else
{return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6967__auto__)),null));
}
});
rewrite_clj.node.keyword.KeywordNode.cljs$lang$type = true;
rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrSeq = (function (this__6991__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rewrite-clj.node.keyword/KeywordNode");
});
rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrWriter = (function (this__6991__auto__,writer__6992__auto__){return cljs.core._write.call(null,writer__6992__auto__,"rewrite-clj.node.keyword/KeywordNode");
});
rewrite_clj.node.keyword.__GT_KeywordNode = (function __GT_KeywordNode(k,namespaced_QMARK_){return (new rewrite_clj.node.keyword.KeywordNode(k,namespaced_QMARK_));
});
rewrite_clj.node.keyword.map__GT_KeywordNode = (function map__GT_KeywordNode(G__9080){return (new rewrite_clj.node.keyword.KeywordNode(new cljs.core.Keyword(null,"k","k",1013904349).cljs$core$IFn$_invoke$arity$1(G__9080),new cljs.core.Keyword(null,"namespaced?","namespaced?",1804757608).cljs$core$IFn$_invoke$arity$1(G__9080),null,cljs.core.dissoc.call(null,G__9080,new cljs.core.Keyword(null,"k","k",1013904349),new cljs.core.Keyword(null,"namespaced?","namespaced?",1804757608))));
});
/**
* Create node representing a keyword. If `namespaced?` is given as `true`
* a keyword à la `::x` or `::ns/x` (i.e. namespaced/aliased) is generated.
* @param {...*} var_args
*/
rewrite_clj.node.keyword.keyword_node = (function() { 
var keyword_node__delegate = function (k,p__9084){var vec__9086 = p__9084;var namespaced_QMARK_ = cljs.core.nth.call(null,vec__9086,0,null);if((k instanceof cljs.core.Keyword))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",-1117382353,null),new cljs.core.Symbol(null,"k","k",-1640531420,null))))].join('')));
}
return rewrite_clj.node.keyword.__GT_KeywordNode.call(null,k,namespaced_QMARK_);
};
var keyword_node = function (k,var_args){
var p__9084 = null;if (arguments.length > 1) {
  p__9084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return keyword_node__delegate.call(this,k,p__9084);};
keyword_node.cljs$lang$maxFixedArity = 1;
keyword_node.cljs$lang$applyTo = (function (arglist__9097){
var k = cljs.core.first(arglist__9097);
var p__9084 = cljs.core.rest(arglist__9097);
return keyword_node__delegate(k,p__9084);
});
keyword_node.cljs$core$IFn$_invoke$arity$variadic = keyword_node__delegate;
return keyword_node;
})()
;
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node.coercer')) {
goog.provide('rewrite_clj.node.coercer');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.keyword');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.node.forms');
goog.require('rewrite_clj.node.fn');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.quote');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.node.uneval');
goog.require('rewrite_clj.node.meta');
goog.require('rewrite_clj.node.reader_macro');
goog.require('rewrite_clj.node.seq');
goog.require('rewrite_clj.node.keyword');
goog.require('rewrite_clj.node.reader_macro');
goog.require('rewrite_clj.node.fn');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.seq');
goog.require('rewrite_clj.node.forms');
goog.require('rewrite_clj.node.quote');
goog.require('rewrite_clj.node.uneval');
goog.require('rewrite_clj.node.meta');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.stringz');
rewrite_clj.node.coercer.node_with_meta = (function node_with_meta(n,value){if((function (){var G__9207 = value;if(G__9207)
{var bit__7021__auto__ = (G__9207.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__7021__auto__) || (G__9207.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__9207.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__9207);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__9207);
}
})())
{var mta = cljs.core.meta.call(null,value);if(cljs.core.empty_QMARK_.call(null,mta))
{return n;
} else
{return rewrite_clj.node.meta.meta_node.call(null,rewrite_clj.node.protocols.coerce.call(null,mta),n);
}
} else
{return n;
}
});
(rewrite_clj.node.protocols.NodeCoerceable["object"] = true);
(rewrite_clj.node.protocols.coerce["object"] = (function (v){return rewrite_clj.node.coercer.node_with_meta.call(null,rewrite_clj.node.token.token_node.call(null,v),v);
}));
(rewrite_clj.node.protocols.NodeCoerceable["number"] = true);
(rewrite_clj.node.protocols.coerce["number"] = (function (n){return rewrite_clj.node.coercer.node_with_meta.call(null,rewrite_clj.node.token.token_node.call(null,n),n);
}));
(rewrite_clj.node.protocols.NodeCoerceable["string"] = true);
(rewrite_clj.node.protocols.coerce["string"] = (function (n){return rewrite_clj.node.coercer.node_with_meta.call(null,rewrite_clj.node.stringz.string_node.call(null,n),n);
}));
rewrite_clj.node.coercer.seq_node = (function seq_node(f,sq){return rewrite_clj.node.coercer.node_with_meta.call(null,f.call(null,cljs.core.vec.call(null,rewrite_clj.node.whitespace.space_separated.call(null,cljs.core.map.call(null,rewrite_clj.node.protocols.coerce,sq)))),sq);
});
cljs.core.PersistentHashSet.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
cljs.core.PersistentHashSet.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){var sq__$1 = this;return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.set_node,sq__$1);
});
cljs.core.List.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
cljs.core.List.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){var sq__$1 = this;return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.list_node,sq__$1);
});
cljs.core.PersistentVector.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
cljs.core.PersistentVector.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){var sq__$1 = this;return rewrite_clj.node.coercer.seq_node.call(null,rewrite_clj.node.seq.vector_node,sq__$1);
});
var comma_9222 = rewrite_clj.node.whitespace.whitespace_node.call(null,", ");var space_9223 = rewrite_clj.node.whitespace.whitespace_node.call(null," ");rewrite_clj.node.coercer.map__GT_children = ((function (comma_9222,space_9223){
return (function map__GT_children(m){return cljs.core.vec.call(null,cljs.core.butlast.call(null,cljs.core.mapcat.call(null,((function (comma_9222,space_9223){
return (function (p__9210){var vec__9211 = p__9210;var k = cljs.core.nth.call(null,vec__9211,0,null);var v = cljs.core.nth.call(null,vec__9211,1,null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.node.protocols.coerce.call(null,k),space_9223,rewrite_clj.node.protocols.coerce.call(null,v),comma_9222], null);
});})(comma_9222,space_9223))
,m)));
});})(comma_9222,space_9223))
;
cljs.core.PersistentHashMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
cljs.core.PersistentHashMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (m){var m__$1 = this;return rewrite_clj.node.coercer.node_with_meta.call(null,rewrite_clj.node.seq.map_node.call(null,rewrite_clj.node.coercer.map__GT_children.call(null,m__$1)),m__$1);
});
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = true;
rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){var v__$1 = this;return v__$1;
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.node')) {
goog.provide('rewrite_clj.node');
goog.require('cljs.core');
goog.require('rewrite_clj.node.keyword');
goog.require('rewrite_clj.node.reader_macro');
goog.require('rewrite_clj.node.forms');
goog.require('rewrite_clj.node.fn');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.seq');
goog.require('rewrite_clj.node.keyword');
goog.require('rewrite_clj.node.forms');
goog.require('rewrite_clj.node.coercer');
goog.require('rewrite_clj.node.quote');
goog.require('rewrite_clj.node.quote');
goog.require('rewrite_clj.node.uneval');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.fn');
goog.require('rewrite_clj.node.meta');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.seq');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.node.reader_macro');
goog.require('rewrite_clj.node.meta');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.node.whitespace');
goog.require('rewrite_clj.node.uneval');
/**
* See [[protocols/tag]]
*/
rewrite_clj.node.tag = rewrite_clj.node.protocols.tag;
/**
* See [[protocols/sexpr]]
*/
rewrite_clj.node.sexpr = rewrite_clj.node.protocols.sexpr;
/**
* See [[protocols/string]]
*/
rewrite_clj.node.string = rewrite_clj.node.protocols.string;
/**
* See [[protocols/children]]
*/
rewrite_clj.node.children = rewrite_clj.node.protocols.children;
/**
* See [[protocols/sexprs]]
*/
rewrite_clj.node.child_sexprs = rewrite_clj.node.protocols.child_sexprs;
/**
* See [[protocols/replace-children]]
*/
rewrite_clj.node.replace_children = rewrite_clj.node.protocols.replace_children;
/**
* See [[protocols/inner?]]
*/
rewrite_clj.node.inner_QMARK_ = rewrite_clj.node.protocols.inner_QMARK_;
/**
* See [[protocols/printable-only?]]
*/
rewrite_clj.node.printable_only_QMARK_ = rewrite_clj.node.protocols.printable_only_QMARK_;
/**
* See [[protocols/coerce]]
*/
rewrite_clj.node.coerce = rewrite_clj.node.protocols.coerce;
/**
* see [[forms/forms-node]]
*/
rewrite_clj.node.forms_node = rewrite_clj.node.forms.forms_node;
/**
* see [[keyword/keyword-node]]
*/
rewrite_clj.node.keyword_node = rewrite_clj.node.keyword.keyword_node;
/**
* See [[seq/list-node]]
*/
rewrite_clj.node.list_node = rewrite_clj.node.seq.list_node;
/**
* See [[seq/vector-node]]
*/
rewrite_clj.node.vector_node = rewrite_clj.node.seq.vector_node;
/**
* See [[seq/set-node]]
*/
rewrite_clj.node.set_node = rewrite_clj.node.seq.set_node;
/**
* See [[seq/map-node]]
*/
rewrite_clj.node.map_node = rewrite_clj.node.seq.map_node;
/**
* See [[stringz/string-node]]
*/
rewrite_clj.node.string_node = rewrite_clj.node.stringz.string_node;
/**
* See [[comment/comment-node]]
*/
rewrite_clj.node.comment_node = rewrite_clj.node.comment.comment_node;
/**
* See [[comment/comment?]]
*/
rewrite_clj.node.comment_QMARK_ = rewrite_clj.node.comment.comment_QMARK_;
/**
* See [[whitespace/whitespace-node]]
*/
rewrite_clj.node.whitespace_node = rewrite_clj.node.whitespace.whitespace_node;
/**
* See [[whitespace/newline-node]]
*/
rewrite_clj.node.newline_node = rewrite_clj.node.whitespace.newline_node;
/**
* See [[whitespace/spaces]]
*/
rewrite_clj.node.spaces = rewrite_clj.node.whitespace.spaces;
/**
* See [[whitespace/newlines]]
*/
rewrite_clj.node.newlines = rewrite_clj.node.whitespace.newlines;
/**
* See [[whitespace/whitespace?]]
*/
rewrite_clj.node.whitespace_QMARK_ = rewrite_clj.node.whitespace.whitespace_QMARK_;
/**
* See [[whitespace/linebreak?]]
*/
rewrite_clj.node.linebreak_QMARK_ = rewrite_clj.node.whitespace.linebreak_QMARK_;
/**
* Check whether the given node represents whitespace or comment.
*/
rewrite_clj.node.whitespace_or_comment_QMARK_ = (function whitespace_or_comment_QMARK_(node){var or__6371__auto__ = rewrite_clj.node.whitespace_QMARK_.call(null,node);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return rewrite_clj.node.comment_QMARK_.call(null,node);
}
});
/**
* See [[token/token-node]]
*/
rewrite_clj.node.token_node = rewrite_clj.node.token.token_node;
/**
* See [[reader-macro/var-node]]
*/
rewrite_clj.node.var_node = rewrite_clj.node.reader_macro.var_node;
/**
* See [[reader-macro/eval-node]]
*/
rewrite_clj.node.eval_node = rewrite_clj.node.reader_macro.eval_node;
/**
* See [[reader-macro/reader-macro-node]]
*/
rewrite_clj.node.reader_macro_node = rewrite_clj.node.reader_macro.reader_macro_node;
/**
* See [[reader-macro/deref-node]]
*/
rewrite_clj.node.deref_node = rewrite_clj.node.reader_macro.deref_node;
/**
* See [[quote/quote-node]]
*/
rewrite_clj.node.quote_node = rewrite_clj.node.quote.quote_node;
/**
* See [[quote/syntax-quote-node]]
*/
rewrite_clj.node.syntax_quote_node = rewrite_clj.node.quote.syntax_quote_node;
/**
* See [[quote/unquote-node]]
*/
rewrite_clj.node.unquote_node = rewrite_clj.node.quote.unquote_node;
/**
* See [[quote/unquote-splicing-node]]
*/
rewrite_clj.node.unquote_splicing_node = rewrite_clj.node.quote.unquote_splicing_node;
/**
* See [[uneval/uneval-node]]
*/
rewrite_clj.node.uneval_node = rewrite_clj.node.uneval.uneval_node;
/**
* See [[meta/meta-node]]
*/
rewrite_clj.node.meta_node = rewrite_clj.node.meta.meta_node;
/**
* See [[fn/fn-node]]
*/
rewrite_clj.node.fn_node = rewrite_clj.node.fn.fn_node;
}
if(!lt.util.load.provided_QMARK_('clojure.zip')) {
goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("zip","make-node","zip/make-node",2241612572),make_node,new cljs.core.Keyword("zip","children","zip/children",2681289882),children,new cljs.core.Keyword("zip","branch?","zip/branch?",1159334776),branch_QMARK_], null));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",1965434859)),(function (node,children){return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",1965434859),(function (){var and__6359__auto__ = children;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__6359__auto__;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){return loc.call(null,0);
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){return new cljs.core.Keyword("zip","branch?","zip/branch?",1159334776).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return new cljs.core.Keyword("zip","children","zip/children",2681289882).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){return new cljs.core.Keyword("zip","make-node","zip/make-node",2241612572).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){return new cljs.core.Keyword(null,"pnodes","pnodes",4325362611).cljs$core$IFn$_invoke$arity$1(loc.call(null,1));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){return cljs.core.seq.call(null,new cljs.core.Keyword(null,"l","l",1013904350).cljs$core$IFn$_invoke$arity$1(loc.call(null,1)));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){return new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(loc.call(null,1));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__8526 = loc;var node = cljs.core.nth.call(null,vec__8526,0,null);var path = cljs.core.nth.call(null,vec__8526,1,null);var vec__8527 = clojure.zip.children.call(null,loc);var c = cljs.core.nth.call(null,vec__8527,0,null);var cnext = cljs.core.nthnext.call(null,vec__8527,1);var cs = vec__8527;if(cljs.core.truth_(cs))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611),(cljs.core.truth_(path)?cljs.core.conj.call(null,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611).cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),new cljs.core.Keyword(null,"ppath","ppath",1120772103),path,new cljs.core.Keyword(null,"r","r",1013904356),cnext], null)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){var vec__8530 = loc;var node = cljs.core.nth.call(null,vec__8530,0,null);var map__8531 = cljs.core.nth.call(null,vec__8530,1,null);var map__8531__$1 = ((cljs.core.seq_QMARK_.call(null,map__8531))?cljs.core.apply.call(null,cljs.core.hash_map,map__8531):map__8531);var path = map__8531__$1;var l = cljs.core.get.call(null,map__8531__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__8531__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__8531__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var r = cljs.core.get.call(null,map__8531__$1,new cljs.core.Keyword(null,"r","r",1013904356));var changed_QMARK_ = cljs.core.get.call(null,map__8531__$1,new cljs.core.Keyword(null,"changed?","changed?",2446321533));if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__6359__auto__ = ppath;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__6359__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),loc.call(null,1)))
{return clojure.zip.node.call(null,loc);
} else
{var p = clojure.zip.up.call(null,loc);if(cljs.core.truth_(p))
{{
var G__8564 = p;
loc = G__8564;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){var vec__8535 = loc;var node = cljs.core.nth.call(null,vec__8535,0,null);var map__8536 = cljs.core.nth.call(null,vec__8535,1,null);var map__8536__$1 = ((cljs.core.seq_QMARK_.call(null,map__8536))?cljs.core.apply.call(null,cljs.core.hash_map,map__8536):map__8536);var path = map__8536__$1;var l = cljs.core.get.call(null,map__8536__$1,new cljs.core.Keyword(null,"l","l",1013904350));var vec__8537 = cljs.core.get.call(null,map__8536__$1,new cljs.core.Keyword(null,"r","r",1013904356));var r = cljs.core.nth.call(null,vec__8537,0,null);var rnext = cljs.core.nthnext.call(null,vec__8537,1);var rs = vec__8537;if(cljs.core.truth_((function (){var and__6359__auto__ = path;if(cljs.core.truth_(and__6359__auto__))
{return rs;
} else
{return and__6359__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,node),new cljs.core.Keyword(null,"r","r",1013904356),rnext)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){var vec__8540 = loc;var node = cljs.core.nth.call(null,vec__8540,0,null);var map__8541 = cljs.core.nth.call(null,vec__8540,1,null);var map__8541__$1 = ((cljs.core.seq_QMARK_.call(null,map__8541))?cljs.core.apply.call(null,cljs.core.hash_map,map__8541):map__8541);var path = map__8541__$1;var l = cljs.core.get.call(null,map__8541__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8541__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6359__auto__ = path;if(cljs.core.truth_(and__6359__auto__))
{return r;
} else
{return and__6359__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,r),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.apply.call(null,cljs.core.conj,l,node,cljs.core.butlast.call(null,r)),new cljs.core.Keyword(null,"r","r",1013904356),null)], null),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){var vec__8544 = loc;var node = cljs.core.nth.call(null,vec__8544,0,null);var map__8545 = cljs.core.nth.call(null,vec__8544,1,null);var map__8545__$1 = ((cljs.core.seq_QMARK_.call(null,map__8545))?cljs.core.apply.call(null,cljs.core.hash_map,map__8545):map__8545);var path = map__8545__$1;var l = cljs.core.get.call(null,map__8545__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8545__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6359__auto__ = path;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__6359__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,node,r))], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){var vec__8548 = loc;var node = cljs.core.nth.call(null,vec__8548,0,null);var map__8549 = cljs.core.nth.call(null,vec__8548,1,null);var map__8549__$1 = ((cljs.core.seq_QMARK_.call(null,map__8549))?cljs.core.apply.call(null,cljs.core.hash_map,map__8549):map__8549);var path = map__8549__$1;var l = cljs.core.get.call(null,map__8549__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__8549__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__6359__auto__ = path;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__6359__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.concat.call(null,cljs.core.rest.call(null,l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),r))], null),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){var vec__8552 = loc;var node = cljs.core.nth.call(null,vec__8552,0,null);var map__8553 = cljs.core.nth.call(null,vec__8552,1,null);var map__8553__$1 = ((cljs.core.seq_QMARK_.call(null,map__8553))?cljs.core.apply.call(null,cljs.core.hash_map,map__8553):map__8553);var path = map__8553__$1;var l = cljs.core.get.call(null,map__8553__$1,new cljs.core.Keyword(null,"l","l",1013904350));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__8556 = loc;var node = cljs.core.nth.call(null,vec__8556,0,null);var map__8557 = cljs.core.nth.call(null,vec__8556,1,null);var map__8557__$1 = ((cljs.core.seq_QMARK_.call(null,map__8557))?cljs.core.apply.call(null,cljs.core.hash_map,map__8557):map__8557);var path = map__8557__$1;var r = cljs.core.get.call(null,map__8557__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__8559 = loc;var _ = cljs.core.nth.call(null,vec__8559,0,null);var path = cljs.core.nth.call(null,vec__8559,1,null);return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
};
var edit = function (loc,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return edit__delegate.call(this,loc,f,args);};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__8565){
var loc = cljs.core.first(arglist__8565);
arglist__8565 = cljs.core.next(arglist__8565);
var f = cljs.core.first(arglist__8565);
var args = cljs.core.rest(arglist__8565);
return edit__delegate(loc,f,args);
});
edit.cljs$core$IFn$_invoke$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),loc.call(null,1)))
{return loc;
} else
{var or__6371__auto__ = (function (){var and__6359__auto__ = clojure.zip.branch_QMARK_.call(null,loc);if(cljs.core.truth_(and__6359__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__6359__auto__;
}
})();if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = clojure.zip.right.call(null,loc);if(cljs.core.truth_(or__6371__auto____$1))
{return or__6371__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__6371__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));if(cljs.core.truth_(or__6371__auto____$2))
{return or__6371__auto____$2;
} else
{{
var G__8566 = clojure.zip.up.call(null,p);
p = G__8566;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,p),new cljs.core.Keyword(null,"end","end",1014004813)], null);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){var temp__4090__auto__ = clojure.zip.left.call(null,loc);if(cljs.core.truth_(temp__4090__auto__))
{var lloc = temp__4090__auto__;var loc__$1 = lloc;while(true){
var temp__4090__auto____$1 = (function (){var and__6359__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__6359__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__6359__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;{
var G__8567 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8567;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),loc.call(null,1));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){var vec__8562 = loc;var node = cljs.core.nth.call(null,vec__8562,0,null);var map__8563 = cljs.core.nth.call(null,vec__8562,1,null);var map__8563__$1 = ((cljs.core.seq_QMARK_.call(null,map__8563))?cljs.core.apply.call(null,cljs.core.hash_map,map__8563):map__8563);var path = map__8563__$1;var l = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var rs = cljs.core.get.call(null,map__8563__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > 0))
{var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));while(true){
var temp__4090__auto__ = (function (){var and__6359__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__6359__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__6359__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__8568 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8568;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__6359__auto__ = ppath;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__6359__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip.whitespace')) {
goog.provide('rewrite_clj.zip.whitespace');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.node');
rewrite_clj.zip.whitespace.whitespace_QMARK_ = (function whitespace_QMARK_(zloc){var G__9350 = zloc;var G__9350__$1 = (((G__9350 == null))?null:clojure.zip.node.call(null,G__9350));var G__9350__$2 = (((G__9350__$1 == null))?null:rewrite_clj.node.whitespace_QMARK_.call(null,G__9350__$1));return G__9350__$2;
});
rewrite_clj.zip.whitespace.linebreak_QMARK_ = (function linebreak_QMARK_(zloc){var G__9352 = zloc;var G__9352__$1 = (((G__9352 == null))?null:clojure.zip.node.call(null,G__9352));var G__9352__$2 = (((G__9352__$1 == null))?null:rewrite_clj.node.linebreak_QMARK_.call(null,G__9352__$1));return G__9352__$2;
});
rewrite_clj.zip.whitespace.comment_QMARK_ = (function comment_QMARK_(zloc){var G__9354 = zloc;var G__9354__$1 = (((G__9354 == null))?null:clojure.zip.node.call(null,G__9354));var G__9354__$2 = (((G__9354__$1 == null))?null:rewrite_clj.node.comment_QMARK_.call(null,G__9354__$1));return G__9354__$2;
});
rewrite_clj.zip.whitespace.whitespace_not_linebreak_QMARK_ = (function whitespace_not_linebreak_QMARK_(zloc){var and__6359__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_.call(null,zloc);if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.not.call(null,rewrite_clj.zip.whitespace.linebreak_QMARK_.call(null,zloc));
} else
{return and__6359__auto__;
}
});
rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_ = (function whitespace_or_comment_QMARK_(zloc){var G__9356 = zloc;var G__9356__$1 = (((G__9356 == null))?null:clojure.zip.node.call(null,G__9356));var G__9356__$2 = (((G__9356__$1 == null))?null:rewrite_clj.node.whitespace_or_comment_QMARK_.call(null,G__9356__$1));return G__9356__$2;
});
/**
* Perform the given movement while the given predicate returns true.
*/
rewrite_clj.zip.whitespace.skip = (function skip(f,p_QMARK_,zloc){return cljs.core.first.call(null,cljs.core.drop_while.call(null,p_QMARK_,cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,f,zloc)))));
});
/**
* Perform the given movement (default: `z/right`) until a non-whitespace/
* non-comment node is encountered.
*/
rewrite_clj.zip.whitespace.skip_whitespace = (function() {
var skip_whitespace = null;
var skip_whitespace__1 = (function (zloc){return skip_whitespace.call(null,clojure.zip.right,zloc);
});
var skip_whitespace__2 = (function (f,zloc){return rewrite_clj.zip.whitespace.skip.call(null,f,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_,zloc);
});
skip_whitespace = function(f,zloc){
switch(arguments.length){
case 1:
return skip_whitespace__1.call(this,f);
case 2:
return skip_whitespace__2.call(this,f,zloc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
skip_whitespace.cljs$core$IFn$_invoke$arity$1 = skip_whitespace__1;
skip_whitespace.cljs$core$IFn$_invoke$arity$2 = skip_whitespace__2;
return skip_whitespace;
})()
;
/**
* Move left until a non-whitespace/non-comment node is encountered.
*/
rewrite_clj.zip.whitespace.skip_whitespace_left = (function skip_whitespace_left(zloc){return rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.left,zloc);
});
/**
* Prepend a whitespace node representing the given number of spaces (default: 1).
*/
rewrite_clj.zip.whitespace.prepend_space = (function() {
var prepend_space = null;
var prepend_space__1 = (function (zloc){return prepend_space.call(null,zloc,1);
});
var prepend_space__2 = (function (zloc,n){return clojure.zip.insert_left.call(null,zloc,rewrite_clj.node.spaces.call(null,n));
});
prepend_space = function(zloc,n){
switch(arguments.length){
case 1:
return prepend_space__1.call(this,zloc);
case 2:
return prepend_space__2.call(this,zloc,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_space.cljs$core$IFn$_invoke$arity$1 = prepend_space__1;
prepend_space.cljs$core$IFn$_invoke$arity$2 = prepend_space__2;
return prepend_space;
})()
;
/**
* Append a whitespace node representing the given number of spaces (default: 1).
*/
rewrite_clj.zip.whitespace.append_space = (function() {
var append_space = null;
var append_space__1 = (function (zloc){return append_space.call(null,zloc,1);
});
var append_space__2 = (function (zloc,n){return clojure.zip.insert_right.call(null,zloc,rewrite_clj.node.spaces.call(null,n));
});
append_space = function(zloc,n){
switch(arguments.length){
case 1:
return append_space__1.call(this,zloc);
case 2:
return append_space__2.call(this,zloc,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_space.cljs$core$IFn$_invoke$arity$1 = append_space__1;
append_space.cljs$core$IFn$_invoke$arity$2 = append_space__2;
return append_space;
})()
;
/**
* Prepend a newlines node representing the given number of newlines (default: 1).
*/
rewrite_clj.zip.whitespace.prepend_newline = (function() {
var prepend_newline = null;
var prepend_newline__1 = (function (zloc){return prepend_newline.call(null,zloc,1);
});
var prepend_newline__2 = (function (zloc,n){return clojure.zip.insert_left.call(null,zloc,rewrite_clj.node.newlines.call(null,n));
});
prepend_newline = function(zloc,n){
switch(arguments.length){
case 1:
return prepend_newline__1.call(this,zloc);
case 2:
return prepend_newline__2.call(this,zloc,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_newline.cljs$core$IFn$_invoke$arity$1 = prepend_newline__1;
prepend_newline.cljs$core$IFn$_invoke$arity$2 = prepend_newline__2;
return prepend_newline;
})()
;
/**
* Append a newline node representing the given number of newlines (default: 1).
*/
rewrite_clj.zip.whitespace.append_newline = (function() {
var append_newline = null;
var append_newline__1 = (function (zloc){return append_newline.call(null,zloc,1);
});
var append_newline__2 = (function (zloc,n){return clojure.zip.insert_right.call(null,zloc,rewrite_clj.node.newlines.call(null,n));
});
append_newline = function(zloc,n){
switch(arguments.length){
case 1:
return append_newline__1.call(this,zloc);
case 2:
return append_newline__2.call(this,zloc,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_newline.cljs$core$IFn$_invoke$arity$1 = append_newline__1;
append_newline.cljs$core$IFn$_invoke$arity$2 = append_newline__2;
return append_newline;
})()
;
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.parser.token')) {
goog.provide('rewrite_clj.parser.token');
goog.require('cljs.core');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.node');
/**
* @param {...*} var_args
*/
rewrite_clj.parser.token.read_to_boundary = (function() { 
var read_to_boundary__delegate = function (reader,p__9335){var vec__9337 = p__9335;var allowed = cljs.core.nth.call(null,vec__9337,0,null);var allowed_QMARK_ = cljs.core.set.call(null,allowed);return rewrite_clj.reader.read_until.call(null,reader,((function (allowed_QMARK_,vec__9337,allowed){
return (function (p1__9334_SHARP_){var and__6359__auto__ = cljs.core.not.call(null,allowed_QMARK_.call(null,p1__9334_SHARP_));if(and__6359__auto__)
{return rewrite_clj.reader.whitespace_or_boundary_QMARK_.call(null,p1__9334_SHARP_);
} else
{return and__6359__auto__;
}
});})(allowed_QMARK_,vec__9337,allowed))
);
};
var read_to_boundary = function (reader,var_args){
var p__9335 = null;if (arguments.length > 1) {
  p__9335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return read_to_boundary__delegate.call(this,reader,p__9335);};
read_to_boundary.cljs$lang$maxFixedArity = 1;
read_to_boundary.cljs$lang$applyTo = (function (arglist__9348){
var reader = cljs.core.first(arglist__9348);
var p__9335 = cljs.core.rest(arglist__9348);
return read_to_boundary__delegate(reader,p__9335);
});
read_to_boundary.cljs$core$IFn$_invoke$arity$variadic = read_to_boundary__delegate;
return read_to_boundary;
})()
;
rewrite_clj.parser.token.read_to_char_boundary = (function read_to_char_boundary(reader){var c = rewrite_clj.reader.next.call(null,reader);return [cljs.core.str(c),cljs.core.str(((cljs.core.not_EQ_.call(null,c,"\\"))?rewrite_clj.parser.token.read_to_boundary.call(null,reader):""))].join('');
});
/**
* Symbols allow for certain boundary characters that have
* to be handled explicitly.
*/
rewrite_clj.parser.token.symbol_node = (function symbol_node(reader,value,value_string){var suffix = rewrite_clj.parser.token.read_to_boundary.call(null,reader,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'",":"], null));if(cljs.core.empty_QMARK_.call(null,suffix))
{return rewrite_clj.node.token_node.call(null,value,value_string);
} else
{var s = [cljs.core.str(value_string),cljs.core.str(suffix)].join('');return rewrite_clj.node.token_node.call(null,rewrite_clj.reader.string__GT_edn.call(null,s),s);
}
});
/**
* Parse a single token.
*/
rewrite_clj.parser.token.parse_token = (function parse_token(reader){var first_char = rewrite_clj.reader.next.call(null,reader);var s = [cljs.core.str(first_char),cljs.core.str(((cljs.core._EQ_.call(null,first_char,"\\"))?rewrite_clj.parser.token.read_to_char_boundary.call(null,reader):rewrite_clj.parser.token.read_to_boundary.call(null,reader)))].join('');var v = rewrite_clj.reader.string__GT_edn.call(null,s);if((v instanceof cljs.core.Symbol))
{return rewrite_clj.parser.token.symbol_node.call(null,reader,v,s);
} else
{return rewrite_clj.node.token_node.call(null,v,s);
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.parser.whitespace')) {
goog.provide('rewrite_clj.parser.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.node');
/**
* Parse as much whitespace as possible. The created node can either contain
* only linebreaks or only space/tabs.
*/
rewrite_clj.parser.whitespace.parse_whitespace = (function parse_whitespace(reader){if(rewrite_clj.reader.linebreak_QMARK_.call(null,rewrite_clj.reader.peek.call(null,reader)))
{return rewrite_clj.node.newline_node.call(null,rewrite_clj.reader.read_while.call(null,reader,rewrite_clj.reader.linebreak_QMARK_));
} else
{return rewrite_clj.node.whitespace_node.call(null,rewrite_clj.reader.read_while.call(null,reader,rewrite_clj.reader.space_QMARK_));
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.parser.keyword')) {
goog.provide('rewrite_clj.parser.keyword');
goog.require('cljs.core');
goog.require('cljs.extended.reader');
goog.require('cljs.extended.reader');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.node');
rewrite_clj.parser.keyword.parse_keyword = (function parse_keyword(reader){rewrite_clj.reader.next.call(null,reader);
var temp__4090__auto__ = cljs.extended.reader.peek_char.call(null,reader);if(cljs.core.truth_(temp__4090__auto__))
{var c = temp__4090__auto__;if(cljs.core._EQ_.call(null,c,":"))
{return rewrite_clj.node.keyword_node.call(null,cljs.extended.reader.read_keyword.call(null,reader,":"),true);
} else
{cljs.extended.reader.unread.call(null,reader,":");
return rewrite_clj.node.keyword_node.call(null,cljs.extended.reader.read_keyword.call(null,reader,":"));
}
} else
{return rewrite_clj.reader.throw_reader.call(null,reader,"unexpected EOF while reading keyword.");
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.parser.string')) {
goog.provide('rewrite_clj.parser.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('cljs.extended.reader');
goog.require('cljs.extended.reader');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.node');
/**
* Flush buffer and add string to the given vector.
*/
rewrite_clj.parser.string.flush_into = (function flush_into(lines,buf){var s = buf.toString();buf.set("");
return cljs.core.conj.call(null,lines,s);
});
rewrite_clj.parser.string.read_string_data = (function read_string_data(reader){rewrite_clj.reader.ignore.call(null,reader);
var buf = (new goog.string.StringBuffer());var escape_QMARK_ = false;var lines = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4090__auto__ = cljs.extended.reader.read_char.call(null,reader);if(cljs.core.truth_(temp__4090__auto__))
{var c = temp__4090__auto__;if((!(escape_QMARK_)) && (cljs.core._EQ_.call(null,c,"\"")))
{return rewrite_clj.parser.string.flush_into.call(null,lines,buf);
} else
{if(cljs.core._EQ_.call(null,c,"\n"))
{{
var G__8843 = escape_QMARK_;
var G__8844 = rewrite_clj.parser.string.flush_into.call(null,lines,buf);
escape_QMARK_ = G__8843;
lines = G__8844;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{buf.append(c);
{
var G__8845 = (!(escape_QMARK_)) && (cljs.core._EQ_.call(null,c,"\\"));
var G__8846 = lines;
escape_QMARK_ = G__8845;
lines = G__8846;
continue;
}
} else
{return null;
}
}
}
} else
{return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF while reading string.");
}
break;
}
});
rewrite_clj.parser.string.parse_string = (function parse_string(reader){return rewrite_clj.node.string_node.call(null,rewrite_clj.parser.string.read_string_data.call(null,reader));
});
rewrite_clj.parser.string.parse_regex = (function parse_regex(reader){var vec__8832 = rewrite_clj.parser.string.read_string_data.call(null,reader);var h = cljs.core.nth.call(null,vec__8832,0,null);var _ = cljs.core.nthnext.call(null,vec__8832,1);return rewrite_clj.node.token_node.call(null,cljs.core.re_pattern.call(null,h));
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.parser.core')) {
goog.provide('rewrite_clj.parser.core');
goog.require('cljs.core');
goog.require('rewrite_clj.parser.whitespace');
goog.require('rewrite_clj.parser.token');
goog.require('rewrite_clj.parser.string');
goog.require('rewrite_clj.parser.keyword');
goog.require('rewrite_clj.parser.whitespace');
goog.require('rewrite_clj.parser.token');
goog.require('rewrite_clj.parser.string');
goog.require('rewrite_clj.parser.keyword');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.node');
rewrite_clj.parser.core._STAR_delimiter_STAR_ = null;
rewrite_clj.parser.core.dispatch = (function dispatch(c){if((c == null))
{return new cljs.core.Keyword(null,"eof","eof",1014004846);
} else
{if(cljs.core.truth_(rewrite_clj.reader.whitespace_QMARK_.call(null,c)))
{return new cljs.core.Keyword(null,"whitespace","whitespace",1290815983);
} else
{if(cljs.core._EQ_.call(null,c,rewrite_clj.parser.core._STAR_delimiter_STAR_))
{return new cljs.core.Keyword(null,"delimiter","delimiter",763386233);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays(["@","`","\"","#","'","(",")",":",";","[","{","]","}","^","~"],[new cljs.core.Keyword(null,"deref","deref",1109378020),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",3009198980),new cljs.core.Keyword(null,"string","string",4416885635),new cljs.core.Keyword(null,"sharp","sharp",1123304284),new cljs.core.Keyword(null,"quote","quote",1121858030),new cljs.core.Keyword(null,"list","list",1017226256),new cljs.core.Keyword(null,"unmatched","unmatched",3566567389),new cljs.core.Keyword(null,"keyword","keyword",4494463323),new cljs.core.Keyword(null,"comment","comment",1964302801),new cljs.core.Keyword(null,"vector","vector",4488484021),new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"unmatched","unmatched",3566567389),new cljs.core.Keyword(null,"unmatched","unmatched",3566567389),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"unquote","unquote",734812917)]),c,new cljs.core.Keyword(null,"token","token",1124445547));
} else
{return null;
}
}
}
}
});
rewrite_clj.parser.core.parse_next_STAR_ = (function (){var method_table__7229__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7230__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7232__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7233__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("parse-next*",cljs.core.comp.call(null,rewrite_clj.parser.core.dispatch,rewrite_clj.reader.peek),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7233__auto__,method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__));
})();
rewrite_clj.parser.core.parse_next = (function parse_next(reader){return rewrite_clj.reader.read_with_meta.call(null,reader,rewrite_clj.parser.core.parse_next_STAR_);
});
rewrite_clj.parser.core.parse_delim = (function parse_delim(reader,delimiter){rewrite_clj.reader.ignore.call(null,reader);
return rewrite_clj.reader.read_repeatedly.call(null,reader,(function (p1__8813_SHARP_){var _STAR_delimiter_STAR_8815 = rewrite_clj.parser.core._STAR_delimiter_STAR_;try{rewrite_clj.parser.core._STAR_delimiter_STAR_ = delimiter;
return rewrite_clj.parser.core.parse_next.call(null,p1__8813_SHARP_);
}finally {rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR_8815;
}}));
});
/**
* @param {...*} var_args
*/
rewrite_clj.parser.core.parse_printables = (function() { 
var parse_printables__delegate = function (reader,node_tag,n,p__8816){var vec__8818 = p__8816;var ignore_QMARK_ = cljs.core.nth.call(null,vec__8818,0,null);if(cljs.core.truth_(ignore_QMARK_))
{rewrite_clj.reader.ignore.call(null,reader);
} else
{}
return rewrite_clj.reader.read_n.call(null,reader,node_tag,rewrite_clj.parser.core.parse_next,cljs.core.complement.call(null,rewrite_clj.node.printable_only_QMARK_),n);
};
var parse_printables = function (reader,node_tag,n,var_args){
var p__8816 = null;if (arguments.length > 3) {
  p__8816 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return parse_printables__delegate.call(this,reader,node_tag,n,p__8816);};
parse_printables.cljs$lang$maxFixedArity = 3;
parse_printables.cljs$lang$applyTo = (function (arglist__8830){
var reader = cljs.core.first(arglist__8830);
arglist__8830 = cljs.core.next(arglist__8830);
var node_tag = cljs.core.first(arglist__8830);
arglist__8830 = cljs.core.next(arglist__8830);
var n = cljs.core.first(arglist__8830);
var p__8816 = cljs.core.rest(arglist__8830);
return parse_printables__delegate(reader,node_tag,n,p__8816);
});
parse_printables.cljs$core$IFn$_invoke$arity$variadic = parse_printables__delegate;
return parse_printables;
})()
;
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"token","token",1124445547),(function (reader){return rewrite_clj.parser.token.parse_token.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"delimiter","delimiter",763386233),(function (reader){return rewrite_clj.reader.ignore.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"unmatched","unmatched",3566567389),(function (reader){return rewrite_clj.reader.throw_reader.call(null,reader,"Unmatched delimiter: %s",rewrite_clj.reader.peek.call(null,reader));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"eof","eof",1014004846),(function (reader){if(cljs.core.truth_(rewrite_clj.parser.core._STAR_delimiter_STAR_))
{return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF.");
} else
{return null;
}
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983),(function (reader){return rewrite_clj.parser.whitespace.parse_whitespace.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"comment","comment",1964302801),(function (reader){rewrite_clj.reader.ignore.call(null,reader);
return rewrite_clj.node.comment_node.call(null,rewrite_clj.reader.read_include_linebreak.call(null,reader));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"keyword","keyword",4494463323),(function (reader){return rewrite_clj.parser.keyword.parse_keyword.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"string","string",4416885635),(function (reader){return rewrite_clj.parser.string.parse_string.call(null,reader);
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"meta","meta",1017252215),(function (reader){rewrite_clj.reader.ignore.call(null,reader);
return rewrite_clj.node.meta_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"meta","meta",1017252215),2));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"sharp","sharp",1123304284),(function (reader){rewrite_clj.reader.ignore.call(null,reader);
var G__8819 = rewrite_clj.reader.peek.call(null,reader);if(cljs.core._EQ_.call(null,"_",G__8819))
{return rewrite_clj.node.uneval_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"uneval","uneval",4468227623),1,true));
} else
{if(cljs.core._EQ_.call(null,"=",G__8819))
{return rewrite_clj.node.eval_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"eval","eval",1017029646),1,true));
} else
{if(cljs.core._EQ_.call(null,"'",G__8819))
{return rewrite_clj.node.var_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"var","var",1014020761),1,true));
} else
{if(cljs.core._EQ_.call(null,"^",G__8819))
{return rewrite_clj.node.raw_meta_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"meta","meta",1017252215),2,true));
} else
{if(cljs.core._EQ_.call(null,"\"",G__8819))
{return rewrite_clj.parser.string.parse_regex.call(null,reader);
} else
{if(cljs.core._EQ_.call(null,"(",G__8819))
{return rewrite_clj.node.fn_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,")"));
} else
{if(cljs.core._EQ_.call(null,"{",G__8819))
{return rewrite_clj.node.set_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,"}"));
} else
{if(cljs.core._EQ_.call(null,null,G__8819))
{return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF.");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return rewrite_clj.node.reader_macro_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",3215531444),2));
} else
{return null;
}
}
}
}
}
}
}
}
}
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"deref","deref",1109378020),(function (reader){return rewrite_clj.node.deref_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"deref","deref",1109378020),1,true));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"quote","quote",1121858030),(function (reader){return rewrite_clj.node.quote_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"quote","quote",1121858030),1,true));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",3009198980),(function (reader){return rewrite_clj.node.syntax_quote_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",3009198980),1,true));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"unquote","unquote",734812917),(function (reader){rewrite_clj.reader.ignore.call(null,reader);
var c = rewrite_clj.reader.peek.call(null,reader);if(cljs.core._EQ_.call(null,c,"@"))
{return rewrite_clj.node.unquote_splicing_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"unquote","unquote",734812917),1,true));
} else
{return rewrite_clj.node.unquote_node.call(null,rewrite_clj.parser.core.parse_printables.call(null,reader,new cljs.core.Keyword(null,"unquote","unquote",734812917),1));
}
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"list","list",1017226256),(function (reader){return rewrite_clj.node.list_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,")"));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"vector","vector",4488484021),(function (reader){return rewrite_clj.node.vector_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,"]"));
}));
cljs.core._add_method.call(null,rewrite_clj.parser.core.parse_next_STAR_,new cljs.core.Keyword(null,"map","map",1014012110),(function (reader){return rewrite_clj.node.map_node.call(null,rewrite_clj.parser.core.parse_delim.call(null,reader,"}"));
}));
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.parser')) {
goog.provide('rewrite_clj.parser');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.reader');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser.core');
goog.require('rewrite_clj.parser.core');
/**
* Parse next form from the given reader.
*/
rewrite_clj.parser.parse = (function parse(reader){return rewrite_clj.parser.core.parse_next.call(null,reader);
});
/**
* Parse all forms from the given reader.
*/
rewrite_clj.parser.parse_all = (function parse_all(reader){var nodes = cljs.core.doall.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,(function (){return rewrite_clj.parser.parse.call(null,reader);
}))));return cljs.core.with_meta.call(null,rewrite_clj.node.forms_node.call(null,nodes),cljs.core.meta.call(null,cljs.core.first.call(null,nodes)));
});
/**
* Parse first form in the given string.
*/
rewrite_clj.parser.parse_string = (function parse_string(s){return rewrite_clj.parser.parse.call(null,rewrite_clj.reader.string_reader.call(null,s));
});
/**
* Parse all forms in the given string.
*/
rewrite_clj.parser.parse_string_all = (function parse_string_all(s){return rewrite_clj.parser.parse_all.call(null,rewrite_clj.reader.string_reader.call(null,s));
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip.base')) {
goog.provide('rewrite_clj.zip.base');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.node');
/**
* Create zipper over the given Clojure/EDN node.
*/
rewrite_clj.zip.base.edn_STAR_ = (function edn_STAR_(node){return clojure.zip.zipper.call(null,rewrite_clj.node.inner_QMARK_,cljs.core.comp.call(null,cljs.core.seq,rewrite_clj.node.children),rewrite_clj.node.replace_children,node);
});
/**
* Create zipper over the given Clojure/EDN node and move
* to the first non-whitespace/non-comment child.
*/
rewrite_clj.zip.base.edn = (function edn(node){while(true){
if(cljs.core._EQ_.call(null,rewrite_clj.node.tag.call(null,node),new cljs.core.Keyword(null,"forms","forms",1111523233)))
{var top = rewrite_clj.zip.base.edn_STAR_.call(null,node);var or__6371__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.down.call(null,top));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return top;
}
} else
{{
var G__8659 = rewrite_clj.node.forms_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
node = G__8659;
continue;
}
}
break;
}
});
/**
* Get tag of node at the current zipper location.
*/
rewrite_clj.zip.base.tag = (function tag(zloc){var G__8632 = zloc;var G__8632__$1 = (((G__8632 == null))?null:clojure.zip.node.call(null,G__8632));var G__8632__$2 = (((G__8632__$1 == null))?null:rewrite_clj.node.tag.call(null,G__8632__$1));return G__8632__$2;
});
/**
* Get sexpr represented by the given node.
*/
rewrite_clj.zip.base.sexpr = (function sexpr(zloc){var G__8634 = zloc;var G__8634__$1 = (((G__8634 == null))?null:clojure.zip.node.call(null,G__8634));var G__8634__$2 = (((G__8634__$1 == null))?null:rewrite_clj.node.sexpr.call(null,G__8634__$1));return G__8634__$2;
});
/**
* Get children as s-expressions.
*/
rewrite_clj.zip.base.child_sexprs = (function child_sexprs(zloc){var G__8636 = zloc;var G__8636__$1 = (((G__8636 == null))?null:clojure.zip.node.call(null,G__8636));var G__8636__$2 = (((G__8636__$1 == null))?null:rewrite_clj.node.child_sexprs.call(null,G__8636__$1));return G__8636__$2;
});
/**
* Get length of printable string for the given zipper location.
*/
rewrite_clj.zip.base.length = (function length(zloc){var or__6371__auto__ = (function (){var G__8640 = zloc;var G__8640__$1 = (((G__8640 == null))?null:clojure.zip.node.call(null,G__8640));var G__8640__$2 = (((G__8640__$1 == null))?null:rewrite_clj.node.length.call(null,G__8640__$1));return G__8640__$2;
})();if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return 0;
}
});
/**
* DEPRECATED. Return a tag/s-expression pair for inner nodes, or
* the s-expression itself for leaves.
*/
rewrite_clj.zip.base.value = (function value(zloc){var G__8642 = zloc;var G__8642__$1 = (((G__8642 == null))?null:clojure.zip.node.call(null,G__8642));var G__8642__$2 = (((G__8642__$1 == null))?null:rewrite_clj.node.value.call(null,G__8642__$1));return G__8642__$2;
});
/**
* Create zipper from String.
*/
rewrite_clj.zip.base.of_string = (function of_string(s){var G__8644 = s;var G__8644__$1 = (((G__8644 == null))?null:rewrite_clj.parser.parse_string_all.call(null,G__8644));var G__8644__$2 = (((G__8644__$1 == null))?null:rewrite_clj.zip.base.edn.call(null,G__8644__$1));return G__8644__$2;
});
/**
* Create string representing the current zipper location.
*/
rewrite_clj.zip.base.string = (function string(zloc){var G__8646 = zloc;var G__8646__$1 = (((G__8646 == null))?null:clojure.zip.node.call(null,G__8646));var G__8646__$2 = (((G__8646__$1 == null))?null:rewrite_clj.node.string.call(null,G__8646__$1));return G__8646__$2;
});
/**
* Create string representing the zipped-up zipper.
*/
rewrite_clj.zip.base.root_string = (function root_string(zloc){var G__8648 = zloc;var G__8648__$1 = (((G__8648 == null))?null:clojure.zip.root.call(null,G__8648));var G__8648__$2 = (((G__8648__$1 == null))?null:rewrite_clj.node.string.call(null,G__8648__$1));return G__8648__$2;
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip.move')) {
goog.provide('rewrite_clj.zip.move');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.whitespace');
/**
* Move right to next non-whitespace/non-comment location.
*/
rewrite_clj.zip.move.right = (function right(zloc){var G__8604 = zloc;var G__8604__$1 = (((G__8604 == null))?null:clojure.zip.right.call(null,G__8604));var G__8604__$2 = (((G__8604__$1 == null))?null:rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__8604__$1));return G__8604__$2;
});
/**
* Move left to next non-whitespace/non-comment location.
*/
rewrite_clj.zip.move.left = (function left(zloc){var G__8606 = zloc;var G__8606__$1 = (((G__8606 == null))?null:clojure.zip.left.call(null,G__8606));var G__8606__$2 = (((G__8606__$1 == null))?null:rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__8606__$1));return G__8606__$2;
});
/**
* Move down to next non-whitespace/non-comment location.
*/
rewrite_clj.zip.move.down = (function down(zloc){var G__8608 = zloc;var G__8608__$1 = (((G__8608 == null))?null:clojure.zip.down.call(null,G__8608));var G__8608__$2 = (((G__8608__$1 == null))?null:rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__8608__$1));return G__8608__$2;
});
/**
* Move up to next non-whitespace/non-comment location.
*/
rewrite_clj.zip.move.up = (function up(zloc){var G__8610 = zloc;var G__8610__$1 = (((G__8610 == null))?null:clojure.zip.up.call(null,G__8610));var G__8610__$2 = (((G__8610__$1 == null))?null:rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__8610__$1));return G__8610__$2;
});
/**
* Move to the next non-whitespace/non-comment location in a depth-first manner.
*/
rewrite_clj.zip.move.next = (function next(zloc){if(cljs.core.truth_(zloc))
{var or__6371__auto__ = (function (){var G__8614 = zloc;var G__8614__$1 = (((G__8614 == null))?null:clojure.zip.next.call(null,G__8614));var G__8614__$2 = (((G__8614__$1 == null))?null:rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.next,G__8614__$1));return G__8614__$2;
})();if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.vary_meta.call(null,zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",4242208725),true);
}
} else
{return null;
}
});
/**
* Check whether the given node is at the end of the depth-first traversal.
*/
rewrite_clj.zip.move.end_QMARK_ = (function end_QMARK_(zloc){var or__6371__auto__ = cljs.core.not.call(null,zloc);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = clojure.zip.end_QMARK_.call(null,zloc);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{return new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",4242208725).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,zloc));
}
}
});
/**
* Check if the given location represents the leftmost non-whitespace/
* non-comment one.
*/
rewrite_clj.zip.move.rightmost_QMARK_ = (function rightmost_QMARK_(zloc){return (rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.right.call(null,zloc)) == null);
});
/**
* Check if the given location represents the leftmost non-whitespace/
* non-comment one.
*/
rewrite_clj.zip.move.leftmost_QMARK_ = (function leftmost_QMARK_(zloc){return (rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,clojure.zip.left.call(null,zloc)) == null);
});
/**
* Move to the next non-whitespace/non-comment location in a depth-first manner.
*/
rewrite_clj.zip.move.prev = (function prev(zloc){var G__8616 = zloc;var G__8616__$1 = (((G__8616 == null))?null:clojure.zip.prev.call(null,G__8616));var G__8616__$2 = (((G__8616__$1 == null))?null:rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.prev,G__8616__$1));return G__8616__$2;
});
/**
* Move to the leftmost non-whitespace/non-comment location.
*/
rewrite_clj.zip.move.leftmost = (function leftmost(zloc){var G__8618 = zloc;var G__8618__$1 = (((G__8618 == null))?null:clojure.zip.leftmost.call(null,G__8618));var G__8618__$2 = (((G__8618__$1 == null))?null:rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__8618__$1));return G__8618__$2;
});
/**
* Move to the rightmost non-whitespace/non-comment location.
*/
rewrite_clj.zip.move.rightmost = (function rightmost(zloc){var G__8620 = zloc;var G__8620__$1 = (((G__8620 == null))?null:clojure.zip.rightmost.call(null,G__8620));var G__8620__$2 = (((G__8620__$1 == null))?null:rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__8620__$1));return G__8620__$2;
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip.findz')) {
goog.provide('rewrite_clj.zip.findz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.base');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip.whitespace');
/**
* @param {...*} var_args
*/
rewrite_clj.zip.findz.tag_predicate = (function() { 
var tag_predicate__delegate = function (t,p__8735){var vec__8737 = p__8735;var additional = cljs.core.nth.call(null,vec__8737,0,null);if(cljs.core.truth_(additional))
{return ((function (vec__8737,additional){
return (function (node){var and__6359__auto__ = cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,node),t);if(and__6359__auto__)
{return additional.call(null,node);
} else
{return and__6359__auto__;
}
});
;})(vec__8737,additional))
} else
{return ((function (vec__8737,additional){
return (function (p1__8734_SHARP_){return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,p1__8734_SHARP_),t);
});
;})(vec__8737,additional))
}
};
var tag_predicate = function (t,var_args){
var p__8735 = null;if (arguments.length > 1) {
  p__8735 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tag_predicate__delegate.call(this,t,p__8735);};
tag_predicate.cljs$lang$maxFixedArity = 1;
tag_predicate.cljs$lang$applyTo = (function (arglist__8760){
var t = cljs.core.first(arglist__8760);
var p__8735 = cljs.core.rest(arglist__8760);
return tag_predicate__delegate(t,p__8735);
});
tag_predicate.cljs$core$IFn$_invoke$arity$variadic = tag_predicate__delegate;
return tag_predicate;
})()
;
rewrite_clj.zip.findz.in_range_QMARK_ = (function in_range_QMARK_(p__8738,p__8739){var map__8742 = p__8738;var map__8742__$1 = ((cljs.core.seq_QMARK_.call(null,map__8742))?cljs.core.apply.call(null,cljs.core.hash_map,map__8742):map__8742);var end_col = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"end-col","end-col",3700460800));var end_row = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"end-row","end-row",3700475226));var col = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"col","col",1014002930));var row = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"row","row",1014017356));var map__8743 = p__8739;var map__8743__$1 = ((cljs.core.seq_QMARK_.call(null,map__8743))?cljs.core.apply.call(null,cljs.core.hash_map,map__8743):map__8743);var r = cljs.core.get.call(null,map__8743__$1,new cljs.core.Keyword(null,"row","row",1014017356));var c = cljs.core.get.call(null,map__8743__$1,new cljs.core.Keyword(null,"col","col",1014002930));if(((row > r)) || ((r > end_row)))
{return false;
} else
{if(((r > row)) && ((end_row > r)))
{return true;
} else
{if(((c >= col)) && ((end_col > c)))
{return true;
} else
{if((cljs.core._EQ_.call(null,r,row)) && ((end_row > r)) && ((c >= col)))
{return true;
} else
{if((cljs.core._EQ_.call(null,r,end_row)) && ((end_row > r)) && ((col >= c)))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
}
});
/**
* Find node satisfying the given predicate by repeatedly
* applying the given movement function to the initial zipper
* location.
*/
rewrite_clj.zip.findz.find = (function() {
var find = null;
var find__2 = (function (zloc,p_QMARK_){return find.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});
var find__3 = (function (zloc,f,p_QMARK_){return cljs.core.first.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,p_QMARK_),cljs.core.take_while.call(null,cljs.core.complement.call(null,rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,f,zloc)))));
});
find = function(zloc,f,p_QMARK_){
switch(arguments.length){
case 2:
return find__2.call(this,zloc,f);
case 3:
return find__3.call(this,zloc,f,p_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find.cljs$core$IFn$_invoke$arity$2 = find__2;
find.cljs$core$IFn$_invoke$arity$3 = find__3;
return find;
})()
;
/**
* Find last node (if more than one node) that is in range of pos and
* satisfying the given predicate depth first from initial zipper
* location.
*/
rewrite_clj.zip.findz.find_last_by_pos = (function() {
var find_last_by_pos = null;
var find_last_by_pos__2 = (function (zloc,pos){return find_last_by_pos.call(null,zloc,pos,cljs.core.constantly.call(null,true));
});
var find_last_by_pos__3 = (function (zloc,pos,p_QMARK_){return cljs.core.last.call(null,cljs.core.filter.call(null,(function (p1__8744_SHARP_){var and__6359__auto__ = p_QMARK_.call(null,p1__8744_SHARP_);if(cljs.core.truth_(and__6359__auto__))
{return rewrite_clj.zip.findz.in_range_QMARK_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,p1__8744_SHARP_)),pos);
} else
{return and__6359__auto__;
}
}),cljs.core.take_while.call(null,cljs.core.complement.call(null,rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,clojure.zip.next,zloc)))));
});
find_last_by_pos = function(zloc,pos,p_QMARK_){
switch(arguments.length){
case 2:
return find_last_by_pos__2.call(this,zloc,pos);
case 3:
return find_last_by_pos__3.call(this,zloc,pos,p_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_last_by_pos.cljs$core$IFn$_invoke$arity$2 = find_last_by_pos__2;
find_last_by_pos.cljs$core$IFn$_invoke$arity$3 = find_last_by_pos__3;
return find_last_by_pos;
})()
;
/**
* Find node satisfying the given predicate by traversing
* the zipper in a depth-first way.
*/
rewrite_clj.zip.findz.find_depth_first = (function find_depth_first(zloc,p_QMARK_){return rewrite_clj.zip.findz.find.call(null,zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
* Find node other than the current zipper location matching
* the given predicate by applying the given movement function
* to the initial zipper location.
*/
rewrite_clj.zip.findz.find_next = (function() {
var find_next = null;
var find_next__2 = (function (zloc,p_QMARK_){return find_next.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});
var find_next__3 = (function (zloc,f,p_QMARK_){var G__8746 = zloc;var G__8746__$1 = (((G__8746 == null))?null:f.call(null,G__8746));var G__8746__$2 = (((G__8746__$1 == null))?null:rewrite_clj.zip.findz.find.call(null,G__8746__$1,f,p_QMARK_));return G__8746__$2;
});
find_next = function(zloc,f,p_QMARK_){
switch(arguments.length){
case 2:
return find_next__2.call(this,zloc,f);
case 3:
return find_next__3.call(this,zloc,f,p_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_next.cljs$core$IFn$_invoke$arity$2 = find_next__2;
find_next.cljs$core$IFn$_invoke$arity$3 = find_next__3;
return find_next;
})()
;
/**
* Find node other than the current zipper location matching
* the given predicate by traversing the zipper in a
* depth-first way.
*/
rewrite_clj.zip.findz.find_next_depth_first = (function find_next_depth_first(zloc,p_QMARK_){return rewrite_clj.zip.findz.find_next.call(null,zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
* Find node with the given tag by repeatedly applying the given
* movement function to the initial zipper location.
*/
rewrite_clj.zip.findz.find_tag = (function() {
var find_tag = null;
var find_tag__2 = (function (zloc,t){return find_tag.call(null,zloc,rewrite_clj.zip.move.right,t);
});
var find_tag__3 = (function (zloc,f,t){return rewrite_clj.zip.findz.find.call(null,zloc,f,(function (p1__8747_SHARP_){return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,p1__8747_SHARP_),t);
}));
});
find_tag = function(zloc,f,t){
switch(arguments.length){
case 2:
return find_tag__2.call(this,zloc,f);
case 3:
return find_tag__3.call(this,zloc,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_tag.cljs$core$IFn$_invoke$arity$2 = find_tag__2;
find_tag.cljs$core$IFn$_invoke$arity$3 = find_tag__3;
return find_tag;
})()
;
/**
* Find node other than the current zipper location with the
* given tag by repeatedly applying the given movement function to
* the initial zipper location.
*/
rewrite_clj.zip.findz.find_next_tag = (function() {
var find_next_tag = null;
var find_next_tag__2 = (function (zloc,t){return find_next_tag.call(null,zloc,rewrite_clj.zip.move.right,t);
});
var find_next_tag__3 = (function (zloc,f,t){return rewrite_clj.zip.findz.find_next.call(null,zloc,f,rewrite_clj.zip.findz.tag_predicate.call(null,t));
});
find_next_tag = function(zloc,f,t){
switch(arguments.length){
case 2:
return find_next_tag__2.call(this,zloc,f);
case 3:
return find_next_tag__3.call(this,zloc,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_next_tag.cljs$core$IFn$_invoke$arity$2 = find_next_tag__2;
find_next_tag.cljs$core$IFn$_invoke$arity$3 = find_next_tag__3;
return find_next_tag;
})()
;
/**
* Find node with the given tag and pos depth-first from initial zipper location.
*/
rewrite_clj.zip.findz.find_tag_by_pos = (function find_tag_by_pos(zloc,pos,t){return rewrite_clj.zip.findz.find_last_by_pos.call(null,zloc,pos,(function (p1__8748_SHARP_){return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,p1__8748_SHARP_),t);
}));
});
/**
* Find token node matching the given predicate by applying the
* given movement function to the initial zipper location, defaulting
* to `right`.
*/
rewrite_clj.zip.findz.find_token = (function() {
var find_token = null;
var find_token__2 = (function (zloc,p_QMARK_){return find_token.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});
var find_token__3 = (function (zloc,f,p_QMARK_){return rewrite_clj.zip.findz.find.call(null,zloc,f,rewrite_clj.zip.findz.tag_predicate.call(null,new cljs.core.Keyword(null,"token","token",1124445547),p_QMARK_));
});
find_token = function(zloc,f,p_QMARK_){
switch(arguments.length){
case 2:
return find_token__2.call(this,zloc,f);
case 3:
return find_token__3.call(this,zloc,f,p_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_token.cljs$core$IFn$_invoke$arity$2 = find_token__2;
find_token.cljs$core$IFn$_invoke$arity$3 = find_token__3;
return find_token;
})()
;
/**
* Find next token node matching the given predicate by applying the
* given movement function to the initial zipper location, defaulting
* to `right`.
*/
rewrite_clj.zip.findz.find_next_token = (function() {
var find_next_token = null;
var find_next_token__2 = (function (zloc,p_QMARK_){return find_next_token.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});
var find_next_token__3 = (function (zloc,f,p_QMARK_){return rewrite_clj.zip.findz.find_token.call(null,f.call(null,zloc),f,p_QMARK_);
});
find_next_token = function(zloc,f,p_QMARK_){
switch(arguments.length){
case 2:
return find_next_token__2.call(this,zloc,f);
case 3:
return find_next_token__3.call(this,zloc,f,p_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_next_token.cljs$core$IFn$_invoke$arity$2 = find_next_token__2;
find_next_token.cljs$core$IFn$_invoke$arity$3 = find_next_token__3;
return find_next_token;
})()
;
/**
* Find token node whose value matches the given one by applying the
* given movement function to the initial zipper location, defaulting
* to `right`.
*/
rewrite_clj.zip.findz.find_value = (function() {
var find_value = null;
var find_value__2 = (function (zloc,v){return find_value.call(null,zloc,rewrite_clj.zip.move.right,v);
});
var find_value__3 = (function (zloc,f,v){var p_QMARK_ = ((cljs.core.set_QMARK_.call(null,v))?cljs.core.comp.call(null,v,rewrite_clj.zip.base.sexpr):(function (p1__8749_SHARP_){return cljs.core._EQ_.call(null,rewrite_clj.zip.base.sexpr.call(null,p1__8749_SHARP_),v);
}));return rewrite_clj.zip.findz.find_token.call(null,zloc,f,p_QMARK_);
});
find_value = function(zloc,f,v){
switch(arguments.length){
case 2:
return find_value__2.call(this,zloc,f);
case 3:
return find_value__3.call(this,zloc,f,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_value.cljs$core$IFn$_invoke$arity$2 = find_value__2;
find_value.cljs$core$IFn$_invoke$arity$3 = find_value__3;
return find_value;
})()
;
/**
* Find next token node whose value matches the given one by applying the
* given movement function to the initial zipper location, defaulting
* to `right`.
*/
rewrite_clj.zip.findz.find_next_value = (function() {
var find_next_value = null;
var find_next_value__2 = (function (zloc,v){return find_next_value.call(null,zloc,rewrite_clj.zip.move.right,v);
});
var find_next_value__3 = (function (zloc,f,v){return rewrite_clj.zip.findz.find_value.call(null,f.call(null,zloc),f,v);
});
find_next_value = function(zloc,f,v){
switch(arguments.length){
case 2:
return find_next_value__2.call(this,zloc,f);
case 3:
return find_next_value__3.call(this,zloc,f,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_next_value.cljs$core$IFn$_invoke$arity$2 = find_next_value__2;
find_next_value.cljs$core$IFn$_invoke$arity$3 = find_next_value__3;
return find_next_value;
})()
;
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip.utils')) {
goog.provide('rewrite_clj.zip.utils');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
rewrite_clj.zip.utils.update_in_path = (function update_in_path(p__8685,k,f){var vec__8687 = p__8685;var node = cljs.core.nth.call(null,vec__8687,0,null);var path = cljs.core.nth.call(null,vec__8687,1,null);var loc = vec__8687;var v = cljs.core.get.call(null,path,k);if(cljs.core.seq.call(null,v))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,k,f.call(null,v),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Remove right sibling of the current node (if there is one).
*/
rewrite_clj.zip.utils.remove_right = (function remove_right(loc){return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.next);
});
/**
* Remove left sibling of the current node (if there is one).
*/
rewrite_clj.zip.utils.remove_left = (function remove_left(loc){return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop);
});
rewrite_clj.zip.utils.remove_while = (function remove_while(zloc,p_QMARK_){var zloc__$1 = zloc;while(true){
var ploc = clojure.zip.prev.call(null,zloc__$1);if(cljs.core.not.call(null,(function (){var and__6359__auto__ = ploc;if(cljs.core.truth_(and__6359__auto__))
{return p_QMARK_.call(null,ploc);
} else
{return and__6359__auto__;
}
})()))
{return zloc__$1;
} else
{{
var G__8712 = clojure.zip.remove.call(null,zloc__$1);
zloc__$1 = G__8712;
continue;
}
}
break;
}
});
/**
* Remove elements to the right of the current zipper location as long as
* the given predicate matches.
*/
rewrite_clj.zip.utils.remove_right_while = (function remove_right_while(zloc,p_QMARK_){var zloc__$1 = zloc;while(true){
var temp__4090__auto__ = clojure.zip.right.call(null,zloc__$1);if(cljs.core.truth_(temp__4090__auto__))
{var rloc = temp__4090__auto__;if(cljs.core.truth_(p_QMARK_.call(null,rloc)))
{{
var G__8713 = rewrite_clj.zip.utils.remove_right.call(null,zloc__$1);
zloc__$1 = G__8713;
continue;
}
} else
{return zloc__$1;
}
} else
{return zloc__$1;
}
break;
}
});
/**
* Remove elements to the left of the current zipper location as long as
* the given predicate matches.
*/
rewrite_clj.zip.utils.remove_left_while = (function remove_left_while(zloc,p_QMARK_){var zloc__$1 = zloc;while(true){
var temp__4090__auto__ = clojure.zip.left.call(null,zloc__$1);if(cljs.core.truth_(temp__4090__auto__))
{var lloc = temp__4090__auto__;if(cljs.core.truth_(p_QMARK_.call(null,lloc)))
{{
var G__8714 = rewrite_clj.zip.utils.remove_left.call(null,zloc__$1);
zloc__$1 = G__8714;
continue;
}
} else
{return zloc__$1;
}
} else
{return zloc__$1;
}
break;
}
});
/**
* Remove current node and move left. If current node is at the leftmost
* location, returns `nil`.
*/
rewrite_clj.zip.utils.remove_and_move_left = (function remove_and_move_left(p__8688){var vec__8691 = p__8688;var _ = cljs.core.nth.call(null,vec__8691,0,null);var map__8692 = cljs.core.nth.call(null,vec__8691,1,null);var map__8692__$1 = ((cljs.core.seq_QMARK_.call(null,map__8692))?cljs.core.apply.call(null,cljs.core.hash_map,map__8692):map__8692);var path = map__8692__$1;var l = cljs.core.get.call(null,map__8692__$1,new cljs.core.Keyword(null,"l","l",1013904350));var loc = vec__8691;if(cljs.core.seq.call(null,l))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1013904350)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Remove current node and move right. If current node is at the rightmost
* location, returns `nil`.
*/
rewrite_clj.zip.utils.remove_and_move_right = (function remove_and_move_right(p__8693){var vec__8696 = p__8693;var _ = cljs.core.nth.call(null,vec__8696,0,null);var map__8697 = cljs.core.nth.call(null,vec__8696,1,null);var map__8697__$1 = ((cljs.core.seq_QMARK_.call(null,map__8697))?cljs.core.apply.call(null,cljs.core.hash_map,map__8697):map__8697);var path = map__8697__$1;var r = cljs.core.get.call(null,map__8697__$1,new cljs.core.Keyword(null,"r","r",1013904356));var loc = vec__8696;if(cljs.core.seq.call(null,r))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,r),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",1013904356)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
rewrite_clj.zip.utils.remove_and_move_up = (function remove_and_move_up(loc){var vec__8700 = loc;var node = cljs.core.nth.call(null,vec__8700,0,null);var map__8701 = cljs.core.nth.call(null,vec__8700,1,null);var map__8701__$1 = ((cljs.core.seq_QMARK_.call(null,map__8701))?cljs.core.apply.call(null,cljs.core.hash_map,map__8701):map__8701);var path = map__8701__$1;var l = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var rs = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw (new Error("Remove at top"));
} else
{if((cljs.core.count.call(null,l) > 0))
{return clojure.zip.up.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc)));
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__6359__auto__ = ppath;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__6359__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip.removez')) {
goog.provide('rewrite_clj.zip.removez');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.utils');
goog.require('rewrite_clj.zip.utils');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.move');
/**
* Remove all whitespace following a given node.
*/
rewrite_clj.zip.removez.remove_trailing_space = (function remove_trailing_space(zloc,p_QMARK_){return rewrite_clj.zip.utils.remove_right_while.call(null,zloc,p_QMARK_);
});
/**
* Remove all whitespace preceding a given node.
*/
rewrite_clj.zip.removez.remove_preceding_space = (function remove_preceding_space(zloc,p_QMARK_){return rewrite_clj.zip.utils.remove_left_while.call(null,zloc,p_QMARK_);
});
/**
* Remove value at the given zipper location. Returns the first non-whitespace
* node that would have preceded it in a depth-first walk. Will remove whitespace
* appropriately.
* 
* - `[1  2  3]   => [1  3]`
* - `[1 2]       => [1]`
* - `[1 2]       => [2]`
* - `[1]         => []`
* - `[  1  ]     => []`
* - `[1 [2 3] 4] => [1 [2 3]]`
* - `[1 [2 3] 4] => [[2 3] 4]`
* 
* If a node is located rightmost, both preceding and trailing spaces are removed,
* otherwise only trailing spaces are touched. This means that a following element
* (no matter whether on the same line or not) will end up in the same position
* (line/column) as the removed one, _unless_ a comment lies between the original
* node and the neighbour.
*/
rewrite_clj.zip.removez.remove = (function remove(zloc){if(cljs.core.truth_(zloc))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"zloc","zloc",-1636789697,null)))].join('')));
}
var _PERCENT_ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.prev,clojure.zip.remove.call(null,rewrite_clj.zip.removez.remove_trailing_space.call(null,(((rewrite_clj.zip.move.rightmost_QMARK_.call(null,zloc)) || (rewrite_clj.zip.move.leftmost_QMARK_.call(null,zloc)))?rewrite_clj.zip.removez.remove_preceding_space.call(null,zloc,rewrite_clj.zip.whitespace.whitespace_QMARK_):zloc),rewrite_clj.zip.whitespace.whitespace_QMARK_)));if(cljs.core.truth_(_PERCENT_))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"%","%",-1640531490,null)))].join('')));
}
return _PERCENT_;
});
/**
* Same as remove but preserves newlines
*/
rewrite_clj.zip.removez.remove_preserve_newline = (function remove_preserve_newline(zloc){if(cljs.core.truth_(zloc))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"zloc","zloc",-1636789697,null)))].join('')));
}
var _PERCENT_ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.prev,clojure.zip.remove.call(null,rewrite_clj.zip.removez.remove_trailing_space.call(null,(((rewrite_clj.zip.move.rightmost_QMARK_.call(null,zloc)) || (rewrite_clj.zip.move.leftmost_QMARK_.call(null,zloc)))?rewrite_clj.zip.removez.remove_preceding_space.call(null,zloc,(function (p1__8673_SHARP_){var and__6359__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_.call(null,p1__8673_SHARP_);if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.not.call(null,rewrite_clj.zip.whitespace.linebreak_QMARK_.call(null,p1__8673_SHARP_));
} else
{return and__6359__auto__;
}
})):zloc),(function (p1__8674_SHARP_){var and__6359__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_.call(null,p1__8674_SHARP_);if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.not.call(null,rewrite_clj.zip.whitespace.linebreak_QMARK_.call(null,p1__8674_SHARP_));
} else
{return and__6359__auto__;
}
}))));if(cljs.core.truth_(_PERCENT_))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"%","%",-1640531490,null)))].join('')));
}
return _PERCENT_;
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip.editz')) {
goog.provide('rewrite_clj.zip.editz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.utils');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.utils');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip.whitespace');
/**
* Replace the node at the given location with one representing
* the given value. (The value will be coerced to a node if
* possible.)
*/
rewrite_clj.zip.editz.replace = (function replace(zloc,value){return clojure.zip.replace.call(null,zloc,rewrite_clj.node.coerce.call(null,value));
});
/**
* Create s-expression from node, apply the function and create
* node from the result.
*/
rewrite_clj.zip.editz.edit_node = (function edit_node(node,f){return rewrite_clj.node.coerce.call(null,f.call(null,rewrite_clj.node.sexpr.call(null,node)));
});
/**
* Apply the given function to the s-expression at the given
* location, using its result to replace the node there. (The
* result will be coerced to a node if possible.)
* @param {...*} var_args
*/
rewrite_clj.zip.editz.edit = (function() { 
var edit__delegate = function (zloc,f,args){return clojure.zip.edit.call(null,zloc,rewrite_clj.zip.editz.edit_node,(function (p1__8715_SHARP_){return cljs.core.apply.call(null,f,p1__8715_SHARP_,args);
}));
};
var edit = function (zloc,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return edit__delegate.call(this,zloc,f,args);};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__8733){
var zloc = cljs.core.first(arglist__8733);
arglist__8733 = cljs.core.next(arglist__8733);
var f = cljs.core.first(arglist__8733);
var args = cljs.core.rest(arglist__8733);
return edit__delegate(zloc,f,args);
});
edit.cljs$core$IFn$_invoke$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Splice the given node, i.e. merge its children into the current one
* (akin to Clojure's `unquote-splicing` macro: `~@...`).
* - if the node is not one that can have children, no modification will
* be performed.
* - if the node has no or only whitespace children, it will be removed.
* - otherwise, splicing will be performed, moving the zipper to the first
* non-whitespace child afterwards.
* 
*/
rewrite_clj.zip.editz.splice = (function splice(zloc){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,zloc)))
{var temp__4090__auto__ = cljs.core.seq.call(null,cljs.core.drop_while.call(null,rewrite_clj.node.whitespace_QMARK_,cljs.core.reverse.call(null,cljs.core.drop_while.call(null,rewrite_clj.node.whitespace_QMARK_,clojure.zip.children.call(null,zloc)))));if(temp__4090__auto__)
{var children = temp__4090__auto__;var loc = rewrite_clj.zip.utils.remove_and_move_right.call(null,cljs.core.reduce.call(null,clojure.zip.insert_right,zloc,children));var or__6371__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,loc);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return loc;
}
} else
{return rewrite_clj.zip.removez.remove.call(null,zloc);
}
} else
{return zloc;
}
});
rewrite_clj.zip.editz.edit_token = (function edit_token(zloc,str_fn){var e = rewrite_clj.zip.base.sexpr.call(null,zloc);var e_SINGLEQUOTE_ = ((typeof e === 'string')?str_fn.call(null,e):(((e instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,cljs.core.namespace.call(null,e),str_fn.call(null,cljs.core.name.call(null,e))):(((e instanceof cljs.core.Symbol))?cljs.core.symbol.call(null,cljs.core.namespace.call(null,e),str_fn.call(null,cljs.core.name.call(null,e))):null)));return clojure.zip.replace.call(null,zloc,rewrite_clj.node.token_node.call(null,e_SINGLEQUOTE_));
});
rewrite_clj.zip.editz.edit_multi_line = (function edit_multi_line(zloc,line_fn){var n = cljs.core.update_in.call(null,clojure.zip.node.call(null,zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",1116881521)], null),cljs.core.comp.call(null,line_fn,cljs.core.vec));return clojure.zip.replace.call(null,zloc,n);
});
rewrite_clj.zip.editz.prefix = (function prefix(zloc,s){var G__8719 = rewrite_clj.zip.base.tag.call(null,zloc);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"multi-line","multi-line",2217102202),G__8719))
{return rewrite_clj.zip.editz.edit_multi_line.call(null,zloc,((function (G__8719){
return (function (lines){if(cljs.core.empty_QMARK_.call(null,lines))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else
{return cljs.core.update_in.call(null,lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),((function (G__8719){
return (function (p1__8717_SHARP_){return [cljs.core.str(s),cljs.core.str(p1__8717_SHARP_)].join('');
});})(G__8719))
);
}
});})(G__8719))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",1124445547),G__8719))
{return rewrite_clj.zip.editz.edit_token.call(null,zloc,((function (G__8719){
return (function (p1__8716_SHARP_){return [cljs.core.str(s),cljs.core.str(p1__8716_SHARP_)].join('');
});})(G__8719))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(rewrite_clj.zip.base.tag.call(null,zloc))].join('')));
} else
{return null;
}
}
}
});
rewrite_clj.zip.editz.suffix = (function suffix(zloc,s){var G__8722 = rewrite_clj.zip.base.tag.call(null,zloc);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"multi-line","multi-line",2217102202),G__8722))
{return rewrite_clj.zip.editz.edit_multi_line.call(null,zloc,((function (G__8722){
return (function (lines){if(cljs.core.empty_QMARK_.call(null,lines))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else
{return cljs.core.concat.call(null,cljs.core.butlast.call(null,lines),[cljs.core.str(cljs.core.last.call(null,lines)),cljs.core.str(s)].join(''));
}
});})(G__8722))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",1124445547),G__8722))
{return rewrite_clj.zip.editz.edit_token.call(null,zloc,((function (G__8722){
return (function (p1__8720_SHARP_){return [cljs.core.str(p1__8720_SHARP_),cljs.core.str(s)].join('');
});})(G__8722))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(rewrite_clj.zip.base.tag.call(null,zloc))].join('')));
} else
{return null;
}
}
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip.insert')) {
goog.provide('rewrite_clj.zip.insert');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.base');
rewrite_clj.zip.insert.space = rewrite_clj.node.spaces.call(null,1);
/**
* Generic insertion helper. If the node reached by `move-fn`
* is a whitespace, insert an additional space.
*/
rewrite_clj.zip.insert.insert = (function insert(move_fn,insert_fn,prefix,zloc,item){var item_node = rewrite_clj.node.coerce.call(null,item);var next_node = move_fn.call(null,zloc);return cljs.core.reduce.call(null,insert_fn,zloc,(cljs.core.truth_((function (){var or__6371__auto__ = cljs.core.not.call(null,next_node);if(or__6371__auto__)
{return or__6371__auto__;
} else
{return rewrite_clj.zip.whitespace.whitespace_QMARK_.call(null,next_node);
}
})())?cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_node], null),prefix):cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.insert.space,item_node], null),prefix)));
});
/**
* Insert item to the right of the current location. Will insert a space if necessary.
*/
rewrite_clj.zip.insert.insert_right = (function insert_right(zloc,item){return rewrite_clj.zip.insert.insert.call(null,clojure.zip.right,clojure.zip.insert_right,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.insert.space], null),zloc,item);
});
/**
* Insert item to the right of the left location. Will insert a space if necessary.
*/
rewrite_clj.zip.insert.insert_left = (function insert_left(zloc,item){return rewrite_clj.zip.insert.insert.call(null,clojure.zip.left,clojure.zip.insert_left,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.zip.insert.space], null),zloc,item);
});
/**
* Insert item as first child of the current node. Will insert a space if necessary.
*/
rewrite_clj.zip.insert.insert_child = (function insert_child(zloc,item){return rewrite_clj.zip.insert.insert.call(null,clojure.zip.down,clojure.zip.insert_child,cljs.core.PersistentVector.EMPTY,zloc,item);
});
/**
* Insert item as last child of the current node. Will insert a space if necessary.
*/
rewrite_clj.zip.insert.append_child = (function append_child(zloc,item){return rewrite_clj.zip.insert.insert.call(null,(function (p1__8660_SHARP_){var G__8662 = p1__8660_SHARP_;var G__8662__$1 = (((G__8662 == null))?null:clojure.zip.down.call(null,G__8662));var G__8662__$2 = (((G__8662__$1 == null))?null:clojure.zip.rightmost.call(null,G__8662__$1));return G__8662__$2;
}),clojure.zip.append_child,cljs.core.PersistentVector.EMPTY,zloc,item);
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip.seqz')) {
goog.provide('rewrite_clj.zip.seqz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.insert');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.editz');
goog.require('rewrite_clj.zip.findz');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.findz');
goog.require('rewrite_clj.zip.editz');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.insert');
goog.require('rewrite_clj.zip.base');
rewrite_clj.zip.seqz.seq_QMARK_ = (function seq_QMARK_(zloc){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"vector","vector",4488484021),null,new cljs.core.Keyword(null,"forms","forms",1111523233),null,new cljs.core.Keyword(null,"map","map",1014012110),null,new cljs.core.Keyword(null,"set","set",1014018004),null,new cljs.core.Keyword(null,"list","list",1017226256),null], null), null),rewrite_clj.zip.base.tag.call(null,zloc));
});
rewrite_clj.zip.seqz.list_QMARK_ = (function list_QMARK_(zloc){return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"list","list",1017226256));
});
rewrite_clj.zip.seqz.vector_QMARK_ = (function vector_QMARK_(zloc){return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"vector","vector",4488484021));
});
rewrite_clj.zip.seqz.set_QMARK_ = (function set_QMARK_(zloc){return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"set","set",1014018004));
});
rewrite_clj.zip.seqz.map_QMARK_ = (function map_QMARK_(zloc){return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"map","map",1014012110));
});
rewrite_clj.zip.seqz.map_seq = (function map_seq(f,zloc){if(rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1637004935,null),new cljs.core.Symbol(null,"zloc","zloc",-1636789697,null))))].join('')));
}
var temp__4090__auto__ = rewrite_clj.zip.move.down.call(null,zloc);if(cljs.core.truth_(temp__4090__auto__))
{var n0 = temp__4090__auto__;var G__8580 = f.call(null,n0);var G__8580__$1 = (((G__8580 == null))?null:cljs.core.iterate.call(null,((function (G__8580,n0,temp__4090__auto__){
return (function (loc){var temp__4090__auto____$1 = rewrite_clj.zip.move.right.call(null,loc);if(cljs.core.truth_(temp__4090__auto____$1))
{var n = temp__4090__auto____$1;return f.call(null,n);
} else
{return null;
}
});})(G__8580,n0,temp__4090__auto__))
,G__8580));var G__8580__$2 = (((G__8580__$1 == null))?null:cljs.core.take_while.call(null,cljs.core.identity,G__8580__$1));var G__8580__$3 = (((G__8580__$2 == null))?null:cljs.core.last.call(null,G__8580__$2));var G__8580__$4 = (((G__8580__$3 == null))?null:rewrite_clj.zip.move.up.call(null,G__8580__$3));return G__8580__$4;
} else
{return zloc;
}
});
/**
* Apply function to all value nodes of the given map node.
*/
rewrite_clj.zip.seqz.map_vals = (function map_vals(f,zloc){if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"zloc","zloc",-1636789697,null))))].join('')));
}
var loc = rewrite_clj.zip.move.down.call(null,zloc);var parent = zloc;while(true){
if(cljs.core.not.call(null,(function (){var and__6359__auto__ = loc;if(cljs.core.truth_(and__6359__auto__))
{return clojure.zip.node.call(null,loc);
} else
{return and__6359__auto__;
}
})()))
{return parent;
} else
{var temp__4090__auto__ = rewrite_clj.zip.move.right.call(null,loc);if(cljs.core.truth_(temp__4090__auto__))
{var v0 = temp__4090__auto__;var temp__4090__auto____$1 = f.call(null,v0);if(cljs.core.truth_(temp__4090__auto____$1))
{var v = temp__4090__auto____$1;{
var G__8595 = rewrite_clj.zip.move.right.call(null,v);
var G__8596 = rewrite_clj.zip.move.up.call(null,v);
loc = G__8595;
parent = G__8596;
continue;
}
} else
{{
var G__8597 = rewrite_clj.zip.move.right.call(null,v0);
var G__8598 = parent;
loc = G__8597;
parent = G__8598;
continue;
}
}
} else
{return parent;
}
}
break;
}
});
/**
* Apply function to all key nodes of the given map node.
*/
rewrite_clj.zip.seqz.map_keys = (function map_keys(f,zloc){if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"zloc","zloc",-1636789697,null))))].join('')));
}
var loc = rewrite_clj.zip.move.down.call(null,zloc);var parent = zloc;while(true){
if(cljs.core.not.call(null,(function (){var and__6359__auto__ = loc;if(cljs.core.truth_(and__6359__auto__))
{return clojure.zip.node.call(null,loc);
} else
{return and__6359__auto__;
}
})()))
{return parent;
} else
{var temp__4090__auto__ = f.call(null,loc);if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;{
var G__8599 = rewrite_clj.zip.move.right.call(null,rewrite_clj.zip.move.right.call(null,v));
var G__8600 = rewrite_clj.zip.move.up.call(null,v);
loc = G__8599;
parent = G__8600;
continue;
}
} else
{{
var G__8601 = rewrite_clj.zip.move.right.call(null,rewrite_clj.zip.move.right.call(null,loc));
var G__8602 = parent;
loc = G__8601;
parent = G__8602;
continue;
}
}
}
break;
}
});
/**
* Apply function to all value nodes in the given seq node. Iterates over
* value nodes of maps but over each element of a seq.
*/
rewrite_clj.zip.seqz.map = (function map(f,zloc){if(rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1637004935,null),new cljs.core.Symbol(null,"zloc","zloc",-1636789697,null))))].join('')));
}
if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc))
{return rewrite_clj.zip.seqz.map_vals.call(null,f,zloc);
} else
{return rewrite_clj.zip.seqz.map_seq.call(null,f,zloc);
}
});
/**
* If a map is given, get element with the given key; if a seq is given, get nth element.
*/
rewrite_clj.zip.seqz.get = (function get(zloc,k){if((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || ((rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)) && (cljs.core.integer_QMARK_.call(null,k))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"zloc","zloc",-1636789697,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1637004935,null),new cljs.core.Symbol(null,"zloc","zloc",-1636789697,null)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",-1070456710,null),new cljs.core.Symbol(null,"k","k",-1640531420,null))))))].join('')));
}
if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc))
{var G__8583 = zloc;var G__8583__$1 = (((G__8583 == null))?null:rewrite_clj.zip.move.down.call(null,G__8583));var G__8583__$2 = (((G__8583__$1 == null))?null:rewrite_clj.zip.findz.find_value.call(null,G__8583__$1,k));var G__8583__$3 = (((G__8583__$2 == null))?null:rewrite_clj.zip.move.right.call(null,G__8583__$2));return G__8583__$3;
} else
{return cljs.core.nth.call(null,(function (){var G__8584 = rewrite_clj.zip.move.down.call(null,zloc);var G__8584__$1 = (((G__8584 == null))?null:cljs.core.iterate.call(null,rewrite_clj.zip.move.right,G__8584));var G__8584__$2 = (((G__8584__$1 == null))?null:cljs.core.take_while.call(null,cljs.core.identity,G__8584__$1));return G__8584__$2;
})(),k);
}
});
/**
* Set map/seq element to the given value.
*/
rewrite_clj.zip.seqz.assoc = (function assoc(zloc,k,v){var temp__4090__auto__ = rewrite_clj.zip.seqz.get.call(null,zloc,k);if(cljs.core.truth_(temp__4090__auto__))
{var vloc = temp__4090__auto__;return rewrite_clj.zip.move.up.call(null,rewrite_clj.zip.editz.replace.call(null,vloc,v));
} else
{if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc))
{return rewrite_clj.zip.insert.append_child.call(null,rewrite_clj.zip.insert.append_child.call(null,zloc,k),v);
} else
{throw (new Error([cljs.core.str("index out of bounds: "),cljs.core.str(k)].join('')));
}
}
});
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.zip')) {
goog.provide('rewrite_clj.zip');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.seqz');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.insert');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.parser');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.editz');
goog.require('rewrite_clj.zip.findz');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.findz');
goog.require('rewrite_clj.zip.seqz');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip.insert');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
/**
* Function reference to clojure.zip/node
*/
rewrite_clj.zip.node = clojure.zip.node;
/**
* Function reference to clojure.zip/root
*/
rewrite_clj.zip.root = clojure.zip.root;
/**
* See [[base/of-string]]
*/
rewrite_clj.zip.of_string = rewrite_clj.zip.base.of_string;
/**
* See [[base/root-string]]
*/
rewrite_clj.zip.root_string = rewrite_clj.zip.base.root_string;
/**
* See [[base/string]]
*/
rewrite_clj.zip.string = rewrite_clj.zip.base.string;
/**
* See [[base/tag]]
*/
rewrite_clj.zip.tag = rewrite_clj.zip.base.tag;
/**
* See [[base/sexpr]]
*/
rewrite_clj.zip.sexpr = rewrite_clj.zip.base.sexpr;
/**
* See [[move/right]]
*/
rewrite_clj.zip.right = rewrite_clj.zip.move.right;
/**
* See [[move/left]]
*/
rewrite_clj.zip.left = rewrite_clj.zip.move.left;
/**
* See [[move/down]]
*/
rewrite_clj.zip.down = rewrite_clj.zip.move.down;
/**
* See [[move/up]]
*/
rewrite_clj.zip.up = rewrite_clj.zip.move.up;
/**
* See [[move/next]]
*/
rewrite_clj.zip.next = rewrite_clj.zip.move.next;
/**
* See [[move/end?]]
*/
rewrite_clj.zip.end_QMARK_ = rewrite_clj.zip.move.end_QMARK_;
/**
* See [[move/rightmost?]]
*/
rewrite_clj.zip.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
/**
* See [[move/leftmost?]]
*/
rewrite_clj.zip.leftmost_QMARK_ = rewrite_clj.zip.move.leftmost_QMARK_;
/**
* See [[move/prev]]
*/
rewrite_clj.zip.prev = rewrite_clj.zip.move.prev;
/**
* See [[move/leftmost]]
*/
rewrite_clj.zip.leftmost = rewrite_clj.zip.move.leftmost;
/**
* See [[move/rightmost]]
*/
rewrite_clj.zip.rightmost = rewrite_clj.zip.move.rightmost;
/**
* See [[findz/find]]
*/
rewrite_clj.zip.find = rewrite_clj.zip.findz.find;
/**
* See [[findz/find-last-by-pos]]
*/
rewrite_clj.zip.find_last_by_pos = rewrite_clj.zip.findz.find_last_by_pos;
/**
* See [[findz/find-depth-first]]
*/
rewrite_clj.zip.find_depth_first = rewrite_clj.zip.findz.find_depth_first;
/**
* See [[findz/find-next]]
*/
rewrite_clj.zip.find_next = rewrite_clj.zip.findz.find_next;
/**
* See [[findz/find-next-depth-first]]
*/
rewrite_clj.zip.find_next_depth_first = rewrite_clj.zip.findz.find_next_depth_first;
/**
* See [[findz/find-tag]]
*/
rewrite_clj.zip.find_tag = rewrite_clj.zip.findz.find_tag;
/**
* See [[findz/find-next-tag]]
*/
rewrite_clj.zip.find_next_tag = rewrite_clj.zip.findz.find_next_tag;
/**
* See [[findz/tag-by-pos]]
*/
rewrite_clj.zip.find_tag_by_pos = rewrite_clj.zip.findz.find_tag_by_pos;
/**
* See [[findz/find-token]]
*/
rewrite_clj.zip.find_token = rewrite_clj.zip.findz.find_token;
/**
* See [[findz/find-next-token]]
*/
rewrite_clj.zip.find_next_token = rewrite_clj.zip.findz.find_next_token;
/**
* See [[findz/find-value]]
*/
rewrite_clj.zip.find_value = rewrite_clj.zip.findz.find_value;
/**
* See [[findz/find-next-value]]
*/
rewrite_clj.zip.find_next_value = rewrite_clj.zip.findz.find_next_value;
/**
* See [[editz/replace]]
*/
rewrite_clj.zip.replace = rewrite_clj.zip.editz.replace;
/**
* See [[editz/edit]]
*/
rewrite_clj.zip.edit = rewrite_clj.zip.editz.edit;
/**
* See [[editz/splice]]
*/
rewrite_clj.zip.splice = rewrite_clj.zip.editz.splice;
/**
* See [[editz/prefix]]
*/
rewrite_clj.zip.prefix = rewrite_clj.zip.editz.prefix;
/**
* See [[editz/suffix]]
*/
rewrite_clj.zip.suffix = rewrite_clj.zip.editz.suffix;
/**
* See [[removez/remove]]
*/
rewrite_clj.zip.remove = rewrite_clj.zip.removez.remove;
/**
* See [[removez/remove-preserve-newline]]
*/
rewrite_clj.zip.remove_preserve_newline = rewrite_clj.zip.removez.remove_preserve_newline;
/**
* See [[insert/insert-right]]
*/
rewrite_clj.zip.insert_right = rewrite_clj.zip.insert.insert_right;
/**
* See [[insert/insert-left]]
*/
rewrite_clj.zip.insert_left = rewrite_clj.zip.insert.insert_left;
/**
* See [[insert/insert-child]]
*/
rewrite_clj.zip.insert_child = rewrite_clj.zip.insert.insert_child;
/**
* See [[insert/append-child]]
*/
rewrite_clj.zip.append_child = rewrite_clj.zip.insert.append_child;
/**
* See [[seqz/seq?]]
*/
rewrite_clj.zip.seq_QMARK_ = rewrite_clj.zip.seqz.seq_QMARK_;
/**
* See [[seqz/list?]]
*/
rewrite_clj.zip.list_QMARK_ = rewrite_clj.zip.seqz.list_QMARK_;
/**
* See [[seqz/vector?]]
*/
rewrite_clj.zip.vector_QMARK_ = rewrite_clj.zip.seqz.vector_QMARK_;
/**
* See [[seqz/set?]]
*/
rewrite_clj.zip.set_QMARK_ = rewrite_clj.zip.seqz.set_QMARK_;
/**
* See [[seqz/map?]]
*/
rewrite_clj.zip.map_QMARK_ = rewrite_clj.zip.seqz.map_QMARK_;
/**
* See [[seqz/map-vals]]
*/
rewrite_clj.zip.map_vals = rewrite_clj.zip.seqz.map_vals;
/**
* See [[seqz/map-keys]]
*/
rewrite_clj.zip.map_keys = rewrite_clj.zip.seqz.map_keys;
/**
* See [[seqz/map]]
*/
rewrite_clj.zip.map = rewrite_clj.zip.seqz.map;
/**
* See [[seqz/get]]
*/
rewrite_clj.zip.get = rewrite_clj.zip.seqz.get;
/**
* See [[seqz/assoc]]
*/
rewrite_clj.zip.assoc = rewrite_clj.zip.seqz.assoc;
}
if(!lt.util.load.provided_QMARK_('rewrite-clj.paredit')) {
goog.provide('rewrite_clj.paredit');
goog.require('cljs.core');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.zip.utils');
goog.require('rewrite_clj.zip.utils');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.node');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip.whitespace');
rewrite_clj.paredit.empty_seq_QMARK_ = (function empty_seq_QMARK_(zloc){var and__6359__auto__ = rewrite_clj.zip.seq_QMARK_.call(null,zloc);if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.not.call(null,cljs.core.seq.call(null,rewrite_clj.zip.sexpr.call(null,zloc)));
} else
{return and__6359__auto__;
}
});
rewrite_clj.paredit.move_n = (function move_n(loc,f,n){if(cljs.core._EQ_.call(null,0,n))
{return loc;
} else
{return cljs.core.last.call(null,cljs.core.take.call(null,(n + 1),cljs.core.iterate.call(null,f,loc)));
}
});
rewrite_clj.paredit.top = (function top(zloc){return cljs.core.last.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,rewrite_clj.zip.up,zloc)));
});
rewrite_clj.paredit.global_find_by_node = (function global_find_by_node(zloc,n){return rewrite_clj.zip.find.call(null,rewrite_clj.paredit.top.call(null,zloc),clojure.zip.next,(function (p1__8990_SHARP_){return cljs.core._EQ_.call(null,cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,p1__8990_SHARP_)),cljs.core.meta.call(null,n));
}));
});
rewrite_clj.paredit.nodes_by_dir = (function() {
var nodes_by_dir = null;
var nodes_by_dir__2 = (function (zloc,f){return nodes_by_dir.call(null,zloc,f,cljs.core.constantly);
});
var nodes_by_dir__3 = (function (zloc,f,p_QMARK_){return cljs.core.map.call(null,rewrite_clj.zip.node,cljs.core.take_while.call(null,p_QMARK_,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,f,zloc))));
});
nodes_by_dir = function(zloc,f,p_QMARK_){
switch(arguments.length){
case 2:
return nodes_by_dir__2.call(this,zloc,f);
case 3:
return nodes_by_dir__3.call(this,zloc,f,p_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nodes_by_dir.cljs$core$IFn$_invoke$arity$2 = nodes_by_dir__2;
nodes_by_dir.cljs$core$IFn$_invoke$arity$3 = nodes_by_dir__3;
return nodes_by_dir;
})()
;
rewrite_clj.paredit.remove_first_if_ws = (function remove_first_if_ws(nodes){if(cljs.core.seq.call(null,nodes))
{if(cljs.core.truth_(rewrite_clj.node.whitespace_QMARK_.call(null,cljs.core.first.call(null,nodes))))
{return cljs.core.rest.call(null,nodes);
} else
{return nodes;
}
} else
{return null;
}
});
rewrite_clj.paredit.remove_ws_or_comment = (function remove_ws_or_comment(zloc){while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_.call(null,zloc)))
{return zloc;
} else
{{
var G__9049 = clojure.zip.remove.call(null,zloc);
zloc = G__9049;
continue;
}
}
break;
}
});
/**
* Creates a sequence node of given type `t` with node values of `v`
*/
rewrite_clj.paredit.create_seq_node = (function create_seq_node(t,v){var G__8992 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set","set",1014018004),G__8992))
{return rewrite_clj.node.set_node.call(null,v);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map","map",1014012110),G__8992))
{return rewrite_clj.node.map_node.call(null,v);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vector","vector",4488484021),G__8992))
{return rewrite_clj.node.vector_node.call(null,v);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"list","list",1017226256),G__8992))
{return rewrite_clj.node.list_node.call(null,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("Unsupported wrap type: "),cljs.core.str(t)].join('')));
} else
{return null;
}
}
}
}
}
});
rewrite_clj.paredit.string_node_QMARK_ = (function string_node_QMARK_(zloc){return cljs.core._EQ_.call(null,(function (){var G__8994 = zloc;var G__8994__$1 = (((G__8994 == null))?null:rewrite_clj.zip.node.call(null,G__8994));var G__8994__$2 = (((G__8994__$1 == null))?null:cljs.core.type.call(null,G__8994__$1));return G__8994__$2;
})(),cljs.core.type.call(null,rewrite_clj.node.string_node.call(null," ")));
});
/**
* Kill all sibling nodes to the right of the current node
* 
* - [1 2| 3 4] => [1 2|]
*/
rewrite_clj.paredit.kill = (function kill(zloc){var left = clojure.zip.left.call(null,zloc);return ((function (left){
return (function (p1__8995_SHARP_){if(cljs.core.truth_(left))
{return rewrite_clj.paredit.global_find_by_node.call(null,p1__8995_SHARP_,rewrite_clj.zip.node.call(null,left));
} else
{return p1__8995_SHARP_;
}
});})(left))
.call(null,clojure.zip.remove.call(null,rewrite_clj.zip.utils.remove_right_while.call(null,zloc,cljs.core.constantly.call(null,true))));
});
rewrite_clj.paredit.kill_in_string_node = (function kill_in_string_node(zloc,pos){if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,zloc),"\"\""))
{return rewrite_clj.zip.remove.call(null,zloc);
} else
{var bounds = cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,zloc));var row_idx = (new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(pos) - new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(bounds));var sub_length = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(bounds))))?(new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos) - 1):(new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos) - (new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(bounds) + 1)));return ((function (bounds,row_idx,sub_length){
return (function (p1__8997_SHARP_){return rewrite_clj.zip.replace.call(null,zloc,rewrite_clj.node.string_node.call(null,p1__8997_SHARP_));
});})(bounds,row_idx,sub_length))
.call(null,cljs.core.update_in.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(row_idx + 1),new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.node.call(null,zloc)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx], null),((function (bounds,row_idx,sub_length){
return (function (p1__8996_SHARP_){return p1__8996_SHARP_.substring(0,sub_length);
});})(bounds,row_idx,sub_length))
));
}
});
rewrite_clj.paredit.kill_in_comment_node = (function kill_in_comment_node(zloc,pos){var col_bounds = new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,zloc)));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos),col_bounds))
{return rewrite_clj.zip.remove.call(null,zloc);
} else
{return ((function (col_bounds){
return (function (p1__8998_SHARP_){if(cljs.core.truth_(clojure.zip.right.call(null,p1__8998_SHARP_)))
{return clojure.zip.insert_right.call(null,p1__8998_SHARP_,rewrite_clj.node.newlines.call(null,1));
} else
{return p1__8998_SHARP_;
}
});})(col_bounds))
.call(null,rewrite_clj.zip.replace.call(null,zloc,rewrite_clj.node.comment_node.call(null,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.node.call(null,zloc)).substring(0,((new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos) - col_bounds) - 1)))));
}
});
/**
* In string and comment aware kill
* 
* Perform kill for given position `pos` Like [[kill]], but:
* 
* - if inside string kills to end of string and stops there
* - If inside comment kills to end of line (not including linebreak!)
* 
* `pos` should provide `{:row :col }` which are relative to the start of the given form the zipper represents
* `zloc` must be positioned at a node previous (given depth first) to the node at given pos
*/
rewrite_clj.paredit.kill_at_pos = (function kill_at_pos(zloc,pos){var temp__4090__auto__ = rewrite_clj.zip.find_last_by_pos.call(null,zloc,pos);if(cljs.core.truth_(temp__4090__auto__))
{var candidate = temp__4090__auto__;if(rewrite_clj.paredit.string_node_QMARK_.call(null,candidate))
{return rewrite_clj.paredit.kill_in_string_node.call(null,candidate,pos);
} else
{if(cljs.core.truth_(rewrite_clj.zip.whitespace.comment_QMARK_.call(null,candidate)))
{return rewrite_clj.paredit.kill_in_comment_node.call(null,candidate,pos);
} else
{if(cljs.core.truth_((function (){var and__6359__auto__ = rewrite_clj.paredit.empty_seq_QMARK_.call(null,candidate);if(cljs.core.truth_(and__6359__auto__))
{return (new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos) > new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,candidate))));
} else
{return and__6359__auto__;
}
})()))
{return rewrite_clj.zip.remove.call(null,candidate);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return rewrite_clj.paredit.kill.call(null,candidate);
} else
{return null;
}
}
}
}
} else
{return zloc;
}
});
rewrite_clj.paredit.find_word_bounds = (function find_word_bounds(v,col){if((col <= cljs.core.count.call(null,v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(col - cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__8999_SHARP_){return !(cljs.core._EQ_.call(null,p1__8999_SHARP_," "));
}),cljs.core.reverse.call(null,cljs.core.take.call(null,col,cljs.core.seq.call(null,v)))))),(col + cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__9000_SHARP_){return !((cljs.core._EQ_.call(null,p1__9000_SHARP_," ")) || (cljs.core._EQ_.call(null,p1__9000_SHARP_,"\n")));
}),cljs.core.drop.call(null,col,cljs.core.seq.call(null,v)))))], null);
} else
{return null;
}
});
rewrite_clj.paredit.remove_word_at = (function remove_word_at(v,col){var temp__4092__auto__ = rewrite_clj.paredit.find_word_bounds.call(null,v,col);if(cljs.core.truth_(temp__4092__auto__))
{var vec__9002 = temp__4092__auto__;var start = cljs.core.nth.call(null,vec__9002,0,null);var end = cljs.core.nth.call(null,vec__9002,1,null);return [cljs.core.str(v.substring(0,start)),cljs.core.str(v.substring(end))].join('');
} else
{return null;
}
});
rewrite_clj.paredit.kill_word_in_comment_node = (function kill_word_in_comment_node(zloc,pos){var col_bounds = new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,zloc)));return rewrite_clj.zip.replace.call(null,zloc,rewrite_clj.node.comment_node.call(null,rewrite_clj.paredit.remove_word_at.call(null,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.node.call(null,zloc)),(new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos) - col_bounds))));
});
rewrite_clj.paredit.kill_word_in_string_node = (function kill_word_in_string_node(zloc,pos){var bounds = cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,zloc));var row_idx = (new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(pos) - new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(bounds));var col = ((cljs.core._EQ_.call(null,0,row_idx))?(new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos) - new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(bounds)):new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos));return rewrite_clj.zip.replace.call(null,zloc,rewrite_clj.node.string_node.call(null,cljs.core.update_in.call(null,new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.node.call(null,zloc)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx], null),((function (bounds,row_idx,col){
return (function (p1__9003_SHARP_){return rewrite_clj.paredit.remove_word_at.call(null,p1__9003_SHARP_,col);
});})(bounds,row_idx,col))
)));
});
/**
* In string and comment aware kill for one node/word at given pos
* 
* - `(+ |100 100) => (+ |100)`
* - `(for |(bar do)) => (foo)`
* - `"|hello world" => "| world"`
* - ` ; |hello world => ;  |world`
*/
rewrite_clj.paredit.kill_one_at_pos = (function kill_one_at_pos(zloc,pos){var temp__4090__auto__ = rewrite_clj.zip.whitespace.skip.call(null,clojure.zip.right,rewrite_clj.zip.whitespace.whitespace_QMARK_,rewrite_clj.zip.find_last_by_pos.call(null,zloc,pos));if(cljs.core.truth_(temp__4090__auto__))
{var candidate = temp__4090__auto__;var bounds = cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,candidate));var kill_in_node_QMARK_ = !((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(bounds))) && ((new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos) <= new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(bounds))));if((kill_in_node_QMARK_) && (rewrite_clj.paredit.string_node_QMARK_.call(null,candidate)))
{return rewrite_clj.paredit.kill_word_in_string_node.call(null,candidate,pos);
} else
{if(cljs.core.truth_((function (){var and__6359__auto__ = kill_in_node_QMARK_;if(and__6359__auto__)
{return rewrite_clj.zip.whitespace.comment_QMARK_.call(null,candidate);
} else
{return and__6359__auto__;
}
})()))
{return rewrite_clj.paredit.kill_word_in_comment_node.call(null,candidate,pos);
} else
{if(cljs.core.not.call(null,rewrite_clj.zip.leftmost_QMARK_.call(null,candidate)))
{return rewrite_clj.paredit.global_find_by_node.call(null,rewrite_clj.zip.remove.call(null,candidate),rewrite_clj.zip.node.call(null,rewrite_clj.zip.left.call(null,candidate)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return rewrite_clj.zip.remove.call(null,candidate);
} else
{return null;
}
}
}
}
} else
{return zloc;
}
});
rewrite_clj.paredit.find_slurpee_up = (function find_slurpee_up(zloc,f){var l = rewrite_clj.zip.up.call(null,zloc);var n = 1;while(true){
if((l == null))
{return null;
} else
{if(!((f.call(null,l) == null)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f.call(null,l)], null);
} else
{if((rewrite_clj.zip.up.call(null,l) == null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__9050 = rewrite_clj.zip.up.call(null,l);
var G__9051 = (n + 1);
l = G__9050;
n = G__9051;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
rewrite_clj.paredit.find_slurpee = (function find_slurpee(zloc,f){if(cljs.core.truth_(rewrite_clj.paredit.empty_seq_QMARK_.call(null,zloc)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,zloc),0], null);
} else
{var G__9005 = zloc;var G__9005__$1 = (((G__9005 == null))?null:rewrite_clj.paredit.find_slurpee_up.call(null,G__9005,f));var G__9005__$2 = (((G__9005__$1 == null))?null:cljs.core.reverse.call(null,G__9005__$1));return G__9005__$2;
}
});
/**
* Pull in next right outer node (if none at first level, tries next etc) into
* current S-expression
* 
* - `[1 2 [|3] 4 5] => [1 2 [|3 4] 5]`
*/
rewrite_clj.paredit.slurp_forward = (function slurp_forward(zloc){var vec__9010 = rewrite_clj.paredit.find_slurpee.call(null,zloc,rewrite_clj.zip.right);var slurpee_loc = cljs.core.nth.call(null,vec__9010,0,null);var n_ups = cljs.core.nth.call(null,vec__9010,1,null);if(cljs.core.not.call(null,slurpee_loc))
{return zloc;
} else
{var slurper_loc = rewrite_clj.paredit.move_n.call(null,zloc,rewrite_clj.zip.up,n_ups);var preserves = cljs.core.filter.call(null,((function (slurper_loc,vec__9010,slurpee_loc,n_ups){
return (function (p1__9007_SHARP_){var or__6371__auto__ = rewrite_clj.node.linebreak_QMARK_.call(null,p1__9007_SHARP_);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return rewrite_clj.node.comment_QMARK_.call(null,p1__9007_SHARP_);
}
});})(slurper_loc,vec__9010,slurpee_loc,n_ups))
,rewrite_clj.paredit.nodes_by_dir.call(null,clojure.zip.right.call(null,slurper_loc),clojure.zip.right,((function (slurper_loc,vec__9010,slurpee_loc,n_ups){
return (function (p1__9006_SHARP_){return !(cljs.core._EQ_.call(null,rewrite_clj.zip.node.call(null,slurpee_loc),rewrite_clj.zip.node.call(null,p1__9006_SHARP_)));
});})(slurper_loc,vec__9010,slurpee_loc,n_ups))
));return ((function (slurper_loc,preserves,vec__9010,slurpee_loc,n_ups){
return (function (p1__9008_SHARP_){if(cljs.core.truth_(rewrite_clj.paredit.empty_seq_QMARK_.call(null,zloc)))
{return rewrite_clj.zip.utils.remove_left_while.call(null,rewrite_clj.zip.down.call(null,p1__9008_SHARP_),rewrite_clj.zip.whitespace.whitespace_QMARK_);
} else
{return rewrite_clj.paredit.global_find_by_node.call(null,p1__9008_SHARP_,rewrite_clj.zip.node.call(null,zloc));
}
});})(slurper_loc,preserves,vec__9010,slurpee_loc,n_ups))
.call(null,rewrite_clj.zip.append_child.call(null,cljs.core.partial.call(null,cljs.core.reduce,rewrite_clj.zip.append_child).call(null,rewrite_clj.zip.utils.remove_right.call(null,rewrite_clj.zip.utils.remove_right_while.call(null,slurper_loc,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_)),preserves),rewrite_clj.zip.node.call(null,slurpee_loc)));
}
});
/**
* Pull in all right outer-nodes into current S-expression, but only the ones at the same level
* as the the first one.
* 
* - `[1 2 [|3] 4 5] => [1 2 [|3 4 5]]`
*/
rewrite_clj.paredit.slurp_forward_fully = (function slurp_forward_fully(zloc){var curr_slurpee = (function (){var G__9013 = zloc;var G__9013__$1 = (((G__9013 == null))?null:rewrite_clj.paredit.find_slurpee.call(null,G__9013,rewrite_clj.zip.right));var G__9013__$2 = (((G__9013__$1 == null))?null:cljs.core.first.call(null,G__9013__$1));return G__9013__$2;
})();var num_slurps = (function (){var G__9014 = curr_slurpee;var G__9014__$1 = (((G__9014 == null))?null:rewrite_clj.paredit.nodes_by_dir.call(null,G__9014,rewrite_clj.zip.right));var G__9014__$2 = (((G__9014__$1 == null))?null:cljs.core.count.call(null,G__9014__$1));var G__9014__$3 = (((G__9014__$2 == null))?null:(G__9014__$2 + 1));return G__9014__$3;
})();return cljs.core.last.call(null,cljs.core.take.call(null,num_slurps,cljs.core.iterate.call(null,rewrite_clj.paredit.slurp_forward,zloc)));
});
/**
* Pull in prev left outer node (if none at first level, tries next etc) into
* current S-expression
* 
* - `[1 2 [|3] 4 5] => [1 [2 |3] 4 5]`
*/
rewrite_clj.paredit.slurp_backward = (function slurp_backward(zloc){var temp__4090__auto__ = rewrite_clj.paredit.find_slurpee.call(null,zloc,rewrite_clj.zip.left);if(cljs.core.truth_(temp__4090__auto__))
{var vec__9019 = temp__4090__auto__;var slurpee_loc = cljs.core.nth.call(null,vec__9019,0,null);var _ = cljs.core.nth.call(null,vec__9019,1,null);var preserves = cljs.core.filter.call(null,((function (vec__9019,slurpee_loc,_,temp__4090__auto__){
return (function (p1__9015_SHARP_){var or__6371__auto__ = rewrite_clj.node.linebreak_QMARK_.call(null,p1__9015_SHARP_);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return rewrite_clj.node.comment_QMARK_.call(null,p1__9015_SHARP_);
}
});})(vec__9019,slurpee_loc,_,temp__4090__auto__))
,rewrite_clj.paredit.nodes_by_dir.call(null,clojure.zip.right.call(null,slurpee_loc),clojure.zip.right,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_));return ((function (preserves,vec__9019,slurpee_loc,_,temp__4090__auto__){
return (function (p1__9017_SHARP_){if(cljs.core.truth_(rewrite_clj.paredit.empty_seq_QMARK_.call(null,zloc)))
{return rewrite_clj.zip.utils.remove_right_while.call(null,rewrite_clj.zip.down.call(null,p1__9017_SHARP_),rewrite_clj.zip.whitespace.linebreak_QMARK_);
} else
{return rewrite_clj.paredit.global_find_by_node.call(null,p1__9017_SHARP_,rewrite_clj.zip.node.call(null,zloc));
}
});})(preserves,vec__9019,slurpee_loc,_,temp__4090__auto__))
.call(null,rewrite_clj.zip.insert_child.call(null,cljs.core.partial.call(null,cljs.core.reduce,rewrite_clj.zip.insert_child).call(null,rewrite_clj.zip.next.call(null,clojure.zip.remove.call(null,rewrite_clj.zip.utils.remove_right_while.call(null,((function (preserves,vec__9019,slurpee_loc,_,temp__4090__auto__){
return (function (p1__9016_SHARP_){if(cljs.core.truth_((function (){var and__6359__auto__ = rewrite_clj.zip.left.call(null,slurpee_loc);if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.not.call(null,rewrite_clj.zip.whitespace.linebreak_QMARK_.call(null,clojure.zip.left.call(null,p1__9016_SHARP_)));
} else
{return and__6359__auto__;
}
})()))
{return rewrite_clj.zip.whitespace.prepend_space.call(null,p1__9016_SHARP_);
} else
{return p1__9016_SHARP_;
}
});})(preserves,vec__9019,slurpee_loc,_,temp__4090__auto__))
.call(null,rewrite_clj.zip.utils.remove_left_while.call(null,slurpee_loc,rewrite_clj.zip.whitespace.whitespace_not_linebreak_QMARK_)),rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_))),preserves),rewrite_clj.zip.node.call(null,slurpee_loc)));
} else
{return zloc;
}
});
/**
* Pull in all left outer-nodes into current S-expression, but only the ones at the same level
* as the the first one.
* 
* - `[1 2 [|3] 4 5] => [[1 2 |3] 4 5]`
*/
rewrite_clj.paredit.slurp_backward_fully = (function slurp_backward_fully(zloc){var curr_slurpee = (function (){var G__9022 = zloc;var G__9022__$1 = (((G__9022 == null))?null:rewrite_clj.paredit.find_slurpee.call(null,G__9022,rewrite_clj.zip.left));var G__9022__$2 = (((G__9022__$1 == null))?null:cljs.core.first.call(null,G__9022__$1));return G__9022__$2;
})();var num_slurps = (function (){var G__9023 = curr_slurpee;var G__9023__$1 = (((G__9023 == null))?null:rewrite_clj.paredit.nodes_by_dir.call(null,G__9023,rewrite_clj.zip.left));var G__9023__$2 = (((G__9023__$1 == null))?null:cljs.core.count.call(null,G__9023__$1));var G__9023__$3 = (((G__9023__$2 == null))?null:(G__9023__$2 + 1));return G__9023__$3;
})();return cljs.core.last.call(null,cljs.core.take.call(null,num_slurps,cljs.core.iterate.call(null,rewrite_clj.paredit.slurp_backward,zloc)));
});
/**
* Push out the rightmost node of the current S-expression into outer right form
* 
* - `[1 2 [|3 4] 5] => [1 2 [|3] 4 5]`
*/
rewrite_clj.paredit.barf_forward = (function barf_forward(zloc){var barfee_loc = rewrite_clj.zip.rightmost.call(null,zloc);if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,zloc)))
{return zloc;
} else
{var preserves = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (barfee_loc){
return (function (p1__9024_SHARP_){var or__6371__auto__ = rewrite_clj.node.linebreak_QMARK_.call(null,p1__9024_SHARP_);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return rewrite_clj.node.comment_QMARK_.call(null,p1__9024_SHARP_);
}
});})(barfee_loc))
,rewrite_clj.paredit.nodes_by_dir.call(null,clojure.zip.left.call(null,barfee_loc),clojure.zip.left,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_)));return ((function (preserves,barfee_loc){
return (function (p1__9025_SHARP_){var or__6371__auto__ = rewrite_clj.paredit.global_find_by_node.call(null,p1__9025_SHARP_,rewrite_clj.zip.node.call(null,zloc));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return rewrite_clj.paredit.global_find_by_node.call(null,p1__9025_SHARP_,rewrite_clj.zip.node.call(null,barfee_loc));
}
});})(preserves,barfee_loc))
.call(null,cljs.core.partial.call(null,cljs.core.reduce,rewrite_clj.zip.insert_right).call(null,rewrite_clj.zip.insert_right.call(null,rewrite_clj.zip.utils.remove_and_move_up.call(null,rewrite_clj.zip.utils.remove_right_while.call(null,rewrite_clj.zip.utils.remove_left_while.call(null,barfee_loc,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_),rewrite_clj.zip.whitespace.whitespace_QMARK_)),rewrite_clj.zip.node.call(null,barfee_loc)),preserves));
}
});
/**
* Push out the leftmost node of the current S-expression into outer left form
* 
* - `[1 2 [3 |4] 5] => [1 2 3 [|4] 5]`
*/
rewrite_clj.paredit.barf_backward = (function barf_backward(zloc){var barfee_loc = rewrite_clj.zip.leftmost.call(null,zloc);if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,zloc)))
{return zloc;
} else
{var preserves = cljs.core.filter.call(null,((function (barfee_loc){
return (function (p1__9026_SHARP_){var or__6371__auto__ = rewrite_clj.node.linebreak_QMARK_.call(null,p1__9026_SHARP_);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return rewrite_clj.node.comment_QMARK_.call(null,p1__9026_SHARP_);
}
});})(barfee_loc))
,rewrite_clj.paredit.nodes_by_dir.call(null,clojure.zip.right.call(null,barfee_loc),clojure.zip.right,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_));return ((function (preserves,barfee_loc){
return (function (p1__9027_SHARP_){var or__6371__auto__ = rewrite_clj.paredit.global_find_by_node.call(null,p1__9027_SHARP_,rewrite_clj.zip.node.call(null,zloc));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return rewrite_clj.paredit.global_find_by_node.call(null,p1__9027_SHARP_,rewrite_clj.zip.node.call(null,barfee_loc));
}
});})(preserves,barfee_loc))
.call(null,cljs.core.partial.call(null,cljs.core.reduce,rewrite_clj.zip.insert_left).call(null,rewrite_clj.zip.insert_left.call(null,clojure.zip.remove.call(null,rewrite_clj.zip.utils.remove_right_while.call(null,rewrite_clj.zip.utils.remove_left_while.call(null,barfee_loc,rewrite_clj.zip.whitespace.whitespace_QMARK_),rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_)),rewrite_clj.zip.node.call(null,barfee_loc)),preserves));
}
});
/**
* Wrap current node with a given type `t` (:vector, :list, :set, :map :fn)
* 
* - `|123 => [|123] ; given :vector`
* - `|[1 [2]] => [|[1 [2]]]`
*/
rewrite_clj.paredit.wrap_around = (function wrap_around(zloc,t){return rewrite_clj.zip.down.call(null,clojure.zip.append_child.call(null,rewrite_clj.zip.utils.remove_right.call(null,rewrite_clj.zip.utils.remove_right_while.call(null,rewrite_clj.zip.left.call(null,rewrite_clj.zip.insert_left.call(null,zloc,rewrite_clj.paredit.create_seq_node.call(null,t,null))),rewrite_clj.zip.whitespace.whitespace_QMARK_)),rewrite_clj.zip.node.call(null,zloc)));
});
/**
* Create a new seq node of type `t` left of `zloc` then slurp fully into the new node
* 
* - `[1 |2 3 4] => [1 [|2 3 4]]`
*/
rewrite_clj.paredit.wrap_fully_forward_slurp = (function wrap_fully_forward_slurp(zloc,t){return rewrite_clj.paredit.slurp_forward_fully.call(null,rewrite_clj.zip.left.call(null,rewrite_clj.zip.insert_left.call(null,zloc,rewrite_clj.paredit.create_seq_node.call(null,t,null))));
});
/**
* See rewrite-clj.zip/splice
*/
rewrite_clj.paredit.splice = rewrite_clj.zip.splice;
rewrite_clj.paredit.splice_killing = (function splice_killing(zloc,f){if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,zloc)))
{return zloc;
} else
{return rewrite_clj.paredit.global_find_by_node.call(null,rewrite_clj.paredit.splice.call(null,rewrite_clj.zip.up.call(null,f.call(null,zloc,cljs.core.constantly.call(null,true)))),rewrite_clj.zip.node.call(null,zloc));
}
});
/**
* Remove left siblings of current given node in S-Expression and unwrap remaining into enclosing S-expression
* 
* - `(foo (let ((x 5)) |(sqrt n)) bar) => (foo (sqrt n) bar)`
*/
rewrite_clj.paredit.splice_killing_backward = (function splice_killing_backward(zloc){return rewrite_clj.paredit.splice_killing.call(null,zloc,rewrite_clj.zip.utils.remove_left_while);
});
/**
* Remove current given node and its right siblings in S-Expression and unwrap remaining into enclosing S-expression
* 
* - `(a (b c |d e) f) => (a b |c f)`
*/
rewrite_clj.paredit.splice_killing_forward = (function splice_killing_forward(zloc){if(cljs.core.truth_((function (){var and__6359__auto__ = rewrite_clj.zip.up.call(null,zloc);if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.not.call(null,rewrite_clj.zip.leftmost_QMARK_.call(null,zloc));
} else
{return and__6359__auto__;
}
})()))
{return rewrite_clj.paredit.splice_killing.call(null,rewrite_clj.zip.left.call(null,zloc),rewrite_clj.zip.utils.remove_right_while);
} else
{if(cljs.core.truth_(rewrite_clj.zip.up.call(null,zloc)))
{return rewrite_clj.zip.remove.call(null,rewrite_clj.zip.up.call(null,zloc));
} else
{return zloc;
}
}
});
/**
* Split current s-sexpression in two at given node `zloc`
* 
* -  `[1 2 |3 4 5] => [1 2 3] [4 5]`
*/
rewrite_clj.paredit.split = (function split(zloc){var parent_loc = rewrite_clj.zip.up.call(null,zloc);if(cljs.core.not.call(null,parent_loc))
{return zloc;
} else
{var t = rewrite_clj.zip.tag.call(null,parent_loc);var lefts = cljs.core.reverse.call(null,rewrite_clj.paredit.remove_first_if_ws.call(null,cljs.core.rest.call(null,rewrite_clj.paredit.nodes_by_dir.call(null,rewrite_clj.zip.right.call(null,zloc),clojure.zip.left))));var rights = rewrite_clj.paredit.remove_first_if_ws.call(null,rewrite_clj.paredit.nodes_by_dir.call(null,rewrite_clj.zip.right.call(null,zloc),clojure.zip.right));if(!((cljs.core.seq.call(null,lefts)) && (cljs.core.seq.call(null,rights))))
{return zloc;
} else
{return ((function (t,lefts,rights,parent_loc){
return (function (p1__9028_SHARP_){var or__6371__auto__ = rewrite_clj.paredit.global_find_by_node.call(null,p1__9028_SHARP_,rewrite_clj.zip.node.call(null,zloc));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return rewrite_clj.paredit.global_find_by_node.call(null,p1__9028_SHARP_,cljs.core.last.call(null,lefts));
}
});})(t,lefts,rights,parent_loc))
.call(null,rewrite_clj.zip.remove.call(null,rewrite_clj.zip.insert_left.call(null,rewrite_clj.zip.insert_left.call(null,parent_loc,rewrite_clj.paredit.create_seq_node.call(null,t,lefts)),rewrite_clj.paredit.create_seq_node.call(null,t,rights))));
}
}
});
rewrite_clj.paredit.split_string = (function split_string(zloc,pos){var bounds = cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,zloc));var row_idx = (new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(pos) - new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(bounds));var lines = new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.node.call(null,zloc));var split_col = ((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(bounds))))?(new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos) - 1):(new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(pos) - (new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(bounds) + 1)));return rewrite_clj.zip.insert_right.call(null,rewrite_clj.zip.replace.call(null,zloc,rewrite_clj.node.string_node.call(null,cljs.core.update_in.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(row_idx + 1),lines)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx], null),((function (bounds,row_idx,lines,split_col){
return (function (p1__9029_SHARP_){return p1__9029_SHARP_.substring(0,split_col);
});})(bounds,row_idx,lines,split_col))
))),rewrite_clj.node.string_node.call(null,cljs.core.update_in.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,row_idx,lines)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),((function (bounds,row_idx,lines,split_col){
return (function (p1__9030_SHARP_){return p1__9030_SHARP_.substring(split_col);
});})(bounds,row_idx,lines,split_col))
)));
});
/**
* In string aware split
* 
* Perform split at given position `pos` Like split, but:
* 
* - if inside string splits string into two strings
* 
* `pos` should provide `{:row :col }` which are relative to the start of the given form the zipper represents
* `zloc` must be positioned at a node previous (given depth first) to the node at given pos
*/
rewrite_clj.paredit.split_at_pos = (function split_at_pos(zloc,pos){var temp__4090__auto__ = rewrite_clj.zip.find_last_by_pos.call(null,zloc,pos);if(cljs.core.truth_(temp__4090__auto__))
{var candidate = temp__4090__auto__;if(rewrite_clj.paredit.string_node_QMARK_.call(null,candidate))
{return rewrite_clj.paredit.split_string.call(null,candidate,pos);
} else
{return rewrite_clj.paredit.split.call(null,candidate);
}
} else
{return zloc;
}
});
rewrite_clj.paredit.join_seqs = (function join_seqs(left,right){var lefts = rewrite_clj.node.children.call(null,rewrite_clj.zip.node.call(null,left));var ws_nodes = rewrite_clj.paredit.nodes_by_dir.call(null,clojure.zip.right.call(null,left),clojure.zip.right,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_);var rights = rewrite_clj.node.children.call(null,rewrite_clj.zip.node.call(null,right));return rewrite_clj.paredit.global_find_by_node.call(null,rewrite_clj.zip.remove.call(null,rewrite_clj.zip.insert_left.call(null,rewrite_clj.zip.up.call(null,rewrite_clj.paredit.remove_ws_or_comment.call(null,clojure.zip.remove.call(null,right))),rewrite_clj.paredit.create_seq_node.call(null,new cljs.core.Keyword(null,"vector","vector",4488484021),cljs.core.concat.call(null,lefts,ws_nodes,rights)))),cljs.core.first.call(null,rights));
});
rewrite_clj.paredit.join_strings = (function join_strings(left,right){return rewrite_clj.zip.replace.call(null,rewrite_clj.paredit.remove_ws_or_comment.call(null,clojure.zip.remove.call(null,right)),rewrite_clj.node.string_node.call(null,[cljs.core.str(rewrite_clj.node.sexpr.call(null,rewrite_clj.zip.node.call(null,left))),cljs.core.str(rewrite_clj.node.sexpr.call(null,rewrite_clj.zip.node.call(null,right)))].join('')));
});
/**
* Join S-expression to the left and right of current loc. Also works for strings.
* 
* - `[[1 2] |[3 4]] => [[1 2 3 4]]`
* - `["Hello " | "World"] => ["Hello World"]
*/
rewrite_clj.paredit.join = (function join(zloc){var left = (function (){var G__9033 = zloc;var G__9033__$1 = (((G__9033 == null))?null:rewrite_clj.zip.left.call(null,G__9033));return G__9033__$1;
})();var right = (cljs.core.truth_((function (){var G__9034 = zloc;var G__9034__$1 = (((G__9034 == null))?null:rewrite_clj.zip.node.call(null,G__9034));var G__9034__$2 = (((G__9034__$1 == null))?null:rewrite_clj.node.whitespace_QMARK_.call(null,G__9034__$1));return G__9034__$2;
})())?rewrite_clj.zip.right.call(null,zloc):zloc);if(cljs.core.not.call(null,(function (){var and__6359__auto__ = left;if(cljs.core.truth_(and__6359__auto__))
{return right;
} else
{return and__6359__auto__;
}
})()))
{return zloc;
} else
{if(cljs.core.truth_((function (){var and__6359__auto__ = rewrite_clj.zip.seq_QMARK_.call(null,left);if(cljs.core.truth_(and__6359__auto__))
{return rewrite_clj.zip.seq_QMARK_.call(null,right);
} else
{return and__6359__auto__;
}
})()))
{return rewrite_clj.paredit.join_seqs.call(null,left,right);
} else
{if((rewrite_clj.paredit.string_node_QMARK_.call(null,left)) && (rewrite_clj.paredit.string_node_QMARK_.call(null,right)))
{return rewrite_clj.paredit.join_strings.call(null,left,right);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return zloc;
} else
{return null;
}
}
}
}
});
/**
* Delete siblings and raise node at zloc one level up
* 
* - `[1 [2 |3 4]] => [1 |3]`
*/
rewrite_clj.paredit.raise = (function raise(zloc){var temp__4090__auto__ = rewrite_clj.zip.up.call(null,zloc);if(cljs.core.truth_(temp__4090__auto__))
{var containing = temp__4090__auto__;return rewrite_clj.zip.replace.call(null,containing,rewrite_clj.zip.node.call(null,zloc));
} else
{return zloc;
}
});
/**
* Move node at current location to the position of previous location given a depth first traversal
* 
* -  `(+ 1 (+ 2 |3) 4) => (+ 1 (+ |3 2) 4)`
* - `(+ 1 (+ 2 3) |4) => (+ 1 (+ 2 3 |4))`
* 
* returns zloc after move or given zloc if a move isn't possible
*/
rewrite_clj.paredit.move_to_prev = (function move_to_prev(zloc){var n = rewrite_clj.zip.node.call(null,zloc);var p = (function (){var G__9038 = zloc;var G__9038__$1 = (((G__9038 == null))?null:rewrite_clj.zip.left.call(null,G__9038));var G__9038__$2 = (((G__9038__$1 == null))?null:rewrite_clj.zip.node.call(null,G__9038__$1));return G__9038__$2;
})();var ins_fn = ((((p == null)) || (cljs.core._EQ_.call(null,rewrite_clj.zip.node.call(null,rewrite_clj.zip.remove.call(null,zloc)),p)))?((function (n,p){
return (function (p1__9035_SHARP_){return rewrite_clj.zip.left.call(null,rewrite_clj.zip.insert_left.call(null,p1__9035_SHARP_,n));
});})(n,p))
:((function (n,p){
return (function (p1__9036_SHARP_){return rewrite_clj.zip.right.call(null,rewrite_clj.zip.insert_right.call(null,p1__9036_SHARP_,n));
});})(n,p))
);if(cljs.core.not.call(null,rewrite_clj.zip.prev.call(null,rewrite_clj.zip.remove.call(null,zloc))))
{return zloc;
} else
{return ins_fn.call(null,rewrite_clj.zip.remove.call(null,zloc));
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.parembrace.util')) {
goog.provide('lt.plugins.parembrace.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.parembrace.util.whitespace_QMARK_ = (function whitespace_QMARK_(ch){return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"\t",null,"\n",null], null), null),ch);
});
lt.plugins.parembrace.util.end_pair_QMARK_ = (function end_pair_QMARK_(ch){return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [")",null,"]",null,"}",null], null), null),ch);
});
lt.plugins.parembrace.util.start_pair_QMARK_ = (function start_pair_QMARK_(ch){return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"[",null,"{",null], null), null),ch);
});
lt.plugins.parembrace.util.opposites = {"]": "[", "[": "]", "}": "{", "{": "}", "(": ")", ")": "("};
lt.plugins.parembrace.util.get_ch = (function get_ch(ed,loc){return cljs.core.get.call(null,lt.objs.editor.line.call(null,ed,(function (){var or__6371__auto__ = (loc["line"]);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc);
}
})()),(function (){var or__6371__auto__ = (loc["ch"]);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc);
}
})());
});
lt.plugins.parembrace.util.adjust_loc = (function adjust_loc(loc,delta){var obj9370 = {"line":(loc["line"]),"ch":((loc["ch"]) + delta)};return obj9370;
});
lt.plugins.parembrace.util.str_contains_QMARK_ = (function str_contains_QMARK_(a,b){return (a.indexOf(b) > -1);
});
lt.plugins.parembrace.util.stringz_QMARK_ = (function stringz_QMARK_(ed,loc,line,token_type){if(cljs.core.truth_(token_type))
{var ch = cljs.core.get.call(null,line,(loc["ch"]));var left_ch = cljs.core.get.call(null,line,(lt.plugins.parembrace.util.adjust_loc.call(null,loc,-1)["ch"]));return (lt.plugins.parembrace.util.str_contains_QMARK_.call(null,token_type,"string")) && (cljs.core.not.call(null,(function (){var and__6359__auto__ = lt.plugins.parembrace.util.end_pair_QMARK_.call(null,ch);if(cljs.core.truth_(and__6359__auto__))
{return (cljs.core._EQ_.call(null,"\"",left_ch)) && (!(cljs.core._EQ_.call(null,"string",lt.objs.editor.__GT_token_type.call(null,ed,cljs.core.js__GT_clj.call(null,lt.plugins.parembrace.util.adjust_loc.call(null,loc,1))))));
} else
{return and__6359__auto__;
}
})()));
} else
{return null;
}
});
lt.plugins.parembrace.util.string_BAR_comment_QMARK_ = (function string_BAR_comment_QMARK_(ed,loc,line){var t = lt.objs.editor.__GT_token_type.call(null,ed,loc);if(cljs.core.truth_(t))
{if(lt.plugins.parembrace.util.str_contains_QMARK_.call(null,t,"comment-form"))
{return false;
} else
{if(lt.plugins.parembrace.util.str_contains_QMARK_.call(null,t,"comment"))
{return true;
} else
{if(cljs.core.truth_(lt.plugins.parembrace.util.stringz_QMARK_.call(null,ed,loc,line,t)))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
} else
{return null;
}
});
lt.plugins.parembrace.util.move_loc_line = (function move_loc_line(ed,loc,dir){if(cljs.core.truth_(loc))
{var neue = (function (){var obj9376 = {"line":((cljs.core._EQ_.call(null,dir,new cljs.core.Keyword(null,"up","up",1013907981)))?((loc["line"]) - 1):((loc["line"]) + 1)),"ch":(loc["ch"])};return obj9376;
})();if(((neue["line"]) < 0))
{return null;
} else
{if(((neue["line"]) > lt.objs.editor.last_line.call(null,ed)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var obj9378 = {"line":(neue["line"]),"ch":((cljs.core._EQ_.call(null,dir,new cljs.core.Keyword(null,"up","up",1013907981)))?(function (){var x__6678__auto__ = (lt.objs.editor.line_length.call(null,ed,(neue["line"])) - 1);var y__6679__auto__ = 0;return ((x__6678__auto__ > y__6679__auto__) ? x__6678__auto__ : y__6679__auto__);
})():0)};return obj9378;
} else
{return null;
}
}
}
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
lt.plugins.parembrace.util.move_loc = (function() { 
var move_loc__delegate = function (ed,dir,loc,p__9379){var map__9381 = p__9379;var map__9381__$1 = ((cljs.core.seq_QMARK_.call(null,map__9381))?cljs.core.apply.call(null,cljs.core.hash_map,map__9381):map__9381);var line = cljs.core.get.call(null,map__9381__$1,new cljs.core.Keyword(null,"line","line",1017226086));if(cljs.core.truth_(loc))
{var len = (cljs.core.truth_(line)?cljs.core.count.call(null,line):lt.objs.editor.line_length.call(null,ed,(loc["line"])));var neue = lt.plugins.parembrace.util.adjust_loc.call(null,loc,((cljs.core._EQ_.call(null,dir,new cljs.core.Keyword(null,"left","left",1017222009)))?-1:1));if(((neue["ch"]) < 0))
{return lt.plugins.parembrace.util.move_loc_line.call(null,ed,loc,new cljs.core.Keyword(null,"up","up",1013907981));
} else
{if(((neue["ch"]) >= len))
{return lt.plugins.parembrace.util.move_loc_line.call(null,ed,loc,new cljs.core.Keyword(null,"down","down",1016993812));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return neue;
} else
{return null;
}
}
}
} else
{return null;
}
};
var move_loc = function (ed,dir,loc,var_args){
var p__9379 = null;if (arguments.length > 3) {
  p__9379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return move_loc__delegate.call(this,ed,dir,loc,p__9379);};
move_loc.cljs$lang$maxFixedArity = 3;
move_loc.cljs$lang$applyTo = (function (arglist__9396){
var ed = cljs.core.first(arglist__9396);
arglist__9396 = cljs.core.next(arglist__9396);
var dir = cljs.core.first(arglist__9396);
arglist__9396 = cljs.core.next(arglist__9396);
var loc = cljs.core.first(arglist__9396);
var p__9379 = cljs.core.rest(arglist__9396);
return move_loc__delegate(ed,dir,loc,p__9379);
});
move_loc.cljs$core$IFn$_invoke$arity$variadic = move_loc__delegate;
return move_loc;
})()
;
lt.plugins.parembrace.util.within_range = (function within_range(p__9382,cur){var vec__9384 = p__9382;var start = cljs.core.nth.call(null,vec__9384,0,null);var end = cljs.core.nth.call(null,vec__9384,1,null);if(cljs.core.truth_(cur))
{return ((end >= (cur["line"]))) && (((cur["line"]) >= start));
} else
{return null;
}
});
lt.plugins.parembrace.util.move_matching_loc = (function move_matching_loc(ed,loc,dir,line){var ch = cljs.core.get.call(null,line,(loc["ch"]));var next_loc = lt.plugins.parembrace.util.move_loc.call(null,ed,dir,loc,new cljs.core.Keyword(null,"line","line",1017226086),line);var next_line = (cljs.core.truth_(next_loc)?((cljs.core.not_EQ_.call(null,(loc["line"]),(next_loc["line"])))?lt.objs.editor.line.call(null,ed,(next_loc["line"])):line):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,next_loc,next_line], null);
});
lt.plugins.parembrace.util.opposites_reg_ex = (new RegExp("\\(|\\[|\\{|\\)|\\]|\\}"));
lt.plugins.parembrace.util.reverse_str = (function reverse_str(v){return v.split("").reverse().join("");
});
lt.plugins.parembrace.util.idx_next_opposites = (function idx_next_opposites(v){var temp__4092__auto__ = lt.plugins.parembrace.util.opposites_reg_ex.exec(v);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return m.index;
} else
{return null;
}
});
lt.plugins.parembrace.util.maybe_skip_to_next_opposites = (function maybe_skip_to_next_opposites(loc,line){if(cljs.core.truth_((function (){var and__6359__auto__ = loc;if(cljs.core.truth_(and__6359__auto__))
{return line;
} else
{return and__6359__auto__;
}
})()))
{var v = line.substr((loc["ch"]));var vl = (v["length"]);var idx = lt.plugins.parembrace.util.idx_next_opposites.call(null,v);if(cljs.core.truth_((function (){var and__6359__auto__ = idx;if(cljs.core.truth_(and__6359__auto__))
{return ((idx > 0)) && ((idx < vl));
} else
{return and__6359__auto__;
}
})()))
{return lt.plugins.parembrace.util.adjust_loc.call(null,loc,idx);
} else
{if(cljs.core.not.call(null,idx))
{return lt.plugins.parembrace.util.adjust_loc.call(null,loc,((line["length"]) - 1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return loc;
} else
{return null;
}
}
}
} else
{return loc;
}
});
lt.plugins.parembrace.util.idx_prev_opposites = (function idx_prev_opposites(v){return lt.plugins.parembrace.util.idx_next_opposites.call(null,lt.plugins.parembrace.util.reverse_str.call(null,v));
});
lt.plugins.parembrace.util.maybe_skip_to_prev_opposites = (function maybe_skip_to_prev_opposites(loc,line){if(cljs.core.truth_((function (){var and__6359__auto__ = loc;if(cljs.core.truth_(and__6359__auto__))
{return line;
} else
{return and__6359__auto__;
}
})()))
{var v = line.substr(0,((loc["ch"]) + 1));var vl = (v["length"]);var idx = lt.plugins.parembrace.util.idx_prev_opposites.call(null,v);if(cljs.core.truth_((function (){var and__6359__auto__ = idx;if(cljs.core.truth_(and__6359__auto__))
{return ((idx > 0)) && ((idx < vl));
} else
{return and__6359__auto__;
}
})()))
{return lt.plugins.parembrace.util.adjust_loc.call(null,loc,(- idx));
} else
{if(cljs.core.not.call(null,idx))
{return lt.plugins.parembrace.util.adjust_loc.call(null,loc,(- (loc["ch"])));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return loc;
} else
{return null;
}
}
}
} else
{return loc;
}
});
lt.plugins.parembrace.util.loc_next_end_pair = (function loc_next_end_pair(ed,loc){if(cljs.core.truth_(loc))
{var search_range = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(loc["line"]),((loc["line"]) + 200)], null);var cur = loc;var line = lt.objs.editor.line.call(null,ed,(loc["line"]));var level = 0;while(true){
if(cljs.core.not.call(null,(function (){var and__6359__auto__ = cur;if(cljs.core.truth_(and__6359__auto__))
{var and__6359__auto____$1 = line;if(cljs.core.truth_(and__6359__auto____$1))
{return lt.plugins.parembrace.util.within_range.call(null,search_range,cur);
} else
{return and__6359__auto____$1;
}
} else
{return and__6359__auto__;
}
})()))
{return null;
} else
{var vec__9386 = lt.plugins.parembrace.util.move_matching_loc.call(null,ed,cur,new cljs.core.Keyword(null,"right","right",1122416014),line);var ch = cljs.core.nth.call(null,vec__9386,0,null);var next_loc = cljs.core.nth.call(null,vec__9386,1,null);var next_line = cljs.core.nth.call(null,vec__9386,2,null);var next_loc__$1 = lt.plugins.parembrace.util.maybe_skip_to_next_opposites.call(null,next_loc,next_line);if(cljs.core.not.call(null,(function (){var or__6371__auto__ = lt.plugins.parembrace.util.start_pair_QMARK_.call(null,ch);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return lt.plugins.parembrace.util.end_pair_QMARK_.call(null,ch);
}
})()))
{{
var G__9397 = next_loc__$1;
var G__9398 = next_line;
var G__9399 = level;
cur = G__9397;
line = G__9398;
level = G__9399;
continue;
}
} else
{if(cljs.core.truth_(lt.plugins.parembrace.util.string_BAR_comment_QMARK_.call(null,ed,cur,line)))
{{
var G__9400 = next_loc__$1;
var G__9401 = next_line;
var G__9402 = level;
cur = G__9400;
line = G__9401;
level = G__9402;
continue;
}
} else
{if(cljs.core.truth_(lt.plugins.parembrace.util.start_pair_QMARK_.call(null,ch)))
{{
var G__9403 = next_loc__$1;
var G__9404 = next_line;
var G__9405 = (level + 1);
cur = G__9403;
line = G__9404;
level = G__9405;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__6359__auto__ = lt.plugins.parembrace.util.end_pair_QMARK_.call(null,ch);if(cljs.core.truth_(and__6359__auto__))
{return cljs.core._EQ_.call(null,0,level);
} else
{return and__6359__auto__;
}
})()))
{return cur;
} else
{if(cljs.core.truth_(lt.plugins.parembrace.util.end_pair_QMARK_.call(null,ch)))
{{
var G__9406 = next_loc__$1;
var G__9407 = next_line;
var G__9408 = (level - 1);
cur = G__9406;
line = G__9407;
level = G__9408;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__9409 = next_loc__$1;
var G__9410 = next_line;
var G__9411 = level;
cur = G__9409;
line = G__9410;
level = G__9411;
continue;
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
} else
{return null;
}
});
lt.plugins.parembrace.util.loc_next_matching_start_pair = (function loc_next_matching_start_pair(ed,loc,pair_ch){if(cljs.core.truth_(loc))
{var search_range = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((loc["line"]) - 200),(loc["line"])], null);var cur = loc;var line = lt.objs.editor.line.call(null,ed,(loc["line"]));var level = 0;while(true){
if(cljs.core.not.call(null,(function (){var and__6359__auto__ = cur;if(cljs.core.truth_(and__6359__auto__))
{var and__6359__auto____$1 = line;if(cljs.core.truth_(and__6359__auto____$1))
{return lt.plugins.parembrace.util.within_range.call(null,search_range,cur);
} else
{return and__6359__auto____$1;
}
} else
{return and__6359__auto__;
}
})()))
{return null;
} else
{var vec__9388 = lt.plugins.parembrace.util.move_matching_loc.call(null,ed,cur,new cljs.core.Keyword(null,"left","left",1017222009),line);var ch = cljs.core.nth.call(null,vec__9388,0,null);var next_loc = cljs.core.nth.call(null,vec__9388,1,null);var next_line = cljs.core.nth.call(null,vec__9388,2,null);var next_loc__$1 = lt.plugins.parembrace.util.maybe_skip_to_prev_opposites.call(null,next_loc,next_line);if(!((cljs.core._EQ_.call(null,ch,(lt.plugins.parembrace.util.opposites[pair_ch]))) || (cljs.core._EQ_.call(null,ch,pair_ch))))
{{
var G__9412 = next_loc__$1;
var G__9413 = next_line;
var G__9414 = level;
cur = G__9412;
line = G__9413;
level = G__9414;
continue;
}
} else
{if(cljs.core.truth_(lt.plugins.parembrace.util.string_BAR_comment_QMARK_.call(null,ed,cur,line)))
{{
var G__9415 = next_loc__$1;
var G__9416 = next_line;
var G__9417 = level;
cur = G__9415;
line = G__9416;
level = G__9417;
continue;
}
} else
{if(cljs.core._EQ_.call(null,ch,(lt.plugins.parembrace.util.opposites[pair_ch])))
{{
var G__9418 = next_loc__$1;
var G__9419 = next_line;
var G__9420 = (level + 1);
cur = G__9418;
line = G__9419;
level = G__9420;
continue;
}
} else
{if((cljs.core._EQ_.call(null,ch,pair_ch)) && (cljs.core._EQ_.call(null,0,level)))
{return cur;
} else
{if(cljs.core._EQ_.call(null,ch,pair_ch))
{{
var G__9421 = next_loc__$1;
var G__9422 = next_line;
var G__9423 = (level - 1);
cur = G__9421;
line = G__9422;
level = G__9423;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__9424 = next_loc__$1;
var G__9425 = next_line;
var G__9426 = level;
cur = G__9424;
line = G__9425;
level = G__9426;
continue;
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
} else
{return null;
}
});
lt.plugins.parembrace.util.get_bounds_matching = (function get_bounds_matching(ed,loc){var temp__4092__auto__ = lt.plugins.parembrace.util.loc_next_end_pair.call(null,ed,loc);if(cljs.core.truth_(temp__4092__auto__))
{var loc_next_end = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.parembrace.util.loc_next_matching_start_pair.call(null,ed,lt.plugins.parembrace.util.move_loc.call(null,ed,new cljs.core.Keyword(null,"left","left",1017222009),loc_next_end),(lt.plugins.parembrace.util.opposites[lt.plugins.parembrace.util.get_ch.call(null,ed,loc_next_end)]));if(cljs.core.truth_(temp__4092__auto____$1))
{var loc_next_start = temp__4092__auto____$1;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_next_start,loc_next_end], null);
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.parembrace.util.get_next_bounds_matching = (function get_next_bounds_matching(ed,p__9389){var vec__9391 = p__9389;var start = cljs.core.nth.call(null,vec__9391,0,null);var end = cljs.core.nth.call(null,vec__9391,1,null);var temp__4092__auto__ = lt.plugins.parembrace.util.loc_next_end_pair.call(null,ed,lt.plugins.parembrace.util.move_loc.call(null,ed,new cljs.core.Keyword(null,"right","right",1122416014),end));if(cljs.core.truth_(temp__4092__auto__))
{var loc_next_end = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.parembrace.util.loc_next_matching_start_pair.call(null,ed,lt.plugins.parembrace.util.move_loc.call(null,ed,new cljs.core.Keyword(null,"left","left",1017222009),start),(lt.plugins.parembrace.util.opposites[lt.plugins.parembrace.util.get_ch.call(null,ed,loc_next_end)]));if(cljs.core.truth_(temp__4092__auto____$1))
{var loc_next_start = temp__4092__auto____$1;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_next_start,loc_next_end], null);
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.parembrace.util.get_top_level_form = (function() {
var get_top_level_form = null;
var get_top_level_form__1 = (function (ed){return get_top_level_form.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
var get_top_level_form__2 = (function (ed,loc){var temp__4090__auto__ = (function (){var G__9394 = lt.plugins.parembrace.util.get_bounds_matching.call(null,ed,cljs.core.clj__GT_js.call(null,loc));var G__9394__$1 = (((G__9394 == null))?null:cljs.core.iterate.call(null,cljs.core.partial.call(null,lt.plugins.parembrace.util.get_next_bounds_matching,ed),G__9394));var G__9394__$2 = (((G__9394__$1 == null))?null:cljs.core.take_while.call(null,cljs.core.identity,G__9394__$1));var G__9394__$3 = (((G__9394__$2 == null))?null:cljs.core.last.call(null,G__9394__$2));return G__9394__$3;
})();if(cljs.core.truth_(temp__4090__auto__))
{var vec__9395 = temp__4090__auto__;var start = cljs.core.nth.call(null,vec__9395,0,null);var end = cljs.core.nth.call(null,vec__9395,1,null);var start_c = cljs.core.js__GT_clj.call(null,start,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var end_c = cljs.core.js__GT_clj.call(null,end,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-str","form-str",1486434586),lt.objs.editor.range.call(null,ed,start_c,cljs.core.update_in.call(null,end_c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)),new cljs.core.Keyword(null,"start","start",1123661780),start_c,new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.update_in.call(null,end_c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc),0))
{return get_top_level_form.call(null,ed,cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"ch","ch",1013907415),1));
} else
{return null;
}
}
});
get_top_level_form = function(ed,loc){
switch(arguments.length){
case 1:
return get_top_level_form__1.call(this,ed);
case 2:
return get_top_level_form__2.call(this,ed,loc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_top_level_form.cljs$core$IFn$_invoke$arity$1 = get_top_level_form__1;
get_top_level_form.cljs$core$IFn$_invoke$arity$2 = get_top_level_form__2;
return get_top_level_form;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.parembrace.core')) {
goog.provide('lt.plugins.parembrace.core');
goog.require('cljs.core');
goog.require('lt.plugins.parembrace.util');
goog.require('rewrite_clj.paredit');
goog.require('lt.plugins.parembrace.util');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('lt.objs.editor.pool');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('rewrite_clj.paredit');
goog.require('lt.objs.command');
goog.require('rewrite_clj.zip.whitespace');
lt.plugins.parembrace.core.zpos_gt_QMARK_ = (function zpos_gt_QMARK_(l1,l2){if((new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(l1) > new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(l2)))
{return true;
} else
{if((new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(l2) > new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(l1)))
{return false;
} else
{if((new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(l1) > new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(l2)))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
});
lt.plugins.parembrace.core.__GT_zipper_pos_start = (function __GT_zipper_pos_start(pos,form){var row = ((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos) - new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form))) + 1);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",1014017356),row,new cljs.core.Keyword(null,"col","col",1014002930),((new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos) - ((cljs.core._EQ_.call(null,1,row))?new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form)):0)) + 1)], null);
});
lt.plugins.parembrace.core.__GT_start_pos = (function __GT_start_pos(z_pos,form){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),((new cljs.core.Keyword(null,"col","col",1014002930).cljs$core$IFn$_invoke$arity$1(z_pos) - 1) + ((cljs.core._EQ_.call(null,1,new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(z_pos)))?new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form)):0)),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form)) + (new cljs.core.Keyword(null,"row","row",1014017356).cljs$core$IFn$_invoke$arity$1(z_pos) - 1))], null);
});
lt.plugins.parembrace.core.__GT_end_pos = (function __GT_end_pos(z_pos,form){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),((new cljs.core.Keyword(null,"end-col","end-col",3700460800).cljs$core$IFn$_invoke$arity$1(z_pos) - 1) + ((cljs.core._EQ_.call(null,1,new cljs.core.Keyword(null,"end-row","end-row",3700475226).cljs$core$IFn$_invoke$arity$1(z_pos)))?new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form)):0)),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form)) + (new cljs.core.Keyword(null,"end-row","end-row",3700475226).cljs$core$IFn$_invoke$arity$1(z_pos) - 1))], null);
});
lt.plugins.parembrace.core.positioned_zip = (function positioned_zip(pos,form){try{return rewrite_clj.zip.find_last_by_pos.call(null,rewrite_clj.zip.of_string.call(null,new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(form)),lt.plugins.parembrace.core.__GT_zipper_pos_start.call(null,pos,form),cljs.core.constantly.call(null,true));
}catch (e8417){var e = e8417;return null;
}});
lt.plugins.parembrace.core.format_keep_pos = (function format_keep_pos(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var temp__4092__auto__ = lt.plugins.parembrace.util.get_top_level_form.call(null,ed,pos);if(cljs.core.truth_(temp__4092__auto__))
{var form = temp__4092__auto__;var hist_8452 = lt.objs.editor.get_history.call(null,ed);lt.objs.editor.set_selection.call(null,ed,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form));
lt.objs.editor.set_history.call(null,ed,hist_8452);
lt.objs.editor.indent_selection.call(null,ed,"smart");
return lt.objs.editor.move_cursor.call(null,ed,pos);
} else
{return null;
}
});
lt.plugins.parembrace.core.maybe_col_adjust_cursor = (function maybe_col_adjust_cursor(pos,opts){var temp__4090__auto__ = new cljs.core.Keyword(null,"col-adjust","col-adjust",3375522798).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(temp__4090__auto__))
{var col_adjust = temp__4090__auto__;return cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),((function (col_adjust,temp__4090__auto__){
return (function (p1__8418_SHARP_){return (p1__8418_SHARP_ + col_adjust);
});})(col_adjust,temp__4090__auto__))
);
} else
{return pos;
}
});
lt.plugins.parembrace.core.maybe_add_space = (function maybe_add_space(ed,expr){var right_char = lt.objs.editor.get_char.call(null,ed,1);if((!(cljs.core.empty_QMARK_.call(null,right_char))) && (cljs.core.not.call(null,lt.plugins.parembrace.util.whitespace_QMARK_.call(null,right_char))) && (cljs.core.not.call(null,lt.plugins.parembrace.util.end_pair_QMARK_.call(null,right_char))))
{return [cljs.core.str(expr),cljs.core.str(" ")].join('');
} else
{return expr;
}
});
lt.plugins.parembrace.core.in_seq_past_rightmost_QMARK_ = (function in_seq_past_rightmost_QMARK_(zloc,pos,form){var bounds_rightmost = (function (){var G__8420 = zloc;var G__8420__$1 = (((G__8420 == null))?null:rewrite_clj.zip.down.call(null,G__8420));var G__8420__$2 = (((G__8420__$1 == null))?null:clojure.zip.rightmost.call(null,G__8420__$1));var G__8420__$3 = (((G__8420__$2 == null))?null:rewrite_clj.zip.node.call(null,G__8420__$2));var G__8420__$4 = (((G__8420__$3 == null))?null:cljs.core.meta.call(null,G__8420__$3));return G__8420__$4;
})();if(cljs.core.truth_((function (){var and__6359__auto__ = zloc;if(cljs.core.truth_(and__6359__auto__))
{var and__6359__auto____$1 = bounds_rightmost;if(cljs.core.truth_(and__6359__auto____$1))
{return lt.plugins.parembrace.core.zpos_gt_QMARK_.call(null,lt.plugins.parembrace.core.__GT_zipper_pos_start.call(null,pos,form),bounds_rightmost);
} else
{return and__6359__auto____$1;
}
} else
{return and__6359__auto__;
}
})()))
{return true;
} else
{return false;
}
});
lt.plugins.parembrace.core.maybe_reposition_rightmost = (function maybe_reposition_rightmost(zloc,pos,form){if(lt.plugins.parembrace.core.in_seq_past_rightmost_QMARK_.call(null,zloc,pos,form))
{return rewrite_clj.zip.rightmost.call(null,rewrite_clj.zip.down.call(null,zloc));
} else
{return zloc;
}
});
lt.plugins.parembrace.core.paredit_cmd = (function paredit_cmd(ed,f,opts){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form = lt.plugins.parembrace.util.get_top_level_form.call(null,ed);var zloc = lt.plugins.parembrace.core.positioned_zip.call(null,pos,form);if(cljs.core.truth_(zloc))
{lt.objs.editor.replace.call(null,ed,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form),rewrite_clj.zip.root_string.call(null,f.call(null,lt.plugins.parembrace.core.maybe_reposition_rightmost.call(null,zloc,pos,form))));
lt.objs.editor.move_cursor.call(null,ed,lt.plugins.parembrace.core.maybe_col_adjust_cursor.call(null,pos,opts));
return lt.plugins.parembrace.core.format_keep_pos.call(null,ed);
} else
{return null;
}
});
lt.plugins.parembrace.core.position_after_move_prev = (function position_after_move_prev(zloc,pos,form){var temp__4090__auto__ = rewrite_clj.zip.prev.call(null,zloc);if(cljs.core.truth_(temp__4090__auto__))
{var prev = temp__4090__auto__;if(cljs.core.not.call(null,(function (){var G__8422 = zloc;var G__8422__$1 = (((G__8422 == null))?null:rewrite_clj.zip.left.call(null,G__8422));var G__8422__$2 = (((G__8422__$1 == null))?null:rewrite_clj.zip.seq_QMARK_.call(null,G__8422__$1));return G__8422__$2;
})()))
{return lt.plugins.parembrace.core.__GT_start_pos.call(null,cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,prev)),form);
} else
{return lt.plugins.parembrace.core.__GT_end_pos.call(null,cljs.core.update_in.call(null,cljs.core.meta.call(null,rewrite_clj.zip.node.call(null,prev)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-col","end-col",3700460800)], null),cljs.core.inc),form);
}
} else
{return pos;
}
});
lt.plugins.parembrace.core.move_to_previous_STAR_ = (function move_to_previous_STAR_(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form = lt.plugins.parembrace.util.get_top_level_form.call(null,ed);var zloc = lt.plugins.parembrace.core.positioned_zip.call(null,pos,form);var temp__4092__auto__ = (function (){var G__8424 = zloc;var G__8424__$1 = (((G__8424 == null))?null:lt.plugins.parembrace.core.maybe_reposition_rightmost.call(null,G__8424,pos,form));var G__8424__$2 = (((G__8424__$1 == null))?null:rewrite_clj.paredit.move_to_prev.call(null,G__8424__$1));var G__8424__$3 = (((G__8424__$2 == null))?null:rewrite_clj.zip.root_string.call(null,G__8424__$2));return G__8424__$3;
})();if(cljs.core.truth_(temp__4092__auto__))
{var res = temp__4092__auto__;lt.objs.editor.replace.call(null,ed,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form),res);
return lt.objs.editor.move_cursor.call(null,ed,lt.plugins.parembrace.core.position_after_move_prev.call(null,zloc,pos,form));
} else
{return null;
}
});
lt.plugins.parembrace.core.splice_STAR_ = (function splice_STAR_(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form = lt.plugins.parembrace.util.get_top_level_form.call(null,ed);var zloc = (function (){var G__8426 = lt.plugins.parembrace.core.positioned_zip.call(null,pos,form);var G__8426__$1 = (((G__8426 == null))?null:lt.plugins.parembrace.core.maybe_reposition_rightmost.call(null,G__8426,pos,form));var G__8426__$2 = (((G__8426__$1 == null))?null:rewrite_clj.zip.up.call(null,G__8426__$1));return G__8426__$2;
})();if(cljs.core.truth_(zloc))
{lt.objs.editor.replace.call(null,ed,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form),rewrite_clj.zip.root_string.call(null,rewrite_clj.paredit.splice.call(null,zloc)));
return lt.objs.editor.move_cursor.call(null,ed,pos);
} else
{return null;
}
});
lt.plugins.parembrace.core.kill_STAR_ = (function kill_STAR_(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form = lt.plugins.parembrace.util.get_top_level_form.call(null,ed);var temp__4092__auto__ = (function (){var G__8428 = new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(form);var G__8428__$1 = (((G__8428 == null))?null:rewrite_clj.zip.of_string.call(null,G__8428));var G__8428__$2 = (((G__8428__$1 == null))?null:rewrite_clj.paredit.kill_at_pos.call(null,G__8428__$1,lt.plugins.parembrace.core.__GT_zipper_pos_start.call(null,pos,form)));var G__8428__$3 = (((G__8428__$2 == null))?null:rewrite_clj.zip.root_string.call(null,G__8428__$2));return G__8428__$3;
})();if(cljs.core.truth_(temp__4092__auto__))
{var res = temp__4092__auto__;lt.objs.editor.replace.call(null,ed,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form),res);
return lt.objs.editor.move_cursor.call(null,ed,pos);
} else
{return null;
}
});
lt.plugins.parembrace.core.kill_one_STAR_ = (function kill_one_STAR_(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form = lt.plugins.parembrace.util.get_top_level_form.call(null,ed);var temp__4092__auto__ = (function (){var G__8430 = new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(form);var G__8430__$1 = (((G__8430 == null))?null:rewrite_clj.zip.of_string.call(null,G__8430));var G__8430__$2 = (((G__8430__$1 == null))?null:rewrite_clj.paredit.kill_one_at_pos.call(null,G__8430__$1,lt.plugins.parembrace.core.__GT_zipper_pos_start.call(null,pos,form)));var G__8430__$3 = (((G__8430__$2 == null))?null:rewrite_clj.zip.root_string.call(null,G__8430__$2));return G__8430__$3;
})();if(cljs.core.truth_(temp__4092__auto__))
{var res = temp__4092__auto__;lt.objs.editor.replace.call(null,ed,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form),res);
return lt.objs.editor.move_cursor.call(null,ed,pos);
} else
{return null;
}
});
lt.plugins.parembrace.core.split_STAR_ = (function split_STAR_(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form = lt.plugins.parembrace.util.get_top_level_form.call(null,ed);var temp__4092__auto__ = (function (){var G__8432 = new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(form);var G__8432__$1 = (((G__8432 == null))?null:rewrite_clj.zip.of_string.call(null,G__8432));var G__8432__$2 = (((G__8432__$1 == null))?null:rewrite_clj.paredit.split_at_pos.call(null,G__8432__$1,lt.plugins.parembrace.core.__GT_zipper_pos_start.call(null,pos,form)));var G__8432__$3 = (((G__8432__$2 == null))?null:rewrite_clj.zip.root_string.call(null,G__8432__$2));return G__8432__$3;
})();if(cljs.core.truth_(temp__4092__auto__))
{var res = temp__4092__auto__;lt.objs.editor.replace.call(null,ed,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form),res);
return lt.objs.editor.move_cursor.call(null,ed,pos);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
lt.plugins.parembrace.core.paredit_navigate = (function() { 
var paredit_navigate__delegate = function (ed,f,p__8435){var map__8438 = p__8435;var map__8438__$1 = ((cljs.core.seq_QMARK_.call(null,map__8438))?cljs.core.apply.call(null,cljs.core.hash_map,map__8438):map__8438);var dir = cljs.core.get.call(null,map__8438__$1,new cljs.core.Keyword(null,"dir","dir",1014003711),new cljs.core.Keyword(null,"left","left",1017222009));var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form = lt.plugins.parembrace.util.get_top_level_form.call(null,ed);var zloc = lt.plugins.parembrace.core.positioned_zip.call(null,pos,form);var G__8439 = lt.plugins.parembrace.core.positioned_zip.call(null,pos,form);var G__8439__$1 = (((G__8439 == null))?null:lt.plugins.parembrace.core.maybe_reposition_rightmost.call(null,G__8439,pos,form));var G__8439__$2 = (((G__8439__$1 == null))?null:f.call(null,G__8439__$1));var G__8439__$3 = (((G__8439__$2 == null))?null:rewrite_clj.zip.node.call(null,G__8439__$2));var G__8439__$4 = (((G__8439__$3 == null))?null:cljs.core.meta.call(null,G__8439__$3));var G__8439__$5 = (((G__8439__$4 == null))?null:((function (G__8439,G__8439__$1,G__8439__$2,G__8439__$3,G__8439__$4,pos,form,zloc,map__8438,map__8438__$1,dir){
return (function (p1__8433_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),dir))
{return lt.plugins.parembrace.core.__GT_start_pos.call(null,p1__8433_SHARP_,form);
} else
{return lt.plugins.parembrace.core.__GT_end_pos.call(null,p1__8433_SHARP_,form);
}
});})(G__8439,G__8439__$1,G__8439__$2,G__8439__$3,G__8439__$4,pos,form,zloc,map__8438,map__8438__$1,dir))
.call(null,G__8439__$4));var G__8439__$6 = (((G__8439__$5 == null))?null:((function (G__8439,G__8439__$1,G__8439__$2,G__8439__$3,G__8439__$4,G__8439__$5,pos,form,zloc,map__8438,map__8438__$1,dir){
return (function (p1__8434_SHARP_){return lt.objs.editor.move_cursor.call(null,ed,p1__8434_SHARP_);
});})(G__8439,G__8439__$1,G__8439__$2,G__8439__$3,G__8439__$4,G__8439__$5,pos,form,zloc,map__8438,map__8438__$1,dir))
.call(null,G__8439__$5));return G__8439__$6;
};
var paredit_navigate = function (ed,f,var_args){
var p__8435 = null;if (arguments.length > 2) {
  p__8435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return paredit_navigate__delegate.call(this,ed,f,p__8435);};
paredit_navigate.cljs$lang$maxFixedArity = 2;
paredit_navigate.cljs$lang$applyTo = (function (arglist__8453){
var ed = cljs.core.first(arglist__8453);
arglist__8453 = cljs.core.next(arglist__8453);
var f = cljs.core.first(arglist__8453);
var p__8435 = cljs.core.rest(arglist__8453);
return paredit_navigate__delegate(ed,f,p__8435);
});
paredit_navigate.cljs$core$IFn$_invoke$arity$variadic = paredit_navigate__delegate;
return paredit_navigate;
})()
;
lt.plugins.parembrace.core.paredit_select = (function paredit_select(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form = lt.plugins.parembrace.util.get_top_level_form.call(null,ed);var zloc = lt.plugins.parembrace.core.positioned_zip.call(null,pos,form);var temp__4092__auto__ = (function (){var G__8442 = zloc;var G__8442__$1 = (((G__8442 == null))?null:((function (G__8442,pos,form,zloc){
return (function (p1__8440_SHARP_){if(cljs.core.truth_(rewrite_clj.zip.whitespace.whitespace_QMARK_.call(null,p1__8440_SHARP_)))
{return rewrite_clj.zip.up.call(null,p1__8440_SHARP_);
} else
{return p1__8440_SHARP_;
}
});})(G__8442,pos,form,zloc))
.call(null,G__8442));var G__8442__$2 = (((G__8442__$1 == null))?null:rewrite_clj.zip.node.call(null,G__8442__$1));var G__8442__$3 = (((G__8442__$2 == null))?null:cljs.core.meta.call(null,G__8442__$2));return G__8442__$3;
})();if(cljs.core.truth_(temp__4092__auto__))
{var bounds = temp__4092__auto__;return lt.objs.editor.set_selection.call(null,ed,lt.plugins.parembrace.core.__GT_start_pos.call(null,bounds,form),lt.plugins.parembrace.core.__GT_end_pos.call(null,bounds,form));
} else
{return null;
}
});
lt.plugins.parembrace.core.__GT_pair = (function __GT_pair(t,pos){var np = (function (n){return cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),(function (p1__8443_SHARP_){return (p1__8443_SHARP_ + n);
}));
});var G__8445 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"doublequote","doublequote",3707793597),G__8445))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"\"",np.call(null,1)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",1013907514),G__8445))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#()",np.call(null,2)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map","map",1014012110),G__8445))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{}",np.call(null,1)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set","set",1014018004),G__8445))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{}",np.call(null,2)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vector","vector",4488484021),G__8445))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[]",np.call(null,1)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"list","list",1017226256),G__8445))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["()",np.call(null,1)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.println.call(null,"Pair type Not found");
} else
{return null;
}
}
}
}
}
}
}
});
lt.plugins.parembrace.core.lookup_start_pair = (function lookup_start_pair(t){var G__8447 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"doublequote","doublequote",3707793597),G__8447))
{return "\"";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map","map",1014012110),G__8447))
{return "{";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vector","vector",4488484021),G__8447))
{return "[";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"list","list",1017226256),G__8447))
{return "(";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
});
lt.plugins.parembrace.core.__BEH__open_pair_BANG_ = (function __BEH__open_pair_BANG_(ed,t){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var line = lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));var vec__8449 = lt.plugins.parembrace.core.__GT_pair.call(null,t,pos);var pair = cljs.core.nth.call(null,vec__8449,0,null);var new_pos = cljs.core.nth.call(null,vec__8449,1,null);if(cljs.core.truth_((function (){var and__6359__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"doublequote","doublequote",3707793597),t);if(and__6359__auto__)
{return lt.plugins.parembrace.util.stringz_QMARK_.call(null,ed,pos,line,lt.objs.editor.__GT_token_type.call(null,ed,pos));
} else
{return and__6359__auto__;
}
})()))
{lt.objs.editor.insert_at_cursor.call(null,ed,"\\\"");
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,pos,2));
} else
{if(cljs.core.truth_((function (){var and__6359__auto__ = lt.plugins.parembrace.util.string_BAR_comment_QMARK_.call(null,ed,pos,line);if(cljs.core.truth_(and__6359__auto__))
{return lt.plugins.parembrace.core.lookup_start_pair.call(null,t);
} else
{return and__6359__auto__;
}
})()))
{lt.objs.editor.insert_at_cursor.call(null,ed,lt.plugins.parembrace.core.lookup_start_pair.call(null,t));
return lt.objs.editor.move_cursor.call(null,ed,lt.objs.editor.adjust_loc.call(null,pos,1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.objs.editor.insert_at_cursor.call(null,ed,lt.plugins.parembrace.core.maybe_add_space.call(null,ed,pair));
return lt.objs.editor.move_cursor.call(null,ed,new_pos);
} else
{return null;
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","open-pair!","lt.plugins.parembrace.core/open-pair!",4624904424),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__open_pair_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.open-pair!","parembrace.open-pair!",3431740506),null], null), null));
lt.plugins.parembrace.core.__BEH__slurp_forward_BANG_ = (function __BEH__slurp_forward_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.slurp_forward,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dec-pos-when-last-before-seq","dec-pos-when-last-before-seq",1885413579),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","slurp-forward!","lt.plugins.parembrace.core/slurp-forward!",3362831997),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__slurp_forward_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.slurp-forward!","parembrace.slurp-forward!",4560139525),null], null), null));
lt.plugins.parembrace.core.__BEH__slurp_forward_fully_BANG_ = (function __BEH__slurp_forward_fully_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.slurp_forward_fully,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dec-pos-when-last-before-seq","dec-pos-when-last-before-seq",1885413579),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","slurp-forward-fully!","lt.plugins.parembrace.core/slurp-forward-fully!",2550848730),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__slurp_forward_fully_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.slurp-forward-fully!","parembrace.slurp-forward-fully!",3511290728),null], null), null));
lt.plugins.parembrace.core.__BEH__slurp_backward_BANG_ = (function __BEH__slurp_backward_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.slurp_backward,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dec-pos-when-last-before-seq","dec-pos-when-last-before-seq",1885413579),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","slurp-backward!","lt.plugins.parembrace.core/slurp-backward!",1265358241),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__slurp_backward_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.slurp-backward!","parembrace.slurp-backward!",2831981401),null], null), null));
lt.plugins.parembrace.core.__BEH__slurp_backward_fully_BANG_ = (function __BEH__slurp_backward_fully_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.slurp_backward_fully,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dec-pos-when-last-before-seq","dec-pos-when-last-before-seq",1885413579),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","slurp-backward-fully!","lt.plugins.parembrace.core/slurp-backward-fully!",4207032574),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__slurp_backward_fully_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.slurp-backward-fully!","parembrace.slurp-backward-fully!",1257202364),null], null), null));
lt.plugins.parembrace.core.__BEH__barf_forward_BANG_ = (function __BEH__barf_forward_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.barf_forward,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dec-pos-when-last-before-seq","dec-pos-when-last-before-seq",1885413579),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","barf-forward!","lt.plugins.parembrace.core/barf-forward!",3706726518),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__barf_forward_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.barf-forward!","parembrace.barf-forward!",998313764),null], null), null));
lt.plugins.parembrace.core.__BEH__barf_backward_BANG_ = (function __BEH__barf_backward_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.barf_backward,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dec-pos-when-last-before-seq","dec-pos-when-last-before-seq",1885413579),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","barf-backward!","lt.plugins.parembrace.core/barf-backward!",2898931368),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__barf_backward_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.barf-backward!","parembrace.barf-backward!",4084532506),null], null), null));
lt.plugins.parembrace.core.__BEH__kill_BANG_ = (function __BEH__kill_BANG_(ed,opts){return lt.plugins.parembrace.core.kill_STAR_.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","kill!","lt.plugins.parembrace.core/kill!",3645625353),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__kill_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.kill!","parembrace.kill!",1126744017),null], null), null));
lt.plugins.parembrace.core.__BEH__kill_one_BANG_ = (function __BEH__kill_one_BANG_(ed,opts){return lt.plugins.parembrace.core.kill_one_STAR_.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","kill-one!","lt.plugins.parembrace.core/kill-one!",3746075938),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__kill_one_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.kill-one!","parembrace.kill-one!",2138747096),null], null), null));
lt.plugins.parembrace.core.__BEH__wrap_around_BANG_ = (function __BEH__wrap_around_BANG_(ed,seq_type,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,(function (p1__8450_SHARP_){return rewrite_clj.paredit.wrap_around.call(null,p1__8450_SHARP_,seq_type);
}),opts);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","wrap-around!","lt.plugins.parembrace.core/wrap-around!",962873083),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__wrap_around_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.wrap-around!","parembrace.wrap-around!",4241835399),null], null), null));
lt.plugins.parembrace.core.__BEH__wrap_fully_forward_slurp_BANG_ = (function __BEH__wrap_fully_forward_slurp_BANG_(ed,seq_type,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,(function (p1__8451_SHARP_){return rewrite_clj.paredit.wrap_fully_forward_slurp.call(null,p1__8451_SHARP_,seq_type);
}),opts);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","wrap-fully-forward-slurp!","lt.plugins.parembrace.core/wrap-fully-forward-slurp!",4565419927),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__wrap_fully_forward_slurp_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.wrap-fully-forward-slurp!","parembrace.wrap-fully-forward-slurp!",3259844163),null], null), null));
lt.plugins.parembrace.core.__BEH__split_BANG_ = (function __BEH__split_BANG_(ed,opts){return lt.plugins.parembrace.core.split_STAR_.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","split!","lt.plugins.parembrace.core/split!",4742101989),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__split_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.split!","parembrace.split!",4747434845),null], null), null));
lt.plugins.parembrace.core.__BEH__join_BANG_ = (function __BEH__join_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.join,opts);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","join!","lt.plugins.parembrace.core/join!",3646372821),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__join_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.join!","parembrace.join!",1125996421),null], null), null));
lt.plugins.parembrace.core.__BEH__splice_BANG_ = (function __BEH__splice_BANG_(ed,opts){return lt.plugins.parembrace.core.splice_STAR_.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","splice!","lt.plugins.parembrace.core/splice!",1554676423),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__splice_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.splice!","parembrace.splice!",789221747),null], null), null));
lt.plugins.parembrace.core.__BEH__splice_killing_backward_BANG_ = (function __BEH__splice_killing_backward_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.splice_killing_backward,cljs.core.PersistentArrayMap.EMPTY);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","splice-killing-backward!","lt.plugins.parembrace.core/splice-killing-backward!",3901505384),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__splice_killing_backward_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.splice-killing-backward!","parembrace.splice-killing-backward!",838825690),null], null), null));
lt.plugins.parembrace.core.__BEH__splice_killing_forward_BANG_ = (function __BEH__splice_killing_forward_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.splice_killing_forward,cljs.core.PersistentArrayMap.EMPTY);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","splice-killing-forward!","lt.plugins.parembrace.core/splice-killing-forward!",1041149878),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__splice_killing_forward_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.splice-killing-forward!","parembrace.splice-killing-forward!",755066212),null], null), null));
lt.plugins.parembrace.core.__BEH__raise_BANG_ = (function __BEH__raise_BANG_(ed,opts){return lt.plugins.parembrace.core.paredit_cmd.call(null,ed,rewrite_clj.paredit.raise,cljs.core.PersistentArrayMap.EMPTY);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","raise!","lt.plugins.parembrace.core/raise!",4685590103),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__raise_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.raise!","parembrace.raise!",4704872651),null], null), null));
lt.plugins.parembrace.core.__BEH__move_to_previous_BANG_ = (function __BEH__move_to_previous_BANG_(ed,opts){return lt.plugins.parembrace.core.move_to_previous_STAR_.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","move-to-previous!","lt.plugins.parembrace.core/move-to-previous!",925755480),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__move_to_previous_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.move-to-previous!","parembrace.move-to-previous!",4744806658),null], null), null));
lt.plugins.parembrace.core.__BEH__move_next_BANG_ = (function __BEH__move_next_BANG_(ed){return lt.plugins.parembrace.core.paredit_navigate.call(null,ed,rewrite_clj.zip.next);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","move-next!","lt.plugins.parembrace.core/move-next!",614449690),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__move_next_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.move-next!","parembrace.move-next!",1500947368),null], null), null));
lt.plugins.parembrace.core.__BEH__move_prev_BANG_ = (function __BEH__move_prev_BANG_(ed){return lt.plugins.parembrace.core.paredit_navigate.call(null,ed,rewrite_clj.zip.prev);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","move-prev!","lt.plugins.parembrace.core/move-prev!",612774106),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__move_prev_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.move-prev!","parembrace.move-prev!",1503163496),null], null), null));
lt.plugins.parembrace.core.__BEH__move_down_BANG_ = (function __BEH__move_down_BANG_(ed){return lt.plugins.parembrace.core.paredit_navigate.call(null,ed,rewrite_clj.zip.down);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","move-down!","lt.plugins.parembrace.core/move-down!",524838217),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__move_down_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.move-down!","parembrace.move-down!",1492008921),null], null), null));
lt.plugins.parembrace.core.__BEH__move_up_BANG_ = (function __BEH__move_up_BANG_(ed){return lt.plugins.parembrace.core.paredit_navigate.call(null,ed,rewrite_clj.zip.up);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","move-up!","lt.plugins.parembrace.core/move-up!",3450609538),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__move_up_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.move-up!","parembrace.move-up!",4460224256),null], null), null));
lt.plugins.parembrace.core.__BEH__move_up_pos_right_BANG_ = (function __BEH__move_up_pos_right_BANG_(ed){return lt.plugins.parembrace.core.paredit_navigate.call(null,ed,rewrite_clj.zip.up,new cljs.core.Keyword(null,"dir","dir",1014003711),new cljs.core.Keyword(null,"right","right",1122416014));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","move-up-pos-right!","lt.plugins.parembrace.core/move-up-pos-right!",2249173048),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__move_up_pos_right_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.move-up-pos-right!","parembrace.move-up-pos-right!",4483783082),null], null), null));
lt.plugins.parembrace.core.__BEH__move_right_BANG_ = (function __BEH__move_right_BANG_(ed){return lt.plugins.parembrace.core.paredit_navigate.call(null,ed,rewrite_clj.zip.right);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","move-right!","lt.plugins.parembrace.core/move-right!",4526576011),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__move_right_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.move-right!","parembrace.move-right!",3345034575),null], null), null));
lt.plugins.parembrace.core.__BEH__move_left_BANG_ = (function __BEH__move_left_BANG_(ed){return lt.plugins.parembrace.core.paredit_navigate.call(null,ed,rewrite_clj.zip.left);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","move-left!","lt.plugins.parembrace.core/move-left!",616854670),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__move_left_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.move-left!","parembrace.move-left!",1499083028),null], null), null));
lt.plugins.parembrace.core.__BEH__select_BANG_ = (function __BEH__select_BANG_(ed){return lt.plugins.parembrace.core.paredit_select.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.parembrace.core","select!","lt.plugins.parembrace.core/select!",1232181575),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.parembrace.core.__BEH__select_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parembrace.select!","parembrace.select!",4769149683),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.open-list","parembrace.open-list",953240463),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Open list",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.open-pair!","parembrace.open-pair!",3431740506),new cljs.core.Keyword(null,"list","list",1017226256));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.open-vector","parembrace.open-vector",3127679092),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Open vector",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.open-pair!","parembrace.open-pair!",3431740506),new cljs.core.Keyword(null,"vector","vector",4488484021));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.open-map","parembrace.open-map",4059989359),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Open map",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.open-pair!","parembrace.open-pair!",3431740506),new cljs.core.Keyword(null,"map","map",1014012110));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.open-set","parembrace.open-set",4059995253),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Open set",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.open-pair!","parembrace.open-pair!",3431740506),new cljs.core.Keyword(null,"set","set",1014018004));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.open-fn","parembrace.open-fn",1527806841),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Open anonymous function",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.open-pair!","parembrace.open-pair!",3431740506),new cljs.core.Keyword(null,"fn","fn",1013907514));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.open-doublequote","parembrace.open-doublequote",4478217310),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Open doublequote",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.open-pair!","parembrace.open-pair!",3431740506),new cljs.core.Keyword(null,"doublequote","doublequote",3707793597));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.slurp-forward","parembrace.slurp-forward",1682488256),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Slurp forward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.slurp-forward!","parembrace.slurp-forward!",4560139525),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.slurp-forward-fully","parembrace.slurp-forward-fully",2895580413),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Slurp forward fully",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.slurp-forward-fully!","parembrace.slurp-forward-fully!",3511290728),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.slurp-backward","parembrace.slurp-backward",1903835884),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Slurp backward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.slurp-backward!","parembrace.slurp-backward!",2831981401),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.slurp-backward-fully","parembrace.slurp-backward-fully",2684320553),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Slurp backward fully",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.slurp-backward-fully!","parembrace.slurp-backward-fully!",1257202364),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.barf-forward","parembrace.barf-forward",3922895297),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Barf forward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.barf-forward!","parembrace.barf-forward!",998313764),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.barf-backward","parembrace.barf-backward",2636977419),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Barf backward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.barf-backward!","parembrace.barf-backward!",4084532506),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.kill","parembrace.kill",3511396212),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Kill",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.kill!","parembrace.kill!",1126744017),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.kill-one","parembrace.kill-one",3959683469),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Kill one",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.kill-one!","parembrace.kill-one!",2138747096),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.wrap-around-list","parembrace.wrap-around-list",3747610033),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Wrap around - list",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.wrap-around!","parembrace.wrap-around!",4241835399),new cljs.core.Keyword(null,"list","list",1017226256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-adjust","col-adjust",3375522798),1], null));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.wrap-around-vector","parembrace.wrap-around-vector",4162275862),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Wrap around - vector",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.wrap-around!","parembrace.wrap-around!",4241835399),new cljs.core.Keyword(null,"vector","vector",4488484021),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-adjust","col-adjust",3375522798),1], null));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.wrap-around-map","parembrace.wrap-around-map",4288677645),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Wrap around - map",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.wrap-around!","parembrace.wrap-around!",4241835399),new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-adjust","col-adjust",3375522798),1], null));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.wrap-around-set","parembrace.wrap-around-set",4288683539),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Wrap around - set",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.wrap-around!","parembrace.wrap-around!",4241835399),new cljs.core.Keyword(null,"set","set",1014018004),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-adjust","col-adjust",3375522798),2], null));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.wrap-fully-forward-slurp-list","parembrace.wrap-fully-forward-slurp-list",858865773),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Wrap around slurping forward - list",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.wrap-fully-forward-slurp!","parembrace.wrap-fully-forward-slurp!",3259844163),new cljs.core.Keyword(null,"list","list",1017226256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-adjust","col-adjust",3375522798),1], null));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.wrap-fully-forward-slurp-vector","parembrace.wrap-fully-forward-slurp-vector",2627915218),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Wrap around slurping forward - vector",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.wrap-fully-forward-slurp!","parembrace.wrap-fully-forward-slurp!",3259844163),new cljs.core.Keyword(null,"vector","vector",4488484021),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-adjust","col-adjust",3375522798),1], null));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.wrap-fully-forward-slurp-set","parembrace.wrap-fully-forward-slurp-set",2810024919),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Wrap around slurping forward - set",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.wrap-fully-forward-slurp!","parembrace.wrap-fully-forward-slurp!",3259844163),new cljs.core.Keyword(null,"set","set",1014018004),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-adjust","col-adjust",3375522798),2], null));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.wrap-fully-forward-slurp-map","parembrace.wrap-fully-forward-slurp-map",2810019025),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Wrap around slurping forward - map",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.wrap-fully-forward-slurp!","parembrace.wrap-fully-forward-slurp!",3259844163),new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-adjust","col-adjust",3375522798),1], null));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.split","parembrace.split",1134340712),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Split",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.split!","parembrace.split!",4747434845),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.join","parembrace.join",3511372096),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Join",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.join!","parembrace.join!",1125996421),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.splice","parembrace.splice",4747434386),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Splice",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.splice!","parembrace.splice!",789221747),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.splice-killing-forward","parembrace.splice-killing-forward",3083764609),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Splice - killing forward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.splice-killing-forward!","parembrace.splice-killing-forward!",755066212),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.splice-killing-backward","parembrace.splice-killing-backward",2393729867),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Splice - killing backward",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.splice-killing-backward!","parembrace.splice-killing-backward!",838825690),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.raise","parembrace.raise",1132967738),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Raise",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.raise!","parembrace.raise!",4704872651),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.move-to-previous","parembrace.move-to-previous",4597939235),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Move node to previous",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.move-to-previous!","parembrace.move-to-previous!",4744806658),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.move-next","parembrace.move-next",4770393277),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Move next (depth first)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.move-next!","parembrace.move-next!",1500947368));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.move-prev","parembrace.move-prev",4770464765),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Move previous (reverse depth first)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.move-prev!","parembrace.move-prev!",1503163496));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.move-down","parembrace.move-down",4770104940),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Move down (into sexpr)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.move-down!","parembrace.move-down!",1492008921));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.move-up","parembrace.move-up",4034569829),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Move up (out of sexpr)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.move-up!","parembrace.move-up!",4460224256));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.move-up-pos-right","parembrace.move-up-pos-right",3896782459),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Move up right (out of sexpr and move cursor to the right)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.move-up-pos-right!","parembrace.move-up-pos-right!",4483783082));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.move-right","parembrace.move-right",1504743990),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Move right (right sibling)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.move-right!","parembrace.move-right!",3345034575));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.move-left","parembrace.move-left",4770333137),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Move left (left sibling)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.move-left!","parembrace.move-left!",1499083028));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parembrace.select","parembrace.select",4737271826),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parembrace: Select (expanding)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"parembrace.select!","parembrace.select!",4769149683));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=parembrace_compiled.js.map