module.exports=function(t){var e={},n={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.e=function(e){if(0!==n[e]){var o=require("./"+{1:"8bc44caaa87c8270f56a",2:"930e039dd7b1bfb22bf5",3:"6bdee4d7b304aa0d8752",4:"67882dd0d1500c4ef848",5:"f5f456e713d1ec8a4302"}[e]+".js"),r=o.modules,c=o.ids;for(var l in r)t[l]=r[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},o.p="/_nuxt/",o.oe=function(t){process.nextTick(function(){throw t})},o(o.s=14)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function o(t,e,n,o,r,c,l,d){var f,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),o&&(h.functional=!0),c&&(h._scopeId="data-v-"+c),l?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},h._ssrRegister=f):r&&(f=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(h.functional){h._injectStyles=f;var m=h.render;h.render=function(t,e){return f.call(e),m(t,e)}}else{var v=h.beforeCreate;h.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:h}}n.d(e,"a",function(){return o})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var o=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),r=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(r).concat([o]).join("\n")}var c;return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(i=0;i<t.length;i++){var c=t[i];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(t,e,n){"use strict";function o(t,e,n,o){if(o||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),o){o.hasOwnProperty("styles")||(Object.defineProperty(o,"styles",{enumerable:!0,get:function(){return r(o._styles)}}),o._renderStyles=r);var c=o._styles||(o._styles={});e=function(t,e){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],c=r[0],l={id:t+":"+i,css:r[1],media:r[2],sourceMap:r[3]};o[c]?o[c].parts.push(l):n.push(o[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,o=0;o<n.length;o++){var r=n[o],c=r.media||"default",style=t[c];style?style.ids.indexOf(r.id)<0&&(style.ids.push(r.id),style.css+="\n"+r.css):t[c]={ids:[r.id],css:r.css,media:r.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,o=0;o<n.length;o++){var r=n[o];t[r.id]={ids:[r.id],css:r.css,media:r.media}}}(c,e)}}function r(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return o})},function(t,e,n){var content=n(18);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("b675d82e",content,!0,t)}},function(t,e,n){var content=n(20);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("17cfdfa9",content,!0,t)}},function(t,e,n){var content=n(25);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("5525543c",content,!0,t)}},function(t,e,n){var content=n(27);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("0314a2d4",content,!0,t)}},function(t,e,n){var content=n(29);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("475e4c6a",content,!0,t)}},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){t.exports=require("axios")},function(t,e,n){t.exports=n(31)},function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=15},function(t,e){t.exports=require("core-js/modules/es6.array.sort")},function(t,e,n){"use strict";n.r(e);var o=n(4),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},function(t,e,n){"use strict";n.r(e);var o=n(5),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},function(t,e,n){var content=n(22);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(3).default("38ec6ca4",content,!0)},function(t,e,n){(e=t.exports=n(2)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,500,600,700);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Niramit:300,400,500,600,700);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Merriweather:100,300,400,700,900);",""]),e.push([t.i,"html{font-family:Niramit,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background:#f2f2f2}*,:after,:before{box-sizing:border-box;margin:0}body{font-weight:400;font-style:normal;font-size:16px;line-height:1.5em;letter-spacing:.02em;text-rendering:optimizeLegibility;color:#081b33}a{color:#e54a35;text-decoration:none;transition:all .4s ease-out}a:hover{color:#081b33}h1,h2,h4{font-family:Merriweather,times,serif;font-size:32px}h1,h2,h3,h4{font-weight:400;line-height:1.6em}h3{font-family:Niramit,times,serif;color:#e54a35;font-size:14px}h4{font-size:19px;font-weight:300}.hero{text-align:center;padding:3.3vw 8vw;margin-bottom:70px}.hero h1{font-family:Merriweather,times,serif;font-weight:300;font-size:4.5vw;line-height:1.1em}.hero h4{font-family:Niramit,Helvetica Neue,Arial,sans-serif;color:#e54a35;margin-bottom:1rem;font-size:13px;font-weight:700;letter-spacing:2px}.sidebar h2,.sidebar h3,.sidebar h4{margin-bottom:1.6rem}.site-container{min-height:100vh;display:flex;flex-direction:column;justify-content:space-between}.site-container .main{flex:1;padding-bottom:130px}.section{padding-left:8vw;padding-right:8vw;display:flex;justify-content:space-between}.content{width:100%}.content h3{color:#081b33;font-family:Merriweather,times,serif;font-size:40px;font-weight:300}.content-left{flex-basis:60%;margin-right:2rem}.content-full h1,.content-full h2,.content-full h3,.content-full h4,.content-full h5,.content-full p,.content h1,.content h2,.content h3,.content h4,.content h5,.content p,.one-centered-column h1,.one-centered-column h2,.one-centered-column h3,.one-centered-column h4,.one-centered-column h5,.one-centered-column p{margin-bottom:2rem;line-height:1.6em}.content-full h5{color:#e54a35;margin-bottom:1rem;text-transform:uppercase;font-size:15px;letter-spacing:1px}.sidebar{flex-basis:30%}.row{display:flex;flex-basis:100%;justify-content:space-between;margin:auto auto 20px}.row>*{width:100%}.column-1-2,.column-1-3,.column-2-3,.column-2-4,.column-3-4{flex-basis:50%;margin:0 20px}.column-1-2:first-child,.column-1-3:first-child,.column-2-3:first-child,.column-2-4:first-child,.column-3-4:first-child{margin-left:0}.column-1-2:last-child,.column-1-3:last-child,.column-2-3:last-child,.column-2-4:last-child,.column-3-4:last-child{margin-right:0}.column-1-3{flex-basis:33%}.column-2-3{flex-basis:66%}.column-1-4{flex-basis:25%}.column-3-4{flex-basis:75%}.button{display:inline-block;background:#081b33;color:#fff;padding:21px 34px;text-transform:uppercase;font-family:Barlow Condensed,Helvetica Neue,Arial,sans-serif;font-size:17px;font-weight:500;letter-spacing:2px;border:2px solid #081b33}.button.button-outline,.button:hover{color:#081b33;background:transparent}.button.button-outline:hover{color:#fff;background:#081b33}.img-responsive{max-width:100%}.mb-6{margin-bottom:6vw}.text-center{text-align:center}.border-top{border-top:1px solid #c4c4c4}.border-bottom{border-bottom:1px solid #c4c4c4}.content-full{width:100%}.column-3{display:flex}.column-3 .column{border-top:1px solid rgba(8,27,51,.3);flex:1;padding:2rem 0 0;margin:2rem 1rem 0}.column-3 .column:first-child{margin-left:0}.column-3 .column:last-child{margin-right:0}.one-centered-column{max-width:55vw;margin:auto}.hero-second-level{background-size:cover;background-position:50%;text-align:center;padding:6vw 8vw;margin-bottom:70px}.hero-second-level h1{font-family:Merriweather,times,serif;font-weight:300;font-size:4.5vw;line-height:1.1em}.hero-second-level h4{font-family:Niramit,Helvetica Neue,Arial,sans-serif;color:#e54a35;margin-bottom:1rem;font-size:13px;font-weight:700;letter-spacing:2px}.media{border-bottom:1px solid #c4c4c4;padding:20px 0}.media:last-child{border-bottom:none}.media h5{font-family:Merriweather,times,serif;font-weight:300;font-size:20px;line-height:1.1em;margin-bottom:1em}.media h6{font-family:Niramit,Helvetica Neue,Arial,sans-serif;color:#e54a35;margin-bottom:1rem;font-size:13px;font-weight:700;letter-spacing:1px}.media p{font-size:14px;margin-bottom:1.5em}.details ul{padding-left:1.5em}.details li,.details p{font-size:13px}",""])},function(t,e,n){t.exports=n.p+"img/abab65d.png"},function(t,e,n){"use strict";n.r(e);var o=n(6),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".header[data-v-6e4280a4]{padding:110px 8vw;display:flex;justify-content:space-between}.nav-item-phone[data-v-6e4280a4]{font-size:14px;font-weight:600;flex-basis:35%}.logo-image[data-v-6e4280a4]{background:transparent}.site-navigation[data-v-6e4280a4]{display:flex;flex-basis:35%;align-content:flex-end;align-items:right;justify-content:space-between;margin-bottom:0}.nav-item[data-v-6e4280a4]:last-child{margin-right:0}.nav-item a[data-v-6e4280a4]{color:#081b33;font-weight:600;font-size:14px;text-transform:lowercase;transition:all .4s ease-out;margin-bottom:0}.nav-item a[data-v-6e4280a4]:hover{color:#e54a35}@media (max-width:1220px){.nav-item-phone[data-v-6e4280a4],.site-navigation[data-v-6e4280a4]{flex-basis:40%}}@media (max-width:1060px){.nav-item-phone[data-v-6e4280a4],.site-navigation[data-v-6e4280a4]{flex-basis:45%}}@media (max-width:960px){.header[data-v-6e4280a4]{flex-direction:column;text-align:center}.nav-item-phone[data-v-6e4280a4],.site-navigation[data-v-6e4280a4]{flex-basis:45%}.logo-image[data-v-6e4280a4]{order:1;margin-bottom:40px}.site-navigation[data-v-6e4280a4]{order:2}.nav-item-phone[data-v-6e4280a4]{order:3;margin-top:40px}}@media (max-width:470px){.site-navigation[data-v-6e4280a4]{flex-direction:column}.nav-item[data-v-6e4280a4]{margin:1rem 0}.nav-item a[data-v-6e4280a4]{font-size:2rem}.logo-image img[data-v-6e4280a4]{width:106px;height:70px}}",""])},function(t,e,n){"use strict";n.r(e);var o=n(7),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".footer[data-v-30eb8bf2]{border-top:1px solid hsla(0,0%,50.2%,.3);padding:50px 8vw 180px;display:flex;justify-content:space-between}.footer-left[data-v-30eb8bf2],.footer-right[data-v-30eb8bf2]{max-width:325px}.footer-right[data-v-30eb8bf2]{text-align:right}.footer-nav[data-v-30eb8bf2]{margin-bottom:30px}.footer-nav a[data-v-30eb8bf2]{border-right:1px solid #081b33;padding:0 .5rem;font-size:14px;line-height:16px;font-weight:500;display:inline-block}.footer-nav a[data-v-30eb8bf2]:first-child{padding-left:0}.footer-nav a[data-v-30eb8bf2]:last-child{border:0;margin-right:0}.footer-nav a[data-v-30eb8bf2]:hover{color:#081b33}@media (max-width:740px){.footer[data-v-30eb8bf2]{flex-direction:column;text-align:center}.footer-left[data-v-30eb8bf2],.footer-right[data-v-30eb8bf2]{max-width:100%}.footer-right[data-v-30eb8bf2]{text-align:center;margin-top:40px}}",""])},function(t,e,n){"use strict";n.r(e);var o=n(8),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".site-container[data-v-71e437cd]{width:auto;max-width:100%}",""])},function(t,e){t.exports=require("debug")},function(t,e,n){"use strict";n.r(e);var o=n(10),r=n(0),c=n.n(r);const l=n(15),d=l.keys();function f(t){const e=l(t);return e.default||e}const h={};for(const t of d){h[t.replace(/^\.\//,"").replace(/\.(js|mjs|ts)$/,"")]=f(t)}var m=h;n(16);const v=()=>({});function x(t){return t.then(t=>t.default||t)}function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function _(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).map(o=>(e&&e.push(n),t.components[o]))))}function w(t){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((o,r)=>(t.components[r]?o.push(e(t.components[r],t.instances[r],t,r,n)):delete t.components[r],o),[])))}(t,async(t,e,n,o)=>("function"!=typeof t||t.options||(t=await t()),n.components[o]=y(t),n.components[o])))}async function C(t){return await w(t),{...t,meta:_(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function k(t,e){t.context||(t.context={isStatic:!0,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),t.context.redirect=((e,path,n)=>{if(!e)return;t.context._redirected=!0;let o=typeof path;"number"==typeof e||"undefined"!==o&&"object"!==o||(n=path||{},o=typeof(path=e),e=302),"object"===o&&(path=t.router.resolve(path).href),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));let r,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&(path=c[0],r=c[1]);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=r?"#"+r:""}(path,n),t.context.next({path:path,status:e}))}),t.context.beforeNuxtRender=(t=>e.beforeRenderFns.push(t))),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!!e.isHMR,e.route&&(t.context.route=await C(e.route)),t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{},e.from&&(t.context.from=await C(e.from))}function j(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():N(t[0],e).then(()=>j(t.slice(1),e))}function N(t,e){let n;return(n=2===t.length?new Promise(n=>{t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function $(t,e){return function(t){const e=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,o){let path="";const data=n||{},r=o||{},c=r.pretty?S:encodeURIComponent;for(let i=0;i<t.length;i++){const n=t[i];if("string"==typeof n){path+=n;continue}const o=data[n.name||"pathMatch"];let r;if(null==o){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(o)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(o)+"`");if(0===o.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let t=0;t<o.length;t++){if(r=c(o[t]),!e[i].test(r))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(r)+"`");path+=(0===t?n.prefix:n.delimiter)+r}}else{if(r=n.asterisk?encodeURI(o).replace(/[?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase()):c(o),!e[i].test(r))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+r+'"');path+=n.prefix+r}}return path}}(function(t,e){const n=[];let o=0,r=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=E.exec(t));){const e=l[0],d=l[1],f=l.index;if(path+=t.slice(r,f),r=f+e.length,d){path+=d[1];continue}const h=t[r],m=l[2],v=l[3],x=l[4],y=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=h&&h!==m,k="+"===_||"*"===_,j="?"===_||"*"===_,N=l[2]||c,pattern=x||y;n.push({name:v||o++,prefix:m||"",delimiter:N,optional:j,repeat:k,partial:C,asterisk:!!w,pattern:pattern?T(pattern):w?".*":"[^"+O(N)+"]+?"})}r<t.length&&(path+=t.substr(r));path&&n.push(path);return n}(t,e))}const E=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function S(t){return encodeURI(t).replace(/[\/?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function O(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}var A=n(11),R=n.n(A),z=n(9),P=n.n(z);const M=()=>x(n.e(1).then(n.bind(null,48))),L=()=>x(n.e(2).then(n.bind(null,49))),U=()=>x(n.e(3).then(n.bind(null,45))),D=()=>x(n.e(5).then(n.bind(null,47))),B=()=>x(n.e(4).then(n.bind(null,46)));c.a.use(P.a);const H=function(t,e,n){let o=!1;return t.matched.length<2&&t.matched.every(t=>!1!==t.components.default.options.scrollToTop)?o={x:0,y:0}:t.matched.some(t=>t.components.default.options.scrollToTop)&&(o={x:0,y:0}),n&&(o=n),new Promise(e=>{window.$nuxt.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(o={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(o)})})};var F=n(12),I={...n.n(F).a,name:"NoSsr"},K={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const o=e,r=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=r[l]||c,f={};V.forEach(t=>{void 0!==d[t]&&(f[t]=d[t])});const h={};J.forEach(t=>{"function"==typeof d[t]&&(h[t]=d[t].bind(o))});const m=h.beforeEnter;h.beforeEnter=(t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(o,t)});let v=[t("router-view",data)];return n.keepAlive&&(v=[t("keep-alive",{props:n.keepAliveProps},v)]),t("transition",{props:f,on:h},v)}};const V=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],J=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var X={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},W=n(1);var Q=Object(W.a)(X,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])},[],!1,function(t){var e=n(17);e.__inject__&&e.__inject__(t)},null,"53a22528").exports,G={name:"Nuxt",components:{NuxtChild:K,NuxtError:Q},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||$(this.$route.matched[0].path)(this.$route.params);const t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},Y={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var Z=Object(W.a)(Y,void 0,void 0,!1,function(t){var e=n(19);e.__inject__&&e.__inject__(t)},null,"7c803fa0").exports;n(21);var tt={components:{Header:Object(W.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[t._ssrNode('<div class="nav-item-phone" data-v-6e4280a4>',"</div>",[o("nuxt-link",{attrs:{to:"/contact"}},[o("span",[t._v("☎ (850) 764-3189")])])],1),t._ssrNode(" "),t._ssrNode('<div class="logo-image" data-v-6e4280a4>',"</div>",[o("nuxt-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n(23),width:"40"}})])],1),t._ssrNode(" "),t._ssrNode('<nav role="navigation" class="site-navigation" data-v-6e4280a4>',"</nav>",[t._ssrNode('<div class="nav-item collection homepage active" data-v-6e4280a4>',"</div>",[o("nuxt-link",{staticClass:"nav-item-page",attrs:{to:"/"}},[o("span",[t._v("Home")])])],1),t._ssrNode(" "),t._ssrNode('<div class="nav-item collection" data-v-6e4280a4>',"</div>",[o("nuxt-link",{staticClass:"nav-item-blog",attrs:{to:"/blog"}},[o("span",[t._v("blog")])])],1),t._ssrNode(' <div class="nav-item external" data-v-6e4280a4><a href="https://calendly.com/patrick-lu/phone-chat" target="_blank" data-v-6e4280a4><span data-v-6e4280a4>get in touch</span></a></div> '),t._ssrNode('<div class="nav-item collection" data-v-6e4280a4>',"</div>",[o("nuxt-link",{staticClass:"nav-item-page",attrs:{to:"/about"}},[o("span",[t._v("About")])])],1),t._ssrNode(" "),t._ssrNode('<div class="nav-item collection" data-v-6e4280a4>',"</div>",[o("nuxt-link",{staticClass:"nav-item-page",attrs:{to:"/portfolio"}},[o("span",[t._v("Portfolio")])])],1),t._ssrNode(" "),t._ssrNode('<div class="nav-item collection" data-v-6e4280a4>',"</div>",[o("nuxt-link",{staticClass:"nav-item-page",attrs:{to:"/contact"}},[o("span",[t._v("Contact")])])],1)],2)],2)},[],!1,function(t){var e=n(24);e.__inject__&&e.__inject__(t)},"6e4280a4","60ccf079").exports,Footer:Object(W.a)({},function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"footer"},[this._ssrNode('<div class="footer-left" data-v-30eb8bf2><div class="footer-nav" data-v-30eb8bf2><a href="/home" data-v-30eb8bf2>home</a> <a href="/about" data-v-30eb8bf2>about</a> <a href="/portfolio" data-v-30eb8bf2>portfolio</a> <a href="/contact" data-v-30eb8bf2>contact</a></div> <div class="footer-address" data-v-30eb8bf2><small data-v-30eb8bf2>(850) 764-3189</small> <small data-v-30eb8bf2>| patrick@quantfive.org</small> <br data-v-30eb8bf2> <small data-v-30eb8bf2>1810 Bonita Ave. Berkeley, CA 94709</small> <br data-v-30eb8bf2> <small data-v-30eb8bf2>development | startup advising</small></div></div> <div class="footer-right" data-v-30eb8bf2><small data-v-30eb8bf2>Quant Five is a boutique software development firm that develops software for some of the most innovative individuals and emerging companies in the tech and entertainment industries.</small></div>')])},[],!1,function(t){var e=n(26);e.__inject__&&e.__inject__(t)},"30eb8bf2","3f9a8c87").exports}};const et={_default:Object(W.a)(tt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"site-container"},[e("Header"),this._ssrNode(" "),this._ssrNode('<main class="main" data-v-71e437cd>',"</main>",[e("nuxt")],1),this._ssrNode(" "),e("Footer")],2)},[],!1,function(t){var e=n(28);e.__inject__&&e.__inject__(t)},"71e437cd","467994a4").exports};var nt={head:{title:"0 to launch in 3 months",meta:[{charset:"utf-8"},{robots:"noindex, nofollow"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Our site is a software development site where people come to us to hire us for projects."}],link:[{rel:"icon",type:"image/x-icon",href:"https://static1.squarespace.com/static/590f9f02ebbd1a0ad377f7ba/t/5910ebe28419c250a7e121d9/favicon.ico"}],style:[],script:[]},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),o=t(this.layout||"nuxt"),r=t("div",{domProps:{id:"__layout"},key:this.layoutName},[o]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[r]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&et["_"+t]||(t="default"),this.layoutName=t,this.layout=et["_"+t],this.layout},loadLayout:t=>(t&&et["_"+t]||(t="default"),Promise.resolve(et["_"+t]))},components:{NuxtLoading:Z}},ot=n(13),at=n.n(ot);const it={setHeader(t,e,n="common"){for(let o of Array.isArray(n)?n:[n]){if(!e)return void delete this.defaults.headers[o][t];this.defaults.headers[o][t]=e}},setToken(t,e,n="common"){const o=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",o,n)},onRequest(t){this.interceptors.request.use(e=>t(e)||e)},onResponse(t){this.interceptors.response.use(e=>t(e)||e)},onRequestError(t){this.interceptors.request.use(void 0,e=>t(e)||Promise.reject(e))},onResponseError(t){this.interceptors.response.use(void 0,e=>t(e)||Promise.reject(e))},onError(t){this.onRequestError(t),this.onResponseError(t)}};for(let t of["request","delete","get","head","options","post","put","patch"])it["$"+t]=function(){return this[t].apply(this,arguments).then(t=>t&&t.data)};var st=(t,e)=>{const n={baseURL:process.env._AXIOS_BASE_URL_||"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"],n.headers.common["Accept-Encoding"]="gzip, deflate";const o=at.a.create(n);(t=>{for(let e in it)t[e]=it[e].bind(t)})(o),t.$axios=o,e("axios",o)};c.a.component(I.name,I),c.a.component(K.name,K),c.a.component("NChild",K),c.a.component(G.name,G),c.a.use(R.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const ct={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function lt(t){const e=await new P.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:H,routes:[{path:"/about",component:M,name:"about"},{path:"/blog",component:L,name:"blog"},{path:"/contact",component:U,name:"contact"},{path:"/portfolio",component:D,name:"portfolio"},{path:"/",component:B,name:"index"}],fallback:!1}),n={router:e,nuxt:{defaultTransition:ct,transitions:[ct],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},ct,{name:t}):Object.assign({},ct,t):ct),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,n.context._errored=!!e,e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const o=this.nuxt||this.$options.nuxt;return o.dateErr=Date.now(),o.err=e,t&&(t.nuxt.error=e),e}},...nt},o=t?t.next:t=>n.router.push(t);let r;if(t)r=e.resolve(t.url).route;else{const path=function(base,t){let path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}(e.options.base);r=e.resolve(path).route}await k(n,{route:r,next:o,error:n.nuxt.error.bind(n),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0});return"function"==typeof st&&await st(n.context,function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");n[t="$"+t]=e;const o="__nuxt_"+t+"_installed__";c.a[o]||(c.a[o]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))}),t&&t.url&&await new Promise((o,r)=>{e.push(t.url,o,()=>{const r=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,n.context.route=await C(e),n.context.params=e.params||{},n.context.query=e.query||{},r(),o()})})}),{app:n,router:e}}var ut={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(ut.name,ut),c.a.component("NLink",ut),n(30)("nuxt:render").color=4;const pt=()=>new c.a({render:t=>t("div")}),ft=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(o.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=(async t=>{t.redirected=!1,t.next=ft(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,serverRendered:!0};const{app:e,router:n}=await lt(t),o=new c.a(e);t.meta=o.$meta(),t.asyncData={};const r=async()=>{await Promise.all(t.beforeRenderFns.map(e=>N(e,{Components:f,nuxtState:t.nuxt})))},l=async()=>{const n="function"==typeof Q.layout?Q.layout(e.context):Q.layout;return t.nuxt.layout=n||"default",await o.loadLayout(n),o.setLayout(n),await r(),o},d=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),l()),f=_(n.match(t.url));let h=[];if(h=h.map(t=>"function"==typeof t?t:("function"!=typeof m[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),m[t])),await j(h,e.context),t.redirected)return pt();if(t.nuxt.error)return l();let x=f.length?f[0].options.layout:Q.layout;if("function"==typeof x&&(x=x(e.context)),await o.loadLayout(x),t.nuxt.error)return l();if(x=o.setLayout(x),t.nuxt.layout=o.layoutName,h=[],(x=y(x)).options.middleware&&(h=h.concat(x.options.middleware)),f.forEach(t=>{t.options.middleware&&(h=h.concat(t.options.middleware))}),h=h.map(t=>"function"==typeof t?t:("function"!=typeof m[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),m[t])),await j(h,e.context),t.redirected)return pt();if(t.nuxt.error)return l();let w=!0;try{for(const t of f)if("function"==typeof t.options.validate&&!(w=await t.options.validate(e.context)))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),l()}if(!w)return t._generate&&(t.nuxt.serverRendered=!1),d();if(!f.length)return d();const C=await Promise.all(f.map(n=>{const o=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const r=N(n.options.asyncData,e.context);r.then(e=>(t.asyncData[n.cid]=e,function(t,e){const n=t.options.data||v;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){const data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}(n),e)),o.push(r)}else o.push(null);return n.options.fetch?o.push(n.options.fetch(e.context)):o.push(null),Promise.all(o)}));return t.nuxt.data=C.map(t=>t[0]||{}),t.redirected?pt():t.nuxt.error?l():(await r(),o)})}]);
//# sourceMappingURL=server.js.map