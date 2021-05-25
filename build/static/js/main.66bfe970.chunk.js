(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[5],{16:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return b}));var c=n(4),a=Object(c.b)("tellContacts/getAllContacts"),r=Object(c.b)("tellContacts/addContacts"),i=Object(c.b)("tellContacts/deleteContacts"),s=Object(c.b)("tellContacts/filterContacts"),o=Object(c.b)("tellContacts/setContactsLoading"),u=Object(c.b)("tellContacts/setError"),b=Object(c.b)("tellContacts/resetError")},48:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var c,a,r,i,s,o,u,b=n(0),l=n(24),j=n.n(l),O=(n(48),n(12)),d=n(30),f=n(31),h=f.a.header(c||(c=Object(d.a)(["\nheight: 60px;\nborder-bottom: solid 1px black;\nbackground-color: #e7f70c;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\npadding: 0 20px;\n\n\n\n\n\n\n"]))),m=n(14),p=n(6),x=function(t){return t.auth.token.idToken},g=function(t){return t.auth.token.email},v=[{name:"Home",path:"/",exact:!0,component:Object(b.lazy)((function(){return n.e(8).then(n.bind(null,257))})),isPrivate:!1,isRestricted:!1},{name:"Contacts",path:"/contacts",exact:!0,component:Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,259))})),isPrivate:!0,isRestricted:!1},{name:"Registration",path:"/registration",exact:!0,component:Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,258))})),isPrivate:!1,isRestricted:!0},{name:"Login",path:"/login",exact:!0,component:Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,131))})),isPrivate:!1,isRestricted:!0}],y=n(7),k=f.a.nav(a||(a=Object(d.a)(["\n.list{\nlist-style: none;\ndisplay: flex;\nalign-items: center;\nmargin-right:- 30px;\n}\n\n.listItem{\nmargin-right: 30px;\n}\n\n.link{\n    text-decoration: none;\n    text-transform: uppercase;\n    color: #080808;\n\n}\n.activeLink{\n  color: blue;  \n}\n.userInfo{\ndisplay: flex;\n}\n\n.userItem{\n  display: flex;\n  margin-right: 15px;\n  justify-content: center;\nalign-items: center;\n\n}\n\n.userBtn{\n display: inline-flex;\n  color: #fff;\n  background-color: #3f51b5;\n  padding: 2px 2px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.nav{\n  display: flex;\njustify-content: center;\nalign-items: center;\n}\n\n"]))),C=n(1),N=function(){var t=Object(m.c)(g),e=Object(m.c)(x),n=Object(m.b)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(k,{children:Object(C.jsxs)("div",{className:"userInfo",children:[Object(C.jsx)("p",{className:"userItem",children:t}),e&&Object(C.jsx)("button",{className:"userBtn",type:"button",onClick:function(){return n(Object(y.a)())},children:"LogOut"})]})})})},P=function(t){var e=t.item,n=t.location,c=t.isAuth;return Object(C.jsxs)(C.Fragment,{children:[!e.isPrivate&&!e.isRestricted&&Object(C.jsx)("li",{className:"listItem",children:Object(C.jsx)(O.c,{to:{pathname:e.path,state:{from:n.pathname}},className:"link",activeClassName:"activeLink",exact:e.exact,children:e.name})}),c&&e.isPrivate&&!e.isRestricted&&Object(C.jsx)("li",{className:"listItem",children:Object(C.jsx)(O.c,{to:{pathname:e.path,state:{from:n.pathname}},className:"link",activeClassName:"activeLink",exact:e.exact,children:e.name})}),!c&&!e.isPrivate&&e.isRestricted&&Object(C.jsx)("li",{className:"listItem",children:Object(C.jsx)(O.c,{to:{pathname:e.path,state:{from:n.pathname}},className:"link",activeClassName:"activeLink",exact:e.exact,children:e.name})})]})},R=function(){var t=Object(m.c)(x),e=Object(p.g)();return Object(C.jsx)(k,{children:Object(C.jsxs)("nav",{className:"nav",children:[Object(C.jsx)("ul",{className:"list",children:v.map((function(n){return Object(C.jsx)(P,{item:n,location:e,isAuth:t},n.path)}))}),t&&Object(C.jsx)(N,{})]})})},I=function(){return Object(C.jsxs)(h,{children:[Object(C.jsx)(O.b,{to:"/",children:"PHONE_BOOK"}),Object(C.jsx)(R,{})]})},L=n(21),A=function(t){var e=t.path,n=t.exact,c=t.component;return t.isAuth?Object(C.jsx)(p.b,{path:e,exact:n,component:c}):Object(C.jsx)(p.a,{to:"/login"})},E=function(t){var e=t.path,n=t.exact,c=t.component,a=t.isAuth,r=t.isRestricted;return a&&r?Object(C.jsx)(p.a,{to:"/contacts"}):Object(C.jsx)(p.b,{path:e,exact:n,component:c})},w=function(){var t=Object(m.c)(x);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(b.Suspense,{fallback:Object(C.jsx)("h2",{children:"LOADING...."}),children:Object(C.jsx)(p.d,{children:v.map((function(e){return e.isPrivate?Object(b.createElement)(A,Object(L.a)(Object(L.a)({},e),{},{key:e.path,isAuth:t})):Object(b.createElement)(E,Object(L.a)(Object(L.a)({},e),{},{key:e.path,isAuth:t}))}))})})})},z=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(I,{}),Object(C.jsx)(w,{})]})},B=n(22),F=n(4),S=n(9),q=n(20),H=n(2),J=n(19),D=n(29),G=n(5),K=Object(F.c)({},(r={},Object(G.a)(r,y.g,(function(t,e){return e.payload})),Object(G.a)(r,y.d,(function(t,e){return e.payload})),Object(G.a)(r,y.a,(function(){return{}})),r)),T=Object(F.c)(!1,(i={},Object(G.a)(i,y.f,(function(t){return!t})),Object(G.a)(i,y.g,(function(t){return!t})),Object(G.a)(i,y.e,(function(t){return!t})),Object(G.a)(i,y.c,(function(t){return!t})),Object(G.a)(i,y.d,(function(t){return!t})),Object(G.a)(i,y.b,(function(t){return!t})),Object(G.a)(i,y.a,(function(){return!1})),i)),_=Object(F.c)("",(s={},Object(G.a)(s,y.e,(function(t,e){return e.payload})),Object(G.a)(s,y.b,(function(t,e){return e.payload})),Object(G.a)(s,y.a,(function(){return""})),s)),M=Object(S.b)({token:K,isLoading:T,error:_}),Q=n(16),U=Object(F.c)([],(o={},Object(G.a)(o,Q.d,(function(t,e){return e.payload})),Object(G.a)(o,Q.a,(function(t,e){var n=e.payload;return[].concat(Object(B.a)(t),[n])})),Object(G.a)(o,Q.b,(function(t,e){var n=e.payload;return Object(B.a)(t.filter((function(t){return t.id!==n})))})),o)),V=Object(F.c)("",Object(G.a)({},Q.c,(function(t,e){return e.payload}))),W=Object(F.c)(!1,Object(G.a)({},Q.f,(function(t){return!t}))),X=Object(F.c)("",(u={},Object(G.a)(u,Q.g,(function(t,e){return e.payload})),Object(G.a)(u,Q.e,(function(){return""})),u)),Y=Object(S.b)({items:U,isContactLoding:W,error:X,filter:V}),Z=n(41),$=n.n(Z),tt=Object(B.a)(Object(F.d)({serializableCheck:{ignoredActions:[q.a,q.e,q.b,q.c,q.d,H.g]}})),et={key:"auth",storage:$.a,whitelist:["token"]},nt=Object(S.b)({contacts:Y,auth:Object(J.a)(et,M)}),ct=Object(F.a)({reducer:nt,middleware:tt});Object(D.a)(ct);var at=ct;j.a.render(Object(C.jsx)(m.a,{store:at,children:Object(C.jsx)(O.a,{children:Object(C.jsx)(z,{})})}),document.getElementById("root"))},7:function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return b}));var c=n(4),a=Object(c.b)("auth/registerRequest"),r=Object(c.b)("auth/registerSuccess"),i=Object(c.b)("auth/registerError"),s=Object(c.b)("auth/loginRequest"),o=Object(c.b)("auth/loginSuccess"),u=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logOut")}},[[56,6,7]]]);
//# sourceMappingURL=main.66bfe970.chunk.js.map