(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),i=n(25),s=n.n(i),o=(n(67),n(68),n(14)),l=n(10),u=n(7),b=n.n(u),j=n(9),d=n(6),h=n(13),p=n.n(h),f=(n(88),n.p+"static/media/logo.8ac53fd7.png"),O=(n(26),n(106)),m=n(107),x=n(108),g=n(109),v=n(110);Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_SERVER;function y(e,t){return p.a.post("/api/login",{email:e,password:t},{"Content-Type":"application/json"}).then((function(e){if(200===e.status)return e.data;throw new Error(e.error)}))}function w(){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=JSON.parse(localStorage.getItem("token")))||""===t){e.next=7;break}return e.next=4,p.a.get("/api/admin",{headers:{Authorization:"Bearer "+t}}).then((function(e,t){return 200===e.status&&e.data})).catch((function(e){return 401===e.status?(console.log("unauthorized"),!1):(console.log(e),!1)}));case 4:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("token")),e.next=3,p.a.get("/api/getUser",{headers:{Authorization:"Bearer "+t}}).then((function(e){return e.data})).catch((function(e){401!==e.status||console.log("unauthorized")}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(localStorage.getItem("token")),e.next=3,p.a.post("/api/changeUsername",{newUsername:t,email:n},{headers:{Authorization:"Bearer "+r}}).then((function(e){return e.data})).catch((function(e){console.log("error du debut"),401!==e.status||console.log("unauthorized")}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,n){return z.apply(this,arguments)}function z(){return(z=Object(j.a)(b.a.mark((function e(t,n,r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.getItem("token")),e.next=3,p.a.post("/api/changePwd",{currentPwd:t,newPwd:n,email:r},{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.data})).catch((function(e){console.log("error du debut"),401!==e.status||console.log("unauthorized")}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("token")),e.next=3,p.a.get("/api/scoreboard",{headers:{Authorization:"Bearer "+t}}).then((function(e){return e.data})).catch((function(e){console.log("error du debut"),401!==e.status||console.log("unauthorized")}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return A.apply(this,arguments)}function A(){return(A=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("token")),e.next=3,p.a.get("/api/challenges",{headers:{Authorization:"Bearer "+t}}).then((function(e){return e.data})).catch((function(e){console.log("error du debut"),401!==e.status||console.log("unauthorized")}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(r=JSON.parse(localStorage.getItem("token")))||""===r){e.next=7;break}return e.next=4,p.a.post("/api/flagCheck",{id:t,flag:n},{headers:{Authorization:"Bearer "+r}}).then((function(e,t){return"Flag Checked!"===e.data})).catch((function(e){return 401===e.status?(console.log("unauthorized"),!1):(console.log(e),!1)}));case 4:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){var e="#777a82",t="#4A29C5",n=Object(a.useState)(0),c=Object(d.a)(n,2),i=c[0],s=c[1],u=Object(a.useState)(!1),h=Object(d.a)(u,2),p=h[0],y=h[1];Object(l.g)();Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[p]);return Object(r.jsxs)("div",{className:"Header",children:[Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("img",{src:f,style:{height:"90px",width:"150px"},className:"photo",alt:"logo"})}),Object(r.jsxs)("div",{className:"Header-Right",children:[p?Object(r.jsx)(o.b,{style:{color:-1===i?t:e},onClick:function(){return s(-1)},to:"/Admin",children:Object(r.jsx)(O.a,{size:32})}):null,Object(r.jsx)(o.b,{style:{color:1===i?t:e},onClick:function(){return s(1)},to:"/Scoreboard",children:Object(r.jsx)(m.a,{size:32})}),Object(r.jsx)(o.b,{style:{color:0===i?t:e},onClick:function(){return s(0)},to:"/",children:Object(r.jsx)(x.a,{size:32})}),Object(r.jsx)(o.b,{style:{color:3===i?t:e},onClick:function(){return s(3)},to:"/Profil",children:Object(r.jsx)(g.a,{size:32})}),Object(r.jsx)(o.b,{to:"/Login",onClick:function(){localStorage.removeItem("token"),window.location.href="https://ctf-algebra.azurewebsites.net/",window.location.reload()},children:Object(r.jsx)(v.a,{size:32})})]})]})}var G=n(30),U=n(31),_=n(39),J=n(37),D=(a.Component,a.Component,n(111));function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Y=a.createElement("g",{transform:"rotate(0 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}))),V=a.createElement("g",{transform:"rotate(30 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}))),W=a.createElement("g",{transform:"rotate(60 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}))),M=a.createElement("g",{transform:"rotate(90 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}))),X=a.createElement("g",{transform:"rotate(120 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}))),q=a.createElement("g",{transform:"rotate(150 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}))),Q=a.createElement("g",{transform:"rotate(180 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}))),Z=a.createElement("g",{transform:"rotate(210 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}))),$=a.createElement("g",{transform:"rotate(240 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}))),ee=a.createElement("g",{transform:"rotate(270 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}))),te=a.createElement("g",{transform:"rotate(300 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}))),ne=a.createElement("g",{transform:"rotate(330 50 50)"},a.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})));function re(e,t){var n=e.title,r=e.titleId,c=H(e,["title","titleId"]);return a.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,Y,V,W,M,X,q,Q,Z,$,ee,te,ne)}var ae=a.forwardRef(re);n.p;function ce(){var e=Object(a.useState)([{name:"",score:0}]),t=Object(d.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(!1)),i=Object(d.a)(c,2),s=i[0],o=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,P();case 3:(t=e.sent)&&Object.keys(t).forEach((function(e){n.push(t[e])})),n.shift(),console.log(n),n.sort((function(e,t){return t.score-e.score})),o(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[n]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{style:{color:"white",paddingBottom:"20px"},children:"Scoreboard"}),s?Object(r.jsx)("div",{id:"loader",children:Object(r.jsx)(ae,{})}):Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(D.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Place"}),Object(r.jsx)("th",{children:"Username"}),Object(r.jsx)("th",{children:"Score"})]})}),Object(r.jsx)("tbody",{children:n.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:(t+1).toString()}),Object(r.jsx)("td",{children:e.username}),Object(r.jsx)("td",{children:e.score})]})}))})]})})]})}n(94);var ie=n(112),se=n(57),oe=n(113);function le(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(),o=Object(d.a)(s,2),l=o[0],u=o[1];function h(){return(h=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"input"+t.target.id,e.next=4,F(t.target.id,l);case 4:!0===(n=e.sent)?console.log(n):console.log("no");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsxs)("div",{id:e.id,className:"Challenge",onClick:function(e){e.preventDefault(),e.target===e.currentTarget&&(e.target.className=c?"Challenge":"ChallengeOpenned",i(!c))},children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsxs)("div",{style:{display:c?"":"none"},children:[Object(r.jsxs)(ie.a,{className:"mb-3",children:[Object(r.jsx)(ie.a.Prepend,{children:Object(r.jsx)(ie.a.Text,{id:"basic-addon1",children:"Flag"})}),Object(r.jsx)(se.a,{id:"input"+e.id,placeholder:"Flag","aria-label":"Flag","aria-describedby":"basic-addon1",value:l,onChange:function(e){return u(e.target.value)}}),Object(r.jsx)(ie.a.Append,{children:Object(r.jsx)(oe.a,{id:e.id,variant:"outline-secondary",onClick:function(e){return h.apply(this,arguments)},children:"OK"})})]}),Object(r.jsx)("a",{href:e.link,children:e.link}),Object(r.jsx)("p",{children:e.desc})]})]})}n(96);function ue(){var e=Object(a.useState)([{title:"",categorie:"",link:""}]),t=Object(d.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(!1)),i=Object(d.a)(c,2),s=i[0],o=i[1],l=Object(a.useState)(0),u=Object(d.a)(l,2);u[0],u[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,L();case 3:(t=e.sent)&&Object.keys(t).forEach((function(e){n.push(t[e])})),n.shift(),o(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[n]),Object(r.jsx)("div",{className:"Challenges",children:s?Object(r.jsx)(ae,{}):function(){var e=[],t=[],a=[],c=[];return n.forEach((function(e){switch(e.categorie){case"Boot2Root":t.push(Object(r.jsx)(le,{id:e.id,title:e.title,link:e.link,desc:e.desc}));break;case"Crypto":a.push(Object(r.jsx)(le,{id:e.id,title:e.title,link:e.link,desc:e.desc}));break;case"Cracking":c.push(Object(r.jsx)(le,{id:e.id,title:e.title,link:e.link,desc:e.desc}))}})),e=(e=(e=(e=(e=(e=e.concat(Object(r.jsx)("h3",{children:"Boot2Root:"}))).concat(t)).concat(Object(r.jsx)("h3",{children:"Crypto:"}))).concat(a)).concat(Object(r.jsx)("h3",{children:"Craking:"}))).concat(c),console.log(e),e}()})}var be=n(118),je=n(116);n(97);function de(){var e=Object(a.useState)({name:"",email:"",admin:!1,activated:!0}),t=Object(d.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(!1)),i=Object(d.a)(c,2),s=i[0],o=i[1],u=Object(a.useState)(),h=Object(d.a)(u,2),p=h[0],f=h[1],O=Object(a.useState)(),m=Object(d.a)(O,2),x=(m[0],m[1]),g=Object(a.useState)(),v=Object(d.a)(g,2),y=v[0],w=v[1],k=Object(a.useState)(),C=Object(d.a)(k,2),N=C[0],z=C[1],P=Object(a.useState)(""),T=Object(d.a)(P,2),L=T[0],A=T[1],F=Object(a.useState)(!1),B=Object(d.a)(F,2),R=B[0],G=B[1],U=(Object(l.g)(),function(){var e=Object(j.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=6;break}return e.next=3,E(p,n.email);case 3:t=e.sent,A(t),G(!0);case 6:if(!y||!N){e.next=13;break}return e.next=10,I(y,N,n.email);case 10:r=e.sent,A(r),G(!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:(t=e.sent)&&(n.name=t.name,n.email=t.email,n.admin=t.admin,n.activated=t.activated,o(!0));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[n]),Object(r.jsxs)("div",{style:{position:"relative",marginTop:"50px"},children:[Object(r.jsx)("div",{id:"loader",style:{display:s?"none":"block"},children:Object(r.jsx)(ae,{})}),Object(r.jsx)(be.a,{className:"alert",variant:"success",show:R,onClose:function(){return G(!1)},dismissible:!0,children:L}),Object(r.jsxs)("div",{id:"content",className:"form",style:{display:s?"block":"none"},children:[Object(r.jsxs)(je.a,{children:[Object(r.jsxs)(je.a.Group,{controlId:"formGroupUsername",children:[Object(r.jsx)(je.a.Label,{children:"Username"}),Object(r.jsx)(je.a.Control,{type:"text",placeholder:"Enter username",onChange:function(e){return f(e.target.value)},defaultValue:n.name})]}),Object(r.jsxs)(je.a.Group,{controlId:"formGroupEmail",children:[Object(r.jsx)(je.a.Label,{children:"Email address"}),Object(r.jsx)(je.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return x(e.target.value)},defaultValue:n.email})]}),Object(r.jsxs)(je.a.Group,{controlId:"formGroupCurrentPassword",children:[Object(r.jsx)(je.a.Label,{children:"Current Password"}),Object(r.jsx)(je.a.Control,{type:"password",placeholder:"Current Password",onChange:function(e){return w(e.target.value)}})]}),Object(r.jsxs)(je.a.Group,{controlId:"formGroupNewPassword",children:[Object(r.jsx)(je.a.Label,{children:"New Password"}),Object(r.jsx)(je.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return z(e.target.value)}})]})]}),Object(r.jsx)(oe.a,{className:"submitButton",variant:"primary",type:"submit",onClick:U,children:" Submit "})]})]})}var he=n(114),pe=n(115),fe=n(60),Oe=n(119),me=n(117);n(98);function xe(){var e=Object(a.useState)([{title:"",categorie:"",link:"",flags:{}}]),t=Object(d.a)(e,2),n=t[0],c=(t[1],Object(a.useState)("challenges")),i=Object(d.a)(c,2),s=i[0],o=i[1],l=Object(a.useState)(!1),u=Object(d.a)(l,2),h=u[0],p=u[1];function f(){var e=[];return n.forEach((function(t){e.push(Object(r.jsx)(he.a.Container,{id:"list-group-tabs-example",defaultActiveKey:"#link1",children:Object(r.jsxs)(pe.a,{children:[Object(r.jsx)(fe.a,{sm:4,children:Object(r.jsxs)(Oe.a,{children:[Object(r.jsx)(Oe.a.Item,{action:!0,href:"#link1",children:"Link 1"}),Object(r.jsx)(Oe.a.Item,{action:!0,href:"#link2",children:"Link 2"})]})}),Object(r.jsx)(fe.a,{sm:8,children:Object(r.jsxs)(he.a.Content,{children:[Object(r.jsx)(he.a.Pane,{eventKey:"#link1",children:"test1"}),Object(r.jsx)(he.a.Pane,{eventKey:"#link2",children:"test2"})]})})]})}))})),e}function O(){return Object(r.jsxs)(me.a,{id:"controlled-tab-example",activeKey:s,onSelect:function(e){return o(e)},children:[Object(r.jsx)(he.a,{eventKey:"challenges",title:"Challenges",children:h?Object(r.jsx)(ae,{}):Object(r.jsx)(f,{})}),Object(r.jsx)(he.a,{eventKey:"users",title:"Users",children:Object(r.jsx)("p",{children:"test2"})})]})}return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,L();case 3:(t=e.sent)&&Object.keys(t).forEach((function(e){n.push(t[e])})),n.shift(),p(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[n]),Object(r.jsx)("div",{children:Object(r.jsx)(O,{})})}n(100);var ge=n.p+"static/media/logo.e42de50c.ico";function ve(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),o=s[0],u=s[1],h=Object(a.useState)(!1),p=Object(d.a)(h,2),f=p[0],O=p[1],m=Object(a.useState)(!1),x=Object(d.a)(m,2),g=x[0],v=x[1],w=Object(a.useState)(""),k=Object(d.a)(w,2),S=k[0],C=k[1],E=Object(l.g)();var N=function(){var e=Object(j.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),t.preventDefault(),e.prev=2,e.next=5,y(n,o);case 5:r=e.sent,v(!1),"Wrong email or password"===r||"Your account is not activated"===r?(O(!0),C(r)):(localStorage.setItem("token",JSON.stringify(r.token)),E.push("/")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0),alert("Error logging in please try again");case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:g?Object(r.jsx)("div",{id:"loader",children:Object(r.jsx)(ae,{})}):Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:{zIndex:"999"},children:Object(r.jsx)(be.a,{className:"alert",variant:"danger",show:f,onClose:function(){return O(!1)},dismissible:!0,children:S})}),Object(r.jsx)("div",{className:"Login",children:Object(r.jsxs)(je.a,{onSubmit:N,children:[Object(r.jsxs)(je.a.Group,{size:"lg",controlId:"email",children:[Object(r.jsx)(je.a.Label,{children:"Email"}),Object(r.jsx)(je.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(r.jsxs)(je.a.Group,{size:"lg",controlId:"password",children:[Object(r.jsx)(je.a.Label,{children:"Password"}),Object(r.jsx)(je.a.Control,{type:"password",value:o,onChange:function(e){return u(e.target.value)}})]}),Object(r.jsx)(oe.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&o.length>0),children:"Login"})]})})]})})}var ye=n(41),we=n(61),ke=function(e){var t=e.component,n=Object(we.a)(e,["component"]),a=function(){if(null!==localStorage.getItem("token")){var e=JSON.parse(localStorage.getItem("token"));return null!==e&&""!==e&&p.a.get("/api/auth",{headers:{Authorization:"Bearer "+e}}).then((function(e,t){return 200===e.status||(localStorage.removeItem("token"),!1)})).catch((function(e){if(401===e.status)return localStorage.removeItem("token"),window.location.href="https://ctf-algebra.azurewebsites.net/",window.location.reload(),console.log("401"),!1}))}return!1}();return Object(r.jsx)(l.b,Object(ye.a)(Object(ye.a)({},n),{},{render:function(e){return a?Object(r.jsx)(t,Object(ye.a)({},e)):Object(r.jsx)(l.a,{to:{pathname:"/Login",state:{from:e.location}}})}}))};function Se(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[n]),Object(r.jsx)("div",{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(R,{}),Object(r.jsx)(l.b,{exact:!0,path:"/",component:ue}),n?Object(r.jsx)(l.b,{exact:!0,path:"/Admin",component:xe}):null,Object(r.jsx)(l.b,{path:"/Challenges",component:ue}),Object(r.jsx)(l.b,{path:"/Scoreboard",component:ce}),Object(r.jsx)(l.b,{path:"/Profil",component:de})]})})}n(101);function Ce(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),o=s[0],l=s[1],u=Object(a.useState)(""),b=Object(d.a)(u,2),j=b[0],h=b[1],f=Object(a.useState)(!1),O=Object(d.a)(f,2),m=O[0],x=O[1],g=Object(a.useState)(!1),v=Object(d.a)(g,2),y=v[0],w=v[1],k=Object(a.useState)(""),S=Object(d.a)(k,2),C=S[0],E=S[1],N=Object(a.useState)(""),I=Object(d.a)(N,2),z=I[0],P=I[1];return Object(r.jsx)("div",{children:m?Object(r.jsx)("div",{id:"loader",children:Object(r.jsx)(ae,{})}):Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:{zIndex:"999"},children:Object(r.jsx)(be.a,{className:"alert",variant:z,show:y,onClose:function(){return w(!1)},dismissible:!0,children:C})}),Object(r.jsx)("div",{className:"Login",children:Object(r.jsxs)(je.a,{onSubmit:function(e){e.preventDefault(),x(!0);var t={name:n,email:o,password:j};p.a.post("/api/register",t).then((function(e){"Username Already Exist!"===e.data?P("warning"):"User was registered successfully! Please check your email"===e.data?P("success"):P("danger"),E(e.data),w(!0)})).catch((function(e){console.error("Error")})),x(!1)},children:[Object(r.jsxs)(je.a.Group,{size:"lg",controlId:"email",children:[Object(r.jsx)(je.a.Label,{children:"Username"}),Object(r.jsx)(je.a.Control,{autoFocus:!0,value:n,onChange:function(e){return c(e.target.value)}})]}),Object(r.jsxs)(je.a.Group,{size:"lg",controlId:"email",children:[Object(r.jsx)(je.a.Label,{children:"Email"}),Object(r.jsx)(je.a.Control,{autoFocus:!0,type:"email",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(r.jsxs)(je.a.Group,{size:"lg",controlId:"password",children:[Object(r.jsx)(je.a.Label,{children:"Password"}),Object(r.jsx)(je.a.Control,{type:"password",value:j,onChange:function(e){return h(e.target.value)}})]}),Object(r.jsx)(oe.a,{block:!0,size:"lg",type:"submit",disabled:!(o.length>0&&j.length>0&&n.length>0),children:"Register"})]})})]})})}n(102);function Ee(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{className:"all",children:[Object(r.jsx)("div",{className:"left",children:Object(r.jsx)("img",{src:ge,style:{height:"300px",width:"360px"},alt:"logo",className:"logo-img"})}),Object(r.jsxs)("div",{className:"right",children:[n?Object(r.jsx)(ve,{}):Object(r.jsx)(Ce,{}),Object(r.jsxs)("p",{style:{cursor:"pointer"},onClick:function(){return c(!n)},children:["  ",n?"You don't have an account ? register":"You already have an account? login"]})]})]})}function Ne(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(j.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("/confirm",{token:e.match.params.token}).then((function(e){i(e.data)})).catch((function(e){401!==e.status||console.log("unauthorized")}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){}}),[]),!0===c?Object(r.jsx)("h1",{children:"Email activated"}):Object(r.jsx)("h1",{children:"Invalid Link"})}function Ie(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(o.a,{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(ke,{exact:!0,path:"/",component:Se}),Object(r.jsx)(l.b,{exact:!0,path:"/Login",component:Ee}),Object(r.jsx)(l.b,{exact:!0,path:"/confirm/:token",component:Ne})]})})})}var ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};n.p,n.p,n.p;document.body.style.backgroundColor="#2D3737",document.body.style.color="#F0FFFF",document.body.style.overflowY="scroll",s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Ie,{})}),document.getElementById("root")),ze()},67:function(e,t,n){},68:function(e,t,n){},88:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.547f92b2.chunk.js.map