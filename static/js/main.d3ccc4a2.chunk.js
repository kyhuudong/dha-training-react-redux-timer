(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(8),r=n.n(o),j=(n(15),n(9)),a=n(2),u=n(3),l=(n(16),n(20)),s=function(t){var e=Math.floor(t/1e3%60),n=Math.floor(t/1e3/60%60),c=Math.floor(t/1e3/60/60);return[d(c.toString(),2),d(n.toString(),2),d(e.toString(),2)].join(":")},d=function(t,e){for(var n=t;n.length<e;)n="0".concat(n);return n},b=n(10),O=n(0),f=function(t){var e=t.children,n=t.onClick,c=t.className,i=Object(b.a)(t,["children","onClick","className"]);return Object(O.jsx)("button",Object(a.a)({children:e,onClick:n,className:"button"+c},i))},p=function(t){var e=t.id,n=t.title,i=t.project,o=t.time,r=t.isRunning,j=t.onEdit,a=t.onRemove,l=t.onRunningChangeStatus,d=Object(c.useState)(r),b=Object(u.a)(d,2),p=b[0],h=b[1];return Object(O.jsxs)("div",{className:"App-component",children:[Object(O.jsx)("p",{children:n}),Object(O.jsx)("p",{children:i}),Object(O.jsx)("p",{children:s(o)}),Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{onClick:function(){j()},children:"Edit"}),Object(O.jsx)(f,{onClick:function(){return a(e)},children:"Remove"})]}),Object(O.jsx)(f,{onClick:function(){l(e),h(!p)},children:p?"START":"STOP"})]})},h=n(6),v=function(t){var e=t.onCancel,n=t.onCreate,i=t.onUpdate,o=t.id,r=t.title,j=t.project,l=Object(c.useState)({title:r||"",project:j||""}),s=Object(u.a)(l,2),d=s[0],b=s[1],p=o?"Update":"Create",v=function(t){var e=t.target.name,n=t.target.value;b(Object(a.a)(Object(a.a)({},d),{},Object(h.a)({},e,n)))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{id:"title",name:"title",value:d.title,onChange:function(t){return v(t)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"project",children:"Project"}),Object(O.jsx)("input",{id:"project",name:"project",value:d.project,onChange:function(t){return v(t)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{onClick:e,children:"Cancel"}),Object(O.jsx)(f,{onClick:o?function(){var t={id:o,title:d.title,project:d.project};i(t)}:function(){var t={id:Date.now(),title:d.title,project:d.project};n(t)},children:p})]})]})},m=function(t){var e=t.id,n=t.title,i=t.project,o=t.time,r=t.isRunning,j=t.onUpdate,a=t.onRemove,l=t.onRunningChangeStatus,s=Object(c.useState)(!1),d=Object(u.a)(s,2),b=d[0],f=d[1],h=function(){f(!1)};return b?Object(O.jsx)(v,{onCancel:h,id:e,title:n,project:i,onUpdate:function(t){j(t),h()}}):Object(O.jsx)(p,{id:e,title:n,project:i,time:o,isRunning:r,onEdit:function(){f(!0)},onRemove:function(t){a(t)},onRunningChangeStatus:function(t){l(t)}})},g=function(t){var e=t.onCreate,n=Object(c.useState)(!1),i=Object(u.a)(n,2),o=i[0],r=i[1],j=function(){r(!1)};return o?Object(O.jsx)(v,{onCancel:j,onCreate:function(t){e(t),j()}}):Object(O.jsx)(f,{onClick:function(){r(!0)},children:"+"})};var x=function(){var t=Object(c.useRef)(),e=Object(c.useState)([]),n=Object(u.a)(e,2),i=n[0],o=n[1],r=function(t){var e=i.map((function(e,n){return e.id===t.id?Object(a.a)(Object(a.a)({},e),{},{title:t.title,project:t.project}):e}));o(e)},s=function(t){var e=i.filter((function(e){return e.id!==t}));o(e)},d=function(t){var e=i.map((function(e){return e.id===t?Object(a.a)(Object(a.a)({},e),{},{isRunning:!e.isRunning}):e}));o(e)};return Object(c.useEffect)((function(){clearTimeout(t.current),t.current=setTimeout((function(){var t=i.map((function(t,e){return t.isRunning?Object(a.a)(Object(a.a)({},t),{},{time:t.time+1e3}):t}));o(t)}),1e3)}),[i]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Timers"}),Object(O.jsx)(g,{onCreate:function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{title:t.title||"Timer",project:t.project||"Project",id:Object(l.a)(),time:0,isRunning:!0}}(t);o([e].concat(Object(j.a)(i)))}}),i.map((function(t,e){return Object(O.jsx)(m,{id:t.id,title:t.title,project:t.project,time:t.time,isEdit:t.isEdit,onUpdate:r,onRemove:s,onRunningChangeStatus:d},t.id)}))]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),C()}},[[18,1,2]]]);
//# sourceMappingURL=main.d3ccc4a2.chunk.js.map