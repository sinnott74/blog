import{j as s}from"./jsx-runtime.0c824d9b.js";import{u as l}from"./index.d4dadf5b.js";import"./index.78f29dca.js";const h="My type(script) of code",x="Daniel Sinnott",i="https://i.imgur.com/V2exSsi.png",j=18,o=["Monthly Challenge","Technical","Typescript","April"],m="Tue, 1st May 2018",d=new Date(1525194497752);function N(a={}){const{wrapper:n}=Object.assign({},l(),a.components);return n?s.exports.jsx(n,Object.assign({},a,{children:s.exports.jsx(r,{})})):r();function r(){const e=Object.assign({h2:"h2",p:"p",h3:"h3",code:"code",pre:"pre",span:"span",a:"a",h4:"h4"},l(),a.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.h2,{children:"Typescript"}),`
`,s.exports.jsx(e.p,{children:`The technical goal for this month was to convert server for this blog from javascript to a
typescript. As this project grows & new features are added, it becomes quite difficult to prevent
inadvertent side affects. Test suites & good documentation can only bring a project so far, but the
ability to move quickly is paramount. The less time spent investigating how something works, the
more time there is to create solutions to real world problems.`}),`
`,s.exports.jsx(e.h3,{children:"Migration"}),`
`,s.exports.jsxs(e.p,{children:[`The migration to typescript was relatively painless and was done incrementally on a file by file
basis. I started by adding a fairly relaxed (not strict) `,s.exports.jsx(e.code,{children:"tsconfig.json"})]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[`{
    `,s.exports.jsx(e.span,{className:"hljs-string",children:'"compilerOptions"'}),`: {
        `,s.exports.jsx(e.span,{className:"hljs-string",children:'"outDir"'}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"./dist"'}),`,
        `,s.exports.jsx(e.span,{className:"hljs-string",children:'"allowJs"'}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
        `,s.exports.jsx(e.span,{className:"hljs-string",children:'"target"'}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"es2017"'}),`,
        `,s.exports.jsx(e.span,{className:"hljs-string",children:'"noImplicitAny"'}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
    },
    `,s.exports.jsx(e.span,{className:"hljs-string",children:'"include"'}),`: [
        `,s.exports.jsx(e.span,{className:"hljs-string",children:'"./src/**/*"'}),`
    ]
}
`]})}),`
`,s.exports.jsxs(e.p,{children:[`A build step then needs to be adde to convert your typescript to runnable javascript. A good
location for this is `,s.exports.jsx(e.code,{children:"package.json"}),` but your gulp script, webpack config file or any other build
file could be used.`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-javascript",children:[s.exports.jsx(e.span,{className:"hljs-string",children:'"scripts"'}),`: {
    `,s.exports.jsx(e.span,{className:"hljs-string",children:'"prestart"'}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"tsc"'}),`,
    `,s.exports.jsx(e.span,{className:"hljs-string",children:'"start"'}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"node dist/index.js"'}),`,
}
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
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-javascript",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"ORM"})," = ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"require"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:'"sinnott-orm"'}),`);
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"DataTypes"})," = ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"ORM"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"DataTypes"}),`;

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"})," = ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"ORM"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"define"}),`(
    `,s.exports.jsx(e.span,{className:"hljs-string",children:'"user"'}),`,
    {
        `,s.exports.jsx(e.span,{className:"hljs-attr",children:"username"}),`: {
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"DataTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"STRING"}),`,
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"length"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"30"}),`,
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"notNull"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"unique"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
        },
        `,s.exports.jsx(e.span,{className:"hljs-attr",children:"firstname"}),`: {
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"DataTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"STRING"}),`,
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"length"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"30"}),`,
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"notNull"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
        },
        `,s.exports.jsx(e.span,{className:"hljs-attr",children:"lastname"}),`: {
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"DataTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"STRING"}),`,
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"length"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"30"}),`,
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"notNull"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
        },
        `,s.exports.jsx(e.span,{className:"hljs-attr",children:"dob"}),`: {
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"DataTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"TIMESTAMP"}),`,
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"notNull"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`,
        },
    },
    {
        `,s.exports.jsx(e.span,{className:"hljs-attr",children:"customAttributes"}),`: {
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"fullname"}),`: {
                `,s.exports.jsx(e.span,{className:"hljs-attr",children:"get"}),": ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
                    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsxs(e.span,{className:"hljs-string",children:["`",s.exports.jsxs(e.span,{className:"hljs-subst",children:["${",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".firstname}"]})," ",s.exports.jsxs(e.span,{className:"hljs-subst",children:["${",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".lastname}"]}),"`"]}),`;
                },
            },
        },
    },
);

`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"isUsernameAvailable"})," = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.exports.jsx(e.span,{className:"hljs-params",children:"username"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," count = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"count"}),`({ username });
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (count > ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`;
    }
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`;
};

`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"readByUsername"})," = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.exports.jsx(e.span,{className:"hljs-params",children:"username"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"findOne"}),"({ ",s.exports.jsx(e.span,{className:"hljs-attr",children:"username"}),`: username });
};

`,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"module"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"exports"})," = ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),`;
`]})}),`
`,s.exports.jsx(e.h4,{children:"New typescript ORM entity file"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," { ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Entity"}),", ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Column"}),", ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"DerivedColumn"}),", ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"BaseModel"}),", ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"STRING"}),", ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"TIMESTAMP"})," } ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"sinnott-orm-typed"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"InformationalException"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"../exception/InformationalException"'}),`;

`,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Entity"}),`()
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_ inherited__",children:"BaseModel"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Column"}),"({ ",s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"STRING"}),", ",s.exports.jsx(e.span,{className:"hljs-attr",children:"notNull"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),", ",s.exports.jsx(e.span,{className:"hljs-attr",children:"length"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"30"}),` })
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"username"}),": ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),`;

    `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Column"}),"({ ",s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"STRING"}),", ",s.exports.jsx(e.span,{className:"hljs-attr",children:"notNull"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),", ",s.exports.jsx(e.span,{className:"hljs-attr",children:"length"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"30"}),` })
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"firstname"}),": ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),`;

    `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Column"}),"({ ",s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"STRING"}),", ",s.exports.jsx(e.span,{className:"hljs-attr",children:"notNull"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),", ",s.exports.jsx(e.span,{className:"hljs-attr",children:"length"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"30"}),` })
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"lastname"}),": ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),`;

    `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Column"}),"({ ",s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"TIMESTAMP"}),", ",s.exports.jsx(e.span,{className:"hljs-attr",children:"notNull"}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),` })
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"dob"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Date"}),`;

    `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@DerivedColumn"}),`({
        `,s.exports.jsx(e.span,{className:"hljs-attr",children:"get"}),": ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
            `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsxs(e.span,{className:"hljs-string",children:["`",s.exports.jsxs(e.span,{className:"hljs-subst",children:["${",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".firstname}"]})," ",s.exports.jsxs(e.span,{className:"hljs-subst",children:["${",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".lastname}"]}),"`"]}),`;
        },
    })
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"fullname"}),": ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),`;

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"beforeSave"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," isUsernameAvailable = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"isUsernameAvailable"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"username"}),`);
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"}),` (!isUsernameAvailable) {
            `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"throw"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"InformationalException"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:'"Duplicate username"'}),`);
        }
    }

    `,s.exports.jsxs(e.span,{className:"hljs-comment",children:[`/**
     * Checks if a username hasn't already been taken
     * `,s.exports.jsx(e.span,{className:"hljs-doctag",children:"@param"})," ",s.exports.jsx(e.span,{className:"hljs-variable",children:"username"}),`
     */`]}),`
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"static"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"isUsernameAvailable"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:["username: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"})]}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," count = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"count"}),`({ username });
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," !(count > ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`);
    }

    `,s.exports.jsxs(e.span,{className:"hljs-comment",children:[`/**
     * Reads a User by their username
     * `,s.exports.jsx(e.span,{className:"hljs-doctag",children:"@param"})," ",s.exports.jsx(e.span,{className:"hljs-variable",children:"username"}),`
     */`]}),`
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"static"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"readByUsername"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:["username: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"})]}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"findOne"}),"<",s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),">({ ",s.exports.jsx(e.span,{className:"hljs-attr",children:"username"}),`: username });
    }
}
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
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-yaml",children:[s.exports.jsx(e.span,{className:"hljs-string",children:"ab"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"-n"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"100"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"-c"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"5"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"https://*************/api/blogposts/17"}),`
`,s.exports.jsx(e.span,{className:"hljs-string",children:"This"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"is"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"ApacheBench,"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Version"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"2.3"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"<$Revision:"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"1807734"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"$>"}),`
`,s.exports.jsx(e.span,{className:"hljs-string",children:"Copyright"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"1996 "}),s.exports.jsx(e.span,{className:"hljs-string",children:"Adam"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Twiss,"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Zeus"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Technology"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Ltd,"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"http://www.zeustech.net/"}),`
`,s.exports.jsx(e.span,{className:"hljs-string",children:"Licensed"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"to"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"The"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Apache"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Software"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Foundation,"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"http://www.apache.org/"}),`

`,s.exports.jsx(e.span,{className:"hljs-string",children:"Benchmarking"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"*************"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"(be"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"patient).....done"}),`


`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Server Software:"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Server Hostname:"}),"        ",s.exports.jsx(e.span,{className:"hljs-string",children:"*************"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Server Port:"}),"            ",s.exports.jsx(e.span,{className:"hljs-number",children:"443"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"SSL/TLS Protocol:"}),"       ",s.exports.jsx(e.span,{className:"hljs-string",children:"TLSv1.2,ECDHE-RSA-AES256-GCM-SHA384,2048,256"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"TLS Server Name:"}),"        ",s.exports.jsx(e.span,{className:"hljs-string",children:"*************"}),`

`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Document Path:"}),"          ",s.exports.jsx(e.span,{className:"hljs-string",children:"/api/blogposts/17"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Document Length:"}),"        ",s.exports.jsx(e.span,{className:"hljs-number",children:"8385 "}),s.exports.jsx(e.span,{className:"hljs-string",children:"bytes"}),`

`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Concurrency Level:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"5"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Time taken for tests:"}),"   ",s.exports.jsx(e.span,{className:"hljs-number",children:"15.004"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"seconds"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Complete requests:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"100"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Failed requests:"}),"        ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Total transferred:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"887782"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"bytes"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"HTML transferred:"}),"       ",s.exports.jsx(e.span,{className:"hljs-number",children:"838500"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"bytes"}),`
`,s.exports.jsx(e.span,{className:"hljs-string",children:"**Requests"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"per second:"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"6.67"})," [",s.exports.jsx(e.span,{className:"hljs-comment",children:"#/sec] (mean)**"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Time per request:"}),"       ",s.exports.jsx(e.span,{className:"hljs-number",children:"750.179"})," [",s.exports.jsx(e.span,{className:"hljs-string",children:"ms"}),"] ",s.exports.jsx(e.span,{className:"hljs-string",children:"(mean)"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Time per request:"}),"       ",s.exports.jsx(e.span,{className:"hljs-number",children:"150.036"})," [",s.exports.jsx(e.span,{className:"hljs-string",children:"ms"}),"] ",s.exports.jsx(e.span,{className:"hljs-string",children:"(mean"}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:"across"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"all"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"concurrent"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"requests)"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Transfer rate:"}),"          ",s.exports.jsx(e.span,{className:"hljs-number",children:"57.78"})," [",s.exports.jsx(e.span,{className:"hljs-string",children:"Kbytes/sec"}),"] ",s.exports.jsx(e.span,{className:"hljs-string",children:"received"}),`

`,s.exports.jsx(e.span,{className:"hljs-string",children:"Connection"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Times"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"(ms)"}),`
              `,s.exports.jsx(e.span,{className:"hljs-string",children:"min"}),"  ",s.exports.jsx(e.span,{className:"hljs-string",children:"mean"}),"[",s.exports.jsx(e.span,{className:"hljs-string",children:"+/-sd"}),"] ",s.exports.jsx(e.span,{className:"hljs-string",children:"median"}),"   ",s.exports.jsx(e.span,{className:"hljs-string",children:"max"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Connect:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"419"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"443"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"26.4"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"434"}),"     ",s.exports.jsx(e.span,{className:"hljs-number",children:"583"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Processing:"}),"   ",s.exports.jsx(e.span,{className:"hljs-number",children:"271"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"288"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"32.0"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"281"}),"     ",s.exports.jsx(e.span,{className:"hljs-number",children:"570"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Waiting:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"143"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"156"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"26.1"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"149"}),"     ",s.exports.jsx(e.span,{className:"hljs-number",children:"363"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Total:"}),"        ",s.exports.jsx(e.span,{className:"hljs-number",children:"694"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"731"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"51.3"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"717"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"1153"}),`

`,s.exports.jsx(e.span,{className:"hljs-string",children:"Percentage"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"of"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"the"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"requests"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"served"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"within"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"a"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"certain"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"time"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"(ms)"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"50"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"717"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"66"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"725"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"75"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"733"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"80"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"740"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"90"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"786"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"95"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"802"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"98"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"833"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"99"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"   ",s.exports.jsx(e.span,{className:"hljs-number",children:"1153"}),`
 `,s.exports.jsx(e.span,{className:"hljs-number",children:"100"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"   ",s.exports.jsx(e.span,{className:"hljs-number",children:"1153"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"(longest"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"request)"}),`
`]})}),`
`,s.exports.jsx(e.h4,{children:"Typescript Implementation"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-yaml",children:[s.exports.jsx(e.span,{className:"hljs-string",children:"ab"}),"  ",s.exports.jsx(e.span,{className:"hljs-string",children:"-n"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"100"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"-c"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"5"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"https://*************/api/blogposts/9"}),`
`,s.exports.jsx(e.span,{className:"hljs-string",children:"This"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"is"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"ApacheBench,"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Version"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"2.3"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"<$Revision:"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"1807734"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"$>"}),`
`,s.exports.jsx(e.span,{className:"hljs-string",children:"Copyright"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"1996 "}),s.exports.jsx(e.span,{className:"hljs-string",children:"Adam"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Twiss,"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Zeus"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Technology"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Ltd,"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"http://www.zeustech.net/"}),`
`,s.exports.jsx(e.span,{className:"hljs-string",children:"Licensed"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"to"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"The"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Apache"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Software"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Foundation,"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"http://www.apache.org/"}),`

`,s.exports.jsx(e.span,{className:"hljs-string",children:"Benchmarking"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"*************"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"(be"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"patient).....done"}),`


`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Server Software:"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Server Hostname:"}),"        ",s.exports.jsx(e.span,{className:"hljs-string",children:"*************"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Server Port:"}),"            ",s.exports.jsx(e.span,{className:"hljs-number",children:"443"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"SSL/TLS Protocol:"}),"       ",s.exports.jsx(e.span,{className:"hljs-string",children:"TLSv1.2,ECDHE-RSA-AES256-GCM-SHA384,2048,256"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"TLS Server Name:"}),"        ",s.exports.jsx(e.span,{className:"hljs-string",children:"*************"}),`

`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Document Path:"}),"          ",s.exports.jsx(e.span,{className:"hljs-string",children:"/api/blogposts/9"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Document Length:"}),"        ",s.exports.jsx(e.span,{className:"hljs-number",children:"8400 "}),s.exports.jsx(e.span,{className:"hljs-string",children:"bytes"}),`

`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Concurrency Level:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"5"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Time taken for tests:"}),"   ",s.exports.jsx(e.span,{className:"hljs-number",children:"14.810"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"seconds"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Complete requests:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"100"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Failed requests:"}),"        ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Total transferred:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"889256"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"bytes"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"HTML transferred:"}),"       ",s.exports.jsx(e.span,{className:"hljs-number",children:"840000"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"bytes"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Requests per second:"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"6.75"})," [",s.exports.jsx(e.span,{className:"hljs-comment",children:"#/sec] (mean)"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Time per request:"}),"       ",s.exports.jsx(e.span,{className:"hljs-number",children:"740.517"})," [",s.exports.jsx(e.span,{className:"hljs-string",children:"ms"}),"] ",s.exports.jsx(e.span,{className:"hljs-string",children:"(mean)"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Time per request:"}),"       ",s.exports.jsx(e.span,{className:"hljs-number",children:"148.103"})," [",s.exports.jsx(e.span,{className:"hljs-string",children:"ms"}),"] ",s.exports.jsx(e.span,{className:"hljs-string",children:"(mean"}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:"across"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"all"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"concurrent"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"requests)"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Transfer rate:"}),"          ",s.exports.jsx(e.span,{className:"hljs-number",children:"58.64"})," [",s.exports.jsx(e.span,{className:"hljs-string",children:"Kbytes/sec"}),"] ",s.exports.jsx(e.span,{className:"hljs-string",children:"received"}),`

`,s.exports.jsx(e.span,{className:"hljs-string",children:"Connection"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"Times"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"(ms)"}),`
              `,s.exports.jsx(e.span,{className:"hljs-string",children:"min"}),"  ",s.exports.jsx(e.span,{className:"hljs-string",children:"mean"}),"[",s.exports.jsx(e.span,{className:"hljs-string",children:"+/-sd"}),"] ",s.exports.jsx(e.span,{className:"hljs-string",children:"median"}),"   ",s.exports.jsx(e.span,{className:"hljs-string",children:"max"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Connect:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"416"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"435"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"19.8"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"428"}),"     ",s.exports.jsx(e.span,{className:"hljs-number",children:"548"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Processing:"}),"   ",s.exports.jsx(e.span,{className:"hljs-number",children:"273"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"294"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"52.1"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"284"}),"     ",s.exports.jsx(e.span,{className:"hljs-number",children:"758"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Waiting:"}),"      ",s.exports.jsx(e.span,{className:"hljs-number",children:"144"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"164"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"48.5"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"153"}),"     ",s.exports.jsx(e.span,{className:"hljs-number",children:"597"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"Total:"}),"        ",s.exports.jsx(e.span,{className:"hljs-number",children:"692"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"729"}),"  ",s.exports.jsx(e.span,{className:"hljs-number",children:"57.6"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"715"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"1206"}),`

`,s.exports.jsx(e.span,{className:"hljs-string",children:"Percentage"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"of"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"the"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"requests"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"served"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"within"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"a"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"certain"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"time"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"(ms)"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"50"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"715"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"66"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"723"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"75"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"732"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"80"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"735"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"90"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"775"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"95"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"822"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"98"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"    ",s.exports.jsx(e.span,{className:"hljs-number",children:"840"}),`
  `,s.exports.jsx(e.span,{className:"hljs-number",children:"99"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"   ",s.exports.jsx(e.span,{className:"hljs-number",children:"1206"}),`
 `,s.exports.jsx(e.span,{className:"hljs-number",children:"100"}),s.exports.jsx(e.span,{className:"hljs-string",children:"%"}),"   ",s.exports.jsx(e.span,{className:"hljs-number",children:"1206"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"(longest"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"request)"}),`
`]})})]})}}export{x as author,d as created,m as date,N as default,j as id,i as imageurl,o as tags,h as title};
