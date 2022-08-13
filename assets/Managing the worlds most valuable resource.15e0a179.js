import{j as s}from"./jsx-runtime.0c824d9b.js";import{u as l}from"./index.d4dadf5b.js";import"./index.78f29dca.js";const c="Managing the world's most valuable resource",h="Daniel Sinnott",p="https://i.imgur.com/qlIM4k7.png",x=10,d=["Monthly Challenge","Technical","February","Data","SQL"],j="Thu, 1st Mar 2018",m=new Date(1519948692714);function u(t={}){const{wrapper:a}=Object.assign({},l(),t.components);return a?s.exports.jsx(a,Object.assign({},t,{children:s.exports.jsx(n,{})})):n();function n(){const e=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",hr:"hr",h3:"h3",pre:"pre",code:"code",span:"span"},l(),t.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsxs(e.p,{children:["The technical challenge for February, as outlined in ",s.exports.jsx(e.a,{href:"/blog/6",children:"One month at a time"}),`, was to do a complete
rewrite of the Data Access Layer for this blog.`]}),`
`,s.exports.jsx(e.p,{children:`The goal was to end up with an ORM like infrastructure that would let me easily work with my data
model.`}),`
`,s.exports.jsx(e.h2,{children:"Influences"}),`
`,s.exports.jsx(e.p,{children:`I browsed the source code of several javascript ORMs at the start of the month to gauge the size of
the mountain I was about to climb. The 2 which stood out to me were:`}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.a,{href:"https://github.com/sequelize/sequelize",children:"Sequelize"}),` is a well established ORM which contains all the bells & whistles. Its no wonder
that this package has been downloaded 900,000+ in the last month.`]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.a,{href:"https://github.com/1602/jugglingdb",children:"JugglingDB"}),` impressed me with its simplicity. Its also no wonder that it became part of
StrongLoop's popular LoopBack framework.`]}),`
`]}),`
`,s.exports.jsx(e.h2,{children:"Requirements"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"Ability to define database Entities/Tables."}),`
`,s.exports.jsx(e.li,{children:"Ability to easily perform CRUD operations on those entities."}),`
`,s.exports.jsx(e.li,{children:"Ability to define & work with entity associations / relationships / foreign references."}),`
`,s.exports.jsx(e.li,{children:"Efficient persisting of data"}),`
`]}),`
`,s.exports.jsx(e.hr,{}),`
`,s.exports.jsx(e.h3,{children:"Ability to define database Entities/Tables"}),`
`,s.exports.jsx(e.p,{children:`The following is my definition for my User entity. Based on this definition, a database table
definition & A User constructor is created, with getters & setters for the defined attributes. Each
entity will be automatically given a primary key of ID.`}),`
`,s.exports.jsx(e.p,{children:"ORM.define API is defined as follows"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-javascript",children:[s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"ORM"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"define"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"ModelName"}),", ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"AttributeObject"}),", ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Options"}),`)
`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"ModelName"}),": <",s.exports.jsx(e.span,{className:"hljs-title class_",children:"String"}),"> ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"The"})," name ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"of"})," the ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Model"}),"/",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Entity"}),"/",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Database"}),` table
`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"Attribute"}),": <",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Object"}),"> ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Contains"})," key value pairings ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"of"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Model"}),` attribute name to attribute definition
`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"Options"}),": <",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Object"}),"> ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Contains"})," extra model options. ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Such"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"as"})," the custom attributes displayed below. ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"The"})," object is where the majority ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"of"})," the progressive enhancement to ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"})," infrastructure will take place. E.",s.exports.jsx(e.span,{className:"hljs-property",children:"g"}),`. optimistic locking & temporal attributes (created_on & last_modified_on)
`]})}),`
`,s.exports.jsx(e.p,{children:"Custom Attributes allow for derived data to be accessible on the Model object."}),`
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
`]})}),`
`,s.exports.jsx(e.h3,{children:"Ability to easily perform CRUD operations on those entities"}),`
`,s.exports.jsx(e.p,{children:`The following is a snippet from this blog's BlogPostRouter. The post verb is responsible for
creating a new BlogPost. Its as simple as creating a new BlogPost & saving it.`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-javascript",children:["router.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"post"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:'"/"'}),", ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.exports.jsx(e.span,{className:"hljs-params",children:"req, res"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," blogpostData = { ...req.",s.exports.jsx(e.span,{className:"hljs-property",children:"body"}),` };
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," blogPost = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"BlogPost"}),`(blogpostData);
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"await"})," blogPost.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"save"}),`();
    res.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"json"}),`(blogPost);
});
`]})}),`
`,s.exports.jsx(e.p,{children:`The infrastructure knows this is a brand new BlogPost & sends an SQL INSERT command to the database.
Any further modification to blogPost must also be persisted by calling save. This will result in an
SQL update.`}),`
`,s.exports.jsx(e.h3,{children:"Ability to define & work with entity associations / relationships / foreign references"}),`
`,s.exports.jsx(e.p,{children:"The infrastructure allows for all three of the possible table relationships:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"One to One"}),`
`,s.exports.jsx(e.li,{children:"One to Many"}),`
`,s.exports.jsx(e.li,{children:"Many to One"}),`
`]}),`
`,s.exports.jsx(e.p,{children:"Below is an example of a One to Many relationship."}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-javascript",children:[s.exports.jsx(e.span,{className:"hljs-title class_",children:"User"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"oneToMany"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"BlogPost"}),", { ",s.exports.jsx(e.span,{className:"hljs-attr",children:"as"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"author"'}),` });
`]})}),`
`,s.exports.jsx(e.p,{children:`We are defining a One to Many relationship between User & BlogPost. i.e A User can have many
BlogPosts. A foreign key reference to User is added onto the BlogPost entity. The 'as' option is
also defined, so we are saying the User associated with a BlogPost will be referred to as the
Author.`}),`
`,s.exports.jsx(e.p,{children:`Below is an example of how to read a blog post & include is author. Calling save on the returned
entity will attempt to save any changes to both the blogpost & the associated author.`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-javascript",children:[s.exports.jsx(e.span,{className:"hljs-title class_",children:"BlogPost"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"get"}),"(id, { ",s.exports.jsx(e.span,{className:"hljs-attr",children:"includes"}),": [",s.exports.jsx(e.span,{className:"hljs-string",children:'"author"'}),`] });
`]})}),`
`,s.exports.jsx(e.h3,{children:"Efficient persisting of data"}),`
`,s.exports.jsx(e.p,{children:`Calling save on highly nested entities may result in a large number of SQL insert / modify commands
being executed. This could be very resource consuming & inefficient. What is no attributes on the
entities had changed?`}),`
`,s.exports.jsx(e.p,{children:`For this reason the ORM infrastructure has the concept of dirty data. It will only execute SQL
commands for an entity when it contains attributes who's values changed since the entity was read
from the database or who's values were input by the user. This not only reduces the number of SQL
commands down to only what is necessary, but it reduces each individual SQL command down to updating
only the attributes which have changed.`}),`
`,s.exports.jsx(e.hr,{}),`
`,s.exports.jsx(e.h2,{children:"Final Points"}),`
`,s.exports.jsx(e.p,{children:`The ORM infrastructure has been fully separated out from the Server directory into its own
directory. This will allow me to update each independently.`}),`
`,s.exports.jsx(e.p,{children:`The ORM also nowhere near finished. This is the MVP for my Blog app, with the aim to progressively
enhance the infrastructure as requirements see fit.`})]})}}export{h as author,m as created,j as date,u as default,x as id,p as imageurl,d as tags,c as title};
