(this["webpackJsonppointer-client"]=this["webpackJsonppointer-client"]||[]).push([[0],{41:function(e,t,s){},44:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},58:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s.n(a),n=s(27),i=s.n(n),l=s(11),r=(s(41),s(9)),o=s(18),d=(s(42),s(34)),b=function(){Object(d.a)({apiKey:"AIzaSyAiEVMZzmwjK8y6Duw6imO6ktpj4L9_NCA",authDomain:"pointer-tc.firebaseapp.com",projectId:"pointer-tc",storageBucket:"pointer-tc.appspot.com",messagingSenderId:"966848753855",appId:"1:966848753855:web:42b70ee18c6ac377d8160a",measurementId:"G-YPL7X35QF3"})},j=s(15),m=(s(44),s(4));var u=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),s=t[0],c=t[1];window.addEventListener("resize",(function(){var e=document.getElementById("nav-menu");window.innerWidth>=992&&"none"===e.style.display&&(e.style.display="block",e.style.animation="showNav 350ms ease-in-out both"),window.innerWidth<992&&"block"===e.style.display&&(e.style.display="none")}));var n=function(){if(window.innerWidth<992){var e=document.getElementById("nav-menu");"block"===e.style.display?(e.style.display="none",e.style.animation="hideNav 350ms ease-in-out both",c(!1)):(e.style.display="block",e.style.animation="showNav 350ms ease-in-out both",c(!0))}};return Object(m.jsx)("nav",{className:"py-3",children:Object(m.jsxs)("div",{className:"container",id:"nav",children:[Object(m.jsx)("div",{children:Object(m.jsx)(l.c,{className:"navbar-brand",to:"/",children:"Pointer"})}),Object(m.jsxs)("div",{id:"nav-menu",children:[Object(m.jsxs)("ul",{id:"nav-menu-list",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(l.c,{exact:!0,activeClassName:"active-link",onClick:n,to:"/",children:[Object(m.jsx)("i",{className:"bi bi-house-door-fill"})," Home"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(l.c,{exact:!0,activeClassName:"active-link",onClick:n,to:"/features",children:[Object(m.jsx)("i",{className:"bi bi-hourglass-bottom"})," Features"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(l.c,{exact:!0,activeClassName:"active-link",onClick:n,to:"/pricing",children:[Object(m.jsx)("i",{className:"bi bi-cash-coin"})," Pricing"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(l.c,{exact:!0,activeClassName:"active-link",onClick:n,to:"/login",children:[Object(m.jsx)("i",{className:"bi bi-person-circle"})," Login"]})})]}),Object(m.jsx)("div",{className:"d-lg-none d-xl-none d-xxl-none text-center",children:Object(m.jsxs)(l.b,{onClick:n,className:"btn btn-outline-warning text-dark d-lg-none d-xl-none d-xxl-none",to:"/register",children:[Object(m.jsx)("i",{className:"bi bi-award"})," Try for free"]})})]}),Object(m.jsx)("div",{className:"d-none d-lg-block d-xl-block d-xxl-block",children:Object(m.jsxs)(l.b,{className:"btn btn-outline-warning text-dark",to:"/register",children:[Object(m.jsx)("i",{className:"bi bi-award"})," Try for free"]})}),Object(m.jsx)("div",{className:"d-lg-none d-xl-none d-xxl-none",children:Object(m.jsxs)("button",{className:"btn btn-outline-light text-dark",type:"button",onClick:n,children:[Object(m.jsx)("i",{className:s?"bi bi-x-lg":"bi bi-list"})," Menu"]})})]})})};s(50);var x=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{id:"home-top",children:Object(m.jsx)("div",{className:"container section",children:Object(m.jsx)("div",{className:"homeRow",children:Object(m.jsxs)("div",{className:"col-md-9 text-center",children:[Object(m.jsx)("p",{children:"Your one stop business management solution"}),Object(m.jsxs)(l.b,{to:"register",className:"btn btn-outline-warning text-dark mt-5",children:[Object(m.jsx)("i",{className:"bi bi-arrow-right-circle-fill"})," Get started today"]})]})})})})})};var h=function(){return Object(m.jsx)("div",{className:"container section",children:Object(m.jsx)("p",{children:"Features page"})})};var O=function(){return Object(m.jsx)("div",{className:"container section",children:Object(m.jsx)("p",{children:"Pricing page"})})},p=s(22);var v=function(){return Object(m.jsx)("div",{className:"container section",children:Object(m.jsxs)("div",{className:"card col-md-7 p-3 mx-auto",children:[Object(m.jsxs)("div",{className:"card-header text-center",children:[Object(m.jsx)("i",{className:"bi bi-person-circle form-title-icon text-warning"}),Object(m.jsx)("h4",{children:"Login to your account"})]}),Object(m.jsx)("div",{className:"card-body p-3",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={};t.email=e.target.email.value,t.password=e.target.password.value;var s=Object(p.b)();Object(p.c)(s,t.email,t.password).then((function(e){console.log(e),o.b.success("Login successful. Welcome "+e.user.displayName,{autoClose:7e3})})).catch((function(e){console.log(e),o.b.error(e.message,{autoClose:7e3})}))},autoComplete:"off",children:[Object(m.jsxs)("div",{className:"form-group mb-3",children:[Object(m.jsx)("label",{className:"form-label",children:"Email address"}),Object(m.jsx)("input",{type:"email",className:"my-input",required:!0,name:"email",placeholder:"Enter your email"})]}),Object(m.jsxs)("div",{className:"form-group mb-3",children:[Object(m.jsx)("label",{className:"form-label",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",required:!0,className:"my-input",placeholder:"Enter your password"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("i",{className:"bi bi-lightbulb-fill text-warning"})," Don't have an account?",Object(m.jsx)(l.c,{exact:!0,to:"/register",className:"hint-link",children:"Register now"})]}),Object(m.jsx)("div",{className:"text-center pt-3",children:Object(m.jsxs)("button",{type:"submit",className:"btn btn-outline-warning text-dark",children:[Object(m.jsx)("i",{className:"bi bi-arrow-right-circle-fill"})," Login"]})})]})})]})})},g=s(36),N=s.n(g);s(51);var f=function(e){var t=e.isLoading,s=e.loadingText;return Object(m.jsxs)("div",{id:"loadingScr",children:[Object(m.jsx)(N.a,{speedMultiplier:2,loading:t,color:"#ffc107",size:50}),Object(m.jsx)("div",{id:"loadingText",children:Object(m.jsx)("h6",{className:"text-center text-warning mt-3",children:s})})]})};var w=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)({}),i=Object(j.a)(n,2),l=i[0],r=i[1],d=Object(a.useState)({}),b=Object(j.a)(d,2),u=b[0],x=b[1],h=function(){var e={name:document.getElementById("name").value,email:document.getElementById("email").value,password:document.getElementById("password").value};x(e)},O=Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container section",children:Object(m.jsxs)("div",{className:"card col-md-7 p-3 mx-auto",children:[Object(m.jsxs)("div",{className:"card-header text-center",children:[Object(m.jsx)("i",{className:"bi bi-person-square form-title-icon text-warning"}),Object(m.jsx)("h4",{children:"Register an account"})]}),Object(m.jsx)("div",{className:"card-body p-3",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),r({});var t={};t.name=e.target.name.value,t.email=e.target.email.value,t.password=e.target.password.value;var s=Object(p.b)();Object(p.a)(s,t.email,t.password).then((function(){c(!1),o.b.success("Registration successful. Please login.",{autoClose:7e3})})).catch((function(e){c(!1),o.b.error(e.message,{autoClose:7e3})}))},autoComplete:"off",children:[Object(m.jsxs)("div",{className:"form-group mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:"form-label",children:"Your name"}),Object(m.jsx)("input",{id:"name",type:"text",className:l.name?"form-control is-invalid":"my-input",onChange:h,value:u.name?u.name:"",name:"name",required:!0,placeholder:"Enter your name"}),l.name?Object(m.jsx)("div",{className:"invalid-feedback",children:l.name}):null]}),Object(m.jsxs)("div",{className:"form-group mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(m.jsx)("input",{id:"email",type:"email",name:"email",className:l.email?"form-control is-invalid":"my-input",value:u.email?u.email:"",required:!0,onChange:h,placeholder:"Enter your email"}),l.email?Object(m.jsx)("div",{className:"invalid-feedback",children:l.email}):null]}),Object(m.jsxs)("div",{className:"form-group mb-3",children:[Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(m.jsx)("input",{id:"password",type:"password",name:"password",required:!0,className:l.password?"form-control is-invalid":"my-input",onChange:h,value:u.password?u.password:"",placeholder:"Enter a strong password"}),l.password?Object(m.jsx)("div",{className:"invalid-feedback",children:l.password}):null]}),Object(m.jsxs)("div",{className:"text-warning text-center text-up text-bold",children:[Object(m.jsx)("i",{className:"bi bi-award"})," Get 7 days Free Trial after registering!"]}),Object(m.jsx)("div",{className:"text-center pt-3",children:Object(m.jsxs)("button",{className:"btn btn-outline-warning text-dark",type:"submit",children:[Object(m.jsx)("i",{className:"bi bi-check-circle-fill"})," Register"]})})]})})]})})});return s?Object(m.jsx)(f,{isLoading:s,loadingText:"Registering"}):O},y=s(25),k=function(){var e=Object(y.b)();Object(y.c)(e,(function(e){e?console.log(e.email):console.log("User not found")}))};var C=function(){return b(),k(),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.a,{position:"top-center",autoClose:!1,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(m.jsx)(u,{}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/",exact:!0,component:x}),Object(m.jsx)(r.a,{path:"/features",component:h}),Object(m.jsx)(r.a,{path:"/pricing",component:O}),Object(m.jsx)(r.a,{path:"/login",component:v}),Object(m.jsx)(r.a,{path:"/register",component:w})]})]})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(C,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.344c8751.chunk.js.map