import{r as e,R as t,P as r,o as n}from"./vendor.741606fd.js";import{B as o}from"./index.64c71c2d.js";var i,a=e.exports,c=(i=a)&&"object"==typeof i&&"default"in i?i.default:i;function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);var l=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var o,i=[];function l(){o=e(i.map((function(e){return e.props}))),f.canUseDOM?t(o):r&&(o=r(o))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return o},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,i=[],e};var u=a.prototype;return u.UNSAFE_componentWillMount=function(){i.push(this),l()},u.componentDidUpdate=function(){l()},u.componentWillUnmount=function(){var e=i.indexOf(this);i.splice(e,1),l()},u.render=function(){return c.createElement(n,this.props)},a}(a.PureComponent);return u(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),u(f,"canUseDOM",s),f}},f="undefined"!=typeof Element,p="function"==typeof Map,d="function"==typeof Set,y="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function h(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var r,n,o,i;if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!h(e[n],t[n]))return!1;return!0}if(p&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!h(n.value[1],t.get(n.value[0])))return!1;return!0}if(d&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(y&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((r=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if(f&&e instanceof Element)return!1;for(n=r;0!=n--;)if(("_owner"!==o[n]&&"__v"!==o[n]&&"__o"!==o[n]||!e.$$typeof)&&!h(e[o[n]],t[o[n]]))return!1;return!0}return e!=e&&t!=t}var m=function(e,t){try{return h(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},b="bodyAttributes",T="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(g).map((function(e){return g[e]}));var w,A,O,C,S="charset",E="cssText",j="href",P="http-equiv",k="innerHTML",L="itemprop",x="name",I="property",M="rel",N="src",R="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",D="defer",H="encodeSpecialCharacters",q="onChangeClientState",Y="titleTemplate",F=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),U=[g.NOSCRIPT,g.SCRIPT,g.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=re(e,g.TITLE),r=re(e,Y);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=re(e,B);return t||n||void 0},X=function(e){return re(e,q)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},ee=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},te=function(e,t,r){var o={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ce("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,n=Object.keys(e),a=0;a<n.length;a++){var c=n[a],u=c.toLowerCase();-1===t.indexOf(u)||r===M&&"canonical"===e[r].toLowerCase()||u===M&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==k&&c!==E&&c!==L||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return o[r]||(o[r]={}),i[r]||(i[r]={}),!o[r][s]&&(i[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),c=0;c<a.length;c++){var u=a[c],s=n({},o[u],i[u]);o[u]=s}return e}),[]).reverse()},re=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ne=(w=Date.now(),function(e){var t=Date.now();t-w>16?(w=t,e(t)):setTimeout((function(){ne(e)}),0)}),oe=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ne:global.requestAnimationFrame||ne,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||oe:global.cancelAnimationFrame||oe,ce=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,se=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;pe(g.BODY,n),pe(g.HTML,o),fe(f,p);var d={baseTag:de(g.BASE,r),linkTags:de(g.LINK,i),metaTags:de(g.META,a),noscriptTags:de(g.NOSCRIPT,c),scriptTags:de(g.SCRIPT,s),styleTags:de(g.STYLE,l)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},le=function(e){return Array.isArray(e)?e.join(""):e},fe=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),pe(g.TITLE,t)},pe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},de=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ye=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)},me=function(e,r,n){switch(e){case g.TITLE:return{toComponent:function(){return e=r.title,n=r.titleAttributes,(o={key:e})["data-react-helmet"]=!0,i=he(n,o),[t.createElement(g.TITLE,i,e)];var e,n,o,i},toString:function(){return function(e,t,r,n){var o=ye(r),i=le(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+J(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(i,n)+"</"+e+">"}(e,r.title,r.titleAttributes,n)}};case b:case T:return{toComponent:function(){return he(r)},toString:function(){return ye(r)}};default:return{toComponent:function(){return function(e,r){return r.map((function(r,n){var o,i=((o={key:n})["data-react-helmet"]=!0,o);return Object.keys(r).forEach((function(e){var t=_[e]||e;if(t===k||t===E){var n=r.innerHTML||r.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[t]=r[e]})),t.createElement(e,i)}))}(e,r)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===k||e===E)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+J(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,r,n)}}}},be=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:me(g.BASE,t,n),bodyAttributes:me(b,r,n),htmlAttributes:me(T,o,n),link:me(g.LINK,i,n),meta:me(g.META,a,n),noscript:me(g.NOSCRIPT,c,n),script:me(g.SCRIPT,u,n),style:me(g.STYLE,s,n),title:me(g.TITLE,{title:f,titleAttributes:p},n)}},Te=l((function(e){return{baseTag:ee([j,R],e),bodyAttributes:Z(b,e),defer:re(e,D),encode:re(e,H),htmlAttributes:Z(T,e),linkTags:te(g.LINK,[M,j],e),metaTags:te(g.META,[x,S,P,I,L],e),noscriptTags:te(g.NOSCRIPT,[k],e),onChangeClientState:X(e),scriptTags:te(g.SCRIPT,[N,k],e),styleTags:te(g.STYLE,[E],e),title:Q(e),titleAttributes:Z(v,e)}}),(function(e){ue&&ae(ue),e.defer?ue=ie((function(){se(e,(function(){ue=null}))})):(se(e),ue=null)}),be)((function(){return null})),ve=(A=Te,C=O=function(e){function r(){return K(this,r),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),r.prototype.shouldComponentUpdate=function(e){return!m(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return W({},n,((t={})[r.type]=[].concat(n[r.type]||[],[W({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return W({},o,((t={})[n.type]=a,t.titleAttributes=W({},i),t));case g.BODY:return W({},o,{bodyAttributes:W({},i)});case g.HTML:return W({},o,{htmlAttributes:W({},i)})}return W({},o,((r={})[n.type]=W({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=W({},t);return Object.keys(e).forEach((function(t){var n;r=W({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,r){var n=this,o={};return t.Children.forEach(e,(function(e){if(e&&e.props){var t=e.props,i=t.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)}($(t,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:r=n.mapObjectTypeChildren({child:e,newProps:r,newChildProps:a,nestedChildren:i})}}})),r=this.mapArrayTypeChildrenToProps(o,r)},r.prototype.render=function(){var e=this.props,r=e.children,n=$(e,["children"]),o=W({},n);return r&&(o=this.mapChildrenToProps(r,o)),t.createElement(A,o)},V(r,null,[{key:"canUseDOM",set:function(e){A.canUseDOM=e}}]),r}(t.Component),O.propTypes={base:r.object,bodyAttributes:r.object,children:r.oneOfType([r.arrayOf(r.node),r.node]),defaultTitle:r.string,defer:r.bool,encodeSpecialCharacters:r.bool,htmlAttributes:r.object,link:r.arrayOf(r.object),meta:r.arrayOf(r.object),noscript:r.arrayOf(r.object),onChangeClientState:r.func,script:r.arrayOf(r.object),style:r.arrayOf(r.object),title:r.string,titleAttributes:r.object,titleTemplate:r.string},O.defaultProps={defer:!0,encodeSpecialCharacters:!0},O.peek=A.peek,O.rewind=function(){var e=A.rewind();return e||(e=be({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},C);ve.renderStatic=ve.rewind;const ge=({title:e,children:r})=>t.createElement(o,{align:"center",width:"full",spacing:"medium"},t.createElement(ve,null,t.createElement("title",null,`${e} | DanielSinnott.com`)),r);export{ve as H,ge as P};
