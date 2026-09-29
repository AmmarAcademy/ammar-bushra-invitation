(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ga={exports:{}},ei={},$a={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),rc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),Ro=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Ro&&e[Ro]||e["@@iterator"],typeof e=="function"?e:null)}var Ha={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qa=Object.assign,Ya={};function on(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||Ha}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ka(){}Ka.prototype=on.prototype;function Il(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||Ha}var Bl=Il.prototype=new Ka;Bl.constructor=Il;Qa(Bl,on.prototype);Bl.isPureReactComponent=!0;var Mo=Array.isArray,Xa=Object.prototype.hasOwnProperty,Ul={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Xa.call(t,r)&&!Za.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Kn,type:e,key:l,ref:o,props:i,_owner:Ul.current}}function mc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ao=/\/+/g;function xi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):t.toString(36)}function yr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kn:case rc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+xi(o,0):r,Mo(i)?(n="",e!=null&&(n=e.replace(Ao,"$&/")+"/"),yr(i,t,n,"",function(f){return f})):i!=null&&(Vl(i)&&(i=mc(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ao,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Mo(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+xi(l,s);o+=yr(l,t,n,u,i)}else if(u=pc(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+xi(l,s++),o+=yr(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function tr(e,t,n){if(e==null)return e;var r=[],i=0;return yr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},xr={transition:null},vc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Ul};function qa(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=on;R.Fragment=ic;R.Profiler=oc;R.PureComponent=Il;R.StrictMode=lc;R.Suspense=cc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vc;R.act=qa;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qa({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Ul.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Xa.call(t,u)&&!Za.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Kn,type:e.type,key:i,ref:l,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};R.createElement=Ja;R.createFactory=function(e){var t=Ja.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:uc,render:e}};R.isValidElement=Vl;R.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:gc}};R.memo=function(e,t){return{$$typeof:dc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};R.unstable_act=qa;R.useCallback=function(e,t){return ue.current.useCallback(e,t)};R.useContext=function(e){return ue.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};R.useEffect=function(e,t){return ue.current.useEffect(e,t)};R.useId=function(){return ue.current.useId()};R.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ue.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};R.useRef=function(e){return ue.current.useRef(e)};R.useState=function(e){return ue.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ue.current.useTransition()};R.version="18.3.1";$a.exports=R;var _=$a.exports;const yc=nc(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=_,wc=Symbol.for("react.element"),kc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,Ec=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jc={key:!0,ref:!0,__self:!0,__source:!0};function ba(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Sc.call(t,r)&&!jc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wc,type:e,key:l,ref:o,props:i,_owner:Ec.current}}ei.Fragment=kc;ei.jsx=ba;ei.jsxs=ba;Ga.exports=ei;var a=Ga.exports,Hi={},es={exports:{}},ke={},ts={exports:{}},ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,P){var L=j.length;j.push(P);e:for(;0<L;){var Q=L-1>>>1,J=j[Q];if(0<i(J,P))j[Q]=P,j[L]=J,L=Q;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var P=j[0],L=j.pop();if(L!==P){j[0]=L;e:for(var Q=0,J=j.length,bn=J>>>1;Q<bn;){var vt=2*(Q+1)-1,yi=j[vt],yt=vt+1,er=j[yt];if(0>i(yi,L))yt<J&&0>i(er,yi)?(j[Q]=er,j[yt]=L,Q=yt):(j[Q]=yi,j[vt]=L,Q=vt);else if(yt<J&&0>i(er,L))j[Q]=er,j[yt]=L,Q=yt;else break e}}return P}function i(j,P){var L=j.sortIndex-P.sortIndex;return L!==0?L:j.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],f=[],g=1,h=null,m=3,w=!1,S=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var P=n(f);P!==null;){if(P.callback===null)r(f);else if(P.startTime<=j)r(f),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(f)}}function v(j){if(x=!1,p(j),!S)if(n(u)!==null)S=!0,gi(k);else{var P=n(f);P!==null&&vi(v,P.startTime-j)}}function k(j,P){S=!1,x&&(x=!1,d(F),F=-1),w=!0;var L=m;try{for(p(P),h=n(u);h!==null&&(!(h.expirationTime>P)||j&&!ge());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,m=h.priorityLevel;var J=Q(h.expirationTime<=P);P=e.unstable_now(),typeof J=="function"?h.callback=J:h===n(u)&&r(u),p(P)}else r(u);h=n(u)}if(h!==null)var bn=!0;else{var vt=n(f);vt!==null&&vi(v,vt.startTime-P),bn=!1}return bn}finally{h=null,m=L,w=!1}}var C=!1,N=null,F=-1,I=5,D=-1;function ge(){return!(e.unstable_now()-D<I)}function z(){if(N!==null){var j=e.unstable_now();D=j;var P=!0;try{P=N(!0,j)}finally{P?un():(C=!1,N=null)}}else C=!1}var un;if(typeof c=="function")un=function(){c(z)};else if(typeof MessageChannel<"u"){var Do=new MessageChannel,tc=Do.port2;Do.port1.onmessage=z,un=function(){tc.postMessage(null)}}else un=function(){T(z,0)};function gi(j){N=j,C||(C=!0,un())}function vi(j,P){F=T(function(){j(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,gi(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var L=m;m=P;try{return j()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,P){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=m;m=j;try{return P()}finally{m=L}},e.unstable_scheduleCallback=function(j,P,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,j){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,j={id:g++,callback:P,priorityLevel:j,startTime:L,expirationTime:J,sortIndex:-1},L>Q?(j.sortIndex=L,t(f,j),n(u)===null&&j===n(f)&&(x?(d(F),F=-1):x=!0,vi(v,L-Q))):(j.sortIndex=J,t(u,j),S||w||(S=!0,gi(k))),j},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(j){var P=m;return function(){var L=m;m=P;try{return j.apply(this,arguments)}finally{m=L}}}})(ns);ts.exports=ns;var Cc=ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=_,we=Cc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rs=new Set,Ln={};function Lt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)rs.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qi=Object.prototype.hasOwnProperty,Fc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oo={},Io={};function zc(e){return Qi.call(Io,e)?!0:Qi.call(Oo,e)?!1:Fc.test(e)?Io[e]=!0:(Oo[e]=!0,!1)}function _c(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pc(e,t,n,r){if(t===null||typeof t>"u"||_c(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wl=/[\-:]([a-z])/g;function Gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wl,Gl);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wl,Gl);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wl,Gl);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function $l(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pc(t,n,i,r)&&(n=null),r||i===null?zc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Hl=Symbol.for("react.strict_mode"),Yi=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),ls=Symbol.for("react.context"),Ql=Symbol.for("react.forward_ref"),Ki=Symbol.for("react.suspense"),Xi=Symbol.for("react.suspense_list"),Yl=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),os=Symbol.for("react.offscreen"),Bo=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,wi;function yn(e){if(wi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wi=t&&t[1]||""}return`
`+wi+e}var ki=!1;function Si(e,t){if(!e||ki)return"";ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Lc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function Zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Rt:return"Portal";case Yi:return"Profiler";case Hl:return"StrictMode";case Ki:return"Suspense";case Xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ls:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case Ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yl:return t=e.displayName||null,t!==null?t:Zi(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zi(e(t))}catch{}}return null}function Tc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zi(t);case 8:return t===Hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function as(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=as(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Dc(e))}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=as(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function us(e,t){t=t.checked,t!=null&&$l(e,"checked",t,!1)}function qi(e,t){us(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bi(e,t.type,n):t.hasOwnProperty("defaultValue")&&bi(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bi(e,t,n){(t!=="number"||Pr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function el(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(xn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function cs(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ds(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,fs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Rc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function ps(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function ms(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ps(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Mc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,t){if(t){if(Mc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function Kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Yt=null,Kt=null;function $o(e){if(e=Jn(e)){if(typeof ll!="function")throw Error(y(280));var t=e.stateNode;t&&(t=li(t),ll(e.stateNode,e.type,t))}}function hs(e){Yt?Kt?Kt.push(e):Kt=[e]:Yt=e}function gs(){if(Yt){var e=Yt,t=Kt;if(Kt=Yt=null,$o(e),t)for(e=0;e<t.length;e++)$o(t[e])}}function vs(e,t){return e(t)}function ys(){}var Ei=!1;function xs(e,t,n){if(Ei)return e(t,n);Ei=!0;try{return vs(e,t,n)}finally{Ei=!1,(Yt!==null||Kt!==null)&&(ys(),gs())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=li(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ol=!1;if(Qe)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){ol=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{ol=!1}function Ac(e,t,n,r,i,l,o,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var En=!1,Lr=null,Tr=!1,al=null,Oc={onError:function(e){En=!0,Lr=e}};function Ic(e,t,n,r,i,l,o,s,u){En=!1,Lr=null,Ac.apply(Oc,arguments)}function Bc(e,t,n,r,i,l,o,s,u){if(Ic.apply(this,arguments),En){if(En){var f=Lr;En=!1,Lr=null}else throw Error(y(198));Tr||(Tr=!0,al=f)}}function Tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ws(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ho(e){if(Tt(e)!==e)throw Error(y(188))}function Uc(e){var t=e.alternate;if(!t){if(t=Tt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Ho(i),e;if(l===r)return Ho(i),t;l=l.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function ks(e){return e=Uc(e),e!==null?Ss(e):null}function Ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ss(e);if(t!==null)return t;e=e.sibling}return null}var Es=we.unstable_scheduleCallback,Qo=we.unstable_cancelCallback,Vc=we.unstable_shouldYield,Wc=we.unstable_requestPaint,Y=we.unstable_now,Gc=we.unstable_getCurrentPriorityLevel,Xl=we.unstable_ImmediatePriority,js=we.unstable_UserBlockingPriority,Dr=we.unstable_NormalPriority,$c=we.unstable_LowPriority,Cs=we.unstable_IdlePriority,ti=null,Be=null;function Hc(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(ti,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Kc,Qc=Math.log,Yc=Math.LN2;function Kc(e){return e>>>=0,e===0?32:31-(Qc(e)/Yc|0)|0}var lr=64,or=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=wn(s):(l&=o,l!==0&&(r=wn(l)))}else o=n&~i,o!==0?r=wn(o):l!==0&&(r=wn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),i=1<<n,r|=e[n],t&=~i;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-De(l),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=Xc(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ns(){var e=lr;return lr<<=1,!(lr&4194240)&&(lr=64),e}function ji(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Jc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function Fs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zs,Jl,_s,Ps,Ls,ul=!1,ar=[],it=null,lt=null,ot=null,Rn=new Map,Mn=new Map,et=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yo(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function fn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Jn(t),t!==null&&Jl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bc(e,t,n,r,i){switch(t){case"focusin":return it=fn(it,e,t,n,r,i),!0;case"dragenter":return lt=fn(lt,e,t,n,r,i),!0;case"mouseover":return ot=fn(ot,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Rn.set(l,fn(Rn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Mn.set(l,fn(Mn.get(l)||null,e,t,n,r,i)),!0}return!1}function Ts(e){var t=kt(e.target);if(t!==null){var n=Tt(t);if(n!==null){if(t=n.tag,t===13){if(t=ws(n),t!==null){e.blockedOn=t,Ls(e.priority,function(){_s(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);il=r,n.target.dispatchEvent(r),il=null}else return t=Jn(n),t!==null&&Jl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ko(e,t,n){wr(e)&&n.delete(t)}function ed(){ul=!1,it!==null&&wr(it)&&(it=null),lt!==null&&wr(lt)&&(lt=null),ot!==null&&wr(ot)&&(ot=null),Rn.forEach(Ko),Mn.forEach(Ko)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,ed)))}function An(e){function t(i){return pn(i,e)}if(0<ar.length){pn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&pn(it,e),lt!==null&&pn(lt,e),ot!==null&&pn(ot,e),Rn.forEach(t),Mn.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Ts(n),n.blockedOn===null&&et.shift()}var Xt=Ze.ReactCurrentBatchConfig,Mr=!0;function td(e,t,n,r){var i=A,l=Xt.transition;Xt.transition=null;try{A=1,ql(e,t,n,r)}finally{A=i,Xt.transition=l}}function nd(e,t,n,r){var i=A,l=Xt.transition;Xt.transition=null;try{A=4,ql(e,t,n,r)}finally{A=i,Xt.transition=l}}function ql(e,t,n,r){if(Mr){var i=cl(e,t,n,r);if(i===null)Ri(e,t,r,Ar,n),Yo(e,r);else if(bc(i,e,t,n,r))r.stopPropagation();else if(Yo(e,r),t&4&&-1<qc.indexOf(e)){for(;i!==null;){var l=Jn(i);if(l!==null&&zs(l),l=cl(e,t,n,r),l===null&&Ri(e,t,r,Ar,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ri(e,t,r,null,n)}}var Ar=null;function cl(e,t,n,r){if(Ar=null,e=Kl(r),e=kt(e),e!==null)if(t=Tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ws(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function Ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case Xl:return 1;case js:return 4;case Dr:case $c:return 16;case Cs:return 536870912;default:return 16}default:return 16}}var nt=null,bl=null,kr=null;function Rs(){if(kr)return kr;var e,t=bl,n=t.length,r,i="value"in nt?nt.value:nt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return kr=i.slice(e,1<r?1-r:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Xo(){return!1}function Se(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?sr:Xo,this.isPropagationStopped=Xo,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Se(an),Zn=$({},an,{view:0,detail:0}),rd=Se(Zn),Ci,Ni,mn,ni=$({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Ci=e.screenX-mn.screenX,Ni=e.screenY-mn.screenY):Ni=Ci=0,mn=e),Ci)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),Zo=Se(ni),id=$({},ni,{dataTransfer:0}),ld=Se(id),od=$({},Zn,{relatedTarget:0}),Fi=Se(od),ad=$({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=Se(ad),ud=$({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=Se(ud),dd=$({},an,{data:0}),Jo=Se(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=md[e])?!!t[e]:!1}function to(){return hd}var gd=$({},Zn,{key:function(e){if(e.key){var t=fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vd=Se(gd),yd=$({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Se(yd),xd=$({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),wd=Se(xd),kd=$({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=Se(kd),Ed=$({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jd=Se(Ed),Cd=[9,13,27,32],no=Qe&&"CompositionEvent"in window,jn=null;Qe&&"documentMode"in document&&(jn=document.documentMode);var Nd=Qe&&"TextEvent"in window&&!jn,Ms=Qe&&(!no||jn&&8<jn&&11>=jn),bo=" ",ea=!1;function As(e,t){switch(e){case"keyup":return Cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Os(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Fd(e,t){switch(e){case"compositionend":return Os(t);case"keypress":return t.which!==32?null:(ea=!0,bo);case"textInput":return e=t.data,e===bo&&ea?null:e;default:return null}}function zd(e,t){if(At)return e==="compositionend"||!no&&As(e,t)?(e=Rs(),kr=bl=nt=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ms&&t.locale!=="ko"?null:t.data;default:return null}}var _d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_d[e.type]:t==="textarea"}function Is(e,t,n,r){hs(r),t=Or(t,"onChange"),0<t.length&&(n=new eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,On=null;function Pd(e){Xs(e,0)}function ri(e){var t=Bt(e);if(ss(t))return e}function Ld(e,t){if(e==="change")return t}var Bs=!1;if(Qe){var zi;if(Qe){var _i="oninput"in document;if(!_i){var na=document.createElement("div");na.setAttribute("oninput","return;"),_i=typeof na.oninput=="function"}zi=_i}else zi=!1;Bs=zi&&(!document.documentMode||9<document.documentMode)}function ra(){Cn&&(Cn.detachEvent("onpropertychange",Us),On=Cn=null)}function Us(e){if(e.propertyName==="value"&&ri(On)){var t=[];Is(t,On,e,Kl(e)),xs(Pd,t)}}function Td(e,t,n){e==="focusin"?(ra(),Cn=t,On=n,Cn.attachEvent("onpropertychange",Us)):e==="focusout"&&ra()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(On)}function Rd(e,t){if(e==="click")return ri(t)}function Md(e,t){if(e==="input"||e==="change")return ri(t)}function Ad(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Ad;function In(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qi.call(t,i)||!Me(e[i],t[i]))return!1}return!0}function ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function la(e,t){var n=ia(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ia(n)}}function Vs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ws(){for(var e=window,t=Pr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pr(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Od(e){var t=Ws(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vs(n.ownerDocument.documentElement,n)){if(r!==null&&ro(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=la(n,l);var o=la(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Id=Qe&&"documentMode"in document&&11>=document.documentMode,Ot=null,dl=null,Nn=null,fl=!1;function oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||Ot==null||Ot!==Pr(r)||(r=Ot,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&In(Nn,r)||(Nn=r,r=Or(dl,"onSelect"),0<r.length&&(t=new eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ot)))}function ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var It={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Pi={},Gs={};Qe&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete It.animationend.animation,delete It.animationiteration.animation,delete It.animationstart.animation),"TransitionEvent"in window||delete It.transitionend.transition);function ii(e){if(Pi[e])return Pi[e];if(!It[e])return e;var t=It[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gs)return Pi[e]=t[n];return e}var $s=ii("animationend"),Hs=ii("animationiteration"),Qs=ii("animationstart"),Ys=ii("transitionend"),Ks=new Map,aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){Ks.set(e,t),Lt(t,[e])}for(var Li=0;Li<aa.length;Li++){var Ti=aa[Li],Bd=Ti.toLowerCase(),Ud=Ti[0].toUpperCase()+Ti.slice(1);mt(Bd,"on"+Ud)}mt($s,"onAnimationEnd");mt(Hs,"onAnimationIteration");mt(Qs,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(Ys,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function Xs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;sa(i,s,f),l=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,f=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;sa(i,s,f),l=u}}}if(Tr)throw e=al,Tr=!1,al=null,e}function B(e,t){var n=t[vl];n===void 0&&(n=t[vl]=new Set);var r=e+"__bubble";n.has(r)||(Zs(t,e,2,!1),n.add(r))}function Di(e,t,n){var r=0;t&&(r|=4),Zs(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[cr]){e[cr]=!0,rs.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||Di(n,!1,e),Di(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Di("selectionchange",!1,t))}}function Zs(e,t,n,r){switch(Ds(t)){case 1:var i=td;break;case 4:i=nd;break;default:i=ql}n=i.bind(null,t,n,e),i=void 0,!ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ri(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=kt(s),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}s=s.parentNode}}r=r.return}xs(function(){var f=l,g=Kl(n),h=[];e:{var m=Ks.get(e);if(m!==void 0){var w=eo,S=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":w=vd;break;case"focusin":S="focus",w=Fi;break;case"focusout":S="blur",w=Fi;break;case"beforeblur":case"afterblur":w=Fi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wd;break;case $s:case Hs:case Qs:w=sd;break;case Ys:w=Sd;break;case"scroll":w=rd;break;case"wheel":w=jd;break;case"copy":case"cut":case"paste":w=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=qo}var x=(t&4)!==0,T=!x&&e==="scroll",d=x?m!==null?m+"Capture":null:m;x=[];for(var c=f,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Dn(c,d),v!=null&&x.push(Un(c,v,p)))),T)break;c=c.return}0<x.length&&(m=new w(m,S,null,n,g),h.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==il&&(S=n.relatedTarget||n.fromElement)&&(kt(S)||S[Ye]))break e;if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=f,S=S?kt(S):null,S!==null&&(T=Tt(S),S!==T||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=f),w!==S)){if(x=Zo,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=qo,v="onPointerLeave",d="onPointerEnter",c="pointer"),T=w==null?m:Bt(w),p=S==null?m:Bt(S),m=new x(v,c+"leave",w,n,g),m.target=T,m.relatedTarget=p,v=null,kt(g)===f&&(x=new x(d,c+"enter",S,n,g),x.target=p,x.relatedTarget=T,v=x),T=v,w&&S)t:{for(x=w,d=S,c=0,p=x;p;p=Dt(p))c++;for(p=0,v=d;v;v=Dt(v))p++;for(;0<c-p;)x=Dt(x),c--;for(;0<p-c;)d=Dt(d),p--;for(;c--;){if(x===d||d!==null&&x===d.alternate)break t;x=Dt(x),d=Dt(d)}x=null}else x=null;w!==null&&ua(h,m,w,x,!1),S!==null&&T!==null&&ua(h,T,S,x,!0)}}e:{if(m=f?Bt(f):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var k=Ld;else if(ta(m))if(Bs)k=Md;else{k=Dd;var C=Td}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Rd);if(k&&(k=k(e,f))){Is(h,k,n,g);break e}C&&C(e,m,f),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&bi(m,"number",m.value)}switch(C=f?Bt(f):window,e){case"focusin":(ta(C)||C.contentEditable==="true")&&(Ot=C,dl=f,Nn=null);break;case"focusout":Nn=dl=Ot=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,oa(h,n,g);break;case"selectionchange":if(Id)break;case"keydown":case"keyup":oa(h,n,g)}var N;if(no)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else At?As(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Ms&&n.locale!=="ko"&&(At||F!=="onCompositionStart"?F==="onCompositionEnd"&&At&&(N=Rs()):(nt=g,bl="value"in nt?nt.value:nt.textContent,At=!0)),C=Or(f,F),0<C.length&&(F=new Jo(F,e,null,n,g),h.push({event:F,listeners:C}),N?F.data=N:(N=Os(n),N!==null&&(F.data=N)))),(N=Nd?Fd(e,n):zd(e,n))&&(f=Or(f,"onBeforeInput"),0<f.length&&(g=new Jo("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:f}),g.data=N))}Xs(h,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Or(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Dn(e,n),l!=null&&r.unshift(Un(e,l,i)),l=Dn(e,t),l!=null&&r.push(Un(e,l,i))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ua(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,i?(u=Dn(n,l),u!=null&&o.unshift(Un(n,u,s))):i||(u=Dn(n,l),u!=null&&o.push(Un(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Wd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(Gd,"")}function dr(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(y(425))}function Ir(){}var pl=null,ml=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,$d=typeof clearTimeout=="function"?clearTimeout:void 0,da=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof da<"u"?function(e){return da.resolve(null).then(e).catch(Qd)}:gl;function Qd(e){setTimeout(function(){throw e})}function Mi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),An(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);An(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+sn,Vn="__reactProps$"+sn,Ye="__reactContainer$"+sn,vl="__reactEvents$"+sn,Yd="__reactListeners$"+sn,Kd="__reactHandles$"+sn;function kt(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fa(e);e!==null;){if(n=e[Ie])return n;e=fa(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Ie]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function li(e){return e[Vn]||null}var yl=[],Ut=-1;function ht(e){return{current:e}}function U(e){0>Ut||(e.current=yl[Ut],yl[Ut]=null,Ut--)}function O(e,t){Ut++,yl[Ut]=e.current,e.current=t}var pt={},oe=ht(pt),pe=ht(!1),Nt=pt;function bt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Br(){U(pe),U(oe)}function pa(e,t,n){if(oe.current!==pt)throw Error(y(168));O(oe,t),O(pe,n)}function Js(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Tc(e)||"Unknown",i));return $({},n,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Nt=oe.current,O(oe,e),O(pe,pe.current),!0}function ma(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Js(e,t,Nt),r.__reactInternalMemoizedMergedChildContext=e,U(pe),U(oe),O(oe,e)):U(pe),O(pe,n)}var We=null,oi=!1,Ai=!1;function qs(e){We===null?We=[e]:We.push(e)}function Xd(e){oi=!0,qs(e)}function gt(){if(!Ai&&We!==null){Ai=!0;var e=0,t=A;try{var n=We;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,oi=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),Es(Xl,gt),i}finally{A=t,Ai=!1}}return null}var Vt=[],Wt=0,Vr=null,Wr=0,Ee=[],je=0,Ft=null,Ge=1,$e="";function xt(e,t){Vt[Wt++]=Wr,Vt[Wt++]=Vr,Vr=e,Wr=t}function bs(e,t,n){Ee[je++]=Ge,Ee[je++]=$e,Ee[je++]=Ft,Ft=e;var r=Ge;e=$e;var i=32-De(r)-1;r&=~(1<<i),n+=1;var l=32-De(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ge=1<<32-De(t)+i|n<<i|r,$e=l+e}else Ge=1<<l|n<<i|r,$e=e}function io(e){e.return!==null&&(xt(e,1),bs(e,1,0))}function lo(e){for(;e===Vr;)Vr=Vt[--Wt],Vt[Wt]=null,Wr=Vt[--Wt],Vt[Wt]=null;for(;e===Ft;)Ft=Ee[--je],Ee[je]=null,$e=Ee[--je],Ee[je]=null,Ge=Ee[--je],Ee[je]=null}var xe=null,ye=null,V=!1,Te=null;function eu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Ge,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(V){var t=ye;if(t){var n=t;if(!ha(e,t)){if(xl(e))throw Error(y(418));t=at(n.nextSibling);var r=xe;t&&ha(e,t)?eu(r,n):(e.flags=e.flags&-4097|2,V=!1,xe=e)}}else{if(xl(e))throw Error(y(418));e.flags=e.flags&-4097|2,V=!1,xe=e}}}function ga(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function fr(e){if(e!==xe)return!1;if(!V)return ga(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=ye)){if(xl(e))throw tu(),Error(y(418));for(;t;)eu(e,t),t=at(t.nextSibling)}if(ga(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?at(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=ye;e;)e=at(e.nextSibling)}function en(){ye=xe=null,V=!1}function oo(e){Te===null?Te=[e]:Te.push(e)}var Zd=Ze.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){var t=e._init;return t(e._payload)}function nu(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=dt(d,c),d.index=0,d.sibling=null,d}function l(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,p,v){return c===null||c.tag!==6?(c=Gi(p,d.mode,v),c.return=d,c):(c=i(c,p),c.return=d,c)}function u(d,c,p,v){var k=p.type;return k===Mt?g(d,c,p.props.children,v,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qe&&va(k)===c.type)?(v=i(c,p.props),v.ref=hn(d,c,p),v.return=d,v):(v=_r(p.type,p.key,p.props,null,d.mode,v),v.ref=hn(d,c,p),v.return=d,v)}function f(d,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=$i(p,d.mode,v),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function g(d,c,p,v,k){return c===null||c.tag!==7?(c=Ct(p,d.mode,v,k),c.return=d,c):(c=i(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Gi(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case nr:return p=_r(c.type,c.key,c.props,null,d.mode,p),p.ref=hn(d,null,c),p.return=d,p;case Rt:return c=$i(c,d.mode,p),c.return=d,c;case qe:var v=c._init;return h(d,v(c._payload),p)}if(xn(c)||cn(c))return c=Ct(c,d.mode,p,null),c.return=d,c;pr(d,c)}return null}function m(d,c,p,v){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(d,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:return p.key===k?u(d,c,p,v):null;case Rt:return p.key===k?f(d,c,p,v):null;case qe:return k=p._init,m(d,c,k(p._payload),v)}if(xn(p)||cn(p))return k!==null?null:g(d,c,p,v,null);pr(d,p)}return null}function w(d,c,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,s(c,d,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nr:return d=d.get(v.key===null?p:v.key)||null,u(c,d,v,k);case Rt:return d=d.get(v.key===null?p:v.key)||null,f(c,d,v,k);case qe:var C=v._init;return w(d,c,p,C(v._payload),k)}if(xn(v)||cn(v))return d=d.get(p)||null,g(c,d,v,k,null);pr(c,v)}return null}function S(d,c,p,v){for(var k=null,C=null,N=c,F=c=0,I=null;N!==null&&F<p.length;F++){N.index>F?(I=N,N=null):I=N.sibling;var D=m(d,N,p[F],v);if(D===null){N===null&&(N=I);break}e&&N&&D.alternate===null&&t(d,N),c=l(D,c,F),C===null?k=D:C.sibling=D,C=D,N=I}if(F===p.length)return n(d,N),V&&xt(d,F),k;if(N===null){for(;F<p.length;F++)N=h(d,p[F],v),N!==null&&(c=l(N,c,F),C===null?k=N:C.sibling=N,C=N);return V&&xt(d,F),k}for(N=r(d,N);F<p.length;F++)I=w(N,d,F,p[F],v),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?F:I.key),c=l(I,c,F),C===null?k=I:C.sibling=I,C=I);return e&&N.forEach(function(ge){return t(d,ge)}),V&&xt(d,F),k}function x(d,c,p,v){var k=cn(p);if(typeof k!="function")throw Error(y(150));if(p=k.call(p),p==null)throw Error(y(151));for(var C=k=null,N=c,F=c=0,I=null,D=p.next();N!==null&&!D.done;F++,D=p.next()){N.index>F?(I=N,N=null):I=N.sibling;var ge=m(d,N,D.value,v);if(ge===null){N===null&&(N=I);break}e&&N&&ge.alternate===null&&t(d,N),c=l(ge,c,F),C===null?k=ge:C.sibling=ge,C=ge,N=I}if(D.done)return n(d,N),V&&xt(d,F),k;if(N===null){for(;!D.done;F++,D=p.next())D=h(d,D.value,v),D!==null&&(c=l(D,c,F),C===null?k=D:C.sibling=D,C=D);return V&&xt(d,F),k}for(N=r(d,N);!D.done;F++,D=p.next())D=w(N,d,F,D.value,v),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?F:D.key),c=l(D,c,F),C===null?k=D:C.sibling=D,C=D);return e&&N.forEach(function(z){return t(d,z)}),V&&xt(d,F),k}function T(d,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Mt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:e:{for(var k=p.key,C=c;C!==null;){if(C.key===k){if(k=p.type,k===Mt){if(C.tag===7){n(d,C.sibling),c=i(C,p.props.children),c.return=d,d=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qe&&va(k)===C.type){n(d,C.sibling),c=i(C,p.props),c.ref=hn(d,C,p),c.return=d,d=c;break e}n(d,C);break}else t(d,C);C=C.sibling}p.type===Mt?(c=Ct(p.props.children,d.mode,v,p.key),c.return=d,d=c):(v=_r(p.type,p.key,p.props,null,d.mode,v),v.ref=hn(d,c,p),v.return=d,d=v)}return o(d);case Rt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=$i(p,d.mode,v),c.return=d,d=c}return o(d);case qe:return C=p._init,T(d,c,C(p._payload),v)}if(xn(p))return S(d,c,p,v);if(cn(p))return x(d,c,p,v);pr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=Gi(p,d.mode,v),c.return=d,d=c),o(d)):n(d,c)}return T}var tn=nu(!0),ru=nu(!1),Gr=ht(null),$r=null,Gt=null,ao=null;function so(){ao=Gt=$r=null}function uo(e){var t=Gr.current;U(Gr),e._currentValue=t}function kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){$r=e,ao=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Gt===null){if($r===null)throw Error(y(308));Gt=e,$r.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return t}var St=null;function co(e){St===null?St=[e]:St.push(e)}function iu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,co(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ke(e,n)}return i=r.interleaved,i===null?(t.next=t,co(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ke(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}function ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hr(e,t,n,r){var i=e.updateQueue;be=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,f=u.next;u.next=null,o===null?l=f:o.next=f,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=f:s.next=f,g.lastBaseUpdate=u))}if(l!==null){var h=i.baseState;o=0,g=f=u=null,s=l;do{var m=s.lane,w=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,x=s;switch(m=t,w=n,x.tag){case 1:if(S=x.payload,typeof S=="function"){h=S.call(w,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,m=typeof S=="function"?S.call(w,h,m):S,m==null)break e;h=$({},h,m);break e;case 2:be=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(f=g=w,u=h):g=g.next=w,o|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(u=h),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);_t|=o,e.lanes=o,e.memoizedState=h}}function xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var qn={},Ue=ht(qn),Wn=ht(qn),Gn=ht(qn);function Et(e){if(e===qn)throw Error(y(174));return e}function po(e,t){switch(O(Gn,t),O(Wn,e),O(Ue,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tl(t,e)}U(Ue),O(Ue,t)}function nn(){U(Ue),U(Wn),U(Gn)}function ou(e){Et(Gn.current);var t=Et(Ue.current),n=tl(t,e.type);t!==n&&(O(Wn,e),O(Ue,n))}function mo(e){Wn.current===e&&(U(Ue),U(Wn))}var W=ht(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oi=[];function ho(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var jr=Ze.ReactCurrentDispatcher,Ii=Ze.ReactCurrentBatchConfig,zt=0,G=null,X=null,q=null,Yr=!1,Fn=!1,$n=0,Jd=0;function re(){throw Error(y(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function vo(e,t,n,r,i,l){if(zt=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jr.current=e===null||e.memoizedState===null?tf:nf,e=n(r,i),Fn){l=0;do{if(Fn=!1,$n=0,25<=l)throw Error(y(301));l+=1,q=X=null,t.updateQueue=null,jr.current=rf,e=n(r,i)}while(Fn)}if(jr.current=Kr,t=X!==null&&X.next!==null,zt=0,q=X=G=null,Yr=!1,t)throw Error(y(300));return e}function yo(){var e=$n!==0;return $n=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?G.memoizedState=q=e:q=q.next=e,q}function ze(){if(X===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=q===null?G.memoizedState:q.next;if(t!==null)q=t,X=e;else{if(e===null)throw Error(y(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?G.memoizedState=q=e:q=q.next=e}return q}function Hn(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,u=null,f=l;do{var g=f.lane;if((zt&g)===g)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=h,o=r):u=u.next=h,G.lanes|=g,_t|=g}f=f.next}while(f!==null&&f!==l);u===null?o=r:u.next=s,Me(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,G.lanes|=l,_t|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ui(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Me(l,t.memoizedState)||(fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function au(){}function su(e,t){var n=G,r=ze(),i=t(),l=!Me(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,xo(du.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Qn(9,cu.bind(null,n,r,i,t),void 0,null),b===null)throw Error(y(349));zt&30||uu(n,t,i)}return i}function uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cu(e,t,n,r){t.value=n,t.getSnapshot=r,fu(t)&&pu(e)}function du(e,t,n){return n(function(){fu(t)&&pu(e)})}function fu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function pu(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function wa(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t.queue=e,e=e.dispatch=ef.bind(null,G,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mu(){return ze().memoizedState}function Cr(e,t,n,r){var i=Oe();G.flags|=e,i.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var i=ze();r=r===void 0?null:r;var l=void 0;if(X!==null){var o=X.memoizedState;if(l=o.destroy,r!==null&&go(r,o.deps)){i.memoizedState=Qn(t,n,l,r);return}}G.flags|=e,i.memoizedState=Qn(1|t,n,l,r)}function ka(e,t){return Cr(8390656,8,e,t)}function xo(e,t){return ai(2048,8,e,t)}function hu(e,t){return ai(4,2,e,t)}function gu(e,t){return ai(4,4,e,t)}function vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yu(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,vu.bind(null,t,e),n)}function wo(){}function xu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ku(e,t,n){return zt&21?(Me(n,t)||(n=Ns(),G.lanes|=n,_t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function qd(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Ii.transition;Ii.transition={};try{e(!1),t()}finally{A=n,Ii.transition=r}}function Su(){return ze().memoizedState}function bd(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e))ju(t,n);else if(n=iu(e,t,n,r),n!==null){var i=se();Re(n,e,r,i),Cu(n,t,r)}}function ef(e,t,n){var r=ct(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))ju(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Me(s,o)){var u=t.interleaved;u===null?(i.next=i,co(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=iu(e,t,i,r),n!==null&&(i=se(),Re(n,e,r,i),Cu(n,t,r))}}function Eu(e){var t=e.alternate;return e===G||t!==null&&t===G}function ju(e,t){Fn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}var Kr={readContext:Fe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},tf={readContext:Fe,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bd.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:wo,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=qd.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=Oe();if(V){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),b===null)throw Error(y(349));zt&30||uu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ka(du.bind(null,r,l,e),[e]),r.flags|=2048,Qn(9,cu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Oe(),t=b.identifierPrefix;if(V){var n=$e,r=Ge;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$n++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nf={readContext:Fe,useCallback:xu,useContext:Fe,useEffect:xo,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:wu,useReducer:Bi,useRef:mu,useState:function(){return Bi(Hn)},useDebugValue:wo,useDeferredValue:function(e){var t=ze();return ku(t,X.memoizedState,e)},useTransition:function(){var e=Bi(Hn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1},rf={readContext:Fe,useCallback:xu,useContext:Fe,useEffect:xo,useImperativeHandle:yu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:wu,useReducer:Ui,useRef:mu,useState:function(){return Ui(Hn)},useDebugValue:wo,useDeferredValue:function(e){var t=ze();return X===null?t.memoizedState=e:ku(t,X.memoizedState,e)},useTransition:function(){var e=Ui(Hn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Sl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var si={isMounted:function(e){return(e=e._reactInternals)?Tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),i=ct(e),l=He(r,i);l.payload=t,n!=null&&(l.callback=n),t=st(e,l,i),t!==null&&(Re(t,e,i,r),Er(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),i=ct(e),l=He(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=st(e,l,i),t!==null&&(Re(t,e,i,r),Er(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ct(e),i=He(n,r);i.tag=2,t!=null&&(i.callback=t),t=st(e,i,r),t!==null&&(Re(t,e,r,n),Er(t,e,r))}};function Sa(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!In(n,r)||!In(i,l):!0}function Nu(e,t,n){var r=!1,i=pt,l=t.contextType;return typeof l=="object"&&l!==null?l=Fe(l):(i=me(t)?Nt:oe.current,r=t.contextTypes,l=(r=r!=null)?bt(e,i):pt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&si.enqueueReplaceState(t,t.state,null)}function El(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},fo(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Fe(l):(l=me(t)?Nt:oe.current,i.context=bt(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Sl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&si.enqueueReplaceState(i,i.state,null),Hr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Lc(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Vi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function Fu(e,t,n){n=He(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,Rl=r),jl(e,t)},n}function zu(e,t,n){n=He(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){jl(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ja(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xf.bind(null,e,t,n),t.then(e,e))}function Ca(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Na(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=He(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var of=Ze.ReactCurrentOwner,fe=!1;function ae(e,t,n,r){t.child=e===null?ru(t,null,n,r):tn(t,e.child,n,r)}function Fa(e,t,n,r,i){n=n.render;var l=t.ref;return Zt(t,i),r=vo(e,t,n,r,l,i),n=yo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(V&&n&&io(t),t.flags|=1,ae(e,t,r,i),t.child)}function za(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!zo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,_u(e,t,l,r,i)):(e=_r(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:In,n(o,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=dt(l,r),e.ref=t.ref,e.return=t,t.child=e}function _u(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(In(l,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return Cl(e,t,n,r,i)}function Pu(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Ht,ve),ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Ht,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(Ht,ve),ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(Ht,ve),ve|=r;return ae(e,t,i,n),t.child}function Lu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,i){var l=me(n)?Nt:oe.current;return l=bt(t,l),Zt(t,i),n=vo(e,t,n,r,l,i),r=yo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(V&&r&&io(t),t.flags|=1,ae(e,t,n,i),t.child)}function _a(e,t,n,r,i){if(me(n)){var l=!0;Ur(t)}else l=!1;if(Zt(t,i),t.stateNode===null)Nr(e,t),Nu(t,n,r),El(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Fe(f):(f=me(n)?Nt:oe.current,f=bt(t,f));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==f)&&Ea(t,o,r,f),be=!1;var m=t.memoizedState;o.state=m,Hr(t,r,o,i),u=t.memoizedState,s!==r||m!==u||pe.current||be?(typeof g=="function"&&(Sl(t,n,g,r),u=t.memoizedState),(s=be||Sa(t,n,s,r,m,u,f))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=f,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,lu(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Pe(t.type,s),o.props=f,h=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=me(n)?Nt:oe.current,u=bt(t,u));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==u)&&Ea(t,o,r,u),be=!1,m=t.memoizedState,o.state=m,Hr(t,r,o,i);var S=t.memoizedState;s!==h||m!==S||pe.current||be?(typeof w=="function"&&(Sl(t,n,w,r),S=t.memoizedState),(f=be||Sa(t,n,f,r,m,S,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,l,i)}function Nl(e,t,n,r,i,l){Lu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ma(t,n,!1),Xe(e,t,l);r=t.stateNode,of.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,l),t.child=tn(t,null,s,l)):ae(e,t,s,l),t.memoizedState=r.state,i&&ma(t,n,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?pa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pa(e,t.context,!1),po(e,t.containerInfo)}function Pa(e,t,n,r,i){return en(),oo(i),t.flags|=256,ae(e,t,n,r),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Du(e,t,n){var r=t.pendingProps,i=W.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(W,i&1),e===null)return wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=di(o,r,0,null),e=Ct(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=zl(n),t.memoizedState=Fl,e):ko(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return af(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=dt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=dt(s,l):(l=Ct(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Fl,r}return l=e.child,e=l.sibling,r=dt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ko(e,t){return t=di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&oo(r),tn(t,e.child,null,n),e=ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Vi(Error(y(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=di({mode:"visible",children:r.children},i,0,null),l=Ct(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=zl(o),t.memoizedState=Fl,l);if(!(t.mode&1))return mr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(y(419)),r=Vi(l,r,void 0),mr(e,t,o,r)}if(s=(o&e.childLanes)!==0,fe||s){if(r=b,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ke(e,i),Re(r,e,i,-1))}return Fo(),r=Vi(Error(y(421))),mr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ye=at(i.nextSibling),xe=t,V=!0,Te=null,e!==null&&(Ee[je++]=Ge,Ee[je++]=$e,Ee[je++]=Ft,Ge=e.id,$e=e.overflow,Ft=t),t=ko(t,r.children),t.flags|=4096,t)}function La(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kl(e.return,t,n)}function Wi(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Ru(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ae(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&La(e,n,t);else if(e.tag===19)La(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wi(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wi(t,!0,n,null,l);break;case"together":Wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sf(e,t,n){switch(t.tag){case 3:Tu(t),en();break;case 5:ou(t);break;case 1:me(t.type)&&Ur(t);break;case 4:po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(Gr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Du(e,t,n):(O(W,W.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);O(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ru(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Pu(e,t,n)}return Xe(e,t,n)}var Mu,_l,Au,Ou;Mu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_l=function(){};Au=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Et(Ue.current);var l=null;switch(n){case"input":i=Ji(e,i),r=Ji(e,r),l=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":i=el(e,i),r=el(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ir)}nl(n,r);var o;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ln.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var u=r[f];if(s=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&B("scroll",e),l||s===u||(l=[])):(l=l||[]).push(f,u))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};Ou=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uf(e,t,n){var r=t.pendingProps;switch(lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return me(t.type)&&Br(),ie(t),null;case 3:return r=t.stateNode,nn(),U(pe),U(oe),ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Ol(Te),Te=null))),_l(e,t),ie(t),null;case 5:mo(t);var i=Et(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Au(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ie(t),null}if(e=Et(Ue.current),fr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ie]=t,r[Vn]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<kn.length;i++)B(kn[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Uo(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":Wo(r,l),B("invalid",r)}nl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),i=["children",""+s]):Ln.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":rr(r),Vo(r,l,!0);break;case"textarea":rr(r),Go(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ir)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ds(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ie]=t,e[Vn]=r,Mu(e,t,!1,!1),t.stateNode=e;e:{switch(o=rl(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<kn.length;i++)B(kn[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Uo(e,r),i=Ji(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),B("invalid",e);break;case"textarea":Wo(e,r),i=el(e,r),B("invalid",e);break;default:i=r}nl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?ms(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fs(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Tn(e,u):typeof u=="number"&&Tn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ln.hasOwnProperty(l)?u!=null&&l==="onScroll"&&B("scroll",e):u!=null&&$l(e,l,u,o))}switch(n){case"input":rr(e),Vo(e,r,!1);break;case"textarea":rr(e),Go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Qt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ir)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Ou(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Et(Gn.current),Et(Ue.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ie]=t,(l=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ie]=t,t.stateNode=r}return ie(t),null;case 13:if(U(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&ye!==null&&t.mode&1&&!(t.flags&128))tu(),en(),t.flags|=98560,l=!1;else if(l=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[Ie]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),l=!1}else Te!==null&&(Ol(Te),Te=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?Z===0&&(Z=3):Fo())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return nn(),_l(e,t),e===null&&Bn(t.stateNode.containerInfo),ie(t),null;case 10:return uo(t.type._context),ie(t),null;case 17:return me(t.type)&&Br(),ie(t),null;case 19:if(U(W),l=t.memoizedState,l===null)return ie(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)gn(l,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qr(e),o!==null){for(t.flags|=128,gn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(W,W.current&1|2),t.child}e=e.sibling}l.tail!==null&&Y()>ln&&(t.flags|=128,r=!0,gn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Qr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!V)return ie(t),null}else 2*Y()-l.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,gn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Y(),t.sibling=null,n=W.current,O(W,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return No(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function cf(e,t){switch(lo(t),t.tag){case 1:return me(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),U(pe),U(oe),ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(U(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(W),null;case 4:return nn(),null;case 10:return uo(t.type._context),null;case 22:case 23:return No(),null;case 24:return null;default:return null}}var hr=!1,le=!1,df=typeof WeakSet=="function"?WeakSet:Set,E=null;function $t(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Pl(e,t,n){try{n()}catch(r){H(e,t,r)}}var Ta=!1;function ff(e,t){if(pl=Mr,e=Ws(),ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,f=0,g=0,h=e,m=null;t:for(;;){for(var w;h!==n||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break t;if(m===n&&++f===i&&(s=o),m===l&&++g===r&&(u=o),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ml={focusedElem:e,selectionRange:n},Mr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,T=S.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Pe(t.type,x),T);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){H(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return S=Ta,Ta=!1,S}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Pl(t,n,l)}i=i.next}while(i!==r)}}function ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ie],delete t[Vn],delete t[vl],delete t[Yd],delete t[Kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Da(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ir));else if(r!==4&&(e=e.child,e!==null))for(Tl(e,t,n),e=e.sibling;e!==null;)Tl(e,t,n),e=e.sibling}function Dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dl(e,t,n),e=e.sibling;e!==null;)Dl(e,t,n),e=e.sibling}var ee=null,Le=!1;function Je(e,t,n){for(n=n.child;n!==null;)Uu(e,t,n),n=n.sibling}function Uu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(ti,n)}catch{}switch(n.tag){case 5:le||$t(n,t);case 6:var r=ee,i=Le;ee=null,Je(e,t,n),ee=r,Le=i,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?Mi(e.parentNode,n):e.nodeType===1&&Mi(e,n),An(e)):Mi(ee,n.stateNode));break;case 4:r=ee,i=Le,ee=n.stateNode.containerInfo,Le=!0,Je(e,t,n),ee=r,Le=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Pl(n,t,o),i=i.next}while(i!==r)}Je(e,t,n);break;case 1:if(!le&&($t(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Je(e,t,n),le=r):Je(e,t,n);break;default:Je(e,t,n)}}function Ra(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new df),t.forEach(function(r){var i=kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Le=!1;break e;case 3:ee=s.stateNode.containerInfo,Le=!0;break e;case 4:ee=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(ee===null)throw Error(y(160));Uu(l,o,i),ee=null,Le=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){H(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vu(t,e),t=t.sibling}function Vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Ae(e),r&4){try{zn(3,e,e.return),ui(3,e)}catch(x){H(e,e.return,x)}try{zn(5,e,e.return)}catch(x){H(e,e.return,x)}}break;case 1:_e(t,e),Ae(e),r&512&&n!==null&&$t(n,n.return);break;case 5:if(_e(t,e),Ae(e),r&512&&n!==null&&$t(n,n.return),e.flags&32){var i=e.stateNode;try{Tn(i,"")}catch(x){H(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&us(i,l),rl(s,o);var f=rl(s,l);for(o=0;o<u.length;o+=2){var g=u[o],h=u[o+1];g==="style"?ms(i,h):g==="dangerouslySetInnerHTML"?fs(i,h):g==="children"?Tn(i,h):$l(i,g,h,f)}switch(s){case"input":qi(i,l);break;case"textarea":cs(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?Qt(i,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?Qt(i,!!l.multiple,l.defaultValue,!0):Qt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Vn]=l}catch(x){H(e,e.return,x)}}break;case 6:if(_e(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){H(e,e.return,x)}}break;case 3:if(_e(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(x){H(e,e.return,x)}break;case 4:_e(t,e),Ae(e);break;case 13:_e(t,e),Ae(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(jo=Y())),r&4&&Ra(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(le=(f=le)||g,_e(t,e),le=f):_e(t,e),Ae(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(E=e,g=e.child;g!==null;){for(h=E=g;E!==null;){switch(m=E,w=m.child,m.tag){case 0:case 11:case 14:case 15:zn(4,m,m.return);break;case 1:$t(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(x){H(r,n,x)}}break;case 5:$t(m,m.return);break;case 22:if(m.memoizedState!==null){Aa(h);continue}}w!==null?(w.return=m,E=w):Aa(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,f?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ps("display",o))}catch(x){H(e,e.return,x)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(x){H(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_e(t,e),Ae(e),r&4&&Ra(e);break;case 21:break;default:_e(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tn(i,""),r.flags&=-33);var l=Da(e);Dl(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Da(e);Tl(e,s,o);break;default:throw Error(y(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){E=e,Wu(e)}function Wu(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hr;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||le;s=hr;var f=le;if(hr=o,(le=u)&&!f)for(E=i;E!==null;)o=E,u=o.child,o.tag===22&&o.memoizedState!==null?Oa(i):u!==null?(u.return=o,E=u):Oa(i);for(;l!==null;)E=l,Wu(l),l=l.sibling;E=i,hr=s,le=f}Ma(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,E=l):Ma(e)}}function Ma(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&xa(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xa(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&An(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}le||t.flags&512&&Ll(t)}catch(m){H(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Aa(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Oa(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ui(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){H(t,i,u)}}var l=t.return;try{Ll(t)}catch(u){H(t,l,u)}break;case 5:var o=t.return;try{Ll(t)}catch(u){H(t,o,u)}}}catch(u){H(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var mf=Math.ceil,Xr=Ze.ReactCurrentDispatcher,So=Ze.ReactCurrentOwner,Ne=Ze.ReactCurrentBatchConfig,M=0,b=null,K=null,te=0,ve=0,Ht=ht(0),Z=0,Yn=null,_t=0,ci=0,Eo=0,_n=null,de=null,jo=0,ln=1/0,Ve=null,Zr=!1,Rl=null,ut=null,gr=!1,rt=null,Jr=0,Pn=0,Ml=null,Fr=-1,zr=0;function se(){return M&6?Y():Fr!==-1?Fr:Fr=Y()}function ct(e){return e.mode&1?M&2&&te!==0?te&-te:Zd.transition!==null?(zr===0&&(zr=Ns()),zr):(e=A,e!==0||(e=window.event,e=e===void 0?16:Ds(e.type)),e):1}function Re(e,t,n,r){if(50<Pn)throw Pn=0,Ml=null,Error(y(185));Xn(e,n,r),(!(M&2)||e!==b)&&(e===b&&(!(M&2)&&(ci|=n),Z===4&&tt(e,te)),he(e,r),n===1&&M===0&&!(t.mode&1)&&(ln=Y()+500,oi&&gt()))}function he(e,t){var n=e.callbackNode;Zc(e,t);var r=Rr(e,e===b?te:0);if(r===0)n!==null&&Qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qo(n),t===1)e.tag===0?Xd(Ia.bind(null,e)):qs(Ia.bind(null,e)),Hd(function(){!(M&6)&&gt()}),n=null;else{switch(Fs(r)){case 1:n=Xl;break;case 4:n=js;break;case 16:n=Dr;break;case 536870912:n=Cs;break;default:n=Dr}n=Zu(n,Gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gu(e,t){if(Fr=-1,zr=0,M&6)throw Error(y(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Rr(e,e===b?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var i=M;M|=2;var l=Hu();(b!==e||te!==t)&&(Ve=null,ln=Y()+500,jt(e,t));do try{vf();break}catch(s){$u(e,s)}while(!0);so(),Xr.current=l,M=i,K!==null?t=0:(b=null,te=0,t=Z)}if(t!==0){if(t===2&&(i=sl(e),i!==0&&(r=i,t=Al(e,i))),t===1)throw n=Yn,jt(e,0),tt(e,r),he(e,Y()),n;if(t===6)tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!hf(i)&&(t=qr(e,r),t===2&&(l=sl(e),l!==0&&(r=l,t=Al(e,l))),t===1))throw n=Yn,jt(e,0),tt(e,r),he(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,de,Ve);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=jo+500-Y(),10<t)){if(Rr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gl(wt.bind(null,e,de,Ve),t);break}wt(e,de,Ve);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-De(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=gl(wt.bind(null,e,de,Ve),r);break}wt(e,de,Ve);break;case 5:wt(e,de,Ve);break;default:throw Error(y(329))}}}return he(e,Y()),e.callbackNode===n?Gu.bind(null,e):null}function Al(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=qr(e,t),e!==2&&(t=de,de=n,t!==null&&Ol(t)),e}function Ol(e){de===null?de=e:de.push.apply(de,e)}function hf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Me(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Eo,t&=~ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Ia(e){if(M&6)throw Error(y(327));Jt();var t=Rr(e,0);if(!(t&1))return he(e,Y()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=sl(e);r!==0&&(t=r,n=Al(e,r))}if(n===1)throw n=Yn,jt(e,0),tt(e,t),he(e,Y()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,de,Ve),he(e,Y()),null}function Co(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(ln=Y()+500,oi&&gt())}}function Pt(e){rt!==null&&rt.tag===0&&!(M&6)&&Jt();var t=M;M|=1;var n=Ne.transition,r=A;try{if(Ne.transition=null,A=1,e)return e()}finally{A=r,Ne.transition=n,M=t,!(M&6)&&gt()}}function No(){ve=Ht.current,U(Ht)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$d(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:nn(),U(pe),U(oe),ho();break;case 5:mo(r);break;case 4:nn();break;case 13:U(W);break;case 19:U(W);break;case 10:uo(r.type._context);break;case 22:case 23:No()}n=n.return}if(b=e,K=e=dt(e.current,null),te=ve=t,Z=0,Yn=null,Eo=ci=_t=0,de=_n=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}St=null}return e}function $u(e,t){do{var n=K;try{if(so(),jr.current=Kr,Yr){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yr=!1}if(zt=0,q=X=G=null,Fn=!1,$n=0,So.current=null,n===null||n.return===null){Z=1,Yn=t,K=null;break}e:{var l=e,o=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Ca(o);if(w!==null){w.flags&=-257,Na(w,o,s,l,t),w.mode&1&&ja(l,f,t),t=w,u=f;var S=t.updateQueue;if(S===null){var x=new Set;x.add(u),t.updateQueue=x}else S.add(u);break e}else{if(!(t&1)){ja(l,f,t),Fo();break e}u=Error(y(426))}}else if(V&&s.mode&1){var T=Ca(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Na(T,o,s,l,t),oo(rn(u,s));break e}}l=u=rn(u,s),Z!==4&&(Z=2),_n===null?_n=[l]:_n.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Fu(l,u,t);ya(l,d);break e;case 1:s=u;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=zu(l,s,t);ya(l,v);break e}}l=l.return}while(l!==null)}Yu(n)}catch(k){t=k,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Hu(){var e=Xr.current;return Xr.current=Kr,e===null?Kr:e}function Fo(){(Z===0||Z===3||Z===2)&&(Z=4),b===null||!(_t&268435455)&&!(ci&268435455)||tt(b,te)}function qr(e,t){var n=M;M|=2;var r=Hu();(b!==e||te!==t)&&(Ve=null,jt(e,t));do try{gf();break}catch(i){$u(e,i)}while(!0);if(so(),M=n,Xr.current=r,K!==null)throw Error(y(261));return b=null,te=0,Z}function gf(){for(;K!==null;)Qu(K)}function vf(){for(;K!==null&&!Vc();)Qu(K)}function Qu(e){var t=Xu(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Yu(e):K=t,So.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,K=null;return}}else if(n=uf(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Z===0&&(Z=5)}function wt(e,t,n){var r=A,i=Ne.transition;try{Ne.transition=null,A=1,yf(e,t,n,r)}finally{Ne.transition=i,A=r}return null}function yf(e,t,n,r){do Jt();while(rt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Jc(e,l),e===b&&(K=b=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,Zu(Dr,function(){return Jt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ne.transition,Ne.transition=null;var o=A;A=1;var s=M;M|=4,So.current=null,ff(e,n),Vu(n,e),Od(ml),Mr=!!pl,ml=pl=null,e.current=n,pf(n),Wc(),M=s,A=o,Ne.transition=l}else e.current=n;if(gr&&(gr=!1,rt=e,Jr=i),l=e.pendingLanes,l===0&&(ut=null),Hc(n.stateNode),he(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zr)throw Zr=!1,e=Rl,Rl=null,e;return Jr&1&&e.tag!==0&&Jt(),l=e.pendingLanes,l&1?e===Ml?Pn++:(Pn=0,Ml=e):Pn=0,gt(),null}function Jt(){if(rt!==null){var e=Fs(Jr),t=Ne.transition,n=A;try{if(Ne.transition=null,A=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,Jr=0,M&6)throw Error(y(331));var i=M;for(M|=4,E=e.current;E!==null;){var l=E,o=l.child;if(E.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(E=f;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:zn(8,g,l)}var h=g.child;if(h!==null)h.return=g,E=h;else for(;E!==null;){g=E;var m=g.sibling,w=g.return;if(Iu(g),g===f){E=null;break}if(m!==null){m.return=w,E=m;break}E=w}}}var S=l.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}E=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,E=o;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:zn(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,E=d;break e}E=l.return}}var c=e.current;for(E=c;E!==null;){o=E;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,E=p;else e:for(o=c;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ui(9,s)}}catch(k){H(s,s.return,k)}if(s===o){E=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,E=v;break e}E=s.return}}if(M=i,gt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(ti,e)}catch{}r=!0}return r}finally{A=n,Ne.transition=t}}return!1}function Ba(e,t,n){t=rn(n,t),t=Fu(e,t,1),e=st(e,t,1),t=se(),e!==null&&(Xn(e,1,t),he(e,t))}function H(e,t,n){if(e.tag===3)Ba(e,e,n);else for(;t!==null;){if(t.tag===3){Ba(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=zu(t,e,1),t=st(t,e,1),e=se(),t!==null&&(Xn(t,1,e),he(t,e));break}}t=t.return}}function xf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(te&n)===n&&(Z===4||Z===3&&(te&130023424)===te&&500>Y()-jo?jt(e,0):Eo|=n),he(e,t)}function Ku(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=se();e=Ke(e,t),e!==null&&(Xn(e,t,n),he(e,n))}function wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Ku(e,n)}var Xu;Xu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,sf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,V&&t.flags&1048576&&bs(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nr(e,t),e=t.pendingProps;var i=bt(t,oe.current);Zt(t,n),i=vo(null,t,r,e,i,n);var l=yo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(l=!0,Ur(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fo(t),i.updater=si,t.stateNode=i,i._reactInternals=t,El(t,r,e,n),t=Nl(null,t,r,!0,l,n)):(t.tag=0,V&&l&&io(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ef(r),e=Pe(r,e),i){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=_a(null,t,r,e,n);break e;case 11:t=Fa(null,t,r,e,n);break e;case 14:t=za(null,t,r,Pe(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),Cl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),_a(e,t,r,i,n);case 3:e:{if(Tu(t),e===null)throw Error(y(387));r=t.pendingProps,l=t.memoizedState,i=l.element,lu(e,t),Hr(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=rn(Error(y(423)),t),t=Pa(e,t,r,n,i);break e}else if(r!==i){i=rn(Error(y(424)),t),t=Pa(e,t,r,n,i);break e}else for(ye=at(t.stateNode.containerInfo.firstChild),xe=t,V=!0,Te=null,n=ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===i){t=Xe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return ou(t),e===null&&wl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,hl(r,i)?o=null:l!==null&&hl(r,l)&&(t.flags|=32),Lu(e,t),ae(e,t,o,n),t.child;case 6:return e===null&&wl(t),null;case 13:return Du(e,t,n);case 4:return po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),Fa(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,O(Gr,r._currentValue),r._currentValue=o,l!==null)if(Me(l.value,o)){if(l.children===i.children&&!pe.current){t=Xe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=He(-1,n&-n),u.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?u.next=u:(u.next=g.next,g.next=u),f.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),kl(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),kl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zt(t,n),i=Fe(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=Pe(r,t.pendingProps),i=Pe(r.type,i),za(e,t,r,i,n);case 15:return _u(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),Nr(e,t),t.tag=1,me(r)?(e=!0,Ur(t)):e=!1,Zt(t,n),Nu(t,r,i),El(t,r,i,n),Nl(null,t,r,!0,e,n);case 19:return Ru(e,t,n);case 22:return Pu(e,t,n)}throw Error(y(156,t.tag))};function Zu(e,t){return Es(e,t)}function Sf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Sf(e,t,n,r)}function zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return zo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ql)return 11;if(e===Yl)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _r(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")zo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mt:return Ct(n.children,i,l,t);case Hl:o=8,i|=8;break;case Yi:return e=Ce(12,n,t,i|2),e.elementType=Yi,e.lanes=l,e;case Ki:return e=Ce(13,n,t,i),e.elementType=Ki,e.lanes=l,e;case Xi:return e=Ce(19,n,t,i),e.elementType=Xi,e.lanes=l,e;case os:return di(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:o=10;break e;case ls:o=9;break e;case Ql:o=11;break e;case Yl:o=14;break e;case qe:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Ct(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function di(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=os,e.lanes=n,e.stateNode={isHidden:!1},e}function Gi(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function $i(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _o(e,t,n,r,i,l,o,s,u){return e=new jf(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ce(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(l),e}function Cf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ju(e){if(!e)return pt;e=e._reactInternals;e:{if(Tt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return Js(e,n,t)}return t}function qu(e,t,n,r,i,l,o,s,u){return e=_o(n,r,!0,e,i,l,o,s,u),e.context=Ju(null),n=e.current,r=se(),i=ct(n),l=He(r,i),l.callback=t??null,st(n,l,i),e.current.lanes=i,Xn(e,i,r),he(e,r),e}function fi(e,t,n,r){var i=t.current,l=se(),o=ct(i);return n=Ju(n),t.context===null?t.context=n:t.pendingContext=n,t=He(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(i,t,o),e!==null&&(Re(e,i,o,l),Er(e,i,o)),o}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ua(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Po(e,t){Ua(e,t),(e=e.alternate)&&Ua(e,t)}function Nf(){return null}var bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lo(e){this._internalRoot=e}pi.prototype.render=Lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));fi(e,t,null,null)};pi.prototype.unmount=Lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){fi(null,e,null,null)}),t[Ye]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ps();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Ts(e)}};function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Va(){}function Ff(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var f=br(o);l.call(f)}}var o=qu(t,r,e,0,null,!1,!1,"",Va);return e._reactRootContainer=o,e[Ye]=o.current,Bn(e.nodeType===8?e.parentNode:e),Pt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=br(u);s.call(f)}}var u=_o(e,0,!1,null,null,!1,!1,"",Va);return e._reactRootContainer=u,e[Ye]=u.current,Bn(e.nodeType===8?e.parentNode:e),Pt(function(){fi(t,u,n,r)}),u}function hi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var u=br(o);s.call(u)}}fi(t,o,e,i)}else o=Ff(n,t,e,i,r);return br(o)}zs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Zl(t,n|1),he(t,Y()),!(M&6)&&(ln=Y()+500,gt()))}break;case 13:Pt(function(){var r=Ke(e,1);if(r!==null){var i=se();Re(r,e,1,i)}}),Po(e,1)}};Jl=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=se();Re(t,e,134217728,n)}Po(e,134217728)}};_s=function(e){if(e.tag===13){var t=ct(e),n=Ke(e,t);if(n!==null){var r=se();Re(n,e,t,r)}Po(e,t)}};Ps=function(){return A};Ls=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};ll=function(e,t,n){switch(t){case"input":if(qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=li(r);if(!i)throw Error(y(90));ss(r),qi(r,i)}}}break;case"textarea":cs(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};vs=Co;ys=Pt;var zf={usingClientEntryPoint:!1,Events:[Jn,Bt,li,hs,gs,Co]},vn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_f={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ks(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{ti=vr.inject(_f),Be=vr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(t))throw Error(y(200));return Cf(e,t,null,n)};ke.createRoot=function(e,t){if(!To(e))throw Error(y(299));var n=!1,r="",i=bu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_o(e,1,!1,null,null,n,!1,r,i),e[Ye]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Lo(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ks(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Pt(e)};ke.hydrate=function(e,t,n){if(!mi(t))throw Error(y(200));return hi(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!To(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=bu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=qu(t,null,e,1,n??null,i,!1,l,o),e[Ye]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pi(t)};ke.render=function(e,t,n){if(!mi(t))throw Error(y(200));return hi(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!mi(e))throw Error(y(40));return e._reactRootContainer?(Pt(function(){hi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ke.unstable_batchedUpdates=Co;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mi(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return hi(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),es.exports=ke;var Pf=es.exports,Wa=Pf;Hi.createRoot=Wa.createRoot,Hi.hydrateRoot=Wa.hydrateRoot;function Lf(){const[e,t]=_.useState(!0),[n,r]=_.useState(1),[i,l]=_.useState(!0),[o,s]=_.useState(!1),[u,f]=_.useState(!0),[g,h]=_.useState(!1),[m,w]=_.useState(!0),[S,x]=_.useState(!1),[T,d]=_.useState(!1),[c,p]=_.useState(!1),v=_.useRef(null),k=_.useRef(null),C=_.useRef(!1);_.useEffect(()=>(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",window.scrollTo(0,0),v.current&&(v.current.muted=!0,v.current.defaultMuted=!0,v.current.volume=0),()=>{document.documentElement.style.overflow="",document.body.style.overflow=""}),[]);const N=()=>{if(S||!k.current)return;x(!0);const z=k.current.play();z&&z.then?z.then(()=>{k.current.pause(),k.current.currentTime=0}).catch(()=>{}):k.current.pause()},F=()=>{if(!T){if(d(!0),window.scrollTo({top:0,left:0,behavior:"instant"}),h(!0),r(0),setTimeout(()=>{t(!1)},500),k.current){k.current.volume=1;const z=k.current.play();z&&z.catch&&z.catch(()=>{}),w(!0)}if(v.current){v.current.muted=!0,v.current.volume=0,v.current.defaultMuted=!0;const z=v.current.play();z&&z.catch&&z.catch(()=>{})}}},I=()=>{if(C.current)return;C.current=!0,document.documentElement.style.overflow="",document.body.style.overflow="",window.scrollTo({top:0,left:0,behavior:"instant"});const z=document.querySelector(".redesign-hero-section");z&&z.scrollIntoView({behavior:"instant",block:"start"}),window.dispatchEvent(new CustomEvent("envelopeOpened")),l(!1),s(!0),setTimeout(()=>{f(!1),window.scrollTo({top:0,left:0,behavior:"instant"}),z&&z.scrollIntoView({behavior:"instant",block:"start"})},1e3)},D=()=>{const z=v.current;z&&(z.currentTime>=2.8&&!c&&p(!0),z.duration&&z.currentTime>=z.duration-.8&&!z.dataset.fading&&(z.dataset.fading="1",I()))},ge=()=>{const z=k.current;z&&(z.paused?(z.play(),w(!0)):(z.pause(),w(!1)))};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Aref+Ruqaa:wght@400;700&family=Amiri:ital,wght@0,700;1,700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');

        /* Full-Screen Video Wrapper */
        #weiVideoWrap {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          opacity: 0;
          transition: opacity 0.8s ease;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
          touch-action: none;
          overflow: hidden;
        }

        #weiVideoWrap.wei-video-in {
          opacity: 1;
        }

        #weiVideoWrap.wei-video-out {
          opacity: 0;
          transition: opacity 1.1s ease;
          pointer-events: none;
        }

        /* 100% Full-Screen Video Element */
        #weiVideo {
          position: absolute;
          inset: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          object-fit: cover;
          display: block;
        }

        /* Centered 'Tap to open' Container */
        .wei-center-tap-prompt {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          z-index: 100002;
          pointer-events: none;
          transition: opacity 0.5s ease, transform 0.5s ease;
          width: 90%;
          max-width: 320px;
        }

        /* Elegant Animated Pill Badge */
        .wei-tap-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 28px;
          background: linear-gradient(135deg, rgba(255, 253, 248, 0.95) 0%, rgba(248, 238, 222, 0.92) 100%);
          border: 1.5px solid #D4AF37;
          border-radius: 50px;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.35), inset 0 0 10px rgba(212, 175, 55, 0.2);
          animation: weiPillPulse 2.4s ease-in-out infinite, weiPillFloat 3s ease-in-out infinite;
          backdrop-filter: blur(8px);
        }

        @keyframes weiPillPulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35), inset 0 0 10px rgba(212, 175, 55, 0.2);
            border-color: #D4AF37;
          }
          50% {
            box-shadow: 0 6px 30px rgba(212, 175, 55, 0.6), 0 0 15px rgba(212, 175, 55, 0.4), inset 0 0 15px rgba(212, 175, 55, 0.3);
            border-color: #F8E297;
          }
        }

        @keyframes weiPillFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* Animated Sparkles */
        .wei-tap-sparkle {
          font-size: 13px;
          color: #C5A046;
          animation: weiSparkleSpin 3s ease-in-out infinite;
        }

        @keyframes weiSparkleSpin {
          0%, 100% { opacity: 0.6; transform: scale(0.9) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.15) rotate(45deg); }
        }

        /* Centered Tap to Open Text */
        .wei-tap-text {
          font-family: 'Cinzel', Georgia, serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #7D5226;
          white-space: nowrap;
        }

        /* Subtitle */
        .wei-tap-subtext {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-style: italic;
          font-size: 14.5px;
          letter-spacing: 0.08em;
          color: #FFFDF8;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
          opacity: 0.95;
          text-align: center;
        }

        /* Subtle tap to skip hint while video is playing */
        .wei-skip-hint {
          position: absolute;
          bottom: 24px;
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.75);
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
          text-transform: uppercase;
          pointer-events: none;
          z-index: 100002;
        }

        /* Royal Arabic Couple Names on Golden Curtain Stage */
        .wei-stage-arabic-wrap {
          position: absolute;
          top: 51%;
          left: 50%;
          transform: translate(-50%, -46%) scale(0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 100001;
          pointer-events: none;
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.2, 0.8, 0.3, 1), transform 1.2s cubic-bezier(0.2, 0.8, 0.3, 1);
          width: 90%;
          max-width: 320px;
        }

        .wei-stage-arabic-wrap.visible {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .wei-arabic-name {
          font-family: 'Aref Ruqaa', 'Noto Naskh Arabic', 'Amiri', serif;
          font-size: clamp(52px, 14vw, 76px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: 0;
          background: linear-gradient(180deg, #FFF3C4 0%, #F5C642 22%, #C48E1D 52%, #7A4E08 85%, #DBA834 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 0.8px rgba(74, 46, 11, 0.45);
          filter: drop-shadow(0 2px 4px rgba(45, 25, 5, 0.75)) drop-shadow(0 5px 14px rgba(90, 50, 10, 0.45)) drop-shadow(0 0 22px rgba(212, 165, 45, 0.35));
          margin: 0;
          animation: weiArabicGlow 3.5s ease-in-out infinite alternate;
          user-select: none;
        }

        .wei-arabic-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 4px 0;
          width: 100%;
          max-width: 180px;
        }

        .wei-arabic-line {
          flex: 1;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, #C48E1D, transparent);
          box-shadow: 0 1px 2px rgba(45, 25, 5, 0.5);
        }

        .wei-arabic-symbol {
          font-size: 16px;
          color: #D4AF37;
          filter: drop-shadow(0 1px 3px rgba(45, 25, 5, 0.8)) drop-shadow(0 0 8px rgba(212, 175, 55, 0.9));
          animation: weiArabicPulse 2.5s ease-in-out infinite alternate;
        }

        @keyframes weiArabicGlow {
          0% {
            filter: drop-shadow(0 2px 4px rgba(45, 25, 5, 0.75)) drop-shadow(0 5px 14px rgba(90, 50, 10, 0.45)) drop-shadow(0 0 20px rgba(212, 165, 45, 0.35));
            transform: scale(1);
          }
          100% {
            filter: drop-shadow(0 3px 6px rgba(40, 20, 5, 0.85)) drop-shadow(0 8px 24px rgba(248, 226, 151, 0.85)) drop-shadow(0 0 28px rgba(212, 175, 55, 0.5));
            transform: scale(1.025);
          }
        }

        @keyframes weiArabicPulse {
          0% { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1.15); opacity: 1; }
        }

        /* Golden Floating Audio Toggle Button */
        #weiAudioBtn {
          position: fixed;
          bottom: 22px;
          right: 20px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #D4AF37 0%, #AA8268 100%);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2147483647;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35), 0 0 12px rgba(212, 175, 55, 0.45);
          border: 2px solid #FFFDF9;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        #weiAudioBtn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 24px rgba(212, 175, 55, 0.65);
        }

        #weiAudioBtn svg {
          width: 24px;
          height: 24px;
          display: block;
        }
      `}),a.jsx("audio",{ref:k,id:"weiAudio",loop:!0,children:a.jsx("source",{src:"./media/nasheed.mp3",type:"audio/mp3"})}),u&&a.jsxs("div",{id:"weiVideoWrap",className:`${i?"wei-video-in":""} ${o?"wei-video-out":""}`,onTouchStart:N,onClick:T?I:F,children:[a.jsx("video",{ref:v,id:"weiVideo",src:"./media/outer1.mp4",poster:"./images/outer1_poster.jpg",muted:!0,playsInline:!0,preload:"auto",onVolumeChange:z=>{(!z.target.muted||z.target.volume>0)&&(z.target.muted=!0,z.target.volume=0)},onPlay:z=>{z.target.muted=!0,z.target.volume=0},onTimeUpdate:D,onEnded:I}),e&&a.jsxs("div",{className:"wei-center-tap-prompt",style:{opacity:n},children:[a.jsxs("div",{className:"wei-tap-pill",children:[a.jsx("span",{className:"wei-tap-sparkle",children:"✦"}),a.jsx("span",{className:"wei-tap-text",children:"TAP TO OPEN"}),a.jsx("span",{className:"wei-tap-sparkle",children:"✦"})]}),a.jsx("div",{className:"wei-tap-subtext",children:"A Sacred Union Awaits"})]}),T&&a.jsx("div",{className:"wei-skip-hint",children:"Tap anywhere to enter"}),a.jsxs("div",{className:`wei-stage-arabic-wrap ${c?"visible":""}`,dir:"rtl",children:[a.jsx("div",{className:"wei-arabic-name",children:"محمد عمار"}),a.jsxs("div",{className:"wei-arabic-divider",children:[a.jsx("span",{className:"wei-arabic-line"}),a.jsx("span",{className:"wei-arabic-symbol",children:"✦"}),a.jsx("span",{className:"wei-arabic-line"})]}),a.jsx("div",{className:"wei-arabic-name",children:"بشرى"})]})]}),g&&a.jsx("div",{id:"weiAudioBtn",onClick:z=>{z.stopPropagation(),ge()},onTouchStart:z=>z.stopPropagation(),title:m?"Mute music":"Play music",children:m?a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"#FFFDF9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",fill:"#FFFDF9"}),a.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),a.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]}):a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"#FFFDF9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",fill:"#FFFDF9"}),a.jsx("line",{x1:"22",y1:"9",x2:"16",y2:"15",strokeWidth:"2.5"}),a.jsx("line",{x1:"16",y1:"9",x2:"22",y2:"15",strokeWidth:"2.5"})]})})]})}function Tf(){const e=_.useRef(null);_.useEffect(()=>{const n=()=>{if(e.current){e.current.currentTime=0;const l=e.current.play();l&&l.catch&&l.catch(()=>{})}},r=()=>{window.scrollTo({top:0,left:0,behavior:"instant"}),n()};return window.addEventListener("envelopeOpened",r),(()=>{document.getElementById("weiVideoWrap")||n()})(),()=>{window.removeEventListener("envelopeOpened",r)}},[]);const t=()=>{setTimeout(()=>{window.dispatchEvent(new CustomEvent("sec1Ended"))},900)};return a.jsxs("section",{className:"redesign-hero-section",children:[a.jsx("style",{children:`
        .redesign-hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          padding: 0;
          margin: 0;
          background-color: #FAF5EB;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        .sec1-full-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: 100vh;
          height: 100dvh;
          min-height: 100dvh;
          aspect-ratio: auto;
          margin: 0;
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .sec1-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
          z-index: 1;
        }

      `}),a.jsx("div",{className:"sec1-full-container",children:a.jsx("video",{ref:e,src:"./media/AB_invitation_section.mp4",poster:"./images/sec1.png",className:"sec1-bg-video",muted:!0,playsInline:!0,preload:"auto",onEnded:t})})]})}function Df(){return a.jsxs("section",{className:"redesign-couple-section",children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Beau+Rivage&family=Great+Vibes&family=Imperial+Script&family=Alex+Brush&display=swap');

        .redesign-couple-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          padding: 0;
          margin: 0;
          background-color: #FAF5EB;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        .sec2-full-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: 100vh;
          height: 100dvh;
          min-height: 100dvh;
          aspect-ratio: 9 / 16;
          margin: 0;
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .sec2-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          content: url("./images/sec2.png?v=20260929-5");
          object-fit: cover;
          object-position: center center;
          pointer-events: none;
          z-index: 1;
        }

        /* Animated Top Flowers Layer */
        .top-flowers-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
          overflow: hidden;
        }

        .top-flower-garland {
          position: absolute;
          top: -5px;
          width: 30%;
          max-width: 160px;
          transform-origin: top center;
          filter: drop-shadow(0 4px 8px rgba(125, 91, 70, 0.15));
        }

        .garland-left {
          left: 2%;
          animation: swayGarlandLeft 4.8s ease-in-out infinite alternate;
        }

        .garland-right {
          right: 2%;
          animation: swayGarlandRight 5.2s ease-in-out infinite alternate-reverse;
        }

        @keyframes swayGarlandLeft {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(3.5deg) scale(1.03); }
          100% { transform: rotate(-2.5deg) scale(0.98); }
        }

        @keyframes swayGarlandRight {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-3.5deg) scale(1.03); }
          100% { transform: rotate(2.5deg) scale(0.98); }
        }

        .falling-petal {
          position: absolute;
          width: 9px;
          height: 13px;
          background: radial-gradient(circle, #FFFDF8 0%, #F3E5D4 100%);
          border-radius: 50% 0 50% 50%;
          opacity: 0.85;
          filter: drop-shadow(0 2px 3px rgba(125, 91, 70, 0.15));
          animation: petalFall 6.5s linear infinite;
        }

        .petal-1 { left: 12%; animation-delay: 0s; animation-duration: 8.8s; }
        .petal-2 { left: 28%; animation-delay: 1.8s; animation-duration: 9.5s; }
        .petal-3 { right: 28%; animation-delay: 0.9s; animation-duration: 9.2s; }
        .petal-4 { right: 12%; animation-delay: 2.7s; animation-duration: 10s; }
        .petal-5 { left: 45%; animation-delay: 0.5s; animation-duration: 9s; }
        .petal-6 { right: 45%; animation-delay: 1.2s; animation-duration: 10.5s; }
        .petal-7 { left: 20%; animation-delay: 3s; animation-duration: 9.8s; }
        .petal-8 { right: 20%; animation-delay: 2s; animation-duration: 8.5s; }
        .petal-9 { left: 60%; animation-delay: 1.5s; animation-duration: 9.5s; }
        .petal-10 { right: 60%; animation-delay: 3.5s; animation-duration: 10.2s; }
        .petal-11 { left: 35%; animation-delay: 2.2s; animation-duration: 9s; }
        .petal-12 { right: 35%; animation-delay: 4.1s; animation-duration: 10.8s; }

        @keyframes petalFall {
          0% {
            transform: translateY(-15px) rotate(0deg) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(100vh) rotate(320deg) translateX(30px);
            opacity: 0;
          }
        }

        /* Inner Content Area */
        .couple-section-inner {
          position: relative;
          z-index: 5;
          width: min(82%, 620px);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 7%;
          padding-bottom: 8%;
          box-sizing: border-box;
          margin: 0 auto;
          animation: canvaContentFadeIn 1.5s ease-out both;
        }

        @keyframes canvaContentFadeIn {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Top Header Invitation Lines */
        .invitation-request-line {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(15px, 3.1vw, 18px);
          font-weight: 500;
          color: #7D5B46;
          letter-spacing: 0.035em;
          margin: 0 0 7px;
          max-width: 100%;
          width: 100%;
          line-height: 1.3;
          white-space: normal;
        }

        .invitation-request-line:nth-child(3) {
          font-weight: 700;
          margin-top: 7px;
          margin-bottom: 14px;
          max-width: 500px;
        }

        .invitation-request-line:nth-child(1) {
          max-width: 560px;
          margin-bottom: 13px;
        }

        .invitation-request-line:nth-child(2) {
          max-width: 380px;
          margin-bottom: 16px;
        }

        .wedding-ceremony-title {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(16.5px, 4.2vw, 22px);
          font-weight: 700;
          color: #3C281E;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 4px 0 10px;
          text-shadow: 0 1px 2px rgba(60, 40, 30, 0.1);
        }

        .invitation-of-line {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(14px, 3.3vw, 17px);
          font-style: italic;
          font-weight: 600;
          color: #7D5B46;
          margin: 0 0 10px;
        }

        /* Calligraphic Bride & Groom Names */
        .calligraphic-name {
          font-family: 'Beau Rivage', 'Great Vibes', 'Imperial Script', cursive;
          font-size: clamp(40px, 8.6vw, 62px);
          font-weight: 500;
          font-weight: 400;
          color: #2D1D15;
          line-height: 1.02;
          margin: 0;
          text-shadow: 0 2px 4px rgba(45, 29, 21, 0.12);
          filter: drop-shadow(0 2px 4px rgba(45, 29, 21, 0.1));
        }

        .parent-info-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(13px, 3.1vw, 16px);
          font-style: italic;
          font-weight: 600;
          color: #6C513F;
          margin-top: 5px;
          margin-bottom: 10px;
          letter-spacing: 0.03em;
          line-height: 1.2;
        }

        .weds-divider {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(14px, 3.1vw, 17px);
          font-weight: 600;
          color: #8C5D33;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin: 10px 0 10px;
          padding: 5px 22px;
          border-top: 1px solid rgba(140, 93, 51, 0.45);
          border-bottom: 1px solid rgba(140, 93, 51, 0.45);
        }

        @media screen and (max-width: 480px) {
          .couple-section-inner {
            width: min(86%, 560px);
            padding-top: 11%;
            padding-bottom: 10%;
          }
        }
      `}),a.jsxs("div",{className:"sec2-full-container",children:[a.jsx("img",{src:"./images/sec2.png?v=20260929-1",alt:"Wedding Ceremony Background",className:"sec2-bg-image"}),a.jsxs("div",{className:"top-flowers-wrapper","aria-hidden":"true",children:[a.jsx("div",{className:"falling-petal petal-1"}),a.jsx("div",{className:"falling-petal petal-2"}),a.jsx("div",{className:"falling-petal petal-3"}),a.jsx("div",{className:"falling-petal petal-4"}),a.jsx("div",{className:"falling-petal petal-5"}),a.jsx("div",{className:"falling-petal petal-6"}),a.jsx("div",{className:"falling-petal petal-7"}),a.jsx("div",{className:"falling-petal petal-8"}),a.jsx("div",{className:"falling-petal petal-9"}),a.jsx("div",{className:"falling-petal petal-10"}),a.jsx("div",{className:"falling-petal petal-11"}),a.jsx("div",{className:"falling-petal petal-12"}),a.jsx("div",{className:"top-flower-garland garland-left",children:a.jsxs("svg",{viewBox:"0 0 160 280",style:{width:"100%",height:"auto",display:"block"},children:[a.jsx("path",{d:"M 30 0 Q 35 70 20 140 Q 10 210 25 280",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M 80 0 Q 70 80 85 160 Q 95 230 75 270",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M 130 0 Q 140 60 125 130 Q 115 190 130 240",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("circle",{cx:"30",cy:"35",r:"9",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"25",cy:"65",r:"11",fill:"#FFF8EE",opacity:"0.92"}),a.jsx("circle",{cx:"20",cy:"95",r:"10",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"22",cy:"125",r:"8",fill:"#FDF4E5",opacity:"0.88"}),a.jsx("circle",{cx:"18",cy:"155",r:"9",fill:"#FFFDF9",opacity:"0.88"}),a.jsx("circle",{cx:"22",cy:"185",r:"7",fill:"#FFF8EE",opacity:"0.82"}),a.jsx("circle",{cx:"25",cy:"215",r:"6",fill:"#FFFDF9",opacity:"0.82"}),a.jsx("circle",{cx:"25",cy:"245",r:"5",fill:"#FFF8EE",opacity:"0.75"}),a.jsx("circle",{cx:"80",cy:"28",r:"10",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"75",cy:"60",r:"12",fill:"#FFF8EE",opacity:"0.92"}),a.jsx("circle",{cx:"72",cy:"95",r:"10",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"80",cy:"130",r:"11",fill:"#FDF4E5",opacity:"0.88"}),a.jsx("circle",{cx:"85",cy:"165",r:"9",fill:"#FFFDF9",opacity:"0.88"}),a.jsx("circle",{cx:"88",cy:"198",r:"8",fill:"#FFF8EE",opacity:"0.82"}),a.jsx("circle",{cx:"80",cy:"228",r:"6",fill:"#FFFDF9",opacity:"0.82"}),a.jsx("circle",{cx:"75",cy:"252",r:"5",fill:"#FFF8EE",opacity:"0.75"}),a.jsx("circle",{cx:"130",cy:"32",r:"9",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"135",cy:"62",r:"10",fill:"#FFF8EE",opacity:"0.92"}),a.jsx("circle",{cx:"130",cy:"92",r:"9",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"125",cy:"122",r:"8",fill:"#FDF4E5",opacity:"0.88"}),a.jsx("circle",{cx:"120",cy:"152",r:"7",fill:"#FFFDF9",opacity:"0.88"}),a.jsx("circle",{cx:"122",cy:"180",r:"6",fill:"#FFF8EE",opacity:"0.82"}),a.jsx("circle",{cx:"128",cy:"208",r:"5",fill:"#FFFDF9",opacity:"0.82"})]})}),a.jsx("div",{className:"top-flower-garland garland-right",children:a.jsxs("svg",{viewBox:"0 0 160 280",style:{width:"100%",height:"auto",display:"block"},children:[a.jsx("path",{d:"M 30 0 Q 20 60 35 130 Q 45 190 30 240",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M 80 0 Q 90 80 75 160 Q 65 230 85 270",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M 130 0 Q 125 70 140 140 Q 150 210 135 280",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("circle",{cx:"30",cy:"32",r:"9",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"25",cy:"62",r:"10",fill:"#FFF8EE",opacity:"0.92"}),a.jsx("circle",{cx:"30",cy:"92",r:"9",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"35",cy:"122",r:"8",fill:"#FDF4E5",opacity:"0.88"}),a.jsx("circle",{cx:"40",cy:"152",r:"7",fill:"#FFFDF9",opacity:"0.88"}),a.jsx("circle",{cx:"38",cy:"180",r:"6",fill:"#FFF8EE",opacity:"0.82"}),a.jsx("circle",{cx:"32",cy:"208",r:"5",fill:"#FFFDF9",opacity:"0.82"}),a.jsx("circle",{cx:"80",cy:"28",r:"10",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"85",cy:"60",r:"12",fill:"#FFF8EE",opacity:"0.92"}),a.jsx("circle",{cx:"88",cy:"95",r:"10",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"80",cy:"130",r:"11",fill:"#FDF4E5",opacity:"0.88"}),a.jsx("circle",{cx:"75",cy:"165",r:"9",fill:"#FFFDF9",opacity:"0.88"}),a.jsx("circle",{cx:"72",cy:"198",r:"8",fill:"#FFF8EE",opacity:"0.82"}),a.jsx("circle",{cx:"80",cy:"228",r:"6",fill:"#FFFDF9",opacity:"0.82"}),a.jsx("circle",{cx:"85",cy:"252",r:"5",fill:"#FFF8EE",opacity:"0.75"}),a.jsx("circle",{cx:"130",cy:"35",r:"9",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"135",cy:"65",r:"11",fill:"#FFF8EE",opacity:"0.92"}),a.jsx("circle",{cx:"140",cy:"95",r:"10",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"138",cy:"125",r:"8",fill:"#FDF4E5",opacity:"0.88"}),a.jsx("circle",{cx:"142",cy:"155",r:"9",fill:"#FFFDF9",opacity:"0.88"}),a.jsx("circle",{cx:"138",cy:"185",r:"7",fill:"#FFF8EE",opacity:"0.82"}),a.jsx("circle",{cx:"135",cy:"215",r:"6",fill:"#FFFDF9",opacity:"0.82"}),a.jsx("circle",{cx:"135",cy:"245",r:"5",fill:"#FFF8EE",opacity:"0.75"})]})})]}),a.jsxs("div",{className:"couple-section-inner",children:[a.jsx("div",{className:"invitation-request-line",children:"In the name of Allah,\n the Most Gracious,\n the Most Merciful"}),a.jsx("div",{className:"invitation-request-line",children:"Two hearts, two families,\n and one beautiful beginning."}),a.jsx("div",{className:"invitation-request-line",children:"With immense joy, we invite you\n to be part of the wedding\n celebrations of"}),a.jsx("h1",{className:"calligraphic-name",children:"Mohammed Ammar"}),a.jsx("div",{className:"parent-info-text",children:"S/O: Mrs. Shahin & Mr. Mohammed Asif Pochi"}),a.jsx("div",{className:"weds-divider",children:"WEDS"}),a.jsx("h1",{className:"calligraphic-name",children:"Bushra Shivani"}),a.jsx("div",{className:"parent-info-text",children:"D/O: Mrs. Amrin & Mr. Ayyub Shivani"})]})]})]})}function Rf(){return a.jsxs("section",{className:"redesign-haldi-section",children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&family=Alex+Brush&family=Beau+Rivage&family=Amiri:wght@400;700&display=swap');

        .redesign-haldi-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          padding: 0;
          margin: 0;
          background-color: #FAF5EB;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        .sec3-full-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: 100vh;
          height: 100dvh;
          min-height: 100dvh;
          aspect-ratio: auto;
          margin: 0;
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .sec3-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          pointer-events: none;
          z-index: 1;
        }

        /* Animated Top Flowers Layer */
        .top-flowers-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 32%;
          pointer-events: none;
          z-index: 3;
          overflow: hidden;
        }

        .top-flower-garland {
          position: absolute;
          top: -5px;
          width: 28%;
          max-width: 150px;
          transform-origin: top center;
          filter: drop-shadow(0 4px 8px rgba(125, 91, 70, 0.15));
        }

        .garland-left {
          left: 2%;
          animation: swayGarlandLeft 4.8s ease-in-out infinite alternate;
        }

        .garland-right {
          right: 2%;
          animation: swayGarlandRight 5.2s ease-in-out infinite alternate-reverse;
        }

        @keyframes swayGarlandLeft {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(3.5deg) scale(1.03); }
          100% { transform: rotate(-2.5deg) scale(0.98); }
        }

        @keyframes swayGarlandRight {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-3.5deg) scale(1.03); }
          100% { transform: rotate(2.5deg) scale(0.98); }
        }

        .haldi-section-inner {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 26%;
          padding-bottom: 8%;
          box-sizing: border-box;
        }

        /* Top InshaAllah Arabic Script */
        .inshallah-arabic {
          font-family: 'Aref Ruqaa', 'Noto Naskh Arabic', 'Amiri', serif;
          font-size: clamp(28px, 6vw, 40px);
          font-weight: 700;
          color: #2D231C;
          line-height: 1.4;
          margin-bottom: 4px;
          text-shadow: 0 1px 2px rgba(45, 35, 28, 0.1);
          letter-spacing: 0;
        }

        /* Haldi Title */
        .haldi-title {
          font-family: 'Great Vibes', 'Alex Brush', 'Beau Rivage', cursive;
          font-size: clamp(56px, 13vw, 82px);
          font-weight: 400;
          color: #C42750;
          line-height: 1.1;
          margin: 4px 0 8px;
          filter: drop-shadow(0 2px 4px rgba(196, 39, 80, 0.15));
        }

        /* Venue Note */
        .haldi-residence-note {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(16.5px, 4.0vw, 21px);
          font-style: italic;
          font-weight: 600;
          color: #8C6E2A;
          margin-bottom: 12px;
          letter-spacing: 0.04em;
        }

        /* Date Layout with Dividers */
        .date-flex-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .month-year-label {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(15px, 3.8vw, 20px);
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #9A7A38;
          text-transform: uppercase;
        }

        .date-divider {
          width: 1.5px;
          height: 34px;
          background-color: #C42750;
          opacity: 0.85;
        }

        .day-number-highlight {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(34px, 8.5vw, 48px);
          font-weight: 600;
          color: #9A7A38;
          line-height: 1;
        }

        /* Timing Detail */
        .timing-detail-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(16.5px, 4.0vw, 21px);
          font-weight: 600;
          color: #8C6E2A;
          letter-spacing: 0.04em;
        }

        @media screen and (max-width: 480px) {
          .haldi-section-inner {
            padding-top: 28%;
            padding-bottom: 8%;
          }
          .date-flex-box {
            gap: 12px;
          }
          .date-divider {
            height: 28px;
          }
        }
      `}),a.jsxs("div",{className:"sec3-full-container",children:[a.jsx("img",{src:"./images/sec3.png",alt:"Haldi Ceremony Background",className:"sec3-bg-image"}),a.jsxs("div",{className:"top-flowers-wrapper","aria-hidden":"true",children:[a.jsx("div",{className:"top-flower-garland garland-left",children:a.jsxs("svg",{viewBox:"0 0 160 280",style:{width:"100%",height:"auto",display:"block"},children:[a.jsx("path",{d:"M 30 0 Q 35 70 20 140 Q 10 210 25 280",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("circle",{cx:"30",cy:"35",r:"9",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"25",cy:"65",r:"11",fill:"#FFF8EE",opacity:"0.92"})]})}),a.jsx("div",{className:"top-flower-garland garland-right",children:a.jsxs("svg",{viewBox:"0 0 160 280",style:{width:"100%",height:"auto",display:"block"},children:[a.jsx("path",{d:"M 130 0 Q 125 70 140 140 Q 150 210 135 280",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("circle",{cx:"130",cy:"35",r:"9",fill:"#FFFDF9",opacity:"0.92"})]})})]}),a.jsxs("div",{className:"haldi-section-inner",children:[a.jsx("div",{className:"inshallah-arabic",children:"إِنْ شَاءَ ٱللَّٰهُ"}),a.jsx("h1",{className:"haldi-title",children:"Haldi"}),a.jsx("div",{className:"haldi-residence-note",children:"at our residence"}),a.jsxs("div",{className:"date-flex-box",children:[a.jsx("span",{className:"month-year-label",children:"DECEMBER"}),a.jsx("div",{className:"date-divider"}),a.jsx("span",{className:"day-number-highlight",children:"21"}),a.jsx("div",{className:"date-divider"}),a.jsx("span",{className:"month-year-label",children:"2026"})]}),a.jsx("div",{className:"timing-detail-text",children:"After (Asr Namaz)"})]})]})]})}function Mf(){return a.jsxs("section",{className:"redesign-mehendi-section",children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Beau+Rivage&family=Great+Vibes&family=Amiri:wght@400;700&display=swap');

        .redesign-mehendi-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          padding: 0;
          margin: 0;
          background-color: #2D1A38;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        .sec4-full-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: 100vh;
          height: 100dvh;
          min-height: 100dvh;
          aspect-ratio: auto;
          margin: 0;
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .sec4-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          pointer-events: none;
          z-index: 1;
        }

        /* Animated Top Flowers Layer */
        .top-flowers-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 32%;
          pointer-events: none;
          z-index: 3;
          overflow: hidden;
        }

        .top-flower-garland {
          position: absolute;
          top: -5px;
          width: 28%;
          max-width: 150px;
          transform-origin: top center;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
        }

        .garland-left {
          left: 2%;
          animation: swayGarlandLeft 4.8s ease-in-out infinite alternate;
        }

        .garland-right {
          right: 2%;
          animation: swayGarlandRight 5.2s ease-in-out infinite alternate-reverse;
        }

        @keyframes swayGarlandLeft {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(3.5deg) scale(1.03); }
          100% { transform: rotate(-2.5deg) scale(0.98); }
        }

        @keyframes swayGarlandRight {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-3.5deg) scale(1.03); }
          100% { transform: rotate(2.5deg) scale(0.98); }
        }

        .mehendi-section-inner {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 35%;
          padding-bottom: 10%;
          box-sizing: border-box;
        }

        /* Top InshaAllah Arabic Script */
        .inshallah-arabic-white {
          font-family: 'Aref Ruqaa', 'Noto Naskh Arabic', 'Amiri', serif;
          font-size: clamp(28px, 5.5vw, 38px);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.4;
          margin-bottom: 2px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
          letter-spacing: 0;
        }

        /* Floating Lights (Fireflies) */
        .floating-light {
          position: absolute;
          width: 5px;
          height: 5px;
          background-color: #ffeba1;
          border-radius: 50%;
          box-shadow: 0 0 8px 3px rgba(255, 235, 161, 0.6);
          opacity: 0;
          z-index: 2;
        }

        .light-1 { left: 10%; bottom: -5%; animation: floatLight 9s linear infinite, blinkLight 3.5s ease-in-out infinite; animation-delay: 0s, 0s; }
        .light-2 { left: 30%; bottom: -5%; animation: floatLight 11s linear infinite, blinkLight 4.2s ease-in-out infinite; animation-delay: 2s, 1s; }
        .light-3 { left: 50%; bottom: -5%; animation: floatLight 10s linear infinite, blinkLight 3.8s ease-in-out infinite; animation-delay: 4s, 2s; }
        .light-4 { left: 70%; bottom: -5%; animation: floatLight 12s linear infinite, blinkLight 4.5s ease-in-out infinite; animation-delay: 1s, 0.5s; }
        .light-5 { left: 90%; bottom: -5%; animation: floatLight 9.5s linear infinite, blinkLight 3.9s ease-in-out infinite; animation-delay: 3s, 1.5s; }
        .light-6 { left: 20%; bottom: -5%; animation: floatLight 11.5s linear infinite, blinkLight 4.1s ease-in-out infinite; animation-delay: 5s, 2.5s; }
        .light-7 { left: 80%; bottom: -5%; animation: floatLight 10.5s linear infinite, blinkLight 3.6s ease-in-out infinite; animation-delay: 1.5s, 0.8s; }

        @keyframes floatLight {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-110vh) translateX(30px); }
        }

        @keyframes blinkLight {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.8; }
        }

        /* Floating Music Notes */
        .floating-note {
          position: absolute;
          color: #E6C875;
          font-size: 24px;
          opacity: 0;
          z-index: 2;
          filter: drop-shadow(0 0 5px rgba(230, 200, 117, 0.6));
        }

        .note-1 { left: 25%; bottom: -10%; animation: floatNote 8s linear infinite, fadeNote 8s ease-in-out infinite; animation-delay: 0s; }
        .note-2 { left: 75%; bottom: -10%; animation: floatNote 10s linear infinite, fadeNote 10s ease-in-out infinite; animation-delay: 2s; font-size: 30px; }
        .note-3 { left: 40%; bottom: -10%; animation: floatNote 9s linear infinite, fadeNote 9s ease-in-out infinite; animation-delay: 4s; }
        .note-4 { left: 60%; bottom: -10%; animation: floatNote 11s linear infinite, fadeNote 11s ease-in-out infinite; animation-delay: 1.5s; font-size: 20px; }

        @keyframes floatNote {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          100% { transform: translateY(-100vh) translateX(-40px) rotate(30deg); }
        }

        @keyframes fadeNote {
          0%, 100% { opacity: 0; }
          20%, 80% { opacity: 0.7; }
        }

        /* Mehendi Title */
        .mehendi-title {
          font-family: 'Beau Rivage', 'Great Vibes', cursive;
          font-size: clamp(48px, 11vw, 74px);
          font-weight: 400;
          color: #E6C875;
          line-height: 1.1;
          margin: 0 0 6px;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
          0% { text-shadow: 0 0 8px rgba(230, 200, 117, 0.2); transform: scale(1); }
          100% { text-shadow: 0 0 16px rgba(230, 200, 117, 0.6); transform: scale(1.03); }
        }

        /* Venue Note */
        .mehendi-residence-label {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(16px, 4.0vw, 20px);
          font-style: italic;
          font-weight: 600;
          color: #D4C28D;
          margin-bottom: 8px;
        }

        /* Date Layout with Dividers */
        .mehendi-date-flex {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 10px;
        }

        .mehendi-month-year {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(14.5px, 3.8vw, 19px);
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #E6C875;
          text-transform: uppercase;
        }

        .mehendi-divider-line {
          width: 1.5px;
          height: 34px;
          background-color: #E6C875;
          opacity: 0.8;
        }

        .mehendi-day-num {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(32px, 8vw, 46px);
          font-weight: 600;
          color: #E6C875;
          line-height: 1;
        }

        .mehendi-time-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(16px, 3.8vw, 20px);
          font-weight: 600;
          color: #D4C28D;
          letter-spacing: 0.04em;
        }

        @media screen and (max-width: 480px) {
          .mehendi-section-inner {
            padding-top: 37%;
            padding-bottom: 10%;
          }
        }
      `}),a.jsxs("div",{className:"sec4-full-container",children:[a.jsx("img",{src:"./images/sec4.png",alt:"Mehendi Ceremony Background",className:"sec4-bg-image"}),a.jsx("div",{className:"floating-light light-1","aria-hidden":"true"}),a.jsx("div",{className:"floating-light light-2","aria-hidden":"true"}),a.jsx("div",{className:"floating-light light-3","aria-hidden":"true"}),a.jsx("div",{className:"floating-light light-4","aria-hidden":"true"}),a.jsx("div",{className:"floating-light light-5","aria-hidden":"true"}),a.jsx("div",{className:"floating-light light-6","aria-hidden":"true"}),a.jsx("div",{className:"floating-light light-7","aria-hidden":"true"}),a.jsx("div",{className:"floating-note note-1","aria-hidden":"true",children:"♪"}),a.jsx("div",{className:"floating-note note-2","aria-hidden":"true",children:"♫"}),a.jsx("div",{className:"floating-note note-3","aria-hidden":"true",children:"♪"}),a.jsx("div",{className:"floating-note note-4","aria-hidden":"true",children:"♫"}),a.jsxs("div",{className:"top-flowers-wrapper","aria-hidden":"true",children:[a.jsx("div",{className:"top-flower-garland garland-left",children:a.jsxs("svg",{viewBox:"0 0 160 280",style:{width:"100%",height:"auto",display:"block"},children:[a.jsx("path",{d:"M 30 0 Q 35 70 20 140 Q 10 210 25 280",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("circle",{cx:"30",cy:"35",r:"9",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"25",cy:"65",r:"11",fill:"#FFF8EE",opacity:"0.92"})]})}),a.jsx("div",{className:"top-flower-garland garland-right",children:a.jsxs("svg",{viewBox:"0 0 160 280",style:{width:"100%",height:"auto",display:"block"},children:[a.jsx("path",{d:"M 130 0 Q 125 70 140 140 Q 150 210 135 280",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("circle",{cx:"130",cy:"35",r:"9",fill:"#FFFDF9",opacity:"0.92"})]})})]}),a.jsxs("div",{className:"mehendi-section-inner",children:[a.jsx("div",{className:"inshallah-arabic-white",children:"إِنْ شَاءَ ٱللَّٰهُ"}),a.jsx("h1",{className:"mehendi-title",children:"Mehendi"}),a.jsx("div",{className:"mehendi-residence-label",children:"at our residence"}),a.jsxs("div",{className:"mehendi-date-flex",children:[a.jsx("span",{className:"mehendi-month-year",children:"DECEMBER"}),a.jsx("div",{className:"mehendi-divider-line"}),a.jsx("span",{className:"mehendi-day-num",children:"22"}),a.jsx("div",{className:"mehendi-divider-line"}),a.jsx("span",{className:"mehendi-month-year",children:"2026"})]}),a.jsx("div",{className:"mehendi-time-text",children:"After (Asr Namaz)"})]})]})]})}function Af(){const e=_.useRef(null),[t,n]=_.useState(!1);return _.useEffect(()=>{const r=new IntersectionObserver(([i])=>{i.isIntersecting?n(!0):n(!1)},{threshold:.2});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[]),a.jsxs("section",{className:"redesign-nikah-section",ref:e,children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Beau+Rivage&family=Great+Vibes&family=Amiri:wght@400;700&display=swap');

        .redesign-nikah-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          padding: 0;
          margin: 0;
          background-color: #2D1A38;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        .sec5-full-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: 100vh;
          height: 100dvh;
          min-height: 100dvh;
          aspect-ratio: auto;
          margin: 0;
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .sec5-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          pointer-events: none;
          z-index: 1;
          animation: bgLightGlowPulse 4.5s ease-in-out infinite alternate;
        }

        @keyframes bgLightGlowPulse {
          0% {
            filter: brightness(1) contrast(1);
          }
          50% {
            filter: brightness(1.07) contrast(1.04) drop-shadow(0 0 12px rgba(255, 220, 140, 0.25));
          }
          100% {
            filter: brightness(1.02) contrast(1.02);
          }
        }

        /* Animated Top Flowers Layer */
        .top-flowers-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 32%;
          pointer-events: none;
          z-index: 3;
          overflow: hidden;
        }

        .top-flower-garland {
          position: absolute;
          top: -5px;
          width: 28%;
          max-width: 150px;
          transform-origin: top center;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
        }

        .garland-left {
          left: 2%;
          animation: swayGarlandLeft 4.8s ease-in-out infinite alternate;
        }

        .garland-right {
          right: 2%;
          animation: swayGarlandRight 5.2s ease-in-out infinite alternate-reverse;
        }

        @keyframes swayGarlandLeft {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(3.5deg) scale(1.03); }
          100% { transform: rotate(-2.5deg) scale(0.98); }
        }

        @keyframes swayGarlandRight {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-3.5deg) scale(1.03); }
          100% { transform: rotate(2.5deg) scale(0.98); }
        }

        .nikah-section-inner {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 33%;
          padding-bottom: 8%;
          box-sizing: border-box;
          opacity: 0;
        }

        .animate-slide-down {
          animation: slideDownContent 0.8s ease-out forwards;
        }

        @keyframes slideDownContent {
          0% {
            opacity: 0;
            transform: translateY(-12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Nikah Schedule */
        .nikah-schedule {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 85%;
          max-width: 280px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(14px, 3.8vw, 18px);
          color: #E6C875;
          background: rgba(45, 26, 56, 0.4);
          padding: 12px 18px;
          border-radius: 8px;
          border: 1px solid rgba(230, 200, 117, 0.2);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .schedule-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed rgba(230, 200, 117, 0.3);
          padding-bottom: 4px;
        }
        .schedule-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        /* Twinkling Stars Overlay (Sparkles) */
        .stars-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 4;
        }
        
        .shining-star {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #fff;
          transform: rotate(45deg);
          box-shadow: 0 0 15px 4px #E6C875, 0 0 25px 8px #fff;
        }

        .shining-star.small { animation: starShineSmall 2.5s ease-in-out infinite alternate; }
        .shining-star.large { animation: starShineLarge 3.5s ease-in-out infinite alternate; }

        @keyframes starShineSmall {
          0% { opacity: 0.3; transform: scale(0.5) rotate(45deg); }
          100% { opacity: 1; transform: scale(1.2) rotate(45deg); filter: brightness(1.5); }
        }
        @keyframes starShineLarge {
          0% { opacity: 0.4; transform: scale(0.8) rotate(45deg); }
          100% { opacity: 1; transform: scale(1.6) rotate(45deg); filter: brightness(1.8); }
        }

        /* Left cluster */
        .star-1 { left: 20%; top: 46%; animation-delay: 0.1s; }
        .star-2 { left: 27%; top: 50%; animation-delay: 0.7s; }
        .star-3 { left: 14%; top: 52%; animation-delay: 1.2s; }
        .star-4 { left: 23%; top: 56%; animation-delay: 0.4s; }
        
        /* Right cluster */
        .star-5 { left: 75%; top: 28%; animation-delay: 0.5s; }
        .star-6 { left: 83%; top: 25%; animation-delay: 1.1s; }
        .star-7 { left: 70%; top: 32%; animation-delay: 0.3s; }
        .star-8 { left: 78%; top: 35%; animation-delay: 0.9s; }

        /* Lamp Glows Overlay */
        .lamp-glow {
          position: absolute;
          width: 90px;
          height: 90px;
          background: radial-gradient(circle, rgba(255, 215, 120, 0.55) 0%, rgba(255, 215, 120, 0) 70%);
          border-radius: 50%;
          mix-blend-mode: screen;
          animation: lampPulse 3.5s ease-in-out infinite alternate;
          z-index: 2;
          pointer-events: none;
        }

        @keyframes lampPulse {
          0% { opacity: 0.4; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.3); filter: brightness(1.2); }
        }
        
        .lamp-1 { left: -2%; top: 14%; animation-delay: 0s; }
        .lamp-2 { left: 15%; top: 4%; animation-delay: 1s; }
        .lamp-3 { left: 31%; top: 2%; animation-delay: 0.5s; }
        .lamp-4 { left: 60%; top: 2%; animation-delay: 1.5s; }
        .lamp-5 { left: 78%; top: 4%; animation-delay: 0.8s; }
        .lamp-6 { left: 93%; top: 14%; animation-delay: 2s; }

        @keyframes slideUpContent {
          0% {
            opacity: 0;
            transform: translateY(100vh);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Top InshaAllah Arabic Script */
        .inshallah-arabic-gold {
          font-family: 'Aref Ruqaa', 'Noto Naskh Arabic', 'Amiri', serif;
          font-size: clamp(28px, 5.5vw, 38px);
          font-weight: 700;
          color: #E6C875;
          line-height: 1.4;
          margin-bottom: 2px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
          letter-spacing: 0;
        }

        /* Nikah Title */
        .nikah-title {
          font-family: 'Beau Rivage', 'Great Vibes', cursive;
          font-size: clamp(48px, 11vw, 74px);
          font-weight: 400;
          color: #F0D68A;
          line-height: 1.1;
          margin: 0 0 8px;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
        }

        /* Date Layout with Dividers */
        .nikah-date-flex {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 10px;
        }

        .nikah-month-year {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(14.5px, 3.8vw, 19px);
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #E6C875;
          text-transform: uppercase;
        }

        .nikah-date-divider {
          width: 1.5px;
          height: 34px;
          background-color: #D4C28D;
          opacity: 0.85;
        }

        .nikah-day-number {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(32px, 8vw, 46px);
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        /* Timing Detail */
        .nikah-timing-detail {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(16px, 3.8vw, 20px);
          font-style: italic;
          font-weight: 600;
          color: #D4C28D;
          letter-spacing: 0.04em;
          margin-bottom: 14px;
        }

        /* Venue Details */
        .venue-name-title {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(15.5px, 3.8vw, 20px);
          font-weight: 700;
          color: #E6C875;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .venue-address-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(17px, 4.4vw, 21.5px);
          font-style: italic;
          font-weight: 600;
          color: #D4C28D;
          line-height: 1.35;
          max-width: 380px;
          margin: 0 auto;
          letter-spacing: 0.02em;
        }

        @media screen and (max-width: 480px) {
          .nikah-section-inner {
            padding-top: 35%;
            padding-bottom: 8%;
          }
          .nikah-date-flex {
            gap: 10px;
          }
          .nikah-date-divider {
            height: 26px;
          }
        }
      `}),a.jsxs("div",{className:"sec5-full-container",children:[a.jsx("img",{src:"./images/sec5.png",alt:"Nikah Ceremony Background",className:"sec5-bg-image"}),a.jsxs("div",{className:`top-flowers-wrapper ${t?"animate-slide-down":""}`,"aria-hidden":"true",style:{opacity:t?1:0},children:[a.jsx("div",{className:"top-flower-garland garland-left",children:a.jsxs("svg",{viewBox:"0 0 160 280",style:{width:"100%",height:"auto",display:"block"},children:[a.jsx("path",{d:"M 30 0 Q 35 70 20 140 Q 10 210 25 280",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("circle",{cx:"30",cy:"35",r:"9",fill:"#FFFDF9",opacity:"0.92"}),a.jsx("circle",{cx:"25",cy:"65",r:"11",fill:"#FFF8EE",opacity:"0.92"})]})}),a.jsx("div",{className:"top-flower-garland garland-right",children:a.jsxs("svg",{viewBox:"0 0 160 280",style:{width:"100%",height:"auto",display:"block"},children:[a.jsx("path",{d:"M 130 0 Q 125 70 140 140 Q 150 210 135 280",stroke:"rgba(255,255,255,0.7)",strokeWidth:"1.5",fill:"none"}),a.jsx("circle",{cx:"130",cy:"35",r:"9",fill:"#FFFDF9",opacity:"0.92"})]})})]}),a.jsx("div",{className:"lamp-glow lamp-1"}),a.jsx("div",{className:"lamp-glow lamp-2"}),a.jsx("div",{className:"lamp-glow lamp-3"}),a.jsx("div",{className:"lamp-glow lamp-4"}),a.jsx("div",{className:"lamp-glow lamp-5"}),a.jsx("div",{className:"lamp-glow lamp-6"}),a.jsxs("div",{className:"stars-overlay",children:[a.jsx("div",{className:"shining-star large star-1"}),a.jsx("div",{className:"shining-star small star-2"}),a.jsx("div",{className:"shining-star small star-3"}),a.jsx("div",{className:"shining-star large star-4"}),a.jsx("div",{className:"shining-star large star-5"}),a.jsx("div",{className:"shining-star small star-6"}),a.jsx("div",{className:"shining-star large star-7"}),a.jsx("div",{className:"shining-star small star-8"})]}),a.jsxs("div",{className:`nikah-section-inner ${t?"animate-slide-down":""}`,children:[a.jsx("div",{className:"inshallah-arabic-gold",children:"إِنْ شَاءَ ٱللَّٰهُ"}),a.jsx("h1",{className:"nikah-title",children:"Nikah"}),a.jsxs("div",{className:"nikah-date-flex",children:[a.jsx("span",{className:"nikah-month-year",children:"DECEMBER"}),a.jsx("div",{className:"nikah-date-divider"}),a.jsx("span",{className:"nikah-day-number",children:"23"}),a.jsx("div",{className:"nikah-date-divider"}),a.jsx("span",{className:"nikah-month-year",children:"2026"})]}),a.jsx("div",{className:"nikah-timing-detail",children:"After (Isha Namaz)"}),a.jsx("div",{className:"venue-name-title",children:"RAJWADA PALACE"}),a.jsx("div",{className:"venue-address-text",children:"Puruliya Road, Iqra Colony, Mango, Jamshedpur, Jharkhand"})]})]})]})}function Of(){const[e,t]=_.useState({days:0,hours:0,minutes:0,seconds:0});return _.useEffect(()=>{const n=new Date("December 23, 2026 19:30:00").getTime(),r=()=>{const l=new Date().getTime(),o=n-l;if(o>0){const s=Math.floor(o/864e5),u=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),f=Math.floor(o%(1e3*60*60)/(1e3*60)),g=Math.floor(o%(1e3*60)/1e3);t({days:s,hours:u,minutes:f,seconds:g})}else t({days:0,hours:0,minutes:0,seconds:0})};r();const i=setInterval(r,1e3);return()=>clearInterval(i)},[]),a.jsxs("section",{className:"wedding-countdown-section",children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .wedding-countdown-section {
          position: relative;
          width: 100%;
          background: #FAF5EB;
          padding: 45px 20px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        .countdown-heading {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(18px, 4.6vw, 26px);
          font-weight: 600;
          color: #8C5D33;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          margin-bottom: 26px;
        }

        .timer-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: clamp(12px, 3.5vw, 24px);
          max-width: 580px;
          width: 100%;
        }

        .timer-unit-card {
          flex: 1;
          min-width: 65px;
          background: #FFFDF9;
          padding: 18px 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          box-shadow: 0 6px 16px rgba(140, 93, 51, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .timer-unit-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.18);
        }

        .timer-value {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(30px, 7vw, 44px);
          font-weight: 600;
          color: #D4AF37;
          line-height: 1;
          margin-bottom: 6px;
        }

        .timer-label {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(13px, 3.2vw, 16px);
          font-weight: 600;
          color: #6C513F;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        @media screen and (max-width: 480px) {
          .wedding-countdown-section {
            padding: 40px 14px 20px;
          }
          .timer-grid {
            gap: 8px;
          }
          .timer-unit-card {
            padding: 14px 6px 10px;
          }
        }
      `}),a.jsx("div",{className:"countdown-heading",children:"The Celebration Begins In"}),a.jsxs("div",{className:"timer-grid",children:[a.jsxs("div",{className:"timer-unit-card",children:[a.jsx("div",{className:"timer-value",children:e.days}),a.jsx("div",{className:"timer-label",children:"Days"})]}),a.jsxs("div",{className:"timer-unit-card",children:[a.jsx("div",{className:"timer-value",children:e.hours}),a.jsx("div",{className:"timer-label",children:"Hours"})]}),a.jsxs("div",{className:"timer-unit-card",children:[a.jsx("div",{className:"timer-value",children:e.minutes}),a.jsx("div",{className:"timer-label",children:"Minutes"})]}),a.jsxs("div",{className:"timer-unit-card",children:[a.jsx("div",{className:"timer-value",children:e.seconds}),a.jsx("div",{className:"timer-label",children:"Seconds"})]})]})]})}function If(){const e=_.useRef(null),[t,n]=_.useState(0);_.useEffect(()=>{let i;const l=()=>{if(!e.current)return;const s=e.current.getBoundingClientRect(),u=window.innerHeight,f=s.height;let h=(u-s.top)/(u+f);h<0&&(h=0),h>1&&(h=1),n(h)},o=()=>{i&&cancelAnimationFrame(i),i=requestAnimationFrame(l)};return window.addEventListener("scroll",o,{passive:!0}),l(),()=>{window.removeEventListener("scroll",o),i&&cancelAnimationFrame(i)}},[]);const r=[{time:"8:00 PM",title:"Guest Arrival"},{time:"9:00 PM",title:"Nikah"},{time:"9:30 PM",title:"Dinner"},{time:"10:00 PM",title:"Photo-Shoot"}];return a.jsxs("section",{ref:e,className:"redesign-schedule-section",children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .redesign-schedule-section {
          position: relative;
          width: 100%;
          background-color: #FAF5EB;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* Two Torn Papers Container - Full Width on Mobile */
        .schedule-torn-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          overflow: hidden;
          filter: drop-shadow(0 4px 16px rgba(140, 93, 51, 0.08));
        }

        @media screen and (max-width: 520px) {
          .schedule-torn-container {
            max-width: 100%;
            width: 100%;
          }
        }

        /* Upper Torn Paper (Upside) */
        .torn-paper-upper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 56%;
          object-fit: fill;
          pointer-events: none;
          z-index: 1;
        }

        /* Lower Torn Paper (Downside) - Overlaps upper paper seamlessly */
        .torn-paper-lower {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 56%;
          object-fit: fill;
          pointer-events: none;
          z-index: 1;
        }

        /* Content Layer placed on the torn paper */
        .schedule-inner-content {
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: clamp(38px, 8vw, 50px) 16px clamp(40px, 8.5vw, 54px);
        }

        /* Header with Left and Right Gold Flourishes */
        .schedule-header-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(8px, 2.2vw, 16px);
          width: 100%;
          margin-bottom: clamp(18px, 3vh, 26px);
        }

        .schedule-flourish {
          height: clamp(16px, 3.8vw, 22px);
          width: auto;
          object-fit: contain;
          opacity: 0.95;
        }

        .schedule-title {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(34px, 7.8vw, 46px);
          font-weight: 400;
          color: #B48C3D;
          text-align: center;
          margin: 0;
          line-height: 1.1;
          white-space: nowrap;
          filter: drop-shadow(0 1px 1px rgba(180, 140, 61, 0.2));
        }

        /* Timeline Container with Compact, Authentic Spacing */
        .schedule-timeline {
          position: relative;
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 3.2vh, 28px);
          padding: 6px 0 10px;
          box-sizing: border-box;
        }

        /* Central Vertical Line */
        .timeline-line {
          position: absolute;
          top: 14px;
          bottom: 14px;
          left: 50%;
          width: 1.5px;
          background: rgba(156, 133, 117, 0.45);
          transform: translateX(-50%);
          z-index: 1;
        }

        /* Scroll-Driven Moving Rose Blossom Indicator */
        .flower-indicator {
          position: absolute;
          left: 50%;
          width: clamp(40px, 9vw, 48px);
          height: auto;
          transform: translate(-50%, -50%);
          z-index: 5;
          pointer-events: none;
          filter: drop-shadow(0 3px 6px rgba(125, 91, 70, 0.35));
          transition: top 0.12s cubic-bezier(0.2, 0.8, 0.3, 1);
        }

        /* Timeline Item Row */
        .schedule-item-row {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          width: 100%;
        }

        /* Left Column: Time */
        .schedule-time-col {
          flex: 1;
          text-align: right;
          padding-right: clamp(16px, 4.5vw, 26px);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(23.5px, 5.8vw, 31px);
          font-weight: 600;
          font-variant-numeric: lining-nums;
          font-feature-settings: "lnum" 1;
          color: #846F61;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        /* Center Diamond Node */
        .schedule-diamond-node {
          width: 8px;
          height: 8px;
          background-color: #8C7666;
          transform: rotate(45deg);
          border: 1px solid rgba(240, 228, 209, 0.6);
          flex-shrink: 0;
          z-index: 2;
        }

        /* Right Column: Title */
        .schedule-title-col {
          flex: 1;
          text-align: left;
          padding-left: clamp(16px, 4.5vw, 26px);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(21.5px, 5.2vw, 27px);
          font-weight: 600;
          color: #6C513F;
          line-height: 1.25;
        }
      `}),a.jsxs("div",{className:"schedule-torn-container",children:[a.jsx("img",{src:"./images/torn_paper_top.png",alt:"",className:"torn-paper-upper"}),a.jsx("img",{src:"./images/torn_paper_bottom.png",alt:"",className:"torn-paper-lower"}),a.jsxs("div",{className:"schedule-inner-content",children:[a.jsxs("div",{className:"schedule-header-wrap",children:[a.jsx("img",{src:"./images/schedule_flourish_left.png",alt:"",className:"schedule-flourish"}),a.jsx("h2",{className:"schedule-title",children:"Schedule of Events"}),a.jsx("img",{src:"./images/schedule_flourish_right.png",alt:"",className:"schedule-flourish"})]}),a.jsxs("div",{className:"schedule-timeline",children:[a.jsx("div",{className:"timeline-line"}),a.jsx("img",{src:"./images/rose_-_Copy.png",alt:"Rose",className:"flower-indicator",style:{top:`${10+t*80}%`}}),r.map((i,l)=>a.jsxs("div",{className:"schedule-item-row",children:[a.jsx("div",{className:"schedule-time-col",children:i.time}),a.jsx("div",{className:"schedule-diamond-node"}),a.jsx("div",{className:"schedule-title-col",children:i.title})]},l))]})]})]})]})}function Bf(){return a.jsxs("section",{className:"clean-location-section",children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Beau+Rivage&display=swap');

        .clean-location-section {
          position: relative;
          width: 100%;
          background: #FAF5EB;
          padding: 24px 20px 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
        }

        .location-header-title {
          font-family: 'Beau Rivage', 'Cormorant Garamond', cursive, serif;
          font-size: clamp(42px, 10vw, 64px);
          font-weight: 500;
          color: #D4AF37;
          margin: 0 0 10px;
          line-height: 1.1;
          filter: drop-shadow(0 2px 4px rgba(212, 175, 55, 0.2));
        }

        .location-venue-name {
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(18px, 4.6vw, 24px);
          font-weight: 700;
          color: #3C281E;
          letter-spacing: 0.15em;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .location-venue-address {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(16px, 3.8vw, 19px);
          font-style: italic;
          font-weight: 500;
          color: #7D5B46;
          margin-bottom: 24px;
          max-width: 420px;
          line-height: 1.4;
        }

        .map-iframe-wrapper {
          width: 100%;
          max-width: 480px;
          aspect-ratio: 16 / 10;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(140, 93, 51, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.4);
        }

        .map-iframe-element {
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media screen and (max-width: 480px) {
          .clean-location-section {
            padding: 22px 16px 45px;
          }
          .map-iframe-wrapper {
            aspect-ratio: 4 / 3;
          }
        }
      `}),a.jsx("h2",{className:"location-header-title",children:"Location"}),a.jsx("div",{className:"location-venue-name",children:"Rajwada Palace"}),a.jsx("div",{className:"location-venue-address",children:"Puruliya Road, Iqra Colony, Mango, Jamshedpur, Jharkhand"}),a.jsx("a",{href:"https://maps.app.goo.gl/8YCrtM2Y4FNkAPpz5",target:"_blank",rel:"noopener noreferrer",className:"map-iframe-wrapper",style:{display:"block",textDecoration:"none"},children:a.jsx("iframe",{className:"map-iframe-element",style:{pointerEvents:"none"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.3789123456!2d86.215!3d22.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31111111111%3A0x1111111111111111!2sMango%2C%20Jamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1782314483584!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Rajwada Palace Location Map"})})]})}function Uf(){return a.jsxs("footer",{className:"awesome-footer-container",children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600&display=swap');

        .awesome-footer-container {
          position: relative;
          width: 100%;
          background: linear-gradient(180deg, #18120D 0%, #0F0B08 100%);
          padding: 22px 16px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          border-top: 1px solid rgba(212, 175, 55, 0.28);
          overflow: hidden;
        }

        /* Subtle ambient glow */
        .footer-ambient-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 240px;
          height: 35px;
          background: radial-gradient(ellipse at top, rgba(212, 175, 55, 0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Line 1: Made with <heart> by Awesome Creation */
        .footer-made-with {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          font-family: 'Cinzel', Georgia, serif;
          font-size: clamp(12.5px, 3.4vw, 14.5px);
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #E2D3B8;
          text-transform: uppercase;
          margin-bottom: 14px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
        }

        .footer-heart-icon {
          width: 14px;
          height: 14px;
          fill: #E54B4B;
          filter: drop-shadow(0 0 5px rgba(229, 75, 75, 0.6));
          animation: footerHeartBeat 1.8s ease-in-out infinite;
          flex-shrink: 0;
          display: inline-block;
          vertical-align: middle;
        }

        @keyframes footerHeartBeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.22); }
          28% { transform: scale(1); }
          42% { transform: scale(1.18); }
          70% { transform: scale(1); }
        }

        .footer-brand-highlight {
          font-weight: 700;
          letter-spacing: 0.14em;
          background: linear-gradient(135deg, #FFF6E0 0%, #E6C875 55%, #C49742 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 1px 6px rgba(212, 175, 55, 0.3));
        }

        /* Line 2: 3 Action Icons (WhatsApp, Instagram, Website) */
        .footer-icons-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.14) 0%, rgba(212, 175, 55, 0.05) 100%);
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: #EADBC8;
          text-decoration: none;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.1);
          transition: all 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
          -webkit-tap-highlight-color: transparent;
        }

        .footer-social-btn:hover,
        .footer-social-btn:active {
          transform: translateY(-3px) scale(1.08);
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(212, 175, 55, 0.15) 100%);
          border-color: #F5DE88;
          color: #FFFDF8;
          box-shadow: 0 6px 18px rgba(212, 175, 55, 0.45), 0 0 14px rgba(212, 175, 55, 0.3);
        }

        .footer-btn-svg {
          width: 19px;
          height: 19px;
          fill: currentColor;
          transition: transform 0.25s ease;
        }

        .footer-social-btn:hover .footer-btn-svg {
          transform: scale(1.08);
        }

        .footer-btn-stroke {
          stroke: currentColor;
          fill: none;
        }
      `}),a.jsx("div",{className:"footer-ambient-glow"}),a.jsxs("div",{className:"footer-made-with",children:[a.jsx("span",{children:"Made with"}),a.jsx("svg",{className:"footer-heart-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:a.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),a.jsx("span",{children:"by"}),a.jsx("span",{className:"footer-brand-highlight",children:"Awesome Creation"})]}),a.jsxs("div",{className:"footer-icons-row",children:[a.jsx("a",{href:"https://wa.me/917411074379?text=Hi%20Awesome%20Creation",target:"_blank",rel:"noopener noreferrer",className:"footer-social-btn","aria-label":"Contact Awesome Creation on WhatsApp",title:"WhatsApp",children:a.jsx("svg",{className:"footer-btn-svg",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z"})})}),a.jsx("a",{href:"https://www.instagram.com/awesome__creation/",target:"_blank",rel:"noopener noreferrer",className:"footer-social-btn","aria-label":"Awesome Creation on Instagram",title:"Instagram",children:a.jsx("svg",{className:"footer-btn-svg",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),a.jsx("a",{href:"https://awesomecreation.in",target:"_blank",rel:"noopener noreferrer",className:"footer-social-btn","aria-label":"Awesome Creation Website",title:"Website",children:a.jsxs("svg",{className:"footer-btn-svg footer-btn-stroke",viewBox:"0 0 24 24",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),a.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})})]})]})}function Vf(){const[e,t]=_.useState(!1),[n,r]=_.useState(!1),[i,l]=_.useState(!1),o=_.useRef(!1),s=_.useRef(!1),u=_.useRef(!1),f=_.useRef(!1),g=_.useRef(null),h=_.useRef(null),m=_.useRef(null),w=_.useRef(0);_.useEffect(()=>{o.current=e},[e]),_.useEffect(()=>{s.current=n},[n]),_.useEffect(()=>{let x=null;const T=()=>{x&&clearTimeout(x),x=setTimeout(()=>{o.current||c()},8500)},d=()=>{x&&(clearTimeout(x),x=null),o.current||c()},c=()=>{t(!0),l(!0),r(!1),u.current=!1,m.current=performance.now()};return window.addEventListener("envelopeOpened",T),window.addEventListener("sec1Ended",d),()=>{window.removeEventListener("envelopeOpened",T),window.removeEventListener("sec1Ended",d),x&&clearTimeout(x)}},[]),_.useEffect(()=>{if(!e){h.current&&cancelAnimationFrame(h.current);return}const x=55,T=d=>{m.current||(m.current=d);const c=(d-m.current)/1e3;if(m.current=d,o.current&&!s.current&&!f.current){const p=x*c;if(w.current+=p,w.current>=1){const C=Math.floor(w.current);window.scrollBy({top:C,left:0,behavior:"instant"}),w.current-=C}const v=window.innerHeight+window.scrollY,k=document.documentElement.scrollHeight;if(v>=k-6){t(!1),r(!0);return}}h.current=requestAnimationFrame(T)};return h.current=requestAnimationFrame(T),()=>{h.current&&cancelAnimationFrame(h.current)}},[e]),_.useEffect(()=>{const x=()=>{f.current=!0,r(!0),g.current&&(clearTimeout(g.current),g.current=null)},T=()=>{f.current=!0,r(!0)},d=()=>{f.current=!1,!u.current&&o.current&&(g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{const p=window.innerHeight+window.scrollY,v=document.documentElement.scrollHeight;p<v-10&&(r(!1),m.current=performance.now())},2600))},c=()=>{f.current=!0,r(!0),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{f.current=!1,!u.current&&o.current&&(r(!1),m.current=performance.now())},2600)};return window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchmove",T,{passive:!0}),window.addEventListener("touchend",d,{passive:!0}),window.addEventListener("mousedown",x,{passive:!0}),window.addEventListener("mouseup",d,{passive:!0}),window.addEventListener("wheel",c,{passive:!0}),()=>{window.removeEventListener("touchstart",x),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",d),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",d),window.removeEventListener("wheel",c),g.current&&clearTimeout(g.current)}},[]);const S=x=>{x.stopPropagation(),n?(u.current=!1,r(!1),e||t(!0),m.current=performance.now()):(u.current=!0,r(!0),g.current&&(clearTimeout(g.current),g.current=null))};return i?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .auto-scroll-pill-btn {
          position: fixed;
          bottom: 24px;
          left: 20px;
          z-index: 2147483646;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          background: rgba(255, 252, 246, 0.92);
          border: 1.5px solid #D4AF37;
          border-radius: 30px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18), 0 0 10px rgba(212, 175, 55, 0.25);
          backdrop-filter: blur(8px);
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .auto-scroll-pill-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 22px rgba(212, 175, 55, 0.45);
        }

        .auto-scroll-icon {
          width: 14px;
          height: 14px;
          fill: #8C5D33;
          display: block;
        }

        .auto-scroll-label {
          font-family: 'Cinzel', Georgia, serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: #8C5D33;
          text-transform: uppercase;
        }

        .auto-scroll-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #48BB78;
          box-shadow: 0 0 6px #48BB78;
          animation: pulseGreen 1.8s ease-in-out infinite alternate;
        }

        .auto-scroll-dot.paused {
          background: #ECC94B;
          box-shadow: 0 0 6px #ECC94B;
          animation: none;
        }

        @keyframes pulseGreen {
          0% { opacity: 0.5; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.2); }
        }
      `}),a.jsxs("button",{type:"button",className:"auto-scroll-pill-btn",onClick:S,onTouchStart:x=>x.stopPropagation(),title:n?"Resume auto-scroll":"Pause auto-scroll",children:[a.jsx("span",{className:`auto-scroll-dot ${n?"paused":""}`}),n?a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"auto-scroll-icon",viewBox:"0 0 24 24",children:a.jsx("polygon",{points:"5,3 19,12 5,21"})}),a.jsx("span",{className:"auto-scroll-label",children:"RESUME"})]}):a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"auto-scroll-icon",viewBox:"0 0 24 24",children:[a.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}),a.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"})]}),a.jsx("span",{className:"auto-scroll-label",children:"AUTO-SCROLL"})]})]})]}):null}function Wf(){return _.useEffect(()=>{window.t_lazyload_update&&window.t_lazyload_update()},[]),a.jsxs("div",{id:"allrecords",className:"t-records t-records_animated t-records_visible","data-hook":"blocks-collection-content-node","data-tilda-project-id":"11836131","data-tilda-page-id":"155232023","data-tilda-page-alias":"thesacredgarden","data-tilda-formskey":"b9e82ac5385c1bce198c7c2711836131","data-tilda-cookie":"no","data-tilda-lazy":"yes","data-tilda-root-zone":"one","data-tilda-project-country":"NL",children:[a.jsx("style",{children:`
        html {
          scroll-behavior: auto;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background-color: #FAF5EB;
        }

        .redesign-hero-section,
        .redesign-couple-section,
        .redesign-haldi-section,
        .redesign-mehendi-section,
        .redesign-nikah-section {
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
        }

        .wedding-countdown-section,
        .redesign-schedule-section,
        .clean-location-section,
        .awesome-footer-container {
          width: 100%;
        }

        @media screen and (max-width: 768px) {
          .sec1-full-container,
          .sec2-full-container,
          .sec3-full-container,
          .sec4-full-container,
          .sec5-full-container,
          .sec6-full-container {
            height: 100vh !important;
            height: 100dvh !important;
            min-height: 100dvh !important;
            aspect-ratio: auto !important;
          }

          .sec1-bg-image,
          .sec2-bg-image,
          .sec3-bg-image,
          .sec4-bg-image,
          .sec5-bg-image,
          .sec6-bg-image,
          .sec1-bg-video {
            height: 100% !important;
            object-fit: cover !important;
          }
        }
      `}),a.jsx(Lf,{}),a.jsx(Vf,{}),a.jsx(Tf,{}),a.jsx(Df,{}),a.jsx(Rf,{}),a.jsx(Mf,{}),a.jsx(Af,{}),a.jsx(Of,{}),a.jsx(If,{}),a.jsx(Bf,{}),a.jsx(Uf,{})]})}Hi.createRoot(document.getElementById("root")).render(a.jsx(yc.StrictMode,{children:a.jsx(Wf,{})}));
