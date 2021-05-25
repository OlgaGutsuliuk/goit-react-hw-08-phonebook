(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[4,3],{131:function(e,t,s){"use strict";s.r(t),s.d(t,"TextInput",(function(){return j}));var a=s(21),c=s(70),n=(s(0),s(12)),r=s(93),l=s(14),i=s(94),o=s(132),b=s.n(o),d=s(78),u=s(1),m=i.a().shape({email:i.b().email("Email must be @email!").required("Field is Required!"),password:i.b().required("Field is Required")}),j=function(e){var t=Object(r.c)(e),s=Object(c.a)(t,2),n=s[0],l=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(a.a)(Object(a.a)({className:b()("w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",{"border-red-500":l.error&&l.touched})},n),e)),l.touched&&l.error?Object(u.jsx)("p",{className:"text-xs italic text-red-500",children:l.error}):null]})};t.default=function(){var e=Object(l.b)();return Object(u.jsx)("div",{className:"container mx-auto",children:Object(u.jsx)("div",{className:"flex justify-center px-6 my-12",children:Object(u.jsxs)("div",{className:"w-full xl:w-3/4 lg:w-11/12 flex",children:[Object(u.jsx)("div",{className:"w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg",style:{backgroundImage:'url("https://source.unsplash.com/K4mSJ7kc0As/600x800")'}}),Object(u.jsxs)("div",{className:"w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none",children:[Object(u.jsx)("h3",{className:"pt-4 text-2xl text-center",children:"Welcome Back!"}),Object(u.jsx)(r.b,{initialValues:{email:"",password:""},validationSchema:m,onSubmit:function(t){return e(Object(d.a)(t))},children:Object(u.jsxs)(r.a,{className:"px-8 pt-6 pb-8 mb-4 bg-white rounded",children:[Object(u.jsxs)("div",{className:"mb-4",children:[Object(u.jsx)("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"username",children:"Username"}),Object(u.jsx)(j,{name:"email",id:"username",type:"text",placeholder:"Username"})]}),Object(u.jsxs)("div",{className:"mb-4",children:[Object(u.jsx)("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"password",children:"Password"}),Object(u.jsx)(j,{name:"password",id:"password",type:"password",placeholder:"******************"})]}),Object(u.jsx)("div",{className:"mb-6 text-center",children:Object(u.jsx)("button",{className:"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline",type:"submit",children:"Sign In"})}),Object(u.jsx)("hr",{className:"mb-6 border-t"}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)(n.b,{className:"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",to:"/register",children:"Create an Account!"})})]})})]})]})})})}},258:function(e,t,s){"use strict";s.r(t);s(0);var a=s(12),c=s(93),n=s(94),r=s(131),l=s(14),i=s(78),o=s(1),b=n.a().shape({email:n.b().email().required(),password:n.b().required().matches(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443, \u0431\u0443\u043a\u0432\u044b \u0432 \u043d\u0438\u0436\u043d\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435, 1 \u0447\u0438\u0441\u043b\u043e \u0438 1 \u0441\u043f\u0435\u0446\u0441\u0438\u043c\u0432\u043e\u043b!")});t.default=function(){var e=Object(l.b)();return Object(o.jsx)("div",{className:"container mx-auto",children:Object(o.jsx)("div",{className:"flex justify-center px-6 my-12",children:Object(o.jsxs)("div",{className:"w-full xl:w-3/4 lg:w-11/12 flex",children:[Object(o.jsx)("div",{className:"w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg",style:{backgroundImage:"url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}),Object(o.jsxs)("div",{className:"w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none",children:[Object(o.jsx)("h3",{className:"pt-4 text-2xl text-center",children:"Create an Account!"}),Object(o.jsx)(c.b,{initialValues:{email:"",password:""},validationSchema:b,onSubmit:function(t){return e(Object(i.b)(t))},children:Object(o.jsxs)(c.a,{className:"px-8 pt-6 pb-8 mb-4 bg-white rounded",children:[Object(o.jsxs)("div",{className:"mb-4",children:[Object(o.jsx)("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),Object(o.jsx)(r.TextInput,{name:"email",id:"email",type:"email",placeholder:"Email"})]}),Object(o.jsx)("div",{className:"mb-4 md:flex md:justify-between",children:Object(o.jsxs)("div",{className:"mb-4 md:mr-2 md:mb-0",children:[Object(o.jsx)("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"password",children:"Password"}),Object(o.jsx)(r.TextInput,{name:"password",id:"password",type:"password",placeholder:"******************"})]})}),Object(o.jsx)("div",{className:"mb-6 text-center",children:Object(o.jsx)("button",{className:"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline",type:"submit",children:"Register Account"})}),Object(o.jsx)("hr",{className:"mb-6 border-t"}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)(a.b,{className:"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",to:"/login",children:"Already have an account? Login!"})})]})})]})]})})})}},78:function(e,t,s){"use strict";s.d(t,"b",(function(){return d})),s.d(t,"a",(function(){return u}));var a=s(80),c=s.n(a),n=s(21),r=s(81),l=s(82),i=s.n(l),o=s(7),b="AIzaSyAzlNZEwhhrTyuz9kfceGBhuxPKQFPkxRw",d=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(s){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(Object(o.f)()),t.prev=1,t.next=4,i.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(b),Object(n.a)(Object(n.a)({},e),{},{returnSecureToken:!0}));case 4:a=t.sent,r=a.data,s(Object(o.g)(r)),console.log(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),s(Object(o.e)(t.t0.response.data.error.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(s){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(Object(o.c)()),t.prev=1,t.next=4,i.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(b),Object(n.a)(Object(n.a)({},e),{},{returnSecureToken:!0}));case 4:a=t.sent,r=a.data,s(Object(o.d)(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),s(Object(o.b)(t.t0.response.data.error.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=RegistrationPage.840544f5.chunk.js.map