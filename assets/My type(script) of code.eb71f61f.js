import{j as s}from"./jsx-runtime.521a1206.js";import{u as o}from"./index.378a34ac.js";import"./vendor.81a8656d.js";const l="My type(script) of code",i="Daniel Sinnott",x="https://i.imgur.com/V2exSsi.png",m=18,d=["Monthly Challenge","Technical","Typescript","April"],u="Tue, 1st May 2018",h=new Date(1525194497752);function k(n={}){const{wrapper:a}=Object.assign({},o(),n.components);return a?s.exports.jsx(a,Object.assign({},n,{children:s.exports.jsx(t,{})})):t();function t(){const e=Object.assign({h2:"h2",p:"p",h3:"h3",code:"code",pre:"pre",span:"span",a:"a",h4:"h4"},o(),n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.h2,{children:"Typescript"}),`
`,s.exports.jsx(e.p,{children:`The technical goal for this month was to convert server for this blog from javascript to a
typescript. As this project grows & new features are added, it becomes quite difficult to prevent
inadvertent side affects. Test suites & good documentation can only bring a project so far, but the
ability to move quickly is paramount. The less time spent investigating how something works, the
more time there is to create solutions to real world problems.`}),`
`,s.exports.jsx(e.h3,{children:"Migration"}),`
`,s.exports.jsxs(e.p,{children:[`The migration to typescript was relatively painless and was done incrementally on a file by file
basis. I started by adding a fairly relaxed (not strict) `,s.exports.jsx(e.code,{children:"tsconfig.json"})]}),`
`,s.exports.jsx(e.pre,{className:"language-typescript",children:s.exports.jsxs(e.code,{className:"language-typescript",children:[s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
    `,s.exports.jsx(e.span,{className:"token string",children:'"compilerOptions"'}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
        `,s.exports.jsx(e.span,{className:"token string",children:'"outDir"'}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token string",children:'"./dist"'}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        `,s.exports.jsx(e.span,{className:"token string",children:'"allowJs"'}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        `,s.exports.jsx(e.span,{className:"token string",children:'"target"'}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token string",children:'"es2017"'}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        `,s.exports.jsx(e.span,{className:"token string",children:'"noImplicitAny"'}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
    `,s.exports.jsx(e.span,{className:"token string",children:'"include"'}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"["}),`
        `,s.exports.jsx(e.span,{className:"token string",children:'"./src/**/*"'}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"]"}),`
`,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),`
`]})}),`
`,s.exports.jsxs(e.p,{children:[`A build step then needs to be adde to convert your typescript to runnable javascript. A good
location for this is `,s.exports.jsx(e.code,{children:"package.json"}),` but your gulp script, webpack config file or any other build
file could be used.`]}),`
`,s.exports.jsx(e.pre,{className:"language-javascript",children:s.exports.jsxs(e.code,{className:"language-javascript",children:[s.exports.jsx(e.span,{className:"token string",children:'"scripts"'}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
    `,s.exports.jsx(e.span,{className:"token string",children:'"prestart"'}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token string",children:'"tsc"'}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
    `,s.exports.jsx(e.span,{className:"token string",children:'"start"'}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token string",children:'"node dist/index.js"'}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
`,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),`
`]})}),`
`,s.exports.jsx(e.p,{children:`We can now slowly begin converting our files to typescript & slowly making our configuration more &
more strict to weed out any potential errors.`}),`
`,s.exports.jsxs(e.p,{children:["Microsoft has useful ",s.exports.jsx(e.a,{href:"https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html",children:"migration documentation"})," on their typescript site."]}),`
`,s.exports.jsx(e.h3,{children:"Features"}),`
`,s.exports.jsxs(e.p,{children:[`Because typescript compiles to runnable javascript, it allows developers to use features that
haven't been implemented in NodeJS yet. A notable feature that I'm making use of in my ORM
infrastructure is `,s.exports.jsx(e.a,{href:"/blog/17",children:"Decorators"}),"."]}),`
`,s.exports.jsx(e.p,{children:`It allowed me to simply my model definition files & also allow the use of the models to by fully
typed. A quick comparison of the below files will allow you to see the difference & ease of
understanding that this feature provides.`}),`
`,s.exports.jsx(e.h4,{children:"Old javascript ORM entity file"}),`
`,s.exports.jsx(e.pre,{className:"language-javascript",children:s.exports.jsxs(e.code,{className:"language-javascript",children:[s.exports.jsx(e.span,{className:"token keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"token constant",children:"ORM"})," ",s.exports.jsx(e.span,{className:"token operator",children:"="})," ",s.exports.jsx(e.span,{className:"token function",children:"require"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token string",children:'"sinnott-orm"'}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
`,s.exports.jsx(e.span,{className:"token keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"DataTypes"})," ",s.exports.jsx(e.span,{className:"token operator",children:"="})," ",s.exports.jsx(e.span,{className:"token constant",children:"ORM"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token property-access",children:s.exports.jsx(e.span,{className:"token maybe-class-name",children:"DataTypes"})}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

`,s.exports.jsx(e.span,{className:"token keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"})," ",s.exports.jsx(e.span,{className:"token operator",children:"="})," ",s.exports.jsx(e.span,{className:"token constant",children:"ORM"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token method function property-access",children:"define"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),`
    `,s.exports.jsx(e.span,{className:"token string",children:'"user"'}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
        username`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
            type`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"DataTypes"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token constant",children:"STRING"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
            length`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token number",children:"30"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
            notNull`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
            unique`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        firstname`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
            type`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"DataTypes"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token constant",children:"STRING"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
            length`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token number",children:"30"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
            notNull`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        lastname`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
            type`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"DataTypes"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token constant",children:"STRING"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
            length`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token number",children:"30"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
            notNull`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        dob`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
            type`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"DataTypes"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token constant",children:"TIMESTAMP"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
            notNull`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
        customAttributes`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
            fullname`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
                `,s.exports.jsx(e.span,{className:"token function-variable function",children:"get"}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:")"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
                    `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"return"})," ",s.exports.jsxs(e.span,{className:"token template-string",children:[s.exports.jsx(e.span,{className:"token template-punctuation string",children:"`"}),s.exports.jsxs(e.span,{className:"token interpolation",children:[s.exports.jsx(e.span,{className:"token interpolation-punctuation punctuation",children:"${"}),s.exports.jsx(e.span,{className:"token keyword",children:"this"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token property-access",children:"firstname"}),s.exports.jsx(e.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),s.exports.jsx(e.span,{className:"token string",children:" "}),s.exports.jsxs(e.span,{className:"token interpolation",children:[s.exports.jsx(e.span,{className:"token interpolation-punctuation punctuation",children:"${"}),s.exports.jsx(e.span,{className:"token keyword",children:"this"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token property-access",children:"lastname"}),s.exports.jsx(e.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),s.exports.jsx(e.span,{className:"token template-punctuation string",children:"`"})]}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
                `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
            `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
        `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
`,s.exports.jsx(e.span,{className:"token punctuation",children:")"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

`,s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token method-variable function-variable method function property-access",children:"isUsernameAvailable"})," ",s.exports.jsx(e.span,{className:"token operator",children:"="})," ",s.exports.jsx(e.span,{className:"token keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"token keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token parameter",children:"username"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
    `,s.exports.jsx(e.span,{className:"token keyword",children:"let"})," count ",s.exports.jsx(e.span,{className:"token operator",children:"="})," ",s.exports.jsx(e.span,{className:"token keyword control-flow",children:"await"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token method function property-access",children:"count"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:"{"})," username ",s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
    `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"if"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"("}),"count ",s.exports.jsx(e.span,{className:"token operator",children:">"})," ",s.exports.jsx(e.span,{className:"token number",children:"0"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
        `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"return"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"false"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),`
    `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"return"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
`,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

`,s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token method-variable function-variable method function property-access",children:"readByUsername"})," ",s.exports.jsx(e.span,{className:"token operator",children:"="})," ",s.exports.jsx(e.span,{className:"token keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"token keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token parameter",children:"username"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
    `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"return"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token method function property-access",children:"findOne"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:"{"})," username",s.exports.jsx(e.span,{className:"token operator",children:":"})," username ",s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
`,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

module`,s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token property-access",children:"exports"})," ",s.exports.jsx(e.span,{className:"token operator",children:"="})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,s.exports.jsx(e.h4,{children:"New typescript ORM entity file"}),`
`,s.exports.jsx(e.pre,{className:"language-typescript",children:s.exports.jsxs(e.code,{className:"language-typescript",children:[s.exports.jsx(e.span,{className:"token keyword module",children:"import"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"Entity"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"Column"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"DerivedColumn"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"BaseModel"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," ",s.exports.jsx(e.span,{className:"token constant",children:"STRING"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," ",s.exports.jsx(e.span,{className:"token constant",children:"TIMESTAMP"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"}"})," ",s.exports.jsx(e.span,{className:"token keyword module",children:"from"})," ",s.exports.jsx(e.span,{className:"token string",children:'"sinnott-orm-typed"'}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
`,s.exports.jsx(e.span,{className:"token keyword module",children:"import"})," ",s.exports.jsx(e.span,{className:"token imports",children:s.exports.jsx(e.span,{className:"token maybe-class-name",children:"InformationalException"})})," ",s.exports.jsx(e.span,{className:"token keyword module",children:"from"})," ",s.exports.jsx(e.span,{className:"token string",children:'"../exception/InformationalException"'}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

`,s.exports.jsxs(e.span,{className:"token decorator",children:[s.exports.jsx(e.span,{className:"token at operator",children:"@"}),s.exports.jsx(e.span,{className:"token function",children:"Entity"})]}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),`
`,s.exports.jsx(e.span,{className:"token keyword module",children:"export"})," ",s.exports.jsx(e.span,{className:"token keyword module",children:"default"})," ",s.exports.jsx(e.span,{className:"token keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"token class-name",children:s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"})})," ",s.exports.jsx(e.span,{className:"token keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"token class-name",children:s.exports.jsx(e.span,{className:"token maybe-class-name",children:"BaseModel"})})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
    `,s.exports.jsxs(e.span,{className:"token decorator",children:[s.exports.jsx(e.span,{className:"token at operator",children:"@"}),s.exports.jsx(e.span,{className:"token function",children:"Column"})]}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:"{"})," type",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token constant",children:"STRING"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," notNull",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," length",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token number",children:"30"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),`
    username`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token builtin",children:"string"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

    `,s.exports.jsxs(e.span,{className:"token decorator",children:[s.exports.jsx(e.span,{className:"token at operator",children:"@"}),s.exports.jsx(e.span,{className:"token function",children:"Column"})]}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:"{"})," type",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token constant",children:"STRING"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," notNull",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," length",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token number",children:"30"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),`
    firstname`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token builtin",children:"string"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

    `,s.exports.jsxs(e.span,{className:"token decorator",children:[s.exports.jsx(e.span,{className:"token at operator",children:"@"}),s.exports.jsx(e.span,{className:"token function",children:"Column"})]}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:"{"})," type",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token constant",children:"STRING"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," notNull",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," length",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token number",children:"30"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),`
    lastname`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token builtin",children:"string"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

    `,s.exports.jsxs(e.span,{className:"token decorator",children:[s.exports.jsx(e.span,{className:"token at operator",children:"@"}),s.exports.jsx(e.span,{className:"token function",children:"Column"})]}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:"{"})," type",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token constant",children:"TIMESTAMP"}),s.exports.jsx(e.span,{className:"token punctuation",children:","})," notNull",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token boolean",children:"true"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),`
    dob`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token known-class-name class-name",children:"Date"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

    `,s.exports.jsxs(e.span,{className:"token decorator",children:[s.exports.jsx(e.span,{className:"token at operator",children:"@"}),s.exports.jsx(e.span,{className:"token function",children:"DerivedColumn"})]}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
        `,s.exports.jsx(e.span,{className:"token function-variable function",children:"get"}),s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:")"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
            `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"return"})," ",s.exports.jsxs(e.span,{className:"token template-string",children:[s.exports.jsx(e.span,{className:"token template-punctuation string",children:"`"}),s.exports.jsxs(e.span,{className:"token interpolation",children:[s.exports.jsx(e.span,{className:"token interpolation-punctuation punctuation",children:"${"}),s.exports.jsx(e.span,{className:"token keyword",children:"this"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token property-access",children:"firstname"}),s.exports.jsx(e.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),s.exports.jsx(e.span,{className:"token string",children:" "}),s.exports.jsxs(e.span,{className:"token interpolation",children:[s.exports.jsx(e.span,{className:"token interpolation-punctuation punctuation",children:"${"}),s.exports.jsx(e.span,{className:"token keyword",children:"this"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token property-access",children:"lastname"}),s.exports.jsx(e.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),s.exports.jsx(e.span,{className:"token template-punctuation string",children:"`"})]}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
        `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:","}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),`
    fullname`,s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token builtin",children:"string"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`

    `,s.exports.jsx(e.span,{className:"token keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"token function",children:"beforeSave"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:")"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
        `,s.exports.jsx(e.span,{className:"token keyword",children:"const"})," isUsernameAvailable ",s.exports.jsx(e.span,{className:"token operator",children:"="})," ",s.exports.jsx(e.span,{className:"token keyword control-flow",children:"await"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token method function property-access",children:"isUsernameAvailable"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token keyword",children:"this"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token property-access",children:"username"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
        `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"if"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token operator",children:"!"}),"isUsernameAvailable",s.exports.jsx(e.span,{className:"token punctuation",children:")"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
            `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"throw"})," ",s.exports.jsx(e.span,{className:"token keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"token class-name",children:s.exports.jsx(e.span,{className:"token maybe-class-name",children:"InformationalException"})}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token string",children:'"Duplicate username"'}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
        `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),`

    `,s.exports.jsxs(e.span,{className:"token doc-comment comment",children:[`/**
     * Checks if a username hasn't already been taken
     * `,s.exports.jsx(e.span,{className:"token keyword",children:"@param"})," ",s.exports.jsx(e.span,{className:"token parameter",children:"username"}),`
     */`]}),`
    `,s.exports.jsx(e.span,{className:"token keyword",children:"static"})," ",s.exports.jsx(e.span,{className:"token keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"token function",children:"isUsernameAvailable"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),"username",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token builtin",children:"string"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
        `,s.exports.jsx(e.span,{className:"token keyword",children:"const"})," count ",s.exports.jsx(e.span,{className:"token operator",children:"="})," ",s.exports.jsx(e.span,{className:"token keyword control-flow",children:"await"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsx(e.span,{className:"token method function property-access",children:"count"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:"{"})," username ",s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
        `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"return"})," ",s.exports.jsx(e.span,{className:"token operator",children:"!"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),"count ",s.exports.jsx(e.span,{className:"token operator",children:">"})," ",s.exports.jsx(e.span,{className:"token number",children:"0"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),`

    `,s.exports.jsxs(e.span,{className:"token doc-comment comment",children:[`/**
     * Reads a User by their username
     * `,s.exports.jsx(e.span,{className:"token keyword",children:"@param"})," ",s.exports.jsx(e.span,{className:"token parameter",children:"username"}),`
     */`]}),`
    `,s.exports.jsx(e.span,{className:"token keyword",children:"static"})," ",s.exports.jsx(e.span,{className:"token keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"token function",children:"readByUsername"}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),"username",s.exports.jsx(e.span,{className:"token operator",children:":"})," ",s.exports.jsx(e.span,{className:"token builtin",children:"string"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"})," ",s.exports.jsx(e.span,{className:"token punctuation",children:"{"}),`
        `,s.exports.jsx(e.span,{className:"token keyword control-flow",children:"return"})," ",s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"}),s.exports.jsx(e.span,{className:"token punctuation",children:"."}),s.exports.jsxs(e.span,{className:"token generic-function",children:[s.exports.jsx(e.span,{className:"token function",children:"findOne"}),s.exports.jsxs(e.span,{className:"token generic class-name",children:[s.exports.jsx(e.span,{className:"token operator",children:"<"}),s.exports.jsx(e.span,{className:"token maybe-class-name",children:"User"}),s.exports.jsx(e.span,{className:"token operator",children:">"})]})]}),s.exports.jsx(e.span,{className:"token punctuation",children:"("}),s.exports.jsx(e.span,{className:"token punctuation",children:"{"})," username",s.exports.jsx(e.span,{className:"token operator",children:":"})," username ",s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),s.exports.jsx(e.span,{className:"token punctuation",children:")"}),s.exports.jsx(e.span,{className:"token punctuation",children:";"}),`
    `,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),`
`,s.exports.jsx(e.span,{className:"token punctuation",children:"}"}),`
`]})}),`
`,s.exports.jsx(e.h3,{children:"Benchmarks"}),`
`,s.exports.jsx(e.p,{children:`Strong typing may be a pleasure to work with from a development point of view, but if it impacted
performance of the application there would be major questions about whether it'd be worth it.`}),`
`,s.exports.jsx(e.p,{children:`We can see from the benchmark results below that the performance of the javascript & typescript
versions of the server are virtually identical. This is largely expected. We're using NodeJS 9+ so
we can get access to the latest & greatest features. The transpilation from javascript to typescript
only really affects the import statements & the decorators used. If however we were to transpile
down to a version of javascript which doesn't support advanced language features like async await
for instance, the performance may take a hit.`}),`
`,s.exports.jsxs(e.p,{children:["The below benchmark was performed using ",s.exports.jsx(e.a,{href:"https://httpd.apache.org/docs/2.4/programs/ab.html",children:"Apache Benchmark"}),` (ab), which is was incredibly simple to
use.`]}),`
`,s.exports.jsx(e.h4,{children:"Javascript implementation"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{children:`ab -n 100 -c 5 https://*************/api/blogposts/17
This is ApacheBench, Version 2.3 <$Revision: 1807734 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking ************* (be patient).....done


Server Software:
Server Hostname:        *************
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES256-GCM-SHA384,2048,256
TLS Server Name:        *************

Document Path:          /api/blogposts/17
Document Length:        8385 bytes

Concurrency Level:      5
Time taken for tests:   15.004 seconds
Complete requests:      100
Failed requests:        0
Total transferred:      887782 bytes
HTML transferred:       838500 bytes
**Requests per second:    6.67 [#/sec] (mean)**
Time per request:       750.179 [ms] (mean)
Time per request:       150.036 [ms] (mean, across all concurrent requests)
Transfer rate:          57.78 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:      419  443  26.4    434     583
Processing:   271  288  32.0    281     570
Waiting:      143  156  26.1    149     363
Total:        694  731  51.3    717    1153

Percentage of the requests served within a certain time (ms)
  50%    717
  66%    725
  75%    733
  80%    740
  90%    786
  95%    802
  98%    833
  99%   1153
 100%   1153 (longest request)
`})}),`
`,s.exports.jsx(e.h4,{children:"Typescript Implementation"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{children:`ab  -n 100 -c 5 https://*************/api/blogposts/9
This is ApacheBench, Version 2.3 <$Revision: 1807734 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking ************* (be patient).....done


Server Software:
Server Hostname:        *************
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES256-GCM-SHA384,2048,256
TLS Server Name:        *************

Document Path:          /api/blogposts/9
Document Length:        8400 bytes

Concurrency Level:      5
Time taken for tests:   14.810 seconds
Complete requests:      100
Failed requests:        0
Total transferred:      889256 bytes
HTML transferred:       840000 bytes
Requests per second:    6.75 [#/sec] (mean)
Time per request:       740.517 [ms] (mean)
Time per request:       148.103 [ms] (mean, across all concurrent requests)
Transfer rate:          58.64 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:      416  435  19.8    428     548
Processing:   273  294  52.1    284     758
Waiting:      144  164  48.5    153     597
Total:        692  729  57.6    715    1206

Percentage of the requests served within a certain time (ms)
  50%    715
  66%    723
  75%    732
  80%    735
  90%    775
  95%    822
  98%    840
  99%   1206
 100%   1206 (longest request)
`})})]})}}export{i as author,h as created,u as date,k as default,m as id,x as imageurl,d as tags,l as title};
