(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"04de":function(t,e,n){"use strict";n("0e99")},"0e99":function(t,e,n){},"34db":function(t,e,n){"use strict";n("8758")},"45dc":function(t,e,n){"use strict";n("f565")},"56d7":function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"Toast",(function(){return yt})),n.d(o,"Loading",(function(){return wt})),n.d(o,"Copy",(function(){return _t})),n.d(o,"Download",(function(){return $t})),n.d(o,"numArray",(function(){return Ot})),n.d(o,"checkDevice",(function(){return At}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b64b");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("v-container",{attrs:{"fill-height":""}},[n("router-view")],1)],1),n("loading-indicator"),n("toast")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[t.loading?n("v-progress-circular",{attrs:{size:70,width:9,color:"primary",indeterminate:""}}):t._e()],1)},c=[],u={computed:{loading:function(){return this.$store.getters.loading}}},l=u,d=(n("04de"),n("2877")),f=n("6544"),p=n.n(f),m=n("490a"),h=Object(d["a"])(l,s,c,!1,null,null,null),v=h.exports;p()(h,{VProgressCircular:m["a"]});var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{timeout:"loading"==t.toast.type?-1:3e3,color:t.toast.color,elevation:"5",tile:""},on:{click:t.removeToast},model:{value:t.toast.show,callback:function(e){t.$set(t.toast,"show",e)},expression:"toast.show"}},[t._v(" "+t._s(t.toast.message)+" ")])},b=[],y={computed:{toast:function(){return this.$store.getters.toast}},methods:{removeToast:function(){this.$store.dispatch("removeToast")}}},w=y,_=n("2db4"),$=Object(d["a"])(w,g,b,!1,null,null,null),O=$.exports;p()($,{VSnackbar:_["a"]});var A={name:"App",components:{LoadingIndicator:v,Toast:O}},T=A,k=n("7496"),j=n("a523"),L=n("f6c4"),x=Object(d["a"])(T,a,i,!1,null,null,null),P=x.exports;p()(x,{VApp:k["a"],VContainer:j["a"],VMain:L["a"]});n("d3b7");var S=n("bc3a"),C=n.n(S),E={baseURL:Object({NODE_ENV:"production",BASE_URL:""}).baseURL||Object({NODE_ENV:"production",BASE_URL:""}).apiUrl||"",withCredentials:!0},M=C.a.create(E);M.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),M.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.$http=M,window.$http=M,Object.defineProperties(t.prototype,{http:{get:function(){return M}},$http:{get:function(){return M}}})},r["a"].use(Plugin);Plugin;var V=n("8c4f"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},I=[],F={name:"Landing",mounted:function(){try{this.$router.push("")}catch(t){console.log(t)}}},B=F,R=Object(d["a"])(B,N,I,!1,null,null,null),U=R.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("404")])},J=[],Y={},G=Y,q=Object(d["a"])(G,D,J,!1,null,null,null),z=q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"login-card elevation-4 text-center",attrs:{tile:""}},[n("h5",{staticClass:"mb-10"},[t._v("로그인 데이터")]),n("v-list",[n("v-list-item",[n("v-list-item-subtitle",[t._v(t._s(t.accessToken))])],1),n("v-list-item",[n("v-list-item-subtitle",[t._v(t._s(t.myName))])],1),n("v-list-item",[n("v-list-item-subtitle",[t._v(t._s(t.myAccount))])],1)],1),n("v-btn",{attrs:{color:"warning",tile:"",depressed:""},on:{click:t.logout}},[t._v("logout")])],1)},H=[],K=(n("b0c0"),{name:"MyInfomation",created:function(){try{this.$msal.isAuthenticated()||this.$router.push("/")}catch(t){console.log(t)}},computed:{accessToken:function(){return this.$msal.data.accessToken},myAccount:function(){return this.$msal.data.user.userName},myName:function(){return this.$msal.data.user.name}},methods:{logout:function(){this.$msal.signOut()}}}),Q=K,X=(n("45dc"),n("8336")),Z=n("b0af"),tt=n("8860"),et=n("da13"),nt=n("5d23"),ot=Object(d["a"])(Q,W,H,!1,null,"5792f9c7",null),rt=ot.exports;p()(ot,{VBtn:X["a"],VCard:Z["a"],VList:tt["a"],VListItem:et["a"],VListItemSubtitle:nt["a"]});var at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"login-card elevation-4 text-center",attrs:{tile:""}},[n("h5",{staticClass:"mb-10"},[t._v("MSAL 권한 인증 API를 테스트 해보기위해 작성되었습니다")]),t.isAuthenticated?n("h6",{staticClass:"mb-10"},[t._v("로그인 되어있습니다")]):t._e(),n("v-btn",{attrs:{color:"secondary",tile:"",depressed:""},on:{click:function(e){return t.tryMsalLogin()}}},[t._v("Microsoft Login")]),n("v-btn",{attrs:{disabled:!t.isAuthenticated,color:"info",tile:"",depressed:""},on:{click:function(e){return t.$router.push("/me")}}},[t._v("My Infomation")])],1)},it=[],st={created:function(){console.log(this.$msal)},computed:{isAuthenticated:function(){return this.$msal.isAuthenticated()}},methods:{tryMsalLogin:function(){this.isAuthenticated?this.$toast.info("이미 로그인 되어있습니다!"):this.$msal.signIn()},getMe:function(){this.$msal.msGraph(["/me"]).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},ct=st,ut=(n("34db"),Object(d["a"])(ct,at,it,!1,null,"596be6e4",null)),lt=ut.exports;p()(ut,{VBtn:X["a"],VCard:Z["a"]}),r["a"].use(V["a"]);var dt=new V["a"]({mode:"history",base:"",routes:[{path:"/not-found",name:"NotFound",component:z},{path:"",name:"Landing",component:U},{path:"/",name:"Login",component:lt},{path:"/me",name:"Me",component:rt}]}),ft=dt,pt=n("2f62"),mt={message:null,type:null,color:null,show:!1},ht={state:{loading:!1,toast:{message:null,type:null,color:null,show:!1}},actions:{setLoading:function(t,e){var n=t.commit;return n("setLoading",e)},setToast:function(t,e){var n=t.commit;return e.show=!0,n("setToast",e)},removeToast:function(t){var e=t.commit;return e("setToast",{show:!1})}},getters:{loading:function(t){return t.loading},toast:function(t){return t.toast}},mutations:{setLoading:function(t,e){void 0!==e&&(t.loading=e)},setToast:function(t,e){e?(void 0!==e.type&&(t.toast.type=e.type),void 0!==e.message&&(t.toast.message=e.message),void 0!==e.show&&(t.toast.show=e.show),void 0!==e.color&&(t.toast.color=e.color)):t.toast=mt}}},vt=ht;r["a"].use(pt["a"]);var gt=new pt["a"].Store({modules:{AppState:vt}}),bt=n("1da1"),yt=(n("96cf"),n("2b3d"),n("3ca3"),n("ddb0"),n("d81d"),n("a9e3"),n("466d"),n("ac1f"),{install:function(t){var e=function(t,e,n){return{message:t,color:e,type:n}};t.prototype.$toast={success:function(t){gt.dispatch("setToast",e(t,"success","success"))},warning:function(t){gt.dispatch("setToast",e(t,"warning","warning"))},error:function(t){gt.dispatch("setToast",e(t,"error","error"))},info:function(t){gt.dispatch("setToast",e(t,"info","info"))},loading:function(t){gt.dispatch("setToast",e(t,"dark","loading"))},default:function(t){gt.dispatch("setToast",e(t,"dark","default"))},remove:function(){gt.dispatch("removeToast")}}}}),wt={install:function(t){t.prototype.$loading=function(t){gt.dispatch("setLoading",t)}}},_t={install:function(t){t.prototype.$copy=function(t){return JSON.parse(JSON.stringify(t))}}},$t={install:function(t){t.prototype.$download=function(){var t=Object(bt["a"])(regeneratorRuntime.mark((function t(e,n,o){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S({url:e,method:"GET",params:n,responseType:"blob"}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=e,n.setAttribute("download",o||r.$moment().format("YYYY_MM_DD_hh_mm_ss")),document.body.appendChild(n),n.click()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,o){return t.apply(this,arguments)}}()}},Ot={install:function(t){t.prototype.$numArray=function(t){return Array.apply(null,{length:t}).map(Number.call,Number)}}},At={install:function(t){t.prototype.$checkDevice={byOS:function(){return!("win16|win32|win64|windows|mac|macintel|linux|freebsd|openbsd|sunos".indexOf(navigator.platform.toLowerCase())>=0)},byMaker:function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},byTouchInterface:function(){return navigator.maxTouchPoints||"ontouchstart"in document.documentElement}}}},Tt=n("f309"),kt=n("c3af");n("15f5"),n("5363");r["a"].use(Tt["a"]);var jt=new Tt["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{ko:kt["a"]},current:"ko"}}),Lt=n("5a75"),xt=n.n(Lt),Pt={auth:{clientId:"dcd399da-a750-4ad5-ac45-78c670ef6817",authority:"https://login.microsoftonline.com/consumers",redirectUri:"http://localhost:8080"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!0}},St=Pt;r["a"].use(xt.a,St),Object.keys(o).forEach((function(t){r["a"].use(o[t])})),r["a"].config.productionTip=!1,window.vm=new r["a"]({render:function(t){return t(P)},vuetify:jt,router:ft,store:gt}).$mount("#app")},8758:function(t,e,n){},f565:function(t,e,n){}});
//# sourceMappingURL=app.86451e1c.js.map