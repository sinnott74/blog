import{j as e}from"./jsx-runtime.677020d1.js";import{u as o}from"./index.d409b08a.js";import"./index.6de8143e.js";const l="Divide and Conquer",p="Daniel Sinnott",h="https://i.imgur.com/2Poehrs.png",d=21,x=["Technical","ExpressJS","NGINX","Microservices"],g="Mon, 9th Jul 2018",u=new Date(1531153042885);function m(n={}){const{wrapper:r}=Object.assign({},o(),n.components);return r?e.exports.jsx(r,Object.assign({},n,{children:e.exports.jsx(t,{})})):t();function t(){const s=Object.assign({h2:"h2",p:"p",a:"a",blockquote:"blockquote",img:"img",pre:"pre",code:"code",span:"span"},o(),n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.h2,{children:"Monolith"}),`
`,e.exports.jsxs(s.p,{children:["This application was originally designed as a monolith & built using ",e.exports.jsx(s.a,{href:"https://www.cloudfoundry.org",children:"Cloud Foundry"}),`'s NodeJS
buildpack. The web client & the corresponding API calls were served by the same application. It
allowed for an ease of development and straight forward deployment.`]}),`
`,e.exports.jsx(s.h2,{children:"Designing for Scale"}),`
`,e.exports.jsxs(s.p,{children:["The ",e.exports.jsx(s.a,{href:"https://expressjs.com/en/advanced/best-practice-performance.html#use-a-reverse-proxy",children:"Express documentation"}),` recommends the use of a reverse proxy to deliver web client file and
offloading any API calls to the express server.`]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:`A reverse proxy sits in front of a web app and performs supporting operations on the requests,
apart from directing requests to the app. It can handle error pages, compression, caching, serving
files, and load balancing among other things.`}),`
`,e.exports.jsx(s.p,{children:`Handing over tasks that do not require knowledge of application state to a reverse proxy frees up
Express to perform specialized application tasks. For this reason, it is recommended to run
Express behind a reverse proxy like Nginx or HAProxy in production.`}),`
`]}),`
`,e.exports.jsxs(s.p,{children:[`In essence, express should only be used as an API server as thats where it excels. Nodejs utilises a
single thread and an event loop concurrency model to run its applications (See `,e.exports.jsx(s.a,{href:"/blog/7",children:"Node event loop"}),` for
more). As such, we don't want our resources being consumed by compressing and serving static files.
`,e.exports.jsx(s.a,{href:"https://www.nginx.com/resources/wiki/",children:"NGINX"})," was designed perform these tasks."]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"NGINX is a free, open-source, high-performance HTTP server"}),`
`]}),`
`,e.exports.jsx(s.img,{src:"https://i.imgur.com/ZbQYWeA.png",alt:"Reverse Proxy",title:"Reverse Proxy"}),`
`,e.exports.jsx(s.h2,{children:"Separation of Concerns"}),`
`,e.exports.jsx(s.p,{children:`Separating out the web server from the API server allows each to be developed separately. It also
allows us to scale out each service independently of the other. For example, if we were to introduce
a native mobile version of this application and it was to become extremely popular, we may need to
deploy several more instances of the API server, but the nginx web client could be left as it is.`}),`
`,e.exports.jsxs(s.p,{children:["This application has been split as described above. The client and server can be found at ",e.exports.jsx(s.a,{href:"https://github.com/sinnott74/BlogWebClient",children:`Blog
Webclient`})," and ",e.exports.jsx(s.a,{href:"https://github.com/sinnott74/BlogServer",children:"Blog Server"})," respectively."]}),`
`,e.exports.jsx(s.p,{children:`All requests are currently routed through the NGINX server. Any request to /api/ is forwarded onto
the API server using the following snippet from the web client's nginx.conf:`}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-nginx",children:[e.exports.jsx(s.span,{className:"hljs-attribute",children:"location"}),` /api/ {
    `,e.exports.jsx(s.span,{className:"hljs-attribute",children:"proxy_pass"})," <%= ENV[",e.exports.jsx(s.span,{className:"hljs-string",children:'"BACKEND_ADDR"'}),`] %>;
}
`]})}),`
`,e.exports.jsxs(s.p,{children:[`BACKEND_ADDR is an environment variable which points to my backend server. This follows along the
lines of the `,e.exports.jsx(s.a,{href:"https://12factor.net/",children:"12 Factor App"}),"."]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:`The twelve-factor app stores config in environment variables (often shortened to env vars or env).
Env vars are easy to change between deploys without changing any code; unlike config files, there
is little chance of them being checked into the code repo accidentally; and unlike custom config
files, or other config mechanisms such as Java System Properties, they are a language- and
OS-agnostic standard.`}),`
`]}),`
`,e.exports.jsx(s.h2,{children:"Performance"}),`
`,e.exports.jsxs(s.p,{children:[`Webclient rendering has seen a 10% gain in performance from the change, which can be seen in graph
below which compares data from `,e.exports.jsx(s.a,{href:"https://www.webpagetest.org/",children:"WebPageTest"}),`. SinnottTest.eu-gb.mybluemix.net is the development
application which is using this new architecture, which Sinnott.eu-gb.mybluemix.net is the old
monolith.`]}),`
`,e.exports.jsx(s.img,{src:"https://i.imgur.com/d8aeKvO.png",alt:"Visual Progress",title:"Visual Progress"}),`
`,`
`,`
`,e.exports.jsx(s.img,{src:"https://i.imgur.com/tfnZv0n.png",alt:"Resource Timings",title:"Resource Timings"})]})}}export{p as author,u as created,g as date,m as default,d as id,h as imageurl,x as tags,l as title};