(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={NavBar_wrapper:"NavBar_NavBar_wrapper__2BiUP",NavBar:"NavBar_NavBar__3J-Lu",activeLink:"NavBar_activeLink__HVVuJ",NavBar_active:"NavBar_NavBar_active__2Alk2",Btn_burger:"NavBar_Btn_burger__23Xky",Btn_burger_active:"NavBar_Btn_burger_active__t0bhz"}},function(e,a,t){e.exports={message_wrapper:"Message_message_wrapper__1CRaQ",message_inner:"Message_message_inner__2RO9Y",message_ava:"Message_message_ava__5qFqK",message_cont:"Message_message_cont__25EwY",message_name:"Message_message_name__21kw8",message_text:"Message_message_text__h7QY0",message_date:"Message_message_date__bJNP0"}},,function(e,a,t){e.exports={editable:"EditableSpan_editable__1yf-g",editable_span:"EditableSpan_editable_span__IT8SM"}},,,,,function(e,a,t){e.exports={myAffairs:"HomeWork_2_myAffairs__2MMvb",list_btn:"HomeWork_2_list_btn__16ytJ",filter_btn_inner:"HomeWork_2_filter_btn_inner__2lDOJ"}},function(e,a,t){e.exports={btn:"MyBtn_btn__2CDxd",redBtn:"MyBtn_redBtn__3Bwyr"}},function(e,a,t){e.exports={inputBase:"MyInput_inputBase__1kZ2b",red:"MyInput_red__3dwtm"}},,,,,,,function(e,a,t){e.exports={work3:"HomeWork_3_work3__1qWaR"}},function(e,a,t){e.exports={header:"Header_header__39DTi"}},,function(e,a,t){e.exports={MySelect:"MySelect_MySelect__1SCKD"}},function(e,a,t){e.exports={junior_inner:"Junior_junior_inner__G7vBN"}},,,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),i=(t(36),t(37),t(3)),s=t(15),o=t.n(s),u=t(16),m=t.n(u);function _(e){return r.a.createElement("div",null,r.a.createElement("button",{className:e.red?"".concat(m.a.redBtn," ").concat(m.a.btn):m.a.btn,onClick:e.onClick,disabled:e.disabled}," ",e.name))}function v(e){return r.a.createElement("div",{className:o.a.myAffairs},r.a.createElement("h2",null,e.title),r.a.createElement("ul",null,e.lessons.map((function(a){return r.a.createElement("li",{key:a.id},r.a.createElement("span",null,a.n," -  "),r.a.createElement("span",null,"\u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u0438: "),r.a.createElement("span",null,a.p," "),r.a.createElement("div",{className:o.a.list_btn},r.a.createElement(_,{onClick:function(){return e.deleteLesson(a.id)},name:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c",type:"button"})))}))),r.a.createElement("div",{className:o.a.filter_btn_inner},r.a.createElement(_,{onClick:function(){return e.changeFilter("\u0412\u0441\u0435")},name:"\u0412\u0441\u0435"}),r.a.createElement(_,{onClick:function(){return e.changeFilter("\u0412\u044b\u0441\u043e\u043a\u0430\u044f")},name:"\u0411\u043e\u043b\u0435\u0435 \u0432\u0430\u0436\u043d\u044b\u0435"}),r.a.createElement(_,{onClick:function(){return e.changeFilter("\u0421\u0440\u0435\u0434\u043d\u044f\u044f")},name:"\u0432\u0430\u0436\u043d\u044b\u0435"}),r.a.createElement(_,{onClick:function(){return e.changeFilter("\u041d\u0438\u0437\u043a\u0430\u044f")},name:"\u041c\u0435\u043d\u0435\u0435 \u0432\u0430\u0436\u043d\u044b\u0435"})))}var d=t(29),p=t(44),f=t(24),E=t.n(f),b=t(17),g=t.n(b);function N(e){return r.a.createElement("div",null,r.a.createElement("input",{onBlur:e.onBlur,type:e.type,value:e.value,onChange:function(a){return e.onChange(a.currentTarget.value)},onKeyPress:function(a){e.onKeyPress&&13===a.charCode&&e.onKeyPress()},className:e.error?"".concat(g.a.inputBase).concat(g.a.red):g.a.inputBase,placeholder:e.placeholder}))}function h(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)([]),o=Object(i.a)(s,2),u=o[0],m=o[1],v=function(){""!==l?(f(l),alert("\u041f\u0440\u0438\u0432\u0435\u0442 ".concat(l,"!  \u0422\u044b ").concat(u.length+1," \u0432 \u0441\u043f\u0438\u0441\u043a\u0435")),c("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f.")},f=function(e){var a={id:Object(p.a)(),name:e};m([a].concat(Object(d.a)(u)))};return r.a.createElement("div",{className:E.a.work3},r.a.createElement("h3",null,"HomeWork_3"),r.a.createElement(N,{value:l,onChange:function(e){c(e)},onKeyPress:function(){v()},type:"text",placeholder:"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430"}),r.a.createElement(_,{onClick:v,name:"press",disabled:!1,type:"button"}),r.a.createElement("div",null," ",u.length," "))}var B=t(8),k=t.n(B);function y(e){var a=(new Date).getHours(),t=(new Date).getMinutes();return r.a.createElement("div",{className:k.a.message_wrapper},r.a.createElement("div",{className:k.a.message_inner},r.a.createElement("div",null,r.a.createElement("img",{className:k.a.message_ava,src:e.src,alt:"#"})),r.a.createElement("div",{className:k.a.message_cont},r.a.createElement("span",{className:k.a.message_name},e.name," "),r.a.createElement("div",{className:k.a.message_text},e.text),r.a.createElement("span",{className:k.a.message_date}," ",t<10?a+".0"+t:a+"."+t))))}var O=t(10),j=t.n(O);function C(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),u=o[0],m=o[1];return r.a.createElement("div",{className:j.a.editable},l?r.a.createElement(N,{autoFocus:!0,type:"text",value:u,onChange:function(e){m(e)},onKeyPress:function(){m(""),c(!1)},onBlur:function(){c(!1)}}):r.a.createElement("span",{className:j.a.editable_span,onClick:function(){c(!0)}},e.text))}function x(){var e=Object(n.useState)([{id:1,n:"\u0420\u0435\u0430\u043a\u0442",p:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f"},{id:2,n:"\u0420\u0430\u0431\u043e\u0442\u0430",p:"\u041d\u0438\u0437\u043a\u0430\u044f"},{id:3,n:"\u0421\u043f\u043e\u0440\u0442",p:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f"},{id:4,n:"\u0421\u0435\u043c\u044c\u044f",p:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f"}]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("\u0412\u0441\u0435"),s=Object(i.a)(c,2),o=s[0],u=s[1],m=t;return"\u0412\u044b\u0441\u043e\u043a\u0430\u044f"===o&&(m=t.filter((function(e){return"\u0412\u044b\u0441\u043e\u043a\u0430\u044f"===e.p}))),"\u0421\u0440\u0435\u0434\u043d\u044f\u044f"===o&&(m=t.filter((function(e){return"\u0421\u0440\u0435\u0434\u043d\u044f\u044f"===e.p}))),"\u041d\u0438\u0437\u043a\u0430\u044f"===o&&(m=t.filter((function(e){return"\u041d\u0438\u0437\u043a\u0430\u044f"===e.p}))),r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(y,{src:"https://avatars.mds.yandex.net/get-pdb/2301590/a92c498e-7910-4b77-b246-2afa0e5943fd/s375",name:"Ivan",text:" Hello World! Hello World! Hello World! Hello World!  "}),r.a.createElement(v,{title:"HomeWork_2",lessons:m,changeFilter:function(e){u(e)},deleteLesson:function(e){var a=t.filter((function(a){return a.id!==e}));l(a)}}),r.a.createElement(h,null),r.a.createElement(C,{text:"\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430"})))}var w=t(11),S=t(1),M=t(25),J=t.n(M);function D(){return r.a.createElement("div",{className:J.a.header},r.a.createElement("span",null," Home Work"))}var H=t(7),W=t.n(H);function P(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:W.a.NavBar_wrapper},r.a.createElement("div",{className:t?"".concat(W.a.Btn_burger," ").concat(W.a.Btn_burger_active):W.a.Btn_burger,onClick:function(){l(!t)}},r.a.createElement("span",null)),r.a.createElement("nav",{className:t?"".concat(W.a.NavBar," ").concat(W.a.NavBar_active):W.a.NavBar},r.a.createElement("div",null,r.a.createElement(w.b,{to:"/PreJunior",activeClassName:W.a.activeLink},"PreJunior")),r.a.createElement("div",null,r.a.createElement(w.b,{to:"/Junior",activeClassName:W.a.activeLink},"Junior")),r.a.createElement("div",null,r.a.createElement(w.b,{to:"/OldJunior",activeClassName:W.a.activeLink},"OldJunior"))))}function I(){return r.a.createElement("div",null,"\u041f\u043e\u043b\u0443\u0447\u0448\u0435 ....\u043d\u043e - \u043a\u043e\u0434 ")}function A(e){var a=e.value,t=e.text,n=e.onChange,l=e.editMode,c=e.visibilityInput,i=e.pressEnter,s=e.saveData,o=e.RestoreDAta;return r.a.createElement("div",{className:j.a.editable},!l&&r.a.createElement("span",{className:j.a.editable_span,onClick:c}," ",t),l&&r.a.createElement("span",null,r.a.createElement(N,{autoFocus:!0,type:"text",value:a,onChange:n,onKeyPress:i}),r.a.createElement(_,{name:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:s}),r.a.createElement(_,{name:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",onClick:o})))}var F=t(27),K=t.n(F);function L(e){return r.a.createElement("select",{value:e.value,onChange:function(a){e.onChange(a.currentTarget.value)},className:K.a.MySelect},e.generalData.map((function(e){return r.a.createElement("option",{key:e.id}," ",e.value)})))}function R(e){return r.a.createElement("div",null,r.a.createElement("b",null,"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u0432\u0430\u0441 \u043f\u0443\u043d\u043a\u0442: "),e.generalData.slice(1).map((function(a){return r.a.createElement("p",null,r.a.createElement("input",{type:"radio",key:a.id,name:e.name,value:a.value})," ",a.value)})))}var T=t(28),q=t.n(T);function Y(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),o=s[0],u=s[1],m=function(){""===t?alert("Incorrect data!"):(l(""),alert("Data sent successfully!"),function(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}("test",{x:t}))};var _=[{id:Object(p.a)(),value:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u043f\u0443\u043d\u043a\u0442: "},{id:Object(p.a)(),value:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u044a\u044e\u0442\u0435\u0440\u044b"},{id:Object(p.a)(),value:"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438"},{id:Object(p.a)(),value:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u044b"},{id:Object(p.a)(),value:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435 \u0434\u043b\u044f \u041f\u041a "},{id:Object(p.a)(),value:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435 \u0434\u043b\u044f \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u043e\u0432"},{id:Object(p.a)(),value:"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b"}],v=Object(n.useState)(""),d=Object(i.a)(v,2),f=d[0],E=d[1],b=Object(n.useState)(""),g=Object(i.a)(b,2),N=g[0],h=g[1];return r.a.createElement("div",null,r.a.createElement(A,{value:t,text:"Press for open input...",onChange:function(e){return l(e)},editMode:o,visibilityInput:function(){return u(!0)},pressEnter:function(){return m()},saveData:m,RestoreDAta:function(){!function(e,a){var t=localStorage.getItem(e);if(null===t)return alert(a.x),a;a=JSON.parse(t),l(a.x)}("test",{x:"\u0420\u0430\u043d\u0435\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442...."})}}),r.a.createElement("div",{className:q.a.junior_inner},r.a.createElement(L,{value:f,onChange:function(e){_.find((function(a){a.value===e&&E(a.value)}))},generalData:_}),r.a.createElement(R,{generalData:_,name:"products",onChange:function(e){_.find((function(a){a.value===e&&h(a.value)}))},value:N})))}var Q=function(){return r.a.createElement(w.a,null,r.a.createElement("div",{className:"App_wrapper"},r.a.createElement(D,null),r.a.createElement(P,null),r.a.createElement("div",{className:"App_wrapper__content"},r.a.createElement(S.a,{render:function(){return r.a.createElement(x,null)},path:"/PreJunior"}),r.a.createElement(S.a,{render:function(){return r.a.createElement(Y,null)},path:"/Junior"}),r.a.createElement(S.a,{render:function(){return r.a.createElement(I,null)},path:"/OldJunior"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.5f0461c5.chunk.js.map