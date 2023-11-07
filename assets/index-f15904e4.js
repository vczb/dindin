(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function kP(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Iw={exports:{}},Tu={},$w={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var is=Symbol.for("react.element"),VP=Symbol.for("react.portal"),LP=Symbol.for("react.fragment"),FP=Symbol.for("react.strict_mode"),zP=Symbol.for("react.profiler"),BP=Symbol.for("react.provider"),UP=Symbol.for("react.context"),HP=Symbol.for("react.forward_ref"),WP=Symbol.for("react.suspense"),GP=Symbol.for("react.memo"),KP=Symbol.for("react.lazy"),gg=Symbol.iterator;function QP(e){return e===null||typeof e!="object"?null:(e=gg&&e[gg]||e["@@iterator"],typeof e=="function"?e:null)}var Cw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Aw=Object.assign,Dw={};function yo(e,t,n){this.props=e,this.context=t,this.refs=Dw,this.updater=n||Cw}yo.prototype.isReactComponent={};yo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mw(){}Mw.prototype=yo.prototype;function Uh(e,t,n){this.props=e,this.context=t,this.refs=Dw,this.updater=n||Cw}var Hh=Uh.prototype=new Mw;Hh.constructor=Uh;Aw(Hh,yo.prototype);Hh.isPureReactComponent=!0;var vg=Array.isArray,Rw=Object.prototype.hasOwnProperty,Wh={current:null},xw={key:!0,ref:!0,__self:!0,__source:!0};function Nw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Rw.call(t,r)&&!xw.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:is,type:e,key:o,ref:a,props:i,_owner:Wh.current}}function qP(e,t){return{$$typeof:is,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gh(e){return typeof e=="object"&&e!==null&&e.$$typeof===is}function XP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _g=/\/+/g;function qc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?XP(""+e.key):t.toString(36)}function dl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case is:case VP:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+qc(a,0):r,vg(i)?(n="",e!=null&&(n=e.replace(_g,"$&/")+"/"),dl(i,t,n,"",function(c){return c})):i!=null&&(Gh(i)&&(i=qP(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(_g,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",vg(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+qc(o,s);a+=dl(o,t,n,l,i)}else if(l=QP(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+qc(o,s++),a+=dl(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Is(e,t,n){if(e==null)return e;var r=[],i=0;return dl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function YP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},hl={transition:null},JP={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Wh};B.Children={map:Is,forEach:function(e,t,n){Is(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Is(e,function(){t++}),t},toArray:function(e){return Is(e,function(t){return t})||[]},only:function(e){if(!Gh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=yo;B.Fragment=LP;B.Profiler=zP;B.PureComponent=Uh;B.StrictMode=FP;B.Suspense=WP;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JP;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Aw({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Wh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Rw.call(t,l)&&!xw.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:is,type:e.type,key:i,ref:o,props:r,_owner:a}};B.createContext=function(e){return e={$$typeof:UP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:BP,_context:e},e.Consumer=e};B.createElement=Nw;B.createFactory=function(e){var t=Nw.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:HP,render:e}};B.isValidElement=Gh;B.lazy=function(e){return{$$typeof:KP,_payload:{_status:-1,_result:e},_init:YP}};B.memo=function(e,t){return{$$typeof:GP,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=hl.transition;hl.transition={};try{e()}finally{hl.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return rt.current.useCallback(e,t)};B.useContext=function(e){return rt.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};B.useEffect=function(e,t){return rt.current.useEffect(e,t)};B.useId=function(){return rt.current.useId()};B.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return rt.current.useMemo(e,t)};B.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};B.useRef=function(e){return rt.current.useRef(e)};B.useState=function(e){return rt.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return rt.current.useTransition()};B.version="18.2.0";$w.exports=B;var A=$w.exports;const Oe=jw(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZP=A,eT=Symbol.for("react.element"),tT=Symbol.for("react.fragment"),nT=Object.prototype.hasOwnProperty,rT=ZP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iT={key:!0,ref:!0,__self:!0,__source:!0};function kw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)nT.call(t,r)&&!iT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:eT,type:e,key:o,ref:a,props:i,_owner:rT.current}}Tu.Fragment=tT;Tu.jsx=kw;Tu.jsxs=kw;Iw.exports=Tu;var st=Iw.exports,Gf={},Vw={exports:{}},St={},Lw={exports:{}},Fw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,R){var x=$.length;$.push(R);e:for(;0<x;){var Q=x-1>>>1,ce=$[Q];if(0<i(ce,R))$[Q]=R,$[x]=ce,x=Q;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var R=$[0],x=$.pop();if(x!==R){$[0]=x;e:for(var Q=0,ce=$.length,gn=ce>>>1;Q<gn;){var gt=2*(Q+1)-1,kn=$[gt],vt=gt+1,Tt=$[vt];if(0>i(kn,x))vt<ce&&0>i(Tt,kn)?($[Q]=Tt,$[vt]=x,Q=vt):($[Q]=kn,$[gt]=x,Q=gt);else if(vt<ce&&0>i(Tt,x))$[Q]=Tt,$[vt]=x,Q=vt;else break e}}return R}function i($,R){var x=$.sortIndex-R.sortIndex;return x!==0?x:$.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],f=1,d=null,p=3,v=!1,y=!1,_=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g($){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=$)r(c),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(c)}}function w($){if(_=!1,g($),!y)if(n(l)!==null)y=!0,mn(O);else{var R=n(c);R!==null&&ot(w,R.startTime-$)}}function O($,R){y=!1,_&&(_=!1,m(D),D=-1),v=!0;var x=p;try{for(g(R),d=n(l);d!==null&&(!(d.expirationTime>R)||$&&!Je());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,p=d.priorityLevel;var ce=Q(d.expirationTime<=R);R=e.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(l)&&r(l),g(R)}else r(l);d=n(l)}if(d!==null)var gn=!0;else{var gt=n(c);gt!==null&&ot(w,gt.startTime-R),gn=!1}return gn}finally{d=null,p=x,v=!1}}var j=!1,E=null,D=-1,Y=5,V=-1;function Je(){return!(e.unstable_now()-V<Y)}function hn(){if(E!==null){var $=e.unstable_now();V=$;var R=!0;try{R=E(!0,$)}finally{R?pn():(j=!1,E=null)}}else j=!1}var pn;if(typeof h=="function")pn=function(){h(hn)};else if(typeof MessageChannel<"u"){var ii=new MessageChannel,Do=ii.port2;ii.port1.onmessage=hn,pn=function(){Do.postMessage(null)}}else pn=function(){b(hn,0)};function mn($){E=$,j||(j=!0,pn())}function ot($,R){D=b(function(){$(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,mn(O))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function($){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var x=p;p=R;try{return $()}finally{p=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,R){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var x=p;p=$;try{return R()}finally{p=x}},e.unstable_scheduleCallback=function($,R,x){var Q=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?Q+x:Q):x=Q,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=x+ce,$={id:f++,callback:R,priorityLevel:$,startTime:x,expirationTime:ce,sortIndex:-1},x>Q?($.sortIndex=x,t(c,$),n(l)===null&&$===n(c)&&(_?(m(D),D=-1):_=!0,ot(w,x-Q))):($.sortIndex=ce,t(l,$),y||v||(y=!0,mn(O))),$},e.unstable_shouldYield=Je,e.unstable_wrapCallback=function($){var R=p;return function(){var x=p;p=R;try{return $.apply(this,arguments)}finally{p=x}}}})(Fw);Lw.exports=Fw;var oT=Lw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zw=A,Ot=oT;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bw=new Set,ba={};function Zr(e,t){Gi(e,t),Gi(e+"Capture",t)}function Gi(e,t){for(ba[e]=t,e=0;e<t.length;e++)Bw.add(t[e])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=Object.prototype.hasOwnProperty,aT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yg={},wg={};function sT(e){return Kf.call(wg,e)?!0:Kf.call(yg,e)?!1:aT.test(e)?wg[e]=!0:(yg[e]=!0,!1)}function lT(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uT(e,t,n,r){if(t===null||typeof t>"u"||lT(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kh=/[\-:]([a-z])/g;function Qh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kh,Qh);Fe[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kh,Qh);Fe[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kh,Qh);Fe[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function qh(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uT(t,n,i,r)&&(n=null),r||i===null?sT(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nn=zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$s=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),Qf=Symbol.for("react.profiler"),Uw=Symbol.for("react.provider"),Hw=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),Xf=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Ww=Symbol.for("react.offscreen"),bg=Symbol.iterator;function Mo(e){return e===null||typeof e!="object"?null:(e=bg&&e[bg]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Xc;function Ko(e){if(Xc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xc=t&&t[1]||""}return`
`+Xc+e}var Yc=!1;function Jc(e,t){if(!e||Yc)return"";Yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Yc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ko(e):""}function cT(e){switch(e.tag){case 5:return Ko(e.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return e=Jc(e.type,!1),e;case 11:return e=Jc(e.type.render,!1),e;case 1:return e=Jc(e.type,!0),e;default:return""}}function Yf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gi:return"Fragment";case mi:return"Portal";case Qf:return"Profiler";case Xh:return"StrictMode";case qf:return"Suspense";case Xf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hw:return(e.displayName||"Context")+".Consumer";case Uw:return(e._context.displayName||"Context")+".Provider";case Yh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jh:return t=e.displayName||null,t!==null?t:Yf(e.type)||"Memo";case zn:t=e._payload,e=e._init;try{return Yf(e(t))}catch{}}return null}function fT(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yf(t);case 8:return t===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ar(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dT(e){var t=Gw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cs(e){e._valueTracker||(e._valueTracker=dT(e))}function Kw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jf(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Og(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ar(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qw(e,t){t=t.checked,t!=null&&qh(e,"checked",t,!1)}function Zf(e,t){Qw(e,t);var n=ar(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ed(e,t.type,n):t.hasOwnProperty("defaultValue")&&ed(e,t.type,ar(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Eg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ed(e,t,n){(t!=="number"||Cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qo=Array.isArray;function xi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ar(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function td(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Qo(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ar(n)}}function qw(e,t){var n=ar(t.value),r=ar(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var As,Yw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(As=As||document.createElement("div"),As.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=As.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Oa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hT=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(e){hT.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ea[t]=ea[e]})});function Jw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ea.hasOwnProperty(e)&&ea[e]?(""+t).trim():t+"px"}function Zw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var pT=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(e,t){if(t){if(pT[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function id(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var od=null;function Zh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ad=null,Ni=null,ki=null;function Tg(e){if(e=ss(e)){if(typeof ad!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Au(t),ad(e.stateNode,e.type,t))}}function eb(e){Ni?ki?ki.push(e):ki=[e]:Ni=e}function tb(){if(Ni){var e=Ni,t=ki;if(ki=Ni=null,Tg(e),t)for(e=0;e<t.length;e++)Tg(t[e])}}function nb(e,t){return e(t)}function rb(){}var Zc=!1;function ib(e,t,n){if(Zc)return e(t,n);Zc=!0;try{return nb(e,t,n)}finally{Zc=!1,(Ni!==null||ki!==null)&&(rb(),tb())}}function Ea(e,t){var n=e.stateNode;if(n===null)return null;var r=Au(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var sd=!1;if(In)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){sd=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{sd=!1}function mT(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var ta=!1,Al=null,Dl=!1,ld=null,gT={onError:function(e){ta=!0,Al=e}};function vT(e,t,n,r,i,o,a,s,l){ta=!1,Al=null,mT.apply(gT,arguments)}function _T(e,t,n,r,i,o,a,s,l){if(vT.apply(this,arguments),ta){if(ta){var c=Al;ta=!1,Al=null}else throw Error(P(198));Dl||(Dl=!0,ld=c)}}function ei(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ob(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jg(e){if(ei(e)!==e)throw Error(P(188))}function yT(e){var t=e.alternate;if(!t){if(t=ei(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return jg(i),e;if(o===r)return jg(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function ab(e){return e=yT(e),e!==null?sb(e):null}function sb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sb(e);if(t!==null)return t;e=e.sibling}return null}var lb=Ot.unstable_scheduleCallback,Ig=Ot.unstable_cancelCallback,wT=Ot.unstable_shouldYield,bT=Ot.unstable_requestPaint,me=Ot.unstable_now,OT=Ot.unstable_getCurrentPriorityLevel,ep=Ot.unstable_ImmediatePriority,ub=Ot.unstable_UserBlockingPriority,Ml=Ot.unstable_NormalPriority,ET=Ot.unstable_LowPriority,cb=Ot.unstable_IdlePriority,ju=null,un=null;function ST(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(ju,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:jT,PT=Math.log,TT=Math.LN2;function jT(e){return e>>>=0,e===0?32:31-(PT(e)/TT|0)|0}var Ds=64,Ms=4194304;function qo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=qo(s):(o&=a,o!==0&&(r=qo(o)))}else a=n&~i,a!==0?r=qo(a):o!==0&&(r=qo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Wt(t),i=1<<n,r|=e[n],t&=~i;return r}function IT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $T(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Wt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=IT(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function ud(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fb(){var e=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),e}function ef(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function os(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=n}function CT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Wt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function tp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function db(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hb,np,pb,mb,gb,cd=!1,Rs=[],Kn=null,Qn=null,qn=null,Sa=new Map,Pa=new Map,Un=[],AT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $g(e,t){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Sa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(t.pointerId)}}function xo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ss(t),t!==null&&np(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function DT(e,t,n,r,i){switch(t){case"focusin":return Kn=xo(Kn,e,t,n,r,i),!0;case"dragenter":return Qn=xo(Qn,e,t,n,r,i),!0;case"mouseover":return qn=xo(qn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Sa.set(o,xo(Sa.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Pa.set(o,xo(Pa.get(o)||null,e,t,n,r,i)),!0}return!1}function vb(e){var t=Tr(e.target);if(t!==null){var n=ei(t);if(n!==null){if(t=n.tag,t===13){if(t=ob(n),t!==null){e.blockedOn=t,gb(e.priority,function(){pb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);od=r,n.target.dispatchEvent(r),od=null}else return t=ss(n),t!==null&&np(t),e.blockedOn=n,!1;t.shift()}return!0}function Cg(e,t,n){pl(e)&&n.delete(t)}function MT(){cd=!1,Kn!==null&&pl(Kn)&&(Kn=null),Qn!==null&&pl(Qn)&&(Qn=null),qn!==null&&pl(qn)&&(qn=null),Sa.forEach(Cg),Pa.forEach(Cg)}function No(e,t){e.blockedOn===t&&(e.blockedOn=null,cd||(cd=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,MT)))}function Ta(e){function t(i){return No(i,e)}if(0<Rs.length){No(Rs[0],e);for(var n=1;n<Rs.length;n++){var r=Rs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kn!==null&&No(Kn,e),Qn!==null&&No(Qn,e),qn!==null&&No(qn,e),Sa.forEach(t),Pa.forEach(t),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)vb(n),n.blockedOn===null&&Un.shift()}var Vi=Nn.ReactCurrentBatchConfig,xl=!0;function RT(e,t,n,r){var i=q,o=Vi.transition;Vi.transition=null;try{q=1,rp(e,t,n,r)}finally{q=i,Vi.transition=o}}function xT(e,t,n,r){var i=q,o=Vi.transition;Vi.transition=null;try{q=4,rp(e,t,n,r)}finally{q=i,Vi.transition=o}}function rp(e,t,n,r){if(xl){var i=fd(e,t,n,r);if(i===null)ff(e,t,r,Nl,n),$g(e,r);else if(DT(i,e,t,n,r))r.stopPropagation();else if($g(e,r),t&4&&-1<AT.indexOf(e)){for(;i!==null;){var o=ss(i);if(o!==null&&hb(o),o=fd(e,t,n,r),o===null&&ff(e,t,r,Nl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ff(e,t,r,null,n)}}var Nl=null;function fd(e,t,n,r){if(Nl=null,e=Zh(r),e=Tr(e),e!==null)if(t=ei(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ob(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Nl=e,null}function _b(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OT()){case ep:return 1;case ub:return 4;case Ml:case ET:return 16;case cb:return 536870912;default:return 16}default:return 16}}var Wn=null,ip=null,ml=null;function yb(){if(ml)return ml;var e,t=ip,n=t.length,r,i="value"in Wn?Wn.value:Wn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ml=i.slice(e,1<r?1-r:void 0)}function gl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xs(){return!0}function Ag(){return!1}function Pt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xs:Ag,this.isPropagationStopped=Ag,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xs)},persist:function(){},isPersistent:xs}),t}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=Pt(wo),as=ue({},wo,{view:0,detail:0}),NT=Pt(as),tf,nf,ko,Iu=ue({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ko&&(ko&&e.type==="mousemove"?(tf=e.screenX-ko.screenX,nf=e.screenY-ko.screenY):nf=tf=0,ko=e),tf)},movementY:function(e){return"movementY"in e?e.movementY:nf}}),Dg=Pt(Iu),kT=ue({},Iu,{dataTransfer:0}),VT=Pt(kT),LT=ue({},as,{relatedTarget:0}),rf=Pt(LT),FT=ue({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),zT=Pt(FT),BT=ue({},wo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),UT=Pt(BT),HT=ue({},wo,{data:0}),Mg=Pt(HT),WT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=KT[e])?!!t[e]:!1}function ap(){return QT}var qT=ue({},as,{key:function(e){if(e.key){var t=WT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?GT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),XT=Pt(qT),YT=ue({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rg=Pt(YT),JT=ue({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),ZT=Pt(JT),ej=ue({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),tj=Pt(ej),nj=ue({},Iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rj=Pt(nj),ij=[9,13,27,32],sp=In&&"CompositionEvent"in window,na=null;In&&"documentMode"in document&&(na=document.documentMode);var oj=In&&"TextEvent"in window&&!na,wb=In&&(!sp||na&&8<na&&11>=na),xg=String.fromCharCode(32),Ng=!1;function bb(e,t){switch(e){case"keyup":return ij.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ob(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vi=!1;function aj(e,t){switch(e){case"compositionend":return Ob(t);case"keypress":return t.which!==32?null:(Ng=!0,xg);case"textInput":return e=t.data,e===xg&&Ng?null:e;default:return null}}function sj(e,t){if(vi)return e==="compositionend"||!sp&&bb(e,t)?(e=yb(),ml=ip=Wn=null,vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wb&&t.locale!=="ko"?null:t.data;default:return null}}var lj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lj[e.type]:t==="textarea"}function Eb(e,t,n,r){eb(r),t=kl(t,"onChange"),0<t.length&&(n=new op("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ra=null,ja=null;function uj(e){Rb(e,0)}function $u(e){var t=wi(e);if(Kw(t))return e}function cj(e,t){if(e==="change")return t}var Sb=!1;if(In){var of;if(In){var af="oninput"in document;if(!af){var Vg=document.createElement("div");Vg.setAttribute("oninput","return;"),af=typeof Vg.oninput=="function"}of=af}else of=!1;Sb=of&&(!document.documentMode||9<document.documentMode)}function Lg(){ra&&(ra.detachEvent("onpropertychange",Pb),ja=ra=null)}function Pb(e){if(e.propertyName==="value"&&$u(ja)){var t=[];Eb(t,ja,e,Zh(e)),ib(uj,t)}}function fj(e,t,n){e==="focusin"?(Lg(),ra=t,ja=n,ra.attachEvent("onpropertychange",Pb)):e==="focusout"&&Lg()}function dj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $u(ja)}function hj(e,t){if(e==="click")return $u(t)}function pj(e,t){if(e==="input"||e==="change")return $u(t)}function mj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:mj;function Ia(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kf.call(t,i)||!Qt(e[i],t[i]))return!1}return!0}function Fg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zg(e,t){var n=Fg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fg(n)}}function Tb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jb(){for(var e=window,t=Cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cl(e.document)}return t}function lp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gj(e){var t=jb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tb(n.ownerDocument.documentElement,n)){if(r!==null&&lp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zg(n,o);var a=zg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vj=In&&"documentMode"in document&&11>=document.documentMode,_i=null,dd=null,ia=null,hd=!1;function Bg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hd||_i==null||_i!==Cl(r)||(r=_i,"selectionStart"in r&&lp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&Ia(ia,r)||(ia=r,r=kl(dd,"onSelect"),0<r.length&&(t=new op("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_i)))}function Ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yi={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionend:Ns("Transition","TransitionEnd")},sf={},Ib={};In&&(Ib=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Cu(e){if(sf[e])return sf[e];if(!yi[e])return e;var t=yi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ib)return sf[e]=t[n];return e}var $b=Cu("animationend"),Cb=Cu("animationiteration"),Ab=Cu("animationstart"),Db=Cu("transitionend"),Mb=new Map,Ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(e,t){Mb.set(e,t),Zr(t,[e])}for(var lf=0;lf<Ug.length;lf++){var uf=Ug[lf],_j=uf.toLowerCase(),yj=uf[0].toUpperCase()+uf.slice(1);mr(_j,"on"+yj)}mr($b,"onAnimationEnd");mr(Cb,"onAnimationIteration");mr(Ab,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(Db,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function Hg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_T(r,t,void 0,e),e.currentTarget=null}function Rb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Hg(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Hg(i,s,c),o=l}}}if(Dl)throw e=ld,Dl=!1,ld=null,e}function ee(e,t){var n=t[_d];n===void 0&&(n=t[_d]=new Set);var r=e+"__bubble";n.has(r)||(xb(t,e,2,!1),n.add(r))}function cf(e,t,n){var r=0;t&&(r|=4),xb(n,e,r,t)}var ks="_reactListening"+Math.random().toString(36).slice(2);function $a(e){if(!e[ks]){e[ks]=!0,Bw.forEach(function(n){n!=="selectionchange"&&(wj.has(n)||cf(n,!1,e),cf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ks]||(t[ks]=!0,cf("selectionchange",!1,t))}}function xb(e,t,n,r){switch(_b(t)){case 1:var i=RT;break;case 4:i=xT;break;default:i=rp}n=i.bind(null,t,n,e),i=void 0,!sd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ff(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Tr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}ib(function(){var c=o,f=Zh(n),d=[];e:{var p=Mb.get(e);if(p!==void 0){var v=op,y=e;switch(e){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":v=XT;break;case"focusin":y="focus",v=rf;break;case"focusout":y="blur",v=rf;break;case"beforeblur":case"afterblur":v=rf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=VT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ZT;break;case $b:case Cb:case Ab:v=zT;break;case Db:v=tj;break;case"scroll":v=NT;break;case"wheel":v=rj;break;case"copy":case"cut":case"paste":v=UT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Rg}var _=(t&4)!==0,b=!_&&e==="scroll",m=_?p!==null?p+"Capture":null:p;_=[];for(var h=c,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Ea(h,m),w!=null&&_.push(Ca(h,w,g)))),b)break;h=h.return}0<_.length&&(p=new v(p,y,null,n,f),d.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==od&&(y=n.relatedTarget||n.fromElement)&&(Tr(y)||y[$n]))break e;if((v||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?Tr(y):null,y!==null&&(b=ei(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(_=Dg,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=Rg,w="onPointerLeave",m="onPointerEnter",h="pointer"),b=v==null?p:wi(v),g=y==null?p:wi(y),p=new _(w,h+"leave",v,n,f),p.target=b,p.relatedTarget=g,w=null,Tr(f)===c&&(_=new _(m,h+"enter",y,n,f),_.target=g,_.relatedTarget=b,w=_),b=w,v&&y)t:{for(_=v,m=y,h=0,g=_;g;g=oi(g))h++;for(g=0,w=m;w;w=oi(w))g++;for(;0<h-g;)_=oi(_),h--;for(;0<g-h;)m=oi(m),g--;for(;h--;){if(_===m||m!==null&&_===m.alternate)break t;_=oi(_),m=oi(m)}_=null}else _=null;v!==null&&Wg(d,p,v,_,!1),y!==null&&b!==null&&Wg(d,b,y,_,!0)}}e:{if(p=c?wi(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var O=cj;else if(kg(p))if(Sb)O=pj;else{O=dj;var j=fj}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=hj);if(O&&(O=O(e,c))){Eb(d,O,n,f);break e}j&&j(e,p,c),e==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&ed(p,"number",p.value)}switch(j=c?wi(c):window,e){case"focusin":(kg(j)||j.contentEditable==="true")&&(_i=j,dd=c,ia=null);break;case"focusout":ia=dd=_i=null;break;case"mousedown":hd=!0;break;case"contextmenu":case"mouseup":case"dragend":hd=!1,Bg(d,n,f);break;case"selectionchange":if(vj)break;case"keydown":case"keyup":Bg(d,n,f)}var E;if(sp)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else vi?bb(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(wb&&n.locale!=="ko"&&(vi||D!=="onCompositionStart"?D==="onCompositionEnd"&&vi&&(E=yb()):(Wn=f,ip="value"in Wn?Wn.value:Wn.textContent,vi=!0)),j=kl(c,D),0<j.length&&(D=new Mg(D,e,null,n,f),d.push({event:D,listeners:j}),E?D.data=E:(E=Ob(n),E!==null&&(D.data=E)))),(E=oj?aj(e,n):sj(e,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(f=new Mg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=E))}Rb(d,t)})}function Ca(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ea(e,n),o!=null&&r.unshift(Ca(e,o,i)),o=Ea(e,t),o!=null&&r.push(Ca(e,o,i))),e=e.return}return r}function oi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=Ea(n,o),l!=null&&a.unshift(Ca(n,l,s))):i||(l=Ea(n,o),l!=null&&a.push(Ca(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var bj=/\r\n?/g,Oj=/\u0000|\uFFFD/g;function Gg(e){return(typeof e=="string"?e:""+e).replace(bj,`
`).replace(Oj,"")}function Vs(e,t,n){if(t=Gg(t),Gg(e)!==t&&n)throw Error(P(425))}function Vl(){}var pd=null,md=null;function gd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,Ej=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,Sj=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(e){return Kg.resolve(null).then(e).catch(Pj)}:vd;function Pj(e){setTimeout(function(){throw e})}function df(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ta(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ta(t)}function Xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bo=Math.random().toString(36).slice(2),nn="__reactFiber$"+bo,Aa="__reactProps$"+bo,$n="__reactContainer$"+bo,_d="__reactEvents$"+bo,Tj="__reactListeners$"+bo,jj="__reactHandles$"+bo;function Tr(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$n]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qg(e);e!==null;){if(n=e[nn])return n;e=Qg(e)}return t}e=n,n=e.parentNode}return null}function ss(e){return e=e[nn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Au(e){return e[Aa]||null}var yd=[],bi=-1;function gr(e){return{current:e}}function re(e){0>bi||(e.current=yd[bi],yd[bi]=null,bi--)}function Z(e,t){bi++,yd[bi]=e.current,e.current=t}var sr={},Ye=gr(sr),ct=gr(!1),Ur=sr;function Ki(e,t){var n=e.type.contextTypes;if(!n)return sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ft(e){return e=e.childContextTypes,e!=null}function Ll(){re(ct),re(Ye)}function qg(e,t,n){if(Ye.current!==sr)throw Error(P(168));Z(Ye,t),Z(ct,n)}function Nb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,fT(e)||"Unknown",i));return ue({},n,r)}function Fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sr,Ur=Ye.current,Z(Ye,e),Z(ct,ct.current),!0}function Xg(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Nb(e,t,Ur),r.__reactInternalMemoizedMergedChildContext=e,re(ct),re(Ye),Z(Ye,e)):re(ct),Z(ct,n)}var yn=null,Du=!1,hf=!1;function kb(e){yn===null?yn=[e]:yn.push(e)}function Ij(e){Du=!0,kb(e)}function vr(){if(!hf&&yn!==null){hf=!0;var e=0,t=q;try{var n=yn;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yn=null,Du=!1}catch(i){throw yn!==null&&(yn=yn.slice(e+1)),lb(ep,vr),i}finally{q=t,hf=!1}}return null}var Oi=[],Ei=0,zl=null,Bl=0,jt=[],It=0,Hr=null,wn=1,bn="";function Er(e,t){Oi[Ei++]=Bl,Oi[Ei++]=zl,zl=e,Bl=t}function Vb(e,t,n){jt[It++]=wn,jt[It++]=bn,jt[It++]=Hr,Hr=e;var r=wn;e=bn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var o=32-Wt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,wn=1<<32-Wt(t)+i|n<<i|r,bn=o+e}else wn=1<<o|n<<i|r,bn=e}function up(e){e.return!==null&&(Er(e,1),Vb(e,1,0))}function cp(e){for(;e===zl;)zl=Oi[--Ei],Oi[Ei]=null,Bl=Oi[--Ei],Oi[Ei]=null;for(;e===Hr;)Hr=jt[--It],jt[It]=null,bn=jt[--It],jt[It]=null,wn=jt[--It],jt[It]=null}var bt=null,wt=null,oe=!1,Ft=null;function Lb(e,t){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,wt=Xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hr!==null?{id:wn,overflow:bn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,bt=e,wt=null,!0):!1;default:return!1}}function wd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bd(e){if(oe){var t=wt;if(t){var n=t;if(!Yg(e,t)){if(wd(e))throw Error(P(418));t=Xn(n.nextSibling);var r=bt;t&&Yg(e,t)?Lb(r,n):(e.flags=e.flags&-4097|2,oe=!1,bt=e)}}else{if(wd(e))throw Error(P(418));e.flags=e.flags&-4097|2,oe=!1,bt=e}}}function Jg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function Ls(e){if(e!==bt)return!1;if(!oe)return Jg(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gd(e.type,e.memoizedProps)),t&&(t=wt)){if(wd(e))throw Fb(),Error(P(418));for(;t;)Lb(e,t),t=Xn(t.nextSibling)}if(Jg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=Xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=bt?Xn(e.stateNode.nextSibling):null;return!0}function Fb(){for(var e=wt;e;)e=Xn(e.nextSibling)}function Qi(){wt=bt=null,oe=!1}function fp(e){Ft===null?Ft=[e]:Ft.push(e)}var $j=Nn.ReactCurrentBatchConfig;function Vt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ul=gr(null),Hl=null,Si=null,dp=null;function hp(){dp=Si=Hl=null}function pp(e){var t=Ul.current;re(Ul),e._currentValue=t}function Od(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Li(e,t){Hl=e,dp=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(dp!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(Hl===null)throw Error(P(308));Si=e,Hl.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var jr=null;function mp(e){jr===null?jr=[e]:jr.push(e)}function zb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mp(t)):(n.next=i.next,i.next=n),t.interleaved=n,Cn(e,r)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bn=!1;function gp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Cn(e,n)}return i=r.interleaved,i===null?(t.next=t,mp(r)):(t.next=i.next,i.next=t),r.interleaved=t,Cn(e,n)}function vl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tp(e,n)}}function Zg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wl(e,t,n,r){var i=e.updateQueue;Bn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,f=c=l=null,s=o;do{var p=s.lane,v=s.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,_=s;switch(p=t,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=ue({},d,p);break e;case 2:Bn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=v,l=d):f=f.next=v,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gr|=a,e.lanes=a,e.memoizedState=d}}function ev(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Ub=new zw.Component().refs;function Ed(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mu={isMounted:function(e){return(e=e._reactInternals)?ei(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Zn(e),o=Pn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Yn(e,o,i),t!==null&&(Gt(t,e,i,r),vl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Zn(e),o=Pn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Yn(e,o,i),t!==null&&(Gt(t,e,i,r),vl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Zn(e),i=Pn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yn(e,i,r),t!==null&&(Gt(t,e,r,n),vl(t,e,r))}};function tv(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ia(n,r)||!Ia(i,o):!0}function Hb(e,t,n){var r=!1,i=sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Rt(o):(i=ft(t)?Ur:Ye.current,r=t.contextTypes,o=(r=r!=null)?Ki(e,i):sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function nv(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mu.enqueueReplaceState(t,t.state,null)}function Sd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ub,gp(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Rt(o):(o=ft(t)?Ur:Ye.current,i.context=Ki(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ed(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mu.enqueueReplaceState(i,i.state,null),Wl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Ub&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Fs(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rv(e){var t=e._init;return t(e._payload)}function Wb(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=er(m,h),m.index=0,m.sibling=null,m}function o(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,g,w){return h===null||h.tag!==6?(h=wf(g,m.mode,w),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,w){var O=g.type;return O===gi?f(m,h,g.props.children,w,g.key):h!==null&&(h.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===zn&&rv(O)===h.type)?(w=i(h,g.props),w.ref=Vo(m,h,g),w.return=m,w):(w=El(g.type,g.key,g.props,null,m.mode,w),w.ref=Vo(m,h,g),w.return=m,w)}function c(m,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=bf(g,m.mode,w),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function f(m,h,g,w,O){return h===null||h.tag!==7?(h=Rr(g,m.mode,w,O),h.return=m,h):(h=i(h,g),h.return=m,h)}function d(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=wf(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case $s:return g=El(h.type,h.key,h.props,null,m.mode,g),g.ref=Vo(m,null,h),g.return=m,g;case mi:return h=bf(h,m.mode,g),h.return=m,h;case zn:var w=h._init;return d(m,w(h._payload),g)}if(Qo(h)||Mo(h))return h=Rr(h,m.mode,g,null),h.return=m,h;Fs(m,h)}return null}function p(m,h,g,w){var O=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return O!==null?null:s(m,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $s:return g.key===O?l(m,h,g,w):null;case mi:return g.key===O?c(m,h,g,w):null;case zn:return O=g._init,p(m,h,O(g._payload),w)}if(Qo(g)||Mo(g))return O!==null?null:f(m,h,g,w,null);Fs(m,g)}return null}function v(m,h,g,w,O){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,s(h,m,""+w,O);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $s:return m=m.get(w.key===null?g:w.key)||null,l(h,m,w,O);case mi:return m=m.get(w.key===null?g:w.key)||null,c(h,m,w,O);case zn:var j=w._init;return v(m,h,g,j(w._payload),O)}if(Qo(w)||Mo(w))return m=m.get(g)||null,f(h,m,w,O,null);Fs(h,w)}return null}function y(m,h,g,w){for(var O=null,j=null,E=h,D=h=0,Y=null;E!==null&&D<g.length;D++){E.index>D?(Y=E,E=null):Y=E.sibling;var V=p(m,E,g[D],w);if(V===null){E===null&&(E=Y);break}e&&E&&V.alternate===null&&t(m,E),h=o(V,h,D),j===null?O=V:j.sibling=V,j=V,E=Y}if(D===g.length)return n(m,E),oe&&Er(m,D),O;if(E===null){for(;D<g.length;D++)E=d(m,g[D],w),E!==null&&(h=o(E,h,D),j===null?O=E:j.sibling=E,j=E);return oe&&Er(m,D),O}for(E=r(m,E);D<g.length;D++)Y=v(E,m,D,g[D],w),Y!==null&&(e&&Y.alternate!==null&&E.delete(Y.key===null?D:Y.key),h=o(Y,h,D),j===null?O=Y:j.sibling=Y,j=Y);return e&&E.forEach(function(Je){return t(m,Je)}),oe&&Er(m,D),O}function _(m,h,g,w){var O=Mo(g);if(typeof O!="function")throw Error(P(150));if(g=O.call(g),g==null)throw Error(P(151));for(var j=O=null,E=h,D=h=0,Y=null,V=g.next();E!==null&&!V.done;D++,V=g.next()){E.index>D?(Y=E,E=null):Y=E.sibling;var Je=p(m,E,V.value,w);if(Je===null){E===null&&(E=Y);break}e&&E&&Je.alternate===null&&t(m,E),h=o(Je,h,D),j===null?O=Je:j.sibling=Je,j=Je,E=Y}if(V.done)return n(m,E),oe&&Er(m,D),O;if(E===null){for(;!V.done;D++,V=g.next())V=d(m,V.value,w),V!==null&&(h=o(V,h,D),j===null?O=V:j.sibling=V,j=V);return oe&&Er(m,D),O}for(E=r(m,E);!V.done;D++,V=g.next())V=v(E,m,D,V.value,w),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?D:V.key),h=o(V,h,D),j===null?O=V:j.sibling=V,j=V);return e&&E.forEach(function(hn){return t(m,hn)}),oe&&Er(m,D),O}function b(m,h,g,w){if(typeof g=="object"&&g!==null&&g.type===gi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case $s:e:{for(var O=g.key,j=h;j!==null;){if(j.key===O){if(O=g.type,O===gi){if(j.tag===7){n(m,j.sibling),h=i(j,g.props.children),h.return=m,m=h;break e}}else if(j.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===zn&&rv(O)===j.type){n(m,j.sibling),h=i(j,g.props),h.ref=Vo(m,j,g),h.return=m,m=h;break e}n(m,j);break}else t(m,j);j=j.sibling}g.type===gi?(h=Rr(g.props.children,m.mode,w,g.key),h.return=m,m=h):(w=El(g.type,g.key,g.props,null,m.mode,w),w.ref=Vo(m,h,g),w.return=m,m=w)}return a(m);case mi:e:{for(j=g.key;h!==null;){if(h.key===j)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=bf(g,m.mode,w),h.return=m,m=h}return a(m);case zn:return j=g._init,b(m,h,j(g._payload),w)}if(Qo(g))return y(m,h,g,w);if(Mo(g))return _(m,h,g,w);Fs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=wf(g,m.mode,w),h.return=m,m=h),a(m)):n(m,h)}return b}var qi=Wb(!0),Gb=Wb(!1),ls={},cn=gr(ls),Da=gr(ls),Ma=gr(ls);function Ir(e){if(e===ls)throw Error(P(174));return e}function vp(e,t){switch(Z(Ma,t),Z(Da,e),Z(cn,ls),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nd(t,e)}re(cn),Z(cn,t)}function Xi(){re(cn),re(Da),re(Ma)}function Kb(e){Ir(Ma.current);var t=Ir(cn.current),n=nd(t,e.type);t!==n&&(Z(Da,e),Z(cn,n))}function _p(e){Da.current===e&&(re(cn),re(Da))}var se=gr(0);function Gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pf=[];function yp(){for(var e=0;e<pf.length;e++)pf[e]._workInProgressVersionPrimary=null;pf.length=0}var _l=Nn.ReactCurrentDispatcher,mf=Nn.ReactCurrentBatchConfig,Wr=0,le=null,be=null,Pe=null,Kl=!1,oa=!1,Ra=0,Cj=0;function ze(){throw Error(P(321))}function wp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function bp(e,t,n,r,i,o){if(Wr=o,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_l.current=e===null||e.memoizedState===null?Rj:xj,e=n(r,i),oa){o=0;do{if(oa=!1,Ra=0,25<=o)throw Error(P(301));o+=1,Pe=be=null,t.updateQueue=null,_l.current=Nj,e=n(r,i)}while(oa)}if(_l.current=Ql,t=be!==null&&be.next!==null,Wr=0,Pe=be=le=null,Kl=!1,t)throw Error(P(300));return e}function Op(){var e=Ra!==0;return Ra=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?le.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function xt(){if(be===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Pe===null?le.memoizedState:Pe.next;if(t!==null)Pe=t,be=e;else{if(e===null)throw Error(P(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Pe===null?le.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function xa(e,t){return typeof t=="function"?t(e):t}function gf(e){var t=xt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var f=c.lane;if((Wr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,le.lanes|=f,Gr|=f}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,Qt(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,le.lanes|=o,Gr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vf(e){var t=xt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Qt(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qb(){}function qb(e,t){var n=le,r=xt(),i=t(),o=!Qt(r.memoizedState,i);if(o&&(r.memoizedState=i,ut=!0),r=r.queue,Ep(Jb.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Na(9,Yb.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(P(349));Wr&30||Xb(n,t,i)}return i}function Xb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yb(e,t,n,r){t.value=n,t.getSnapshot=r,Zb(t)&&eO(e)}function Jb(e,t,n){return n(function(){Zb(t)&&eO(e)})}function Zb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function eO(e){var t=Cn(e,1);t!==null&&Gt(t,e,1,-1)}function iv(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=Mj.bind(null,le,e),[t.memoizedState,e]}function Na(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tO(){return xt().memoizedState}function yl(e,t,n,r){var i=en();le.flags|=e,i.memoizedState=Na(1|t,n,void 0,r===void 0?null:r)}function Ru(e,t,n,r){var i=xt();r=r===void 0?null:r;var o=void 0;if(be!==null){var a=be.memoizedState;if(o=a.destroy,r!==null&&wp(r,a.deps)){i.memoizedState=Na(t,n,o,r);return}}le.flags|=e,i.memoizedState=Na(1|t,n,o,r)}function ov(e,t){return yl(8390656,8,e,t)}function Ep(e,t){return Ru(2048,8,e,t)}function nO(e,t){return Ru(4,2,e,t)}function rO(e,t){return Ru(4,4,e,t)}function iO(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function oO(e,t,n){return n=n!=null?n.concat([e]):null,Ru(4,4,iO.bind(null,t,e),n)}function Sp(){}function aO(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sO(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lO(e,t,n){return Wr&21?(Qt(n,t)||(n=fb(),le.lanes|=n,Gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function Aj(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=mf.transition;mf.transition={};try{e(!1),t()}finally{q=n,mf.transition=r}}function uO(){return xt().memoizedState}function Dj(e,t,n){var r=Zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cO(e))fO(t,n);else if(n=zb(e,t,n,r),n!==null){var i=nt();Gt(n,e,r,i),dO(n,t,r)}}function Mj(e,t,n){var r=Zn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cO(e))fO(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Qt(s,a)){var l=t.interleaved;l===null?(i.next=i,mp(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=zb(e,t,i,r),n!==null&&(i=nt(),Gt(n,e,r,i),dO(n,t,r))}}function cO(e){var t=e.alternate;return e===le||t!==null&&t===le}function fO(e,t){oa=Kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dO(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tp(e,n)}}var Ql={readContext:Rt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Rj={readContext:Rt,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:ov,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yl(4194308,4,iO.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yl(4194308,4,e,t)},useInsertionEffect:function(e,t){return yl(4,2,e,t)},useMemo:function(e,t){var n=en();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=en();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dj.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:iv,useDebugValue:Sp,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=iv(!1),t=e[0];return e=Aj.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,i=en();if(oe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ie===null)throw Error(P(349));Wr&30||Xb(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ov(Jb.bind(null,r,o,e),[e]),r.flags|=2048,Na(9,Yb.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=en(),t=Ie.identifierPrefix;if(oe){var n=bn,r=wn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ra++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cj++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xj={readContext:Rt,useCallback:aO,useContext:Rt,useEffect:Ep,useImperativeHandle:oO,useInsertionEffect:nO,useLayoutEffect:rO,useMemo:sO,useReducer:gf,useRef:tO,useState:function(){return gf(xa)},useDebugValue:Sp,useDeferredValue:function(e){var t=xt();return lO(t,be.memoizedState,e)},useTransition:function(){var e=gf(xa)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Qb,useSyncExternalStore:qb,useId:uO,unstable_isNewReconciler:!1},Nj={readContext:Rt,useCallback:aO,useContext:Rt,useEffect:Ep,useImperativeHandle:oO,useInsertionEffect:nO,useLayoutEffect:rO,useMemo:sO,useReducer:vf,useRef:tO,useState:function(){return vf(xa)},useDebugValue:Sp,useDeferredValue:function(e){var t=xt();return be===null?t.memoizedState=e:lO(t,be.memoizedState,e)},useTransition:function(){var e=vf(xa)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Qb,useSyncExternalStore:qb,useId:uO,unstable_isNewReconciler:!1};function Yi(e,t){try{var n="",r=t;do n+=cT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _f(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kj=typeof WeakMap=="function"?WeakMap:Map;function hO(e,t,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xl||(Xl=!0,xd=r),Pd(e,t)},n}function pO(e,t,n){n=Pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pd(e,t),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function av(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kj;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Yj.bind(null,e,t,n),t.then(e,e))}function sv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lv(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pn(-1,1),t.tag=2,Yn(n,t,1))),n.lanes|=1),e)}var Vj=Nn.ReactCurrentOwner,ut=!1;function Ze(e,t,n,r){t.child=e===null?Gb(t,null,n,r):qi(t,e.child,n,r)}function uv(e,t,n,r,i){n=n.render;var o=t.ref;return Li(t,i),r=bp(e,t,n,r,o,i),n=Op(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,An(e,t,i)):(oe&&n&&up(t),t.flags|=1,Ze(e,t,r,i),t.child)}function cv(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Dp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,mO(e,t,o,r,i)):(e=El(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(a,r)&&e.ref===t.ref)return An(e,t,i)}return t.flags|=1,e=er(o,r),e.ref=t.ref,e.return=t,t.child=e}function mO(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ia(o,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,An(e,t,i)}return Td(e,t,n,r,i)}function gO(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Ti,yt),yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Ti,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Z(Ti,yt),yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Z(Ti,yt),yt|=r;return Ze(e,t,i,n),t.child}function vO(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Td(e,t,n,r,i){var o=ft(n)?Ur:Ye.current;return o=Ki(t,o),Li(t,i),n=bp(e,t,n,r,o,i),r=Op(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,An(e,t,i)):(oe&&r&&up(t),t.flags|=1,Ze(e,t,n,i),t.child)}function fv(e,t,n,r,i){if(ft(n)){var o=!0;Fl(t)}else o=!1;if(Li(t,i),t.stateNode===null)wl(e,t),Hb(t,n,r),Sd(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rt(c):(c=ft(n)?Ur:Ye.current,c=Ki(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&nv(t,a,r,c),Bn=!1;var p=t.memoizedState;a.state=p,Wl(t,r,a,i),l=t.memoizedState,s!==r||p!==l||ct.current||Bn?(typeof f=="function"&&(Ed(t,n,f,r),l=t.memoizedState),(s=Bn||tv(t,n,s,r,p,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Bb(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Vt(t.type,s),a.props=c,d=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rt(l):(l=ft(n)?Ur:Ye.current,l=Ki(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||p!==l)&&nv(t,a,r,l),Bn=!1,p=t.memoizedState,a.state=p,Wl(t,r,a,i);var y=t.memoizedState;s!==d||p!==y||ct.current||Bn?(typeof v=="function"&&(Ed(t,n,v,r),y=t.memoizedState),(c=Bn||tv(t,n,c,r,p,y,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return jd(e,t,n,r,o,i)}function jd(e,t,n,r,i,o){vO(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Xg(t,n,!1),An(e,t,o);r=t.stateNode,Vj.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=qi(t,e.child,null,o),t.child=qi(t,null,s,o)):Ze(e,t,s,o),t.memoizedState=r.state,i&&Xg(t,n,!0),t.child}function _O(e){var t=e.stateNode;t.pendingContext?qg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qg(e,t.context,!1),vp(e,t.containerInfo)}function dv(e,t,n,r,i){return Qi(),fp(i),t.flags|=256,Ze(e,t,n,r),t.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function $d(e){return{baseLanes:e,cachePool:null,transitions:null}}function yO(e,t,n){var r=t.pendingProps,i=se.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(se,i&1),e===null)return bd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ku(a,r,0,null),e=Rr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$d(n),t.memoizedState=Id,e):Pp(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Lj(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=er(s,o):(o=Rr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?$d(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Id,r}return o=e.child,e=o.sibling,r=er(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pp(e,t){return t=ku({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zs(e,t,n,r){return r!==null&&fp(r),qi(t,e.child,null,n),e=Pp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lj(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=_f(Error(P(422))),zs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ku({mode:"visible",children:r.children},i,0,null),o=Rr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&qi(t,e.child,null,a),t.child.memoizedState=$d(a),t.memoizedState=Id,o);if(!(t.mode&1))return zs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=_f(o,r,void 0),zs(e,t,a,r)}if(s=(a&e.childLanes)!==0,ut||s){if(r=Ie,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Cn(e,i),Gt(r,e,i,-1))}return Ap(),r=_f(Error(P(421))),zs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Jj.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,wt=Xn(i.nextSibling),bt=t,oe=!0,Ft=null,e!==null&&(jt[It++]=wn,jt[It++]=bn,jt[It++]=Hr,wn=e.id,bn=e.overflow,Hr=t),t=Pp(t,r.children),t.flags|=4096,t)}function hv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Od(e.return,t,n)}function yf(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wO(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ze(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hv(e,n,t);else if(e.tag===19)hv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Gl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yf(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yf(t,!0,n,null,o);break;case"together":yf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function An(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fj(e,t,n){switch(t.tag){case 3:_O(t),Qi();break;case 5:Kb(t);break;case 1:ft(t.type)&&Fl(t);break;case 4:vp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Z(Ul,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?yO(e,t,n):(Z(se,se.current&1),e=An(e,t,n),e!==null?e.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wO(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,gO(e,t,n)}return An(e,t,n)}var bO,Cd,OO,EO;bO=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cd=function(){};OO=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ir(cn.current);var o=null;switch(n){case"input":i=Jf(e,i),r=Jf(e,r),o=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":i=td(e,i),r=td(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vl)}rd(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ba.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ba.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ee("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};EO=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lo(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zj(e,t,n){var r=t.pendingProps;switch(cp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return ft(t.type)&&Ll(),Be(t),null;case 3:return r=t.stateNode,Xi(),re(ct),re(Ye),yp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ls(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ft!==null&&(Vd(Ft),Ft=null))),Cd(e,t),Be(t),null;case 5:_p(t);var i=Ir(Ma.current);if(n=t.type,e!==null&&t.stateNode!=null)OO(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Be(t),null}if(e=Ir(cn.current),Ls(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nn]=t,r[Aa]=o,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Xo.length;i++)ee(Xo[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Og(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":Sg(r,o),ee("invalid",r)}rd(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Vs(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Vs(r.textContent,s,e),i=["children",""+s]):ba.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ee("scroll",r)}switch(n){case"input":Cs(r),Eg(r,o,!0);break;case"textarea":Cs(r),Pg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[nn]=t,e[Aa]=r,bO(e,t,!1,!1),t.stateNode=e;e:{switch(a=id(n,r),n){case"dialog":ee("cancel",e),ee("close",e),i=r;break;case"iframe":case"object":case"embed":ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xo.length;i++)ee(Xo[i],e);i=r;break;case"source":ee("error",e),i=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),i=r;break;case"details":ee("toggle",e),i=r;break;case"input":Og(e,r),i=Jf(e,r),ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Sg(e,r),i=td(e,r),ee("invalid",e);break;default:i=r}rd(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Zw(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yw(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oa(e,l):typeof l=="number"&&Oa(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ba.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ee("scroll",e):l!=null&&qh(e,o,l,a))}switch(n){case"input":Cs(e),Eg(e,r,!1);break;case"textarea":Cs(e),Pg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ar(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xi(e,!!r.multiple,o,!1):r.defaultValue!=null&&xi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)EO(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Ir(Ma.current),Ir(cn.current),Ls(t)){if(r=t.stateNode,n=t.memoizedProps,r[nn]=t,(o=r.nodeValue!==n)&&(e=bt,e!==null))switch(e.tag){case 3:Vs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=t,t.stateNode=r}return Be(t),null;case 13:if(re(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&wt!==null&&t.mode&1&&!(t.flags&128))Fb(),Qi(),t.flags|=98560,o=!1;else if(o=Ls(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[nn]=t}else Qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),o=!1}else Ft!==null&&(Vd(Ft),Ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?Ee===0&&(Ee=3):Ap())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Xi(),Cd(e,t),e===null&&$a(t.stateNode.containerInfo),Be(t),null;case 10:return pp(t.type._context),Be(t),null;case 17:return ft(t.type)&&Ll(),Be(t),null;case 19:if(re(se),o=t.memoizedState,o===null)return Be(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Lo(o,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Gl(e),a!==null){for(t.flags|=128,Lo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(se,se.current&1|2),t.child}e=e.sibling}o.tail!==null&&me()>Ji&&(t.flags|=128,r=!0,Lo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Gl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!oe)return Be(t),null}else 2*me()-o.renderingStartTime>Ji&&n!==1073741824&&(t.flags|=128,r=!0,Lo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=me(),t.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Cp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?yt&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Bj(e,t){switch(cp(t),t.tag){case 1:return ft(t.type)&&Ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(),re(ct),re(Ye),yp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _p(t),null;case 13:if(re(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(se),null;case 4:return Xi(),null;case 10:return pp(t.type._context),null;case 22:case 23:return Cp(),null;case 24:return null;default:return null}}var Bs=!1,Ge=!1,Uj=typeof WeakSet=="function"?WeakSet:Set,C=null;function Pi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ad(e,t,n){try{n()}catch(r){fe(e,t,r)}}var pv=!1;function Hj(e,t){if(pd=xl,e=jb(),lp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,f=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++c===i&&(s=a),p===o&&++f===r&&(l=a),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:e,selectionRange:n},xl=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,b=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?_:Vt(t.type,_),b);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=pv,pv=!1,y}function aa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ad(t,n,o)}i=i.next}while(i!==r)}}function xu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function SO(e){var t=e.alternate;t!==null&&(e.alternate=null,SO(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nn],delete t[Aa],delete t[_d],delete t[Tj],delete t[jj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function PO(e){return e.tag===5||e.tag===3||e.tag===4}function mv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||PO(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Md(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vl));else if(r!==4&&(e=e.child,e!==null))for(Md(e,t,n),e=e.sibling;e!==null;)Md(e,t,n),e=e.sibling}function Rd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rd(e,t,n),e=e.sibling;e!==null;)Rd(e,t,n),e=e.sibling}var Me=null,Lt=!1;function Ln(e,t,n){for(n=n.child;n!==null;)TO(e,t,n),n=n.sibling}function TO(e,t,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:Ge||Pi(n,t);case 6:var r=Me,i=Lt;Me=null,Ln(e,t,n),Me=r,Lt=i,Me!==null&&(Lt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Lt?(e=Me,n=n.stateNode,e.nodeType===8?df(e.parentNode,n):e.nodeType===1&&df(e,n),Ta(e)):df(Me,n.stateNode));break;case 4:r=Me,i=Lt,Me=n.stateNode.containerInfo,Lt=!0,Ln(e,t,n),Me=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ad(n,t,a),i=i.next}while(i!==r)}Ln(e,t,n);break;case 1:if(!Ge&&(Pi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){fe(n,t,s)}Ln(e,t,n);break;case 21:Ln(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Ln(e,t,n),Ge=r):Ln(e,t,n);break;default:Ln(e,t,n)}}function gv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Uj),t.forEach(function(r){var i=Zj.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,Lt=!1;break e;case 3:Me=s.stateNode.containerInfo,Lt=!0;break e;case 4:Me=s.stateNode.containerInfo,Lt=!0;break e}s=s.return}if(Me===null)throw Error(P(160));TO(o,a,i),Me=null,Lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){fe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jO(t,e),t=t.sibling}function jO(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),qt(e),r&4){try{aa(3,e,e.return),xu(3,e)}catch(_){fe(e,e.return,_)}try{aa(5,e,e.return)}catch(_){fe(e,e.return,_)}}break;case 1:kt(t,e),qt(e),r&512&&n!==null&&Pi(n,n.return);break;case 5:if(kt(t,e),qt(e),r&512&&n!==null&&Pi(n,n.return),e.flags&32){var i=e.stateNode;try{Oa(i,"")}catch(_){fe(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Qw(i,o),id(s,a);var c=id(s,o);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?Zw(i,d):f==="dangerouslySetInnerHTML"?Yw(i,d):f==="children"?Oa(i,d):qh(i,f,d,c)}switch(s){case"input":Zf(i,o);break;case"textarea":qw(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?xi(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?xi(i,!!o.multiple,o.defaultValue,!0):xi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Aa]=o}catch(_){fe(e,e.return,_)}}break;case 6:if(kt(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){fe(e,e.return,_)}}break;case 3:if(kt(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(t.containerInfo)}catch(_){fe(e,e.return,_)}break;case 4:kt(t,e),qt(e);break;case 13:kt(t,e),qt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ip=me())),r&4&&gv(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(c=Ge)||f,kt(t,e),Ge=c):kt(t,e),qt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(C=e,f=e.child;f!==null;){for(d=C=f;C!==null;){switch(p=C,v=p.child,p.tag){case 0:case 11:case 14:case 15:aa(4,p,p.return);break;case 1:Pi(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){fe(r,n,_)}}break;case 5:Pi(p,p.return);break;case 22:if(p.memoizedState!==null){_v(d);continue}}v!==null?(v.return=p,C=v):_v(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Jw("display",a))}catch(_){fe(e,e.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){fe(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(t,e),qt(e),r&4&&gv(e);break;case 21:break;default:kt(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(PO(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oa(i,""),r.flags&=-33);var o=mv(e);Rd(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=mv(e);Md(e,s,a);break;default:throw Error(P(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wj(e,t,n){C=e,IO(e)}function IO(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Bs;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ge;s=Bs;var c=Ge;if(Bs=a,(Ge=l)&&!c)for(C=i;C!==null;)a=C,l=a.child,a.tag===22&&a.memoizedState!==null?yv(i):l!==null?(l.return=a,C=l):yv(i);for(;o!==null;)C=o,IO(o),o=o.sibling;C=i,Bs=s,Ge=c}vv(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):vv(e)}}function vv(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||xu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ev(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ev(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ge||t.flags&512&&Dd(t)}catch(p){fe(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function _v(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function yv(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xu(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){fe(t,i,l)}}var o=t.return;try{Dd(t)}catch(l){fe(t,o,l)}break;case 5:var a=t.return;try{Dd(t)}catch(l){fe(t,a,l)}}}catch(l){fe(t,t.return,l)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var Gj=Math.ceil,ql=Nn.ReactCurrentDispatcher,Tp=Nn.ReactCurrentOwner,Mt=Nn.ReactCurrentBatchConfig,G=0,Ie=null,ye=null,Ve=0,yt=0,Ti=gr(0),Ee=0,ka=null,Gr=0,Nu=0,jp=0,sa=null,lt=null,Ip=0,Ji=1/0,vn=null,Xl=!1,xd=null,Jn=null,Us=!1,Gn=null,Yl=0,la=0,Nd=null,bl=-1,Ol=0;function nt(){return G&6?me():bl!==-1?bl:bl=me()}function Zn(e){return e.mode&1?G&2&&Ve!==0?Ve&-Ve:$j.transition!==null?(Ol===0&&(Ol=fb()),Ol):(e=q,e!==0||(e=window.event,e=e===void 0?16:_b(e.type)),e):1}function Gt(e,t,n,r){if(50<la)throw la=0,Nd=null,Error(P(185));os(e,n,r),(!(G&2)||e!==Ie)&&(e===Ie&&(!(G&2)&&(Nu|=n),Ee===4&&Hn(e,Ve)),dt(e,r),n===1&&G===0&&!(t.mode&1)&&(Ji=me()+500,Du&&vr()))}function dt(e,t){var n=e.callbackNode;$T(e,t);var r=Rl(e,e===Ie?Ve:0);if(r===0)n!==null&&Ig(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ig(n),t===1)e.tag===0?Ij(wv.bind(null,e)):kb(wv.bind(null,e)),Sj(function(){!(G&6)&&vr()}),n=null;else{switch(db(r)){case 1:n=ep;break;case 4:n=ub;break;case 16:n=Ml;break;case 536870912:n=cb;break;default:n=Ml}n=NO(n,$O.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $O(e,t){if(bl=-1,Ol=0,G&6)throw Error(P(327));var n=e.callbackNode;if(Fi()&&e.callbackNode!==n)return null;var r=Rl(e,e===Ie?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jl(e,r);else{t=r;var i=G;G|=2;var o=AO();(Ie!==e||Ve!==t)&&(vn=null,Ji=me()+500,Mr(e,t));do try{qj();break}catch(s){CO(e,s)}while(1);hp(),ql.current=o,G=i,ye!==null?t=0:(Ie=null,Ve=0,t=Ee)}if(t!==0){if(t===2&&(i=ud(e),i!==0&&(r=i,t=kd(e,i))),t===1)throw n=ka,Mr(e,0),Hn(e,r),dt(e,me()),n;if(t===6)Hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Kj(i)&&(t=Jl(e,r),t===2&&(o=ud(e),o!==0&&(r=o,t=kd(e,o))),t===1))throw n=ka,Mr(e,0),Hn(e,r),dt(e,me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Sr(e,lt,vn);break;case 3:if(Hn(e,r),(r&130023424)===r&&(t=Ip+500-me(),10<t)){if(Rl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vd(Sr.bind(null,e,lt,vn),t);break}Sr(e,lt,vn);break;case 4:if(Hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Wt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gj(r/1960))-r,10<r){e.timeoutHandle=vd(Sr.bind(null,e,lt,vn),r);break}Sr(e,lt,vn);break;case 5:Sr(e,lt,vn);break;default:throw Error(P(329))}}}return dt(e,me()),e.callbackNode===n?$O.bind(null,e):null}function kd(e,t){var n=sa;return e.current.memoizedState.isDehydrated&&(Mr(e,t).flags|=256),e=Jl(e,t),e!==2&&(t=lt,lt=n,t!==null&&Vd(t)),e}function Vd(e){lt===null?lt=e:lt.push.apply(lt,e)}function Kj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hn(e,t){for(t&=~jp,t&=~Nu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Wt(t),r=1<<n;e[n]=-1,t&=~r}}function wv(e){if(G&6)throw Error(P(327));Fi();var t=Rl(e,0);if(!(t&1))return dt(e,me()),null;var n=Jl(e,t);if(e.tag!==0&&n===2){var r=ud(e);r!==0&&(t=r,n=kd(e,r))}if(n===1)throw n=ka,Mr(e,0),Hn(e,t),dt(e,me()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sr(e,lt,vn),dt(e,me()),null}function $p(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Ji=me()+500,Du&&vr())}}function Kr(e){Gn!==null&&Gn.tag===0&&!(G&6)&&Fi();var t=G;G|=1;var n=Mt.transition,r=q;try{if(Mt.transition=null,q=1,e)return e()}finally{q=r,Mt.transition=n,G=t,!(G&6)&&vr()}}function Cp(){yt=Ti.current,re(Ti)}function Mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ej(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ll();break;case 3:Xi(),re(ct),re(Ye),yp();break;case 5:_p(r);break;case 4:Xi();break;case 13:re(se);break;case 19:re(se);break;case 10:pp(r.type._context);break;case 22:case 23:Cp()}n=n.return}if(Ie=e,ye=e=er(e.current,null),Ve=yt=t,Ee=0,ka=null,jp=Nu=Gr=0,lt=sa=null,jr!==null){for(t=0;t<jr.length;t++)if(n=jr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}jr=null}return e}function CO(e,t){do{var n=ye;try{if(hp(),_l.current=Ql,Kl){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kl=!1}if(Wr=0,Pe=be=le=null,oa=!1,Ra=0,Tp.current=null,n===null||n.return===null){Ee=1,ka=t,ye=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ve,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=sv(a);if(v!==null){v.flags&=-257,lv(v,a,s,o,t),v.mode&1&&av(o,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){av(o,c,t),Ap();break e}l=Error(P(426))}}else if(oe&&s.mode&1){var b=sv(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),lv(b,a,s,o,t),fp(Yi(l,s));break e}}o=l=Yi(l,s),Ee!==4&&(Ee=2),sa===null?sa=[o]:sa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=hO(o,l,t);Zg(o,m);break e;case 1:s=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Jn===null||!Jn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=pO(o,s,t);Zg(o,w);break e}}o=o.return}while(o!==null)}MO(n)}catch(O){t=O,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function AO(){var e=ql.current;return ql.current=Ql,e===null?Ql:e}function Ap(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ie===null||!(Gr&268435455)&&!(Nu&268435455)||Hn(Ie,Ve)}function Jl(e,t){var n=G;G|=2;var r=AO();(Ie!==e||Ve!==t)&&(vn=null,Mr(e,t));do try{Qj();break}catch(i){CO(e,i)}while(1);if(hp(),G=n,ql.current=r,ye!==null)throw Error(P(261));return Ie=null,Ve=0,Ee}function Qj(){for(;ye!==null;)DO(ye)}function qj(){for(;ye!==null&&!wT();)DO(ye)}function DO(e){var t=xO(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?MO(e):ye=t,Tp.current=null}function MO(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bj(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,ye=null;return}}else if(n=zj(n,t,yt),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Ee===0&&(Ee=5)}function Sr(e,t,n){var r=q,i=Mt.transition;try{Mt.transition=null,q=1,Xj(e,t,n,r)}finally{Mt.transition=i,q=r}return null}function Xj(e,t,n,r){do Fi();while(Gn!==null);if(G&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(CT(e,o),e===Ie&&(ye=Ie=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Us||(Us=!0,NO(Ml,function(){return Fi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Mt.transition,Mt.transition=null;var a=q;q=1;var s=G;G|=4,Tp.current=null,Hj(e,n),jO(n,e),gj(md),xl=!!pd,md=pd=null,e.current=n,Wj(n),bT(),G=s,q=a,Mt.transition=o}else e.current=n;if(Us&&(Us=!1,Gn=e,Yl=i),o=e.pendingLanes,o===0&&(Jn=null),ST(n.stateNode),dt(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xl)throw Xl=!1,e=xd,xd=null,e;return Yl&1&&e.tag!==0&&Fi(),o=e.pendingLanes,o&1?e===Nd?la++:(la=0,Nd=e):la=0,vr(),null}function Fi(){if(Gn!==null){var e=db(Yl),t=Mt.transition,n=q;try{if(Mt.transition=null,q=16>e?16:e,Gn===null)var r=!1;else{if(e=Gn,Gn=null,Yl=0,G&6)throw Error(P(331));var i=G;for(G|=4,C=e.current;C!==null;){var o=C,a=o.child;if(C.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(C=c;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:aa(8,f,o)}var d=f.child;if(d!==null)d.return=f,C=d;else for(;C!==null;){f=C;var p=f.sibling,v=f.return;if(SO(f),f===c){C=null;break}if(p!==null){p.return=v,C=p;break}C=v}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var b=_.sibling;_.sibling=null,_=b}while(_!==null)}}C=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,C=a;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:aa(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,C=m;break e}C=o.return}}var h=e.current;for(C=h;C!==null;){a=C;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,C=g;else e:for(a=h;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xu(9,s)}}catch(O){fe(s,s.return,O)}if(s===a){C=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,C=w;break e}C=s.return}}if(G=i,vr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(ju,e)}catch{}r=!0}return r}finally{q=n,Mt.transition=t}}return!1}function bv(e,t,n){t=Yi(n,t),t=hO(e,t,1),e=Yn(e,t,1),t=nt(),e!==null&&(os(e,1,t),dt(e,t))}function fe(e,t,n){if(e.tag===3)bv(e,e,n);else for(;t!==null;){if(t.tag===3){bv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){e=Yi(n,e),e=pO(t,e,1),t=Yn(t,e,1),e=nt(),t!==null&&(os(t,1,e),dt(t,e));break}}t=t.return}}function Yj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Ve&n)===n&&(Ee===4||Ee===3&&(Ve&130023424)===Ve&&500>me()-Ip?Mr(e,0):jp|=n),dt(e,t)}function RO(e,t){t===0&&(e.mode&1?(t=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):t=1);var n=nt();e=Cn(e,t),e!==null&&(os(e,t,n),dt(e,n))}function Jj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),RO(e,n)}function Zj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),RO(e,n)}var xO;xO=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,Fj(e,t,n);ut=!!(e.flags&131072)}else ut=!1,oe&&t.flags&1048576&&Vb(t,Bl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wl(e,t),e=t.pendingProps;var i=Ki(t,Ye.current);Li(t,n),i=bp(null,t,r,e,i,n);var o=Op();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(r)?(o=!0,Fl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gp(t),i.updater=Mu,t.stateNode=i,i._reactInternals=t,Sd(t,r,e,n),t=jd(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&up(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=tI(r),e=Vt(r,e),i){case 0:t=Td(null,t,r,e,n);break e;case 1:t=fv(null,t,r,e,n);break e;case 11:t=uv(null,t,r,e,n);break e;case 14:t=cv(null,t,r,Vt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),Td(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),fv(e,t,r,i,n);case 3:e:{if(_O(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Bb(e,t),Wl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yi(Error(P(423)),t),t=dv(e,t,r,n,i);break e}else if(r!==i){i=Yi(Error(P(424)),t),t=dv(e,t,r,n,i);break e}else for(wt=Xn(t.stateNode.containerInfo.firstChild),bt=t,oe=!0,Ft=null,n=Gb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){t=An(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return Kb(t),e===null&&bd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,gd(r,i)?a=null:o!==null&&gd(r,o)&&(t.flags|=32),vO(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&bd(t),null;case 13:return yO(e,t,n);case 4:return vp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qi(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),uv(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Z(Ul,r._currentValue),r._currentValue=a,o!==null)if(Qt(o.value,a)){if(o.children===i.children&&!ct.current){t=An(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Pn(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Od(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(P(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Od(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Li(t,n),i=Rt(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Vt(r,t.pendingProps),i=Vt(r.type,i),cv(e,t,r,i,n);case 15:return mO(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),wl(e,t),t.tag=1,ft(r)?(e=!0,Fl(t)):e=!1,Li(t,n),Hb(t,r,i),Sd(t,r,i,n),jd(null,t,r,!0,e,n);case 19:return wO(e,t,n);case 22:return gO(e,t,n)}throw Error(P(156,t.tag))};function NO(e,t){return lb(e,t)}function eI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,r){return new eI(e,t,n,r)}function Dp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tI(e){if(typeof e=="function")return Dp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yh)return 11;if(e===Jh)return 14}return 2}function er(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function El(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Dp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case gi:return Rr(n.children,i,o,t);case Xh:a=8,i|=8;break;case Qf:return e=At(12,n,t,i|2),e.elementType=Qf,e.lanes=o,e;case qf:return e=At(13,n,t,i),e.elementType=qf,e.lanes=o,e;case Xf:return e=At(19,n,t,i),e.elementType=Xf,e.lanes=o,e;case Ww:return ku(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uw:a=10;break e;case Hw:a=9;break e;case Yh:a=11;break e;case Jh:a=14;break e;case zn:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=At(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Rr(e,t,n,r){return e=At(7,e,r,t),e.lanes=n,e}function ku(e,t,n,r){return e=At(22,e,r,t),e.elementType=Ww,e.lanes=n,e.stateNode={isHidden:!1},e}function wf(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function bf(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nI(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ef(0),this.expirationTimes=ef(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ef(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mp(e,t,n,r,i,o,a,s,l){return e=new nI(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=At(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(o),e}function rI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kO(e){if(!e)return sr;e=e._reactInternals;e:{if(ei(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(ft(n))return Nb(e,n,t)}return t}function VO(e,t,n,r,i,o,a,s,l){return e=Mp(n,r,!0,e,i,o,a,s,l),e.context=kO(null),n=e.current,r=nt(),i=Zn(n),o=Pn(r,i),o.callback=t??null,Yn(n,o,i),e.current.lanes=i,os(e,i,r),dt(e,r),e}function Vu(e,t,n,r){var i=t.current,o=nt(),a=Zn(i);return n=kO(n),t.context===null?t.context=n:t.pendingContext=n,t=Pn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yn(i,t,a),e!==null&&(Gt(e,i,a,o),vl(e,i,a)),a}function Zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ov(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rp(e,t){Ov(e,t),(e=e.alternate)&&Ov(e,t)}function iI(){return null}var LO=typeof reportError=="function"?reportError:function(e){console.error(e)};function xp(e){this._internalRoot=e}Lu.prototype.render=xp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Vu(e,t,null,null)};Lu.prototype.unmount=xp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){Vu(null,e,null,null)}),t[$n]=null}};function Lu(e){this._internalRoot=e}Lu.prototype.unstable_scheduleHydration=function(e){if(e){var t=mb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&vb(e)}};function Np(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ev(){}function oI(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Zl(a);o.call(c)}}var a=VO(t,r,e,0,null,!1,!1,"",Ev);return e._reactRootContainer=a,e[$n]=a.current,$a(e.nodeType===8?e.parentNode:e),Kr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Zl(l);s.call(c)}}var l=Mp(e,0,!1,null,null,!1,!1,"",Ev);return e._reactRootContainer=l,e[$n]=l.current,$a(e.nodeType===8?e.parentNode:e),Kr(function(){Vu(t,l,n,r)}),l}function zu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Zl(a);s.call(l)}}Vu(t,a,e,i)}else a=oI(n,t,e,i,r);return Zl(a)}hb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qo(t.pendingLanes);n!==0&&(tp(t,n|1),dt(t,me()),!(G&6)&&(Ji=me()+500,vr()))}break;case 13:Kr(function(){var r=Cn(e,1);if(r!==null){var i=nt();Gt(r,e,1,i)}}),Rp(e,1)}};np=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=nt();Gt(t,e,134217728,n)}Rp(e,134217728)}};pb=function(e){if(e.tag===13){var t=Zn(e),n=Cn(e,t);if(n!==null){var r=nt();Gt(n,e,t,r)}Rp(e,t)}};mb=function(){return q};gb=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};ad=function(e,t,n){switch(t){case"input":if(Zf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Au(r);if(!i)throw Error(P(90));Kw(r),Zf(r,i)}}}break;case"textarea":qw(e,n);break;case"select":t=n.value,t!=null&&xi(e,!!n.multiple,t,!1)}};nb=$p;rb=Kr;var aI={usingClientEntryPoint:!1,Events:[ss,wi,Au,eb,tb,$p]},Fo={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sI={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ab(e),e===null?null:e.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||iI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{ju=Hs.inject(sI),un=Hs}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aI;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(t))throw Error(P(200));return rI(e,t,null,n)};St.createRoot=function(e,t){if(!Np(e))throw Error(P(299));var n=!1,r="",i=LO;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mp(e,1,!1,null,null,n,!1,r,i),e[$n]=t.current,$a(e.nodeType===8?e.parentNode:e),new xp(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=ab(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return Kr(e)};St.hydrate=function(e,t,n){if(!Fu(t))throw Error(P(200));return zu(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!Np(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=LO;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=VO(t,null,e,1,n??null,i,!1,o,a),e[$n]=t.current,$a(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Lu(t)};St.render=function(e,t,n){if(!Fu(t))throw Error(P(200));return zu(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!Fu(e))throw Error(P(40));return e._reactRootContainer?(Kr(function(){zu(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};St.unstable_batchedUpdates=$p;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fu(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return zu(e,t,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";function FO(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FO)}catch(e){console.error(e)}}FO(),Vw.exports=St;var zO=Vw.exports,Sv=zO;Gf.createRoot=Sv.createRoot,Gf.hydrateRoot=Sv.hydrateRoot;var zt={},BO={},kp={},tr={},we=function(){return we=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},we.apply(this,arguments)};function Zi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var lI=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<a.length;c++){var f=a[c];if(!l(f))return!1;var d=t[f],p=n[f];if(o=r?r.call(i,d,p,f):void 0,o===!1||o===void 0&&d!==p)return!1}return!0};const uI=jw(lI);var te="-ms-",ua="-moz-",K="-webkit-",UO="comm",Bu="rule",Vp="decl",cI="@import",HO="@keyframes",fI="@layer",dI=Math.abs,Lp=String.fromCharCode,Ld=Object.assign;function hI(e,t){return Te(e,0)^45?(((t<<2^Te(e,0))<<2^Te(e,1))<<2^Te(e,2))<<2^Te(e,3):0}function WO(e){return e.trim()}function _n(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Sl(e,t){return e.indexOf(t)}function Te(e,t){return e.charCodeAt(t)|0}function eo(e,t,n){return e.slice(t,n)}function tn(e){return e.length}function GO(e){return e.length}function Yo(e,t){return t.push(e),e}function pI(e,t){return e.map(t).join("")}function Pv(e,t){return e.filter(function(n){return!_n(n,t)})}var Uu=1,to=1,KO=0,Nt=0,ve=0,Oo="";function Hu(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Uu,column:to,length:a,return:"",siblings:s}}function Fn(e,t){return Ld(Hu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ai(e){for(;e.root;)e=Fn(e.root,{children:[e]});Yo(e,e.siblings)}function mI(){return ve}function gI(){return ve=Nt>0?Te(Oo,--Nt):0,to--,ve===10&&(to=1,Uu--),ve}function Kt(){return ve=Nt<KO?Te(Oo,Nt++):0,to++,ve===10&&(to=1,Uu++),ve}function xr(){return Te(Oo,Nt)}function Pl(){return Nt}function Wu(e,t){return eo(Oo,e,t)}function Fd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vI(e){return Uu=to=1,KO=tn(Oo=e),Nt=0,[]}function _I(e){return Oo="",e}function Of(e){return WO(Wu(Nt-1,zd(e===91?e+2:e===40?e+1:e)))}function yI(e){for(;(ve=xr())&&ve<33;)Kt();return Fd(e)>2||Fd(ve)>3?"":" "}function wI(e,t){for(;--t&&Kt()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return Wu(e,Pl()+(t<6&&xr()==32&&Kt()==32))}function zd(e){for(;Kt();)switch(ve){case e:return Nt;case 34:case 39:e!==34&&e!==39&&zd(ve);break;case 40:e===41&&zd(e);break;case 92:Kt();break}return Nt}function bI(e,t){for(;Kt()&&e+ve!==47+10;)if(e+ve===42+42&&xr()===47)break;return"/*"+Wu(t,Nt-1)+"*"+Lp(e===47?e:Kt())}function OI(e){for(;!Fd(xr());)Kt();return Wu(e,Nt)}function EI(e){return _I(Tl("",null,null,null,[""],e=vI(e),0,[0],e))}function Tl(e,t,n,r,i,o,a,s,l){for(var c=0,f=0,d=a,p=0,v=0,y=0,_=1,b=1,m=1,h=0,g="",w=i,O=o,j=r,E=g;b;)switch(y=h,h=Kt()){case 40:if(y!=108&&Te(E,d-1)==58){Sl(E+=L(Of(h),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:E+=Of(h);break;case 9:case 10:case 13:case 32:E+=yI(y);break;case 92:E+=wI(Pl()-1,7);continue;case 47:switch(xr()){case 42:case 47:Yo(SI(bI(Kt(),Pl()),t,n,l),l);break;default:E+="/"}break;case 123*_:s[c++]=tn(E)*m;case 125*_:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+f:m==-1&&(E=L(E,/\f/g,"")),v>0&&tn(E)-d&&Yo(v>32?jv(E+";",r,n,d-1,l):jv(L(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(Yo(j=Tv(E,t,n,c,f,i,s,g,w=[],O=[],d,o),o),h===123)if(f===0)Tl(E,t,j,j,w,o,d,s,O);else switch(p===99&&Te(E,3)===110?100:p){case 100:case 108:case 109:case 115:Tl(e,j,j,r&&Yo(Tv(e,j,j,0,0,i,s,g,i,w=[],d,O),O),i,O,d,s,r?w:O);break;default:Tl(E,j,j,j,[""],O,0,s,O)}}c=f=v=0,_=m=1,g=E="",d=a;break;case 58:d=1+tn(E),v=y;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&gI()==125)continue}switch(E+=Lp(h),h*_){case 38:m=f>0?1:(E+="\f",-1);break;case 44:s[c++]=(tn(E)-1)*m,m=1;break;case 64:xr()===45&&(E+=Of(Kt())),p=xr(),f=d=tn(g=E+=OI(Pl())),h++;break;case 45:y===45&&tn(E)==2&&(_=0)}}return o}function Tv(e,t,n,r,i,o,a,s,l,c,f,d){for(var p=i-1,v=i===0?o:[""],y=GO(v),_=0,b=0,m=0;_<r;++_)for(var h=0,g=eo(e,p+1,p=dI(b=a[_])),w=e;h<y;++h)(w=WO(b>0?v[h]+" "+g:L(g,/&\f/g,v[h])))&&(l[m++]=w);return Hu(e,t,n,i===0?Bu:s,l,c,f,d)}function SI(e,t,n,r){return Hu(e,t,n,UO,Lp(mI()),eo(e,2,-2),0,r)}function jv(e,t,n,r,i){return Hu(e,t,n,Vp,eo(e,0,r),eo(e,r+1,-1),r,i)}function QO(e,t,n){switch(hI(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return ua+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+ua+e+te+e+e;case 5936:switch(Te(e,t+11)){case 114:return K+e+te+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+te+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+te+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+te+e+e;case 6165:return K+e+te+"flex-"+e+e;case 5187:return K+e+L(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return K+e+te+"flex-item-"+L(e,/flex-|-self/g,"")+(_n(e,/flex-|baseline/)?"":te+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return K+e+te+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+te+L(e,"shrink","negative")+e;case 5292:return K+e+te+L(e,"basis","preferred-size")+e;case 6060:return K+"box-"+L(e,"-grow","")+K+e+te+L(e,"grow","positive")+e;case 4554:return K+L(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!_n(e,/flex-|baseline/))return te+"grid-column-align"+eo(e,t)+e;break;case 2592:case 3360:return te+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,_n(r.props,/grid-\w+-end/)})?~Sl(e+(n=n[t].value),"span")?e:te+L(e,"-start","")+e+te+"grid-row-span:"+(~Sl(n,"span")?_n(n,/\d+/):+_n(n,/\d+/)-+_n(e,/\d+/))+";":te+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _n(r.props,/grid-\w+-start/)})?e:te+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(e)-1-t>6)switch(Te(e,t+1)){case 109:if(Te(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+ua+(Te(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Sl(e,"stretch")?QO(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,c){return te+i+":"+o+c+(a?te+i+"-span:"+(s?l:+l-+o)+c:"")+e});case 4949:if(Te(e,t+6)===121)return L(e,":",":"+K)+e;break;case 6444:switch(Te(e,Te(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(Te(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+te+"$2box$3")+e;case 100:return L(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function eu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function PI(e,t,n,r){switch(e.type){case fI:if(e.children.length)break;case cI:case Vp:return e.return=e.return||e.value;case UO:return"";case HO:return e.return=e.value+"{"+eu(e.children,r)+"}";case Bu:if(!tn(e.value=e.props.join(",")))return""}return tn(n=eu(e.children,r))?e.return=e.value+"{"+n+"}":""}function TI(e){var t=GO(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function jI(e){return function(t){t.root||(t=t.return)&&e(t)}}function II(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Vp:e.return=QO(e.value,e.length,n);return;case HO:return eu([Fn(e,{value:L(e.value,"@","@"+K)})],r);case Bu:if(e.length)return pI(n=e.props,function(i){switch(_n(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ai(Fn(e,{props:[L(i,/:(read-\w+)/,":"+ua+"$1")]})),ai(Fn(e,{props:[i]})),Ld(e,{props:Pv(n,r)});break;case"::placeholder":ai(Fn(e,{props:[L(i,/:(plac\w+)/,":"+K+"input-$1")]})),ai(Fn(e,{props:[L(i,/:(plac\w+)/,":"+ua+"$1")]})),ai(Fn(e,{props:[L(i,/:(plac\w+)/,te+"input-$1")]})),ai(Fn(e,{props:[i]})),Ld(e,{props:Pv(n,r)});break}return""})}}var $I={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",CI="6.1.0",Fp=typeof window<"u"&&"HTMLElement"in window,AI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),DI={},Gu=Object.freeze([]),no=Object.freeze({});function zp(e,t,n){return n===void 0&&(n=no),e.theme!==n.theme&&e.theme||t||n.theme}var qO=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),MI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,RI=/(^-|-$)/g;function Iv(e){return e.replace(MI,"-").replace(RI,"")}var xI=/(a)(d)/gi,$v=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$v(t%52)+n;return($v(t%52)+n).replace(xI,"$1-$2")}var Ef,ji=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},XO=function(e){return ji(5381,e)};function Bp(e){return Bd(XO(e)>>>0)}function NI(e){return e.displayName||e.name||"Component"}function Sf(e){return typeof e=="string"&&!0}var YO=typeof Symbol=="function"&&Symbol.for,JO=YO?Symbol.for("react.memo"):60115,kI=YO?Symbol.for("react.forward_ref"):60112,VI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},LI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ZO={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},FI=((Ef={})[kI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ef[JO]=ZO,Ef);function Cv(e){return("type"in(t=e)&&t.type.$$typeof)===JO?ZO:"$$typeof"in e?FI[e.$$typeof]:VI;var t}var zI=Object.defineProperty,BI=Object.getOwnPropertyNames,Av=Object.getOwnPropertySymbols,UI=Object.getOwnPropertyDescriptor,HI=Object.getPrototypeOf,Dv=Object.prototype;function Up(e,t,n){if(typeof t!="string"){if(Dv){var r=HI(t);r&&r!==Dv&&Up(e,r,n)}var i=BI(t);Av&&(i=i.concat(Av(t)));for(var o=Cv(e),a=Cv(t),s=0;s<i.length;++s){var l=i[s];if(!(l in LI||n&&n[l]||a&&l in a||o&&l in o)){var c=UI(t,l);try{zI(e,l,c)}catch{}}}}return e}function Qr(e){return typeof e=="function"}function Ku(e){return typeof e=="object"&&"styledComponentId"in e}function $r(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Va(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function La(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ud(e,t,n){if(n===void 0&&(n=!1),!n&&!La(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ud(e[r],t[r]);else if(La(t))for(var r in t)e[r]=Ud(e[r],t[r]);return e}function Hp(e,t){Object.defineProperty(e,"toString",{value:t})}function Dt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var WI=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Dt(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),jl=new Map,tu=new Map,Pf=1,Ws=function(e){if(jl.has(e))return jl.get(e);for(;tu.has(Pf);)Pf++;var t=Pf++;return jl.set(e,t),tu.set(t,e),t},GI=function(e,t){jl.set(e,t),tu.set(t,e)},KI="style[".concat(lr,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),QI=new RegExp("^".concat(lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qI=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},XI=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(QI);if(l){var c=0|parseInt(l[1],10),f=l[2];c!==0&&(GI(f,c),qI(e,f,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}};function Hd(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var eE=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(lr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(lr,"active"),r.setAttribute("data-styled-version","6.1.0");var a=Hd();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},YI=function(){function e(t){this.element=eE(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Dt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),JI=function(){function e(t){this.element=eE(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ZI=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Mv=Fp,e$={isServer:!Fp,useCSSOMInjection:!AI},ro=function(){function e(t,n,r){t===void 0&&(t=no),n===void 0&&(n={});var i=this;this.options=we(we({},e$),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Fp&&Mv&&(Mv=!1,function(o){for(var a=document.querySelectorAll(KI),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(lr)!=="active"&&(XI(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Hp(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",c=function(d){var p=function(m){return tu.get(m)}(d);if(p===void 0)return"continue";var v=o.names.get(p),y=a.getGroup(d);if(v===void 0||y.length===0)return"continue";var _="".concat(lr,".g").concat(d,'[id="').concat(p,'"]'),b="";v!==void 0&&v.forEach(function(m){m.length>0&&(b+="".concat(m,","))}),l+="".concat(y).concat(_,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},f=0;f<s;f++)c(f);return l}(i)})}return e.registerId=function(t){return Ws(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(we(we({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new ZI(i):r?new YI(i):new JI(i)}(this.options),new WI(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ws(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ws(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ws(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),t$=/&/g,n$=/^\s*\/\/.*$/gm;function tE(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=tE(n.children,t)),n})}function nE(e){var t,n,r,i=e===void 0?no:e,o=i.options,a=o===void 0?no:o,s=i.plugins,l=s===void 0?Gu:s,c=function(p,v,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},f=l.slice();f.push(function(p){p.type===Bu&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(t$,n).replace(r,c))}),a.prefix&&f.push(II),f.push(PI);var d=function(p,v,y,_){v===void 0&&(v=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var b=p.replace(n$,""),m=EI(y||v?"".concat(y," ").concat(v," { ").concat(b," }"):b);a.namespace&&(m=tE(m,a.namespace));var h=[];return eu(m,TI(f.concat(jI(function(g){return h.push(g)})))),h};return d.hash=l.length?l.reduce(function(p,v){return v.name||Dt(15),ji(p,v.name)},5381).toString():"",d}var rE=new ro,Wd=nE(),Qu=Oe.createContext({shouldForwardProp:void 0,styleSheet:rE,stylis:Wd}),r$=Qu.Consumer,i$=Oe.createContext(void 0);function nu(){return A.useContext(Qu)}function iE(e){var t=A.useState(e.stylisPlugins),n=t[0],r=t[1],i=nu().styleSheet,o=A.useMemo(function(){var l=i;return e.sheet?l=e.sheet:e.target&&(l=l.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[e.disableCSSOMInjection,e.sheet,e.target,i]),a=A.useMemo(function(){return nE({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);A.useEffect(function(){uI(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=A.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:a}},[e.shouldForwardProp,o,a]);return Oe.createElement(Qu.Provider,{value:s},Oe.createElement(i$.Provider,{value:a},e.children))}var oE=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Wd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Hp(this,function(){throw Dt(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Wd),this.name+t.hash},e}(),o$=function(e){return e>="A"&&e<="Z"};function Rv(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;o$(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var aE=function(e){return e==null||e===!1||e===""},sE=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!aE(o)&&(Array.isArray(o)&&o.isCss||Qr(o)?r.push("".concat(Rv(i),":"),o,";"):La(o)?r.push.apply(r,Zi(Zi(["".concat(i," {")],sE(o),!1),["}"],!1)):r.push("".concat(Rv(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in $I||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function nr(e,t,n,r){if(aE(e))return[];if(Ku(e))return[".".concat(e.styledComponentId)];if(Qr(e)){if(!Qr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return nr(i,t,n,r)}var o;return e instanceof oE?n?(e.inject(n,r),[e.getName(r)]):[e]:La(e)?sE(e):Array.isArray(e)?Array.prototype.concat.apply(Gu,e.map(function(a){return nr(a,t,n,r)})):[e.toString()]}function lE(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qr(n)&&!Ku(n))return!1}return!0}var a$=XO("6.1.0"),s$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lE(t),this.componentId=n,this.baseHash=ji(a$,n),this.baseStyle=r,ro.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=$r(i,this.staticRulesId);else{var o=Va(nr(this.rules,t,n,r)),a=Bd(ji(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=$r(i,a),this.staticRulesId=a}else{for(var l=ji(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var p=Va(nr(d,t,n,r));l=ji(l,p+f),c+=p}}if(c){var v=Bd(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=$r(i,v)}}return i},e}(),ur=Oe.createContext(void 0),l$=ur.Consumer;function u$(){var e=A.useContext(ur);if(!e)throw Dt(18);return e}function c$(e){var t=Oe.useContext(ur),n=A.useMemo(function(){return function(r,i){if(!r)throw Dt(14);if(Qr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Dt(8);return i?we(we({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Oe.createElement(ur.Provider,{value:n},e.children):null}var Tf={};function f$(e,t,n){var r=Ku(e),i=e,o=!Sf(e),a=t.attrs,s=a===void 0?Gu:a,l=t.componentId,c=l===void 0?function(g,w){var O=typeof g!="string"?"sc":Iv(g);Tf[O]=(Tf[O]||0)+1;var j="".concat(O,"-").concat(Bp("6.1.0"+O+Tf[O]));return w?"".concat(w,"-").concat(j):j}(t.displayName,t.parentComponentId):l,f=t.displayName;f===void 0&&function(g){return Sf(g)?"styled.".concat(g):"Styled(".concat(NI(g),")")}(e);var d=t.displayName&&t.componentId?"".concat(Iv(t.displayName),"-").concat(t.componentId):t.componentId||c,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;v=function(g,w){return y(g,w)&&_(g,w)}}else v=y}var b=new s$(n,d,r?i.componentStyle:void 0);function m(g,w){return function(O,j,E){var D=O.attrs,Y=O.componentStyle,V=O.defaultProps,Je=O.foldedComponentIds,hn=O.styledComponentId,pn=O.target,ii=Oe.useContext(ur),Do=nu(),mn=O.shouldForwardProp||Do.shouldForwardProp,ot=function(gn,gt,kn){for(var vt,Tt=we(we({},gt),{className:void 0,theme:kn}),Qc=0;Qc<gn.length;Qc+=1){var js=Qr(vt=gn[Qc])?vt(Tt):vt;for(var Vn in js)Tt[Vn]=Vn==="className"?$r(Tt[Vn],js[Vn]):Vn==="style"?we(we({},Tt[Vn]),js[Vn]):js[Vn]}return gt.className&&(Tt.className=$r(Tt.className,gt.className)),Tt}(D,j,zp(j,ii,V)||no),$=ot.as||pn,R={};for(var x in ot)ot[x]===void 0||x[0]==="$"||x==="as"||x==="theme"||(x==="forwardedAs"?R.as=ot.forwardedAs:mn&&!mn(x,$)||(R[x]=ot[x]));var Q=function(gn,gt){var kn=nu(),vt=gn.generateAndInjectStyles(gt,kn.styleSheet,kn.stylis);return vt}(Y,ot),ce=$r(Je,hn);return Q&&(ce+=" "+Q),ot.className&&(ce+=" "+ot.className),R[Sf($)&&!qO.has($)?"class":"className"]=ce,R.ref=E,A.createElement($,R)}(h,g,w)}var h=Oe.forwardRef(m);return h.attrs=p,h.componentStyle=b,h.shouldForwardProp=v,h.foldedComponentIds=r?$r(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=d,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(w){for(var O=[],j=1;j<arguments.length;j++)O[j-1]=arguments[j];for(var E=0,D=O;E<D.length;E++)Ud(w,D[E],!0);return w}({},i.defaultProps,g):g}}),Hp(h,function(){return".".concat(h.styledComponentId)}),o&&Up(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function xv(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Nv=function(e){return Object.assign(e,{isCss:!0})};function qu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Qr(e)||La(e)){var r=e;return Nv(nr(xv(Gu,Zi([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?nr(i):Nv(nr(xv(i,t)))}function Gd(e,t,n){if(n===void 0&&(n=no),!t)throw Dt(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,qu.apply(void 0,Zi([i],o,!1)))};return r.attrs=function(i){return Gd(e,t,we(we({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Gd(e,t,we(we({},n),i))},r}var uE=function(e){return Gd(f$,e)},ru=uE;qO.forEach(function(e){ru[e]=uE(e)});var d$=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=lE(t),ro.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Va(nr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ro.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function h$(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qu.apply(void 0,Zi([e],t,!1)),i="sc-global-".concat(Bp(JSON.stringify(r))),o=new d$(r,i),a=function(l){var c=nu(),f=Oe.useContext(ur),d=Oe.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(d,l,c.styleSheet,f,c.stylis),Oe.useLayoutEffect(function(){if(!c.styleSheet.server)return s(d,l,c.styleSheet,f,c.stylis),function(){return o.removeStyles(d,c.styleSheet)}},[d,l,c.styleSheet,f,c.stylis]),null};function s(l,c,f,d,p){if(o.isStatic)o.renderStyles(l,DI,f,p);else{var v=we(we({},c),{theme:zp(c,d,a.defaultProps)});o.renderStyles(l,v,f,p)}}return Oe.memo(a)}function p$(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Va(qu.apply(void 0,Zi([e],t,!1))),i=Bp(r);return new oE(i,r)}function m$(e){var t=Oe.forwardRef(function(n,r){var i=zp(n,Oe.useContext(ur),e.defaultProps);return Oe.createElement(e,we({},n,{theme:i,ref:r}))});return Up(t,e)}var g$=function(){function e(){var t=this;this._emitSheetCSS=function(){var n=t.instance.toString(),r=Hd(),i=Va([r&&'nonce="'.concat(r,'"'),"".concat(lr,'="true"'),"".concat("data-styled-version",'="').concat("6.1.0",'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(n,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Dt(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Dt(2);var r=((n={})[lr]="",n["data-styled-version"]="6.1.0",n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),i=Hd();return i&&(r.nonce=i),[Oe.createElement("style",we({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new ro({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw Dt(2);return Oe.createElement(iE,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw Dt(3)},e}(),v$={StyleSheet:ro,mainSheet:rE};const _$=Object.freeze(Object.defineProperty({__proto__:null,ServerStyleSheet:g$,StyleSheetConsumer:r$,StyleSheetContext:Qu,StyleSheetManager:iE,ThemeConsumer:l$,ThemeContext:ur,ThemeProvider:c$,__PRIVATE__:v$,createGlobalStyle:h$,css:qu,default:ru,isStyledComponent:Ku,keyframes:p$,styled:ru,useTheme:u$,version:CI,withTheme:m$},Symbol.toStringTag,{value:"Module"})),z=kP(_$);var io=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y$=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),w$=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),b$=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&y$(t,e,n);return w$(t,e),t};Object.defineProperty(tr,"__esModule",{value:!0});tr.Content=tr.Summary=tr.Wrapper=void 0;var oo=b$(z);tr.Wrapper=oo.default.details(Vv||(Vv=io([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,oo.css)(kv||(kv=io([`
    border-radius: `,`;
    font-size: `,`;
    font-weight: `,`;
    font-family: `,`;
  `],[`
    border-radius: `,`;
    font-size: `,`;
    font-weight: `,`;
    font-family: `,`;
  `])),t.border.xxsmall,t.font.sizes.small,t.font.weights.regular,t.font.family.primary)});tr.Summary=oo.default.summary(Fv||(Fv=io([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,oo.css)(Lv||(Lv=io([`
    background: `,`;
    color: `,`;
    padding: `," ",`;
    :hover {
      cursor: pointer;
    }
    ::marker {
      color: `,`;
    }
    h2 {
      display: inline-block;
      font-size: `,`;
    }
  `],[`
    background: `,`;
    color: `,`;
    padding: `," ",`;
    :hover {
      cursor: pointer;
    }
    ::marker {
      color: `,`;
    }
    h2 {
      display: inline-block;
      font-size: `,`;
    }
  `])),t.colors.primary.medium,t.colors.base.white,t.spacings.xsmall,t.spacings.small,t.colors.base.white,t.font.sizes.large)});tr.Content=oo.default.div(Bv||(Bv=io([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,oo.css)(zv||(zv=io([`
    border: 0.2rem solid `,`;
    border-top: 0;
    padding: `," ",`;
  `],[`
    border: 0.2rem solid `,`;
    border-top: 0;
    padding: `," ",`;
  `])),t.colors.primary.lighter,t.spacings.xsmall,t.spacings.small)});var kv,Vv,Lv,Fv,zv,Bv,Kd=u&&u.__assign||function(){return Kd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Kd.apply(this,arguments)},O$=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),E$=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),S$=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&O$(t,e,n);return E$(t,e),t},P$=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},T$=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(kp,"__esModule",{value:!0});var Gs=T$(A),jf=S$(tr),j$=function(e){var t=e.children,n=e.title,r=P$(e,["children","title"]);return Gs.default.createElement(jf.Wrapper,Kd({},r),Gs.default.createElement(jf.Summary,null,Gs.default.createElement("h2",null,n)),Gs.default.createElement(jf.Content,null,t))};kp.default=j$;var ti={},Xu={},Eo={},Xt=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(Eo,"__esModule",{value:!0});Eo.spacingModifier=void 0;var Yt=z;Eo.spacingModifier={none:function(e,t){return(0,Yt.css)(Uv||(Uv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.none)},xmini:function(e,t){return(0,Yt.css)(Hv||(Hv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.xmini)},mini:function(e,t){return(0,Yt.css)(Wv||(Wv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.mini)},xxsmall:function(e,t){return(0,Yt.css)(Gv||(Gv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.xxsmall)},xsmall:function(e,t){return(0,Yt.css)(Kv||(Kv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.xsmall)},small:function(e,t){return(0,Yt.css)(Qv||(Qv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.small)},medium:function(e,t){return(0,Yt.css)(qv||(qv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.medium)},large:function(e,t){return(0,Yt.css)(Xv||(Xv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.large)},xlarge:function(e,t){return(0,Yt.css)(Yv||(Yv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.xlarge)},xxlarge:function(e,t){return(0,Yt.css)(Jv||(Jv=Xt([`
    `,": ",`;
  `],[`
    `,": ",`;
  `])),t,e.spacings.xxlarge)}};var Uv,Hv,Wv,Gv,Kv,Qv,qv,Xv,Yv,Jv,ca=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},I$=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),$$=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),C$=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&I$(t,e,n);return $$(t,e),t};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Button=void 0;var fa=C$(z),A$=Eo,D$={primary:function(e){return(0,fa.css)(Zv||(Zv=ca([`
    border-color: `,`;
    color: `,`;
    &:hover {
      border-color: `,`;
      color: `,`;
    }
    &:active {
      border-color: `,`;
      color: `,`;
    }
  `],[`
    border-color: `,`;
    color: `,`;
    &:hover {
      border-color: `,`;
      color: `,`;
    }
    &:active {
      border-color: `,`;
      color: `,`;
    }
  `])),e.colors.primary.medium,e.colors.primary.medium,e.colors.secondary.medium,e.colors.secondary.medium,e.colors.secondary.dark,e.colors.secondary.dark)},secondary:function(e){return(0,fa.css)(e_||(e_=ca([`
    border-color: `,`;
    color: `,`;
    &:hover {
      border-color: `,`;
      color: `,`;
    }
    &:active {
      border-color: `,`;
      color: `,`;
    }
  `],[`
    border-color: `,`;
    color: `,`;
    &:hover {
      border-color: `,`;
      color: `,`;
    }
    &:active {
      border-color: `,`;
      color: `,`;
    }
  `])),e.colors.secondary.medium,e.colors.secondary.medium,e.colors.primary.light,e.colors.primary.light,e.colors.primary.medium,e.colors.primary.medium)},filled:function(e){return(0,fa.css)(t_||(t_=ca([`
    color: `,`;
    background: `,`;

    &:hover {
      background: `,`;
    }
    &:active {
      background: `,`;
    }
  `],[`
    color: `,`;
    background: `,`;

    &:hover {
      background: `,`;
    }
    &:active {
      background: `,`;
    }
  `])),e.colors.base.white,e.colors.primary.medium,e.colors.primary.dark,e.colors.primary.medium)}};Xu.Button=fa.default.button(r_||(r_=ca([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.variant,r=e.outline,i=e.size,o=i===void 0?"small":i,a=e.padding,s=a===void 0?"xxsmall":a;return(0,fa.css)(n_||(n_=ca([`
    cursor: pointer;
    border: `,` ;
    background-color: transparent;
    font-weight: `,`;
    border-radius: `,`;
    transition: `,`;
    font-size: `,`;
    `,`
    `,`}
  `],[`
    cursor: pointer;
    border: `,` ;
    background-color: transparent;
    font-weight: `,`;
    border-radius: `,`;
    transition: `,`;
    font-size: `,`;
    `,`
    `,`}
  `])),r?"0.2rem solid":"none",t.font.weights.bold,t.border.radius,t.transitions.default,t.font.sizes[o],A$.spacingModifier[s](t,"padding"),!!n&&D$[n](t))});var Zv,e_,t_,n_,r_,Qd=u&&u.__assign||function(){return Qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qd.apply(this,arguments)},M$=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),R$=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),x$=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&M$(t,e,n);return R$(t,e),t},N$=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},k$=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ti,"__esModule",{value:!0});var V$=k$(A),L$=x$(Xu),F$=function(e){var t=e.children,n=e.variant,r=n===void 0?"primary":n,i=e.size,o=e.padding,a=e.outline,s=a===void 0?!0:a,l=N$(e,["children","variant","size","padding","outline"]);return V$.default.createElement(L$.Button,Qd({size:i,variant:r,outline:s,padding:o},l),t)};ti.default=F$;var Yu={},Ju={},On=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},z$=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),B$=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),U$=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&z$(t,e,n);return B$(t,e),t};Object.defineProperty(Ju,"__esModule",{value:!0});Ju.Wrapper=void 0;var En=U$(z),i_=Eo,H$={row:function(){return(0,En.css)(o_||(o_=On([`
    display: flex;
    flex-direction: row;
  `],[`
    display: flex;
    flex-direction: row;
  `])))},column:function(){return(0,En.css)(a_||(a_=On([`
    display: flex;
    flex-direction: column;
  `],[`
    display: flex;
    flex-direction: column;
  `])))},block:function(){return(0,En.css)(s_||(s_=On([`
    display: block;
  `],[`
    display: block;
  `])))},none:function(){return(0,En.css)(l_||(l_=On([`
    display: none;
  `],[`
    display: none;
  `])))}},W$={default:function(e){return(0,En.css)(u_||(u_=On([`
    background: `,`;
  `],[`
    background: `,`;
  `])),e.colors.base.white)},filled:function(e){return(0,En.css)(c_||(c_=On([`
    background: `,`;
  `],[`
    background: `,`;
  `])),e.colors.primary.medium)},transparent:function(){return(0,En.css)(f_||(f_=On([`
    background: transparent;
  `],[`
    background: transparent;
  `])))}};Ju.Wrapper=En.default.div(h_||(h_=On([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.padding,r=n===void 0?"small":n,i=e.border,o=e.shadow,a=e.flex,s=a===void 0?"block":a,l=e.gap,c=l===void 0?"small":l,f=e.justify,d=e.alignment,p=e.fullWidth,v=e.variant,y=v===void 0?"default":v;return(0,En.css)(d_||(d_=On([`
    `,`;
    `,`;
    width: `,`;
    height: fit-content;
    align-items: `,`;
    justify-content: `,`;
    z-index: `,`;
    `,`
    `,`
    `,`
    `,`
  `],[`
    `,`;
    `,`;
    width: `,`;
    height: fit-content;
    align-items: `,`;
    justify-content: `,`;
    z-index: `,`;
    `,`
    `,`
    `,`
    `,`
  `])),!!o&&" box-shadow: ".concat(t.shadows.default,";"),!!i&&"border: 0.2rem solid ".concat(t.colors.secondary.light,";"),p?"100%":"fit-content",d,f,t.layers.menu,W$[y](t),H$[s](),i_.spacingModifier[r](t,"padding"),i_.spacingModifier[c](t,"gap"))});var o_,a_,s_,l_,u_,c_,f_,d_,h_,qd=u&&u.__assign||function(){return qd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qd.apply(this,arguments)},G$=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),K$=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Q$=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&G$(t,e,n);return K$(t,e),t},q$=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},X$=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});var Y$=X$(A),J$=Q$(Ju),Z$=function(e){var t=e.children,n=e.padding,r=e.border,i=r===void 0?!1:r,o=e.shadow,a=o===void 0?!1:o,s=e.flex,l=e.gap,c=e.justify,f=e.alignment,d=e.fullWidth,p=e.variant,v=q$(e,["children","padding","border","shadow","flex","gap","justify","alignment","fullWidth","variant"]);return Y$.default.createElement(J$.Wrapper,qd({padding:n,border:i,shadow:a,flex:s,gap:l,justify:c,alignment:f,fullWidth:d,variant:p},v),t)};Yu.default=Z$;var Zu={},ec={},p_=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},eC=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),tC=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),nC=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&eC(t,e,n);return tC(t,e),t};Object.defineProperty(ec,"__esModule",{value:!0});ec.CheckBoxLabel=void 0;var m_=nC(z);ec.CheckBoxLabel=m_.default.label(v_||(v_=p_([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,m_.css)(g_||(g_=p_([`
    cursor: pointer;
    span {
      position: relative;
      font-family: `,`;
      color: `,`;
      font-size: `,`;
      margin-left: `,`;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 1.5rem;
        height: 1.5rem;
        border: 0.1rem solid `,`;
        left: -`,`;
        transform: translateY(-50%);
      }
    }
    input {
      opacity: 0;
    }
    input:focus + span {
      &::after {
        box-shadow: `,`;
      }
    }
    input:checked + span {
      &::after {
        background: `,`;
      }
    }
    input[type='radio'] + span {
      &::after {
        border-radius: 50%;
      }
    }
  `],[`
    cursor: pointer;
    span {
      position: relative;
      font-family: `,`;
      color: `,`;
      font-size: `,`;
      margin-left: `,`;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 1.5rem;
        height: 1.5rem;
        border: 0.1rem solid `,`;
        left: -`,`;
        transform: translateY(-50%);
      }
    }
    input {
      opacity: 0;
    }
    input:focus + span {
      &::after {
        box-shadow: `,`;
      }
    }
    input:checked + span {
      &::after {
        background: `,`;
      }
    }
    input[type='radio'] + span {
      &::after {
        border-radius: 50%;
      }
    }
  `])),t.font.family.primary,t.colors.primary.dark,t.font.sizes.medium,t.spacings.xsmall,t.colors.primary.medium,t.spacings.small,t.shadows.focus,t.colors.secondary.medium)});var g_,v_,Xd=u&&u.__assign||function(){return Xd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xd.apply(this,arguments)},rC=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),iC=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),oC=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&rC(t,e,n);return iC(t,e),t},aC=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},sC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zu,"__esModule",{value:!0});var If=sC(A),lC=oC(ec),uC=function(e){var t=e.title,n=e.type,r=n===void 0?"checkbox":n,i=aC(e,["title","type"]);return If.default.createElement(lC.CheckBoxLabel,null,If.default.createElement("input",Xd({type:r},i)),If.default.createElement("span",null,t))};Zu.default=uC;var Wp={},Yd=u&&u.__assign||function(){return Yd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Yd.apply(this,arguments)},cE=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Wp,"__esModule",{value:!0});var cC=cE(A),fC=cE(Zu),dC=function(e){return cC.default.createElement(fC.default,Yd({},e,{type:"radio"}))};Wp.default=dC;var tc={},ao={},Jd=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},hC=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),pC=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),mC=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&hC(t,e,n);return pC(t,e),t};Object.defineProperty(ao,"__esModule",{value:!0});ao.Title=ao.Label=void 0;var Zd=mC(z);ao.Label=Zd.default.label(__||(__=Jd([`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
`],[`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
`])));ao.Title=Zd.default.span(w_||(w_=Jd([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,Zd.css)(y_||(y_=Jd([`
    position: absolute;
    color: `,`;
    font-size: `,`;
    top: `,`;
    left: `,`;
  `],[`
    position: absolute;
    color: `,`;
    font-size: `,`;
    top: `,`;
    left: `,`;
  `])),t.colors.secondary.medium,t.font.sizes.xsmall,t.spacings.xxsmall,t.spacings.xsmall)});var __,y_,w_,eh=u&&u.__assign||function(){return eh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},eh.apply(this,arguments)},gC=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),vC=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),_C=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&gC(t,e,n);return vC(t,e),t},yC=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},wC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tc,"__esModule",{value:!0});var b_=wC(A),O_=_C(ao),bC=function(e){var t=e.title,n=e.children,r=yC(e,["title","children"]);return b_.default.createElement(O_.Label,eh({},r),t&&b_.default.createElement(O_.Title,null,t),n)};tc.default=bC;var Gp={},So={},nc={},E_=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},OC=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),EC=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),SC=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&OC(t,e,n);return EC(t,e),t};Object.defineProperty(nc,"__esModule",{value:!0});nc.GenericInput=void 0;var S_=SC(z);nc.GenericInput=S_.default.input(T_||(T_=E_([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.label;return(0,S_.css)(P_||(P_=E_([`
    background: `,`;
    border-radius: `,`;
    border: 0.2rem solid `,`;
    border-radius: `,`;
    color: `,`;
    font-size: `,`;
    font-weight: `,`;
    font-family: `,`;
    transition: `,`;
    outline: none;
    height: 100%;
    min-height: `,`;
    letter-spacing: 0.1rem;
    padding: `,`;
    &::placeholder {
      color: `,`;
    }
    &:hover {
      border: 0.2rem solid `,`;
    }
    &:focus {
      border: 0.2rem solid `,`;
    }
  `],[`
    background: `,`;
    border-radius: `,`;
    border: 0.2rem solid `,`;
    border-radius: `,`;
    color: `,`;
    font-size: `,`;
    font-weight: `,`;
    font-family: `,`;
    transition: `,`;
    outline: none;
    height: 100%;
    min-height: `,`;
    letter-spacing: 0.1rem;
    padding: `,`;
    &::placeholder {
      color: `,`;
    }
    &:hover {
      border: 0.2rem solid `,`;
    }
    &:focus {
      border: 0.2rem solid `,`;
    }
  `])),t.colors.base.white,t.border.xxsmall,t.colors.primary.lighter,t.border.xxsmall,t.colors.primary.dark,t.font.sizes.small,t.font.weights.regular,t.font.family.primary,t.transitions.default,t.spacings.xlarge,n?"1.5rem 2.2rem 0 1.5rem":"0 2.2rem 0 1.5rem",t.colors.primary.medium,t.colors.secondary.lighter,t.colors.secondary.light)});var P_,T_,th=u&&u.__assign||function(){return th=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},th.apply(this,arguments)},PC=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),TC=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),jC=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&PC(t,e,n);return TC(t,e),t},IC=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},fE=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(So,"__esModule",{value:!0});var j_=fE(A),$C=fE(tc),CC=jC(nc),AC=function(e){var t=e.label,n=e.type,r=e.generic,i=r===void 0?{as:"input",props:{}}:r,o=IC(e,["label","type","generic"]);return j_.default.createElement($C.default,{title:t},j_.default.createElement(CC.GenericInput,th({},o,i.props,{as:i.as,type:n,label:t})))};So.default=AC;var nh=u&&u.__assign||function(){return nh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nh.apply(this,arguments)},DC=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},dE=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gp,"__esModule",{value:!0});var MC=dE(A),RC=dE(So),xC=function(e){var t=e.label,n=e.type,r=n===void 0?"text":n,i=DC(e,["label","type"]);return MC.default.createElement(RC.default,nh({},i,{label:t,type:r}))};Gp.default=xC;var rc={},Po={},Kp={},NC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Kp,"__esModule",{value:!0});var I_=NC(A),kC=function(){return I_.default.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I_.default.createElement("path",{opacity:"0.3",fillRule:"evenodd",clipRule:"evenodd",d:"m8 9.491 3.403-3.308a.656.656 0 0 1 .909 0 .613.613 0 0 1 0 .884l-3.857 3.75a.656.656 0 0 1-.91 0l-3.857-3.75a.613.613 0 0 1 0-.884.656.656 0 0 1 .91 0L8 9.491Z",fill:"currentColor"}))};Kp.default=kC;var Qp={},VC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qp,"__esModule",{value:!0});var $_=VC(A),LC=function(){return $_.default.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$_.default.createElement("path",{opacity:"0.3",fillRule:"evenodd",clipRule:"evenodd",d:"M8 6.509 4.597 9.817a.656.656 0 0 1-.909 0 .613.613 0 0 1 0-.884l3.857-3.75a.656.656 0 0 1 .91 0l3.857 3.75a.613.613 0 0 1 0 .884.656.656 0 0 1-.91 0L8 6.509Z",fill:"currentColor"}))};Qp.default=LC;var qp={},FC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qp,"__esModule",{value:!0});var C_=FC(A),zC=function(){return C_.default.createElement("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em"},C_.default.createElement("path",{clipRule:"evenodd",d:"M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z",fill:"currentColor",fillRule:"evenodd"}))};qp.default=zC;var Xp={},BC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xp,"__esModule",{value:!0});var A_=BC(A),UC=function(){return A_.default.createElement("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em"},A_.default.createElement("path",{clipRule:"evenodd",d:"M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z",fill:"currentColor",fillRule:"evenodd"}))};Xp.default=UC;var Yp={},HC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yp,"__esModule",{value:!0});var D_=HC(A),WC=function(){return D_.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512"},D_.default.createElement("path",{d:"M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-104c0 30.9-25.1 56-56 56S8 126.9 8 96s25.1-56 56-56 56 25.1 56 56z"}))};Yp.default=WC;var Jp={},GC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Jp,"__esModule",{value:!0});var M_=GC(A),KC=function(){return M_.default.createElement("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",fill:"currentColor","aria-label":"info",xmlns:"http://www.w3.org/2000/svg"},M_.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14A7 7 0 117 0a7 7 0 010 14zm0-9.333a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zm0 1.166c-.644 0-1.167.522-1.167 1.167v3.5a1.167 1.167 0 002.334 0V7c0-.644-.522-1.167-1.167-1.167z",fill:"currentColor"}))};Jp.default=KC;var Zp={},QC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zp,"__esModule",{value:!0});var R_=QC(A),qC=function(){return R_.default.createElement("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",fill:"currentColor","aria-label":"success",xmlns:"http://www.w3.org/2000/svg"},R_.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14A7 7 0 117 0a7 7 0 010 14zM5.848 7.702L4.342 6.196a1.166 1.166 0 10-1.65 1.65l2.333 2.333a1.166 1.166 0 001.707-.061l4.61-4.61a1.166 1.166 0 10-1.65-1.65L5.848 7.702z",fill:"currentColor"}))};Zp.default=qC;var em={},XC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(em,"__esModule",{value:!0});var x_=XC(A),YC=function(){return x_.default.createElement("svg",{viewBox:"0 0 32 32",width:"1em",height:"1em",fill:"currentColor","aria-label":"error",xmlns:"http://www.w3.org/2000/svg"},x_.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.936 20.711c0-.363-.133-.672-.393-.937L19.769 16l3.771-3.769a1.28 1.28 0 00.393-.937c0-.377-.133-.695-.393-.958l-1.877-1.874a1.312 1.312 0 00-.962-.395c-.361 0-.67.133-.937.395l-3.765 3.769L12.23 8.46a1.293 1.293 0 00-.939-.395c-.375 0-.697.133-.958.395l-1.874 1.874a1.312 1.312 0 00-.395.958c0 .361.133.67.395.937L12.23 16l-3.771 3.771a1.278 1.278 0 00-.395.937c0 .375.133.695.395.96l1.874 1.874c.263.263.583.393.958.393.361 0 .672-.13.937-.393l3.771-3.771 3.769 3.771c.265.263.576.393.937.393.377 0 .697-.13.962-.393l1.877-1.874c.258-.265.391-.587.391-.958zM32 16c0 2.903-.715 5.579-2.144 8.03a15.931 15.931 0 01-5.822 5.826c-2.457 1.429-5.131 2.142-8.034 2.142s-5.579-.711-8.034-2.142a15.924 15.924 0 01-5.822-5.826C.715 21.58 0 18.903 0 16s.715-5.579 2.146-8.032 3.369-4.393 5.822-5.822S13.097.002 16 .002s5.577.715 8.034 2.146a15.928 15.928 0 015.822 5.822C31.282 10.42 32 13.097 32 16z",fill:"currentColor"}))};em.default=YC;var tm={},JC=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tm,"__esModule",{value:!0});var N_=JC(A),ZC=function(){return N_.default.createElement("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",fill:"currentColor","aria-label":"warning",xmlns:"http://www.w3.org/2000/svg"},N_.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.021 1.101l5.832 10.509a1.168 1.168 0 01-1.021 1.734H1.167a1.167 1.167 0 01-1.02-1.734L5.979 1.101a1.167 1.167 0 012.041 0zM7 12.177a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zm0-9.34c-.645 0-1.167.523-1.167 1.167v3.502a1.167 1.167 0 002.334 0V4.004c0-.645-.523-1.167-1.167-1.167z",fill:"currentColor"}))};tm.default=ZC;(function(e){var t=u&&u.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(e,"__esModule",{value:!0}),e.Warning=e.Error=e.Success=e.Info=e.Elipsis=e.Plus=e.Minus=e.Up=e.Down=void 0;var n=Kp;Object.defineProperty(e,"Down",{enumerable:!0,get:function(){return t(n).default}});var r=Qp;Object.defineProperty(e,"Up",{enumerable:!0,get:function(){return t(r).default}});var i=qp;Object.defineProperty(e,"Minus",{enumerable:!0,get:function(){return t(i).default}});var o=Xp;Object.defineProperty(e,"Plus",{enumerable:!0,get:function(){return t(o).default}});var a=Yp;Object.defineProperty(e,"Elipsis",{enumerable:!0,get:function(){return t(a).default}});var s=Jp;Object.defineProperty(e,"Info",{enumerable:!0,get:function(){return t(s).default}});var l=Zp;Object.defineProperty(e,"Success",{enumerable:!0,get:function(){return t(l).default}});var c=em;Object.defineProperty(e,"Error",{enumerable:!0,get:function(){return t(c).default}});var f=tm;Object.defineProperty(e,"Warning",{enumerable:!0,get:function(){return t(f).default}})})(Po);var nm={},et={},us={},rm={},ic={},im={},k_=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(im,"__esModule",{value:!0});var V_=z,e2=(0,V_.createGlobalStyle)(F_||(F_=k_([`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  `,`

`],[`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  `,`

`])),function(e){var t=e.theme,n=e.globalFontFamily;return(0,V_.css)(L_||(L_=k_([`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: `,`;
      font-size: `,`;
    }
  `],[`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: `,`;
      font-size: `,`;
    }
  `])),n||t.font.family.primary,t.font.sizes.medium)});im.default=e2;var L_,F_,om={};Object.defineProperty(om,"__esModule",{value:!0});om.default={container:{medium:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem",mini:"0.2rem",xxsmall:"0.3rem"},font:{family:{primary:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"},weights:{light:300,regular:400,semiBold:600,bold:700}},colors:{base:{alert:"#DC2626",success:"#22C55E",white:"#F8F7FB",black:"#222222",disabled:"#78716C"},primary:{lighter:"#E8EFF5",light:"#1C5D9F",medium:"#022B54",dark:"#01172E"},secondary:{lighter:"#D1EFF2",light:"#A3DFE6",medium:"#53C3D0",dark:"#34AEBC"},neutral:{lightest:"#F4F4F9",lighter:"#EFF0F9",base:"#E6E6E6",dark:"#B3B3B3",darker:"#999999",darkest:"#808080",xdarkest:"#4D4D4D"}},spacings:{xmini:"0.2rem",mini:"0.4rem",xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transitions:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"},shadows:{inner:"inset 0px 4px 4px rgba(0, 0, 0, 0.25)",default:"rgb(0 0 0 / 15%) 0px 2rem 8rem 0",focus:"0 0 0.5rem #53C3D0"}};var oc={};Object.defineProperty(oc,"__esModule",{value:!0});oc.ocean=void 0;oc.ocean={primary:{lighter:"#E8EFF5",light:"#1C5D9F",medium:"#022B54",dark:"#01172E"},secondary:{lighter:"#D1EFF2",light:"#A3DFE6",medium:"#53C3D0",dark:"#34AEBC"}};var ac={};Object.defineProperty(ac,"__esModule",{value:!0});ac.wine=void 0;ac.wine={primary:{lighter:"#D5C1E0",light:"#B77FB0",medium:"#922C55",dark:"#641F2F"},secondary:{lighter:"#A1799C",light:"#86456E",medium:"#5F2E3D",dark:"#391A1D"}};var am={},t2=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(am,"__esModule",{value:!0});var n2=z,z_={xs:"480px",sm:"768px",md:"992px",lg:"1200px"},r2=Object.keys(z_).reduce(function(e,t){return e[t]=function(n){return(0,n2.css)(B_||(B_=t2([`
    @media (min-width: `,`) {
      `,`;
    }
  `],[`
    @media (min-width: `,`) {
      `,`;
    }
  `])),z_[t],n)},e},{});am.default=r2;var B_,sm={};Object.defineProperty(sm,"__esModule",{value:!0});var i2=z;sm.default=i2.ThemeProvider;(function(e){var t=u&&u.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(e,"__esModule",{value:!0}),e.SaguProvider=e.media=e.wine=e.ocean=e.theme=e.SaguGlobalStyles=void 0;var n=im;Object.defineProperty(e,"SaguGlobalStyles",{enumerable:!0,get:function(){return t(n).default}});var r=om;Object.defineProperty(e,"theme",{enumerable:!0,get:function(){return t(r).default}});var i=oc;Object.defineProperty(e,"ocean",{enumerable:!0,get:function(){return i.ocean}});var o=ac;Object.defineProperty(e,"wine",{enumerable:!0,get:function(){return o.wine}});var a=am;Object.defineProperty(e,"media",{enumerable:!0,get:function(){return t(a).default}});var s=sm;Object.defineProperty(e,"SaguProvider",{enumerable:!0,get:function(){return t(s).default}})})(ic);var o2=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(rm,"__esModule",{value:!0});var a2=z,U_=ic,s2=(0,a2.css)(H_||(H_=o2([`
  color: `,`;
  background-image: linear-gradient(
    to right,
    currentColor 0%,
    `,` 20%,
    currentColor 40%,
    currentColor 100%
  );
  background-size: 80rem 14rem;
  animation: placeholder 1s linear infinite forwards;

  @keyframes placeholder {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`],[`
  color: `,`;
  background-image: linear-gradient(
    to right,
    currentColor 0%,
    `,` 20%,
    currentColor 40%,
    currentColor 100%
  );
  background-size: 80rem 14rem;
  animation: placeholder 1s linear infinite forwards;

  @keyframes placeholder {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`])),U_.theme.colors.neutral.lighter,U_.theme.colors.neutral.medium);rm.default=s2;var H_;(function(e){var t=u&&u.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(e,"__esModule",{value:!0}),e.placeholder=void 0;var n=rm;Object.defineProperty(e,"placeholder",{enumerable:!0,get:function(){return t(n).default}})})(us);var ht=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},l2=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),u2=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c2=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&l2(t,e,n);return u2(t,e),t};Object.defineProperty(et,"__esModule",{value:!0});et.Dot=et.Dots=et.SlideButton=et.Image=et.Loading=et.Figure=void 0;var pt=c2(z),hE=us,rh="8px",Fa="20px",pE={small:function(e){return(0,pt.css)(W_||(W_=ht([`
    max-width: 40rem;
    height: `,`;
  `],[`
    max-width: 40rem;
    height: `,`;
  `])),e?"calc(20rem + ".concat(Fa,")"):"20rem")},large:function(e){return(0,pt.css)(G_||(G_=ht([`
    max-width: 80rem;
    height: `,`;
  `],[`
    max-width: 80rem;
    height: `,`;
  `])),e?"calc('40rem' + ".concat(Fa,")"):"40rem")}};et.Figure=pt.default.figure(Q_||(Q_=ht([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.size,n=e.dots;return(0,pt.css)(K_||(K_=ht([`
    position: relative;
    overflow-x: hidden;
    height: max-content;
    `,`
  `],[`
    position: relative;
    overflow-x: hidden;
    height: max-content;
    `,`
  `])),!!t&&pE[t](n))});et.Loading=pt.default.div(X_||(X_=ht([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.size,n=e.dots;return(0,pt.css)(q_||(q_=ht([`
    `,`
    `,`
  `],[`
    `,`
    `,`
  `])),!!t&&pE[t](n),hE.placeholder)});et.Image=pt.default.img(J_||(J_=ht([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.active,r=e.position,i=e.dots;return(0,pt.css)(Y_||(Y_=ht([`
    position: absolute;
    width: 100%;
    height: `,`;
    transition: transform `,`;
    transform: translateX(`,`);
    object-fit: cover;
    border-radius: `,`;

    `,`
  `],[`
    position: absolute;
    width: 100%;
    height: `,`;
    transition: transform `,`;
    transform: translateX(`,`);
    object-fit: cover;
    border-radius: `,`;

    `,`
  `])),i?"calc(100% - ".concat(Fa,")"):"100%",t.transitions.default,n?0:r*100+"%",t.border.mini,hE.placeholder)});et.SlideButton=pt.default.button(ey||(ey=ht([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.dots;return(0,pt.css)(Z_||(Z_=ht([`
    position: absolute;
    top: `,`;
    transform: translateY(-50%) rotate(270deg);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: `,`;
    border: none;
    outline: none;
    cursor: pointer;
    color: `,`;
    transition: all `,`;
    opacity: 0.7;

    &:hover,
    &:focus {
      box-shadow: `,`;
      opacity: 1;
      color: `,`;
    }
    &:first-of-type {
      left: `,`;
    }
    &:last-of-type {
      right: `,`;
    }
    &:disabled {
      opacity: 0.2;
      cursor: default;
    }
  `],[`
    position: absolute;
    top: `,`;
    transform: translateY(-50%) rotate(270deg);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: `,`;
    border: none;
    outline: none;
    cursor: pointer;
    color: `,`;
    transition: all `,`;
    opacity: 0.7;

    &:hover,
    &:focus {
      box-shadow: `,`;
      opacity: 1;
      color: `,`;
    }
    &:first-of-type {
      left: `,`;
    }
    &:last-of-type {
      right: `,`;
    }
    &:disabled {
      opacity: 0.2;
      cursor: default;
    }
  `])),n?"calc(50% - ".concat(Fa,"/2)"):"50%",t.colors.neutral.lightest,t.colors.primary.light,t.transitions.default,t.shadows.focus,t.colors.neutral.darkest,t.spacings.xsmall,t.spacings.xsmall)});et.Dots=pt.default.div(ny||(ny=ht([`
  `,`
`],[`
  `,`
`])),function(){return(0,pt.css)(ty||(ty=ht([`
    display: inline-flex;
    position: absolute;
    bottom: calc((`," - ",`) / 2);
    left: 50%;
    transform: translateX(-50%);
  `],[`
    display: inline-flex;
    position: absolute;
    bottom: calc((`," - ",`) / 2);
    left: 50%;
    transform: translateX(-50%);
  `])),Fa,rh)});et.Dot=pt.default.div(iy||(iy=ht([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.active;return(0,pt.css)(ry||(ry=ht([`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    margin-right: `,`;

    :last-child {
      margin-right: 0;
    }
  `],[`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    margin-right: `,`;

    :last-child {
      margin-right: 0;
    }
  `])),rh,rh,n?t.colors.primary.dark:t.colors.neutral.darker,t.spacings.xxsmall)});var W_,G_,K_,Q_,q_,X_,Y_,J_,Z_,ey,ty,ny,ry,iy,f2=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),d2=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),h2=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&f2(t,e,n);return d2(t,e),t},p2=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nm,"__esModule",{value:!0});var m2=p2(A),g2=h2(et),v2=function(e){var t=e.onClick,n=e.active;return m2.default.createElement(g2.Dot,{"data-testid":"dot",onClick:t,active:n})};nm.default=v2;var _2=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),y2=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),mE=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&_2(t,e,n);return y2(t,e),t},w2=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rc,"__esModule",{value:!0});var _t=mE(A),oy=Po,b2=w2(nm),si=mE(et),O2=function(e){var t=e.images,n=e.size,r=n===void 0?"small":n,i=e.loading,o=e.dots,a=o===void 0?!1:o,s=(0,_t.useMemo)(function(){return t.slice().sort(function(p,v){return p.listOrder-v.listOrder})},[t]),l=(0,_t.useState)(0),c=l[0],f=l[1],d=function(){for(var p=[],v=function(_){p.push(_t.default.createElement(b2.default,{key:_,onClick:function(){return f(_)},active:c===_}))},y=0;y<t.length;y++)v(y);return p};return i?_t.default.createElement(si.Loading,{size:r,dots:a}):_t.default.createElement(si.Figure,{size:r,dots:a},s==null?void 0:s.map(function(p,v){var y=p.url,_=p.listOrder;return _t.default.createElement(si.Image,{active:c===v,position:v-c,loading:"lazy",key:v,src:y,alt:"Slider image ".concat(_),dots:a})}),s.length>1&&_t.default.createElement(_t.default.Fragment,null,_t.default.createElement(si.SlideButton,{disabled:c===0,onClick:function(){return f(c-1)},dots:a},_t.default.createElement(oy.Up,null)),_t.default.createElement(si.SlideButton,{disabled:c===s.length-1,onClick:function(){return f(c+1)},dots:a},_t.default.createElement(oy.Down,null))),(a&&t.length)>1?_t.default.createElement(si.Dots,null,d()):null)};rc.default=O2;var sc={},lc={},da=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},E2=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),S2=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),P2=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&E2(t,e,n);return S2(t,e),t};Object.defineProperty(lc,"__esModule",{value:!0});lc.Paper=void 0;var ha=P2(z),T2={bottom:function(e){return(0,ha.css)(ay||(ay=da([`
    left: 0;
    top: calc(100% + `,`);
  `],[`
    left: 0;
    top: calc(100% + `,`);
  `])),e.spacings.xxsmall)},left:function(e){return(0,ha.css)(sy||(sy=da([`
    top: 0;
    right: calc(100% + `,`);
  `],[`
    top: 0;
    right: calc(100% + `,`);
  `])),e.spacings.xxsmall)},right:function(e){return(0,ha.css)(ly||(ly=da([`
    top: 0;
    left: calc(100% + `,`);
  `],[`
    top: 0;
    left: calc(100% + `,`);
  `])),e.spacings.xxsmall)}};lc.Paper=ha.default.div(cy||(cy=da([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.active,r=e.placement;return(0,ha.css)(uy||(uy=da([`
    position: absolute;
    display: `,`;
    width: fit-content;
    height: fit-content;
    z-index: `,`;
    `,`
  `],[`
    position: absolute;
    display: `,`;
    width: fit-content;
    height: fit-content;
    z-index: `,`;
    `,`
  `])),n?"block":"none",t.layers.menu,T2[r](t))});var ay,sy,ly,uy,cy,ih=u&&u.__assign||function(){return ih=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ih.apply(this,arguments)},j2=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),I2=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),$2=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&j2(t,e,n);return I2(t,e),t},C2=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},gE=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sc,"__esModule",{value:!0});var fy=gE(A),A2=gE(Yu),D2=$2(lc),M2=function(e){var t=e.children,n=e.active,r=e.placement,i=r===void 0?"bottom":r,o=e.padding,a=o===void 0?"none":o,s=C2(e,["children","active","placement","padding"]);return fy.default.createElement(D2.Paper,{"aria-hidden":!n,active:n,placement:i,"data-testid":"paper"},fy.default.createElement(A2.default,ih({},s,{shadow:!0,border:!0,padding:a}),t))};sc.default=M2;var uc={},vE={};(function(e){var t=u&&u.__makeTemplateObject||function(_,b){return Object.defineProperty?Object.defineProperty(_,"raw",{value:b}):_.raw=b,_},n=u&&u.__createBinding||(Object.create?function(_,b,m,h){h===void 0&&(h=m);var g=Object.getOwnPropertyDescriptor(b,m);(!g||("get"in g?!b.__esModule:g.writable||g.configurable))&&(g={enumerable:!0,get:function(){return b[m]}}),Object.defineProperty(_,h,g)}:function(_,b,m,h){h===void 0&&(h=m),_[h]=b[m]}),r=u&&u.__setModuleDefault||(Object.create?function(_,b){Object.defineProperty(_,"default",{enumerable:!0,value:b})}:function(_,b){_.default=b}),i=u&&u.__importStar||function(_){if(_&&_.__esModule)return _;var b={};if(_!=null)for(var m in _)m!=="default"&&Object.prototype.hasOwnProperty.call(_,m)&&n(b,_,m);return r(b,_),b};Object.defineProperty(e,"__esModule",{value:!0}),e.Wrapper=e.WrapperModifiers=void 0;var o=i(z),a=ic;e.WrapperModifiers={small:function(_){return(0,o.css)(s||(s=t([`
    font-size: `,`;
    &::after {
      width: 3rem;
    }
  `],[`
    font-size: `,`;
    &::after {
      width: 3rem;
    }
  `])),_.font.sizes.medium)},medium:function(_){return(0,o.css)(c||(c=t([`
    font-size: `,`;

    `,`
  `],[`
    font-size: `,`;

    `,`
  `])),_.font.sizes.xlarge,a.media.sm(l||(l=t([`
      font-size: `,`;
    `],[`
      font-size: `,`;
    `])),_.font.sizes.xxlarge))},huge:function(_){return(0,o.css)(f||(f=t([`
    font-size: `,`;
  `],[`
    font-size: `,`;
  `])),_.font.sizes.huge)},lineLeft:function(_,b){return(0,o.css)(d||(d=t([`
    padding-left: `,`;
    border-left: 0.7rem solid `,`;
  `],[`
    padding-left: `,`;
    border-left: 0.7rem solid `,`;
  `])),_.spacings.xsmall,_.colors[b].medium)},lineBottom:function(_,b){return(0,o.css)(p||(p=t([`
    position: relative;
    margin-bottom: `,`;
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid `,`;
    }
  `],[`
    position: relative;
    margin-bottom: `,`;
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid `,`;
    }
  `])),_.spacings.medium,_.colors[b].medium)}},e.Wrapper=o.default.h2(y||(y=t([`
  `,`
`],[`
  `,`
`])),function(_){var b=_.theme,m=_.color,h=_.lineLeft,g=_.lineBottom,w=_.lineColor,O=_.size;return(0,o.css)(v||(v=t([`
    color: `,`;

    `,`
    `,`
    `,`
  `],[`
    color: `,`;

    `,`
    `,`
    `,`
  `])),b.colors.base[m],h&&e.WrapperModifiers.lineLeft(b,w),g&&e.WrapperModifiers.lineBottom(b,w),!!O&&e.WrapperModifiers[O](b))});var s,l,c,f,d,p,v,y})(vE);var R2=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),x2=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),N2=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&R2(t,e,n);return x2(t,e),t},k2=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uc,"__esModule",{value:!0});var V2=k2(A),L2=N2(vE),F2=function(e){var t=e.children,n=e.color,r=n===void 0?"black":n,i=e.lineLeft,o=i===void 0?!1:i,a=e.lineBottom,s=a===void 0?!1:a,l=e.size,c=l===void 0?"medium":l,f=e.lineColor,d=f===void 0?"primary":f;return V2.default.createElement(L2.Wrapper,{lineBottom:s,lineLeft:o,color:r,size:c,lineColor:d},t)};uc.default=F2;var lm={},cc={},pa=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},z2=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),B2=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),U2=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&z2(t,e,n);return B2(t,e),t};Object.defineProperty(cc,"__esModule",{value:!0});cc.Wrapper=void 0;var ma=U2(z),dy={color:function(e,t){return(0,ma.css)(hy||(hy=pa([`
    background-color: `,`;
    &::before {
      border-left-color: `,`;
      border-top-color: `,`;
    }
  `],[`
    background-color: `,`;
    &::before {
      border-left-color: `,`;
      border-top-color: `,`;
    }
  `])),e.colors[t].dark,e.colors[t].dark,e.colors[t].dark)},normal:function(e){return(0,ma.css)(py||(py=pa([`
    font-size: `,`;
    padding: 0 `,`;
    height: 3.6rem;
    right: -2rem;
    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `],[`
    font-size: `,`;
    padding: 0 `,`;
    height: 3.6rem;
    right: -2rem;
    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `])),e.font.sizes.small,e.spacings.small)},small:function(e){return(0,ma.css)(my||(my=pa([`
    font-size: `,`;
    padding: 0 `,`;
    height: 2.6rem;
    right: -1.5rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `],[`
    font-size: `,`;
    padding: 0 `,`;
    height: 2.6rem;
    right: -1.5rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `])),e.font.sizes.xsmall,e.spacings.xsmall)}};cc.Wrapper=ma.default.div(vy||(vy=pa([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.color,r=e.size;return(0,ma.css)(gy||(gy=pa([`
    position: absolute;
    top: `,`;
    display: flex;
    align-items: center;
    font-weight: `,`;
    color: `,`;
    z-index: `,`;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }
    `,`;
    `,`;
  `],[`
    position: absolute;
    top: `,`;
    display: flex;
    align-items: center;
    font-weight: `,`;
    color: `,`;
    z-index: `,`;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }
    `,`;
    `,`;
  `])),t.spacings.xsmall,t.font.weights.bold,t.colors.base.white,t.layers.base,!!n&&dy.color(t,n),!!r&&dy[r](t))});var hy,py,my,gy,vy,H2=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),W2=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),G2=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&H2(t,e,n);return W2(t,e),t},K2=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lm,"__esModule",{value:!0});var Q2=K2(A),q2=G2(cc),X2=function(e){var t=e.children,n=e.color,r=n===void 0?"primary":n,i=e.size,o=i===void 0?"normal":i;return Q2.default.createElement(q2.Wrapper,{size:o,color:r},t)};lm.default=X2;var um={},_y=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Y2=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),J2=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Z2=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&Y2(t,e,n);return J2(t,e),t};Object.defineProperty(um,"__esModule",{value:!0});var yy=Z2(z),eA=yy.default.div(by||(by=_y([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,yy.css)(wy||(wy=_y([`
    width: 100%;
    max-width: `,`;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(`,` / 2);
    padding-right: calc(`,` / 2);
  `],[`
    width: 100%;
    max-width: `,`;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(`,` / 2);
    padding-right: calc(`,` / 2);
  `])),t.container.medium,t.container.gutter,t.container.gutter)});um.default=eA;var wy,by,cm={},rr={},so=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},tA=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),nA=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),rA=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&tA(t,e,n);return nA(t,e),t};Object.defineProperty(rr,"__esModule",{value:!0});rr.NumberFieldButton=rr.NumberField=rr.NumberFieldContainer=void 0;var lo=rA(z);rr.NumberFieldContainer=lo.default.div(Ey||(Ey=so([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,lo.css)(Oy||(Oy=so([`
    display: flex;
    justify-content: center;
    border: 0.1rem solid `,`;
    width: 8.5rem;
  `],[`
    display: flex;
    justify-content: center;
    border: 0.1rem solid `,`;
    width: 8.5rem;
  `])),t.colors.primary.lighter)});rr.NumberField=lo.default.input(Py||(Py=so([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,lo.css)(Sy||(Sy=so([`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }

    text-align: center;
    outline: none;
    width: 3.5rem;
    height: 2.5rem;
    background: `,`;
    border-radius: `,`;
    border: none;
    border-left: 0.1rem solid;
    border-right: 0.1rem solid;
    border-color: `,`;
    color: `,`;
  `],[`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }

    text-align: center;
    outline: none;
    width: 3.5rem;
    height: 2.5rem;
    background: `,`;
    border-radius: `,`;
    border: none;
    border-left: 0.1rem solid;
    border-right: 0.1rem solid;
    border-color: `,`;
    color: `,`;
  `])),t.colors.base.white,t.border.xxsmall,t.colors.primary.lighter,t.colors.primary.medium)});rr.NumberFieldButton=lo.default.button(jy||(jy=so([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.active;return(0,lo.css)(Ty||(Ty=so([`
    width: 2.5rem;
    cursor: `,`;
    background: transparent;
    border: none;
    font-size: `,`;
    color: `,`;
    transition: `,`;
    &:hover {
      color: `,`;
    }
  `],[`
    width: 2.5rem;
    cursor: `,`;
    background: transparent;
    border: none;
    font-size: `,`;
    color: `,`;
    transition: `,`;
    &:hover {
      color: `,`;
    }
  `])),n?"pointer":"default",t.font.sizes.large,t.colors.neutral.darker,t.transitions.default,n?t.colors.primary.medium:t.colors.neutral.darker)});var Oy,Ey,Sy,Py,Ty,jy,oh=u&&u.__assign||function(){return oh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},oh.apply(this,arguments)},iA=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),oA=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),aA=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&iA(t,e,n);return oA(t,e),t},sA=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},lA=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cm,"__esModule",{value:!0});var li=lA(A),uA=A,Iy=Po,Ks=aA(rr),cA=function(e){var t=e.initialValue,n=t===void 0?0:t,r=e.min,i=r===void 0?0:r,o=e.max,a=o===void 0?99:o,s=e.onUpdate,l=sA(e,["initialValue","min","max","onUpdate"]),c=(0,uA.useState)(n>a?a:n<i?i:n),f=c[0],d=c[1],p=function(y){if(y==="increment"){var _=f<a?f+1:f;d(_),s&&s(_)}else{var _=f>i?f-1:f;d(_),s&&s(_)}},v=function(y){var _=y.target.value,b=parseInt(_);b>a?b=a:b<i&&(b=i),d(b),s&&s(b)};return li.default.createElement(Ks.NumberFieldContainer,null,li.default.createElement(Ks.NumberFieldButton,{onClick:function(){return p("decrement")},"aria-label":"decrement",active:f>i},li.default.createElement(Iy.Minus,null)),li.default.createElement(Ks.NumberField,oh({type:"number",value:f,onChange:v,min:i,max:a},l)),li.default.createElement(Ks.NumberFieldButton,{onClick:function(){return p("increment")},"aria-label":"increment",active:f<a},li.default.createElement(Iy.Plus,null)))};cm.default=cA;var cs={},fs={},$y=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},fA=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),dA=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),hA=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&fA(t,e,n);return dA(t,e),t};Object.defineProperty(fs,"__esModule",{value:!0});fs.NavLink=void 0;var Cy=hA(z),pA=Eo;fs.NavLink=Cy.default.a(Dy||(Dy=$y([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.active,r=e.size,i=e.padding,o=i===void 0?"xsmall":i,a=e.disabled;return(0,Cy.css)(Ay||(Ay=$y([`
    position: relative;
    cursor: `,`;
    font-family: `,`;
    font-size: `,`;
    font-weight: `,`;
    color: `,`;
    transition: `,`;
    `,`
    text-decoration: none;
    &:hover {
      color: `,`;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 2rem;
      height: 0.1rem;
      background: `,`;
      left: 50%;
      transform: translateX(-50%);
      transition: `,`;
    }
  `],[`
    position: relative;
    cursor: `,`;
    font-family: `,`;
    font-size: `,`;
    font-weight: `,`;
    color: `,`;
    transition: `,`;
    `,`
    text-decoration: none;
    &:hover {
      color: `,`;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 2rem;
      height: 0.1rem;
      background: `,`;
      left: 50%;
      transform: translateX(-50%);
      transition: `,`;
    }
  `])),a?"default":"pointer",t.font.family.primary,t.font.sizes[r],t.font.weights.regular,n?t.colors.secondary.medium:t.colors.primary.medium,t.transitions.default,pA.spacingModifier[o](t,"padding"),t.colors.secondary.medium,n?t.colors.secondary.medium:"transparent",t.transitions.default)});var Ay,Dy,ah=u&&u.__assign||function(){return ah=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ah.apply(this,arguments)},mA=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),gA=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),vA=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&mA(t,e,n);return gA(t,e),t},_A=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},yA=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cs,"__esModule",{value:!0});var wA=yA(A),bA=vA(fs),OA=function(e){var t=e.children,n=e.active,r=n===void 0?!1:n,i=e.disabled,o=i===void 0?!1:i,a=e.size,s=a===void 0?"medium":a,l=e.padding,c=_A(e,["children","active","disabled","size","padding"]);return wA.default.createElement(bA.NavLink,ah({"aria-disabled":o,active:r,size:s,padding:l,disabled:o},c),t)};cs.default=OA;var fm={},fc={},EA=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},_E=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fc,"__esModule",{value:!0});fc.Select=void 0;var SA=_E(z),PA=_E(So);fc.Select=(0,SA.default)(PA.default)(My||(My=EA([""],[""])));var My,sh=u&&u.__assign||function(){return sh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sh.apply(this,arguments)},TA=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),jA=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),yE=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&TA(t,e,n);return jA(t,e),t},IA=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(fm,"__esModule",{value:!0});var $f=yE(A),$A=yE(fc),CA=function(e){var t=e.options,n=e.label,r=IA(e,["options","label"]),i=(0,$f.useMemo)(function(){return t.map(function(o){return $f.default.createElement("option",{key:o},o)})},[t]);return $f.default.createElement($A.Select,sh({},r,{label:n,type:void 0,generic:{as:"select",props:{children:i}}}))};fm.default=CA;var dm={},on={},cr=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},AA=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),DA=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),MA=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&AA(t,e,n);return DA(t,e),t};Object.defineProperty(on,"__esModule",{value:!0});on.HelperText=on.Subtitle=on.Title=on.Highlight=void 0;var fr=MA(z);on.Highlight=fr.default.div(xy||(xy=cr([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,fr.css)(Ry||(Ry=cr([`
    display: grid;
    grid-template-areas: 'a a' 'b c';
    column-gap: `,`;
    width: fit-content;
    place-items: start;
  `],[`
    display: grid;
    grid-template-areas: 'a a' 'b c';
    column-gap: `,`;
    width: fit-content;
    place-items: start;
  `])),t.spacings.xxsmall)});on.Title=fr.default.h1(ky||(ky=cr([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,fr.css)(Ny||(Ny=cr([`
    font-size: `,`;
    font-weight: `,`;
    color: `,`;
    grid-area: b;
  `],[`
    font-size: `,`;
    font-weight: `,`;
    color: `,`;
    grid-area: b;
  `])),t.font.sizes.huge,t.font.weights.semiBold,t.colors.primary.medium)});on.Subtitle=fr.default.h2(Ly||(Ly=cr([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,fr.css)(Vy||(Vy=cr([`
    font-size: `,`;
    font-weight: `,`;
    color: `,`;
  `],[`
    font-size: `,`;
    font-weight: `,`;
    color: `,`;
  `])),t.font.sizes.huge,t.font.weights.light,t.colors.primary.medium)});on.HelperText=fr.default.span(zy||(zy=cr([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,fr.css)(Fy||(Fy=cr([`
    position: relative;
    font-size: `,`;
    font-weight: `,`;
    color: `,`;
    grid-area: a;
    text-transform: uppercase;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(100% + `,`);
      height: 0.1rem;
      width: 7rem;
      transform: translateY(-50%);
      background: `,`;
    }
  `],[`
    position: relative;
    font-size: `,`;
    font-weight: `,`;
    color: `,`;
    grid-area: a;
    text-transform: uppercase;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(100% + `,`);
      height: 0.1rem;
      width: 7rem;
      transform: translateY(-50%);
      background: `,`;
    }
  `])),t.font.sizes.xsmall,t.font.weights.semiBold,t.colors.secondary.medium,t.spacings.xsmall,t.colors.secondary.medium)});var Ry,xy,Ny,ky,Vy,Ly,Fy,zy,RA=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),xA=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),NA=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&RA(t,e,n);return xA(t,e),t},kA=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dm,"__esModule",{value:!0});var Qs=kA(A),qs=NA(on),VA=function(e){var t=e.helperText,n=t===void 0?"your stay in one of":t,r=e.title,i=e.subtitle;return Qs.default.createElement(qs.Highlight,null,Qs.default.createElement(qs.HelperText,null,n),Qs.default.createElement(qs.Title,null,r),Qs.default.createElement(qs.Subtitle,null,i))};dm.default=VA;var hm={},an={},zi=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},LA=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),FA=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),zA=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&LA(t,e,n);return FA(t,e),t};Object.defineProperty(an,"__esModule",{value:!0});an.MenuItem=an.MenuList=an.MenuButton=an.Menu=void 0;var Bi=zA(z),BA=fs;an.Menu=Bi.default.menu(By||(By=zi([`
  position: relative;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
`],[`
  position: relative;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
`])));an.MenuButton=Bi.default.button(Wy||(Wy=zi([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.active,r=e.asIcon,i=r===void 0?!1:r;return(0,Bi.css)(Hy||(Hy=zi([`
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;
    position: relative;
    width: calc(100% + `,`);
    text-align: left;
    color: `,`;
    &:hover {
      color: `,`;
    }

    `,`

    svg {
      width: auto;
      height: `,`;
      fill: `,`;
      transition: fill `,`;
      &:hover {
        fill: `,`;
      }
    }

    `,` {
      color: inherit;
      &::after {
        content: none;
      }
    }
  `],[`
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;
    position: relative;
    width: calc(100% + `,`);
    text-align: left;
    color: `,`;
    &:hover {
      color: `,`;
    }

    `,`

    svg {
      width: auto;
      height: `,`;
      fill: `,`;
      transition: fill `,`;
      &:hover {
        fill: `,`;
      }
    }

    `,` {
      color: inherit;
      &::after {
        content: none;
      }
    }
  `])),t.spacings.small,n?t.colors.secondary.medium:t.colors.primary.medium,t.colors.secondary.medium,!i&&(0,Bi.css)(Uy||(Uy=zi([`
      &::after {
        content: '';
        z-index: 0;
        color: inherit;
        position: absolute;
        border: solid currentColor;
        border-width: `,`;
        display: inline-block;
        padding: 0.2rem;
        right: `,`;
        top: `,`;
        transform: rotate(45deg) translateY(-50%);
        transition: color `,`;
      }
    `],[`
      &::after {
        content: '';
        z-index: 0;
        color: inherit;
        position: absolute;
        border: solid currentColor;
        border-width: `,`;
        display: inline-block;
        padding: 0.2rem;
        right: `,`;
        top: `,`;
        transform: rotate(45deg) translateY(-50%);
        transition: color `,`;
      }
    `])),n?"0.2rem 0 0 0.2rem":"0 0.2rem 0.2rem 0",t.spacings.xsmall,n?"60%":"40%",t.transitions.default),t.spacings.medium,t.colors.primary.medium,t.transitions.default,t.colors.secondary.medium,BA.NavLink)});an.MenuList=Bi.default.ul(Gy||(Gy=zi([`
  list-style: none;
  width: 100%;
`],[`
  list-style: none;
  width: 100%;
`])));an.MenuItem=Bi.default.li(Ky||(Ky=zi([`
  display: flex;
  flex-direction: column;
  width: 100%;
`],[`
  display: flex;
  flex-direction: column;
  width: 100%;
`])));var By,Uy,Hy,Wy,Gy,Ky,pm={},mm={};Object.defineProperty(mm,"__esModule",{value:!0});var UA=A,HA=function(e,t){(0,UA.useEffect)(function(){var n=function(r){var i=e==null?void 0:e.current;!i||i.contains(r==null?void 0:r.target)||t(r)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])};mm.default=HA;var gm={};Object.defineProperty(gm,"__esModule",{value:!0});var WA=A;function GA(e,t){(0,WA.useEffect)(function(){function n(r){r.key===e&&t()}return window.addEventListener("keyup",n),function(){return window.removeEventListener("keyup",n)}},[e,t])}gm.default=GA;var vm={};Object.defineProperty(vm,"__esModule",{value:!0});var KA=A,QA=function(e){(0,KA.useEffect)(function(){var t=function(){var n="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,r=document.body,i=document.documentElement,o=Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight),a=n+window.pageYOffset;a>=o&&e()};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}},[e])};vm.default=QA;(function(e){var t=u&&u.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.useWindowOnNearBottom=e.useOnKeypress=e.useOnClickOutside=void 0;var n=mm;Object.defineProperty(e,"useOnClickOutside",{enumerable:!0,get:function(){return t(n).default}});var r=gm;Object.defineProperty(e,"useOnKeypress",{enumerable:!0,get:function(){return t(r).default}});var i=vm;Object.defineProperty(e,"useWindowOnNearBottom",{enumerable:!0,get:function(){return t(i).default}})})(pm);var lh=u&&u.__assign||function(){return lh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lh.apply(this,arguments)},qA=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),XA=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),wE=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&qA(t,e,n);return XA(t,e),t},YA=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},bE=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hm,"__esModule",{value:!0});var Jt=wE(A),Qy=bE(cs),Xs=wE(an),JA=bE(sc),qy=pm,ZA=Po,eD=function(e){var t=e.title,n=e.active,r=e.items,i=e.asIcon,o=i===void 0?!1:i,a=YA(e,["title","active","items","asIcon"]),s=(0,Jt.useState)(n),l=s[0],c=s[1],f=(0,Jt.useRef)(null);return(0,qy.useOnClickOutside)(f,function(){c(!1)}),(0,qy.useOnKeypress)("Escape",function(){c(!1)}),r!=null&&r.length?Jt.default.createElement(Xs.Menu,lh({},a,{ref:f}),Jt.default.createElement(Xs.MenuButton,{asIcon:o,active:l,onClick:function(){return c(!l)}},Jt.default.createElement(Qy.default,{size:"medium",active:l},o?Jt.default.createElement(ZA.Elipsis,null):t)),l&&Jt.default.createElement(JA.default,{placement:o?"right":"bottom",active:l},Jt.default.createElement(Xs.MenuList,null,r==null?void 0:r.map(function(d){var p=d.path,v=d.label;return Jt.default.createElement(Xs.MenuItem,{key:p},Jt.default.createElement(Qy.default,{size:"small",href:p},v))})))):null};hm.default=eD;var _m={},dc={},Ii=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},tD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),nD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),rD=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&tD(t,e,n);return nD(t,e),t};Object.defineProperty(dc,"__esModule",{value:!0});dc.Wrapper=void 0;var $i=rD(z),Ys={isUppercase:function(){return(0,$i.css)(Xy||(Xy=Ii([`
    text-transform: uppercase;
  `],[`
    text-transform: uppercase;
  `])))},isBold:function(e){return(0,$i.css)(Yy||(Yy=Ii([`
    font-weight: `,`;
  `],[`
    font-weight: `,`;
  `])),e.font.weights.bold)},isPointer:function(){return(0,$i.css)(Jy||(Jy=Ii([`
    cursor: pointer;
  `],[`
    cursor: pointer;
  `])))},isSlashed:function(){return(0,$i.css)(Zy||(Zy=Ii([`
    text-decoration: line-through;
  `],[`
    text-decoration: line-through;
  `])))}};dc.Wrapper=$i.default.div(t0||(t0=Ii([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.isUppercase,r=e.isSlashed,i=e.isBold,o=e.isPointer,a=e.size,s=a===void 0?"small":a,l=e.isDarkBgOnHover,c=e.isDarkBg;return(0,$i.css)(e0||(e0=Ii([`
    padding: `," ",`;
    background: `,`;
    color: `,`;
    width: fit-content;
    height: fit-content;
    border-radius: `,`;
    font-size: `,`;
    font-weight: `,`;
    `,`;
    `,`;
    `,`;
    `,`;
    &:hover {
      background: `,`;
    }
  `],[`
    padding: `," ",`;
    background: `,`;
    color: `,`;
    width: fit-content;
    height: fit-content;
    border-radius: `,`;
    font-size: `,`;
    font-weight: `,`;
    `,`;
    `,`;
    `,`;
    `,`;
    &:hover {
      background: `,`;
    }
  `])),t.spacings.mini,t.spacings.xxsmall,c?t.colors.secondary.dark:t.colors.primary.light,t.colors.base.white,t.border.radius,t.font.sizes[s],t.font.weights.regular,!!n&&Ys.isUppercase(),!!o&&Ys.isPointer(),!!r&&Ys.isSlashed(),!!i&&Ys.isBold(t),l?t.colors.secondary.dark:t.colors.primary.light)});var Xy,Yy,Jy,Zy,e0,t0,uh=u&&u.__assign||function(){return uh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},uh.apply(this,arguments)},iD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),oD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),aD=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&iD(t,e,n);return oD(t,e),t},sD=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},lD=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_m,"__esModule",{value:!0});var uD=lD(A),cD=aD(dc),fD=function(e){var t=e.value,n=e.isBold,r=e.isUppercase,i=e.isPointer,o=e.size,a=e.isDarkBgOnHover,s=e.isDarkBg,l=sD(e,["value","isBold","isUppercase","isPointer","size","isDarkBgOnHover","isDarkBg"]);return uD.default.createElement(cD.Wrapper,uh({isUppercase:r,isBold:n,isPointer:i,size:o,isDarkBgOnHover:a,isDarkBg:s},l),t)};_m.default=fD;var ym={},hc={},n0=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},dD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),hD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),pD=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&dD(t,e,n);return hD(t,e),t};Object.defineProperty(hc,"__esModule",{value:!0});hc.Wrapper=void 0;var r0=pD(z);hc.Wrapper=r0.default.main(o0||(o0=n0([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.size,r=n===void 0?"medium":n,i=e.minHeight;return(0,r0.css)(i0||(i0=n0([`
    display: grid;
    grid-template-columns:
      1fr min(
        `,`,
        calc(100% - calc(`,` * 2))
      )
      1fr;
    grid-column-gap: `,`;
    min-height: `,`;

    & > * {
      grid-column: 2;
    }
  `],[`
    display: grid;
    grid-template-columns:
      1fr min(
        `,`,
        calc(100% - calc(`,` * 2))
      )
      1fr;
    grid-column-gap: `,`;
    min-height: `,`;

    & > * {
      grid-column: 2;
    }
  `])),t.container[r],t.container.gutter,t.container.gutter,i)});var i0,o0,ch=u&&u.__assign||function(){return ch=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ch.apply(this,arguments)},mD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),gD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),vD=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&mD(t,e,n);return gD(t,e),t},_D=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},yD=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ym,"__esModule",{value:!0});var wD=yD(A),bD=vD(hc),OD=function(e){var t=e.children,n=e.size,r=e.minHeight,i=r===void 0?"unset":r,o=_D(e,["children","size","minHeight"]);return wD.default.createElement(bD.Wrapper,ch({},o,{size:n,minHeight:i}),t)};ym.default=OD;var wm={},pc={},ED=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},SD=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pc,"__esModule",{value:!0});pc.Wrapper=void 0;var PD=SD(z);pc.Wrapper=PD.default.div(a0||(a0=ED([`
  grid-column: 1/4;
  width: 100%;
`],[`
  grid-column: 1/4;
  width: 100%;
`])));var a0,TD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),jD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ID=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&TD(t,e,n);return jD(t,e),t},$D=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wm,"__esModule",{value:!0});var CD=$D(A),AD=ID(pc),DD=function(e){var t=e.children;return CD.default.createElement(AD.Wrapper,null,t)};wm.default=DD;var ds={},mc={},Ci=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},MD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),RD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),xD=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&MD(t,e,n);return RD(t,e),t};Object.defineProperty(mc,"__esModule",{value:!0});mc.Text=void 0;var Ai=xD(z),ND={white:function(e){return(0,Ai.css)(s0||(s0=Ci([`
    color: `,`;
  `],[`
    color: `,`;
  `])),e.colors.base.white)},black:function(e){return(0,Ai.css)(l0||(l0=Ci([`
    color: `,`;
  `],[`
    color: `,`;
  `])),e.colors.base.black)},primary:function(e){return(0,Ai.css)(u0||(u0=Ci([`
    color: `,`;
  `],[`
    color: `,`;
  `])),e.colors.primary.medium)},secondary:function(e){return(0,Ai.css)(c0||(c0=Ci([`
    color: `,`;
  `],[`
    color: `,`;
  `])),e.colors.secondary.medium)}};mc.Text=Ai.default.p(d0||(d0=Ci([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.disabled,r=n===void 0?!1:n,i=e.size,o=i===void 0?"small":i,a=e.color,s=a===void 0?"black":a;return(0,Ai.css)(f0||(f0=Ci([`
    font-size: `,`;
    `,`;
  `],[`
    font-size: `,`;
    `,`;
  `])),t.font.sizes[o],r?"color: ".concat(t.colors.base.disabled,";"):ND[s](t))});var s0,l0,u0,c0,f0,d0,fh=u&&u.__assign||function(){return fh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fh.apply(this,arguments)},kD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),VD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),LD=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&kD(t,e,n);return VD(t,e),t},FD=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},zD=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ds,"__esModule",{value:!0});var BD=zD(A),UD=LD(mc),HD=function(e){var t=e.value,n=e.tag,r=n===void 0?"span":n,i=e.size,o=e.disabled,a=o===void 0?!1:o,s=e.color,l=FD(e,["value","tag","size","disabled","color"]);return BD.default.createElement(UD.Text,fh({size:i,disabled:a,as:r,color:s},l),t)};ds.default=HD;var gc={},h0=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},WD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),GD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),KD=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&WD(t,e,n);return GD(t,e),t};Object.defineProperty(gc,"__esModule",{value:!0});var p0=KD(z),QD=p0.default.hr(g0||(g0=h0([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,p0.css)(m0||(m0=h0([`
    height: 0.01rem;
    background: `,`;
    border: 0;
  `],[`
    height: 0.01rem;
    background: `,`;
    border: 0;
  `])),t.colors.neutral.darkest)});gc.default=QD;var m0,g0,bm={},vc={},v0=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},qD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),XD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),YD=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&qD(t,e,n);return XD(t,e),t};Object.defineProperty(vc,"__esModule",{value:!0});vc.Wrapper=void 0;var _0=YD(z);vc.Wrapper=_0.default.div(w0||(w0=v0([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,_0.css)(y0||(y0=v0([`
    display: grid;
    grid-template-columns: 1fr;
    padding: `,`;
    grid-gap: `,`;
    max-width: 30rem;
    box-shadow: `,`;
    > * {
      max-width: calc(30rem - calc(`,` * 2));
    }
  `],[`
    display: grid;
    grid-template-columns: 1fr;
    padding: `,`;
    grid-gap: `,`;
    max-width: 30rem;
    box-shadow: `,`;
    > * {
      max-width: calc(30rem - calc(`,` * 2));
    }
  `])),t.spacings.xxsmall,t.spacings.xxsmall,t.shadows.default,t.spacings.xxsmall)});var y0,w0,JD=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),ZD=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),eM=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&JD(t,e,n);return ZD(t,e),t},To=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bm,"__esModule",{value:!0});var ui=To(A),tM=To(rc),nM=eM(vc),rM=To(uc),iM=To(ds),oM=To(gc),aM=To(ti),sM=function(e){var t=e.images,n=e.title,r=e.content,i=e.cta,o=e.handleClick;return ui.default.createElement(nM.Wrapper,null,ui.default.createElement(tM.default,{images:t}),ui.default.createElement(rM.default,{lineLeft:!0,lineColor:"primary"},n),ui.default.createElement(iM.default,{size:"medium",value:r}),ui.default.createElement(oM.default,null),ui.default.createElement(aM.default,{variant:"filled",onClick:o},i))};bm.default=sM;var Om={},uo={},Nr=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},lM=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),uM=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),cM=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&lM(t,e,n);return uM(t,e),t};Object.defineProperty(uo,"__esModule",{value:!0});uo.Img=uo.Wrapper=void 0;var kr=cM(z),fM=us,dM={circle:function(){return(0,kr.css)(b0||(b0=Nr([`
    border-radius: 50%;
  `],[`
    border-radius: 50%;
  `])))},square:function(){return(0,kr.css)(O0||(O0=Nr([`
    border-radius: 0;
  `],[`
    border-radius: 0;
  `])))},rounded:function(e){return(0,kr.css)(E0||(E0=Nr([`
    border-radius: `,`;
  `],[`
    border-radius: `,`;
  `])),e.border.radius)}};uo.Wrapper=kr.default.div(P0||(P0=Nr([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.size,r=n===void 0?"medium":n,i=e.variant,o=i===void 0?"circle":i;return(0,kr.css)(S0||(S0=Nr([`
    border-radius: 50%;
    align-items: center;
    font-size: `,`;
    width: `,`;
    height: `,`;
    justify-content: center;
    overflow: hidden;
    position: relative;
    display: inline-flex;
    color: `,`;
    `,`
    `,`}
  `],[`
    border-radius: 50%;
    align-items: center;
    font-size: `,`;
    width: `,`;
    height: `,`;
    justify-content: center;
    overflow: hidden;
    position: relative;
    display: inline-flex;
    color: `,`;
    `,`
    `,`}
  `])),t.font.sizes.large,t.avatarSizes[r],t.avatarSizes[r],t.colors.base.white,fM.placeholder,!!o&&dM[o](t))});uo.Img=kr.default.img(j0||(j0=Nr([`
  `,`
`],[`
  `,`
`])),function(){return(0,kr.css)(T0||(T0=Nr([`
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
  `],[`
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
  `])))});var b0,O0,E0,S0,P0,T0,j0,dh=u&&u.__assign||function(){return dh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},dh.apply(this,arguments)},hM=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),pM=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),mM=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&hM(t,e,n);return pM(t,e),t},gM=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},vM=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Om,"__esModule",{value:!0});var I0=vM(A),$0=mM(uo),_M=function(e){var t=e.children,n=e.src,r=e.alt,i=e.size,o=e.variant,a=gM(e,["children","src","alt","size","variant"]);return I0.default.createElement($0.Wrapper,dh({size:i,variant:o},a),n?I0.default.createElement($0.Img,{src:n,alt:r}):t)};Om.default=_M;var hs={},_c={},yM=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_c,"__esModule",{value:!0});_c.STATUS_ICONS=void 0;var Js=yM(A),Zs=Po;_c.STATUS_ICONS={info:Js.default.createElement(Zs.Info,null),success:Js.default.createElement(Zs.Success,null),error:Js.default.createElement(Zs.Error,null),warning:Js.default.createElement(Zs.Warning,null)};var We={},de=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},wM=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),bM=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),OM=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&wM(t,e,n);return bM(t,e),t};Object.defineProperty(We,"__esModule",{value:!0});We.CloseButton=We.IconWrapper=We.Header=We.Body=We.Content=We.Container=We.Wrapper=void 0;var he=OM(z),EM={error:function(e){return(0,he.css)(C0||(C0=de([`
    background-color: `,`1f;
  `],[`
    background-color: `,`1f;
  `])),e.colors.base.error)},warning:function(e){return(0,he.css)(A0||(A0=de([`
    background-color: `,`1f;
  `],[`
    background-color: `,`1f;
  `])),e.colors.base.warning)},info:function(e){return(0,he.css)(D0||(D0=de([`
    background-color: `,`1f;
  `],[`
    background-color: `,`1f;
  `])),e.colors.base.info)},success:function(e){return(0,he.css)(M0||(M0=de([`
    background-color: `,`1f;
  `],[`
    background-color: `,`1f;
  `])),e.colors.base.success)}},SM={error:function(e){return(0,he.css)(R0||(R0=de([`
    color: `,`;
  `],[`
    color: `,`;
  `])),e.colors.base.error)},warning:function(e){return(0,he.css)(x0||(x0=de([`
    color: `,`;
  `],[`
    color: `,`;
  `])),e.colors.base.warning)},info:function(e){return(0,he.css)(N0||(N0=de([`
    color: `,`;
  `],[`
    color: `,`;
  `])),e.colors.base.info)},success:function(e){return(0,he.css)(k0||(k0=de([`
    color: `,`;
  `],[`
    color: `,`;
  `])),e.colors.base.success)}};We.Wrapper=he.default.div(L0||(L0=de([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.severity,r=n===void 0?"info":n;return(0,he.css)(V0||(V0=de([`
    animation-fill-mode: forwards;
    border-radius: `,`;
    position: relative;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `,`}
  `],[`
    animation-fill-mode: forwards;
    border-radius: `,`;
    position: relative;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `,`}
  `])),t.border.radius,!!r&&EM[r](t))});We.Container=he.default.div(z0||(z0=de([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,he.css)(F0||(F0=de([`
    display: flex;
    padding: `," ",`
      `," ",`;
  `],[`
    display: flex;
    padding: `," ",`
      `," ",`;
  `])),t.spacings.xsmall,t.spacings.small,t.spacings.xsmall,t.spacings.xsmall)});We.Content=he.default.div(U0||(U0=de([`
  `,`
`],[`
  `,`
`])),function(){return(0,he.css)(B0||(B0=de([`
    flex-grow: 1;
  `],[`
    flex-grow: 1;
  `])))});We.Body=he.default.div(W0||(W0=de([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,he.css)(H0||(H0=de([`
    color: `,`;
    font-size: `,`;
  `],[`
    color: `,`;
    font-size: `,`;
  `])),t.colors.neutral.xdarkest,t.font.sizes.small)});We.Header=he.default.div(K0||(K0=de([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,he.css)(G0||(G0=de([`
    font-size: `,`;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: `,`;
    line-height: 1.3;
    margin-bottom: `,`;
  `],[`
    font-size: `,`;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: `,`;
    line-height: 1.3;
    margin-bottom: `,`;
  `])),t.font.sizes.medium,t.colors.neutral.xdarkest,t.spacings.mini)});We.IconWrapper=he.default.div(q0||(q0=de([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.severity,r=n===void 0?"info":n,i=e.header;return(0,he.css)(Q0||(Q0=de([`
    align-self: `,`;
    font-size: 0;
    margin-right: `,`;

    svg {
      align-items: center;
      font-size: `,`;
      `,`}
    }
  `],[`
    align-self: `,`;
    font-size: 0;
    margin-right: `,`;

    svg {
      align-items: center;
      font-size: `,`;
      `,`}
    }
  `])),i?"flex-start":"center",t.spacings.xxsmall,i?t.font.sizes.xlarge:t.font.sizes.xsmall,!!r&&SM[r](t))});We.CloseButton=he.default.div(Y0||(Y0=de([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,he.css)(X0||(X0=de([`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: `,`;
    line-height: 1;
    outline: none;
    padding-top: `,`;
    position: absolute;
    right: 0;
    top: 0;
  `],[`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: `,`;
    line-height: 1;
    outline: none;
    padding-top: `,`;
    position: absolute;
    right: 0;
    top: 0;
  `])),t.font.sizes.xsmall,t.spacings.mini)});var C0,A0,D0,M0,R0,x0,N0,k0,V0,L0,F0,z0,B0,U0,H0,W0,G0,K0,Q0,q0,X0,Y0,hh=u&&u.__assign||function(){return hh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hh.apply(this,arguments)},PM=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),TM=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),OE=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&PM(t,e,n);return TM(t,e),t},jM=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},IM=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hs,"__esModule",{value:!0});var Zt=OE(A),$M=_c,CM=IM(ti),wr=OE(We),AM=function(e){var t=e.children,n=e.severity,r=n===void 0?"info":n,i=e.header,o=e.showIcon,a=o===void 0?!1:o,s=e.closable,l=s===void 0?!1:s,c=e.onClose,f=jM(e,["children","severity","header","showIcon","closable","onClose"]),d=(0,Zt.useState)("show"),p=d[0],v=d[1],y=(0,Zt.useCallback)(function(_){v("hide"),c==null||c(_)},[c]);return p==="hide"?null:Zt.default.createElement(wr.Wrapper,hh({role:"alert",severity:r},f),Zt.default.createElement(wr.Container,null,l&&Zt.default.createElement(wr.CloseButton,null,Zt.default.createElement(CM.default,{outline:!1,size:"xsmall",onClick:y},"X")),a&&Zt.default.createElement(wr.IconWrapper,{severity:r,header:i},$M.STATUS_ICONS[r]),Zt.default.createElement(wr.Content,null,i&&Zt.default.createElement(wr.Header,null,i),Zt.default.createElement(wr.Body,null,t))))};hs.default=AM;var Em={},co={},ph=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},DM=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),MM=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),RM=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&DM(t,e,n);return MM(t,e),t};Object.defineProperty(co,"__esModule",{value:!0});co.BreadcrumbItem=co.Breadcrumb=void 0;var mh=RM(z);co.Breadcrumb=mh.default.ul(J0||(J0=ph([`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
`],[`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
`])));co.BreadcrumbItem=mh.default.li(e1||(e1=ph([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.size,r=n===void 0?"small":n;return(0,mh.css)(Z0||(Z0=ph([`
    margin: 0 0.5rem;
    color: `,`;
    font-family: `,`;
    font-size: `,`;
  `],[`
    margin: 0 0.5rem;
    color: `,`;
    font-family: `,`;
    font-size: `,`;
  `])),t.colors.primary.medium,t.font.family.primary,t.font.sizes[r])});var J0,Z0,e1,xM=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),NM=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),EE=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&xM(t,e,n);return NM(t,e),t},kM=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Em,"__esModule",{value:!0});var ci=EE(A),VM=kM(cs),Cf=EE(co),LM=function(e){var t=e.separator,n=t===void 0?"/":t,r=e.items,i=e.padding,o=i===void 0?"mini":i,a=e.size,s=a===void 0?"small":a;return r?ci.default.createElement(Cf.Breadcrumb,null,r.map(function(l,c){return ci.default.createElement(ci.Fragment,{key:c},c>0&&ci.default.createElement(Cf.BreadcrumbItem,{key:"breadcrumb-".concat(n,"-").concat(c),size:s},n),ci.default.createElement(Cf.BreadcrumbItem,{key:"breadcrumb-".concat(l.name,"-").concat(c),size:s},ci.default.createElement(VM.default,{active:c===r.length-1,disabled:c===r.length-1,title:l.name,size:s,href:c!==r.length-1?l.link:void 0,padding:o},l.name)))})):null};Em.default=LM;var SE={},yc={},Di=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},FM=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),zM=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),BM=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&FM(t,e,n);return zM(t,e),t};Object.defineProperty(yc,"__esModule",{value:!0});yc.Skeleton=void 0;var Mi=BM(z),UM=us,HM={text:function(e){return(0,Mi.css)(t1||(t1=Di([`
    > * {
      font-size: `,`;
    }
  `],[`
    > * {
      font-size: `,`;
    }
  `])),e)},circular:function(){return(0,Mi.css)(n1||(n1=Di([`
    border-radius: 50%;
  `],[`
    border-radius: 50%;
  `])))},rectangular:function(){return(0,Mi.css)(r1||(r1=Di([""],[""])))},rounded:function(){return(0,Mi.css)(i1||(i1=Di([`
    border-radius: 10px;
  `],[`
    border-radius: 10px;
  `])))}};yc.Skeleton=Mi.default.div(a1||(a1=Di([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.variant,n=e.width,r=e.height,i=e.fontSize;return(0,Mi.css)(o1||(o1=Di([`
    width: `,`;
    height: `,`;
    > * {
      visibility: hidden;
      opacity: 0;
    }
    `,`
    `,`
  `],[`
    width: `,`;
    height: `,`;
    > * {
      visibility: hidden;
      opacity: 0;
    }
    `,`
    `,`
  `])),n?"".concat(n,"px"):"fit-content",r?"".concat(r,"px"):"fit-content",HM[t](i),UM.placeholder)});var t1,n1,r1,i1,o1,a1;(function(e){var t=u&&u.__createBinding||(Object.create?function(l,c,f,d){d===void 0&&(d=f);var p=Object.getOwnPropertyDescriptor(c,f);(!p||("get"in p?!c.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return c[f]}}),Object.defineProperty(l,d,p)}:function(l,c,f,d){d===void 0&&(d=f),l[d]=c[f]}),n=u&&u.__setModuleDefault||(Object.create?function(l,c){Object.defineProperty(l,"default",{enumerable:!0,value:c})}:function(l,c){l.default=c}),r=u&&u.__importStar||function(l){if(l&&l.__esModule)return l;var c={};if(l!=null)for(var f in l)f!=="default"&&Object.prototype.hasOwnProperty.call(l,f)&&t(c,l,f);return n(c,l),c},i=u&&u.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(e,"__esModule",{value:!0}),e.SkeletonVariant=void 0;var o=i(A),a=r(yc);(function(l){l.TEXT="text",l.CIRCULAR="circular",l.RECTANGULAR="rectangular",l.ROUNDED="rounded"})(e.SkeletonVariant||(e.SkeletonVariant={}));var s=function(l){var c=l.children,f=l.variant,d=l.width,p=l.height,v=l.fontSize;return o.default.createElement(a.Skeleton,{variant:f,width:d,height:p,fontSize:v},c)};e.default=s})(SE);var Sm={},fo={},Vr=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},WM=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),GM=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),KM=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&WM(t,e,n);return GM(t,e),t};Object.defineProperty(fo,"__esModule",{value:!0});fo.Input=fo.Label=void 0;var Lr=KM(z);fo.Label=Lr.default.label(l1||(l1=Vr([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.disabled;return(0,Lr.css)(s1||(s1=Vr([`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: `,`;
    width: fit-content;
  `],[`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: `,`;
    width: fit-content;
  `])),t?"not-allowed":"pointer")});var QM={small:function(){return(0,Lr.css)(u1||(u1=Vr([`
    width: 2.8rem;
    height: 1.6rem;
    &:before {
      width: 1rem;
      height: 1rem;
    }
  `],[`
    width: 2.8rem;
    height: 1.6rem;
    &:before {
      width: 1rem;
      height: 1rem;
    }
  `])))},medium:function(){return(0,Lr.css)(c1||(c1=Vr([`
    width: 3.5rem;
    height: 2rem;
    &:before {
      width: 1.4rem;
      height: 1.4rem;
    }
  `],[`
    width: 3.5rem;
    height: 2rem;
    &:before {
      width: 1.4rem;
      height: 1.4rem;
    }
  `])))},large:function(){return(0,Lr.css)(f1||(f1=Vr([`
    width: 4.2rem;
    height: 2.4rem;
    &:before {
      width: 1.8rem;
      height: 1.8rem;
    }
  `],[`
    width: 4.2rem;
    height: 2.4rem;
    &:before {
      width: 1.8rem;
      height: 1.8rem;
    }
  `])))}};fo.Input=Lr.default.input(h1||(h1=Vr([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.colors,r=e.spanSize,i=r===void 0?"large":r;return(0,Lr.css)(d1||(d1=Vr([`
    opacity: 0;
    position: absolute;

    & + span {
      position: relative;
      border-radius: `,`;
      padding: `,`;
      transition: 300ms all;
      background: `,`;

      `,`

      &:before {
        transition: 300ms all;
        content: '';
        position: absolute;
        border-radius: `,`;
        top: 50%;
        left: `,`;
        transform: translate(0, -50%);
        background: `,`;
      }
    }

    &:checked + span {
      background: `,`;

      &:before {
        transform: translate(90%, -50%);
      }
    }

    &:disabled + span {
      opacity: 0.7;

      &:before {
        background: `,`;
      }
    }
  `],[`
    opacity: 0;
    position: absolute;

    & + span {
      position: relative;
      border-radius: `,`;
      padding: `,`;
      transition: 300ms all;
      background: `,`;

      `,`

      &:before {
        transition: 300ms all;
        content: '';
        position: absolute;
        border-radius: `,`;
        top: 50%;
        left: `,`;
        transform: translate(0, -50%);
        background: `,`;
      }
    }

    &:checked + span {
      background: `,`;

      &:before {
        transform: translate(90%, -50%);
      }
    }

    &:disabled + span {
      opacity: 0.7;

      &:before {
        background: `,`;
      }
    }
  `])),t.spacings.medium,t.spacings.mini,(n==null?void 0:n.bgUnchecked)||t.colors.neutral.dark,i&&QM[i](),t.spacings.medium,t.spacings.mini,(n==null?void 0:n.dot)||t.colors.base.white,(n==null?void 0:n.bgChecked)||t.colors.primary.medium,t.colors.neutral.lightest)});var s1,l1,u1,c1,f1,d1,h1,qM=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),XM=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),YM=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&qM(t,e,n);return XM(t,e),t},PE=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Sm,"__esModule",{value:!0});var el=PE(A),JM=PE(ds),p1=YM(fo),ZM=function(e){var t=e.label,n=e.colors,r=e.checked,i=e.defaultChecked,o=i===void 0?!1:i,a=e.disabled,s=a===void 0?!1:a,l=e.size,c=l===void 0?"medium":l,f=e.onSwitch;return el.default.createElement(p1.Label,{disabled:s},t&&el.default.createElement(JM.default,{size:c,disabled:s,value:t,tag:"span"}),el.default.createElement(p1.Input,{type:"checkbox",colors:n,checked:r,defaultChecked:o,onChange:f,disabled:s,spanSize:c}),el.default.createElement("span",null))};Sm.default=ZM;var Pm={},$t={},Dn=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},eR=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),tR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),nR=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&eR(t,e,n);return tR(t,e),t};Object.defineProperty($t,"__esModule",{value:!0});$t.TableCell=$t.TableBody=$t.TableHeaderCell=$t.TableHead=$t.Table=void 0;var Mn=nR(z);$t.Table=Mn.default.table(g1||(g1=Dn([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,Mn.css)(m1||(m1=Dn([`
    width: 100%;
    border-collapse: collapse;
    border-width: `,`
    border-style: solid;
    border-color: `,`;
    `],[`
    width: 100%;
    border-collapse: collapse;
    border-width: `,`
    border-style: solid;
    border-color: `,`;
    `])),t.border.xxsmall,t.colors.primary.light)});$t.TableHead=Mn.default.thead(_1||(_1=Dn([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,Mn.css)(v1||(v1=Dn([`
    background-color: `,`;
  `],[`
    background-color: `,`;
  `])),t.colors.base.info)});$t.TableHeaderCell=Mn.default.th(w1||(w1=Dn([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,Mn.css)(y1||(y1=Dn([`
    padding: `,`;
    border: `," solid ",`;
  `],[`
    padding: `,`;
    border: `," solid ",`;
  `])),t.spacings.xxsmall,t.border.mini,t.colors.primary.dark)});$t.TableBody=Mn.default.tbody(b1||(b1=Dn([""],[""])));$t.TableCell=Mn.default.td(E1||(E1=Dn([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,Mn.css)(O1||(O1=Dn([`
    padding: `,`;
    border: `," solid ",`;
    background-color: `,`;
    text-align: center;
  `],[`
    padding: `,`;
    border: `," solid ",`;
    background-color: `,`;
    text-align: center;
  `])),t.spacings.xxsmall,t.border.mini,t.colors.primary.dark,t.colors.neutral.lighter)});var m1,g1,v1,_1,y1,w1,b1,O1,E1,rR=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),iR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),oR=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&rR(t,e,n);return iR(t,e),t},aR=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pm,"__esModule",{value:!0});var fi=aR(A),zo=oR($t),sR=function(e){var t=e.columns,n=e.data;return fi.default.createElement(zo.Table,null,fi.default.createElement(zo.TableHead,null,t.map(function(r){return fi.default.createElement(zo.TableHeaderCell,{key:r.key},r.title)})),fi.default.createElement(zo.TableBody,null,n.map(function(r,i){return fi.default.createElement("tr",{key:i},t.map(function(o){return fi.default.createElement(zo.TableCell,{key:o.key},r[o.key])}))})))};Pm.default=sR;var Tm={},wc={},Bo=u&&u.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(wc,"__esModule",{value:!0});wc.usePagination=void 0;var lR=A,tl=function(e,t){var n=t-e+1;return Array.from({length:n},function(r,i){return i+e})},uR=function(e){var t=e.totalCount,n=e.pageSize,r=e.siblingCount,i=r===void 0?1:r,o=e.currentPage,a=(0,lR.useMemo)(function(){var s=Math.ceil(t/n),l=i+5;if(l>=s)return tl(1,s);var c=Math.max(o-i,1),f=Math.min(o+i,s),d=c>2,p=f<s-2,v=1,y=s;if(!d&&p){var _=3+2*i,b=tl(1,_);return Bo(Bo([],b,!0),[0,s],!1)}if(d&&!p){var m=3+2*i,h=tl(s-m+1,s);return Bo([v,0],h,!0)}if(d&&p){var g=tl(c,f);return Bo(Bo([v,0],g,!0),[0,y],!1)}},[t,n,i,o]);return a};wc.usePagination=uR;var TE={};(function(e){var t=u&&u.__makeTemplateObject||function(m,h){return Object.defineProperty?Object.defineProperty(m,"raw",{value:h}):m.raw=h,m},n=u&&u.__createBinding||(Object.create?function(m,h,g,w){w===void 0&&(w=g);var O=Object.getOwnPropertyDescriptor(h,g);(!O||("get"in O?!h.__esModule:O.writable||O.configurable))&&(O={enumerable:!0,get:function(){return h[g]}}),Object.defineProperty(m,w,O)}:function(m,h,g,w){w===void 0&&(w=g),m[w]=h[g]}),r=u&&u.__setModuleDefault||(Object.create?function(m,h){Object.defineProperty(m,"default",{enumerable:!0,value:h})}:function(m,h){m.default=h}),i=u&&u.__importStar||function(m){if(m&&m.__esModule)return m;var h={};if(m!=null)for(var g in m)g!=="default"&&Object.prototype.hasOwnProperty.call(m,g)&&n(h,m,g);return r(h,m),h},o=u&&u.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(e,"__esModule",{value:!0}),e.Dots=e.Arrow=e.Item=e.Container=void 0;var a=i(z),s=o(ti),l={left:function(){return(0,a.css)(c||(c=t([`
    transform: rotate(-135deg) translate(-50%);
  `],[`
    transform: rotate(-135deg) translate(-50%);
  `])))},right:function(){return(0,a.css)(f||(f=t([`
    transform: rotate(45deg);
  `],[`
    transform: rotate(45deg);
  `])))}};e.Container=a.default.ul(d||(d=t([`
  display: flex;
  list-style-type: none;
`],[`
  display: flex;
  list-style-type: none;
`]))),e.Item=(0,a.default)(s.default)(v||(v=t([`
  `,`
`],[`
  `,`
`])),function(m){var h=m.disabled;return(0,a.css)(p||(p=t([`
    `,`
  `],[`
    `,`
  `])),h?"pointer-events: none;":"")}),e.Arrow=a.default.div(_||(_=t([`
  `,`
`],[`
  `,`
`])),function(m){var h=m.theme,g=m.direction,w=m.disabled;return(0,a.css)(y||(y=t([`
    :before {
      position: relative;
      content: '';
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      border-right: 0.12rem solid `,`;
      border-top: 0.12rem solid `,`;
      visibility: `,`;
      `,`
      top: `,`;
    }
  `],[`
    :before {
      position: relative;
      content: '';
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      border-right: 0.12rem solid `,`;
      border-top: 0.12rem solid `,`;
      visibility: `,`;
      `,`
      top: `,`;
    }
  `])),h.colors.base.black,h.colors.base.black,w?"hidden":"visible",l[g],g==="left"?"-0.2rem":"unset")}),e.Dots=(0,a.default)(e.Item)(b||(b=t([`
  pointer-events: none;
`],[`
  pointer-events: none;
`])));var c,f,d,p,v,y,_,b})(TE);var cR=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),fR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),dR=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&cR(t,e,n);return fR(t,e),t},hR=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Tm,"__esModule",{value:!0});var br=hR(A),pR=wc,Or=dR(TE),mR=function(e){var t=e.className;e.colors;var n=e.totalCount,r=e.currentPage,i=e.pageSize,o=e.onPageChange,a=e.siblingCount,s=a===void 0?1:a,l=(0,pR.usePagination)({currentPage:r,totalCount:n,siblingCount:s,pageSize:i});if(r===0||l&&l.length<2)return null;var c=function(){r<Math.ceil(n/i)&&o(r+1)},f=function(){r>1&&o(r-1)},d=l&&l[l.length-1];return br.default.createElement(Or.Container,{className:t},br.default.createElement(Or.Item,{disabled:r===1,onClick:f,outline:!1},br.default.createElement(Or.Arrow,{direction:"left",disabled:r===1})),l==null?void 0:l.map(function(p,v){return p===0?br.default.createElement(Or.Dots,{key:v,outline:!1},"…"):br.default.createElement(Or.Item,{key:v,onClick:function(){return o(p)},outline:p===r,variant:p===r?"secondary":"primary"},p)}),br.default.createElement(Or.Item,{disabled:r===d,onClick:c,outline:!1},br.default.createElement(Or.Arrow,{direction:"right",disabled:r===d})))};Tm.default=mR;var jm={},bc={},S1=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},gR=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),vR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),_R=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&gR(t,e,n);return vR(t,e),t};Object.defineProperty(bc,"__esModule",{value:!0});bc.RatingContainer=void 0;var P1=_R(z);bc.RatingContainer=P1.default.div(j1||(j1=S1([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme;return(0,P1.css)(T1||(T1=S1([`
    float: left;

    :not(:checked) > input {
      display: none;
    }

    :not(:checked) > label {
      float: right;
      width: `,`;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: `,`;
      color: `,`;
    }
    :not(:checked) > label:before {
      content: '★';
    }
    > input:checked ~ label {
      color: `,`;
    }
    :not(:checked) > label:hover,
    :not(:checked) > label:hover ~ label {
      color: `,`;
    }

    . > input:checked + label:hover,
    . > input:checked + label:hover ~ label {
      color: `,`;
    }
  `],[`
    float: left;

    :not(:checked) > input {
      display: none;
    }

    :not(:checked) > label {
      float: right;
      width: `,`;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: `,`;
      color: `,`;
    }
    :not(:checked) > label:before {
      content: '★';
    }
    > input:checked ~ label {
      color: `,`;
    }
    :not(:checked) > label:hover,
    :not(:checked) > label:hover ~ label {
      color: `,`;
    }

    . > input:checked + label:hover,
    . > input:checked + label:hover ~ label {
      color: `,`;
    }
  `])),t.font.sizes.medium,t.font.sizes.large,t.colors.neutral.lighter,t.colors.base.warning,t.colors.base.warning,t.colors.base.warning)});var T1,j1,yR=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),wR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),bR=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&yR(t,e,n);return wR(t,e),t};Object.defineProperty(jm,"__esModule",{value:!0});var at=bR(A),OR=bc,ER=function(e){var t=e.name,n=e.value,r=e.onChange,i=(0,at.useState)(n),o=i[0],a=i[1],s=function(l){var c=+l.target.value;r(c),a(c)};return(0,at.useEffect)(function(){},[o]),(0,at.useEffect)(function(){a(n)},[n]),at.default.createElement(OR.RatingContainer,null,at.default.createElement("input",{type:"radio",id:"star5",name:t,value:"5",checked:o>=5,onChange:s}),at.default.createElement("label",{htmlFor:"star5",title:"5 stars"},"5 stars"),at.default.createElement("input",{type:"radio",id:"star4",name:t,value:"4",checked:o===4,onChange:s}),at.default.createElement("label",{htmlFor:"star4",title:"4 stars"},"4 stars"),at.default.createElement("input",{type:"radio",id:"star3",name:t,value:"3",checked:o===3,onChange:s}),at.default.createElement("label",{htmlFor:"star3",title:"3 stars"},"3 stars"),at.default.createElement("input",{type:"radio",id:"star2",name:t,value:"2",checked:o===2,onChange:s}),at.default.createElement("label",{htmlFor:"star2",title:"2 stars"},"2 stars"),at.default.createElement("input",{type:"radio",id:"star1",name:t,value:"1",checked:o===1,onChange:s}),at.default.createElement("label",{htmlFor:"star1",title:"1 star"},"1 star"))};jm.default=ER;var Im={},Oc={},I1=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},SR=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),PR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),TR=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&SR(t,e,n);return PR(t,e),t},jR=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Oc,"__esModule",{value:!0});Oc.TextArea=void 0;var $1=TR(z),IR=jR(So);Oc.TextArea=(0,$1.default)(IR.default)(A1||(A1=I1([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.label;return(0,$1.css)(C1||(C1=I1([`
    padding-top: `,`;
  `],[`
    padding-top: `,`;
  `])),n?t.spacings.small:t.spacings.xsmall)});var C1,A1,gh=u&&u.__assign||function(){return gh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gh.apply(this,arguments)},$R=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),CR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),AR=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&$R(t,e,n);return CR(t,e),t},DR=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},MR=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Im,"__esModule",{value:!0});var RR=MR(A),xR=AR(Oc),NR=function(e){var t=e.label,n=e.rows,r=n===void 0?6:n,i=e.columns,o=DR(e,["label","rows","columns"]);return RR.default.createElement(xR.TextArea,gh({},o,{label:t,type:void 0,generic:{as:"textarea",props:{rows:r,columns:i}}}))};Im.default=NR;var $m={},Ec={},kR=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},VR=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ec,"__esModule",{value:!0});Ec.File=void 0;var LR=VR(z);Ec.File=LR.default.input(D1||(D1=kR([`
  display: none;
`],[`
  display: none;
`])));var D1,vh=u&&u.__assign||function(){return vh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},vh.apply(this,arguments)},FR=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),zR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),jE=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&FR(t,e,n);return zR(t,e),t},BR=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},UR=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty($m,"__esModule",{value:!0});var di=jE(A),HR=jE(Ec),WR=UR(ti),GR=function(e){var t=e.text,n=t===void 0?"Upolad":t,r=e.variant,i=BR(e,["text","variant"]),o=(0,di.useRef)(null),a=(0,di.useCallback)(function(){var s;(s=o==null?void 0:o.current)===null||s===void 0||s.click()},[]);return di.default.createElement(di.default.Fragment,null,di.default.createElement(HR.File,vh({},i,{ref:o,type:"file"})),di.default.createElement(WR.default,{variant:r,onClick:a},n))};$m.default=GR;var Cm={},Sc={},M1=u&&u.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},KR=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),QR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),qR=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&KR(t,e,n);return QR(t,e),t},XR=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Sc,"__esModule",{value:!0});Sc.Toaster=void 0;var R1=qR(z),YR=XR(hs);Sc.Toaster=(0,R1.default)(YR.default)(N1||(N1=M1([`
  `,`
`],[`
  `,`
`])),function(e){var t=e.theme,n=e.duration,r=e.animated,i=e.isFullWidth;return(0,R1.css)(x1||(x1=M1([`
    `,`
  `],[`
    `,`
  `])),r&&`
    animation: moveTop `.concat(n/1e3,`s linear;
    position: absolute;
    width: `).concat(i?"100%":"fit-content",`;
    max-width: calc(100vw - `).concat(t.spacings.medium,`);
    left: 50%;
    transform: translateX(-50%);
    @keyframes moveTop {
      0% {
        bottom: 0;
        bottom: 50%;
        opacity: 1
      }
      50% {
        bottom: 80%;
      }
      80% {
        opacity: .8;
      }
      100% {
        opacity: 0;
        bottom: 80%;
      }
    }
    `))});var x1,N1,iu=u&&u.__assign||function(){return iu=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},iu.apply(this,arguments)},JR=u&&u.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),ZR=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),IE=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&JR(t,e,n);return ZR(t,e),t},e4=u&&u.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},t4=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cm,"__esModule",{value:!0});var nl=IE(A),n4=t4(hs),r4=IE(Sc),i4=zO,o4=function(e){var t=e.duration,n=t===void 0?5e3:t,r=e.closable,i=r===void 0?!0:r,o=e.animated,a=e.isFullWidth,s=a===void 0?!1:a,l=e4(e,["duration","closable","animated","isFullWidth"]),c=(0,nl.useState)(!0),f=c[0],d=c[1];return(0,nl.useEffect)(function(){if(typeof n=="number"){var p=setTimeout(function(){d(!1)},n);return function(){clearTimeout(p)}}},[n]),f?o?(0,i4.createPortal)(nl.default.createElement(r4.Toaster,iu({},l,{closable:i,animated:o,duration:n,isFullWidth:s})),document.querySelector("body")):nl.default.createElement(n4.default,iu({},l,{closable:i})):null};Cm.default=o4;(function(e){var t=u&&u.__importDefault||function(Q){return Q&&Q.__esModule?Q:{default:Q}};Object.defineProperty(e,"__esModule",{value:!0}),e.Toaster=e.FileField=e.TextArea=e.GenericInput=e.Rating=e.Pagination=e.Table=e.Switch=e.Skeleton=e.Breadcrumb=e.Alert=e.Avatar=e.Card=e.Divider=e.TextContent=e.GridFluid=e.GridMain=e.Tag=e.Menu=e.Highlight=e.Select=e.NavLink=e.NumberField=e.Container=e.Ribbon=e.Heading=e.Paper=e.Slider=e.TextField=e.Label=e.Radio=e.CheckBox=e.Box=e.Button=e.Accordion=void 0;var n=kp;Object.defineProperty(e,"Accordion",{enumerable:!0,get:function(){return t(n).default}});var r=ti;Object.defineProperty(e,"Button",{enumerable:!0,get:function(){return t(r).default}});var i=Yu;Object.defineProperty(e,"Box",{enumerable:!0,get:function(){return t(i).default}});var o=Zu;Object.defineProperty(e,"CheckBox",{enumerable:!0,get:function(){return t(o).default}});var a=Wp;Object.defineProperty(e,"Radio",{enumerable:!0,get:function(){return t(a).default}});var s=tc;Object.defineProperty(e,"Label",{enumerable:!0,get:function(){return t(s).default}});var l=Gp;Object.defineProperty(e,"TextField",{enumerable:!0,get:function(){return t(l).default}});var c=rc;Object.defineProperty(e,"Slider",{enumerable:!0,get:function(){return t(c).default}});var f=sc;Object.defineProperty(e,"Paper",{enumerable:!0,get:function(){return t(f).default}});var d=uc;Object.defineProperty(e,"Heading",{enumerable:!0,get:function(){return t(d).default}});var p=lm;Object.defineProperty(e,"Ribbon",{enumerable:!0,get:function(){return t(p).default}});var v=um;Object.defineProperty(e,"Container",{enumerable:!0,get:function(){return t(v).default}});var y=cm;Object.defineProperty(e,"NumberField",{enumerable:!0,get:function(){return t(y).default}});var _=cs;Object.defineProperty(e,"NavLink",{enumerable:!0,get:function(){return t(_).default}});var b=fm;Object.defineProperty(e,"Select",{enumerable:!0,get:function(){return t(b).default}});var m=dm;Object.defineProperty(e,"Highlight",{enumerable:!0,get:function(){return t(m).default}});var h=hm;Object.defineProperty(e,"Menu",{enumerable:!0,get:function(){return t(h).default}});var g=_m;Object.defineProperty(e,"Tag",{enumerable:!0,get:function(){return t(g).default}});var w=ym;Object.defineProperty(e,"GridMain",{enumerable:!0,get:function(){return t(w).default}});var O=wm;Object.defineProperty(e,"GridFluid",{enumerable:!0,get:function(){return t(O).default}});var j=ds;Object.defineProperty(e,"TextContent",{enumerable:!0,get:function(){return t(j).default}});var E=gc;Object.defineProperty(e,"Divider",{enumerable:!0,get:function(){return t(E).default}});var D=bm;Object.defineProperty(e,"Card",{enumerable:!0,get:function(){return t(D).default}});var Y=Om;Object.defineProperty(e,"Avatar",{enumerable:!0,get:function(){return t(Y).default}});var V=hs;Object.defineProperty(e,"Alert",{enumerable:!0,get:function(){return t(V).default}});var Je=Em;Object.defineProperty(e,"Breadcrumb",{enumerable:!0,get:function(){return t(Je).default}});var hn=SE;Object.defineProperty(e,"Skeleton",{enumerable:!0,get:function(){return t(hn).default}});var pn=Sm;Object.defineProperty(e,"Switch",{enumerable:!0,get:function(){return t(pn).default}});var ii=Pm;Object.defineProperty(e,"Table",{enumerable:!0,get:function(){return t(ii).default}});var Do=Tm;Object.defineProperty(e,"Pagination",{enumerable:!0,get:function(){return t(Do).default}});var mn=jm;Object.defineProperty(e,"Rating",{enumerable:!0,get:function(){return t(mn).default}});var ot=So;Object.defineProperty(e,"GenericInput",{enumerable:!0,get:function(){return t(ot).default}});var $=Im;Object.defineProperty(e,"TextArea",{enumerable:!0,get:function(){return t($).default}});var R=$m;Object.defineProperty(e,"FileField",{enumerable:!0,get:function(){return t(R).default}});var x=Cm;Object.defineProperty(e,"Toaster",{enumerable:!0,get:function(){return t(x).default}})})(BO);(function(e){var t=u&&u.__createBinding||(Object.create?function(r,i,o,a){a===void 0&&(a=o);var s=Object.getOwnPropertyDescriptor(i,o);(!s||("get"in s?!i.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return i[o]}}),Object.defineProperty(r,a,s)}:function(r,i,o,a){a===void 0&&(a=o),r[a]=i[o]}),n=u&&u.__exportStar||function(r,i){for(var o in r)o!=="default"&&!Object.prototype.hasOwnProperty.call(i,o)&&t(i,r,o)};Object.defineProperty(e,"__esModule",{value:!0}),n(BO,e),n(ic,e),n(us,e),n(Po,e),n(pm,e)})(zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},a4=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},CE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,f=o>>2,d=(o&3)<<4|s>>4;let p=(s&15)<<2|c>>6,v=c&63;l||(v=64,a||(p=64)),r.push(n[f],n[d],n[p],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($E(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a4(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||c==null||d==null)throw new s4;const p=o<<2|s>>4;if(r.push(p),c!==64){const v=s<<4&240|c>>2;if(r.push(v),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l4=function(e){const t=$E(e);return CE.encodeByteArray(t,!0)},ou=function(e){return l4(e).replace(/\./g,"")},u4=function(e){try{return CE.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=()=>c4().__FIREBASE_DEFAULTS__,d4=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},h4=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&u4(e[1]);return t&&JSON.parse(t)},AE=()=>{try{return f4()||d4()||h4()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},p4=e=>{var t,n;return(n=(t=AE())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},m4=e=>{const t=p4(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},DE=()=>{var e;return(e=AE())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[ou(JSON.stringify(n)),ou(JSON.stringify(a)),s].join(".")}function _4(){try{return typeof indexedDB=="object"}catch{return!1}}function y4(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4="FirebaseError";class jo extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=w4,Object.setPrototypeOf(this,jo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ME.prototype.create)}}class ME{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?b4(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new jo(i,s,r)}}function b4(e,t){return e.replace(O4,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const O4=/\{\$([^}]+)}/g;function _h(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(k1(o)&&k1(a)){if(!_h(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k1(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(e){return e&&e._delegate?e._delegate:e}class za{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new g4;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(P4(t))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Pr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pr){return this.instances.has(t)}getOptions(t=Pr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:S4(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Pr){return this.component?this.component.multipleInstances?t:Pr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S4(e){return e===Pr?void 0:e}function P4(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new E4(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const j4={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},I4=W.INFO,$4={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},C4=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=$4[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class RE{constructor(t){this.name=t,this._logLevel=I4,this._logHandler=C4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?j4[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const A4=(e,t)=>t.some(n=>e instanceof n);let V1,L1;function D4(){return V1||(V1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M4(){return L1||(L1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xE=new WeakMap,yh=new WeakMap,NE=new WeakMap,Af=new WeakMap,Am=new WeakMap;function R4(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(ir(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&xE.set(n,e)}).catch(()=>{}),Am.set(t,e),t}function x4(e){if(yh.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});yh.set(e,t)}let wh={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return yh.get(e);if(t==="objectStoreNames")return e.objectStoreNames||NE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function N4(e){wh=e(wh)}function k4(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Df(this),t,...n);return NE.set(r,t.sort?t.sort():[t]),ir(r)}:M4().includes(e)?function(...t){return e.apply(Df(this),t),ir(xE.get(this))}:function(...t){return ir(e.apply(Df(this),t))}}function V4(e){return typeof e=="function"?k4(e):(e instanceof IDBTransaction&&x4(e),A4(e,D4())?new Proxy(e,wh):e)}function ir(e){if(e instanceof IDBRequest)return R4(e);if(Af.has(e))return Af.get(e);const t=V4(e);return t!==e&&(Af.set(e,t),Am.set(t,e)),t}const Df=e=>Am.get(e);function L4(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=ir(a);return r&&a.addEventListener("upgradeneeded",l=>{r(ir(a.result),l.oldVersion,l.newVersion,ir(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const F4=["get","getKey","getAll","getAllKeys","count"],z4=["put","add","delete","clear"],Mf=new Map;function F1(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Mf.get(t))return Mf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=z4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||F4.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),i&&l.done]))[0]};return Mf.set(t,o),o}N4(e=>({...e,get:(t,n,r)=>F1(t,n)||e.get(t,n,r),has:(t,n)=>!!F1(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(U4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function U4(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const bh="@firebase/app",z1="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new RE("@firebase/app"),H4="@firebase/app-compat",W4="@firebase/analytics-compat",G4="@firebase/analytics",K4="@firebase/app-check-compat",Q4="@firebase/app-check",q4="@firebase/auth",X4="@firebase/auth-compat",Y4="@firebase/database",J4="@firebase/database-compat",Z4="@firebase/functions",ex="@firebase/functions-compat",tx="@firebase/installations",nx="@firebase/installations-compat",rx="@firebase/messaging",ix="@firebase/messaging-compat",ox="@firebase/performance",ax="@firebase/performance-compat",sx="@firebase/remote-config",lx="@firebase/remote-config-compat",ux="@firebase/storage",cx="@firebase/storage-compat",fx="@firebase/firestore",dx="@firebase/firestore-compat",hx="firebase",px="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="[DEFAULT]",mx={[bh]:"fire-core",[H4]:"fire-core-compat",[G4]:"fire-analytics",[W4]:"fire-analytics-compat",[Q4]:"fire-app-check",[K4]:"fire-app-check-compat",[q4]:"fire-auth",[X4]:"fire-auth-compat",[Y4]:"fire-rtdb",[J4]:"fire-rtdb-compat",[Z4]:"fire-fn",[ex]:"fire-fn-compat",[tx]:"fire-iid",[nx]:"fire-iid-compat",[rx]:"fire-fcm",[ix]:"fire-fcm-compat",[ox]:"fire-perf",[ax]:"fire-perf-compat",[sx]:"fire-rc",[lx]:"fire-rc-compat",[ux]:"fire-gcs",[cx]:"fire-gcs-compat",[fx]:"fire-fst",[dx]:"fire-fst-compat","fire-js":"fire-js",[hx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Map,Eh=new Map;function gx(e,t){try{e.container.addComponent(t)}catch(n){qr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function lu(e){const t=e.name;if(Eh.has(t))return qr.debug(`There were multiple attempts to register component ${t}.`),!1;Eh.set(t,e);for(const n of su.values())gx(n,e);return!0}function vx(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},or=new ME("app","Firebase",_x);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new za("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=px;function kE(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Oh,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=DE()),!n)throw or.create("no-options");const o=su.get(i);if(o){if(_h(n,o.options)&&_h(r,o.config))return o;throw or.create("duplicate-app",{appName:i})}const a=new T4(i);for(const l of Eh.values())a.addComponent(l);const s=new yx(n,r,a);return su.set(i,s),s}function bx(e=Oh){const t=su.get(e);if(!t&&e===Oh&&DE())return kE();if(!t)throw or.create("no-app",{appName:e});return t}function Ui(e,t,n){var r;let i=(r=mx[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qr.warn(s.join(" "));return}lu(new za(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="firebase-heartbeat-database",Ex=1,Ba="firebase-heartbeat-store";let Rf=null;function VE(){return Rf||(Rf=L4(Ox,Ex,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ba)}}}).catch(e=>{throw or.create("idb-open",{originalErrorMessage:e.message})})),Rf}async function Sx(e){try{return await(await VE()).transaction(Ba).objectStore(Ba).get(LE(e))}catch(t){if(t instanceof jo)qr.warn(t.message);else{const n=or.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qr.warn(n.message)}}}async function B1(e,t){try{const r=(await VE()).transaction(Ba,"readwrite");await r.objectStore(Ba).put(t,LE(e)),await r.done}catch(n){if(n instanceof jo)qr.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qr.warn(r.message)}}}function LE(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=1024,Tx=30*24*60*60*1e3;class jx{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $x(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=U1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Tx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=U1(),{heartbeatsToSend:n,unsentEntries:r}=Ix(this._heartbeatsCache.heartbeats),i=ou(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function U1(){return new Date().toISOString().substring(0,10)}function Ix(e,t=Px){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),H1(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),H1(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $x{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _4()?y4().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return B1(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return B1(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function H1(e){return ou(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(e){lu(new za("platform-logger",t=>new B4(t),"PRIVATE")),lu(new za("heartbeat",t=>new jx(t),"PRIVATE")),Ui(bh,z1,e),Ui(bh,z1,"esm2017"),Ui("fire-js","")}Cx("");var Ax="firebase",Dx="10.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui(Ax,Dx,"app");var Mx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,Dm=Dm||{},N=Mx||self;function Pc(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ps(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Rx(e){return Object.prototype.hasOwnProperty.call(e,xf)&&e[xf]||(e[xf]=++xx)}var xf="closure_uid_"+(1e9*Math.random()>>>0),xx=0;function Nx(e,t,n){return e.call.apply(e.bind,arguments)}function kx(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Qe(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=Nx:Qe=kx,Qe.apply(null,arguments)}function rl(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function De(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,o){for(var a=Array(arguments.length-2),s=2;s<arguments.length;s++)a[s-2]=arguments[s];return t.prototype[i].apply(r,a)}}function _r(){this.s=this.s,this.o=this.o}var Vx=0;_r.prototype.s=!1;_r.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Vx!=0)&&Rx(this)};_r.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const FE=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Mm(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function W1(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Pc(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let a=0;a<o;a++)e[i+a]=r[a]}else e.push(r)}}function qe(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Lx=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{N.addEventListener("test",()=>{},t),N.removeEventListener("test",()=>{},t)}catch{}return e}();function Ua(e){return/^[\s\xa0]*$/.test(e)}function Tc(){var e=N.navigator;return e&&(e=e.userAgent)?e:""}function rn(e){return Tc().indexOf(e)!=-1}function Rm(e){return Rm[" "](e),e}Rm[" "]=function(){};function Fx(e,t){var n=D3;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var zx=rn("Opera"),ho=rn("Trident")||rn("MSIE"),zE=rn("Edge"),Sh=zE||ho,BE=rn("Gecko")&&!(Tc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge"))&&!(rn("Trident")||rn("MSIE"))&&!rn("Edge"),Bx=Tc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge");function UE(){var e=N.document;return e?e.documentMode:void 0}var Ph;e:{var Nf="",kf=function(){var e=Tc();if(BE)return/rv:([^\);]+)(\)|;)/.exec(e);if(zE)return/Edge\/([\d\.]+)/.exec(e);if(ho)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Bx)return/WebKit\/(\S+)/.exec(e);if(zx)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(kf&&(Nf=kf?kf[1]:""),ho){var Vf=UE();if(Vf!=null&&Vf>parseFloat(Nf)){Ph=String(Vf);break e}}Ph=Nf}var Th;if(N.document&&ho){var G1=UE();Th=G1||parseInt(Ph,10)||void 0}else Th=void 0;var Ux=Th;function Ha(e,t){if(qe.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(BE){e:{try{Rm(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Hx[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ha.$.h.call(this)}}De(Ha,qe);var Hx={2:"touch",3:"pen",4:"mouse"};Ha.prototype.h=function(){Ha.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ms="closure_listenable_"+(1e6*Math.random()|0),Wx=0;function Gx(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Wx,this.fa=this.ia=!1}function jc(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function xm(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Kx(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function HE(e){const t={};for(const n in e)t[n]=e[n];return t}const K1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function WE(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<K1.length;o++)n=K1[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ic(e){this.src=e,this.g={},this.h=0}Ic.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var a=Ih(e,t,r,i);return-1<a?(t=e[a],n||(t.ia=!1)):(t=new Gx(t,this.src,o,!!r,i),t.ia=n,e.push(t)),t};function jh(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=FE(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(jc(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ih(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}var Nm="closure_lm_"+(1e6*Math.random()|0),Lf={};function GE(e,t,n,r,i){if(r&&r.once)return QE(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)GE(e,t[o],n,r,i);return null}return n=Lm(n),e&&e[ms]?e.O(t,n,ps(r)?!!r.capture:!!r,i):KE(e,t,n,!1,r,i)}function KE(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var a=ps(i)?!!i.capture:!!i,s=Vm(e);if(s||(e[Nm]=s=new Ic(e)),n=s.add(t,n,r,a,o),n.proxy)return n;if(r=Qx(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Lx||(i=a),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(XE(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qx(){function e(n){return t.call(e.src,e.listener,n)}const t=qx;return e}function QE(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)QE(e,t[o],n,r,i);return null}return n=Lm(n),e&&e[ms]?e.P(t,n,ps(r)?!!r.capture:!!r,i):KE(e,t,n,!0,r,i)}function qE(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)qE(e,t[o],n,r,i);else r=ps(r)?!!r.capture:!!r,n=Lm(n),e&&e[ms]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=Ih(o,n,r,i),-1<n&&(jc(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=Vm(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ih(t,n,r,i)),(n=-1<e?t[e]:null)&&km(n))}function km(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ms])jh(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(XE(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Vm(t))?(jh(n,e),n.h==0&&(n.src=null,t[Nm]=null)):jc(e)}}}function XE(e){return e in Lf?Lf[e]:Lf[e]="on"+e}function qx(e,t){if(e.fa)e=!0;else{t=new Ha(t,this);var n=e.listener,r=e.la||e.src;e.ia&&km(e),e=n.call(r,t)}return e}function Vm(e){return e=e[Nm],e instanceof Ic?e:null}var Ff="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lm(e){return typeof e=="function"?e:(e[Ff]||(e[Ff]=function(t){return e.handleEvent(t)}),e[Ff])}function Ce(){_r.call(this),this.i=new Ic(this),this.S=this,this.J=null}De(Ce,_r);Ce.prototype[ms]=!0;Ce.prototype.removeEventListener=function(e,t,n,r){qE(this,e,t,n,r)};function Le(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new qe(t,e);else if(t instanceof qe)t.target=t.target||e;else{var i=t;t=new qe(r,e),WE(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var a=t.g=n[o];i=il(a,r,!0,t)&&i}if(a=t.g=e,i=il(a,r,!0,t)&&i,i=il(a,r,!1,t)&&i,n)for(o=0;o<n.length;o++)a=t.g=n[o],i=il(a,r,!1,t)&&i}Ce.prototype.N=function(){if(Ce.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)jc(n[r]);delete e.g[t],e.h--}}this.J=null};Ce.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ce.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function il(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var a=t[o];if(a&&!a.fa&&a.capture==n){var s=a.listener,l=a.la||a.src;a.ia&&jh(e.i,a),i=s.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fm=N.JSON.stringify;class Xx{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Yx(){var e=zm;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Jx{constructor(){this.h=this.g=null}add(t,n){const r=YE.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var YE=new Xx(()=>new Zx,e=>e.reset());class Zx{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function e3(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function t3(e){N.setTimeout(()=>{throw e},0)}let Wa,Ga=!1,zm=new Jx,JE=()=>{const e=N.Promise.resolve(void 0);Wa=()=>{e.then(n3)}};var n3=()=>{for(var e;e=Yx();){try{e.h.call(e.g)}catch(n){t3(n)}var t=YE;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ga=!1};function $c(e,t){Ce.call(this),this.h=e||1,this.g=t||N,this.j=Qe(this.qb,this),this.l=Date.now()}De($c,Ce);I=$c.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Le(this,"tick"),this.ga&&(Bm(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bm(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}I.N=function(){$c.$.N.call(this),Bm(this),delete this.g};function Um(e,t,n){if(typeof e=="function")n&&(e=Qe(e,n));else if(e&&typeof e.handleEvent=="function")e=Qe(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:N.setTimeout(e,t||0)}function ZE(e){e.g=Um(()=>{e.g=null,e.i&&(e.i=!1,ZE(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class r3 extends _r{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ZE(this)}N(){super.N(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ka(e){_r.call(this),this.h=e,this.g={}}De(Ka,_r);var Q1=[];function eS(e,t,n,r){Array.isArray(n)||(n&&(Q1[0]=n.toString()),n=Q1);for(var i=0;i<n.length;i++){var o=GE(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function tS(e){xm(e.g,function(t,n){this.g.hasOwnProperty(n)&&km(t)},e),e.g={}}Ka.prototype.N=function(){Ka.$.N.call(this),tS(this)};Ka.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cc(){this.g=!0}Cc.prototype.Ea=function(){this.g=!1};function i3(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var a="",s=o.split("&"),l=0;l<s.length;l++){var c=s[l].split("=");if(1<c.length){var f=c[0];c=c[1];var d=f.split("_");a=2<=d.length&&d[1]=="type"?a+(f+"="+c+"&"):a+(f+"=redacted&")}}else a=null;else a=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+a})}function o3(e,t,n,r,i,o,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+a})}function Ri(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+s3(e,n)+(r?" "+r:"")})}function a3(e,t){e.info(function(){return"TIMEOUT: "+t})}Cc.prototype.info=function(){};function s3(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var a=1;a<i.length;a++)i[a]=""}}}}return Fm(n)}catch{return t}}var ni={},q1=null;function Ac(){return q1=q1||new Ce}ni.Ta="serverreachability";function nS(e){qe.call(this,ni.Ta,e)}De(nS,qe);function Qa(e){const t=Ac();Le(t,new nS(t))}ni.STAT_EVENT="statevent";function rS(e,t){qe.call(this,ni.STAT_EVENT,e),this.stat=t}De(rS,qe);function tt(e){const t=Ac();Le(t,new rS(t,e))}ni.Ua="timingevent";function iS(e,t){qe.call(this,ni.Ua,e),this.size=t}De(iS,qe);function gs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){e()},t)}var Dc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},oS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hm(){}Hm.prototype.h=null;function X1(e){return e.h||(e.h=e.i())}function aS(){}var vs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wm(){qe.call(this,"d")}De(Wm,qe);function Gm(){qe.call(this,"c")}De(Gm,qe);var $h;function Mc(){}De(Mc,Hm);Mc.prototype.g=function(){return new XMLHttpRequest};Mc.prototype.i=function(){return{}};$h=new Mc;function _s(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ka(this),this.P=l3,e=Sh?125:void 0,this.V=new $c(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sS}function sS(){this.i=null,this.g="",this.h=!1}var l3=45e3,Ch={},uu={};I=_s.prototype;I.setTimeout=function(e){this.P=e};function Ah(e,t,n){e.L=1,e.v=xc(Rn(t)),e.s=n,e.S=!0,lS(e,null)}function lS(e,t){e.G=Date.now(),ys(e),e.A=Rn(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),gS(n.i,"t",r),e.C=0,n=e.l.J,e.h=new sS,e.g=kS(e.l,n?t:null,!e.s),0<e.O&&(e.M=new r3(Qe(e.Pa,e,e.g),e.O)),eS(e.U,e.g,"readystatechange",e.nb),t=e.I?HE(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Qa(),i3(e.j,e.u,e.A,e.m,e.W,e.s)}I.nb=function(e){e=e.target;const t=this.M;t&&sn(e)==3?t.l():this.Pa(e)};I.Pa=function(e){try{if(e==this.g)e:{const f=sn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>f)&&(f!=3||Sh||this.g&&(this.h.h||this.g.ja()||ew(this.g)))){this.J||f!=4||t==7||(t==8||0>=d?Qa(3):Qa(2)),Rc(this);var n=this.g.da();this.ca=n;t:if(uS(this)){var r=ew(this.g);e="";var i=r.length,o=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),ga(this);var a="";break t}this.h.i=new N.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=n==200,o3(this.j,this.u,this.A,this.m,this.W,f,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ua(s)){var c=s;break t}}c=null}if(n=c)Ri(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dh(this,n);else{this.i=!1,this.o=3,tt(12),Cr(this),ga(this);break e}}this.S?(cS(this,f,a),Sh&&this.i&&f==3&&(eS(this.U,this.V,"tick",this.mb),this.V.start())):(Ri(this.j,this.m,a,null),Dh(this,a)),f==4&&Cr(this),this.i&&!this.J&&(f==4?MS(this.l,this):(this.i=!1,ys(this)))}else $3(this.g),n==400&&0<a.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Cr(this),ga(this)}}}catch{}finally{}};function uS(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function cS(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=u3(e,n),i==uu){t==4&&(e.o=4,tt(14),r=!1),Ri(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Ch){e.o=4,tt(15),Ri(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ri(e.j,e.m,i,null),Dh(e,i);uS(e)&&i!=uu&&i!=Ch&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jm(t),t.M=!0,tt(11))):(Ri(e.j,e.m,n,"[Invalid Chunked Response]"),Cr(e),ga(e))}I.mb=function(){if(this.g){var e=sn(this.g),t=this.g.ja();this.C<t.length&&(Rc(this),cS(this,e,t),this.i&&e!=4&&ys(this))}};function u3(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?uu:(n=Number(t.substring(n,r)),isNaN(n)?Ch:(r+=1,r+n>t.length?uu:(t=t.slice(r,r+n),e.C=r+n,t)))}I.cancel=function(){this.J=!0,Cr(this)};function ys(e){e.Y=Date.now()+e.P,fS(e,e.P)}function fS(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=gs(Qe(e.lb,e),t)}function Rc(e){e.B&&(N.clearTimeout(e.B),e.B=null)}I.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(a3(this.j,this.A),this.L!=2&&(Qa(),tt(17)),Cr(this),this.o=2,ga(this)):fS(this,this.Y-e)};function ga(e){e.l.H==0||e.J||MS(e.l,e)}function Cr(e){Rc(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Bm(e.V),tS(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Dh(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Mh(n.i,e))){if(!e.K&&Mh(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)du(n),Vc(n);else break e;Ym(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=gs(Qe(n.ib,n),6e3));if(1>=yS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ar(n,11)}else if((e.K||n.g==e)&&du(n),!Ua(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const f=c[3];f!=null&&(n.ra=f,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=e.g;if(v){const y=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var o=r.i;o.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(Km(o,o.h),o.h=null))}if(r.F){const _=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ne(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var a=e;if(r.wa=NS(r,r.J?r.pa:null,r.Y),a.K){wS(r.i,a);var s=a,l=r.L;l&&s.setTimeout(l),s.B&&(Rc(s),ys(s)),r.g=a}else AS(r);0<n.j.length&&Lc(n)}else c[0]!="stop"&&c[0]!="close"||Ar(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ar(n,7):Xm(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Qa(4)}catch{}}function c3(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Pc(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function f3(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Pc(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function dS(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Pc(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=f3(e),r=c3(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var hS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function d3(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fr(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Fr){this.h=e.h,cu(this,e.j),this.s=e.s,this.g=e.g,fu(this,e.m),this.l=e.l;var t=e.i,n=new qa;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Y1(this,n),this.o=e.o}else e&&(t=String(e).match(hS))?(this.h=!1,cu(this,t[1]||"",!0),this.s=Jo(t[2]||""),this.g=Jo(t[3]||"",!0),fu(this,t[4]),this.l=Jo(t[5]||"",!0),Y1(this,t[6]||"",!0),this.o=Jo(t[7]||"")):(this.h=!1,this.i=new qa(null,this.h))}Fr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Zo(t,J1,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Zo(t,J1,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Zo(n,n.charAt(0)=="/"?m3:p3,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Zo(n,v3)),e.join("")};function Rn(e){return new Fr(e)}function cu(e,t,n){e.j=n?Jo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function fu(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Y1(e,t,n){t instanceof qa?(e.i=t,_3(e.i,e.h)):(n||(t=Zo(t,g3)),e.i=new qa(t,e.h))}function ne(e,t,n){e.i.set(t,n)}function xc(e){return ne(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Jo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Zo(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,h3),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function h3(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var J1=/[#\/\?@]/g,p3=/[#\?:]/g,m3=/[#\?]/g,g3=/[#\?@]/g,v3=/#/g;function qa(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function yr(e){e.g||(e.g=new Map,e.h=0,e.i&&d3(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}I=qa.prototype;I.add=function(e,t){yr(this),this.i=null,e=Io(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function pS(e,t){yr(e),t=Io(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function mS(e,t){return yr(e),t=Io(e,t),e.g.has(t)}I.forEach=function(e,t){yr(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};I.ta=function(){yr(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};I.Z=function(e){yr(this);let t=[];if(typeof e=="string")mS(this,e)&&(t=t.concat(this.g.get(Io(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};I.set=function(e,t){return yr(this),this.i=null,e=Io(this,e),mS(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};I.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function gS(e,t,n){pS(e,t),0<n.length&&(e.i=null,e.g.set(Io(e,t),Mm(n)),e.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var i=o;a[r]!==""&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};function Io(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function _3(e,t){t&&!e.j&&(yr(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(pS(this,r),gS(this,i,n))},e)),e.j=t}var y3=class{constructor(e,t){this.g=e,this.map=t}};function vS(e){this.l=e||w3,N.PerformanceNavigationTiming?(e=N.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(N.g&&N.g.Ka&&N.g.Ka()&&N.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var w3=10;function _S(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function yS(e){return e.h?1:e.g?e.g.size:0}function Mh(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Km(e,t){e.g?e.g.add(t):e.h=t}function wS(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}vS.prototype.cancel=function(){if(this.i=bS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function bS(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Mm(e.i)}var b3=class{stringify(e){return N.JSON.stringify(e,void 0)}parse(e){return N.JSON.parse(e,void 0)}};function O3(){this.g=new b3}function E3(e,t,n){const r=n||"";try{dS(e,function(i,o){let a=i;ps(i)&&(a=Fm(i)),t.push(r+o+"="+encodeURIComponent(a))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function S3(e,t){const n=new Cc;if(N.Image){const r=new Image;r.onload=rl(ol,n,r,"TestLoadImage: loaded",!0,t),r.onerror=rl(ol,n,r,"TestLoadImage: error",!1,t),r.onabort=rl(ol,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=rl(ol,n,r,"TestLoadImage: timeout",!1,t),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ol(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ws(e){this.l=e.ec||null,this.j=e.ob||!1}De(ws,Hm);ws.prototype.g=function(){return new Nc(this.l,this.j)};ws.prototype.i=function(e){return function(){return e}}({});function Nc(e,t){Ce.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Qm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Nc,Ce);var Qm=0;I=Nc.prototype;I.open=function(e,t){if(this.readyState!=Qm)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xa(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||N).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=Qm};I.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xa(this)),this.g&&(this.readyState=3,Xa(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;OS(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function OS(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}I.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?bs(this):Xa(this),this.readyState==3&&OS(this)}};I.Za=function(e){this.g&&(this.response=this.responseText=e,bs(this))};I.Ya=function(e){this.g&&(this.response=e,bs(this))};I.ka=function(){this.g&&bs(this)};function bs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xa(e)}I.setRequestHeader=function(e,t){this.v.append(e,t)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Xa(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Nc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var P3=N.JSON.parse;function pe(e){Ce.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ES,this.L=this.M=!1}De(pe,Ce);var ES="",T3=/^https?$/i,j3=["POST","PUT"];I=pe.prototype;I.Oa=function(e){this.M=e};I.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$h.g(),this.C=this.u?X1(this.u):X1($h),this.g.onreadystatechange=Qe(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(o){Z1(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=N.FormData&&e instanceof N.FormData,!(0<=FE(j3,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{TS(this),0<this.B&&((this.L=I3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.ua,this)):this.A=Um(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Z1(this,o)}};function I3(e){return ho&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.ua=function(){typeof Dm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function Z1(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,SS(e),kc(e)}function SS(e){e.F||(e.F=!0,Le(e,"complete"),Le(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Le(this,"complete"),Le(this,"abort"),kc(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kc(this,!0)),pe.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?PS(this):this.kb())};I.kb=function(){PS(this)};function PS(e){if(e.h&&typeof Dm<"u"&&(!e.C[1]||sn(e)!=4||e.da()!=2)){if(e.v&&sn(e)==4)Um(e.La,0,e);else if(Le(e,"readystatechange"),sn(e)==4){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.I).match(hS)[1]||null;!i&&N.self&&N.self.location&&(i=N.self.location.protocol.slice(0,-1)),r=!T3.test(i?i.toLowerCase():"")}n=r}if(n)Le(e,"complete"),Le(e,"success");else{e.m=6;try{var o=2<sn(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",SS(e)}}finally{kc(e)}}}}function kc(e,t){if(e.g){TS(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Le(e,"ready");try{n.onreadystatechange=r}catch{}}}function TS(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(N.clearTimeout(e.A),e.A=null)}I.isActive=function(){return!!this.g};function sn(e){return e.g?e.g.readyState:0}I.da=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),P3(t)}};function ew(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ES:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function $3(e){const t={};e=(e.g&&2<=sn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Ua(e[r]))continue;var n=e3(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}Kx(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jS(e){let t="";return xm(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function qm(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jS(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ne(e,t,n))}function Uo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function IS(e){this.Ga=0,this.j=[],this.l=new Cc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Uo("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Uo("baseRetryDelayMs",5e3,e),this.hb=Uo("retryDelaySeedMs",1e4,e),this.eb=Uo("forwardChannelMaxRetries",2,e),this.xa=Uo("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new vS(e&&e.concurrentRequestLimit),this.Ja=new O3,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=IS.prototype;I.ra=8;I.H=1;function Xm(e){if($S(e),e.H==3){var t=e.W++,n=Rn(e.I);if(ne(n,"SID",e.K),ne(n,"RID",t),ne(n,"TYPE","terminate"),Os(e,n),t=new _s(e,e.l,t),t.L=2,t.v=xc(Rn(n)),n=!1,N.navigator&&N.navigator.sendBeacon)try{n=N.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&N.Image&&(new Image().src=t.v,n=!0),n||(t.g=kS(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ys(t)}xS(e)}function Vc(e){e.g&&(Jm(e),e.g.cancel(),e.g=null)}function $S(e){Vc(e),e.u&&(N.clearTimeout(e.u),e.u=null),du(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&N.clearTimeout(e.m),e.m=null)}function Lc(e){if(!_S(e.i)&&!e.m){e.m=!0;var t=e.Na;Wa||JE(),Ga||(Wa(),Ga=!0),zm.add(t,e),e.C=0}}function C3(e,t){return yS(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=gs(Qe(e.Na,e,t),RS(e,e.C)),e.C++,!0)}I.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new _s(this,this.l,e);let o=this.s;if(this.U&&(o?(o=HE(o),WE(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=CS(this,i,t),n=Rn(this.I),ne(n,"RID",e),ne(n,"CVER",22),this.F&&ne(n,"X-HTTP-Session-Id",this.F),Os(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(jS(o)))+"&"+t:this.o&&qm(n,this.o,o)),Km(this.i,i),this.bb&&ne(n,"TYPE","init"),this.P?(ne(n,"$req",t),ne(n,"SID","null"),i.aa=!0,Ah(i,n,null)):Ah(i,n,t),this.H=2}}else this.H==3&&(e?tw(this,e):this.j.length==0||_S(this.i)||tw(this))};function tw(e,t){var n;t?n=t.m:n=e.W++;const r=Rn(e.I);ne(r,"SID",e.K),ne(r,"RID",n),ne(r,"AID",e.V),Os(e,r),e.o&&e.s&&qm(r,e.o,e.s),n=new _s(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=CS(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Km(e.i,n),Ah(n,r,t)}function Os(e,t){e.na&&xm(e.na,function(n,r){ne(t,r,n)}),e.h&&dS({},function(n,r){ne(t,r,n)})}function CS(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Qe(e.h.Va,e.h,e):null;e:{var i=e.j;let o=-1;for(;;){const a=["count="+n];o==-1?0<n?(o=i[0].g,a.push("ofs="+o)):o=0:a.push("ofs="+o);let s=!0;for(let l=0;l<n;l++){let c=i[l].g;const f=i[l].map;if(c-=o,0>c)o=Math.max(0,i[l].g-100),s=!1;else try{E3(f,a,"req"+c+"_")}catch{r&&r(f)}}if(s){r=a.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function AS(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Wa||JE(),Ga||(Wa(),Ga=!0),zm.add(t,e),e.A=0}}function Ym(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=gs(Qe(e.Ma,e),RS(e,e.A)),e.A++,!0)}I.Ma=function(){if(this.u=null,DS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=gs(Qe(this.jb,this),e)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),Vc(this),DS(this))};function Jm(e){e.B!=null&&(N.clearTimeout(e.B),e.B=null)}function DS(e){e.g=new _s(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Rn(e.wa);ne(t,"RID","rpc"),ne(t,"SID",e.K),ne(t,"AID",e.V),ne(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ne(t,"TO",e.qa),ne(t,"TYPE","xmlhttp"),Os(e,t),e.o&&e.s&&qm(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=xc(Rn(t)),n.s=null,n.S=!0,lS(n,e)}I.ib=function(){this.v!=null&&(this.v=null,Vc(this),Ym(this),tt(19))};function du(e){e.v!=null&&(N.clearTimeout(e.v),e.v=null)}function MS(e,t){var n=null;if(e.g==t){du(e),Jm(e),e.g=null;var r=2}else if(Mh(e.i,t))n=t.F,wS(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Ac(),Le(r,new iS(r,n)),Lc(e)}else AS(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&C3(e,t)||r==2&&Ym(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ar(e,5);break;case 4:Ar(e,10);break;case 3:Ar(e,6);break;default:Ar(e,2)}}}function RS(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ar(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Qe(e.pb,e);n||(n=new Fr("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||cu(n,"https"),xc(n)),S3(n.toString(),r)}else tt(2);e.H=0,e.h&&e.h.za(t),xS(e),$S(e)}I.pb=function(e){e?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function xS(e){if(e.H=0,e.ma=[],e.h){const t=bS(e.i);(t.length!=0||e.j.length!=0)&&(W1(e.ma,t),W1(e.ma,e.j),e.i.i.length=0,Mm(e.j),e.j.length=0),e.h.ya()}}function NS(e,t,n){var r=n instanceof Fr?Rn(n):new Fr(n);if(r.g!="")t&&(r.g=t+"."+r.g),fu(r,r.m);else{var i=N.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Fr(null);r&&cu(o,r),t&&(o.g=t),i&&fu(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&ne(r,n,t),ne(r,"VER",e.ra),Os(e,r),r}function kS(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new pe(new ws({ob:!0})):new pe(e.va),t.Oa(e.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function VS(){}I=VS.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function hu(){if(ho&&!(10<=Number(Ux)))throw Error("Environmental error: no available transport.")}hu.prototype.g=function(e,t){return new Et(e,t)};function Et(e,t){Ce.call(this),this.g=new IS(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ua(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ua(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new $o(this)}De(Et,Ce);Et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=NS(e,null,e.Y),Lc(e)};Et.prototype.close=function(){Xm(this.g)};Et.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Fm(e),e=n);t.j.push(new y3(t.fb++,e)),t.H==3&&Lc(t)};Et.prototype.N=function(){this.g.h=null,delete this.j,Xm(this.g),delete this.g,Et.$.N.call(this)};function LS(e){Wm.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}De(LS,Wm);function FS(){Gm.call(this),this.status=1}De(FS,Gm);function $o(e){this.g=e}De($o,VS);$o.prototype.Ba=function(){Le(this.g,"a")};$o.prototype.Aa=function(e){Le(this.g,new LS(e))};$o.prototype.za=function(e){Le(this.g,new FS)};$o.prototype.ya=function(){Le(this.g,"b")};function A3(){this.blockSize=-1}function fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De(fn,A3);fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zf(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],a=t+(o^n&(i^o))+r[0]+3614090360&4294967295;t=n+(a<<7&4294967295|a>>>25),a=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(a<<17&4294967295|a>>>15),a=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(a<<7&4294967295|a>>>25),a=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(a<<17&4294967295|a>>>15),a=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(a<<7&4294967295|a>>>25),a=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(a<<17&4294967295|a>>>15),a=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(a<<7&4294967295|a>>>25),a=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(a<<17&4294967295|a>>>15),a=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(a<<14&4294967295|a>>>18),a=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(a<<14&4294967295|a>>>18),a=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(a<<14&4294967295|a>>>18),a=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(a<<14&4294967295|a>>>18),a=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(a<<4&4294967295|a>>>28),a=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(a<<16&4294967295|a>>>16),a=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(a<<4&4294967295|a>>>28),a=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(a<<16&4294967295|a>>>16),a=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(a<<4&4294967295|a>>>28),a=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(a<<16&4294967295|a>>>16),a=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(a<<4&4294967295|a>>>28),a=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(a<<16&4294967295|a>>>16),a=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(a<<15&4294967295|a>>>17),a=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(a<<15&4294967295|a>>>17),a=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(a<<15&4294967295|a>>>17),a=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(a<<15&4294967295|a>>>17),a=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}fn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(i==0)for(;o<=n;)zf(this,e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){zf(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){zf(this,r),i=0;break}}this.h=i,this.i+=t};fn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function X(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=e[i]|0;r&&o==t||(n[i]=o,r=!1)}this.g=n}var D3={};function Zm(e){return-128<=e&&128>e?Fx(e,function(t){return new X([t|0],0>t?-1:0)}):new X([e|0],0>e?-1:0)}function ln(e){if(isNaN(e)||!isFinite(e))return Hi;if(0>e)return Ne(ln(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Rh;return new X(t,0)}function zS(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ne(zS(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ln(Math.pow(t,8)),r=Hi,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),a=parseInt(e.substring(i,i+o),t);8>o?(o=ln(Math.pow(t,o)),r=r.R(o).add(ln(a))):(r=r.R(n),r=r.add(ln(a)))}return r}var Rh=4294967296,Hi=Zm(0),xh=Zm(1),nw=Zm(16777216);I=X.prototype;I.ea=function(){if(Ct(this))return-Ne(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Rh+r)*t,t*=Rh}return e};I.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Sn(this))return"0";if(Ct(this))return"-"+Ne(this).toString(e);for(var t=ln(Math.pow(e,6)),n=this,r="";;){var i=mu(n,t).g;n=pu(n,i.R(t));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Sn(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};I.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Sn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ct(e){return e.h==-1}I.X=function(e){return e=pu(this,e),Ct(e)?-1:Sn(e)?0:1};function Ne(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new X(n,~e.h).add(xh)}I.abs=function(){return Ct(this)?Ne(this):this};I.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(this.D(i)&65535)+(e.D(i)&65535),a=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=a>>>16,o&=65535,a&=65535,n[i]=a<<16|o}return new X(n,n[n.length-1]&-2147483648?-1:0)};function pu(e,t){return e.add(Ne(t))}I.R=function(e){if(Sn(this)||Sn(e))return Hi;if(Ct(this))return Ct(e)?Ne(this).R(Ne(e)):Ne(Ne(this).R(e));if(Ct(e))return Ne(this.R(Ne(e)));if(0>this.X(nw)&&0>e.X(nw))return ln(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,a=this.D(r)&65535,s=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=a*l,al(n,2*r+2*i),n[2*r+2*i+1]+=o*l,al(n,2*r+2*i+1),n[2*r+2*i+1]+=a*s,al(n,2*r+2*i+1),n[2*r+2*i+2]+=o*s,al(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new X(n,0)};function al(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ho(e,t){this.g=e,this.h=t}function mu(e,t){if(Sn(t))throw Error("division by zero");if(Sn(e))return new Ho(Hi,Hi);if(Ct(e))return t=mu(Ne(e),t),new Ho(Ne(t.g),Ne(t.h));if(Ct(t))return t=mu(e,Ne(t)),new Ho(Ne(t.g),t.h);if(30<e.g.length){if(Ct(e)||Ct(t))throw Error("slowDivide_ only works with positive integers.");for(var n=xh,r=t;0>=r.X(e);)n=rw(n),r=rw(r);var i=hi(n,1),o=hi(r,1);for(r=hi(r,2),n=hi(n,2);!Sn(r);){var a=o.add(r);0>=a.X(e)&&(i=i.add(n),o=a),r=hi(r,1),n=hi(n,1)}return t=pu(e,i.R(t)),new Ho(i,t)}for(i=Hi;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=ln(n),a=o.R(t);Ct(a)||0<a.X(e);)n-=r,o=ln(n),a=o.R(t);Sn(o)&&(o=xh),i=i.add(o),e=pu(e,a)}return new Ho(i,e)}I.gb=function(e){return mu(this,e).h};I.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new X(n,this.h&e.h)};I.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new X(n,this.h|e.h)};I.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new X(n,this.h^e.h)};function rw(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new X(n,e.h)}function hi(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new X(i,e.h)}hu.prototype.createWebChannel=hu.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;Dc.NO_ERROR=0;Dc.TIMEOUT=8;Dc.HTTP_ERROR=6;oS.COMPLETE="complete";aS.EventType=vs;vs.OPEN="a";vs.CLOSE="b";vs.ERROR="c";vs.MESSAGE="d";Ce.prototype.listen=Ce.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;fn.prototype.digest=fn.prototype.l;fn.prototype.reset=fn.prototype.reset;fn.prototype.update=fn.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=ln;X.fromString=zS;var M3=function(){return new hu},R3=function(){return Ac()},Bf=Dc,x3=oS,N3=ni,iw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},k3=ws,sl=aS,V3=pe,L3=X;const ow="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new RE("@firebase/firestore");function Wo(){return Xr.logLevel}function M(e,...t){if(Xr.logLevel<=W.DEBUG){const n=t.map(eg);Xr.debug(`Firestore (${Co}): ${e}`,...n)}}function Yr(e,...t){if(Xr.logLevel<=W.ERROR){const n=t.map(eg);Xr.error(`Firestore (${Co}): ${e}`,...n)}}function gu(e,...t){if(Xr.logLevel<=W.WARN){const n=t.map(eg);Xr.warn(`Firestore (${Co}): ${e}`,...n)}}function eg(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e="Unexpected state"){const t=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+e;throw Yr(t),new Error(t)}function Ae(e,t){e||U()}function ie(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends jo{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class z3{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class B3{constructor(t){this.t=t,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zr,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},s=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>s(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?s(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zr)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new BS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ae(t===null||typeof t=="string"),new He(t)}}class U3{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class H3{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new U3(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W3{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G3{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new W3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K3(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=K3(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function J(e,t){return e<t?-1:e>t?1:0}function po(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new k(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new k(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $e.fromMillis(Date.now())}static fromDate(t){return $e.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ae(t)}static min(){return new ae(new $e(0,0))}static max(){return new ae(new $e(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,n,r){n===void 0?n=0:n>t.length&&U(),r===void 0?r=t.length-n:r>t.length-n&&U(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ya.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ya?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const o=t.get(i),a=n.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class _e extends Ya{construct(t,n,r){return new _e(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const Q3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends Ya{construct(t,n,r){return new ke(t,n,r)}static isValidIdentifier(t){return Q3.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ke(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new k(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<t.length;){const s=t[i];if(s==="\\"){if(i+1===t.length)throw new k(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else s==="`"?(a=!a,i++):s!=="."||a?(r+=s,i++):(o(),i++)}if(o(),a)throw new k(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ke(n)}static emptyPath(){return new ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(_e.fromString(t))}static fromName(t){return new F(_e.fromString(t).popFirst(5))}static empty(){return new F(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&_e.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return _e.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new _e(t.slice()))}}function q3(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new dr(i,F.empty(),t)}function X3(e){return new dr(e.readTime,e.key,-1)}class dr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(ae.min(),F.empty(),-1)}static max(){return new dr(ae.max(),F.empty(),-1)}}function Y3(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=F.comparator(e.documentKey,t.documentKey),n!==0?n:J(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Z3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==J3)throw e;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):S.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):S.reject(n)}static resolve(t){return new S((n,r)=>{n(t)})}static reject(t){return new S((n,r)=>{r(t)})}static waitFor(t){return new S((n,r)=>{let i=0,o=0,a=!1;t.forEach(s=>{++i,s.next(()=>{++o,a&&o===i&&n()},l=>r(l))}),a=!0,o===i&&n()})}static or(t){let n=S.resolve(!1);for(const r of t)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(t,n){return new S((r,i)=>{const o=t.length,a=new Array(o);let s=0;for(let l=0;l<o;l++){const c=l;n(t[c]).next(f=>{a[c]=f,++s,s===o&&r(a)},f=>i(f))}})}static doWhile(t,n){return new S((r,i)=>{const o=()=>{t()===!0?n().next(()=>{o()},i):r()};o()})}}function Fc(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}WS._e=-1;function tg(e){return e==null}function vu(e){return e===0&&1/e==-1/0}function e5(e){return typeof e=="number"&&Number.isInteger(e)&&!vu(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Es(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function GS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,n){this.comparator=t,this.root=n||Re.EMPTY}insert(t,n){return new mt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Re.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ll(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ll(this.root,t,this.comparator,!1)}getReverseIterator(){return new ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ll(this.root,t,this.comparator,!0)}}class ll{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=n?r(t.key,n):1,n&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Re{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??Re.RED,this.left=i??Re.EMPTY,this.right=o??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,o){return new Re(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,n,r,i,o){return this}insert(t,n,r){return new Re(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new sw(this.data.getIterator())}getIteratorFrom(t){return new sw(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Xe)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Xe(this.comparator);return n.data=t,n}}class sw{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.fields=t,t.sort(ke.comparator)}static empty(){return new Ht([])}unionWith(t){let n=new Xe(ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ht(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return po(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new t5("Invalid base64 string: "+o):o}}(t);return new xn(n)}static fromUint8Array(t){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new xn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xn.EMPTY_BYTE_STRING=new xn("");const n5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(e){if(Ae(!!e),typeof e=="string"){let t=0;const n=n5.exec(e);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:xe(e.seconds),nanos:xe(e.nanos)}}function xe(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ja(e){return typeof e=="string"?xn.fromBase64String(e):xn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function KS(e){const t=e.mapValue.fields.__previous_value__;return ng(t)?KS(t):t}function _u(e){const t=Jr(e.mapValue.fields.__local_write_time__.timestampValue);return new $e(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(t,n,r,i,o,a,s,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=s,this.longPollingOptions=l,this.useFetchStreams=c}}class yu{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new yu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yu&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ng(e)?4:i5(e)?9007199254740991:10:U()}function dn(e,t){if(e===t)return!0;const n=mo(e);if(n!==mo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _u(e).isEqual(_u(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Jr(i.timestampValue),s=Jr(o.timestampValue);return a.seconds===s.seconds&&a.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,o){return Ja(i.bytesValue).isEqual(Ja(o.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,o){return xe(i.geoPointValue.latitude)===xe(o.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(o.geoPointValue.longitude)}(e,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return xe(i.integerValue)===xe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=xe(i.doubleValue),s=xe(o.doubleValue);return a===s?vu(a)===vu(s):isNaN(a)&&isNaN(s)}return!1}(e,t);case 9:return po(e.arrayValue.values||[],t.arrayValue.values||[],dn);case 10:return function(i,o){const a=i.mapValue.fields||{},s=o.mapValue.fields||{};if(aw(a)!==aw(s))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(s[l]===void 0||!dn(a[l],s[l])))return!1;return!0}(e,t);default:return U()}}function Za(e,t){return(e.values||[]).find(n=>dn(n,t))!==void 0}function go(e,t){if(e===t)return 0;const n=mo(e),r=mo(t);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(e.booleanValue,t.booleanValue);case 2:return function(o,a){const s=xe(o.integerValue||o.doubleValue),l=xe(a.integerValue||a.doubleValue);return s<l?-1:s>l?1:s===l?0:isNaN(s)?isNaN(l)?0:-1:1}(e,t);case 3:return lw(e.timestampValue,t.timestampValue);case 4:return lw(_u(e),_u(t));case 5:return J(e.stringValue,t.stringValue);case 6:return function(o,a){const s=Ja(o),l=Ja(a);return s.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(o,a){const s=o.split("/"),l=a.split("/");for(let c=0;c<s.length&&c<l.length;c++){const f=J(s[c],l[c]);if(f!==0)return f}return J(s.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(o,a){const s=J(xe(o.latitude),xe(a.latitude));return s!==0?s:J(xe(o.longitude),xe(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(o,a){const s=o.values||[],l=a.values||[];for(let c=0;c<s.length&&c<l.length;++c){const f=go(s[c],l[c]);if(f)return f}return J(s.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===ul.mapValue&&a===ul.mapValue)return 0;if(o===ul.mapValue)return 1;if(a===ul.mapValue)return-1;const s=o.fields||{},l=Object.keys(s),c=a.fields||{},f=Object.keys(c);l.sort(),f.sort();for(let d=0;d<l.length&&d<f.length;++d){const p=J(l[d],f[d]);if(p!==0)return p;const v=go(s[l[d]],c[f[d]]);if(v!==0)return v}return J(l.length,f.length)}(e.mapValue,t.mapValue);default:throw U()}}function lw(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return J(e,t);const n=Jr(e),r=Jr(t),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function vo(e){return Nh(e)}function Nh(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ja(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return F.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Nh(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Nh(n.fields[a])}`;return i+"}"}(e.mapValue):U()}function kh(e){return!!e&&"integerValue"in e}function rg(e){return!!e&&"arrayValue"in e}function Il(e){return!!e&&"mapValue"in e}function va(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Es(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=va(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=va(e.arrayValue.values[n]);return t}return Object.assign({},e)}function i5(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.value=t}static empty(){return new Ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=va(n)}setAll(t){let n=ke.emptyPath(),r={},i=[];t.forEach((a,s)=>{if(!n.isImmediateParentOf(s)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=s.popLast()}a?r[s.lastSegment()]=va(a):i.push(s.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(t){const n=this.field(t.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return dn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Es(n,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Ut(va(this.value))}}function QS(e){const t=[];return Es(e.fields,(n,r)=>{const i=new ke([n]);if(Il(r)){const o=QS(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Ht(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,n,r,i,o,a,s){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=s}static newInvalidDocument(t){return new Bt(t,0,ae.min(),ae.min(),ae.min(),Ut.empty(),0)}static newFoundDocument(t,n,r,i){return new Bt(t,1,n,ae.min(),r,i,0)}static newNoDocument(t,n){return new Bt(t,2,n,ae.min(),ae.min(),Ut.empty(),0)}static newUnknownDocument(t,n){return new Bt(t,3,n,ae.min(),ae.min(),Ut.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,n){this.position=t,this.inclusive=n}}function uw(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],a=e.position[i];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),n.key):r=go(a,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function cw(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!dn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,n="asc"){this.field=t,this.dir=n}}function o5(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{}class je extends qS{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new s5(t,n,r):n==="array-contains"?new c5(t,r):n==="in"?new f5(t,r):n==="not-in"?new d5(t,r):n==="array-contains-any"?new h5(t,r):new je(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new l5(t,r):new u5(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(go(n,this.value)):n!==null&&mo(this.value)===mo(n)&&this.matchesComparison(go(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hr extends qS{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new hr(t,n)}matches(t){return XS(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function XS(e){return e.op==="and"}function YS(e){return a5(e)&&XS(e)}function a5(e){for(const t of e.filters)if(t instanceof hr)return!1;return!0}function Vh(e){if(e instanceof je)return e.field.canonicalString()+e.op.toString()+vo(e.value);if(YS(e))return e.filters.map(t=>Vh(t)).join(",");{const t=e.filters.map(n=>Vh(n)).join(",");return`${e.op}(${t})`}}function JS(e,t){return e instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(e,t):e instanceof hr?function(r,i){return i instanceof hr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,s)=>o&&JS(a,i.filters[s]),!0):!1}(e,t):void U()}function ZS(e){return e instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${vo(n.value)}`}(e):e instanceof hr?function(n){return n.op.toString()+" {"+n.getFilters().map(ZS).join(" ,")+"}"}(e):"Filter"}class s5 extends je{constructor(t,n,r){super(t,n,r),this.key=F.fromName(r.referenceValue)}matches(t){const n=F.comparator(t.key,this.key);return this.matchesComparison(n)}}class l5 extends je{constructor(t,n){super(t,"in",n),this.keys=eP("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class u5 extends je{constructor(t,n){super(t,"not-in",n),this.keys=eP("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function eP(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class c5 extends je{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return rg(n)&&Za(n.arrayValue,this.value)}}class f5 extends je{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Za(this.value.arrayValue,n)}}class d5 extends je{constructor(t,n){super(t,"not-in",n)}matches(t){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Za(this.value.arrayValue,n)}}class h5 extends je{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!rg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Za(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(t,n=null,r=[],i=[],o=null,a=null,s=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=s,this.ce=null}}function fw(e,t=null,n=[],r=[],i=null,o=null,a=null){return new p5(e,t,n,r,i,o,a)}function ig(e){const t=ie(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Vh(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),tg(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>vo(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>vo(r)).join(",")),t.ce=n}return t.ce}function og(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!o5(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!JS(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!cw(e.startAt,t.startAt)&&cw(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,n=null,r=[],i=[],o=null,a="F",s=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=s,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function m5(e,t,n,r,i,o,a,s){return new zc(e,t,n,r,i,o,a,s)}function g5(e){return new zc(e)}function dw(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function v5(e){return e.collectionGroup!==null}function _a(e){const t=ie(e);if(t.le===null){t.le=[];const n=new Set;for(const o of t.explicitOrderBy)t.le.push(o),n.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let s=new Xe(ke.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(s=s.add(c.field))})}),s})(t).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||t.le.push(new bu(o,r))}),n.has(ke.keyField().canonicalString())||t.le.push(new bu(ke.keyField(),r))}return t.le}function Br(e){const t=ie(e);return t.he||(t.he=_5(t,_a(e))),t.he}function _5(e,t){if(e.limitType==="F")return fw(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new bu(i.field,o)});const n=e.endAt?new wu(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new wu(e.startAt.position,e.startAt.inclusive):null;return fw(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Lh(e,t,n){return new zc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tP(e,t){return og(Br(e),Br(t))&&e.limitType===t.limitType}function nP(e){return`${ig(Br(e))}|lt:${e.limitType}`}function Go(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ZS(i)).join(", ")}]`),tg(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vo(i)).join(",")),`Target(${r})`}(Br(e))}; limitType=${e.limitType})`}function ag(e,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(e,t)&&function(r,i){for(const o of _a(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(a,s,l){const c=uw(a,s,l);return a.inclusive?c<=0:c<0}(r.startAt,_a(r),i)||r.endAt&&!function(a,s,l){const c=uw(a,s,l);return a.inclusive?c>=0:c>0}(r.endAt,_a(r),i))}(e,t)}function y5(e){return(t,n)=>{let r=!1;for(const i of _a(e)){const o=w5(i,t,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function w5(e,t,n){const r=e.field.isKeyField()?F.comparator(t.key,n.key):function(o,a,s){const l=a.data.field(o),c=s.data.field(o);return l!==null&&c!==null?go(l,c):U()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Es(this.inner,(n,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return GS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b5=new mt(F.comparator);function Ou(){return b5}const rP=new mt(F.comparator);function cl(...e){let t=rP;for(const n of e)t=t.insert(n.key,n);return t}function iP(e){let t=rP;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Dr(){return ya()}function oP(){return ya()}function ya(){return new Ao(e=>e.toString(),(e,t)=>e.isEqual(t))}const O5=new mt(F.comparator),E5=new Xe(F.comparator);function Ke(...e){let t=E5;for(const n of e)t=t.add(n);return t}const S5=new Xe(J);function P5(){return S5}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vu(t)?"-0":t}}function sP(e){return{integerValue:""+e}}function T5(e,t){return e5(t)?sP(t):aP(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this._=void 0}}function j5(e,t,n){return e instanceof Eu?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ng(o)&&(o=KS(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(n,t):e instanceof es?uP(e,t):e instanceof ts?cP(e,t):function(i,o){const a=lP(i,o),s=hw(a)+hw(i.Ie);return kh(a)&&kh(i.Ie)?sP(s):aP(i.serializer,s)}(e,t)}function I5(e,t,n){return e instanceof es?uP(e,t):e instanceof ts?cP(e,t):n}function lP(e,t){return e instanceof Su?function(r){return kh(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Eu extends Bc{}class es extends Bc{constructor(t){super(),this.elements=t}}function uP(e,t){const n=fP(t);for(const r of e.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ts extends Bc{constructor(t){super(),this.elements=t}}function cP(e,t){let n=fP(t);for(const r of e.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Su extends Bc{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function hw(e){return xe(e.integerValue||e.doubleValue)}function fP(e){return rg(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function $5(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof es&&i instanceof es||r instanceof ts&&i instanceof ts?po(r.elements,i.elements,dn):r instanceof Su&&i instanceof Su?dn(r.Ie,i.Ie):r instanceof Eu&&i instanceof Eu}(e.transform,t.transform)}class C5{constructor(t,n){this.version=t,this.transformResults=n}}class Tn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Tn}static exists(t){return new Tn(void 0,t)}static updateTime(t){return new Tn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $l(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Uc{}function dP(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new pP(e.key,Tn.none()):new Ss(e.key,e.data,Tn.none());{const n=e.data,r=Ut.empty();let i=new Xe(ke.comparator);for(let o of t.fields)if(!i.has(o)){let a=n.field(o);a===null&&o.length>1&&(o=o.popLast(),a=n.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ri(e.key,r,new Ht(i.toArray()),Tn.none())}}function A5(e,t,n){e instanceof Ss?function(i,o,a){const s=i.value.clone(),l=mw(i.fieldTransforms,o,a.transformResults);s.setAll(l),o.convertToFoundDocument(a.version,s).setHasCommittedMutations()}(e,t,n):e instanceof ri?function(i,o,a){if(!$l(i.precondition,o))return void o.convertToUnknownDocument(a.version);const s=mw(i.fieldTransforms,o,a.transformResults),l=o.data;l.setAll(hP(i)),l.setAll(s),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function wa(e,t,n,r){return e instanceof Ss?function(o,a,s,l){if(!$l(o.precondition,a))return s;const c=o.value.clone(),f=gw(o.fieldTransforms,l,a);return c.setAll(f),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof ri?function(o,a,s,l){if(!$l(o.precondition,a))return s;const c=gw(o.fieldTransforms,l,a),f=a.data;return f.setAll(hP(o)),f.setAll(c),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),s===null?null:s.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(d=>d.field))}(e,t,n,r):function(o,a,s){return $l(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):s}(e,t,n)}function D5(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),o=lP(r.transform,i||null);o!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,o))}return n||null}function pw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&po(r,i,(o,a)=>$5(o,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ss extends Uc{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends Uc{constructor(t,n,r,i,o=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function hP(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function mw(e,t,n){const r=new Map;Ae(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],a=o.transform,s=t.data.field(o.field);r.set(o.field,I5(a,s,n[i]))}return r}function gw(e,t,n){const r=new Map;for(const i of e){const o=i.transform,a=n.data.field(i.field);r.set(i.field,j5(o,a,t))}return r}class pP extends Uc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M5 extends Uc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R5{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&A5(o,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=wa(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=wa(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=oP();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let s=this.applyToLocalView(a,o.mutatedFields);s=n.has(i.key)?null:s;const l=dP(a,s);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Ke())}isEqual(t){return this.batchId===t.batchId&&po(this.mutations,t.mutations,(n,r)=>pw(n,r))&&po(this.baseMutations,t.baseMutations,(n,r)=>pw(n,r))}}class sg{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Ae(t.mutations.length===r.length);let i=function(){return O5}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new sg(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,H;function N5(e){switch(e){default:return U();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function k5(e){if(e===void 0)return Yr("GRPC error has no .code"),T.UNKNOWN;switch(e){case ge.OK:return T.OK;case ge.CANCELLED:return T.CANCELLED;case ge.UNKNOWN:return T.UNKNOWN;case ge.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ge.INTERNAL:return T.INTERNAL;case ge.UNAVAILABLE:return T.UNAVAILABLE;case ge.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ge.NOT_FOUND:return T.NOT_FOUND;case ge.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ge.ABORTED:return T.ABORTED;case ge.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ge.DATA_LOSS:return T.DATA_LOSS;default:return U()}}(H=ge||(ge={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new L3([4294967295,4294967295],0);class V5{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Fh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function L5(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function F5(e,t){return Fh(e,t.toTimestamp())}function Wi(e){return Ae(!!e),ae.fromTimestamp(function(n){const r=Jr(n);return new $e(r.seconds,r.nanos)}(e))}function mP(e,t){return function(r){return new _e(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function z5(e){const t=_e.fromString(e);return Ae(q5(t)),t}function zh(e,t){return mP(e.databaseId,t.path)}function B5(e){const t=z5(e);return t.length===4?_e.emptyPath():H5(t)}function U5(e){return new _e(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function H5(e){return Ae(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function vw(e,t,n){return{name:zh(e,t),fields:n.value.mapValue.fields}}function W5(e,t){let n;if(t instanceof Ss)n={update:vw(e,t.key,t.value)};else if(t instanceof pP)n={delete:zh(e,t.key)};else if(t instanceof ri)n={update:vw(e,t.key,t.data),updateMask:Q5(t.fieldMask)};else{if(!(t instanceof M5))return U();n={verify:zh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const s=a.transform;if(s instanceof Eu)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof es)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof ts)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof Su)return{fieldPath:a.field.canonicalString(),increment:s.Ie};throw U()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:F5(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(e,t.precondition)),n}function G5(e,t){return e&&e.length>0?(Ae(t!==void 0),e.map(n=>function(i,o){let a=i.updateTime?Wi(i.updateTime):Wi(o);return a.isEqual(ae.min())&&(a=Wi(o)),new C5(a,i.transformResults||[])}(n,t))):[]}function K5(e){let t=B5(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let o=[];n.where&&(o=function(d){const p=gP(d);return p instanceof hr&&YS(p)?p.getFilters():[p]}(n.where));let a=[];n.orderBy&&(a=function(d){return d.map(p=>function(y){return new bu(pi(y.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let s=null;n.limit&&(s=function(d){let p;return p=typeof d=="object"?d.value:d,tg(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,v=d.values||[];return new wu(v,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,v=d.values||[];return new wu(v,p)}(n.endAt)),m5(t,i,a,o,s,"F",l,c)}function gP(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pi(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pi(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pi(n.unaryFilter.field);return je.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=pi(n.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(e):e.fieldFilter!==void 0?function(n){return je.create(pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return hr.create(n.compositeFilter.filters.map(r=>gP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(e):U()}function pi(e){return ke.fromServerFormat(e.fieldPath)}function Q5(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function q5(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(t){this.ut=t}}function Y5(e){const t=K5({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Lh(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J5{constructor(){this.on=new Z5}addToCollectionParentIndex(t,n){return this.on.add(n),S.resolve()}getCollectionParents(t,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return S.resolve()}deleteFieldIndex(t,n){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,n){return S.resolve()}getDocumentsMatchingTarget(t,n){return S.resolve(null)}getIndexType(t,n){return S.resolve(0)}getFieldIndexes(t,n){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,n){return S.resolve(dr.min())}getMinOffsetFromCollectionGroup(t,n){return S.resolve(dr.min())}updateCollectionGroup(t,n,r){return S.resolve()}updateIndexEntries(t,n){return S.resolve()}}class Z5{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Xe(_e.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Xe(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new _o(0)}static Nn(){return new _o(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.changes=new Ao(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Bt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&wa(r.mutation,i,Ht.empty(),$e.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Ke()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Ke()){const i=Dr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(o=>{let a=cl();return o.forEach((s,l)=>{a=a.insert(s,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=Dr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Ke()))}populateOverlays(t,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,s)=>{n.set(a,s)})})}computeViews(t,n,r,i){let o=Ou();const a=ya(),s=function(){return ya()}();return n.forEach((l,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof ri)?o=o.insert(c.key,c):f!==void 0?(a.set(c.key,f.mutation.getFieldMask()),wa(f.mutation,c,f.mutation.getFieldMask(),$e.now())):a.set(c.key,Ht.empty())}),this.recalculateAndSaveOverlays(t,o).next(l=>(l.forEach((c,f)=>a.set(c,f)),n.forEach((c,f)=>{var d;return s.set(c,new tN(f,(d=a.get(c))!==null&&d!==void 0?d:null))}),s))}recalculateAndSaveOverlays(t,n){const r=ya();let i=new mt((a,s)=>a-s),o=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const s of a)s.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let f=r.get(l)||Ht.empty();f=s.applyToLocalView(c,f),r.set(l,f);const d=(i.get(s.batchId)||Ke()).add(l);i=i.insert(s.batchId,d)})}).next(()=>{const a=[],s=i.getReverseIterator();for(;s.hasNext();){const l=s.getNext(),c=l.key,f=l.value,d=oP();f.forEach(p=>{if(!o.has(p)){const v=dP(n.get(p),r.get(p));v!==null&&d.set(p,v),o=o.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(t,c,d))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):v5(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-o.size):S.resolve(Dr());let s=-1,l=o;return a.next(c=>S.forEach(c,(f,d)=>(s<d.largestBatchId&&(s=d.largestBatchId),o.get(f)?S.resolve():this.remoteDocumentCache.getEntry(t,f).next(p=>{l=l.insert(f,p)}))).next(()=>this.populateOverlays(t,c,o)).next(()=>this.computeViews(t,l,c,Ke())).next(f=>({batchId:s,changes:iP(f)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new F(n)).next(r=>{let i=cl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const o=n.collectionGroup;let a=cl();return this.indexManager.getCollectionParents(t,o).next(s=>S.forEach(s,l=>{const c=function(d,p){return new zc(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(f=>{f.forEach((d,p)=>{a=a.insert(d,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,o,i))).next(a=>{o.forEach((l,c)=>{const f=c.getKey();a.get(f)===null&&(a=a.insert(f,Bt.newInvalidDocument(f)))});let s=cl();return a.forEach((l,c)=>{const f=o.get(l);f!==void 0&&wa(f.mutation,c,Ht.empty(),$e.now()),ag(n,c)&&(s=s.insert(l,c))}),s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wi(i.createTime)}}(n)),S.resolve()}getNamedQuery(t,n){return S.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Y5(i.bundledQuery),readTime:Wi(i.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this.overlays=new mt(F.comparator),this.lr=new Map}getOverlay(t,n){return S.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Dr();return S.forEach(n,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,o)=>{this.lt(t,n,o)}),S.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(t,n,r){const i=Dr(),o=n.length+1,a=new F(n.child("")),s=this.overlays.getIteratorFrom(a);for(;s.hasNext();){const l=s.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let o=new mt((c,f)=>c-f);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=o.get(c.largestBatchId);f===null&&(f=Dr(),o=o.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const s=Dr(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,f)=>s.set(c,f)),!(s.size()>=i)););return S.resolve(s)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new x5(n,r));let o=this.lr.get(n);o===void 0&&(o=Ke(),this.lr.set(n,o)),this.lr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.hr=new Xe(Se.Pr),this.Ir=new Xe(Se.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new Se(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new Se(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new F(new _e([])),r=new Se(n,t),i=new Se(n,t+1),o=[];return this.Ir.forEachInRange([r,i],a=>{this.dr(a),o.push(a.key)}),o}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new F(new _e([])),r=new Se(n,t),i=new Se(n,t+1);let o=Ke();return this.Ir.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const n=new Se(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Se{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return F.comparator(t.key,n.key)||J(t.gr,n.gr)}static Tr(t,n){return J(t.gr,n.gr)||F.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Xe(Se.Pr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const o=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new R5(o,n,r,i);this.mutationQueue.push(a);for(const s of i)this.yr=this.yr.add(new Se(s.key,o)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Se(n,0),i=new Se(n,Number.POSITIVE_INFINITY),o=[];return this.yr.forEachInRange([r,i],a=>{const s=this.wr(a.gr);o.push(s)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Xe(J);return n.forEach(i=>{const o=new Se(i,0),a=new Se(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([o,a],s=>{r=r.add(s.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new Se(new F(o),0);let s=new Xe(J);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(s=s.add(l.gr)),!0)},a),S.resolve(this.br(s))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Ae(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,i=>{const o=new Se(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new Se(n,0),i=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(t){this.Cr=t,this.docs=function(){return new mt(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Bt.newInvalidDocument(n))}getEntries(t,n){let r=Ou();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Bt.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let o=Ou();const a=n.path,s=new F(a.child("")),l=this.docs.getIteratorFrom(s);for(;l.hasNext();){const{key:c,value:{document:f}}=l.getNext();if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||Y3(X3(f),r)<=0||(i.has(f.key)||ag(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,n,r,i){U()}vr(t,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new sN(this)}getSize(t){return S.resolve(this.size)}}class sN extends eN{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(t){this.persistence=t,this.Fr=new Ao(n=>ig(n),og),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Mr=0,this.Or=new lg,this.targetCount=0,this.Nr=_o.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new _o(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(t,n){return this.kn(n),S.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,n,r){let i=0;const o=[];return this.Fr.forEach((a,s)=>{s.sequenceNumber<=n&&r.get(s.targetId)===null&&(this.Fr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,s.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(t,n){return S.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(t,n){this.Br={},this.overlays={},this.Lr=new WS(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new lN(this),this.indexManager=new J5,this.remoteDocumentCache=function(i){return new aN(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new X5(n),this.Kr=new rN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new iN,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new oN(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){M("MemoryPersistence","Starting transaction:",t);const i=new cN(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(o=>this.referenceDelegate.Ur(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Wr(t,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class cN extends Z3{constructor(t){super(),this.currentSequenceNumber=t}}class ug{constructor(t){this.persistence=t,this.Gr=new lg,this.zr=null}static jr(t){return new ug(t)}get Hr(){if(this.zr)return this.zr;throw U()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(o=>this.Hr.add(o.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const i=F.fromPath(r);return this.Jr(t,i).next(o=>{o||n.removeEntry(i,ae.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=Ke(),i=Ke();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new cg(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const o={result:null};return this.zi(t,n).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ji(t,n,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new fN;return this.Hi(t,n,a).next(s=>{if(o.result=s,this.$i)return this.Ji(t,n,a,s.size)})}).next(()=>o.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(Wo()<=W.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Go(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(Wo()<=W.DEBUG&&M("QueryEngine","Query:",Go(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Wo()<=W.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Go(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Br(n))):S.resolve())}zi(t,n){if(dw(n))return S.resolve(null);let r=Br(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lh(n,null,"F"),r=Br(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Ke(...o);return this.Gi.getDocuments(t,a).next(s=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Yi(n,s);return this.Zi(n,c,a,l.readTime)?this.zi(t,Lh(n,null,"F")):this.Xi(t,c,n,l)}))})))}ji(t,n,r,i){return dw(n)||i.isEqual(ae.min())?S.resolve(null):this.Gi.getDocuments(t,r).next(o=>{const a=this.Yi(n,o);return this.Zi(n,a,r,i)?S.resolve(null):(Wo()<=W.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Go(n)),this.Xi(t,a,n,q3(i,-1)).next(s=>s))})}Yi(t,n){let r=new Xe(y5(t));return n.forEach((i,o)=>{ag(t,o)&&(r=r.add(o))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const o=t.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Hi(t,n,r){return Wo()<=W.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Go(n)),this.Gi.getDocumentsMatchingQuery(t,n,dr.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(o=>(n.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new mt(J),this.ns=new Ao(o=>ig(o),og),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nN(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function pN(e,t,n,r){return new hN(e,t,n,r)}async function vP(e,t){const n=ie(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],s=[];let l=Ke();for(const c of i){a.push(c.batchId);for(const f of c.mutations)l=l.add(f.key)}for(const c of o){s.push(c.batchId);for(const f of c.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:a,addedBatchIds:s}))})})}function mN(e,t){const n=ie(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=n.ss.newChangeBuffer({trackRemovals:!0});return function(s,l,c,f){const d=c.batch,p=d.keys();let v=S.resolve();return p.forEach(y=>{v=v.next(()=>f.getEntry(l,y)).next(_=>{const b=c.docVersions.get(y);Ae(b!==null),_.version.compareTo(b)<0&&(d.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),f.addEntry(_)))})}),v.next(()=>s.mutationQueue.removeMutationBatch(l,d))}(n,r,t,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(s){let l=Ke();for(let c=0;c<s.mutationResults.length;++c)s.mutationResults[c].transformResults.length>0&&(l=l.add(s.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function gN(e){const t=ie(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function vN(e,t){const n=ie(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class _w{constructor(){this.activeTargetIds=P5()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _N{constructor(){this.eo=new _w,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new _w,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl=null;function Uf(){return fl===null?fl=function(){return 268435456+Math.round(2147483648*Math.random())}():fl++,"0x"+fl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection";class ON extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${o}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get yo(){return!1}wo(n,r,i,o,a){const s=Uf(),l=this.So(n,r);M("RestConnection",`Sending RPC '${n}' ${s}:`,l,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,o,a),this.Do(n,l,c,i).then(f=>(M("RestConnection",`Received RPC '${n}' ${s}: `,f),f),f=>{throw gu("RestConnection",`RPC '${n}' ${s} failed with error: `,f,"url: ",l,"request:",i),f})}Co(n,r,i,o,a,s){return this.wo(n,r,i,o,a)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>n[a]=o),i&&i.headers.forEach((o,a)=>n[a]=o)}So(n,r){const i=wN[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const o=Uf();return new Promise((a,s)=>{const l=new V3;l.setWithCredentials(!0),l.listenOnce(x3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bf.NO_ERROR:const f=l.getResponseJson();M(Ue,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(f)),a(f);break;case Bf.TIMEOUT:M(Ue,`RPC '${t}' ${o} timed out`),s(new k(T.DEADLINE_EXCEEDED,"Request time out"));break;case Bf.HTTP_ERROR:const d=l.getStatus();if(M(Ue,`RPC '${t}' ${o} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const v=p==null?void 0:p.error;if(v&&v.status&&v.message){const y=function(b){const m=b.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(v.status);s(new k(y,v.message))}else s(new k(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else s(new k(T.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{M(Ue,`RPC '${t}' ${o} completed.`)}});const c=JSON.stringify(i);M(Ue,`RPC '${t}' ${o} sending request:`,i),l.send(n,"POST",c,r,15)})}vo(t,n,r){const i=Uf(),o=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=M3(),s=R3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new k3({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=o.join("");M(Ue,`Creating RPC '${t}' stream ${i}: ${f}`,l);const d=a.createWebChannel(f,l);let p=!1,v=!1;const y=new bN({co:b=>{v?M(Ue,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(p||(M(Ue,`Opening RPC '${t}' stream ${i} transport.`),d.open(),p=!0),M(Ue,`RPC '${t}' stream ${i} sending:`,b),d.send(b))},lo:()=>d.close()}),_=(b,m,h)=>{b.listen(m,g=>{try{h(g)}catch(w){setTimeout(()=>{throw w},0)}})};return _(d,sl.EventType.OPEN,()=>{v||M(Ue,`RPC '${t}' stream ${i} transport opened.`)}),_(d,sl.EventType.CLOSE,()=>{v||(v=!0,M(Ue,`RPC '${t}' stream ${i} transport closed`),y.Ro())}),_(d,sl.EventType.ERROR,b=>{v||(v=!0,gu(Ue,`RPC '${t}' stream ${i} transport errored:`,b),y.Ro(new k(T.UNAVAILABLE,"The operation could not be completed")))}),_(d,sl.EventType.MESSAGE,b=>{var m;if(!v){const h=b.data[0];Ae(!!h);const g=h,w=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(w){M(Ue,`RPC '${t}' stream ${i} received error:`,w);const O=w.status;let j=function(Y){const V=ge[Y];if(V!==void 0)return k5(V)}(O),E=w.message;j===void 0&&(j=T.INTERNAL,E="Unknown error status: "+O+" with message "+w.message),v=!0,y.Ro(new k(j,E)),d.close()}else M(Ue,`RPC '${t}' stream ${i} received:`,h),y.Vo(h)}}),_(s,N3.STAT_EVENT,b=>{b.stat===iw.PROXY?M(Ue,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===iw.NOPROXY&&M(Ue,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function Hf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(e){return new V5(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(t,n,r=1e3,i=1.5,o=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=o,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(t,n,r,i,o,a,s,l){this.si=t,this.Ko=r,this.$o=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=s,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new _P(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Yr(n.toString()),Yr("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new k(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SN extends EN{constructor(t,n,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=o,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(Ae(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=G5(t.writeResults,t.commitTime),r=Wi(t.commitTime);return this.listener.I_(r,n)}return Ae(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=U5(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>W5(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new k(T.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.wo(t,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(T.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,n,r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(T.UNKNOWN,o.toString())})}terminate(){this.d_=!0}}class TN{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Yr(n),this.f_=!1):M("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(t,n,r,i,o){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=o,this.F_.ro(a=>{r.enqueueAndForget(async()=>{Ts(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ie(l);c.C_.add(4),await Ps(c),c.M_.set("Unknown"),c.C_.delete(4),await Wc(c)}(this))})}),this.M_=new TN(r,i)}}async function Wc(e){if(Ts(e))for(const t of e.v_)await t(!0)}async function Ps(e){for(const t of e.v_)await t(!1)}function Ts(e){return ie(e).C_.size===0}async function yP(e,t,n){if(!Fc(t))throw t;e.C_.add(1),await Ps(e),e.M_.set("Offline"),n||(n=()=>gN(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await Wc(e)})}function wP(e,t){return t().catch(n=>yP(e,n,t))}async function Gc(e){const t=ie(e),n=pr(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;IN(t);)try{const i=await vN(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,$N(t,i)}catch(i){await yP(t,i)}bP(t)&&OP(t)}function IN(e){return Ts(e)&&e.b_.length<10}function $N(e,t){e.b_.push(t);const n=pr(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function bP(e){return Ts(e)&&!pr(e).jo()&&e.b_.length>0}function OP(e){pr(e).start()}async function CN(e){pr(e).E_()}async function AN(e){const t=pr(e);for(const n of e.b_)t.P_(n.mutations)}async function DN(e,t,n){const r=e.b_.shift(),i=sg.from(r,t,n);await wP(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Gc(e)}async function MN(e,t){t&&pr(e).h_&&await async function(r,i){if(function(a){return N5(a)&&a!==T.ABORTED}(i.code)){const o=r.b_.shift();pr(r).Yo(),await wP(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Gc(r)}}(e,t),bP(e)&&OP(e)}async function ww(e,t){const n=ie(e);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Ts(n);n.C_.add(3),await Ps(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await Wc(n)}async function RN(e,t){const n=ie(e);t?(n.C_.delete(2),await Wc(n)):t||(n.C_.add(2),await Ps(n),n.M_.set("Unknown"))}function pr(e){return e.N_||(e.N_=function(n,r,i){const o=ie(n);return o.A_(),new SN(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(e.datastore,e.asyncQueue,{ho:CN.bind(null,e),Io:MN.bind(null,e),T_:AN.bind(null,e),I_:DN.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Gc(e)):(await e.N_.stop(),e.b_.length>0&&(M("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const a=Date.now()+r,s=new fg(t,n,a,i,o);return s.start(r),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function EP(e,t){if(Yr("AsyncQueue",`${t}: ${e}`),Fc(e))return new k(T.UNAVAILABLE,`${t}: ${e}`);throw e}class xN{constructor(){this.queries=new Ao(t=>nP(t),tP),this.onlineState="Unknown",this.q_=new Set}}function NN(e){e.q_.forEach(t=>{t.next()})}class kN{constructor(t,n,r,i,o,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Va={},this.ma=new Ao(s=>nP(s),tP),this.fa=new Map,this.ga=new Set,this.pa=new mt(F.comparator),this.ya=new Map,this.wa=new lg,this.Sa={},this.ba=new Map,this.Da=_o.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function VN(e,t,n){const r=BN(e);try{const i=await function(a,s){const l=ie(a),c=$e.now(),f=s.reduce((v,y)=>v.add(y.key),Ke());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let y=Ou(),_=Ke();return l.ss.getEntries(v,f).next(b=>{y=b,y.forEach((m,h)=>{h.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,y)).next(b=>{d=b;const m=[];for(const h of s){const g=D5(h,d.get(h.key).overlayedDocument);g!=null&&m.push(new ri(h.key,g,QS(g.value.mapValue),Tn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,m,s)}).next(b=>{p=b;const m=b.applyToLocalDocumentSet(d,_);return l.documentOverlayCache.saveOverlays(v,b.batchId,m)})}).then(()=>({batchId:p.batchId,changes:iP(d)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,s,l){let c=a.Sa[a.currentUser.toKey()];c||(c=new mt(J)),c=c.insert(s,l),a.Sa[a.currentUser.toKey()]=c}(r,i.batchId,n),await Kc(r,i.changes),await Gc(r.remoteStore)}catch(i){const o=EP(i,"Failed to persist write");n.reject(o)}}function bw(e,t,n){const r=ie(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((o,a)=>{const s=a.view.Q_(t);s.snapshot&&i.push(s.snapshot)}),function(a,s){const l=ie(a);l.onlineState=s;let c=!1;l.queries.forEach((f,d)=>{for(const p of d.listeners)p.Q_(s)&&(c=!0)}),c&&NN(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function LN(e,t){const n=ie(e),r=t.batch.batchId;try{const i=await mN(n.localStore,t);PP(n,r,null),SP(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Kc(n,i)}catch(i){await HS(i)}}async function FN(e,t,n){const r=ie(e);try{const i=await function(a,s){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return l.mutationQueue.lookupMutationBatch(c,s).next(d=>(Ae(d!==null),f=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,f,s)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>l.localDocuments.getDocuments(c,f))})}(r.localStore,t);PP(r,t,n),SP(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Kc(r,i)}catch(i){await HS(i)}}function SP(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function PP(e,t,n){const r=ie(e);let i=r.Sa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(n?o.reject(n):o.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}async function Kc(e,t,n){const r=ie(e),i=[],o=[],a=[];r.ma.isEmpty()||(r.ma.forEach((s,l)=>{a.push(r.va(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const f=cg.Qi(l.targetId,c);o.push(f)}}))}),await Promise.all(a),r.Va.a_(i),await async function(l,c){const f=ie(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>S.forEach(c,p=>S.forEach(p.ki,v=>f.persistence.referenceDelegate.addReference(d,p.targetId,v)).next(()=>S.forEach(p.qi,v=>f.persistence.referenceDelegate.removeReference(d,p.targetId,v)))))}catch(d){if(!Fc(d))throw d;M("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const p=d.targetId;if(!d.fromCache){const v=f.ts.get(p),y=v.snapshotVersion,_=v.withLastLimboFreeSnapshotVersion(y);f.ts=f.ts.insert(p,_)}}}(r.localStore,o))}async function zN(e,t){const n=ie(e);if(!n.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await vP(n.localStore,t);n.currentUser=t,function(o,a){o.ba.forEach(s=>{s.forEach(l=>{l.reject(new k(T.CANCELLED,a))})}),o.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Kc(n,r._s)}}function BN(e){const t=ie(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=LN.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=FN.bind(null,t),t}class Ow{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Hc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return pN(this.persistence,new dN,t.initialUser,this.serializer)}createPersistence(t){return new uN(ug.jr,this.serializer)}createSharedClientState(t){return new _N}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UN{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zN.bind(null,this.syncEngine),await RN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new xN}()}createDatastore(t){const n=Hc(t.databaseInfo.databaseId),r=function(o){return new ON(o)}(t.databaseInfo);return function(o,a,s,l){return new PN(o,a,s,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,o,a,s){return new jN(r,i,o,a,s)}(this.localStore,this.datastore,t.asyncQueue,n=>bw(this.syncEngine,n,0),function(){return yw.D()?new yw:new yN}())}createSyncEngine(t,n){return function(i,o,a,s,l,c,f){const d=new kN(i,o,a,s,l,c);return f&&(d.Ca=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ie(n);M("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ps(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=US.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{M("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(M("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=EP(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Wf(e,t){e.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vP(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ew(e,t){e.asyncQueue.verifyOperationInProgress();const n=await GN(e);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>ww(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,o)=>ww(t.remoteStore,o)),e._onlineComponents=t}function WN(e){return e.name==="FirebaseError"?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function GN(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!WN(n))throw n;gu("Error using user provided cache. Falling back to memory cache: "+n),await Wf(e,new Ow)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Wf(e,new Ow);return e._offlineComponents}async function KN(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Ew(e,e._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Ew(e,new UN))),e._onlineComponents}function QN(e){return KN(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(e,t,n){if(!n)throw new k(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function XN(e,t,n,r){if(t===!0&&r===!0)throw new k(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Pw(e){if(!F.isDocumentKey(e))throw new k(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function dg(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":U()}function Bh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new k(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dg(e);throw new k(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}XN("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TP((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(T.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(T.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(T.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hg{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new k(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tw(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new F3;switch(r.type){case"firstParty":return new H3(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sw.get(n);r&&(M("ComponentProvider","Removing Datastore"),Sw.delete(n),r.terminate())}(this),Promise.resolve()}}function YN(e,t,n,r={}){var i;const o=(e=Bh(e,hg))._getSettings(),a=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&gu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let s,l;if(typeof r.mockUserToken=="string")s=r.mockUserToken,l=He.MOCK_USER;else{s=v4(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new k(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new He(c)}e._authCredentials=new z3(new BS(s,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new pg(this.firestore,t,this._query)}}class jn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jn(this.firestore,t,this._key)}}class ns extends pg{constructor(t,n,r){super(t,n,g5(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jn(this.firestore,null,new F(t))}withConverter(t){return new ns(this.firestore,t,this._path)}}function JN(e,t,...n){if(e=au(e),arguments.length===1&&(t=US.newId()),qN("doc","path",t),e instanceof hg){const r=_e.fromString(t,...n);return Pw(r),new jn(e,null,new F(r))}{if(!(e instanceof jn||e instanceof ns))throw new k(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(_e.fromString(t,...n));return Pw(r),new jn(e.firestore,e instanceof ns?e.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new _P(this,"async_queue_retry"),this.iu=()=>{const n=Hf();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Hf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Hf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new zr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Fc(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(a){let s=a.message||"";return a.stack&&(s=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),s}(r);throw Yr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=fg.createAndSchedule(this,t,n,r,o=>this.au(o));return this.Xa.push(i),i}su(){this.eu&&U()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class jP extends hg{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new ZN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||IP(this),this._firestoreClient.terminate()}}function e9(e,t){const n=typeof e=="object"?e:bx(),r=typeof e=="string"?e:t||"(default)",i=vx(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=m4("firestore");o&&YN(i,...o)}return i}function t9(e){return e._firestoreClient||IP(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function IP(e){var t,n,r;const i=e._freezeSettings(),o=function(s,l,c,f){return new r5(s,l,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,TP(f.experimentalLongPollingOptions),f.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new HN(e._authCredentials,e._appCheckCredentials,e._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new rs(xn.fromBase64String(t))}catch(n){throw new k(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new rs(xn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new k(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new k(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new k(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n9=/^__.*__$/;class r9{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ri(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ss(t,this.data,n,this.fieldTransforms)}}function DP(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class mg{constructor(t,n,r,i,o,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new mg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Pu(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(DP(this.Iu)&&n9.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class i9{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Hc(t)}pu(t,n,r,i=!1){return new mg({Iu:t,methodName:n,gu:r,path:ke.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o9(e){const t=e._freezeSettings(),n=Hc(e._databaseId);return new i9(e._databaseId,!!t.ignoreUndefinedProperties,n)}function a9(e,t,n,r,i,o={}){const a=e.pu(o.merge||o.mergeFields?2:0,t,n,i);NP("Data must be an object, but it was:",a,r);const s=RP(r,a);let l,c;if(o.merge)l=new Ht(a.fieldMask),c=a.fieldTransforms;else if(o.mergeFields){const f=[];for(const d of o.mergeFields){const p=s9(t,d,n);if(!a.contains(p))throw new k(T.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);c9(f,p)||f.push(p)}l=new Ht(f),c=a.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=a.fieldTransforms;return new r9(new Ut(s),l,c)}function MP(e,t){if(xP(e=au(e)))return NP("Unsupported field value:",t,e),RP(e,t);if(e instanceof CP)return function(r,i){if(!DP(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const s of r){let l=MP(s,i.Vu(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}}(e,t)}return function(r,i){if((r=au(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return T5(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=$e.fromDate(r);return{timestampValue:Fh(i.serializer,o)}}if(r instanceof $e){const o=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fh(i.serializer,o)}}if(r instanceof AP)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rs)return{bytesValue:L5(i.serializer,r._byteString)};if(r instanceof jn){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:mP(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${dg(r)}`)}(e,t)}function RP(e,t){const n={};return GS(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Es(e,(r,i)=>{const o=MP(i,t.Eu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function xP(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof $e||e instanceof AP||e instanceof rs||e instanceof jn||e instanceof CP)}function NP(e,t,n){if(!xP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=dg(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function s9(e,t,n){if((t=au(t))instanceof $P)return t._internalPath;if(typeof t=="string")return u9(e,t);throw Pu("Field path arguments must be of type string or ",e,!1,void 0,n)}const l9=new RegExp("[~\\*/\\[\\]]");function u9(e,t,n){if(t.search(l9)>=0)throw Pu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new $P(...t.split("."))._internalPath}catch{throw Pu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Pu(e,t,n,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(o||a)&&(l+=" (found",o&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new k(T.INVALID_ARGUMENT,s+e+l)}function c9(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f9(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function d9(e,t,n){e=Bh(e,jn);const r=Bh(e.firestore,jP),i=f9(e.converter,t,n);return h9(r,[a9(o9(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Tn.none())])}function h9(e,t){return function(r,i){const o=new zr;return r.asyncQueue.enqueueAndForget(async()=>VN(await QN(r),i,o)),o.promise}(t9(e),t)}(function(t,n=!0){(function(i){Co=i})(wx),lu(new za("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),s=new jP(new B3(r.getProvider("auth-internal")),new G3(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new k(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yu(c.options.projectId,f)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),s._setSettings(o),s},"PUBLIC").setMultipleInstances(!0)),Ui(ow,"4.3.2",t),Ui(ow,"4.3.2","esm2017")})();const p9={apiKey:"AIzaSyBZjkGpg1hY-7QK8R5w64V-s-CsxqsS5_c",authDomain:"dindin-c29cb.firebaseapp.com",projectId:"dindin-c29cb",storageBucket:"dindin-c29cb.appspot.com",messagingSenderId:"291366736553",appId:"1:291366736553:web:6a258d4965186fdd700fb8"},m9=kE(p9),g9=e9(m9),v9=async({category:e,price:t,description:n,date:r})=>await d9(JN(g9,"store",Date.now().toString()),{category:e,price:t,description:n,date:r}),_9=["Mercado","Restaurantes","Passeios","Casa","Outros"],y9={Form:ru("form")`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `},w9=()=>{const[e,t]=A.useState(null),n=r=>{r.preventDefault(),t(null);const i=new FormData(r.currentTarget),o=i.get("category"),a=parseFloat(i.get("price")),s=(i==null?void 0:i.get("description"))||"",l=(i==null?void 0:i.get("date"))||"";console.log({category:o,price:a,description:s}),v9({category:o,price:a,description:s,date:l}).then(()=>{t({message:"Adicionado com sucesso!",type:"success"})}).catch(c=>{t({message:"Ops... algo deu errado",type:"error"}),console.log(c)})};return st.jsxs(y9.Form,{id:"form",onSubmit:r=>n(r),children:[st.jsx(zt.Select,{options:_9,name:"category",label:"Categoria"}),st.jsx(zt.TextField,{name:"price",type:"number",required:!0,label:"Valor",step:"0.1"}),st.jsx(zt.GenericInput,{type:"date",name:"date",defaultValue:new Date().toISOString().substring(0,10)}),st.jsx(zt.TextArea,{label:"Descrição",name:"description"}),st.jsx(zt.Button,{type:"submit",variant:"filled",children:"Adicionar"}),!!(e!=null&&e.message)&&st.jsx(zt.Toaster,{severity:e.type,isFullWidth:!0,duration:8e3,closable:!1,children:e.message})]})};function b9(){return st.jsxs(zt.SaguProvider,{theme:zt.theme,children:[st.jsx(zt.SaguGlobalStyles,{}),st.jsx("main",{children:st.jsx(zt.Container,{children:st.jsx(w9,{})})})]})}Gf.createRoot(document.getElementById("root")).render(st.jsx(Oe.StrictMode,{children:st.jsx(b9,{})}));
