(function(e){function t(t){for(var n,i,r=t[0],s=t[1],u=t[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},c=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=s;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=a("0284"),c=a.n(o),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Header"),a("Menu"),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},r=[],s=a("d4ec"),u=a("262e"),l=a("2caf"),p=a("9ab4"),d=a("1b40"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"teal lighten-5"}},[a("v-app-bar-nav-icon",{on:{click:e.switchGlobalMenuDrawer}}),a("v-toolbar-title",[e._v("tools.gomiba.co "+e._s(e.title))])],1)},v=[],f=a("bee2"),b=function(e){Object(u["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(f["a"])(a,[{key:"switchGlobalMenuDrawer",value:function(){this.$store.commit("switchGlobalMenuDrawer")}},{key:"title",get:function(){return""===this.$route.meta.title?"":" / ".concat(this.$route.meta.title)}}]),a}(d["c"]);b=Object(p["a"])([Object(d["a"])({components:{}})],b);var m=b,g=m,w=a("2877"),j=a("6544"),O=a.n(j),y=a("40dc"),M=a("5bc1"),_=a("2a7f"),C=Object(w["a"])(g,h,v,!1,null,null,null),x=C.exports;O()(C,{VAppBar:y["a"],VAppBarNavIcon:M["a"],VToolbarTitle:_["a"]});var I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",value:e.drawer},on:{input:e.xxx}},[a("MenuItems")],1)},k=[],S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},e._l(e.routeList,(function(t){return a("v-list-item",{key:t.path,attrs:{to:""==t.path?"/":t.path}},[a("v-list-item-title",[e._v(" "+e._s(e.showPageTitle?t.meta.title:t.name)+" ")])],1)})),1)],1)},D=[],R=(a("d81d"),a("b0c0"),a("4de4"),function(e){Object(u["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(f["a"])(a,[{key:"routeList",get:function(){var e=this,t=this.$store.getters.routeList.map((function(t){return e.dontShowTop&&"TOP"===t.name?null:t}));return t.filter((function(e){return e}))}}]),a}(d["c"]));Object(p["a"])([Object(d["b"])({type:Boolean,default:!1})],R.prototype,"dontShowTop",void 0),Object(p["a"])([Object(d["b"])({type:Boolean,default:!1})],R.prototype,"showPageTitle",void 0),R=Object(p["a"])([Object(d["a"])({components:{}})],R);var V=R,T=V,L=a("8860"),$=a("da13"),E=a("1baa"),G=a("5d23"),P=Object(w["a"])(T,S,D,!1,null,null,null),A=P.exports;O()(P,{VList:L["a"],VListItem:$["a"],VListItemGroup:E["a"],VListItemTitle:G["b"]});var z=function(e){Object(u["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(f["a"])(a,[{key:"drawer",get:function(){return this.$store.state.showGlobalMenuDrawer}},{key:"routeList",get:function(){return this.$store.getters.routeList}},{key:"xxx",value:function(e){this.$store.commit("switchGlobalMenuDrawer",e)}}]),a}(d["c"]);z=Object(p["a"])([Object(d["a"])({components:{MenuItems:A}})],z);var B=z,N=B,U=a("f774"),F=Object(w["a"])(N,I,k,!1,null,null,null),H=F.exports;O()(F,{VNavigationDrawer:U["a"]});var q=function(e){Object(u["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(d["c"]);q=Object(p["a"])([Object(d["a"])({components:{Header:x,Menu:H}})],q);var J=q,W=J,K=a("7496"),Q=a("a523"),X=a("f6c4"),Y=Object(w["a"])(W,i,r,!1,null,null,null),Z=Y.exports;O()(Y,{VApp:K["a"],VContainer:Q["a"],VMain:X["a"]});var ee=a("9483");Object(ee["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var te=a("8c4f"),ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-spacer"),a("v-col",{staticClass:"text-center"},[a("p",[e._v("Welcome to my toolbox.")])]),a("v-spacer")],1),a("v-row",[a("v-spacer"),a("v-col",{staticClass:"text-center"},[a("v-card",[a("MenuItems",{attrs:{"dont-show-top":"","show-page-title":""}})],1)],1),a("v-spacer")],1)],1)},ne=[],oe=function(e){Object(u["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(d["c"]);oe=Object(p["a"])([Object(d["a"])({components:{MenuItems:A}})],oe);var ce=oe,ie=ce,re=a("b0af"),se=a("62ad"),ue=a("0fd9"),le=a("2fa4"),pe=Object(w["a"])(ie,ae,ne,!1,null,null,null),de=pe.exports;O()(pe,{VCard:re["a"],VCol:se["a"],VRow:ue["a"],VSpacer:le["a"]});var he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"2"}},[a("v-btn",{class:e.$style.detect,on:{click:e.refreshDeviceList}},[e._v("DETECT VIDEO DEVICES")]),a("v-select",{attrs:{solo:"",items:e.deviceLabels},on:{change:e.onDeviceItemsChanged}}),a("v-btn",{staticClass:"restart",on:{click:e.reopenMediaStream}},[e._v("RESTART")]),a("v-btn",{staticClass:"switch",on:{click:e.flipDevice}},[e._v("FLIP")]),a("v-textarea",{class:e.$style.infos,attrs:{solo:"",readonly:"",wrap:"off",value:e.deviceInfo}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"9",lg:"10"}},[a("video",{class:e.$style.video,attrs:{autoplay:""},domProps:{srcObject:e.stream}})])],1)],1)},ve=[],fe=a("1da1"),be=(a("96cf"),a("159b"),a("a15b"),"environment"),me="user",ge=function(e){Object(u["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.mode=be,e.currentDeviceId="default",e.stream=null,e.deviceList={},e.deviceLabels=[],e.deviceInfo="",e}return Object(f["a"])(a,[{key:"refreshDeviceList",value:function(){var e=Object(fe["a"])(regeneratorRuntime.mark((function e(){var t,a,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.deviceList={},this.deviceLabels=[],e.next=4,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 4:return t=e.sent,t.getTracks().forEach((function(e){return e.stop()})),e.next=8,navigator.mediaDevices.enumerateDevices();case 8:a=e.sent,a.forEach((function(e){"videoinput"===e.kind&&(n.deviceList[e.label]=e.deviceId,n.deviceLabels.push(e.label))}));case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"flipDevice",value:function(){this.mode=this.mode===me?be:me,this.reopenMediaStream()}},{key:"onDeviceItemsChanged",value:function(e){this.currentDeviceId=this.deviceList[e],this.reopenMediaStream()}},{key:"reopenMediaStream",value:function(){var e=Object(fe["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:this.mode,deviceId:this.currentDeviceId}});case 2:this.stream=e.sent,t=[],this.stream.getTracks().forEach((function(e){var a=e.getSettings();t.push("setting.aspectRatio: ".concat(a.aspectRatio)),t.push("setting.autoGainControl: ".concat(a.autoGainControl)),t.push("setting.channelCount: ".concat(a.channelCount)),t.push("setting.deviceId: ".concat(a.deviceId)),t.push("setting.echoCancellation: ".concat(a.echoCancellation)),t.push("setting.facingMode: ".concat(a.facingMode)),t.push("setting.frameRate: ".concat(a.frameRate)),t.push("setting.groupId: ".concat(a.groupId)),t.push("setting.height: ".concat(a.height)),t.push("setting.latency: ".concat(a.latency)),t.push("setting.noiseSuppression: ".concat(a.noiseSuppression)),t.push("setting.sampleRate: ".concat(a.sampleRate)),t.push("setting.sampleSize: ".concat(a.sampleSize)),t.push("setting.width: ".concat(a.width)),t.push("");var n=e.getCapabilities();t.push("capabilities.aspectRatio: ".concat(n.aspectRatio)),t.push("capabilities.autoGainControl: ".concat(n.autoGainControl)),t.push("capabilities.channelCount: ".concat(n.channelCount)),t.push("capabilities.deviceId: ".concat(n.deviceId)),t.push("capabilities.echoCancellation: ".concat(n.echoCancellation)),t.push("capabilities.facingMode: ".concat(n.facingMode)),t.push("capabilities.frameRate: ".concat(n.frameRate)),t.push("capabilities.groupId: ".concat(n.groupId)),t.push("capabilities.height: ".concat(n.height)),t.push("capabilities.latency: ".concat(n.latency)),t.push("capabilities.noiseSuppression: ".concat(n.noiseSuppression)),t.push("capabilities.sampleRate: ".concat(n.sampleRate)),t.push("capabilities.sampleSize: ".concat(n.sampleSize)),t.push("capabilities.width: ".concat(n.width)),t.push("");var o=e.getConstraints();t.push("constraints.aspectRatio: ".concat(o.advanced)),t.push("constraints.aspectRatio: ".concat(o.aspectRatio)),t.push("constraints.autoGainControl: ".concat(o.autoGainControl)),t.push("constraints.channelCount: ".concat(o.channelCount)),t.push("constraints.deviceId: ".concat(o.deviceId)),t.push("constraints.echoCancellation: ".concat(o.echoCancellation)),t.push("constraints.facingMode: ".concat(o.facingMode)),t.push("constraints.frameRate: ".concat(o.frameRate)),t.push("constraints.groupId: ".concat(o.groupId)),t.push("constraints.height: ".concat(o.height)),t.push("constraints.latency: ".concat(o.latency)),t.push("constraints.noiseSuppression: ".concat(o.noiseSuppression)),t.push("constraints.sampleRate: ".concat(o.sampleRate)),t.push("constraints.sampleSize: ".concat(o.sampleSize)),t.push("constraints.width: ".concat(o.width))})),this.deviceInfo=t.join("\n");case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){this.refreshDeviceList()}},{key:"beforeDestroy",value:function(){this.stream=null}}]),a}(d["c"]);ge=Object(p["a"])([Object(d["a"])({components:{}})],ge);var we=ge,je=we,Oe=a("d7d2"),ye=a("8336"),Me=a("b974"),_e=a("a844");function Ce(e){this["$style"]=Oe["default"].locals||Oe["default"]}var xe=Object(w["a"])(je,he,ve,!1,Ce,null,null),Ie=xe.exports;O()(xe,{VBtn:ye["a"],VCol:se["a"],VRow:ue["a"],VSelect:Me["a"],VTextarea:_e["a"]}),n["a"].use(te["a"]);var ke=[{path:"/",name:"TOP",component:de,meta:{title:""}},{path:"/mediastream_video_test",name:"MediastreamVideoTest",component:Ie,meta:{title:"Mediastreamを使ったカメラデバイスの表示確認"}}],Se=new te["a"]({routes:ke}),De=Se,Re=a("2f62");n["a"].use(Re["a"]);var Ve=De.getRoutes(),Te=new Re["a"].Store({state:{showGlobalMenuDrawer:!1},mutations:{switchGlobalMenuDrawer:function(e,t){e.showGlobalMenuDrawer=null==t?!e.showGlobalMenuDrawer:t}},actions:{},modules:{},getters:{routeList:function(){return Ve}}}),Le=a("f309"),$e=a("1902");n["a"].use(Le["a"]);var Ee=new Le["a"]({lang:{locales:{ja:$e["a"]},current:"ja"}});n["a"].config.productionTip=!1,n["a"].use(c.a,{id:"UA-36849335-1",router:De}),new n["a"]({router:De,store:Te,vuetify:Ee,render:function(e){return e(Z)}}).$mount("#app")},d7d2:function(e,t,a){"use strict";var n=a("da7a"),o=a.n(n);a.d(t,"default",(function(){return o.a}))},da7a:function(e,t,a){e.exports={fixed:"MediastreamVideoTest_fixed_xlquI",video:"MediastreamVideoTest_video_1isHC",detect:"MediastreamVideoTest_detect_2UCoj",infos:"MediastreamVideoTest_infos_3_Aol"}}});
//# sourceMappingURL=app.b340805b.js.map