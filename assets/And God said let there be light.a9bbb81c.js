import{j as e}from"./jsx-runtime.677020d1.js";import{u as r}from"./index.d409b08a.js";import"./index.6de8143e.js";const c="And God said let there be light",h="Daniel Sinnott",p="https://i.imgur.com/SIZ0oeR.png",d=4,x=["Monthly Challenge","January","Technical","ReactJS","NodeJS"],j="Thu, 1st Feb 2018",m=new Date(1517574696533);function u(a={}){const{wrapper:t}=Object.assign({},r(),a.components);return t?e.exports.jsx(t,Object.assign({},a,{children:e.exports.jsx(n,{})})):n();function n(){const s=Object.assign({p:"p",a:"a",hr:"hr",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},r(),a.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs(s.p,{children:["As outlined in the post ",e.exports.jsx(s.a,{href:"/blog/3",children:"So it begins"}),` (January Challege), the technical challenge for this month
was to get this blog up & running. My deliverable was a blogging web app that I could use to write,
edit & read blogposts, but build in a way that I could progressively enhance.`]}),`
`,e.exports.jsxs(s.p,{children:["The ",e.exports.jsx(s.a,{href:"https://github.com/sinnott74/sinnott",children:"source for this site"})," can be found on Github."]}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h2,{children:"The Architecture"}),`
`,e.exports.jsx(s.p,{children:`I chose the the classic client server model, with the two being fully separated to allow me to
develop each independently. Date storage was of great concern over the month. I'd like to be able
look back on these post in the distant future & cringe, and also for these posts to be available to
others. A database hosted in the cloud was the conclusion.`}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h2,{children:"Client"}),`
`,e.exports.jsxs(s.p,{children:["In 2017 I spent a good chunk of time working with ",e.exports.jsx(s.a,{href:"https://dojotoolkit.org/",children:"Dojo"})," for work & ",e.exports.jsx(s.a,{href:"https://www.polymer-project.org/",children:"PolymerJS"}),` in my spare time,
but the goal was to learn new things and I was becoming very frustrated with Polymer's constant API
& concept changes. After a bit a research, `,e.exports.jsx(s.a,{href:"https://reactjs.org/",children:"ReactJS"}),", ",e.exports.jsx(s.a,{href:"https://vuejs.org/",children:"VueJS"})," & ",e.exports.jsx(s.a,{href:"https://angularjs.org/",children:"AngularJS"}),` were the front running
web frameworks that I could get up and running with quickly & seemed to have a promising future
(although given the rate of change in the web space, these could be obsolete by the end of the
month). I had spent some time in 2016 learning the original AngularJS framework, so I still have a
bad taste in my mouth over the compete rewrite & api breaking changes for Angular 2+, so that was
quickly ruled out. Internally in work, React was being chosen for a large new project so it made to
most sense for me to become familiar with it.`]}),`
`,e.exports.jsx(s.p,{children:`React is a javascript library for building user interfaces. It's declarative, component-based & uses
a one way data flow model. It was originally developed internally at facebook, but put into mass
production at Instagram.`}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"State"}),`
`,e.exports.jsxs(s.p,{children:["I quickly set out developing my ",e.exports.jsx(s.a,{href:"https://developers.google.com/web/updates/2015/11/app-shell",children:"App Shell"}),`. React's one way data flow model meant that state should
be stored at the highest needed point in the tree and flow downwards, but while creating my
application components like the NavBar, ToolBar & OptionsMenu, I realised that storing most state at
the root component level won't scale.`]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.a,{href:"https://redux.js.org/",children:"Redux"}),` to the rescue. Redux is a predictable state container based on Facebook's Flux architecture.
It's state is tightly controller & can only be updated using Redux's infrastructure. Actions, which
can be thought of as events, are dispatched and the reducer associated with each action then has
permission to update the application state/store.Here's a simple example used by my SideNav.`]}),`
`,e.exports.jsx(s.p,{children:"Action is defined as:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-javascript",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"export"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.exports.jsx(s.span,{className:"hljs-variable constant_",children:"OPEN_SIDENAV"})," = ",e.exports.jsx(s.span,{className:"hljs-string",children:'"OPEN_SIDENAV"'}),`;
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"export"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"openSideNav"}),"(",e.exports.jsx(s.span,{className:"hljs-params"}),`) {
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"return"}),` {
        `,e.exports.jsx(s.span,{className:"hljs-attr",children:"type"}),": ",e.exports.jsx(s.span,{className:"hljs-variable constant_",children:"OPEN_SIDENAV"}),`,
    };
}
`]})}),`
`,e.exports.jsx(s.p,{children:"My Header is connected to redux so it can dispatch actions"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-jsx",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"React"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:"'react'"}),`;
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," { connect } ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:"'react-redux'"}),`
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," { openSideNav } ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:"'../../actions/sidenav'"}),`;
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"class"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Header"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"extends"})," ",e.exports.jsx(s.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
....
  `,e.exports.jsx(s.span,{className:"hljs-title function_",children:"render"}),"(",e.exports.jsx(s.span,{className:"hljs-params"}),`) {
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"return"}),` (
     ...
       <`,e.exports.jsx(s.span,{className:"hljs-title class_",children:"Button"})," icon className=",e.exports.jsx(s.span,{className:"hljs-string",children:'"header__menu"'}),"  onClick={",e.exports.jsx(s.span,{className:"hljs-variable language_",children:"this"}),".",e.exports.jsx(s.span,{className:"hljs-property",children:"props"}),".",e.exports.jsx(s.span,{className:"hljs-property",children:"handleMenuButtonClick"}),"}>menu</",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Button"}),`>
     ...
    )
  }
}
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"}),` mapDispatchToProps = {
  `,e.exports.jsx(s.span,{className:"hljs-attr",children:"handleMenuButtonClick"}),`: openSideNav
}
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"export"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"default"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"connect"}),"(",e.exports.jsx(s.span,{className:"hljs-literal",children:"null"}),", mapDispatchToProps)(",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Header"}),`)

`]})}),`
`,e.exports.jsx(s.p,{children:"The associated reducer updates the Redux store:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-javascript",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," { ",e.exports.jsx(s.span,{className:"hljs-variable constant_",children:"OPEN_SIDENAV"})," } ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:"'../../actions/sidenav'"}),`;
 `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"let"}),` initialState = {
   opened : `,e.exports.jsx(s.span,{className:"hljs-literal",children:"false"}),`
 }
 `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"sidenav"})," = (",e.exports.jsx(s.span,{className:"hljs-params",children:"state = initialState, action"}),`)  => {
  `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"switch"})," (action.",e.exports.jsx(s.span,{className:"hljs-property",children:"type"}),`) {
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"case"})," ",e.exports.jsx(s.span,{className:"hljs-attr",children:"OPEN_SIDENAV"}),`:
      `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"return"}),` {
        ...state,
        `,e.exports.jsx(s.span,{className:"hljs-attr",children:"opened"}),": ",e.exports.jsx(s.span,{className:"hljs-literal",children:"true"}),`
    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"default"}),`:
      `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"return"}),` state;
  }
}
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"export"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"default"}),` sidenav;

`]})}),`
`,e.exports.jsx(s.p,{children:"Finally we tell the SideNav to subscribe to changes to the opened property:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-jsx",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"React"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:"'react'"}),`;
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," { connect } ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:'"react-redux"'}),`;
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"class"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"SideNav"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"extends"})," ",e.exports.jsx(s.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
...
}
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"mapStateToProps"})," = (",e.exports.jsx(s.span,{className:"hljs-params",children:"state"}),`) =>({
  `,e.exports.jsx(s.span,{className:"hljs-attr",children:"opened"}),": state.",e.exports.jsx(s.span,{className:"hljs-property",children:"ui"}),".",e.exports.jsx(s.span,{className:"hljs-property",children:"sidenav"}),".",e.exports.jsx(s.span,{className:"hljs-property",children:"opened"}),`
})
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"export"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"default"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"connect"}),"(mapStateToProps, ",e.exports.jsx(s.span,{className:"hljs-literal",children:"null"}),")(",e.exports.jsx(s.span,{className:"hljs-title class_",children:"SideNav"}),`)
`]})}),`
`,e.exports.jsx(s.p,{children:"When the opened property changes, react will re-render my sidenav & open it"}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"Build System"}),`
`,e.exports.jsx(s.p,{children:`It important for any website to have a good user experience. UX is mostly focuses on user interface
& user interaction, but it also encompasses site performance & working on as many devices as
possible (think of it as casting a bigger net to catch more fish). You build system has a big
influence on those final two points. A site should only download the resources needed to run that
site at that time. Downloading & running unnecessary delays the time to first paint & time to first
interaction and because of that ruins the experience.`}),`
`,e.exports.jsx(s.p,{children:`Most modern javascript library are written in the new ES2015+ syntax with feature such as classes or
Promises. These feature won't work on older browsers. New syntax code needs to be transpiled in the
older syntax. This transpilation would need to happen a build time.`}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.a,{href:"https://webpack.js.org/",children:"Webpack"}),` & React go together like peas & carrots (Forrest Gump reference). Webpack is a resource
bundler. It takes all the files that is necessary to run your application and bundles them together.
It supports `,e.exports.jsx(s.a,{href:"https://webpack.js.org/guides/tree-shaking/",children:"tree shaking"}),` to eliminate dead unnecessary code, and has a plugin architecture to add
other tools to your build process such as javascript translation with `,e.exports.jsx(s.a,{href:"https://babeljs.io/",children:"Babel"}),"."]}),`
`,e.exports.jsxs(s.p,{children:[`Webpack was the obvious choice. Although there's lot of tutorials on webpack, its fairly confusing
to set up. I had to guts of it fully up and running in the first week. I had all my required loaders
converting my assets & I have hot reloading configured in development mode. However, I wasn't happy
with the amount of dependencies in my package.json just for my build system. On the 20th day I
decided to convert my app to a Create React App (see `,e.exports.jsx(s.a,{href:"https://github.com/sinnott74/Sinnott/commit/d66341b17a9fe86b79862660dc7cd5216298874c",children:"commit"}),`), which I had initially shunned as it
hid all the complexity of setting up webpack. It reduced the amount of dependencies my web app had &
also offloaded the maintenance of my build system to Facebook.`]}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"Routing"}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.a,{href:"https://reacttraining.com/react-router/",children:"React Router"}),` was chosen an my client side router. It plays nicely with redux & when used in
conjunction with `,e.exports.jsx(s.a,{href:"https://github.com/thejameskyle/react-loadable",children:"React Loadable"}),`, allowed my code to be split based on route. The code for me
entire application didn't need to be loaded, only what was needed for a given route.`]}),`
`,e.exports.jsx(s.p,{children:`The example below is code taken from my routes configuration. It says tells Webpack to split the
code & gives it the name specified by webpackChunkName`}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-jsx",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"React"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:'"react"'}),`;
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," { ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Route"}),", ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Switch"})," } ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:'"react-router"'}),`;
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Loadable"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:'"react-loadable"'}),`;
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"import"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Spinner"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"from"})," ",e.exports.jsx(s.span,{className:"hljs-string",children:'"./components/Spinner"'}),`;
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"LoadableHomePage"})," = ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Loadable"}),`({
    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"loader"}),": ",e.exports.jsx(s.span,{className:"hljs-function",children:"() =>"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"import"}),"(",e.exports.jsx(s.span,{className:"hljs-comment",children:'/* webpackChunkName: "indexPage" */'})," ",e.exports.jsx(s.span,{className:"hljs-string",children:'"./pages/HomePage"'}),`),
    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"loading"}),": ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Spinner"}),`,
});
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"LoadableBlogListPage"})," = ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Loadable"}),`({
    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"loader"}),": ",e.exports.jsx(s.span,{className:"hljs-function",children:"() =>"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"import"}),"(",e.exports.jsx(s.span,{className:"hljs-comment",children:'/* webpackChunkName: "BlogListPage" */'})," ",e.exports.jsx(s.span,{className:"hljs-string",children:'"./pages/BlogListPage"'}),`),
    `,e.exports.jsx(s.span,{className:"hljs-attr",children:"loading"}),": ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Spinner"}),`,
});
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"Routes"})," = (",e.exports.jsx(s.span,{className:"hljs-params",children:"props"}),`) => {
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"return"}),` (
        `,e.exports.jsxs(s.span,{className:"xml",children:[e.exports.jsxs(s.span,{className:"hljs-tag",children:["<",e.exports.jsx(s.span,{className:"hljs-name",children:"Switch"})," ",e.exports.jsx(s.span,{className:"hljs-attr",children:"className"}),"=",e.exports.jsx(s.span,{className:"hljs-string",children:'"main"'}),">"]}),`
            `,e.exports.jsxs(s.span,{className:"hljs-tag",children:["<",e.exports.jsx(s.span,{className:"hljs-name",children:"Route"})," ",e.exports.jsx(s.span,{className:"hljs-attr",children:"exact"})," ",e.exports.jsx(s.span,{className:"hljs-attr",children:"path"}),"=",e.exports.jsx(s.span,{className:"hljs-string",children:'"/"'})," ",e.exports.jsx(s.span,{className:"hljs-attr",children:"component"}),"=",e.exports.jsx(s.span,{className:"hljs-string",children:"{LoadableHomePage}"})," />"]}),`
            `,e.exports.jsxs(s.span,{className:"hljs-tag",children:["<",e.exports.jsx(s.span,{className:"hljs-name",children:"Route"})," ",e.exports.jsx(s.span,{className:"hljs-attr",children:"exact"})," ",e.exports.jsx(s.span,{className:"hljs-attr",children:"path"}),"=",e.exports.jsx(s.span,{className:"hljs-string",children:'"/blog"'})," ",e.exports.jsx(s.span,{className:"hljs-attr",children:"component"}),"=",e.exports.jsx(s.span,{className:"hljs-string",children:"{LoadableBlogListPage}"})," />"]}),`
        `,e.exports.jsxs(s.span,{className:"hljs-tag",children:["</",e.exports.jsx(s.span,{className:"hljs-name",children:"Switch"}),">"]})]}),`
    );
};
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"export"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"default"})," ",e.exports.jsx(s.span,{className:"hljs-title class_",children:"Routes"}),`;
`]})}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"UI Component Library"}),`
`,e.exports.jsxs(s.p,{children:[`I was spending too much of my time developing UI components & decided that it would be more prudent
to use a UI Component Library. I quite enjoy the look & feel of Google's `,e.exports.jsx(s.a,{href:"https://material.io/",children:"Material Design"}),`. This
gave me the options of:`]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Material-UI"}),`
`,e.exports.jsx(s.li,{children:"MUI"}),`
`,e.exports.jsx(s.li,{children:"React-MD"}),`
`]}),`
`,e.exports.jsx(s.p,{children:`Out of the above 3 React-MD was the clear winner, I had all the components I felt I'd need & it was
by far the smallest library.`}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"Blog Syntax"}),`
`,e.exports.jsx(s.p,{children:`With all of the above in place I had my worker web app. The final hurdle I had to face was the
format I'd let users write their blog posts.`}),`
`,e.exports.jsxs(s.p,{children:[`Plain text would be too simple & unappealing visually. Letting HTML or a subset of HTML would allow
the nightmare of `,e.exports.jsx(s.a,{href:"https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)",children:"XSS"}),`. I settled on allowing the users to write their blogs in MarkDown. It allowed
for some formatting without the headache of trying to catch unwanted code.`]}),`
`,e.exports.jsxs(s.p,{children:["The chosen library was ",e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/marked",children:"Marked"}),". A highly performance & small markdown parser and compiler."]}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"Server Interaction"}),`
`,e.exports.jsx(s.p,{children:`The client would interact with the server in a Rest-like manner. Sending GET, POST, PUT & DELETE
requests for resources.`}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h2,{children:"Server"}),`
`,e.exports.jsx(s.p,{children:`There lots of options when it comes to serverside development. The main drivers for my selection
were:`}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Learn somthing"}),`
`,e.exports.jsx(s.li,{children:"Speed of development"}),`
`,e.exports.jsx(s.li,{children:"Can be run for free or at least cheap"}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["I decided to choose ",e.exports.jsx(s.a,{href:"https://nodejs.org/",children:"NodeJs"})," with ",e.exports.jsx(s.a,{href:"https://expressjs.com/",children:"ExpressJs"}),`. Keeping the client & server using the same language
should allow me to share code between the 2 if needed.`]}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"Data Layer"}),`
`,e.exports.jsxs(s.p,{children:["As my database I selected [Postresql] as I could avail of a free Tiny Turtle on ",e.exports.jsx(s.a,{href:"https://www.elephantsql.com",children:"ElephantSQL"}),`, until
i need a larger memory allocation. The module `,e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/pg",children:"PG"}),` gave me fine grained control over the SQL
statements sent to the server. I experimented with KnexJS but didn't like its transaction
infrastructure, mainly due to Node's callback based application flow. More on that in Transactions
below. PG, along with the module SQL, gave me Parameterized query to help prevent SQL Injection.`]}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"Transactions"}),`
`,e.exports.jsxs(s.p,{children:[`It was frustrating coming for a Java world, where the concept of ThreadLocal make it easy to pass
information around the system for a single transaction without having to include it in every method
call. The asynchronous nature of Node doesn't allow for this. I experimented with Continuation-Local
Storage last year but found it very hit & miss. The context can easily be lost. Roll forward to this
year & the release of the experimental Node 8 API AsyncHooks allowed for this problem to be solved
by the library `,e.exports.jsx(s.a,{href:"https://github.com/vicanso/async-local-storage/",children:"async-local-storage"}),`. It wraps each asynchronous & keeps track of which call came
from where, allowing for a creation of what is analogous to Thread in java. This allowed me to
request a client for the Postgres pool, start a transaction & use that transaction for every
database call in a single HTTP request without having to pass a client or transaction object around.`]}),`
`,e.exports.jsx(s.p,{children:`Here's an example of how I'm handling my transactions. It's using async await to handle promises in
a more readable way.`}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-javascript",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," als = ",e.exports.jsx(s.span,{className:"hljs-built_in",children:"require"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:'"./async-local-storage"'}),`);
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," uuidV4 = ",e.exports.jsx(s.span,{className:"hljs-built_in",children:"require"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:'"uuid/v4"'}),`);
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," database = ",e.exports.jsx(s.span,{className:"hljs-built_in",children:"require"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:'"../core/database"'}),"); ",e.exports.jsx(s.span,{className:"hljs-comment",children:"// module which configures the DB connection"}),`
`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"expressTransactionMiddleware"})," = ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"async"})," (",e.exports.jsx(s.span,{className:"hljs-params",children:"req, res, next"}),`) => {
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," client = ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"await"})," database.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"connect"}),`();
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"await"})," client.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"query"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:'"BEGIN"'}),`);
    als.`,e.exports.jsx(s.span,{className:"hljs-title function_",children:"set"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:'"transactionID"'}),", ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"uuidV4"}),`());
    als.`,e.exports.jsx(s.span,{className:"hljs-title function_",children:"set"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:'"transaction"'}),`, client);
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"await"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"next"}),`();
};
`]})}),`
`,e.exports.jsx(s.p,{children:`It's important to COMMIT or ROLLBACK the transaction and release the client back to the pool at the
end of the request:`}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"hljs language-javascript",children:[e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.exports.jsx(s.span,{className:"hljs-title function_",children:"transactionSuccessMiddleware"})," = ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"async"})," (",e.exports.jsx(s.span,{className:"hljs-params"}),`) => {
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"let"})," client = als.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"get"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:"'transaction'"}),`)
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"await"})," client.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"query"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:"'COMMIT'"}),`);
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"await"})," client.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"release"}),`();
}

`,e.exports.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"async"})," transactionFailureMiddleware = ",e.exports.jsx(s.span,{className:"hljs-keyword",children:"async"}),` () =>{
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"let"})," client = als.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"get"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:"'transaction'"}),`)
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"await"})," client.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"query"}),"(",e.exports.jsx(s.span,{className:"hljs-string",children:"'ROLLBACK'"}),`);
    `,e.exports.jsx(s.span,{className:"hljs-keyword",children:"await"})," client.",e.exports.jsx(s.span,{className:"hljs-title function_",children:"release"}),`();
  }
`]})}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"Authentication"}),`
`,e.exports.jsx(s.p,{children:`Users should only be allowed to edit posts which they own... Sounds obvious! To implement this I
could to use JsonWebToken instead of session. JWT allows to the application scale horizontally as
it's completely stateless. JWT was used in conjunction with PassportJS. The idea behind this is that
by using passport now, I'd lessen the pain of changing my authentication to use OAuth by Github,
Google or Facebook etc.`}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h3,{children:"Database"}),`
`,e.exports.jsxs(s.p,{children:[`As mentioned above in Server - Data Layer. I'm using PSQL for my database. I haven't chosen an tools
to perform maintenance or migration, which will cause me some pain in the future but its a challenge
I'm looking forward to. Production data is incredibly important. Now that I've 'Officially' released
the first working version of the Blog, I can't just drop all the tables whenever I'd like & rebuild.
I'm currently using a library called `,e.exports.jsx(s.a,{href:"https://github.com/marcelklehr/toposort",children:"Toposort"}),`, which sorts directed acyclic graphs, to determine
which database tables would need to be created first if rebuilding from scratch. I'm using it to
order the tables by foreign keys, creation whichever tables need to be created first so that they
can be referenced by another table.`]}),`
`,e.exports.jsx(s.hr,{}),`
`,e.exports.jsx(s.h2,{children:"Let the mind dumping begin"}),`
`,e.exports.jsx(s.p,{children:`I'm now free to write whatever dribble I'd like up here, but of course you won't be forced to read
it (...yet)`}),`
`,e.exports.jsx(s.p,{children:`The month was a huge success from a technological point of view. The deadline forced me to work
toward a goal & not get distracted by other projects or to wait around thinking about / looking for
a better way to implement something.`}),`
`,e.exports.jsx(s.p,{children:"The best architecture is the one that works Daniel"})]})}}export{h as author,m as created,j as date,u as default,d as id,p as imageurl,x as tags,c as title};
