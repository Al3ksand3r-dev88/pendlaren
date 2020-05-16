(function(t){function e(e){for(var o,i,c=e[0],l=e[1],u=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4486:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("5c0b"),n("2877")),c={},l=Object(i["a"])(c,a,r,!1,null,null,null),u=l.exports,s=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("form",{attrs:{spellcheck:!1},on:{submit:function(e){return e.preventDefault(),t.searchTravel(e)}}},[n("div",{staticClass:"form-control"},[n("label",{attrs:{for:"arrival"}},[t._v("Res till")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.to,expression:"input.to"}],attrs:{type:"text",id:"arrival",placeholder:"Sök station"},domProps:{value:t.input.to},on:{click:function(e){t.input.to=""},input:function(e){e.target.composing||t.$set(t.input,"to",e.target.value)}}})]),n("button",[t._v("Sök")])]),t.result?n("form",{class:{"animate__animated animate__fadeIn":t.result},attrs:{id:"list-stations"},on:{submit:function(e){return e.preventDefault(),t.getTimeTable(e)}}},[n("p",[t._v("Välj station:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedStation,expression:"selectedStation"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedStation=e.target.multiple?n:n[0]}}},[n("option",{style:{background:"#eee"},attrs:{disabled:""},domProps:{selected:!1}},[t._v("Välj station")]),t._l(t.result.StopLocation,(function(e,o){return n("option",{key:o,domProps:{value:e}},[t._v(t._s(e.name))])}))],2),n("button",{attrs:{disabled:t.isLoading}},[t._v(" "+t._s(t.isLoading?"laddar...":"Visa avgångar")+" ")])]):t._e(),t.timeTable?n("article",{class:{"animate__animated animate__fadeIn":t.timeTable},attrs:{id:"timeTable"}},[n("p",{attrs:{id:"heading"}},[t._v("Från "+t._s(t.timeTable.Departure[0].stop))]),n("ul",t._l(t.timeTable.Departure,(function(e,o){return n("li",{key:o},[n("p",[t._v(t._s(e.date))]),n("div",[n("p",[t._v(t._s(e.name))]),n("p",[t._v(t._s(e.time))])])])})),0)]):t._e()])},f=[],p=n("5530"),v=n("2f62"),m={name:"Home",data:function(){return{input:{to:""},selectedStation:"Välj station"}},props:["geoLocation"],methods:{searchTravel:function(){""!=this.input.to&&this.$store.dispatch("searchTravel",this.input.to)},getTimeTable:function(){"Välj station"!=this.selectedStation&&this.$store.dispatch("getTimeTable",this.selectedStation)}},computed:Object(p["a"])({},Object(v["b"])(["result","timeTable","isLoading"]))},b=m,g=(n("ee14"),Object(i["a"])(b,d,f,!1,null,"390c4b36",null)),_=g.exports,h=(n("99af"),n("bc3a")),T=n.n(h),y=T.a.create({baseURL:"https://api.resrobot.se"}),S={getSearchResult:function(t){var e="6507dfef-eeaa-471b-8ee7-639a4c37ebbf";return y.get("/v2/location.name?key=".concat(e,"&input=").concat(t,"&format=json"))},getLocation:function(t){var e=t.lat,n=t.long,o="6507dfef-eeaa-471b-8ee7-639a4c37ebbf";return y.get("/v2/location.nearbystops?key=".concat(o,"&originCoordLat=").concat(e,"&originCoordLong=").concat(n,"&format=json"))},getTimeTable:function(t){var e=t.id,n="84c5aaec-b571-4fd3-b4ca-36f3f8975283";return y.get("/v2/departureBoard?key=".concat(n,"&id=").concat(e,"&maxJourneys=5&format=json"))}};o["a"].use(v["a"]);var L=new v["a"].Store({state:{result:null,location:null,timeTable:null,isLoading:!1},mutations:{SET_TRAVEL_DATA:function(t,e){t.result=e},SET_LOCATION:function(t,e){t.location=e},SET_TIME_TABLE:function(t,e){t.timeTable=e},SET_LOADING:function(t){t.isLoading=!t.isLoading}},actions:{searchTravel:function(t,e){var n=t.commit;return S.getSearchResult(e).then((function(t){var e=t.data;n("SET_TRAVEL_DATA",e)}))},getLocation:function(t,e){var n=t.commit,o=e.lat,a=e.long;return S.getLocation({lat:o,long:a}).then((function(t){var e=t.data;n("SET_LOCATION",e)}))},getTimeTable:function(t,e){var n=t.commit;return n("SET_LOADING"),S.getTimeTable({id:e.id}).then((function(t){var e=t.data;n("SET_TIME_TABLE",e),n("SET_LOADING")}))}},modules:{}});o["a"].use(s["a"]);var O=[{path:"/",name:"Home",props:!0,component:_,beforeEnter:function(t,e,n){function o(e){L.dispatch("getLocation",{lat:e.coords.latitude,long:e.coords.longitude}).then((function(){t.params.geoLocation={lat:e.coords.latitude,long:e.coords.longitude},n()}))}function a(){alert("Geolocation does not work.")}navigator.geolocation?navigator.geolocation.getCurrentPosition(o,a):alert("Geolocation is not supported by your browser.")}}],j=new s["a"]({mode:"history",base:"/",routes:O}),w=j;n("77ed");o["a"].config.productionTip=!1,new o["a"]({router:w,store:L,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"9c0c":function(t,e,n){},ee14:function(t,e,n){"use strict";var o=n("4486"),a=n.n(o);a.a}});
//# sourceMappingURL=app.04afd3b1.js.map