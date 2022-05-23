import{j as s}from"./jsx-runtime.677020d1.js";import{u as t}from"./index.d409b08a.js";import"./index.6de8143e.js";const i="Metadata is the new meta",p="Daniel Sinnott",h="https://i.imgur.com/UNJ8ecB.png",x=17,d=["Technical","Decorators","Typescript"],j="Tue, 24th Apr 2018",m=new Date(1524575314299);function u(a={}){const{wrapper:r}=Object.assign({},t(),a.components);return r?s.exports.jsx(r,Object.assign({},a,{children:s.exports.jsx(n,{})})):n();function n(){const e=Object.assign({h2:"h2",p:"p",strong:"strong",a:"a",code:"code",pre:"pre",span:"span",ul:"ul",li:"li",blockquote:"blockquote",ol:"ol",h3:"h3",h4:"h4"},t(),a.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.h2,{children:"Decorators"}),`
`,s.exports.jsx(e.p,{children:`Decorators are a way to add metadata to parts of your Javascript code. Those familar Java will see
them as Javascript's implementation of annotations.`}),`
`,s.exports.jsxs(e.p,{children:["It's worth noting before we get into it that decorators are overly complicated. ",s.exports.jsx(e.strong,{children:`They're just
functions`}),"."]}),`
`,s.exports.jsxs(e.p,{children:["Decorators are currently a ",s.exports.jsx(e.a,{href:"https://tc39.github.io/proposal-decorators/",children:"TC39 Proposal"}),` to add annotations to the ECMA/Javascript language.
Luckily, this proposal has already been implemented in Microsoft Typescript, which is a superset of
Javascript. However, the following `,s.exports.jsx(e.code,{children:"compilerOptions"})," are needed in your ",s.exports.jsx(e.code,{children:"tsconfig.json"}),` to allow you
to use decorators in typescript.`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[`{
    `,s.exports.jsx(e.span,{className:"hljs-string",children:'"compilerOptions"'}),`: {
        `,s.exports.jsx(e.span,{className:"hljs-string",children:'"experimentalDecorators"'}),": ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`
    }
}

`]})}),`
`,s.exports.jsxs(e.p,{children:["Javascript lacks a powerful ",s.exports.jsx(e.code,{children:"Reflection"}),` like Java, as such decorators work a little differently to
annotations. They need to be given access to all variables associated with what they are decorating
as opposed to being able to examine its own behaviour at runtime.`]}),`
`,s.exports.jsx(e.p,{children:"Decorators come in five flavours:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"Class decorators"}),`
`,s.exports.jsx(e.li,{children:"Method decorators"}),`
`,s.exports.jsx(e.li,{children:"Accessor decorators"}),`
`,s.exports.jsx(e.li,{children:"Property decorators"}),`
`,s.exports.jsx(e.li,{children:"Parameter decorators"}),`
`]}),`
`,s.exports.jsx(e.p,{children:`According to the Typescript documentation there is a well defined order to how decorators are
applied at runtime:`}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsxs(e.ol,{children:[`
`,s.exports.jsx(e.li,{children:`Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each
instance member.`}),`
`,s.exports.jsx(e.li,{children:`Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each
static member.`}),`
`,s.exports.jsx(e.li,{children:"Parameter Decorators are applied for the constructor."}),`
`,s.exports.jsx(e.li,{children:"Class Decorators are applied for the class."}),`
`]}),`
`]}),`
`,s.exports.jsx(e.h3,{children:"Decorator Factories"}),`
`,s.exports.jsx(e.p,{children:`The signature for each of the decorators is defined in the proposal. As such, there isn't much
flexibility to allow developers to customise the inputs.`}),`
`,s.exports.jsx(e.p,{children:`A decorator factory is just a method which returns a decorator. This factory method can take in
whatever parameters you'd like as long as it returns the appropriate decorator.`}),`
`,s.exports.jsx(e.h2,{children:"Class Decorators"}),`
`,s.exports.jsx(e.p,{children:`Class decorators are applied to an ES2015 class. It's given the class constructor as its only input.
Class decorators are very powerful, they've the ability to return a different constructor method
which will completely replace the class's own constructor.`}),`
`,s.exports.jsx(e.h4,{children:"Signature"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[s.exports.jsx(e.span,{className:"hljs-title class_",children:"ClassDecorator"})," = <",s.exports.jsx(e.span,{className:"hljs-title class_",children:"TFunction"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Function"}),">",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"target: TFunction"}),") =>"]})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"TFunction"}),`;
`]})}),`
`,s.exports.jsx(e.p,{children:"where:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"target = a Constructor function"}),`
`]}),`
`,s.exports.jsx(e.h4,{children:"Example"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"JoeBloggs"}),"<T ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," { ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," (...",s.exports.jsx(e.span,{className:"hljs-attr",children:"args"}),": ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"any"}),"[]): {} }>(",s.exports.jsx(e.span,{className:"hljs-attr",children:"constructor"}),`: T) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"extends"}),` constructor {
      firstname = `,s.exports.jsx(e.span,{className:"hljs-string",children:'"Joe"'}),`;
      lastname = `,s.exports.jsx(e.span,{className:"hljs-string",children:'"Bloggs"'}),`
   }

`,s.exports.jsx(e.span,{className:"hljs-meta",children:"@JoeBloggs"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Me"}),` {
  firstname = `,s.exports.jsx(e.span,{className:"hljs-string",children:'"Daniel"'}),`;
  lastname = `,s.exports.jsx(e.span,{className:"hljs-string",children:'"Sinnott"'}),`
}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," daniel = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Me"}),`();
`,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(daniel.",s.exports.jsx(e.span,{className:"hljs-property",children:"firstname"}),`);
`,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(daniel.",s.exports.jsx(e.span,{className:"hljs-property",children:"lastname"}),`);
`]})}),`
`,s.exports.jsx(e.p,{children:`The above decorator @JoeBloggs takes in a constructor and replaces it with its returned constructor.
The names first & last names logged at the end are Joe & Bloggs.`}),`
`,s.exports.jsx(e.h2,{children:"Method Decorators"}),`
`,s.exports.jsx(e.p,{children:`Method decorators are applied above a method. It has the ability either modify a method's property
descriptor or to return a completely new property descriptor which will be used instead.`}),`
`,s.exports.jsx(e.h4,{children:"Signature"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[s.exports.jsx(e.span,{className:"hljs-title class_",children:"MethodDecorator"})," = <T>",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsxs(e.span,{className:"hljs-params",children:["target: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"Object"}),", key: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),", descriptor: TypedPropertyDescriptor<T>"]}),") =>"]})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"TypedPropertyDescriptor"}),"<T> | ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Void"}),`;
`]})}),`
`,s.exports.jsx(e.p,{children:"Where :"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:`target = constructor function of the class for a static method, or the prototype of the class
for an instance method.`}),`
`,s.exports.jsx(e.li,{children:"key = the name of the method"}),`
`,s.exports.jsx(e.li,{children:"descriptor = the property descriptor of the method"}),`
`]}),`
`,s.exports.jsx(e.h4,{children:"Example"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"Enumerable"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:["value: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"boolean"})]}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.exports.jsxs(e.span,{className:"hljs-params",children:["target: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"any"}),", propertyKey: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),", descriptor: PropertyDescriptor"]}),`) {
        descriptor.`,s.exports.jsx(e.span,{className:"hljs-property",children:"enumerable"}),` = value;
    };
}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Me"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Enumerable"}),"(",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`)
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"title"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Your Majesty"'}),`;
    }
    `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Enumerable"}),"(",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`)
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"firstname"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Daniel"'}),`;
    }
    `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Enumerable"}),"(",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"}),`)
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"lastname"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Sinnott"'}),`;
    }
}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Daniel"})," = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Me"}),`();
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," prop ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"in"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Daniel"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(prop);
}
`]})}),`
`,s.exports.jsx(e.p,{children:`which creates a class with 3 methods which are non-enumerable by default, the added decorator
specifies that firstname & lastname should be enumerable. The property loop logs "Daniel" &
"Sinnott"`}),`
`,s.exports.jsx(e.h2,{children:"Accessor Decorators"}),`
`,s.exports.jsxs(e.p,{children:[`Accessor decorators all almost identical to method decorators. However, they can only be applied to
either the `,s.exports.jsx(e.code,{children:"get"})," or ",s.exports.jsx(e.code,{children:"set"})," accessor methods, not both."]}),`
`,s.exports.jsx(e.h2,{children:"Property Decorators"}),`
`,s.exports.jsx(e.p,{children:`A Property Decorator is declared just before a class property declaration. Its used to observe that
a property has been declared for a class.`}),`
`,s.exports.jsx(e.h4,{children:"Signature"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropertyDecorator"})," = ",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsxs(e.span,{className:"hljs-params",children:["target: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"Object"}),", key: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"})]}),") =>"]})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Void"}),`;
`]})}),`
`,s.exports.jsx(e.p,{children:"Where :"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:`target = constructor function of the class for a static method, or the prototype of the class
for an instance method.`}),`
`,s.exports.jsx(e.li,{children:"key = the name of the property"}),`
`]}),`
`,s.exports.jsx(e.h4,{children:"Example"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"Column"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:["options: {",s.exports.jsx(e.span,{className:"hljs-keyword",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),"}"]}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:[s.exports.jsx(e.span,{className:"hljs-built_in",children:"object"}),": ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"Object"}),", propertyName: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"})]}),"): ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Record database column meta data"}),`
    };
  }

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Person"}),` {
  `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Column"}),"({",s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"VARCHAR"'}),`})
  firstname;

  `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@Column"}),"({",s.exports.jsx(e.span,{className:"hljs-attr",children:"type"}),": ",s.exports.jsx(e.span,{className:"hljs-string",children:'"VARCHAR"'}),`})
  lastname;
`]})}),`
`,s.exports.jsx(e.p,{children:`the above example is snippit from my own ORM which is being converted to typescript & decorators to
allow for a nicer developer experience. It defines a class & records the database metadata for each
class property so that it can converted into a database table.`}),`
`,s.exports.jsx(e.h2,{children:"Parameter Decorators"}),`
`,s.exports.jsx(e.p,{children:`A Parameter Decorator is declared just before a function parameter declaration. The function can be
a class constructor or a method.`}),`
`,s.exports.jsx(e.p,{children:`Parameter decorators are very similar in that they are mainly way of observing that a parameter has
been declared. There isn't a huge amount you can do to the parameter in the decorator. Their power
comes from the decorator order. You might remember from above that parameter decorators are
evaluated first. It then possible to store parameter metadata so that it can then be used in a
method decorator later in the decorator order.`}),`
`,s.exports.jsx(e.h4,{children:"Signature"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[s.exports.jsx(e.span,{className:"hljs-title class_",children:"ParameterDecorator"})," = ",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsxs(e.span,{className:"hljs-params",children:["target: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"Object"}),", key: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),", index: ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"number"})]}),") =>"]})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Void"}),`;
`]})}),`
`,s.exports.jsx(e.p,{children:"where:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:`target = constructor function of the class for a static method, or the prototype of the class
for an instance method.`}),`
`,s.exports.jsx(e.li,{children:"key = the name of the method"}),`
`,s.exports.jsx(e.li,{children:"index = the index of the parameter in the function's parameter list"}),`
`]}),`
`,s.exports.jsx(e.h4,{children:"Example"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-typescript",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"LOGPARAMS"})," = ",s.exports.jsx(e.span,{className:"hljs-string",children:'"LOGPARAMS"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"LogParameter"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:[s.exports.jsx(e.span,{className:"hljs-built_in",children:"object"}),", methodName, index"]}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (!",s.exports.jsx(e.span,{className:"hljs-built_in",children:"object"}),"[",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"LOGPARAMS"}),`]) {
        `,s.exports.jsx(e.span,{className:"hljs-built_in",children:"object"}),"[",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"LOGPARAMS"}),`] = [];
    }
    `,s.exports.jsx(e.span,{className:"hljs-built_in",children:"object"}),"[",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"LOGPARAMS"}),"].",s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(index);
}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.exports.jsx(e.span,{className:"hljs-title function_",children:"LogMethod"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:[s.exports.jsx(e.span,{className:"hljs-built_in",children:"object"}),", methodName, descriptor"]}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," originalMethod = descriptor.",s.exports.jsx(e.span,{className:"hljs-property",children:"value"}),`;
    descriptor.`,s.exports.jsx(e.span,{className:"hljs-property",children:"value"})," = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.exports.jsx(e.span,{className:"hljs-params",children:"...args"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsxs(e.span,{className:"hljs-string",children:["`Calling ",s.exports.jsxs(e.span,{className:"hljs-subst",children:["${",s.exports.jsx(e.span,{className:"hljs-built_in",children:"object"}),".constructor.name}"]}),".",s.exports.jsx(e.span,{className:"hljs-subst",children:"${methodName}"}),"`"]}),`);
        `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:"`with logged params:`"}),`);
        `,s.exports.jsx(e.span,{className:"hljs-built_in",children:"object"}),"[",s.exports.jsx(e.span,{className:"hljs-variable constant_",children:"LOGPARAMS"}),"].",s.exports.jsx(e.span,{className:"hljs-title function_",children:"reverse"}),"().",s.exports.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.exports.jsxs(e.span,{className:"hljs-function",children:["(",s.exports.jsx(e.span,{className:"hljs-params",children:"index"}),") =>"]}),` {
            `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"}),` paramValue = args[index];
            `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsxs(e.span,{className:"hljs-string",children:["`",s.exports.jsx(e.span,{className:"hljs-subst",children:"${paramValue}"}),"`"]}),`);
        });
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," originalMethod.",s.exports.jsx(e.span,{className:"hljs-title function_",children:"apply"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),`, args);
    };
}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Person"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"fullname"}),": ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"string"}),`;
    `,s.exports.jsx(e.span,{className:"hljs-meta",children:"@LogMethod"}),`
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"setFullname"}),"(",s.exports.jsxs(e.span,{className:"hljs-params",children:[s.exports.jsx(e.span,{className:"hljs-meta",children:"@LogParameter"})," firstname, middlename, ",s.exports.jsx(e.span,{className:"hljs-meta",children:"@LogParameter"})," lastname"]}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"fullname"})," = ",s.exports.jsxs(e.span,{className:"hljs-string",children:["`",s.exports.jsx(e.span,{className:"hljs-subst",children:"${firstname}"})," ",s.exports.jsx(e.span,{className:"hljs-subst",children:"${middlename}"})," ",s.exports.jsx(e.span,{className:"hljs-subst",children:"${lastname}"}),"`"]}),`;
    }
}

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," me = ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Person"}),`();
me.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"setFullname"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:'"Daniel"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Peter"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Sinnott"'}),`);
`,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.exports.jsxs(e.span,{className:"hljs-string",children:["`Fullname is: ",s.exports.jsx(e.span,{className:"hljs-subst",children:"${me.fullname}"}),"`"]}),`);
`]})}),`
`,s.exports.jsx(e.p,{children:`The above example specifies that it wants to log the method setFullname & the firstname and lastname
parameters. The LogParameter decorator stores the the index of the params which it whats to log on
the actual object.`}),`
`,s.exports.jsx(e.p,{children:`Then during the LogMethod decorator we replace the actual setFullname method which our own method
which logs the name of the method & the parameter whose indexes we stored previous, and then finally
delegates to the actual setFullname method.`}),`
`,s.exports.jsx(e.p,{children:"The example outputs:"}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:"Calling Person.setFullname with logged params: Daniel Sinnott Fullname is: Daniel Peter Sinnott"}),`
`]})]})}}export{p as author,m as created,j as date,u as default,x as id,h as imageurl,d as tags,i as title};
