(this["webpackJsonpdraw-chat"]=this["webpackJsonpdraw-chat"]||[]).push([[0],{101:function(e,a,t){},216:function(e,a,t){},217:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(85),s=t.n(c),r=t(95),i=t(10),l=t(11),d=t(37),h=t(14),u=t(13),b=(t(101),t(86)),v=t(94),j=t(3),p=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).colors=["#d63636","#e68e3c","#e6ce50","#49a059","#5c9ddd","#c52e8b","#633894","#653716","#101113"],n.handleChangeComplete=function(e){n.setState({background:e.hex}),console.log(e.hex),n.props.colorChangeCallback(e.hex)},n}return Object(l.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{width:"80%",onChangeComplete:this.handleChangeComplete,colors:this.colors})})}}]),t}(o.a.Component),C=t(223),f=t(219),m=t(20),g=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).forwardDrawMode=function(){n.props.canvasToolCallback(!0)},n.forwardEraseMode=function(){n.props.canvasToolCallback(!1)},n}return Object(l.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{id:"canvas-controls",children:[Object(j.jsxs)(C.a,{id:"clear-button",className:"left-button",onClick:this.props.clearCanvasCallback,children:[Object(j.jsx)(m.a,{})," Clear"]}),Object(j.jsxs)(C.a,{id:"undo-button",className:"left-button",onClick:this.props.undoCanvasCallback,children:[Object(j.jsx)(m.e,{})," Undo"]}),Object(j.jsxs)(C.a,{id:"redo-button",className:"left-button",onClick:this.props.redoCanvasCallback,children:[Object(j.jsx)(m.d,{})," Redo"]}),Object(j.jsxs)(f.a,{id:"tool-section",className:"left-button",children:[Object(j.jsx)(C.a,{className:"button-spaced",onClick:this.forwardDrawMode,children:Object(j.jsx)(m.b,{})}),Object(j.jsx)(C.a,{className:"button-spaced",onClick:this.forwardEraseMode,children:Object(j.jsx)(m.a,{})})]}),Object(j.jsxs)(C.a,{id:"submit-button",className:"left-button",onClick:this.props.submitCanvasCallback,children:[Object(j.jsx)(m.c,{})," Done"]})]})}}]),t}(o.a.Component),O=t(220),x=t(221),k=t(222),w=t(93),_={current_time:30,redirect:!1},y=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).onTimerComplete=function(){console.log("Timer completed"),n.props.submitCanvasCallback(),window.location.href="https://draw-chat-csci3308.herokuapp.com/after/?game_code=" + new URLSearchParams(window.location.search).get("game_code") + "&user_id=" + new URLSearchParams(window.location.search).get("user_id")},n.state=_,n}return Object(l.a)(t,[{key:"render",value:function(){return Object(j.jsx)(w.CountdownCircleTimer,{onComplete:this.onTimerComplete,isPlaying:!0,duration:this.props.total_time,initialRemainingTime:this.state.current_time,colors:"#A30000",size:50})}}]),t}(o.a.Component),R={color:"black",canvasColor:"white",brushWidth:4,chatMessages:[],game_code:new URLSearchParams(window.location.search).get("game_code")||"000000",current_word:new URLSearchParams(window.location.search).get("current_word")||"*pst* set word in the search params",total_time:30,export_duration:1e3},S=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).canvasRef=void 0,n.chatboxRef=void 0,n.handleColorChange=function(e){console.log("new brush color: "+e),n.setState({color:e})},n.handleClearCanvas=function(){var e;null===(e=n.canvasRef.current)||void 0===e||e.clearCanvas()},n.handleUndoCanvas=function(){var e;null===(e=n.canvasRef.current)||void 0===e||e.undoLast()},n.handleRedoCanvas=function(){var e;null===(e=n.canvasRef.current)||void 0===e||e.redoLast()},n.handleToolChange=function(e){var a;null===(a=n.canvasRef.current)||void 0===a||a.changeTool(e)},n.handleSendMessage=function(e){n.setState({chatMessages:[].concat(Object(r.a)(n.state.chatMessages),[e])})},n.handleSubmitCanvas=function(){var e;console.log("handleSubmitCanvas"),null===(e=n.canvasRef.current)||void 0===e||e.exportCanvas()},n.state=R,n.handleColorChange=n.handleColorChange.bind(Object(d.a)(n)),console.log("game_code = "+n.state.game_code),n.canvasRef=o.a.createRef(),n.chatboxRef=o.a.createRef(),n}return Object(l.a)(t,[{key:"render",value:function(){return Object(j.jsxs)(O.a,{fluid:!0,children:[Object(j.jsxs)(x.a,{className:"upper-row",children:[Object(j.jsxs)(k.a,{lg:2,children:["The current word is: ",this.state.current_word," !"]}),Object(j.jsx)(k.a,{id:"upper-center-content",xs:12,lg:7,children:"Time to Draw :)"}),Object(j.jsxs)(k.a,{lg:1,children:["Exporting every ",this.state.export_duration," ms."]}),Object(j.jsx)(k.a,{lg:1,children:this.state.game_code}),Object(j.jsx)(k.a,{lg:1,children:Object(j.jsx)(y,{total_time:this.state.total_time,submitCanvasCallback:this.handleSubmitCanvas})})]}),Object(j.jsxs)(x.a,{children:[Object(j.jsxs)(k.a,{id:"left-content",lg:1,children:[Object(j.jsx)("div",{id:"color-picker",className:"color-picker",children:Object(j.jsx)(p,{colorChangeCallback:this.handleColorChange})}),Object(j.jsx)("div",{children:Object(j.jsx)(g,{clearCanvasCallback:this.handleClearCanvas,undoCanvasCallback:this.handleUndoCanvas,redoCanvasCallback:this.handleRedoCanvas,canvasToolCallback:this.handleToolChange,submitCanvasCallback:this.handleSubmitCanvas})})]}),Object(j.jsx)(k.a,{id:"canvas-content",children:Object(j.jsx)(b.a,{ref:this.canvasRef,width:this.props.width,height:this.props.height,color:this.state.color,canvasColor:this.state.canvasColor,brushWidth:this.state.brushWidth,game_code:this.state.game_code,export_duration:this.state.export_duration})})]})]})}}]),t}(o.a.Component);t(215),t(216);s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(S,{width:"100%",height:"600px"})}),document.getElementById("root"))},86:function(e,a,t){"use strict";(function(e){var n=t(10),o=t(11),c=t(14),s=t(13),r=t(0),i=t.n(r),l=t(87),d=t(3),h={border:"0.0625rem solid #9c9c9c",borderRadius:"0.25rem"},u=function(a){Object(c.a)(r,a);var t=Object(s.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).canvas=void 0,a.canvas=i.a.createRef(),a.scheduledExport(),a}return Object(o.a)(r,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"scheduledExport",value:function(){var e=this;setInterval((function(){e.exportCanvas()}),this.props.export_duration)}},{key:"exportCanvas",value:function(){var a,t=this;null===(a=this.canvas.current)||void 0===a||a.exportSvg().then((function(a){console.log("Sending post. game_code = "+t.props.game_code),fetch("/draw/update_image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({game_code:t.props.game_code,svg:e.from(a,"binary").toString("base64")})}).then((function(e){console.log("POSTed svg!")})).catch((function(e){console.log("Failed to POST svg. Error: "+JSON.stringify(e))}))})).catch((function(e){console.log("Error occured in internal image export. Error: "+JSON.stringify(e))}))}},{key:"clearCanvas",value:function(){var e;null===(e=this.canvas.current)||void 0===e||e.clearCanvas()}},{key:"undoLast",value:function(){var e;null===(e=this.canvas.current)||void 0===e||e.undo()}},{key:"redoLast",value:function(){var e;null===(e=this.canvas.current)||void 0===e||e.redo()}},{key:"changeTool",value:function(e){var a;null===(a=this.canvas.current)||void 0===a||a.eraseMode(!e)}},{key:"render",value:function(){return Object(d.jsx)(l.a,{ref:this.canvas,style:h,width:this.props.width,height:this.props.height,strokeWidth:this.props.brushWidth,strokeColor:this.props.color,canvasColor:this.props.canvasColor})}}]),r}(i.a.Component);a.a=u}).call(this,t(102).Buffer)}},[[217,1,2]]]);
//# sourceMappingURL=main.87c95c6a.chunk.js.map