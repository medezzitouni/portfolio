(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(5425)}])},9:function(e,s,l){"use strict";var t=l(5893),a=l(7294),n=l(9473),i=l(4079),r=l(587);let c=e=>{let{data:s,bg_active:l="bg-white text-secondary",bg_inactive:c="bg-secondary text-white",filter:o,clear:d=()=>{}}=e,h=s||(0,n.v9)(e=>e.categories.data),m=(0,n.I0)(),x=o||(0,a.useCallback)(e=>{"All"==e?m((0,r.Zp)(null)):m((0,r.bR)(e))},[]);(0,a.useEffect)(()=>{m((0,i.jR)(null))},[]);let g=(0,a.useCallback)(e=>{m((0,i.Iv)(e)),x(e),d()},[]);return(0,t.jsx)(t.Fragment,{children:h.map((e,s)=>(0,t.jsx)("div",{onClick:()=>g(e.name),className:"\n                        mr-5 py-2 px-3 \n                        cursor-pointer \n                        font-mono text-sm \n                        shadow-sm shadow-black  \n                        ".concat(e.active?l:c,"\n                        rounded-full\n                    "),children:e.name},s))})};s.Z=c},6835:function(e,s,l){"use strict";l.d(s,{Z:function(){return v}});var t=l(5893),a=l(9008),n=l.n(a),i=l(1664),r=l.n(i),c=l(3750),o=l(1163),d=l(7294),h=l(9);let m=[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Articles",href:"/articles"}],x=()=>{let[e,s]=(0,d.useState)("");return(0,t.jsxs)("nav",{className:"",children:[(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsx)("button",{onClick:()=>s("filter"),type:"button",className:"text-sm inline-flex items-center rounded-full text-black p-2 bg-primary lg:hidden shadow-md shadow-black focus:outline-none focus:ring-2 focus:ring-gray-200 ",children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})})}),(0,t.jsx)("button",{onClick:()=>s("href"),type:"button",className:" text-sm inline-flex items-center text-black rounded-full p-2 bg-primary lg:hidden shadow-md shadow-black focus:outline-none focus:ring-2 focus:ring-gray-200",children:(0,t.jsx)("svg",{"aria-hidden":"true",className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})})]}),(0,t.jsx)("div",{id:"mega-menu",className:"\n        absolute\n        ".concat(e?"block":"hidden"," \n        flex flex-col justify-center items-center top-0 left-0 w-full h-[100%] bg-black bg-opacity-60 text-sm \n        "),children:(0,t.jsxs)("div",{className:"bg-secondary w-[80%] h-[50%] flex flex-col shadow-2xl shadow-black rounded-xl ",children:[(0,t.jsx)("div",{className:" relative top-5 right-5 ",children:(0,t.jsx)("div",{onClick:()=>s(""),className:" bg-primary bg-opacity-50 h-[35px] w-[35px] md:h-[50px] md:w-[50px] grid place-items-center text-2xl text-white rounded-full float-right ",children:"X"})}),"href"==e?(0,t.jsx)("ul",{className:"flex flex-col gap-3 font-bold text-2xl grow items-center justify-center",children:m.map((e,s)=>(0,t.jsx)("li",{children:(0,t.jsx)(r(),{href:e.href,className:"block px-6 md:py-2 text-white text-4xl md:text-7xl bg-primary bg-opacity-50 font-amatic hover:bg-gray-800 lg:hover:bg-transparent border-l-2 text-center","aria-current":"page",children:e.name})},s))}):(0,t.jsx)("div",{className:"flex flex-col gap-3 font-bold text-2xl  grow items-center justify-center",children:(0,t.jsx)(h.Z,{clear:()=>{setTimeout(()=>s(""),300)},bg_active:"bg-white text-black",bg_inactive:"bg-primary bg-opacity-60 text-white"})})]})})]})},g=[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Articles",href:"/articles"}],f=e=>{let{router:s,className:l="w-full px-6 lg:px-12  h-[12vh] mb-5 bg-secondary lg:shadow-sm lg:shadow-black flex flex-row"}=e;return(0,t.jsxs)("header",{className:l,children:[(0,t.jsx)("div",{className:"lg:basis-[20%] hidden lg:flex items-center",children:(0,t.jsx)("div",{onClick:()=>s.back(),className:"rounded-full bg-black",children:(0,t.jsx)(c.RVs,{className:"shadow-md shadow-black rounded-full",size:30})})}),(0,t.jsxs)("div",{className:"grow lg:basis-[60%] flex flex-row items-center justify-end",children:[(0,t.jsx)("div",{className:"flex order-last lg:order-none lg:hidden ",children:(0,t.jsx)(x,{})}),(0,t.jsx)("div",{className:" hidden lg:flex gap-6",children:g.map((e,s)=>(0,t.jsx)(r(),{className:"\n                            bg-primary \n                            py-1\n                            px-8\n                            w-fit\n                            \n                            rounded-full\n                            \n                            text-black\n                            font-amatic \n                            text-3xl\n\n                            grid\n                            place-items-center\n                            \n                            shadow-md\n                            shadow-black\n                        ",href:e.href,children:e.name},s))}),(0,t.jsx)("div",{className:"grow lg:grow-0 lg:ml-20 pt-2",children:(0,t.jsx)("img",{src:"/assets/profile.png",height:"60rem",width:"60rem",alt:"profile",className:""})})]})]})};var w=(0,o.withRouter)(f),u=l(1322);let p=()=>(0,t.jsx)("footer",{className:"h-[10vh] grid place-items-center",children:(0,t.jsx)("div",{className:"w-[70%] lg:w-1/3",children:(0,t.jsx)(u.Z,{vertical:!1,show:!1})})}),b=e=>{let{header:s=(0,t.jsx)(w,{}),children:l,footer:a=(0,t.jsx)(p,{})}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:"Methe"}),(0,t.jsx)("meta",{name:"description",content:"portfolio"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Amatic+SC&family=Comic+Neue&display=swap",rel:"stylesheet"})]}),(0,t.jsxs)("main",{className:"mx-auto lg:min-h-screen bg-primary",children:[s,l,a]})]})};var v=b},1322:function(e,s,l){"use strict";var t=l(5893);l(7294);let a=[{text:"Github",textColor:"black",href:"https://github.com/methe-1",svg:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"black",className:"bi bi-github",viewBox:"0 0 16 16",children:[(0,t.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})," "]})},{text:"Instagram",textColor:"purple",href:"https://www.instagram.com/methe.1/",svg:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"purple",className:"bi bi-instagram",viewBox:"0 0 16 16",children:[(0,t.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})," "]})},{text:"LinkedIn",textColor:"#0072b1",href:"https://www.linkedin.com/in/methe-1",svg:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"#0072b1",className:"bi bi-linkedin",viewBox:"0 0 16 16",children:[" ",(0,t.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})," "]})},{text:"Twitter",textColor:"#00acee",href:"https://twitter.com/methe___",svg:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"#00acee",className:"bi bi-twitter",viewBox:"0 0 16 16",children:[(0,t.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})," "]})},{text:"Resume",textColor:"black",href:"/assets/Resume.pdf",svg:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"dark",className:"bi bi-arrow-down-circle-fill  animate__animated animate__shakeX animate__slower animate__delay-1s animate__repeat-3	",viewBox:"0 0 16 16",children:[" ",(0,t.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})," "]})}],n=e=>{let{show:s=!0,vertical:l=!0}=e;return(0,t.jsx)("div",{className:"\n            grid \n            grid-cols-5 ".concat(l&&"lg:grid-cols-1","\n            mx-6 ").concat(l&&"lg:mx-0"," \n            place-items-center\n          "),children:a.map((e,l)=>(0,t.jsx)("div",{className:"my-3",children:(0,t.jsxs)("a",{href:e.href,target:"_blank",rel:"noreferrer",className:"grid place-items-center",children:[(0,t.jsx)("span",{children:e.svg}),(0,t.jsx)("span",{style:{color:e.textColor},className:" hidden ".concat(s?"lg:inline":"lg:hidden"),children:e.text})]})},l))})};s.Z=n},5425:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return x}});var t=l(5893);l(2495);var a=l(6835),n=l(7522),i=l.n(n),r=l(7516),c=l(7294),o=l(1322),d=l(1664),h=l.n(d);let m=()=>{let[e,s]=(0,c.useState)(!1),l=()=>s(!e);return(0,t.jsx)("div",{className:"min-h-screen",children:(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,t.jsxs)("div",{className:" h-[6.8vh] ".concat(e?"lg:basis-1/6":"lg:basis-1/12"),children:[(0,t.jsx)("div",{className:"w-full h-[8vh] hidden lg:grid lg:place-items-end ",children:(0,t.jsx)("button",{onClick:l,className:"bg-black z-10 -mr-4 rounded-full p-1.5 shadow-md shadow-black",children:e?(0,t.jsx)(r.gbs,{size:20}):(0,t.jsx)(r.lU2,{size:20})})}),(0,t.jsx)(o.Z,{show:e})]}),(0,t.jsx)("div",{className:"\n              bg-secondary lg:h-screen \n              flex flex-col items-center\n              justify-center\n              ".concat(e?"lg:basis-1/3":"lg:basis-5/12","\n              h-[30vh]\n            "),children:(0,t.jsxs)("div",{className:[i().text_shadow,"font-amatic text-5xl no-italic font-normal uppercase leading-[61px] text-black"].join(" "),children:["Hi there, i’M",(0,t.jsx)("div",{className:"backdrop-blur-sm font-bold",children:"Methe"}),"Software Engineer"]})}),(0,t.jsx)("div",{className:"\n          h-[63.2vh] lg:h-screen \n          lg:basis-1/2\n          grid place-items-center\n        ",children:(0,t.jsxs)("div",{className:"w-full flex flex-col items-center",children:[(0,t.jsx)("div",{className:"w-[40%] lg:w-[50%]",children:(0,t.jsx)("img",{src:"/assets/profile.png",alt:"profile"})}),(0,t.jsx)("div",{className:"w-[70%] md:w-[50%] shadow-2xl shadow-black rounded-full",children:(0,t.jsx)(h(),{href:"/projects",className:"\n                    block\n                    p-4 \n                    bg-black \n                    rounded-full\n                    font-normal\n                    font-amatic\n                    text-2xl \n                    text-center\n                    text-white \n                    leading-[30px] \n                    uppercase\n                    hover:bg-[#2EE59D]\n                    hover:text-black\n                  ",children:"SEE MY WORK"})})]})})]})})};function x(){return(0,t.jsx)(a.Z,{header:null,footer:null,children:(0,t.jsx)(m,{})})}},7522:function(e){e.exports={text_shadow:"home_text_shadow__438fR"}},2495:function(){}},function(e){e.O(0,[13,874,831,130,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);