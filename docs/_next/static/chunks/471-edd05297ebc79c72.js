(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},4184:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)i.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,g=e.priority,h=void 0!==g&&g,x=e.loading,k=e.lazyRoot,E=void 0===k?null:k,_=e.lazyBoundary,I=e.className,P=e.quality,R=e.width,N=e.height,C=e.style,M=e.objectFit,L=e.objectPosition,$=e.onLoadingComplete,q=e.placeholder,W=void 0===q?"empty":q,B=e.blurDataURL,D=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=s.useContext(d.ImageConfigContext),U=s.useMemo((function(){var e=y||Z||c.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[Z]),F=D,H=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(H=F.layout),delete F.layout);var V=A;if("loader"in F){if(F.loader){var T=F.loader;V=function(e){e.config;var t=m(e,["config"]);return T(t)}}delete F.loader}var G="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var J=S(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(B=B||J.blurDataURL,G=J.src,(!H||"fill"!==H)&&(N=N||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Q=!h&&("lazy"===x||"undefined"===typeof x);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(f=!0,Q=!1);b.has(t)&&(Q=!1);v&&(f=!0);var K,X=r(s.useState(!1),2),Y=X[0],ee=X[1],te=r(u.useIntersection({rootRef:E,rootMargin:_||"200px",disabled:!Q}),3),ne=te[0],ie=te[1],re=te[2],oe=!Q||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:L},ue=j(R),de=j(N),fe=j(P);0;var pe=Object.assign({},C,ce),ge="blur"!==W||Y?{}:{backgroundSize:M||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===H)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var me=de/ue,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===H?(ae.display="block",ae.position="relative",le=!0,se.paddingTop=he):"intrinsic"===H?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",le=!0,se.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===H&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};oe&&(ve=z({config:U,src:t,unoptimized:f,layout:H,width:ue,quality:fe,sizes:n,loader:V}));var ye=t;0;var be,we="imagesrcset",xe="imagesizes";we="imageSrcSet",xe="imageSizes";var Se=(i(be={},we,ve.srcSet),i(be,xe,ve.sizes),be),ze=s.default.useLayoutEffect,je=s.useRef($),Ae=s.useRef(t);s.useEffect((function(){je.current=$}),[$]),ze((function(){Ae.current!==t&&(re(),Ae.current=t)}),[re,t]);var ke=p({isLazy:Q,imgAttributes:ve,heightInt:de,widthInt:ue,qualityInt:fe,layout:H,className:I,imgStyle:pe,blurStyle:ge,loading:x,config:U,unoptimized:f,placeholder:W,loader:V,srcString:ye,onLoadingCompleteRef:je,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},F);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:ae},le?s.default.createElement("span",{style:se},K?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,s.default.createElement(O,Object.assign({},ke))),h?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},Se))):null)};var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),l=(a=n(5443))&&a.__esModule?a:{default:a},c=n(9309),u=n(7190),d=n(9977),f=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function g(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function m(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default"}||{},v=h.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default"},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(E(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(E(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(E(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function z(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,s=e.quality,l=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(i);s)c.push(parseInt(s[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,o(c));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,l),d=u.widths,f=u.kind,p=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:s,width:d[p]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=x.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,i,r,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var O=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,l=e.blurStyle,c=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,g=e.config,h=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,x=e.onLoad,S=e.onError,j=(e.isVisible,e.noscriptSizes),A=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=c?"lazy":d,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":r,className:o,style:p({},a,l),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&k(e,f,0,u,y,b)}),[w,f,r,u,y,b]),onLoad:function(e){k(e.currentTarget,f,0,u,y,b),x&&x(e)},onError:function(e){"blur"===u&&b(!0),S&&S(e)}})),(c||"blur"===u)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},A,z({config:g,src:f,unoptimized:h,layout:r,width:n,quality:i,sizes:j,loader:v}),{decoding:"async","data-nimg":r,style:a,className:o,loading:d}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,u=r.useRef(),d=i(r.useState(!1),2),f=d[0],p=d[1],g=i(r.useState(null),2),m=g[0],h=g[1];r.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),c||f)return;return m&&m.tagName&&(u.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=s.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},l.push(n),s.set(n,t),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),s.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,c,n,t,f]);var v=r.useCallback((function(){p(!1)}),[]);return[h,f,v]};var r=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var s=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,n){e.exports=n(8045)},1555:function(e,t,n){"use strict";var i=n(4184),r=n.n(i),o=n(7294),a=n(6792),s=n(5893);const l=o.forwardRef(((e,t)=>{const[{className:n,...i},{as:o="div",bsPrefix:l,spans:c}]=function({as:e,bsPrefix:t,className:n,...i}){t=(0,a.vE)(t,"col");const o=(0,a.pi)(),s=[],l=[];return o.forEach((e=>{const n=i[e];let r,o,a;delete i[e],"object"===typeof n&&null!=n?({span:r,offset:o,order:a}=n):r=n;const c="xs"!==e?`-${e}`:"";r&&s.push(!0===r?`${t}${c}`:`${t}${c}-${r}`),null!=a&&l.push(`order${c}-${a}`),null!=o&&l.push(`offset${c}-${o}`)})),[{...i,className:r()(n,...s,...l)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,s.jsx)(o,{...i,ref:t,className:r()(n,!c.length&&l)})}));l.displayName="Col",t.Z=l},682:function(e,t,n){"use strict";var i=n(4184),r=n.n(i),o=n(7294),a=n(6792),s=n(5893);const l=o.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:i,...o},l)=>{const c=(0,a.vE)(e,"container"),u="string"===typeof t?`-${t}`:"-fluid";return(0,s.jsx)(n,{ref:l,...o,className:r()(i,t?`${c}${u}`:c)})}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},1608:function(e,t,n){"use strict";var i=n(4184),r=n.n(i),o=n(7294),a=n(6792),s=n(5893);const l=o.forwardRef((({bsPrefix:e,className:t,as:n="div",...i},o)=>{const l=(0,a.vE)(e,"row"),c=(0,a.pi)(),u=`${l}-cols`,d=[];return c.forEach((e=>{const t=i[e];let n;delete i[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r="xs"!==e?`-${e}`:"";null!=n&&d.push(`${u}${r}-${n}`)})),(0,s.jsx)(n,{ref:o,...i,className:r()(t,l,...d)})}));l.displayName="Row",t.Z=l},6792:function(e,t,n){"use strict";n.d(t,{pi:function(){return c},vE:function(){return l}});var i=n(7294);n(5893);const r=["xxl","xl","lg","md","sm","xs"],o=i.createContext({prefixes:{},breakpoints:r}),{Consumer:a,Provider:s}=o;function l(e,t){const{prefixes:n}=(0,i.useContext)(o);return e||n[t]||t}function c(){const{breakpoints:e}=(0,i.useContext)(o);return e}}}]);