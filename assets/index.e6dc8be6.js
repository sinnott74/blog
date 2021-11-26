var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,s=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&a(e,r,t[r]);if(i)for(var r of i(t))o.call(t,r)&&a(e,r,t[r]);return e};import{r as l,W as c,A as d,q as p,R as h}from"./vendor.f315bbe5.js";import{T as m,I as u}from"./index.2abad378.js";const g=c`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,f=d`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    top: 0;
    left: 0;
    position: absolute;
    animation: ${e=>e.animate?d`
                  ${"0.5s"} ${g}
              `:""};
`,b=p.div.withConfig({displayName:"styled__Container",componentId:"sc-dr5vhf-0"})(["position:relative;width:100%;height:100%;padding-top:",";"],(({ratio:e})=>100*e+"%")),v=p((function(e){return l.exports.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 500",preserveAspectRatio:"xMidYMin slice"},e),l.exports.createElement("path",{d:"M0,0h1000v500H0",xfill:"#DCDCDC"}))})).withConfig({displayName:"styled__Placeholder",componentId:"sc-dr5vhf-1"})([""," animation-fill-mode:backwards;fill:",";"],f,(e=>e.theme.palette.background.darker)),y=p.img.withConfig({displayName:"styled__Initial",componentId:"sc-dr5vhf-2"})([""," animation-fill-mode:backwards;"],f),w=p.img.withConfig({displayName:"styled__Lazy",componentId:"sc-dr5vhf-3"})([""," opacity:0;animation-fill-mode:forwards;"],f);var x=new Map,k=new WeakMap,C=0;function E(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(k.has(r)||(C+=1,k.set(r,C.toString())),k.get(r)):"0":e[t]);var r})).toString()}function O(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var i=function(e){var t=E(e),r=x.get(t);if(!r){var i,n=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var r,o=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((function(e){e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},x.set(t,r)}return r}(r),n=i.id,o=i.observer,a=i.elements,s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),x.delete(n))}}const I=({src:e,initialSrc:t,alt:r,title:i,className:n,onClick:o,heightToWidthRatio:a})=>{const[s,c]=function(e){var t=void 0===e?{}:e,r=t.threshold,i=t.delay,n=t.trackVisibility,o=t.rootMargin,a=t.root,s=t.triggerOnce,c=t.skip,d=t.initialInView,p=l.exports.useRef(),h=l.exports.useState({inView:!!d}),m=h[0],u=h[1],g=l.exports.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),c||e&&(p.current=O(e,(function(e,t){u({inView:e,entry:t}),t.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)}),{root:a,rootMargin:o,threshold:r,trackVisibility:n,delay:i}))}),[Array.isArray(r)?r.toString():r,a,o,s,c,n,i]);l.exports.useEffect((function(){p.current||!m.entry||s||c||u({inView:!!d})}));var f=[g,m.inView,m.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}({triggerOnce:!0}),[d,p]=l.exports.useState(!0),[m,u]=l.exports.useState(!!t),[g,f]=l.exports.useState(!1),x=(({heightToWidthRatio:e,src:t})=>e||t&&t.split("#")[1]&&parseInt(t.split("#")[1])||.5)({heightToWidthRatio:a,src:e});return h.createElement(b,{ratio:x,className:n,ref:s,onClick:o},d&&h.createElement(v,null),m&&h.createElement(y,{src:t,alt:r,title:i,animate:m,onLoad:()=>{u(!0)},onAnimationEnd:()=>{p(!1)}}),c&&h.createElement(w,{src:e,alt:r,title:i,animate:g,onLoad:()=>{f(!0)},onAnimationEnd:()=>{p(!1),u(!1)}}))},_=/(.*)(\.)(jpg|png)(.*)/,j=e=>{var a=e,{src:l}=a,c=((e,t)=>{var r={};for(var a in e)n.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&o.call(e,a)&&(r[a]=e[a]);return r})(a,["src"]);const d=l.replace(_,((e,t,r,i,n)=>`${t}t.${i}${n}`));return h.createElement(I,(p=s({},c),t(p,r({src:l,initialSrc:d}))));var p};const S=p.button.withConfig({displayName:"styled__Container",componentId:"sc-q6174j-0"})(["background:",";border:0;border-radius:1rem;padding:",";transition-duration:0.15s;transition-property:box-shadow,background;outline-style:none;&:hover{background:",";}&:active{box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);}"],(e=>e.theme.palette.background.main),(e=>e.theme.spacing/2+"px"),(e=>e.theme.palette.text.lighter)),V=p(m).withConfig({displayName:"styled__Label",componentId:"sc-q6174j-1"})(["display:inline-block;color:",";transition-duration:0.15s;transition-property:color;min-height:1.5rem;line-height:1.5rem;padding:",";margin:0;",":hover &{color:",";}"],(e=>e.theme.palette.text.main),(e=>`0 ${e.theme.spacing}px`),S,(e=>e.theme.palette.background.lighter)),M=p((function(e){return l.exports.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24"},e),l.exports.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}))})).withConfig({displayName:"styled__Close",componentId:"sc-q6174j-2"})(["display:block;cursor:pointer;transition-duration:0.15s;transition-property:fill;fill:",";",":hover &{fill:",";}"],(e=>e.theme.palette.text.main),S,(e=>e.theme.palette.background.lighter)),N=({children:e,closeable:t,onClick:r})=>h.createElement(S,{"data-testid":"chip",onClick:r},h.createElement(u,{spacing:"none"},h.createElement(V,null,e),t&&h.createElement(M,{"data-testid":"chip.close-btn"}))),A=({tags:e,onTagClick:t,align:r,closeable:i})=>h.createElement(u,{spacing:"xxsmall",align:r},e.filter(Boolean).map((e=>h.createElement(N,{key:e,onClick:()=>{t&&t(e)},closeable:i},e))));export{j as L,A as T};
