(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},4184:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)i.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1897)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,h=e.priority,g=void 0!==h&&h,x=e.loading,N=e.lazyRoot,A=void 0===N?null:N,R=e.lazyBoundary,O=e.className,C=e.quality,E=e.width,I=e.height,P=e.style,M=e.objectFit,L=e.objectPosition,q=e.onLoadingComplete,B=e.placeholder,$=void 0===B?"empty":B,W=e.blurDataURL,H=p(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=s.useContext(d.ImageConfigContext),V=s.useMemo((function(){var e=y||D||c.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return m({},e,{allSizes:t,deviceSizes:n})}),[D]),U=H,F=n?"responsive":"intrinsic";"layout"in U&&(U.layout&&(F=U.layout),delete U.layout);var T=S;if("loader"in U){if(U.loader){var Z=U.loader;T=function(e){e.config;var t=p(e,["config"]);return Z(t)}}delete U.loader}var X="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=_(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(W=W||Q.blurDataURL,X=Q.src,(!F||"fill"!==F)&&(I=I||Q.height,E=E||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}var G=!g&&("lazy"===x||"undefined"===typeof x);((t="string"===typeof t?t:X).startsWith("data:")||t.startsWith("blob:"))&&(f=!0,G=!1);b.has(t)&&(G=!1);v&&(f=!0);var Y,J=r(s.useState(!1),2),K=J[0],ee=J[1],te=r(u.useIntersection({rootRef:A,rootMargin:R||"200px",disabled:!G}),3),ne=te[0],ie=te[1],re=te[2],oe=!G||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:L},ue=z(E),de=z(I),fe=z(C);0;var me=Object.assign({},P,ce),he="blur"!==$||K?{}:{backgroundSize:M||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===F)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var pe=de/ue,ge=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===F?(ae.display="block",ae.position="relative",le=!0,se.paddingTop=ge):"intrinsic"===F?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",le=!0,se.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===F&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};oe&&(ve=j({config:V,src:t,unoptimized:f,layout:F,width:ue,quality:fe,sizes:n,loader:T}));var ye=t;0;var be,we="imagesrcset",xe="imagesizes";we="imageSrcSet",xe="imageSizes";var _e=(i(be={},we,ve.srcSet),i(be,xe,ve.sizes),be),je=s.default.useLayoutEffect,ze=s.useRef(q),Se=s.useRef(t);s.useEffect((function(){ze.current=q}),[q]),je((function(){Se.current!==t&&(re(),Se.current=t)}),[re,t]);var Ne=m({isLazy:G,imgAttributes:ve,heightInt:de,widthInt:ue,qualityInt:fe,layout:F,className:O,imgStyle:me,blurStyle:he,loading:x,config:V,unoptimized:f,placeholder:$,loader:T,srcString:ye,onLoadingCompleteRef:ze,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},U);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:ae},le?s.default.createElement("span",{style:se},Y?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,s.default.createElement(k,Object.assign({},Ne))),g?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},_e))):null)};var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),l=(a=n(5443))&&a.__esModule?a:{default:a},c=n(9309),u=n(7190),d=n(9977),f=(n(3794),n(2392));function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m.apply(this,arguments)}function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function p(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||{},v=g.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(A(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(A(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(A(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,s=e.quality,l=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(i);s)c.push(parseInt(s[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,o(c));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,l),d=u.widths,f=u.kind,m=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:s,width:d[m]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=x.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(n))}function N(e,t,n,i,r,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,l=e.blurStyle,c=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,h=e.config,g=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,x=e.onLoad,_=e.onError,z=(e.isVisible,e.noscriptSizes),S=p(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=c?"lazy":d,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":r,className:o,style:m({},a,l),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&N(e,f,0,u,y,b)}),[w,f,r,u,y,b]),onLoad:function(e){N(e.currentTarget,f,0,u,y,b),x&&x(e)},onError:function(e){"blur"===u&&b(!0),_&&_(e)}})),(c||"blur"===u)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,j({config:h,src:f,unoptimized:g,layout:r,width:n,quality:i,sizes:z,loader:v}),{decoding:"async","data-nimg":r,style:a,className:o,loading:d}))))};function A(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,u=r.useRef(),d=i(r.useState(!1),2),f=d[0],m=d[1],h=i(r.useState(null),2),p=h[0],g=h[1];r.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),c||f)return;return p&&p.tagName&&(u.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=s.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},l.push(n),s.set(n,t),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),s.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(p,(function(e){return e&&m(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return m(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[p,c,n,t,f]);var v=r.useCallback((function(){m(!1)}),[]);return[g,f,v]};var r=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var s=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1897:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var i=n(5893),r=n(9008),o=n.n(r),a=n(4184),s=n.n(a),l=n(7294);const c=["xxl","xl","lg","md","sm","xs"],u=l.createContext({prefixes:{},breakpoints:c}),{Consumer:d,Provider:f}=u;function m(e,t){const{prefixes:n}=(0,l.useContext)(u);return e||n[t]||t}function h(){const{breakpoints:e}=(0,l.useContext)(u);return e}const p=l.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...o},a)=>{const l=m(e,"container"),c="string"===typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:a,...o,className:s()(r,t?`${l}${c}`:l)})}));p.displayName="Container",p.defaultProps={fluid:!1};var g=p,v=n(3853),y=n.n(v),b=function(e){var t=e.children;return(0,i.jsxs)(g,{fluid:!0,style:{minHeight:"100vh"},children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Methe"}),(0,i.jsx)("meta",{name:"description",content:"portfolio"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)("main",{className:y().main,children:t}),(0,i.jsx)("footer",{})]})},w=n(8549),x=n.n(w);const _=l.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},o)=>{const a=m(e,"row"),l=h(),c=`${a}-cols`,u=[];return l.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const i="xs"!==e?`-${e}`:"";null!=n&&u.push(`${c}${i}-${n}`)})),(0,i.jsx)(n,{ref:o,...r,className:s()(t,a,...u)})}));_.displayName="Row";var j=_;const z=l.forwardRef(((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:a,spans:l}]=function({as:e,bsPrefix:t,className:n,...i}){t=m(t,"col");const r=h(),o=[],a=[];return r.forEach((e=>{const n=i[e];let r,s,l;delete i[e],"object"===typeof n&&null!=n?({span:r,offset:s,order:l}=n):r=n;const c="xs"!==e?`-${e}`:"";r&&o.push(!0===r?`${t}${c}`:`${t}${c}-${r}`),null!=l&&a.push(`order${c}-${l}`),null!=s&&a.push(`offset${c}-${s}`)})),[{...i,className:s()(n,...o,...a)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,i.jsx)(o,{...r,ref:t,className:s()(n,!l.length&&a)})}));z.displayName="Col";var S=z,N=n(5675),k=n.n(N),A=function(){return(0,i.jsxs)(g,{fluid:!0,style:{minHeight:"50vh"},children:[(0,i.jsxs)(j,{className:x().upperRow,children:[(0,i.jsx)(S,{xs:6,sm:6,md:4,className:x().logo,children:(0,i.jsx)("div",{className:x().avatar,children:(0,i.jsx)(k(),{src:"/assets/profile.png",unoptimized:!0,height:"100%",width:"100%",alt:"profile"})})}),(0,i.jsx)(S,{xs:6,sm:6,md:4,className:x().coming,children:(0,i.jsx)("div",{className:"animate__animated animate__bounce animate__infinite animate__slower",children:" \ud83d\udc68\u200d\ud83d\udcbb Coming Soon\u2757  "})}),(0,i.jsx)(S,{xs:12,sm:12,md:4,className:x().download,children:(0,i.jsx)("div",{className:x().resume,children:(0,i.jsx)("div",{className:x().downloadButton,children:(0,i.jsx)("a",{href:"./Med_Resume.pdf",download:!0,children:"Download My Resume"})})})})]}),(0,i.jsxs)(j,{className:x().lowerRow+" justify-content-center",children:[(0,i.jsx)(S,{className:x().sm,xs:"auto",children:(0,i.jsx)("a",{href:"https://github.com/methe-1",target:"_blank",rel:"noreferrer",className:x().mouveup,children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"black",className:"bi bi-github",viewBox:"0 0 16 16",children:[" ",(0,i.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})," "]})})}),(0,i.jsx)(S,{className:x().sm,xs:"auto",children:(0,i.jsx)("a",{href:"https://github.com/methe-1",target:"_blank",rel:"noreferrer",className:x().mouveup,children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"purple",className:"bi bi-instagram",viewBox:"0 0 16 16",children:[" ",(0,i.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})," "]})})}),(0,i.jsx)(S,{className:x().sm,xs:"auto",children:(0,i.jsx)("a",{href:"https://github.com/methe-1",target:"_blank",rel:"noreferrer",className:x().mouveup,children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"#0072b1",className:"bi bi-linkedin",viewBox:"0 0 16 16",children:[" ",(0,i.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})," "]})})}),(0,i.jsx)(S,{className:x().sm,xs:"auto",children:(0,i.jsx)("a",{href:"https://github.com/methe-1",target:"_blank",rel:"noreferrer",className:x().mouveup,children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"#00acee",className:"bi bi-twitter",viewBox:"0 0 16 16",children:[" ",(0,i.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})," "]})})})]})]})},R=function(){return(0,i.jsx)(b,{children:(0,i.jsx)(A,{})})}},3853:function(e){e.exports={container:"Layout_container__S4aNf",main:"Layout_main__c1pHS",footer:"Layout_footer__mj7GQ",grid:"Layout_grid__oB4Ql"}},8549:function(e){e.exports={upperRow:"styles_upperRow__RkmR6",logo:"styles_logo__T2hYZ",avatar:"styles_avatar__qM3Rq",coming:"styles_coming__wERxk",download:"styles_download__4k2uI",resume:"styles_resume__FzK4Y",downloadButton:"styles_downloadButton__XXBdj",lowerRow:"styles_lowerRow__QaY8p",sm:"styles_sm__S2P8X",moveup:"styles_moveup__HyLWS"}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);