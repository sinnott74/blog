var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,o)=>{for(var r in o||(o={}))a.call(o,r)&&i(e,r,o[r]);if(t)for(var r of t(o))n.call(o,r)&&i(e,r,o[r]);return e};import{W as r,q as l,R as s,r as p,T as c,w as m,C as d,S as g,a as h,N as y,A as u,c as f,$ as x,G as _,b,B as E,d as k}from"./vendor.0d5e54d3.js";let T;const w={},S=function(e,t){if(!t||0===t.length)return e();if(void 0===T){const e=document.createElement("link").relList;T=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in w)return;w[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":T,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},I=r`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(450deg);
  }
`,D=r`
  0% {
    stroke-dasharray: 2, 85.964;
    transform: rotate(0);
  }

  50% {
    stroke-dasharray: 65.973, 21.9911;
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dasharray: 2, 85.964;
    stroke-dashoffset: -65.973;
    transform: rotate(90deg);
  }
`,v=l.div.withConfig({displayName:"styled__Container",componentId:"sc-11yp0xg-0"})(["left:50%;top:50%;position:absolute;transform:translate(-50%,-50%);"]),C=l.circle.withConfig({displayName:"styled__Circle",componentId:"sc-11yp0xg-1"})(["box-sizing:border-box;stroke:",";stroke-width:3px;transform-origin:50%;animation:"," 1.6s cubic-bezier(0.4,0,0.2,1) infinite,"," 1.6s linear infinite;"],(e=>e.theme.palette.primary.main),D,I),z=({size:e=48,className:t})=>s.createElement(v,{"data-testid":"spinner",className:t},s.createElement("svg",{"data-testid":"spinner-svg",viewBox:"0 0 32 32",width:e,height:e},s.createElement(C,{cx:"16",cy:"16",r:"14",fill:"none"}))),j=s.lazy((()=>S((()=>import("./And God said let there be light.5e141a29.js")),["/blog/assets/And God said let there be light.5e141a29.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),A=s.lazy((()=>S((()=>import("./Books to read in 2020.b338c2e0.js")),["/blog/assets/Books to read in 2020.b338c2e0.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),M=s.lazy((()=>S((()=>import("./Come to the darkside.1e5c18d6.js")),["/blog/assets/Come to the darkside.1e5c18d6.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),P=s.lazy((()=>S((()=>import("./Deploying Docker on Cloud Foundry.93f5a2b0.js")),["/blog/assets/Deploying Docker on Cloud Foundry.93f5a2b0.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),L=s.lazy((()=>S((()=>import("./Divide and Conquer.1b89326c.js")),["/blog/assets/Divide and Conquer.1b89326c.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),R=s.lazy((()=>S((()=>import("./Health checks.32c24a95.js")),["/blog/assets/Health checks.32c24a95.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),O=s.lazy((()=>S((()=>import("./Here take this, its a placebo!.cbe467aa.js")),["/blog/assets/Here take this, its a placebo!.cbe467aa.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),N=s.lazy((()=>S((()=>import("./Inaugural post.9677058b.js")),["/blog/assets/Inaugural post.9677058b.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),V=s.lazy((()=>S((()=>import("./It takes 21 days to form a habit.d22c23a6.js")),["/blog/assets/It takes 21 days to form a habit.d22c23a6.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),F=s.lazy((()=>S((()=>import("./Javascripts own ThreadLocal.e5826073.js")),["/blog/assets/Javascripts own ThreadLocal.e5826073.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),Z=s.lazy((()=>S((()=>import("./Managing the worlds most valuable resource.2185b89d.js")),["/blog/assets/Managing the worlds most valuable resource.2185b89d.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),$=s.lazy((()=>S((()=>import("./Metadata is the new meta.af7daef9.js")),["/blog/assets/Metadata is the new meta.af7daef9.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),B=s.lazy((()=>S((()=>import("./Microservices with GoKit.be949784.js")),["/blog/assets/Microservices with GoKit.be949784.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),J=s.lazy((()=>S((()=>import("./My body is a temple.94f2cc99.js")),["/blog/assets/My body is a temple.94f2cc99.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),H=s.lazy((()=>S((()=>import("./My type(script) of code.88fa7d33.js")),["/blog/assets/My type(script) of code.88fa7d33.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),G=s.lazy((()=>S((()=>import("./One month at a time.cb09b4ca.js")),["/blog/assets/One month at a time.cb09b4ca.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),W=s.lazy((()=>S((()=>import("./Piece of mind.26830a8d.js")),["/blog/assets/Piece of mind.26830a8d.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),q=s.lazy((()=>S((()=>import("./Small margins make the difference.b599aac4.js")),["/blog/assets/Small margins make the difference.b599aac4.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),K=s.lazy((()=>S((()=>import("./So it begins.5484f73b.js")),["/blog/assets/So it begins.5484f73b.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),U=s.lazy((()=>S((()=>import("./Stand up straight with your shoulders back.9f039473.js")),["/blog/assets/Stand up straight with your shoulders back.9f039473.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),X=s.lazy((()=>S((()=>import("./State of the pagination.100f0524.js")),["/blog/assets/State of the pagination.100f0524.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),Y=s.lazy((()=>S((()=>import("./Task, Microtasks and Automobiles.95af1063.js")),["/blog/assets/Task, Microtasks and Automobiles.95af1063.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),Q=s.lazy((()=>S((()=>import("./The little things.8574118c.js")),["/blog/assets/The little things.8574118c.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),ee=s.lazy((()=>S((()=>import("./The mind wanders.f9057693.js")),["/blog/assets/The mind wanders.f9057693.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),te=s.lazy((()=>S((()=>import("./Youre my Hero.67d1de43.js")),["/blog/assets/Youre my Hero.67d1de43.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/mdx-react.modern.650372c4.js"]))),ae={home:"/",blogPost:e=>`/blog/${e}`,about:"/about"},ne=p.exports.lazy((()=>S((()=>import("./BlogList.27244625.js")),["/blog/assets/BlogList.27244625.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/Page.f588fedb.js","/blog/assets/LazyImage.9916956a.js"]))),ie=p.exports.lazy((()=>S((()=>import("./About.f3fee58f.js")),["/blog/assets/About.f3fee58f.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/Page.f588fedb.js"]))),oe=p.exports.lazy((()=>S((()=>import("./BlogPost.d242690c.js")),["/blog/assets/BlogPost.d242690c.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/LazyImage.9916956a.js","/blog/assets/Page.f588fedb.js","/blog/assets/mdx-react.modern.650372c4.js"]))),re=p.exports.lazy((()=>S((()=>import("./404.6c68a984.js")),["/blog/assets/404.6c68a984.js","/blog/assets/vendor.0d5e54d3.js","/blog/assets/Page.f588fedb.js"]))),le=[{key:j,path:"/blog/4",exact:!0,component:j,data:{title:"And God said let there be light",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/SIZ0oeR.png",id:4,tags:["Monthly Challenge","January","Technical","ReactJS","NodeJS"],date:"Thu, 1st Feb 2018",created:"2018-02-02T12:31:36.533Z"}},{key:A,path:"/blog/28",exact:!0,component:A,data:{title:"Books to read in 2020",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/JIzLEcd.jpg",id:28,tags:["Personal","Books"],date:"Mon, 20th Apr 2020",created:"2020-04-20T03:51:33.869Z"}},{key:M,path:"/blog/23",exact:!0,component:M,data:{title:"Come to the darkside",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/mbaXHXs.png",id:23,tags:["Technical","ReactJS","IBMCloud","ReduxJS","Sass"],date:"Fri, 7th Sep 2018",created:"2018-09-07T15:13:42.270Z"}},{key:P,path:"/blog/25",exact:!0,component:P,data:{title:"Deploying Docker on Cloud Foundry",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/axoBYe2.png",id:25,tags:["Golang","Docker","IBMCloud","TravisCI","CI/CD","Cloud Foundry"],date:"Fri, 19th Oct 2018",created:"2018-10-19T14:53:50.019Z"}},{key:L,path:"/blog/21",exact:!0,component:L,data:{title:"Divide and Conquer",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/2Poehrs.png",id:21,tags:["Technical","ExpressJS","NGINX","Microservices"],date:"Mon, 9th Jul 2018",created:"2018-07-09T16:17:22.885Z"}},{key:R,path:"/blog/27",exact:!0,component:R,data:{title:"Health checks",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/r6PqWEc.png",id:27,tags:["Microservices","Golang","GoKit","Cloud Foundry"],date:"Tue, 6th Nov 2018",created:"2018-11-06T23:01:42.301Z"}},{key:O,path:"/blog/15",exact:!0,component:O,data:{title:"Small margins make the difference",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/xNfnvfr.jpg",id:15,tags:["Monthly Challenge","Personal","March","Vitamins"],date:"Sun, 1st Apr 2018",created:"2018-04-01T22:23:26.666Z"}},{key:N,path:"/blog/1",exact:!0,component:N,data:{title:"Inaugural post",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/slXcTqg.jpg",id:1,date:"Wed, 31st Jan 2018",created:"2018-01-31T15:10:23.288Z"}},{key:V,path:"/blog/2",exact:!0,component:V,data:{title:"It takes 21 days to form a habit",author:"Daniel Sinnott",id:2,tags:["Monthly Challenge"],date:"Wed, 31st Jan 2018",created:"2018-01-31T16:46:41.305Z"}},{key:F,path:"/blog/12",exact:!0,component:F,data:{title:"Javascript's own ThreadLocal",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/VPnnX8P.png",id:12,tags:["Javascript","AsyncHooks"],date:"Mon, 26th Mar 2018",created:"2018-03-26T14:47:05.542Z"}},{key:Z,path:"/blog/10",exact:!0,component:Z,data:{title:"Managing the world's most valuable resource",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/qlIM4k7.png",id:10,tags:["Monthly Challenge","Technical","February","Data","SQL"],date:"Thu, 1st Mar 2018",created:"2018-03-01T23:58:12.714Z"}},{key:$,path:"/blog/17",exact:!0,component:$,data:{title:"Metadata is the new meta",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/UNJ8ecB.png",id:17,tags:["Technical","Decorators","Typescript"],date:"Tue, 24th Apr 2018",created:"2018-04-24T13:08:34.299Z"}},{key:B,path:"/blog/26",exact:!0,component:B,data:{title:"Microservices with GoKit",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/4Ep7VSO.png",id:26,tags:["Technical","Microservices","Golang","GoKit"],date:"Fri, 2nd Nov 2018",created:"2018-11-02T20:27:52.341Z"}},{key:J,path:"/blog/5",exact:!0,component:J,data:{title:"My body is a temple",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/Z2TGSLA.jpg",id:5,tags:["Monthly Challenge","January","Personal","Healthy"],date:"Thu, 1st Feb 2018",created:"2018-02-01T15:29:13.953Z"}},{key:H,path:"/blog/18",exact:!0,component:H,data:{title:"My type(script) of code",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/V2exSsi.png",id:18,tags:["Monthly Challenge","Technical","Typescript","April"],date:"Tue, 1st May 2018",created:"2018-05-01T17:08:17.752Z"}},{key:G,path:"/blog/6",exact:!0,component:G,data:{title:"One month at a time",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/3Kz6L39.jpg",id:6,tags:["Monthly Challenge","February"],date:"Fri, 2nd Feb 2018",created:"2018-02-02T12:31:36.533Z"}},{key:W,path:"/blog/16",exact:!0,component:W,data:{title:"Piece of mind",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/3GLp5f0.jpg",id:16,tags:["Monthly Challenge","April","Testing","Mindfulness"],date:"Mon, 2nd Apr 2018",created:"2018-04-02T18:08:39.000Z"}},{key:q,path:"/blog/14",exact:!0,component:q,data:{title:"Small margins make the difference",author:"Daniel Sinnott",id:14,tags:["Monthly Challenge","Technical","March","UI"],date:"Sun, 1st Apr 2018",created:"2018-04-01T22:23:26.666Z"}},{key:K,path:"/blog/3",exact:!0,component:K,data:{title:"So it begins",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/SCNDoiY.jpg",id:3,tags:["Monthly Challenge","January"],date:"Wed, 31st Jan 2018",created:"2018-01-31T23:17:10.549Z"}},{key:U,path:"/blog/8",exact:!0,component:U,data:{title:"Stand up straight with your shoulders back",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/28GOePt.jpg",id:8,tags:["Monthly Challenge","Personal","February","Posture"],date:"Thu, 1st Mar 2018",created:"2018-03-01T23:56:34.510Z"}},{key:X,path:"/blog/24",exact:!0,component:X,data:{title:"State of the pagi-nation",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/ietahcb.png",id:24,tags:["Technical","ReactJS","Pagination"],date:"Mon, 10th Sep 2018",created:"2018-09-10T21:45:36.462Z"}},{key:Y,path:"/blog/7",exact:!0,component:Y,data:{title:"Task, Microtasks & Automobiles",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/BywnfLd.png",id:7,tags:["Javascript","Concurrency"],date:"Mon, 19th Feb 2018",created:"2018-02-19T14:51:43.729Z"}},{key:Q,path:"/blog/11",exact:!0,component:Q,data:{title:"The little things",author:"Daniel Sinnott",id:11,tags:["Monthly Challenge","March"],date:"Fri, 2nd Mar 2018",created:"2018-03-02T20:50:19.005Z"}},{key:ee,path:"/blog/19",exact:!0,component:ee,data:{title:"The mind wanders",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/FVgn9Tl.jpg",id:19,tags:["Monthly Challenge","Personal","April","Mindfulness"],date:"Tue, 1st May 2018",created:"2018-05-01T17:08:32.430Z"}},{key:te,path:"/blog/22",exact:!0,component:te,data:{title:"You're my Hero",author:"Daniel Sinnott",imageurl:"https://i.imgur.com/ZVaDnJx.png",id:22,tags:["Technical","Golang"],date:"Fri, 24th Aug 2018",created:"2018-08-24T12:31:53.699Z"}}].map((e=>({path:e.path,exact:e.exact,render:()=>s.createElement(oe,o({Post:e.component},e.data))}))),se=[{path:ae.home,exact:!0,component:ne},{path:ae.about,exact:!0,component:ie},...le,{path:void 0,component:re}],pe=l(c).withConfig({displayName:"Routes__StyledTransitionGroup",componentId:"sc-1kzzr7g-0"})(["display:flex;flex:1;flex-direction:row;overflow-x:hidden;"]);var ce=m((({location:e})=>s.createElement(pe,{className:"transition-group"},s.createElement(d,{key:e.key,timeout:{enter:150},classNames:"fade",exit:!1},s.createElement(p.exports.Suspense,{fallback:s.createElement(z,null)},s.createElement(g,null,se.map(((e,t)=>s.createElement(h,{key:t,path:e.path,exact:e.exact,render:e.render,component:e.component})))))))));const me=l.div.withConfig({displayName:"styled__Header",componentId:"sc-1lprjqa-0"})(["background:url(","),linear-gradient(90deg,#2d74da,#12a3b4);height:",";position:fixed;top:0;left:0;right:0;box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 2px 9px 1px rgba(0,0,0,0.12),0 4px 2px -2px rgba(0,0,0,0.2);display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:center;z-index:1;padding:",";"],"/blog/assets/bg-shapes.51f499f5.svg","56px",(e=>`0 ${e.theme.spacing}px`)),de=l.div.withConfig({displayName:"styled__Main",componentId:"sc-1lprjqa-1"})(["display:flex;min-height:calc(100% - ",");margin-top:",";"],"56px","56px"),ge=l.h1.withConfig({displayName:"styled__Heading1",componentId:"sc-1aodpf0-0"})(["font-family:",";color:",";font-weight:300;margin:0;font-size:",";"],(e=>e.theme.typography.fontFamily),(e=>e.alternative?e.theme.palette.background.main:e.theme.palette.text.main),(e=>3.75*e.theme.typography.fontSize+"px")),he=l.h2.withConfig({displayName:"styled__Heading2",componentId:"sc-1aodpf0-1"})(["font-family:",";color:",";font-weight:300;margin:0;font-size:",";"],(e=>e.theme.typography.fontFamily),(e=>e.alternative?e.theme.palette.background.main:e.theme.palette.text.main),(e=>2.5*e.theme.typography.fontSize+"px")),ye=l.h3.withConfig({displayName:"styled__Heading3",componentId:"sc-1aodpf0-2"})(["font-family:",";color:",";font-weight:400;margin:0;font-size:",";"],(e=>e.theme.typography.fontFamily),(e=>e.alternative?e.theme.palette.background.main:e.theme.palette.text.main),(e=>2.125*e.theme.typography.fontSize+"px")),ue=l.h4.withConfig({displayName:"styled__Heading4",componentId:"sc-1aodpf0-3"})(["font-family:",";color:",";font-weight:",";margin:0;font-size:",";"],(e=>e.theme.typography.fontFamily),(e=>e.alternative?e.theme.palette.background.main:e.theme.palette.text.main),(e=>e.theme.typography.fontWeight),(e=>1.5*e.theme.typography.fontSize+"px")),fe=l.h5.withConfig({displayName:"styled__Heading5",componentId:"sc-1aodpf0-4"})(["font-family:",";color:",";font-weight:400;margin:0;font-size:",";"],(e=>e.theme.typography.fontFamily),(e=>e.alternative?e.theme.palette.background.main:e.theme.palette.text.main),(e=>1.25*e.theme.typography.fontSize+"px")),xe=l.h6.withConfig({displayName:"styled__Heading6",componentId:"sc-1aodpf0-5"})(["font-family:",";color:",";font-weight:500;margin:0;font-size:",";"],(e=>e.theme.typography.fontFamily),(e=>e.alternative?e.theme.palette.background.main:e.theme.palette.text.main),(e=>`${e.theme.typography.fontSize}px`)),_e=l.p.withConfig({displayName:"styled__Text",componentId:"sc-1aodpf0-6"})(["font-family:",";color:",";font-weight:400;margin:0;line-height:",";font-size:",";"],(e=>e.theme.typography.fontFamily),(e=>{const t=e.secondary?"lighter":"main";return e.alternative?e.theme.palette.background[t]:e.theme.palette.text[t]}),(e=>1.5*e.theme.typography.fontSize+"px"),(e=>`${e.theme.typography.fontSize}px`)),be=l(y).withConfig({displayName:"Link__StyledNavLink",componentId:"sc-c2iwyf-0"})(["pointer-events:",";text-decoration:",";"],(({disabled:e})=>e?"none":"auto"),(({noDecorate:e})=>e?"none":"initial")),Ee=m((({className:e,activeClassName:t,exact:a,onClick:n,title:i,to:o,children:r,disabled:l,location:p,search:c,noDecorate:m,target:d,rel:g})=>s.createElement(be,{className:e,activeClassName:t,exact:a,onClick:n,title:i,disabled:l,noDecorate:m,target:d,to:{pathname:o,search:c,state:{from:p.pathname}},rel:Array.isArray(g)?g.join(" "):g},r))),ke=(e,t)=>"object"==typeof t?t[e]||void 0:t,Te=(e,t,a)=>{const n=t(),i=t(ke("mobile",a)),o=t(ke("tablet",a)),r=t(ke("desktop",a)),l=t(ke("wide",a));return u`
        ${`${e}: ${n}`};

        @media (min-width: 1920px) {
            ${`${e}: ${l}`};
        }
        @media (max-width: 1920px) {
            ${`${e}:${r}`};
        }
        @media (max-width: 1024px) {
            ${`${e}: ${o}`};
        }
        @media (max-width: 768px) {
            ${`${e}: ${i}`};
        }
    `},we={start:"initial",center:"center"},Se=(e="start")=>{var t;return null!=(t=we[e])?t:we.start},Ie={none:0,xxsmall:.25,xsmall:.5,small:1,medium:2,large:4,xlarge:8,xxlarge:16},De=(e,t=1)=>(a="small")=>{var n;const i=null!=(n=Ie[a])?n:1;return e*i*t+"px;"},ve={full:"100%"},Ce=e=>e&&ve[e]||"",ze={none:void 0,xsmall:640,small:768,medium:1024,large:1920},je=(e="none")=>{const t=ze[e];return t?t+"px":"initial"},Ae=e=>s.createElement(Me,o({as:e.component},e)),Me=l.div.withConfig({displayName:"Box__BoxInner",componentId:"sc-jeb5f0-0"})(["position:relative;"," "," display:flex;flex-direction:column;overflow:auto;"," "," "," "," "," "," margin:0;background-color:",";",""],(e=>Te("width",Ce,e.width)),(e=>Te("height",Ce,e.height)),(e=>Te("align-items",Se,e.align)),(e=>Te("padding",De(e.theme.spacing),e.spacing)),(e=>e.spacingTop?Te("padding-top",De(e.theme.spacing),e.spacingTop):""),(e=>e.spacingRight?Te("padding-right",De(e.theme.spacing),e.spacingRight):""),(e=>e.spacingBottom?Te("padding-bottom",De(e.theme.spacing),e.spacingBottom):""),(e=>e.spacingLeft?Te("padding-left",De(e.theme.spacing),e.spacingLeft):""),(e=>{return e.background&&(t=e.background,e.theme.palette.background[t]);var t}),(e=>e.maxWidth?Te("max-width",je,e.maxWidth):"")),Pe=l(Ae).withConfig({displayName:"styled__InnerCard",componentId:"sc-9cr8br-0"})(["transition-duration:0.15s;transition-property:box-shadow;border-radius:",";border-left:",";box-shadow:",";&:hover{box-shadow:",";}"],(e=>e.rounded?"4px":0),(e=>e.accent?`${e.theme.spacing/2}px solid ${e.theme.palette.primary.main}`:"none"),(e=>e.raised?e.theme.shadow.z1:"none"),(e=>e.hover?e.theme.shadow.z2:"")),Le=l.div.withConfig({displayName:"styled__InlineContainer",componentId:"sc-1ifzyou-0"})([""," "," display:flex;flex-wrap:wrap;flex-direction:row;",""],(e=>Te("margin-left",De(e.theme.spacing,-1),e.spacing)),(e=>Te("margin-top",De(e.theme.spacing,-1),e.spacing)),(e=>Te("justify-content",Se,e.align))),Re=l.div.withConfig({displayName:"styled__InlineItem",componentId:"sc-1ifzyou-1"})(["justify-content:flex-start;display:block;min-width:0;"," ",""],(e=>Te("padding-left",De(e.theme.spacing),e.spacing)),(e=>Te("padding-top",De(e.theme.spacing),e.spacing))),Oe=s.forwardRef((({children:e,spacing:t,align:a},n)=>{const i=s.Children.toArray(e).filter(Boolean);if(0===i.length)return null;const o=i.map((e=>s.createElement(Re,{spacing:t},e)));return s.createElement(Le,{ref:n,spacing:t,align:a},o)})),Ne=l.div.withConfig({displayName:"styled__StackContainer",componentId:"sc-anhu7z-0"})([""," max-width:100%;"],(e=>Te("margin-top",De(e.theme.spacing,-1),e.spacing))),Ve=l.div.withConfig({displayName:"styled__StackItem",componentId:"sc-anhu7z-1"})([""," width:100%;display:flex;flex-direction:column;",""],(e=>Te("padding-top",De(e.theme.spacing),e.spacing)),(e=>Te("align-items",Se,e.align))),Fe=s.forwardRef((({children:e,align:t,spacing:a},n)=>{const i=s.Children.toArray(e).filter(Boolean);if(0===i.length)return null;const o=i.map((e=>s.createElement(Ve,{align:t,spacing:a},e)));return s.createElement(Ne,{ref:n,spacing:a},o)})),Ze=l.div.withConfig({displayName:"styled__TilesContainer",componentId:"sc-ih5y7z-0"})(["display:flex;flex-wrap:wrap;align-items:stretch;justify-content:center;"," ",""],(e=>Te("margin-top",De(e.theme.spacing,-1),e.spacing)),(e=>Te("margin-left",De(e.theme.spacing,-1),e.spacing))),$e=l.div.withConfig({displayName:"styled__TilesItemContainer",componentId:"sc-ih5y7z-1"})(["",""],(e=>Te("flex",((e=1)=>`0 0 ${100/e}%`),e.columns))),Be=l.div.withConfig({displayName:"styled__TilesItem",componentId:"sc-ih5y7z-2"})(["height:100%;min-width:0;"," ",""],(e=>Te("padding-left",De(e.theme.spacing),e.spacing)),(e=>Te("padding-top",De(e.theme.spacing),e.spacing))),Je=s.forwardRef((({children:e,columns:t=1,spacing:a},n)=>{const i=s.Children.toArray(e).filter(Boolean);if(0===i.length)return null;const o=i.map((e=>s.createElement($e,{columns:t},s.createElement(Be,{spacing:a},e))));return s.createElement(Ze,{ref:n,spacing:a},o)})),He=({title:e="Sinnott",children:t,left:a,right:n})=>s.createElement(Ae,{height:"full",width:"full",spacing:"none"},s.createElement(me,null,s.createElement(Ae,{align:"center",width:"full"},a,s.createElement(Ee,{to:ae.home,noDecorate:!0},s.createElement(ue,null,e)),n)),s.createElement(de,null,t)),Ge="light",We="dark",qe=(()=>{const e=localStorage&&localStorage.getItem("prefers-color-scheme")||"";return e===Ge||e===We?e:null})()||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?We:Ge),Ke=p.exports.createContext({scheme:qe,setScheme:()=>{},toggleScheme:()=>{},isDarkMode:!1}),Ue=({children:e})=>{const[t,a]=p.exports.useState(qe);p.exports.useEffect((()=>{localStorage&&localStorage.setItem("prefers-color-scheme",t)}),[t]);const n=p.exports.useCallback((()=>{a((e=>e===Ge?We:Ge))}),[]),i=t===We;return s.createElement(Ke.Provider,{value:{scheme:Ge,setScheme:a,toggleScheme:n,isDarkMode:i}},e)},Xe=()=>p.exports.useContext(Ke),Ye=b.red,Qe=b.blue,et=b.orange,tt=b.grey,at={breakpoints:{xs:640,sm:768,md:1024,lg:1280,xl:1920},typography:{fontSize:16,fontFamily:["HAvenir","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"].join(","),fontWeight:400},shadow:{z0:"0px 1px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 2px 0px rgba(0, 0, 0, 0.12)",z1:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",z2:"0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",z3:"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);"},transition:"130ms ease-in",palette:{primary:{lighter:Qe[50],main:Qe[500],darker:Qe[700]},secondary:{lighter:et[50],main:et[500],darker:et[700]},warning:{lighter:Ye[50],main:Ye[500],darker:Ye[700]},background:{lighter:"#FFF",main:tt[200],darker:tt[300]},text:{lighter:tt[600],main:tt[900],darker:"#000"},grey:{lighter:"rgba(0,0,0,0.1)",main:tt[500],darker:tt[700]}},spacing:8},nt=o({},at);var it,ot;it=at,ot={palette:{background:{lighter:tt[700],main:tt[800],darker:tt[900]},text:{lighter:tt[50],main:tt[100],darker:tt[300]}}},f(it,ot);const rt=x`
  *, *::before, *::after {
     box-sizing: border-box;
    }
  html {
    background: ${e=>`${e.theme.palette.background.darker}`};
  }
`;var lt,st=(e=>()=>s.createElement(Ue,null,s.createElement(e,null)))((lt=()=>s.createElement(E,{basename:"/blog/"},s.createElement(He,null,s.createElement(ce,null))),()=>(Xe(),s.createElement(_,{theme:nt},s.createElement(rt,null),s.createElement(lt,null)))));k.render(s.createElement(st,null),document.getElementById("root"));export{Ae as B,ye as H,Oe as I,Ee as L,ae as R,Fe as S,_e as T,Je as a,Pe as b,ge as c,he as d,ue as e,fe as f,xe as g,Xe as u};