var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;import"./vendor.0d5e54d3.js";import{N as r}from"./mdx-react.modern.650372c4.js";const i="Javascript's own ThreadLocal",s="Daniel Sinnott",c="https://i.imgur.com/VPnnX8P.png",l=12,h=["Javascript","AsyncHooks"],d="Mon, 26th Mar 2018",p=new Date(1522075625542);function u(e){var i=e,{components:s}=i,c=((e,o)=>{var r={};for(var i in e)n.call(e,i)&&o.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&t)for(var i of t(e))o.indexOf(i)<0&&a.call(e,i)&&(r[i]=e[i]);return r})(i,["components"]);return r("wrapper",((e,r)=>{for(var i in r||(r={}))n.call(r,i)&&o(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&o(e,i,r[i]);return e})({components:s},c),r("p",null,"The concurrency model of ",r("inlineCode",{parentName:"p"},"Java")," & ",r("inlineCode",{parentName:"p"},"Javascript")," is very different."),r("p",null,"I was to discuss them both today from the context of setting a variable to be used throughout a\nsingle business process. Consider a server which receives a ",r("inlineCode",{parentName:"p"},"GET")," request. At some point during the\nbusiness process carried out during the request lifecycle something is written to a log file. If we\nconsider the request to a single transaction, we might want the transaction's ID to be included in\nthe log as we might have several transaction writing to log at the same time."),r("h3",null,"Java"),r("p",null,"Java uses a multi-threading model. A thread according the Javadocs is a thread of execution of a\nprogram. Commands in the same thread execute sequentially. When a blocking command is executed (e.g.\nI/O) the thread will wait for it to be completed until is executes the next command, however this\nwill not prevent other threads from executing, therefore not completely blocking the application.\nThreads can be seen to be wasteful with resources as they may be sitting there doing nothing while\nwaiting, however they allow for a much easier development experience. Enter ",r("a",{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/ThreadLocal.html",parentName:"p"},r("inlineCode",{parentName:"a"},"ThreadLocal")),"."),r("pre",null,r("code",{className:"language-java",parentName:"pre"},"public class Transaction {\n\n  // Initialise ThreadLocal which contains a map to store all of our Thread scoped variables\n  private static ThreadLocal<HashMap<Object, Object>> threadScopedVariable =\n      new ThreadLocal<HashMap<Object, Object>>();\n\n  // Getter\n  public static getThreadScopedVariable(Object identifier){\n      return threadScopedVariables.get(identifier);\n  }\n\n  // Setter\n  public setThreadScopedVariable(Object identifier, Object variable) {\n      threadScopedVariables.set(identifier);\n  }\n\n}\n")),r("p",null,"The above class can be used to set variables that are scoped to each individual thread. For example\nsetting a transactionID."),r("h3",null,"Javascript"),r("p",null,"Javascript uses a single threaded, event loop based concurrency model. All execution of code happens\nin the same thread (ignoring ",r("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",parentName:"p"},"Web Workers")," in browser land). If a command blocks the thread, the\napplication comes to a halt until that command finishes. Its poor practice & actively discourages to\nwrite blocking code. Callbacks & Promises go a long way to helping write good javascript commands.\nThese both rely on the event loop. For more info on the event loop see my post ",r("a",{href:"/blog/7",parentName:"p"},"Task, Microtasks &\nAutomobiles"),'. In layman\'s terms, the when a "Task" is blocked the event loop will pick up another to\nexecute until the previous is ready. This can be very efficient with resources, however it makes it\nvery difficult to determine is a command is happening in the same transaction as another command as\nthey all run on the same thread.'),r("p",null,"Those familiar with this issue in Javascript may immediately think of ",r("a",{href:"https://github.com/othiym23/node-continuation-local-storage",parentName:"p"},"Continuation-Local Storage"),"\n(CLS), however this implementation has issues & loses context is certain situations, hence packages\nlike ",r("a",{href:"https://www.npmjs.com/package/cls-bluebird",parentName:"p"},"cls-bluebird")," patching CLS in some situations but not all."),r("p",null,"Enter ",r("a",{href:"https://nodejs.org/api/async_hooks.html",parentName:"p"},r("inlineCode",{parentName:"a"},"AsyncHooks")),". AsyncHooks is a (currently as of v9.9) experimental API in NodeJS. It allows\nfor a lifecycle to be added around each async resource execution to contains a reference to its\nAsyncID & its parents AsyncID. From this its possible to build up a thread like transaction model."),r("pre",null,r("code",{className:"language-javascript",parentName:"pre"},'const asyncHooks = require("async_hooks");\n\nconst map = new Map();\n\nconst hook = asyncHooks.createHook({\n    /**\n     * Sets the parent\'s context as the current context\n     */\n    init: function init(asyncId, type, triggerAsyncId) {\n        const parentContext = map.get(triggerAsyncId);\n        if (parentContext) {\n            // set parent context as current context\n            map.set(asyncId, parentContext);\n        }\n    },\n\n    /**\n     * Remove the data\n     */\n    destroy: function destroy(asyncId) {\n        if (map.has(asyncId)) {\n            map.delete(asyncId);\n        }\n    },\n});\nhook.enable();\n\n/**\n * Set the key/value for this score\n * @param {String} key The key of value\n * @param {String} value The value\n */\nexports.set = function setValue(key, value) {\n    const id = asyncHooks.executionAsyncId();\n    let data = map.get(id);\n    if (!data) {\n        data = {};\n        map.set(id, data);\n    }\n    data[key] = value;\n};\n\n/**\n * Get the value by key\n * @param {String} key The key of value\n */\nexports.get = function getValue(key) {\n    const id = asyncHooks.executionAsyncId();\n    const data = map.get(id);\n    return data[key];\n};\n')),r("p",null,"The above javascript code is analogous to the Java code earlier. Both include a getter & setter for\ntransaction scoped variable. The call to ",r("inlineCode",{parentName:"p"},"asyncHooks.createHook")," creates init & destroy lifecycle\nhook around each async resource which allows us to keep track of the context in which the resource\nis operating. A transaction scoped variable can be placed into that context & access by code which\nis a child of the code which created the context. E.g. if we created a TransactionID variable & put\nit into the context at the very beginning of our request lifecycle, it can be accessed by an code\ncalled during that request."),r("p",null,"AsyncHooks do a performance impact as the extra code being called & extra object being stored in\nmemory, however it allows you to write much cleaner code as the TransactionID or even a database\ntransaction object don't need to be passed around to event function in the entire application. The\ncan simple be accessed when needed."))}u.isMDXComponent=!0;export default u;export{s as author,p as created,d as date,l as id,c as imageurl,h as tags,i as title};