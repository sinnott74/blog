import{j as e}from"./jsx-runtime.677020d1.js";import{u as r}from"./index.d409b08a.js";import"./index.6de8143e.js";const l="Task, Microtasks & Automobiles",p="Daniel Sinnott",h="https://i.imgur.com/BywnfLd.png",d=7,u=["Javascript","Concurrency"],m="Mon, 19th Feb 2018",x=new Date(1519051903729);function f(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.exports.jsx(n,Object.assign({},s,{children:e.exports.jsx(o,{})})):o();function o(){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",img:"img"},r(),s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs(t.p,{children:["This blog post is based largely on Jake Archibald's (",e.exports.jsx(t.a,{href:"https://twitter.com/jaffathecake",children:"@jaffathecake"}),") talk ",e.exports.jsx(t.a,{href:"https://www.youtube.com/watch?v=cCOL7MC4Pl0",children:"In The Loop"})]}),`
`,e.exports.jsx(t.h2,{children:"The Event Loop"}),`
`,e.exports.jsx(t.p,{children:`The event loop is how Javascript implements its concurrency model and allows it to perform multiple
non blocking asynchronous operations despite the fact that it is single threaded. Each javascript
thread gets it's own event loop. i.e. both the main thread & web workers get their own event loop as
they are executed in their own thread.`}),`
`,e.exports.jsx(t.p,{children:`The event loop runs continually round executing tasks, mircotasks & even performing all render steps
like style calculations, layout & paint.`}),`
`,e.exports.jsxs(t.p,{children:[`Note: Its possible for Pages to share an single event loop when they are on the same origin. This
allows them to synchronously communicate. Examples of opening pages on the same origin are iframes,
window.frames & pages opened with window.open(). Window.postMessage() can then be used to
communicate from page to page. However opening a page with window.open() & passing the noopener
option will prevent the child page from referencing the parent and also give it its own event loop.
For more info see: `,e.exports.jsx(t.a,{href:"http://hassansin.github.io/shared-event-loop-among-same-origin-windows",children:"Shared Event-loop for Same-Origin Windows"})]}),`
`,e.exports.jsx(t.h2,{children:"Tasks"}),`
`,e.exports.jsx(t.p,{children:`A task is a unit of work scheduled by the browser. Tasks are put into a task queue to ensure they
are executed in the correct order, and can be put there from multiple sources. Examples of tasks
include setTimeout & event clicks.`}),`
`,e.exports.jsx(t.p,{children:`Each iteration of the event loop will perform a single task, to completion. The thread is completely
focused on completing this task. Long running tasks block page rendering and can cause the user to
notice that the page is frozen.`}),`
`,e.exports.jsx(t.p,{children:`Tasks can queue other tasks, but as only a single task can be completed on each loop the browser is
allowed to perform rendering in between tasks. A good example of this is setTimeout recursively
queue setTimeouts. This doesn't block rendering.`}),`
`,e.exports.jsx(t.h2,{children:"Microtasks"}),`
`,e.exports.jsx(t.p,{children:`Microtasks are very similars to tasks. Like tasks, they are also placed in a queue by multiple
sources. However microtasks position in the event loop is somewhat fluid. The event loop executes
microtasks whenever the javascript callstack is empty. Which means microtasks can be executed after
a task or even after a Request Animation Frame callback.`}),`
`,e.exports.jsx(t.p,{children:`Like Tasks Microtasks can queue other microtasks, but unlike tasks they are completed until the
queue is empty. This means recursive microtasks can block rendering.`}),`
`,e.exports.jsx(t.p,{children:"Examples of microtasks include process.nextTick & Promises."}),`
`,e.exports.jsx(t.h2,{children:"Render Steps"}),`
`,e.exports.jsx(t.p,{children:`The browser controls when the render steps are executed. It notifies the event loop that on the next
iteration of the loop it should perform Style calculations, Layout & finally Paint the pixels on the
screen. It aims to do this typically every 16.6ms or 60 frames per second.`}),`
`,e.exports.jsx(t.h3,{children:"Request Animation Frame"}),`
`,e.exports.jsx(t.p,{children:`Request Animation Frame (rAF) callbacks are called during the render steps, just before style
calculations. Its an ideal place to perform UI specific updates & allows the batching of updates.`}),`
`,e.exports.jsx(t.p,{children:`rAF callbacks are executed until completion, including queued rAFs. However, the browser will take a
break from executing queued rAFs when it hits a rAf which wasn't queued before this iteration of the
loop.`}),`
`,e.exports.jsx(t.h2,{children:"Visuals"}),`
`,e.exports.jsxs(t.p,{children:[`Below is a visual representation of The Event Loop. All microtasks on the queue are executed
everytime the javascript callstack is empty.
`,e.exports.jsx(t.img,{src:"https://i.imgur.com/yp6hsFd.gif",alt:"JavaScript Event Loop",title:"JavaScript Event Loop"}),` Credit to
(`,e.exports.jsx(t.a,{href:"https://twitter.com/jaffathecake",children:"@jaffathecake"}),")"]})]})}}export{p as author,x as created,m as date,f as default,d as id,h as imageurl,u as tags,l as title};
