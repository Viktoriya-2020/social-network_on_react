(this.webpackJsonpmy_first_super_project=this.webpackJsonpmy_first_super_project||[]).push([[4],{292:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(25),s=t(26),i=t(29),r=t(27),c=t(30),o=t(0),l=t.n(o),m=t(33),u=t(10),d=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,a),Object(s.a)(t,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(m.a,{to:"/login"})}}]),t}(l.a.Component);return Object(u.b)(d)(a)}},293:function(e,a,t){e.exports={gialogs:"Dialogs_gialogs__2fxWO",dialogs_names:"Dialogs_dialogs_names__3yB_R",dialog:"Dialogs_dialog__a2x5w",masseges:"Dialogs_masseges__3556w",massege:"Dialogs_massege__3voaV",active:"Dialogs_active__368Yz",addtext:"Dialogs_addtext__3-f57"}},301:function(e,a,t){"use strict";t.r(a);var n=t(126),s=t(0),i=t.n(s),r=t(293),c=t.n(r),o=t(14),l=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:c.a.dialog+" "+c.a.active},i.a.createElement(o.b,{to:a},e.name))},m=function(e){return i.a.createElement("div",{className:c.a.massege},e.messeges)},u=t(127),d=t(128),g=t(65),_=t(66),f=Object(_.a)(40),b=Object(d.a)({form:"newMessage"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(u.a,{component:g.b,validate:[_.b,f],name:"messageBody",placeholder:"write message..."})),i.a.createElement("div",null,i.a.createElement("button",null,"Add")))})),p=function(e){var a=e.dialogsPage.dialogs.map((function(e){return i.a.createElement(l,{name:e.name,id:e.id})})),t=e.dialogsPage.messeges.map((function(e){return i.a.createElement(m,{messeges:e.messeges,id:e.id})}));return i.a.createElement("div",{className:c.a.gialogs},i.a.createElement("div",{className:c.a.dialogs_names},a),i.a.createElement("div",{className:c.a.masseges},t),i.a.createElement("div",null),i.a.createElement("div",{className:c.a.addtext},i.a.createElement(b,{onSubmit:function(a){e.addMessage(a.messageBody)}})))},v=t(10),E=t(292),h=t(7);a.default=Object(h.d)(E.a,Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(a){e(Object(n.a)(a))}}})))(p)}}]);
//# sourceMappingURL=4.b3fd7907.chunk.js.map