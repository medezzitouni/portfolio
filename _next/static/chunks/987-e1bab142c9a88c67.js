(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{6010:function(e,r,t){"use strict";function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o);else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{W:function(){return o}})},5235:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getDomainLocale=function(e,r,t,o){return!1},("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},7913:function(e,r,t){"use strict";var o=t(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=t(2648).Z,a=t(7273).Z,l=n(t(7294)),i=t(2199),s=t(7389),c=t(1630),u=t(9541),d=t(6163),f=t(7215),p=t(5235),b=t(729),m=new Set;function v(e,r,t,o){if(i.isLocalURL(r)){if(!o.bypassPrefetchedCheck){var n=r+"%"+t+"%"+(void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0);if(m.has(n))return;m.add(n)}Promise.resolve(e.prefetch(r,t,o)).catch(function(e){})}}function g(e){return"string"==typeof e?e:s.formatUrl(e)}var h=l.default.forwardRef(function(e,r){var t,n,s=e.href,m=e.as,h=e.children,y=e.prefetch,x=e.passHref,w=e.replace,k=e.shallow,C=e.scroll,j=e.locale,M=e.onClick,_=e.onMouseEnter,O=e.onTouchStart,z=e.legacyBehavior,E=void 0!==z&&z,I=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);t=h,E&&("string"==typeof t||"number"==typeof t)&&(t=l.default.createElement("a",null,t));var S=!1!==y,P=l.default.useContext(u.RouterContext),N=l.default.useContext(d.AppRouterContext),A=null!=P?P:N,G=!P,T=l.default.useMemo(function(){if(!P){var e=g(s);return{href:e,as:m?g(m):e}}var r=o(i.resolveHref(P,s,!0),2),t=r[0],n=r[1];return{href:t,as:m?i.resolveHref(P,m):n||t}},[P,s,m]),L=T.href,R=T.as,U=l.default.useRef(L),W=l.default.useRef(R);E&&(n=l.default.Children.only(t));var Z=E?n&&"object"==typeof n&&n.ref:r,H=o(f.useIntersection({rootMargin:"200px"}),3),$=H[0],B=H[1],D=H[2],K=l.default.useCallback(function(e){(W.current!==R||U.current!==L)&&(D(),W.current=R,U.current=L),$(e),Z&&("function"==typeof Z?Z(e):"object"==typeof Z&&(Z.current=e))},[R,Z,L,D,$]);l.default.useEffect(function(){A&&B&&S&&v(A,L,R,{locale:j})},[R,L,B,j,S,null==P?void 0:P.locale,A]);var q={ref:K,onClick:function(e){E||"function"!=typeof M||M(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,r,t,o,n,a,s,c,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(f=e).currentTarget.target)||"_self"===p)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&i.isLocalURL(t)){e.preventDefault();var f,p,b=function(){"beforePopState"in r?r[n?"replace":"push"](t,o,{shallow:a,locale:c,scroll:s}):r[n?"replace":"push"](o||t,{forceOptimisticNavigation:!d})};u?l.default.startTransition(b):b()}}(e,A,L,R,w,k,C,j,G,S)},onMouseEnter:function(e){E||"function"!=typeof _||_(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(S||!G)&&v(A,L,R,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){E||"function"!=typeof O||O(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(S||!G)&&v(A,L,R,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||x||"a"===n.type&&!("href"in n.props)){var F=void 0!==j?j:null==P?void 0:P.locale,Q=(null==P?void 0:P.isLocaleDomain)&&p.getDomainLocale(R,F,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);q.href=Q||b.addBasePath(c.addLocale(R,F,null==P?void 0:P.defaultLocale))}return E?l.default.cloneElement(n,q):l.default.createElement("a",Object.assign({},I,q),t)});r.default=h,("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},7215:function(e,r,t){"use strict";var o=t(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,c=e.disabled||!l,u=o(n.useState(!1),2),d=u[0],f=u[1],p=o(n.useState(null),2),b=p[0],m=p[1];return n.useEffect(function(){if(l){if(!c&&!d&&b&&b.tagName){var e,o,n,u;return o=(e=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},o=s.find(function(e){return e.root===t.root&&e.margin===t.margin});if(o&&(r=i.get(o)))return r;var n=new Map;return r={id:t,observer:new IntersectionObserver(function(e){e.forEach(function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)})},e),elements:n},s.push(t),i.set(t,r),r}({root:null==r?void 0:r.current,rootMargin:t})).id,n=e.observer,(u=e.elements).set(b,function(e){return e&&f(e)}),n.observe(b),function(){if(u.delete(b),n.unobserve(b),0===u.size){n.disconnect(),i.delete(o);var e=s.findIndex(function(e){return e.root===o.root&&e.margin===o.margin});e>-1&&s.splice(e,1)}}}}else if(!d){var p=a.requestIdleCallback(function(){return f(!0)});return function(){return a.cancelIdleCallback(p)}}},[b,c,t,r,d]),[m,d,n.useCallback(function(){f(!1)},[])]};var n=t(7294),a=t(8065),l="function"==typeof IntersectionObserver,i=new Map,s=[];("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},7285:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.AmpStateContext=void 0;var o=(0,t(2648).Z)(t(7294)).default.createContext({});r.AmpStateContext=o},354:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.ampFirst,t=e.hybrid,o=e.hasQuery;return void 0!==r&&r||void 0!==t&&t&&void 0!==o&&o}},6505:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.defaultHead=u,r.default=void 0;var o=t(6495).Z,n=t(2648).Z,a=(0,t(1598).Z)(t(7294)),l=n(t(148)),i=t(7285),s=t(523),c=t(354);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=[a.default.createElement("meta",{charSet:"utf-8"})];return e||r.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),r}function d(e,r){return"string"==typeof r||"number"==typeof r?e:r.type===a.default.Fragment?e.concat(a.default.Children.toArray(r.props.children).reduce(function(e,r){return"string"==typeof r||"number"==typeof r?e:e.concat(r)},[])):e.concat(r)}t(2783);var f=["name","httpEquiv","charSet","itemProp"];function p(e,r){var t,n,l,i,s=r.inAmpMode;return e.reduce(d,[]).reverse().concat(u(s).reverse()).filter((t=new Set,n=new Set,l=new Set,i={},function(e){var r=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;var a=e.key.slice(e.key.indexOf("$")+1);t.has(a)?r=!1:t.add(a)}switch(e.type){case"title":case"base":n.has(e.type)?r=!1:n.add(e.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var u=f[s];if(e.props.hasOwnProperty(u)){if("charSet"===u)l.has(u)?r=!1:l.add(u);else{var d=e.props[u],p=i[u]||new Set;("name"!==u||!o)&&p.has(d)?r=!1:(p.add(d),i[u]=p)}}}}return r})).reverse().map(function(e,r){var t=e.key||r;if(!s&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(r){return e.props.href.startsWith(r)})){var n=o({},e.props||{});return n["data-href"]=n.href,n.href=void 0,n["data-optimized-fonts"]=!0,a.default.cloneElement(e,n)}return a.default.cloneElement(e,{key:t})})}r.default=function(e){var r=e.children,t=a.useContext(i.AmpStateContext),o=a.useContext(s.HeadManagerContext);return a.default.createElement(l.default,{reduceComponentsToState:p,headManager:o,inAmpMode:c.isInAmpMode(t)},r)},("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},148:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r,t=e.headManager,i=e.reduceComponentsToState;function s(){if(t&&t.mountedInstances){var r=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(r,e))}}return n&&(null==t||null==(r=t.mountedInstances)||r.add(e.children),s()),a(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),a(function(){return t&&(t._pendingUpdate=s),function(){t&&(t._pendingUpdate=s)}}),l(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null};var o=(0,t(1598).Z)(t(7294)),n=!1,a=o.useLayoutEffect,l=n?function(){}:o.useEffect},2783:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.warnOnce=void 0,r.warnOnce=function(e){}},9008:function(e,r,t){e.exports=t(6505)},1664:function(e,r,t){e.exports=t(7913)},2913:function(e,r,t){"use strict";var o=t(7294);let n=o.forwardRef(function({title:e,titleId:r,...t},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":r},t),e?o.createElement("title",{id:r},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}))});r.Z=n},2640:function(e,r,t){"use strict";function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=Array(r);t<r;t++)o[t]=e[t];return o}function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t,o,n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);l=!0);}catch(s){i=!0,o=s}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{Z:function(){return n}})},6180:function(e,r,t){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(r,{m:function(){return _}});var n=/^\[(.+)\]$/;function a(e,r){var t=e;return r.split("-").forEach(function(e){t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}var l=/\s+/;function i(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){if("string"==typeof r)return r;for(var t,o="",n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(o&&(o+=" "),o+=t);return o}(e))&&(o&&(o+=" "),o+=r);return o}function s(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var c=/^\[(.+)\]$/,u=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),f=/^(\d+)?(xs|sm|md|lg|xl)$/,p=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/,b=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function m(e){return!Number.isNaN(Number(e))||d.has(e)||u.test(e)||v(e)}function v(e){var r,t=null==(r=c.exec(e))?void 0:r[1];return!!t&&(t.startsWith("length:")||p.test(t))}function g(e){var r,t=null==(r=c.exec(e))?void 0:r[1];return!!t&&t.startsWith("size:")}function h(e){var r,t=null==(r=c.exec(e))?void 0:r[1];return!!t&&t.startsWith("position:")}function y(e){var r,t=null==(r=c.exec(e))?void 0:r[1];return!!t&&(t.startsWith("url(")||t.startsWith("url:"))}function x(e){var r,t=null==(r=c.exec(e))?void 0:r[1];return!!t&&(!Number.isNaN(Number(t))||t.startsWith("number:"))}function w(e){var r,t=null==(r=c.exec(e))?void 0:r[1];return t?Number.isInteger(Number(t)):Number.isInteger(Number(e))}function k(e){return c.test(e)}function C(){return!0}function j(e){return f.test(e)}function M(e){var r,t=null==(r=c.exec(e))?void 0:r[1];return!!t&&b.test(t)}var _=function(){for(var e,r,t,s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];var d=function(l){var i=c[0];return r=(e=function(e){var r,t,l,i,s;return o({cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,o=new Map;function n(n,a){t.set(n,a),++r>e&&(r=0,o=t,t=new Map)}return{get:function(e){var r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set:function(e,r){t.has(e)?t.set(e,r):n(e,r)}}}(e.cacheSize),splitModifiers:(r=e.separator||":",function(e){for(var t=0,o=[],n=0,a=0;a<e.length;a++){var l=e[a];0===t&&l===r[0]&&(1===r.length||e.slice(a,a+r.length)===r)&&(o.push(e.slice(n,a)),n=a+r.length),"["===l?t++:"]"===l&&t--}var i=0===o.length?e:e.substring(n),s=i.startsWith("!"),c=s?i.substring(1):i;return{modifiers:o,hasImportantModifier:s,baseClassName:c}})},(t=e.theme,l=e.prefix,i={nextPart:new Map,validators:[]},(s=Object.entries(e.classGroups),l?s.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?l+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[l+e[0],e[1]]})):e})]}):s).forEach(function(e){var r=e[0];(function e(r,t,o,n){r.forEach(function(r){if("string"==typeof r){(""===r?t:a(t,r)).classGroupId=o;return}if("function"==typeof r){if(r.isThemeGetter){e(r(n),t,o,n);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(function(r){var l=r[0];e(r[1],a(t,l),o,n)})})})(e[1],i,r,t)}),{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,t){if(0===r.length)return t.classGroupId;var o,n=r[0],a=t.nextPart.get(n),l=a?e(r.slice(1),a):void 0;if(l)return l;if(0!==t.validators.length){var i=r.join("-");return null==(o=t.validators.find(function(e){return(0,e.validator)(i)}))?void 0:o.classGroupId}}(r,i)||function(e){if(n.test(e)){var r=n.exec(e)[1],t=null==r?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(r){return e.conflictingClassGroups[r]||[]}}))}(c.slice(1).reduce(function(e,r){return r(e)},i()))).cache.get,t=e.cache.set,d=f,f(l)};function f(o){var n,a,i,s,c=r(o);if(c)return c;var u=(n=e.splitModifiers,a=e.getClassGroupId,i=e.getConflictingClassGroupIds,s=new Set,o.trim().split(l).map(function(e){var r=n(e),t=r.modifiers,o=r.hasImportantModifier,l=a(r.baseClassName);if(!l)return{isTailwindClass:!1,originalClassName:e};var i=(function(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,t.sort().concat([e])),t=[]):t.push(e)}),r.push.apply(r,t.sort()),r})(t).join(":");return{isTailwindClass:!0,modifierId:o?i+"!":i,classGroupId:l,originalClassName:e}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,t=e.classGroupId,o=r+t;return!s.has(o)&&(s.add(o),i(t).forEach(function(e){return s.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return t(o,u),u}return function(){return d(i.apply(null,arguments))}}(function(){var e=s("colors"),r=s("spacing"),t=s("blur"),o=s("brightness"),n=s("borderColor"),a=s("borderRadius"),l=s("borderSpacing"),i=s("borderWidth"),c=s("contrast"),u=s("grayscale"),d=s("hueRotate"),f=s("invert"),p=s("gap"),b=s("gradientColorStops"),_=s("inset"),O=s("margin"),z=s("opacity"),E=s("padding"),I=s("saturate"),S=s("scale"),P=s("sepia"),N=s("skew"),A=s("space"),G=s("translate"),T=function(){return["auto","contain","none"]},L=function(){return["auto","hidden","clip","visible","scroll"]},R=function(){return["auto",r]},U=function(){return["",m]},W=function(){return["auto",w]},Z=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},H=function(){return["solid","dashed","dotted","double","none"]},$=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},B=function(){return["start","end","center","between","around","evenly"]},D=function(){return["","0",k]},K=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]};return{cacheSize:500,theme:{colors:[C],spacing:[m],blur:["none","",j,v],brightness:[w],borderColor:[e],borderRadius:["none","","full",j,v],borderSpacing:[r],borderWidth:U(),contrast:[w],grayscale:D(),hueRotate:[w],invert:D(),gap:[r],gradientColorStops:[e],inset:R(),margin:R(),opacity:[w],padding:[r],saturate:[w],scale:[w],sepia:D(),skew:[w,k],space:[r],translate:[r]},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[j]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Z(),[k])}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:[w]}],basis:[{basis:[r]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",w]}],"grid-cols":[{"grid-cols":[C]}],"col-start-end":[{col:["auto",{span:[w]}]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[C]}],"row-start-end":[{row:["auto",{span:[w]}]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:B()}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:[].concat(B(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(B(),["baseline","stretch"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[O]}],mx:[{mx:[O]}],my:[{my:[O]}],mt:[{mt:[O]}],mr:[{mr:[O]}],mb:[{mb:[O]}],ml:[{ml:[O]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",r]}],"min-w":[{"min-w":["min","max","fit",m]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[j]},j,v]}],h:[{h:[r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",m]}],"max-h":[{"max-h":[r,"min","max","fit"]}],"font-size":[{text:["base",j,v]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",x]}],"font-family":[{font:[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",v]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",m]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[z]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[z]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(H(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",m]}],"underline-offset":[{"underline-offset":["auto",m]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[r]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",v]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap"]}],break:[{break:["normal","words","all","keep"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[z]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Z(),[h])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",g]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},y]}],"bg-color":[{bg:[e]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[z]}],"border-style":[{border:[].concat(H(),["hidden"])}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[z]}],"divide-style":[{divide:H()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(H())}],"outline-offset":[{"outline-offset":[m]}],"outline-w":[{outline:[m]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[z]}],"ring-offset-w":[{"ring-offset":[m]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",j,M]}],"shadow-color":[{shadow:[C]}],opacity:[{opacity:[z]}],"mix-blend":[{"mix-blend":$()}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",j,k]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[I]}],sepia:[{sepia:[P]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[z]}],"backdrop-saturate":[{"backdrop-saturate":[I]}],"backdrop-sepia":[{"backdrop-sepia":[P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:[w]}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:[w]}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[w,k]}],"translate-x":[{"translate-x":[G]}],"translate-y":[{"translate-y":[G]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[r]}],"scroll-mx":[{"scroll-mx":[r]}],"scroll-my":[{"scroll-my":[r]}],"scroll-mt":[{"scroll-mt":[r]}],"scroll-mr":[{"scroll-mr":[r]}],"scroll-mb":[{"scroll-mb":[r]}],"scroll-ml":[{"scroll-ml":[r]}],"scroll-p":[{"scroll-p":[r]}],"scroll-px":[{"scroll-px":[r]}],"scroll-py":[{"scroll-py":[r]}],"scroll-pt":[{"scroll-pt":[r]}],"scroll-pr":[{"scroll-pr":[r]}],"scroll-pb":[{"scroll-pb":[r]}],"scroll-pl":[{"scroll-pl":[r]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[m,x]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-t","rounded-r","rounded-b","rounded-l","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]}}})}}]);