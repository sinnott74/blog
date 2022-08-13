import{j as e}from"./jsx-runtime.8afedb4c.js";import{u as r}from"./index.fc4aef83.js";import"./index.b4825f2f.js";const i="Javascript's own ThreadLocal",h="Daniel Sinnott",p="https://i.imgur.com/VPnnX8P.png",d=12,x=["Javascript","AsyncHooks"],j="Mon, 26th Mar 2018",m=new Date(1522075625542);function u(a={}){const{wrapper:n}=Object.assign({},r(),a.components);return n?e.exports.jsx(n,Object.assign({},a,{children:e.exports.jsx(t,{})})):t();function t(){const s=Object.assign({p:"p",code:"code",h3:"h3",a:"a",pre:"pre",span:"span"},r(),a.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs(s.p,{children:["The concurrency model of ",e.exports.jsx(s.code,{children:"Java"})," & ",e.exports.jsx(s.code,{children:"Javascript"})," is very different."]}),`
`,e.exports.jsxs(s.p,{children:[`I was to discuss them both today from the context of setting a variable to be used throughout a
single business process. Consider a server which receives a `,e.exports.jsx(s.code,{children:"GET"}),` request. At some point during the
business process carried out during the request lifecycle something is written to a log file. If we
consider the request to a single transaction, we might want the transaction's ID to be included in
the log as we might have several transaction writing to log at the same time.`]}),`
`,e.exports.jsx(s.h3,{children:"Java"}),`
`,e.exports.jsxs(s.p,{children:[`Java uses a multi-threading model. A thread according the Javadocs is a thread of execution of a
program. Commands in the same thread execute sequentially. When a blocking command is executed (e.g.
I/O) the thread will wait for it to be completed until is executes the next command, however this
will not prevent other threads from executing, therefore not completely blocking the application.
Threads can be seen to be wasteful with resources as they may be sitting there doing nothing while
waiting, however they allow for a much easier development experience. Enter `,e.exports.jsx(s.a,{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/ThreadLocal.html",children:e.exports.jsx(s.code,{children:"ThreadLocal"})}),"."]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-java",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"public"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"class"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Transaction"}),` {

  `,e.exports.jsx(s.span,{className:"hljs-comment",children:"// Initialise ThreadLocal which contains a map to store all of our Thread scoped variables"}),`
  `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"private"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"static"}),` ThreadLocal<HashMap<Object, Object>> threadScopedVariable =
      `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"new"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"ThreadLocal"}),`<HashMap<Object, Object>>();

  `,e.exports.jsx(s.span,{className:"hljs-comment",children:"// Getter"}),`
  `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"public"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"static"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"getThreadScopedVariable"}),e.exports.jsx(s.span,{className:"hljs-params",children:"(Object identifier)"}),`{
      `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"return"}),` threadScopedVariables.get(identifier);
  }

  `,e.exports.jsx(s.span,{className:"hljs-comment",children:"// Setter"}),`
  `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"public"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"setThreadScopedVariable"}),e.exports.jsx(s.span,{className:"hljs-params",children:"(Object identifier, Object variable)"}),` {
      threadScopedVariables.set(identifier);
  }

}
`]})}),`
`,e.exports.jsx(s.p,{children:`The above class can be used to set variables that are scoped to each individual thread. For example
setting a transactionID.`}),`
`,e.exports.jsx(s.h3,{children:"Javascript"}),`
`,e.exports.jsxs(s.p,{children:[`Javascript uses a single threaded, event loop based concurrency model. All execution of code happens
in the same thread (ignoring `,e.exports.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",children:"Web Workers"}),` in browser land). If a command blocks the thread, the
application comes to a halt until that command finishes. Its poor practice & actively discourages to
write blocking code. Callbacks & Promises go a long way to helping write good javascript commands.
These both rely on the event loop. For more info on the event loop see my post `,e.exports.jsx(s.a,{href:"/blog/7",children:`Task, Microtasks &
Automobiles`}),`. In layman's terms, the when a "Task" is blocked the event loop will pick up another to
execute until the previous is ready. This can be very efficient with resources, however it makes it
very difficult to determine is a command is happening in the same transaction as another command as
they all run on the same thread.`]}),`
`,e.exports.jsxs(s.p,{children:["Those familiar with this issue in Javascript may immediately think of ",e.exports.jsx(s.a,{href:"https://github.com/othiym23/node-continuation-local-storage",children:"Continuation-Local Storage"}),`
(CLS), however this implementation has issues & loses context is certain situations, hence packages
like `,e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/cls-bluebird",children:"cls-bluebird"})," patching CLS in some situations but not all."]}),`
`,e.exports.jsxs(s.p,{children:["Enter ",e.exports.jsx(s.a,{href:"https://nodejs.org/api/async_hooks.html",children:e.exports.jsx(s.code,{children:"AsyncHooks"})}),`. AsyncHooks is a (currently as of v9.9) experimental API in NodeJS. It allows
for a lifecycle to be added around each async resource execution to contains a reference to its
AsyncID & its parents AsyncID. From this its possible to build up a thread like transaction model.`]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-javascript",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," asyncHooks = ",e.exports.jsx(s.span,{className:"hljs-built_in",children:"require"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:'"async_hooks"'}),`);

`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," map = ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"new"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Map"}),`();

`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," hook = asyncHooks.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"createHook"}),`({
    `,e.exports.jsx(s.span,{className:"hljs-comment",children:`/**
     * Sets the parent's context as the current context
     */`}),`
    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"init"}),": ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"init"}),"(",e.exports.jsx(s.span,{className:"hljs-params",children:"asyncId, type, triggerAsyncId"}),`) {
        `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," parentContext = map.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"get"}),`(triggerAsyncId);
        `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"if"}),` (parentContext) {
            `,e.exports.jsx(s.span,{className:"hljs-comment",children:"// set parent context as current context"}),`
            map.`,e.exports.jsx(s.span,{className:"hljs-title function_",children:"set"}),`(asyncId, parentContext);
        }
    },

    `,e.exports.jsx(s.span,{className:"hljs-comment",children:`/**
     * Remove the data
     */`}),`
    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"destroy"}),": ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"destroy"}),"(",e.exports.jsx(s.span,{className:"hljs-params",children:"asyncId"}),`) {
        `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"if"})," (map.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"has"}),`(asyncId)) {
            map.`,e.exports.jsx(s.span,{className:"hljs-title function_",children:"delete"}),`(asyncId);
        }
    },
});
hook.`,e.exports.jsx(s.span,{className:"hljs-title function_",children:"enable"}),`();

`,e.exports.jsxs(s.span,{className:"hljs-comment",children:[`/**
 * Set the key/value for this score
 * `,e.exports.jsx(s.span,{className:"hljs-doctag",children:"@param"})," {",e.exports.jsx(s.span,{className:"hljs-type",children:"String"}),`} key The key of value
 * `,e.exports.jsx(s.span,{className:"hljs-doctag",children:"@param"})," {",e.exports.jsx(s.span,{className:"hljs-type",children:"String"}),`} value The value
 */`]}),`
`,e.exports.jsx(s.span,{className:"hljs-built_in",children:"exports"}),".",e.exports.jsx(s.span,{className:"hljs-property",children:"set"})," = ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"setValue"}),"(",e.exports.jsx(s.span,{className:"hljs-params",children:"key, value"}),`) {
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," id = asyncHooks.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"executionAsyncId"}),`();
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"let"})," data = map.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"get"}),`(id);
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"if"}),` (!data) {
        data = {};
        map.`,e.exports.jsx(s.span,{className:"hljs-title function_",children:"set"}),`(id, data);
    }
    data[key] = value;
};

`,e.exports.jsxs(s.span,{className:"hljs-comment",children:[`/**
 * Get the value by key
 * `,e.exports.jsx(s.span,{className:"hljs-doctag",children:"@param"})," {",e.exports.jsx(s.span,{className:"hljs-type",children:"String"}),`} key The key of value
 */`]}),`
`,e.exports.jsx(s.span,{className:"hljs-built_in",children:"exports"}),".",e.exports.jsx(s.span,{className:"hljs-property",children:"get"})," = ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"getValue"}),"(",e.exports.jsx(s.span,{className:"hljs-params",children:"key"}),`) {
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," id = asyncHooks.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"executionAsyncId"}),`();
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," data = map.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"get"}),`(id);
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"return"}),` data[key];
};
`]})}),`
`,e.exports.jsxs(s.p,{children:[`The above javascript code is analogous to the Java code earlier. Both include a getter & setter for
transaction scoped variable. The call to `,e.exports.jsx(s.code,{children:"asyncHooks.createHook"}),` creates init & destroy lifecycle
hook around each async resource which allows us to keep track of the context in which the resource
is operating. A transaction scoped variable can be placed into that context & access by code which
is a child of the code which created the context. E.g. if we created a TransactionID variable & put
it into the context at the very beginning of our request lifecycle, it can be accessed by an code
called during that request.`]}),`
`,e.exports.jsx(s.p,{children:`AsyncHooks do a performance impact as the extra code being called & extra object being stored in
memory, however it allows you to write much cleaner code as the TransactionID or even a database
transaction object don't need to be passed around to event function in the entire application. The
can simple be accessed when needed.`})]})}}export{h as author,m as created,j as date,u as default,d as id,p as imageurl,x as tags,i as title};
