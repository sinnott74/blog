var r=Object.defineProperty;var s=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&m(e,a,t[a]);return e};import{R as l,I as d,d as i,r as u,b as p}from"./index.78f29dca.js";const E=e=>l.createElement(d,o({},e)),x=()=>{window.scrollTo(0,0)},b=({children:e})=>i.exports.createPortal(e,document.head),g=({title:e,children:t})=>(u.exports.useEffect(x,[e]),l.createElement(p,{width:"full",display:"flex",align:"center",spacing:{mobile:"xsmall",tablet:"medium",desktop:"medium",wide:"medium"},spacingTop:{mobile:"small",tablet:"medium",desktop:"medium",wide:"medium"}},l.createElement(b,null,l.createElement("title",null,`${e} | DanielSinnott.com`)),t));export{E as C,b as H,g as P,x as s};
