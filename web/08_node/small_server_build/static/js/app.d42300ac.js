(function(){"use strict";var t={4637:function(t,e,n){var i=n(6369),r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("DemoBanner")],1)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("DemoAbout")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("DemoHome")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},o=[],l=function(){var t=this,e=t._self._c;return e("h2",[t._v("Vue Router Demo")])},s=[],a={name:"DemoBanner"},u=a,c=n(1001),v=(0,c.Z)(u,l,s,!1,null,null,null),f=v.exports,m=n(2631),d=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},p=[],h={name:"DemoAbout"},_=h,g=(0,c.Z)(_,d,p,!1,null,null,null),w=g.exports,b=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/new"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("router-view")],1)])},y=[],x={name:"DemoHome"},C=x,k=(0,c.Z)(C,b,y,!1,null,null,null),D=k.exports,Z=function(){var t=this;t._self._c;return t._m(0)},O=[function(){var t=this,e=t._self._c;return e("div",[e("ul",[e("li",[t._v("news001")]),e("li",[t._v("news002")]),e("li",[t._v("news003")])])])}],S={name:"DemoNews"},A=S,P=(0,c.Z)(A,Z,O,!1,null,null,null),j=P.exports,M=function(){var t=this,e=t._self._c;return e("div",[e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])])},q=[],I={name:"DemoDetail",props:["id","title"]},B=I,E=(0,c.Z)(B,M,q,!1,null,null,null),G=E.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messagesList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"detail",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title))]),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("router-view")],1)},T=[],L=(n(7658),{name:"DemoMessages",data(){return{messagesList:[{id:"001",title:"MSG001"},{id:"002",title:"MSG002"},{id:"003",title:"MSG003"}]}},methods:{pushShow(t){console.log(this),this.$router.push({name:"detail",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"detail",query:{id:t.id,title:t.title}})}}}),N=L,$=(0,c.Z)(N,H,T,!1,null,null,null),F=$.exports;const R=new m.ZP({mode:"history",routes:[{path:"/home",component:D,meta:{title:"主页"},children:[{name:"new",path:"new",component:j,meta:{IsAuthenticated:!0,title:"新闻"}},{name:"message",path:"message",component:F,meta:{IsAuthenticated:!0,title:"消息"},beforeEnter:(t,e)=>{t.meta.IsAuthenticated?"andy"===localStorage.getItem("name")?e():alert("name is not right,please check and try again"):e()},children:[{name:"detail",path:"detail",meta:{title:"详情"},component:G,props({query:t}){return{id:t.id,title:t.title}}}]}]},{path:"/about",component:w,meta:{title:"关于"}}]});R.afterEach((t=>{document.title=t.meta.title||"初始化展示"}));var V=R,z={name:"App",components:{DemoBanner:f},router:V},J=z,K=(0,c.Z)(J,r,o,!1,null,null,null),Q=K.exports;i.ZP.config.productionTip=!1,i.ZP.use(m.ZP),new i.ZP({el:"#app",render:t=>t(Q)})}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var l=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var s=!0,a=0;a<i.length;a++)(!1&o||l>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(s=!1,o<l&&(l=o));if(s){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,l=i[0],s=i[1],a=i[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(a)var c=a(n)}for(e&&e(i);u<l.length;u++)o=l[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkvue2_test"]=self["webpackChunkvue2_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4637)}));i=n.O(i)})();
//# sourceMappingURL=app.d42300ac.js.map