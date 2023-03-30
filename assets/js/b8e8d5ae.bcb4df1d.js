/*! For license information please see b8e8d5ae.bcb4df1d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[706823],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},353464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});n(827378);var r=n(603905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"backends",title:"Backend Instances",sidebar_label:"Backend",description:"Backend instances"},s=void 0,l={unversionedId:"backend-system/architecture/backends",id:"backend-system/architecture/backends",title:"Backend Instances",description:"Backend instances",source:"@site/../docs/backend-system/architecture/02-backends.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/backends",permalink:"/docs/backend-system/architecture/backends",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/02-backends.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"backends",title:"Backend Instances",sidebar_label:"Backend",description:"Backend instances"}},u={},d=[{value:"The Backend Instance",id:"the-backend-instance",level:2}],p={toc:d};function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."))),(0,r.kt)("h2",{id:"the-backend-instance"},"The Backend Instance"),(0,r.kt)("p",null,"This is the main entry point for creating a backend. It does not have any functionality in and of itself, but is simply responsible for wiring things together.\nIt is up to you to decide how many different backends you want to deploy. You can have all features in a single one, or split things out into multiple smaller deployments."),(0,r.kt)("p",null,"Below is a simple example of a backend that installs only the catalog plugin and starts it up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createBackend } from '@backstage/backend-defaults';\nimport { catalogPlugin } from '@backstage/plugin-catalog-backend';\n\n// Create your backend instance\nconst backend = createBackend();\n\n// Install all desired features\nbackend.add(catalogPlugin());\n\n// Start up the backend\nawait backend.start();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createBackend")," is responsible for creating your backend instance, and wiring up all the services that you have provided. It deals with creating default implementations of all the ",(0,r.kt)("a",{parentName:"p",href:"/docs/backend-system/core-services/index"},"core services")," that are used by the plugins, and also provides a way to override the default implementations with your own. You can read more about creating services and overriding them in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/backend-system/building-backends/index"},"building backends docs"),"."),(0,r.kt)("p",null,"The backend instance has the ability to add features to the backend which are done using the ",(0,r.kt)("inlineCode",{parentName:"p"},".add")," method. Features are either plugins or modules, and you can read more about them in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/backend-system/building-plugins-and-modules/index"},"building plugins and modules docs"),". By default, a backend instance has no default features, and the services are responsible for wiring everything together."),(0,r.kt)("p",null,"At a high level, when you call ",(0,r.kt)("inlineCode",{parentName:"p"},"createBackend"),", it will create a new backend instance, which has a registry of all the services that are currently registered, and by adding features to the backend instance and calling the ",(0,r.kt)("inlineCode",{parentName:"p"},".start()")," method it will ensure that all the dependencies are wired up correctly and the ",(0,r.kt)("inlineCode",{parentName:"p"},"registerInit")," methods are called in the correct order."),(0,r.kt)("p",null,"Underneath the hood, ",(0,r.kt)("inlineCode",{parentName:"p"},"createBackend")," calls ",(0,r.kt)("inlineCode",{parentName:"p"},"createSpecializedBackend")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/backend-app-api")," which is responsible for actually creating the backend instance, but with no services or no features. You can think of ",(0,r.kt)("inlineCode",{parentName:"p"},"createBackend")," more of a 'batteries included' approach, and ",(0,r.kt)("inlineCode",{parentName:"p"},"createSpecializedBackend")," a little more low level."),(0,r.kt)("p",null,"As mentioned previously there's also the ability to create multiple of these backends in your project so that you can split apart your backend and deploy different backends that can scale independently of each other. For instance you might choose to deploy a backend with only the catalog plugin enabled, and one with just the scaffolder plugin enabled. We've provided some tools to be able to share services and defaults across your backend system, and you can find out more about that in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/backend-system/building-backends/index#shared-environments"},"shared environments docs"),"."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var c,i,s=a(e),l=1;l<arguments.length;l++){for(var u in c=Object(arguments[l]))n.call(c,u)&&(s[u]=c[u]);if(t){i=t(c);for(var d=0;d<i.length;d++)r.call(c,i[d])&&(s[i[d]]=c[i[d]])}}return s}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var c=60109,i=60110,s=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),c=d("react.provider"),i=d("react.context"),s=d("react.forward_ref"),d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||b}function m(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var g=k.prototype=new m;g.constructor=k,r(g,h.prototype),g.isPureReactComponent=!0;var v={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)O.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case o:s=!0}}if(s)return c=c(s=e),e=""===r?"."+_(s,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),C(c,t,n,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),t.push(c)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+_(i=e[l],l);s+=C(i,t,n,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)s+=C(i=i.value,t,n,u=r+_(i,l++),c);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function N(e,t,n){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var B={current:null};function E(){var e=B.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);