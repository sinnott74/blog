import{j as s}from"./jsx-runtime.677020d1.js";import{u as r}from"./index.d409b08a.js";import"./index.6de8143e.js";const i="State of the pagi-nation",o="Daniel Sinnott",h="https://i.imgur.com/ietahcb.png",x=24,j=["Technical","ReactJS","Pagination"],d="Mon, 10th Sep 2018",m=new Date(1536615936462);function N(a={}){const{wrapper:n}=Object.assign({},r(),a.components);return n?s.exports.jsx(n,Object.assign({},a,{children:s.exports.jsx(l,{})})):l();function l(){const e=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",ul:"ul",li:"li",h4:"h4",code:"code",pre:"pre",span:"span",strong:"strong"},r(),a.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.h2,{children:"Adding pagination"}),`
`,s.exports.jsxs(e.p,{children:["Having recently having added ",s.exports.jsx(e.a,{href:"/blog/22",children:"Hero Images"}),` to each blogpost, which get displayed on the blog list
page, the size of this blog has greatly increased.`]}),`
`,s.exports.jsx(e.p,{children:`Visiting danielsinnott.com will cause 57 requests and 1.2MB to be downloaded. This is unacceptable
and is a problem that won't scale as the blogposts continue. Currently, every blogpost is displayed
on the list page, causing every hero image to be downloaded.`}),`
`,s.exports.jsx(e.p,{children:"The solution to this problem is pagination."}),`
`,s.exports.jsx(e.h3,{children:"Creating a pagination component"}),`
`,s.exports.jsx(e.p,{children:"We'll start this post off with a couple of assumptions."}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:`You're familiar with react & javascript (I'm going to assume a create react app / react-scripts
build set up)`}),`
`,s.exports.jsx(e.li,{children:"You have a react app which need so pagination"}),`
`,s.exports.jsx(e.li,{children:"The list of items you want to paginate, has it's own style that you'd like to keep"}),`
`]}),`
`,s.exports.jsx(e.h4,{children:"Create the files"}),`
`,s.exports.jsx(e.p,{children:"Create a Pagination folder & 3 files:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.code,{children:"index.js"})}),`
`,s.exports.jsx(e.li,{children:s.exports.jsx(e.code,{children:"Pagination.jsx"})}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"Pagination.css"})," (or ",s.exports.jsx(e.code,{children:"scss"})," if you've go Sass integrated into your build)"]}),`
`]}),`
`,s.exports.jsx(e.h4,{children:"index.js"}),`
`,s.exports.jsxs(e.p,{children:["I like to always create an folder for each component and have that folder contain an ",s.exports.jsx(e.code,{children:"index.js"}),`. It
allows for neat grouping of related files but also take care of keeping the import of the component
short as modules which import this component will automatically look for index.js when importing
from a directory. e.g:`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-jsx",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"src/components/Pagination"'}),`;
`]})}),`
`,s.exports.jsx(e.p,{children:"Our index.js is a simple a redirect file, that imports our component and then exports it:"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-jsx",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// index.js"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"./Pagination"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"}),`;
`]})}),`
`,s.exports.jsx(e.h4,{children:"Defining our Pagination.jsx"}),`
`,s.exports.jsx(e.p,{children:"I always begin a component by writing a skeleton & defining the component's input:"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-jsx",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// Pagination.jsx"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"React"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"react"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"prop-types"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"./Pagination.css"'}),`;

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"props"}),`) {}
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"render"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {}
}

`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"propTypes"}),` = {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"itemsPerPage"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"number"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"isRequired"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"string"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"children"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"arrayOf"}),"(",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"node"}),").",s.exports.jsx(e.span,{className:"hljs-property",children:"isRequired"}),`,
};
`]})}),`
`,s.exports.jsxs(e.p,{children:["We've outlines a basic react component and with our ",s.exports.jsx(e.code,{children:"PropTypes"}),` have documented that the component
takes in a number `,s.exports.jsx(e.code,{children:"itemsPerPage"}),", a ",s.exports.jsx(e.code,{children:"className"}),` which will will add to our paginated list and
finally `,s.exports.jsx(e.code,{children:"children"})," which will be the items we are paginating."]}),`
`,s.exports.jsx(e.h4,{children:"Displaying our items"}),`
`,s.exports.jsxs(e.p,{children:["Lets add the code to display our reduced/paged list of items. We're ",s.exports.jsx(e.code,{children:"props.children"}),` as our generic
list of items to display. In the code below, we've added our `,s.exports.jsx(e.code,{children:"state"}),` which storing only our
`,s.exports.jsx(e.code,{children:"currentPage"}),"."]}),`
`,s.exports.jsxs(e.p,{children:["During ",s.exports.jsx(e.code,{children:"render"}),`, we calculate how many pages we'll need and slice our children items array to only
the items that should be displayed on that page. We the render our pages items in a `,s.exports.jsx(e.code,{children:"div"}),` with the
`,s.exports.jsx(e.code,{children:"className"})," prop so consumers can style the list appropriately."]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-jsx",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// Pagination.jsx"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"React"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"react"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"prop-types"'}),`;
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"./Pagination.css"'}),`;

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"props"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"super"}),`(props);
        `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"state"}),` = {
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"currentPage"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`,
        };
    }

    `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"render"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," itemsPerPage = ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"props"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"itemsPerPage"})," || ",s.exports.jsx(e.span,{className:"hljs-number",children:"6"}),`;
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," items = ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"React"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"Children"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"toArray"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"props"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"children"}),`);
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," numPages = ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Math"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"round"}),"(items.",s.exports.jsx(e.span,{className:"hljs-property",children:"length"}),` / itemsPerPage);
        items = items.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"slice"}),`(
            (`,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"state"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"currentPage"})," - ",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`) * itemsPerPage,
            `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"state"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"currentPage"}),` * itemsPerPage,
        );
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` (
            `,s.exports.jsxs(e.span,{className:"xml",children:[s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"paginate"'}),">"]}),`
                `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{this.props.className}"}),">"]}),"{items}",s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`
            `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`
        );
    }
}

`,s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"propTypes"}),` = {
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"itemsPerPage"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"number"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"isRequired"}),`,
    `,s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),": ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"PropTypes"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"string"}),`,
};
`]})}),`
`,s.exports.jsx(e.h3,{children:"Adding page buttons"}),`
`,s.exports.jsxs(e.p,{children:[`Next, we'll add the buttons for controlling which pages are visible. The class will need some extra
methods to user interaction. Below we add 3 methods, and bind them to pagination instance's `,s.exports.jsx(e.code,{children:"this"}),`
during the constructor. Add the following snippet:`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-jsx",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// Pagination.jsx"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"props"}),`) {
    ...
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"_onPreviousClick"})," = ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"_onPreviousClick"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"bind"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),`);
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"_onNextClick"})," = ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"_onNextClick"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"bind"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),`);
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"_setCurrentPage"})," = ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"_setCurrentPage"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"bind"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),`);
  }
  ...
  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"_onPreviousClick"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"_setCurrentPage"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"state"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"currentPage"})," - ",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`);
  }

  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"_onNextClick"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"_setCurrentPage"}),"(",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"state"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"currentPage"})," + ",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`);
  }

  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"_setCurrentPage"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"page"}),`) {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," (page === ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"state"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"currentPage"}),") ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),`;
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"setState"}),`({
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"currentPage"}),`: page
    });
  }
  ...
}
`]})}),`
`,s.exports.jsxs(e.p,{children:["Next, we'll add the buttons to the DOM. Like previous blogposts, we'll be using the ",s.exports.jsx(e.a,{href:"https://react-md.mlaursen.com/",children:"React-MD"}),`
component library, whose `,s.exports.jsx(e.code,{children:"import"})," can be seen at the top of the snippet below. Then during ",s.exports.jsx(e.code,{children:"render"}),`
we check if we should be disabling the previous or next buttons, if we're on the first or last page
respectively.`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-jsx",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// Pagination.jsx"}),`
...
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Button"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"from"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"react-md/lib/Buttons/Button"'}),`;

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
  ...
  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"render"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
    ...
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," previousDisabled = ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"state"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"currentPage"})," === ",s.exports.jsx(e.span,{className:"hljs-number",children:"1"})," ? ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"})," : ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`;
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," nextDisabled = ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"state"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"currentPage"})," === numPages ? ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"})," : ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`;

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"}),` pageButtons = [];
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"let"})," i = ",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`; i <= numPages; i++) {
      `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"const"})," isCurrent = i === ",s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"state"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"currentPage"})," ? ",s.exports.jsx(e.span,{className:"hljs-literal",children:"true"})," : ",s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`;
      pageButtons.`,s.exports.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(
        `,s.exports.jsxs(e.span,{className:"xml",children:[s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"Button"}),`
          `,s.exports.jsx(e.span,{className:"hljs-attr",children:"flat"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{!isCurrent}"}),`
          `,s.exports.jsx(e.span,{className:"hljs-attr",children:"raised"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{isCurrent}"}),`
          `,s.exports.jsx(e.span,{className:"hljs-attr",children:"primary"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{isCurrent}"}),`
          `,s.exports.jsx(e.span,{className:"hljs-attr",children:"onClick"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{()"})," =>"]}),` this.setCurrentPage(i)}
          key={i}
        >
          {i}
        `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"Button"}),">"]})]}),`
      );
    }

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` (
      `,s.exports.jsxs(e.span,{className:"xml",children:[s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"paginate"'}),">"]}),`
        `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{this.props.className}"}),">"]}),"{items}",s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`
        `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"paginate__buttons"'}),">"]}),`
          `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"Button"}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"icon"}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"paginate__buttons-left"'}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"tooltipLabel"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"Previous"'}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"tooltipPosition"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"top"'}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"tooltipDelay"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{1000}"}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"disabled"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{previousDisabled}"}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"onClick"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{this._onPreviousClick}"}),`
          >`]}),`
            chevron_left
          `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"Button"}),">"]}),`
          `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"paginate__numbuttons"'}),">"]}),"{pageButtons}",s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`
          `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"Button"}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"icon"}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"paginate__buttons-right"'}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"tooltipLabel"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"Next"'}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"tooltipPosition"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"top"'}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"tooltipDelay"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{1000}"}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"disabled"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{nextDisabled}"}),`
            `,s.exports.jsx(e.span,{className:"hljs-attr",children:"onClick"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{this._onNextClick}"}),`
          >`]}),`
            chevron_right
          `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"Button"}),">"]}),`
        `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,s.exports.jsxs(e.span,{className:"hljs-tag",children:["</",s.exports.jsx(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`
    );
  }
  ...
`]})}),`
`,s.exports.jsx(e.h4,{children:"Scrolling to the top of the page"}),`
`,s.exports.jsxs(e.p,{children:[`When the user changes, page they expect to be brought to the top of the page so they can start read
from the start. Unfortunately, we don't know where the top of the page is as the `,s.exports.jsx(e.code,{children:"Pagination"}),`
component could be used anywhere. We'll need to calculate it each time.`]}),`
`,s.exports.jsxs(e.p,{children:["To start we'll need a reference to the ",s.exports.jsx(e.code,{children:"paginate div"}),`. We do this by creating a ref in the
constructor and attaching it during rendering.`]}),`
`,s.exports.jsxs(e.p,{children:["On each page change, we calculate where the top left corner of the ",s.exports.jsx(e.code,{children:"paginate div"}),` is and scroll the
window to there.`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-jsx",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// Pagination.jsx"}),`
...
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"export"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"Pagination"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"extends"})," ",s.exports.jsx(e.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.exports.jsx(e.span,{className:"hljs-params",children:"props"}),`) {
    ...
    `,s.exports.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.exports.jsx(e.span,{className:"hljs-property",children:"paginateTopRef"})," = ",s.exports.jsx(e.span,{className:"hljs-title class_",children:"React"}),".",s.exports.jsx(e.span,{className:"hljs-title function_",children:"createRef"}),`();
  }

  `,s.exports.jsx(e.span,{className:"hljs-title function_",children:"render"}),"(",s.exports.jsx(e.span,{className:"hljs-params"}),`) {
    ...
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` (
      `,s.exports.jsxs(e.span,{className:"xml",children:[s.exports.jsxs(e.span,{className:"hljs-tag",children:["<",s.exports.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:'"paginate"'})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"ref"}),"=",s.exports.jsx(e.span,{className:"hljs-string",children:"{this.paginateTopRef}"}),">"]}),`
      ...
    );
  }

  _setCurrentPage(page) {
    ...
    const paginateClientRect = this.paginateTopRef.current.getBoundingClientRect();
    window.scrollTo(paginateClientRect.x, paginateClientRect.y);
  }
}
...
`]})]})}),`
`,s.exports.jsx(e.h4,{children:"Adding style"}),`
`,s.exports.jsx(e.p,{children:"Finally we add some styles to our buttons to keep them inline and from overflowing:"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-css",children:["// Pagination",s.exports.jsx(e.span,{className:"hljs-selector-class",children:".css"}),`
`,s.exports.jsx(e.span,{className:"hljs-selector-class",children:".paginate__buttons"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: flex;
    `,s.exports.jsx(e.span,{className:"hljs-attribute",children:"justify-content"}),`: center;
    `,s.exports.jsx(e.span,{className:"hljs-attribute",children:"align-items"}),`: center;
    `,s.exports.jsx(e.span,{className:"hljs-attribute",children:"width"}),": ",s.exports.jsx(e.span,{className:"hljs-number",children:"100%"}),`;
}

`,s.exports.jsx(e.span,{className:"hljs-selector-class",children:".paginate__numbuttons"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: inline-flex;
    `,s.exports.jsx(e.span,{className:"hljs-attribute",children:"overflow"}),`: auto;
}
`]})}),`
`,s.exports.jsx(e.h3,{children:"Making a difference"}),`
`,s.exports.jsxs(e.p,{children:["Before pagination, loading danielsinnott.com from clean took ",s.exports.jsx(e.strong,{children:"57 requests & 1.2MB"}),` to download,
after adding pagination the page load has been reduced to `,s.exports.jsx(e.strong,{children:"29 requests and only 480KB"}),`. Thats a
reduction of over 50% by adding a single component. I'd also argue that beyond the page load
performance the user experience has improved.`]}),`
`,s.exports.jsxs(e.p,{children:["The full source for this can be see over at ",s.exports.jsx(e.a,{href:"https://github.com/sinnott74/BlogWebClient/tree/master/src/core/components/Pagination",children:"Github"})]})]})}}export{o as author,m as created,d as date,N as default,x as id,h as imageurl,j as tags,i as title};
