(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{FdDj:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var i=e("ofXK"),o=e("fXoL");let r=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.Hb({type:n}),n.\u0275inj=o.Gb({imports:[[i.b]]}),n})()},XWD5:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var i=e("fXoL");let o=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=i.Db({type:n,selectors:[["app-spinner-small"]],decls:13,vars:0,consts:[[1,"lds-spinner"]],template:function(n,t){1&n&&(i.Mb(0,"div",0),i.Kb(1,"div"),i.Kb(2,"div"),i.Kb(3,"div"),i.Kb(4,"div"),i.Kb(5,"div"),i.Kb(6,"div"),i.Kb(7,"div"),i.Kb(8,"div"),i.Kb(9,"div"),i.Kb(10,"div"),i.Kb(11,"div"),i.Kb(12,"div"),i.Lb())},styles:['.lds-spinner[_ngcontent-%COMP%]{color:official;display:inline-block;position:relative;width:80px;height:80px}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform-origin:40px 40px;animation:lds-spinner 1.2s linear infinite}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;top:3px;left:37px;width:6px;height:18px;border-radius:20%;background:var(--app-color-primary)}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{transform:rotate(0deg);animation-delay:-1.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}to{opacity:0}}']}),n})()},lBUW:function(n,t,e){"use strict";e.r(t),e.d(t,"AuthModule",function(){return b});var i=e("ofXK"),o=e("tyNb"),r=e("mrSG"),a=e("quSY"),s=e("fXoL"),c=e("lGQG"),d=e("XWD5");function g(n,t){1&n&&s.Kb(0,"img",9)}function l(n,t){1&n&&s.Kb(0,"app-spinner-small")}const p=[{path:"",component:(()=>{class n{constructor(n,t,e){this.router=n,this.authService=t,this.ngz=e,this.cargando=!1,this.loginSub=new a.a}ngOnDestroy(){this.loginSub.unsubscribe()}ngOnInit(){this.cargando=!1,this.renderButton()}renderButton(){gapi.signin2.render("my-signin2",{scope:"profile email",width:240,height:50,longtitle:!0,theme:"dark"}),this.startApp()}startApp(){return Object(r.a)(this,void 0,void 0,function*(){yield this.authService.googleInit(),this.auth2=this.authService.auth2,this.attachSignin(document.getElementById("my-signin2"))})}attachSignin(n){this.auth2.attachClickHandler(n,{},n=>{const t=n.getAuthResponse().id_token;this.loginSub=this.authService.loginGoogle(t).subscribe(n=>{console.log(n.token),n.ok&&this.ngz.run(()=>this.router.navigateByUrl("/ask"))})},function(n){console.log("hola")})}}return n.\u0275fac=function(t){return new(t||n)(s.Jb(o.b),s.Jb(c.a),s.Jb(s.A))},n.\u0275cmp=s.Db({type:n,selectors:[["app-auth"]],decls:14,vars:3,consts:[[1,"container"],[1,"img"],[1,"app-bitter-font"],["src","assets/question.svg","alt",""],[1,"login-container","app-bitter-font"],["class","avatar","src","assets/profile_pic.svg","alt","",4,"ngIf"],[4,"ngIf"],[1,"google-btn"],["id","my-signin2"],["src","assets/profile_pic.svg","alt","",1,"avatar"]],template:function(n,t){1&n&&(s.Mb(0,"section",0),s.Mb(1,"div",1),s.Mb(2,"div"),s.Mb(3,"h2",2),s.cc(4,"Ask platform"),s.Lb(),s.Kb(5,"img",3),s.Lb(),s.Lb(),s.Mb(6,"div",4),s.Mb(7,"div"),s.bc(8,g,1,0,"img",5),s.bc(9,l,1,0,"app-spinner-small",6),s.Mb(10,"h2"),s.cc(11),s.Lb(),s.Mb(12,"div",7),s.Kb(13,"div",8),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&n&&(s.yb(8),s.Wb("ngIf",!1===t.cargando),s.yb(1),s.Wb("ngIf",t.cargando),s.yb(2),s.dc(t.cargando?"Ingresando":"Bienvenido"))},directives:[i.i,d.a],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.wave[_ngcontent-%COMP%]{position:fixed;height:100%;left:0;z-index:-1}.container[_ngcontent-%COMP%]{height:100vh;display:grid;grid-template-columns:repeat(1,1fr);grid:gap 7rem;padding:0 2rem;background-image:url(/assets/wave.png);background-repeat:no-repeat}.img[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px}.img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center}.img[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.9rem;text-transform:uppercase;margin:15px 0;color:#333}.avatar[_ngcontent-%COMP%]{width:100px}.login-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.9rem;text-transform:uppercase;margin:15px 0;color:#333}.login-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex-direction:column}.login-container[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}@media screen and (min-width:1000px){.container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:800px}}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({imports:[[o.c.forChild(p)],o.c]}),n})();var m=e("FdDj");let b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({imports:[[i.b,h,m.a]]}),n})()}}]);