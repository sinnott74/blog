import{j as s}from"./jsx-runtime.8afedb4c.js";import{u as r}from"./index.fc4aef83.js";import"./index.b4825f2f.js";const h="Come to the darkside",p="Daniel Sinnott",i="https://i.imgur.com/mbaXHXs.png",x=23,d=["Technical","ReactJS","IBMCloud","ReduxJS","Sass"],j="Fri, 7th Sep 2018",m=new Date(1536333222270);function N(a={}){const{wrapper:n}=Object.assign({},r(),a.components);return n?s.exports.jsx(n,Object.assign({},a,{children:s.exports.jsx(t,{})})):t();function t(){const e=Object.assign({h2:"h2",p:"p",img:"img",a:"a",h3:"h3",code:"code",pre:"pre",span:"span"},r(),a.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.h2,{children:"Dark theme"}),`
`,s.exports.jsx(e.p,{children:`With youtube recently adding a dark mode to to their Polymer web app and rolling this feature out to
their android app in the last couple of days, I felt it was time to add a dark mode here. If you
spend as much time looking at a screen as me than you'll know that dark themes are a god send. They
can reduce the strain on your eyes and can even help those that struggle to get to sleep at night.`}),`
`,s.exports.jsx(e.img,{src:"https://i.imgur.com/pkaHIPA.png",alt:"Youtube dark theme",title:"Youtube dark theme"}),`
`,s.exports.jsxs(e.p,{children:["This update to the blog can be seen in the commit - ",s.exports.jsx(e.a,{href:"https://github.com/sinnott74/BlogWebClient/commit/312c69e8df3c3ff69d6a1ba782380752af2c6d30",children:"312c69e"})]}),`
`,s.exports.jsx(e.h2,{children:"Adding the Setting"}),`
`,s.exports.jsx(e.p,{children:`Firstly we need a way for the user to toggle the dark theme. A new settings page was added to house
the dark theme toggle and all future settings, oh the possibilities!`}),`
`,s.exports.jsx(e.h3,{children:"Settings component"}),`
`,s.exports.jsxs(e.p,{children:[`Our settings component will have a single toggle switch that will control the dark theme. We're
using `,s.exports.jsx(e.a,{href:"https://react-md.mlaursen.com/",children:"React-MD"}),` which nicely implements the Material Design spec & allows for a lot of style
customisation.`]}),`
`,s.exports.jsxs(e.p,{children:["The component is fairly simple. As you can see from the ",s.exports.jsx(e.code,{children:"PropTypes"}),`, it takes in the boolean value
for the dark theme & a function to call when the theme is when the theme is toggled. This component
is very much just a dumb view.`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-jsx",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// settings.component.jsx"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"React"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"react"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"prop-types"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"./Settings.css"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Switch"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"react-md/lib/SelectionControls/Switch"'}),`;

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Settings"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"render"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` (
            `,s.exports.jsxs(e.span,{className:"xml",children:[s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"settings"'}),">"]}),`
                `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"Switch"}),`
                    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"darkTheme"'}),`
                    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"switch"'}),`
                    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"label"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"Dark theme"'}),`
                    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"name"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"darkTheme"'}),`
                    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"labelBefore"}),`
                    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"checked"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{this.props.darkTheme}"}),`
                    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"onChange"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{this.props.handleDarkThemeChange}"}),`
                />`]}),`
            `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`
        );
    }
}

`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"Settings"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"propTypes"}),` = {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"darkTheme"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"bool"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"handleDarkThemeChange"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"func"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"isRequired"}),`,
};
`]})}),`
`,s.exports.jsx(e.h3,{children:"Adding some logic and state"}),`
`,s.exports.jsxs(e.p,{children:["The components logic and stage is wired up using ",s.exports.jsx(e.a,{href:"https://redux.js.org/",children:"ReduxJS"}),". We're using ",s.exports.jsx(e.code,{children:"mapStateToProps"}),` to wire up
the dark theme value stored in the state to the `,s.exports.jsx(e.code,{children:"darkTheme"}),` value passed into the component. Next
`,s.exports.jsx(e.code,{children:"mapDispatchToProps"})," specifies that we should dispatch the ",s.exports.jsx(e.code,{children:"toggleDarkTheme"}),` function when our
components calls the `,s.exports.jsx(e.code,{children:"handleDarkThemeChange"})," function."]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-jsx",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// settings.container.jsx"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Settings"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"core/components/Settings"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," { connect } ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"react-redux"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," { isDarkTheme, toggleDarkTheme } ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"core/ducks/settings"'}),`;

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"mapStateToProps"})," = (",s.exports.jsx(e.span,{className:"hljs-params",children:"state"}),`) => ({
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"darkTheme"}),": ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"isDarkTheme"}),`(state),
});

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` mapDispatchToProps = {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"handleDarkThemeChange"}),`: toggleDarkTheme,
};

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"connect"}),"(mapStateToProps, mapDispatchToProps)(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Settings"}),`);
`]})}),`
`,s.exports.jsxs(e.p,{children:["The settings redux file is following the ",s.exports.jsx(e.a,{href:"https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c",children:"Ducks pattern"}),` & includes a reducer registry as a nice way
to load reducers into the redux store asynchronously.`]}),`
`,s.exports.jsx(e.p,{children:`As reducers go, it's a fairly simple one. There's only one action, which is to toggle them dark
mode. The value of the dark theme is initially read from local storage and persisted back there
every time its toggled.`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-js",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// settings.ducks.js"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," reducerRegistry ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"core/redux/ReducerRegistry"'}),`;

`,s.exports.jsx(e.span,{className:"hljs-comment",children:`/*
 * Sidenav actions
 */`}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"TOGGLE_DARKTHEME"})," = ",s.exports.jsx(e.span,{className:"hljs-string",children:'"TOGGLE_DARKTHEME"'}),`;

`,s.exports.jsx(e.span,{className:"hljs-comment",children:`/**
 * Reducer
 */`}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"}),` initialState = {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"darkTheme"}),": ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"localStorage"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"getItem"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:'"darkTheme"'}),") === ",s.exports.jsx(e.span,{className:"hljs-string",children:'"true"'})," || ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`,
};

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"reducer"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"state = initialState, action"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"switch"})," (action.",s.exports.jsx(e.span,{className:"hljs-property",children:"type"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"case"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"TOGGLE_DARKTHEME"}),`:
            `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," darkTheme = !state.",s.exports.jsx(e.span,{className:"hljs-property",children:"darkTheme"}),`;
            `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"localStorage"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"setItem"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:'"darkTheme"'}),`, darkTheme);
            `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` {
                ...state,
                `,s.exports.jsx(e.span,{className:"hljs-attr",children:"darkTheme"}),`: darkTheme,
            };
        `,s.exports.jsx(e.span,{className:"hljs-attr",children:"default"}),`:
            `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` state;
    }
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:`/**
 * Action Creators
 */`}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"toggleDarkTheme"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` {
        `,s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"TOGGLE_DARKTHEME"}),`,
    };
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:`/**
 * Selectors
 */`}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"isDarkTheme"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"state"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," state.",s.exports.jsx(e.span,{className:"hljs-property",children:"settings"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"darkTheme"}),`;
}

reducerRegistry.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"register"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:'"settings"'}),`, reducer);
`]})}),`
`,s.exports.jsx(e.h2,{children:"Getting stylish"}),`
`,s.exports.jsxs(e.p,{children:["My root component - ",s.exports.jsx(e.code,{children:"App.jsx"}),` is connected to the settings store and updates whenever the
`,s.exports.jsx(e.code,{children:"darkTheme"})," value updates. It simply adds a ",s.exports.jsx(e.code,{children:".dark"}),` class to the HTML element whenever darkTheme is
set. Various other sass files were updates to take this class into account.`]}),`
`,s.exports.jsx(e.p,{children:"The background colour and the text colour needed to be updated depending on the theme. E.g."}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-css",children:[`// sass card component example with dark theme
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"@import"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"core/style/variable"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-selector-class",children:".card"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-attribute",children:"background"}),`: $background-color-light;
}

`,s.exports.jsx(e.span,{className:"hljs-selector-class",children:".dark"})," ",s.exports.jsx(e.span,{className:"hljs-selector-class",children:".card"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-attribute",children:"background"}),`: $background-color-dark;
}
`]})}),`
`,s.exports.jsx(e.h2,{children:"Let there be dark"}),`
`,s.exports.jsx(e.img,{src:"https://i.imgur.com/hDqtIAA.gif",alt:"Dark theme demo",title:"Dark theme demo"})]})}}export{p as author,m as created,j as date,N as default,x as id,i as imageurl,d as tags,h as title};
