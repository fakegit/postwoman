(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(t,e,o){var content=o(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("77d6318b",content,!0,{sourceMap:!1})},193:function(t,e,o){"use strict";var n={computed:{noFrameColors:function(){return this.$store.state.postwoman.settings.DISABLE_FRAME_COLORS||!1}},props:{label:{type:String,default:"Section"},collapsed:{type:Boolean}},methods:{collapse:function(t){t.target.parentNode.querySelector(".collapsible").classList.toggle("hidden")}}},c=(o(194),o(13)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("fieldset",{class:{"no-colored-frames":t.noFrameColors},attrs:{id:t.label.toLowerCase()}},[o("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[t._v(t._s(t.label)+" ↕")]),t._v(" "),o("div",{staticClass:"collapsible",class:{hidden:t.collapsed}},[t._t("default")],2)])},[],!1,null,null,null);e.a=component.exports},194:function(t,e,o){"use strict";var n=o(192);o.n(n).a},195:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,"fieldset.no-colored-frames{border-color:#afafaf!important}fieldset.no-colored-frames legend{color:var(--ac-color)}",""])},198:function(t,e,o){var content=o(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("21b47cb8",content,!0,{sourceMap:!1})},204:function(t,e,o){"use strict";var n=o(198);o.n(n).a},205:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,"div.log{margin:4px;padding:8px 16px;width:calc(100% - 8px);border-radius:4px;background-color:var(--bg-dark-color);color:var(--fg-color);height:256px;overflow:auto}div.log,div.log span{font-weight:700;font-size:18px;font-family:monospace}div.log span{display:block;white-space:pre-wrap}",""])},216:function(t,e,o){"use strict";o.r(e);o(24),o(19),o(59),o(31),o(58),o(112);var n={components:{"pw-section":o(193).a},data:function(){return{connectionState:!1,url:"wss://echo.websocket.org",socket:null,communication:{log:null,input:""}}},computed:{toggleConnectionVerb:function(){return this.connectionState?"Disconnect":"Connect"},urlValid:function(){return new RegExp("^(wss?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(this.url)}},methods:{toggleConnection:function(){return this.connectionState?this.disconnect():this.connect()},connect:function(){var t=this;this.communication.log=[{payload:"Connecting to ".concat(this.url,"..."),source:"info",color:"lime"}];try{this.socket=new WebSocket(this.url),this.socket.onopen=function(e){t.connectionState=!0,t.communication.log=[{payload:"Connected to ".concat(t.url,"."),source:"info",color:"lime",ts:(new Date).toLocaleTimeString()}]},this.socket.onerror=function(e){t.handleError()},this.socket.onclose=function(e){t.connectionState=!1,t.communication.log.push({payload:"Disconnected from ".concat(t.url,"."),source:"info",color:"red",ts:(new Date).toLocaleTimeString()})},this.socket.onmessage=function(e){t.communication.log.push({payload:e.data,source:"server",ts:(new Date).toLocaleTimeString()})}}catch(t){this.handleError(t)}},disconnect:function(){null!=this.socket&&this.socket.close()},handleError:function(t){this.disconnect(),this.connectionState=!1,this.communication.log.push({payload:"An error has occurred.",source:"info",color:"red",ts:(new Date).toLocaleTimeString()}),null!=t&&this.communication.log.push({payload:t,source:"info",color:"red",ts:(new Date).toLocaleTimeString()})},sendMessage:function(){var t=this.communication.input;this.socket.send(t),this.communication.log.push({payload:t,source:"client",ts:(new Date).toLocaleTimeString()}),this.communication.input=""},collapse:function(t){var e=t.target.parentNode.className;document.getElementsByClassName(e)[0].classList.toggle("hidden")},getSourcePrefix:function(source){var t={info:"\tℹ️ [INFO]:\t",client:"\t👽 [SENT]:\t",server:"\t📥 [RECEIVED]:\t"};return Object.keys(t).includes(source)?t[source]:""}},updated:function(){this.$nextTick(function(){var t=document.getElementById("log");t.scrollBy(0,t.scrollHeight+100)})}},c=(o(204),o(13)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("pw-section",{ref:"request",staticClass:"blue",attrs:{label:"Request"}},[o("ul",[o("li",[o("label",{attrs:{for:"url"}},[t._v("URL")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:{error:!t.urlValid},attrs:{id:"url",type:"url"},domProps:{value:t.url},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.urlValid&&t.toggleConnection()},input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),o("li",[o("label",{staticClass:"hide-on-small-screen",attrs:{for:"action"}},[t._v(" ")]),t._v(" "),o("button",{attrs:{disabled:!t.urlValid,name:"action"},on:{click:t.toggleConnection}},[t._v(t._s(t.toggleConnectionVerb))])])])]),t._v(" "),o("pw-section",{ref:"response",staticClass:"purple",attrs:{label:"Communication",id:"response"}},[o("ul",[o("li",[o("label",{attrs:{for:"log"}},[t._v("Log")]),t._v(" "),o("div",{staticClass:"log",attrs:{id:"log",name:"log"}},[t.communication.log?o("span",t._l(t.communication.log,function(e){return o("span",{style:{color:e.color}},[t._v("@ "+t._s(e.ts)+" "+t._s(t.getSourcePrefix(e.source))+" "+t._s(e.payload))])}),0):o("span",[t._v("(Waiting for connection...)")])])])]),t._v(" "),o("ul",[o("li",[o("label",{attrs:{for:"message"}},[t._v("Message")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.communication.input,expression:"communication.input"}],attrs:{id:"message",name:"message",type:"text",disabled:!t.connectionState},domProps:{value:t.communication.input},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.connectionState&&t.sendMessage()},input:function(e){e.target.composing||t.$set(t.communication,"input",e.target.value)}}})]),t._v(" "),o("li",[o("label",{staticClass:"hide-on-small-screen",attrs:{for:"send"}},[t._v(" ")]),t._v(" "),o("button",{attrs:{name:"send",disabled:!t.connectionState},on:{click:t.sendMessage}},[t._v("Send")])])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);