import{j as s}from"./jsx-runtime.0c824d9b.js";import{u as l}from"./index.d4dadf5b.js";import"./index.78f29dca.js";const c="You're my Hero",p="Daniel Sinnott",h="https://i.imgur.com/ZVaDnJx.png",x=22,d=["Technical","Golang"],j="Fri, 24th Aug 2018",m=new Date(1535113913699);function g(n={}){const{wrapper:r}=Object.assign({},l(),n.components);return r?s.exports.jsx(r,Object.assign({},n,{children:s.exports.jsx(a,{})})):a();function a(){const e=Object.assign({p:"p",a:"a",blockquote:"blockquote",strong:"strong",h2:"h2",img:"img",h3:"h3",h4:"h4",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},l(),n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsxs(e.p,{children:[`When I decided to redesign the home page of this blog to include an image with every post, I was
faced with the reality that I'd need to have a new `,s.exports.jsx(e.a,{href:"https://en.wikipedia.org/wiki/Hero_image",children:"Hero Image"}),` for every post and that I'm not a
graphic designer...`]}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:`In web design, a hero image is a large web banner image, prominently placed on a web page,
generally in the front and center. The hero image is often the first visual element a visitor
encounters on the site; it presents an overview of the site's most important content.`}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["Having played around with ",s.exports.jsx(e.a,{href:"https://www.gimp.org/",children:"Gimp"}),` for a few days it became readily apparent that I'd need a way to
`,s.exports.jsx(e.strong,{children:"create Hero images quickly"}),` and with a consistent style. I'd need to build something. GUIs can
take a long time to perfect so a quick and dirty command line utility was my best option. Lets `,s.exports.jsx(e.a,{href:"https://golang.org/",children:"GO"}),"!"]}),`
`,s.exports.jsx(e.h2,{children:"Golang Command Line Utility"}),`
`,s.exports.jsx(e.img,{src:"https://i.imgur.com/IcyLOyC.png",alt:"Golang",title:"Golang"}),`
`,s.exports.jsxs(e.blockquote,{children:[`
`,s.exports.jsx(e.p,{children:`Go is a statically typed, compiled language in the tradition of C, with memory safety, garbage
collection, structural typing, and CSP-style concurrency.`}),`
`]}),`
`,s.exports.jsx(e.h3,{children:"Getting Started"}),`
`,s.exports.jsx(e.h4,{children:"Install Go"}),`
`,s.exports.jsxs(e.p,{children:["Follow the instructions at ",s.exports.jsx(e.a,{href:"https://golang.org/doc/install#install",children:"install Golang"})," for your operating system"]}),`
`,s.exports.jsx(e.p,{children:`Go is the perfect language to create a command line utility. It compiles into a single binary, has a
great standard library & excellent cross platform support.`}),`
`,s.exports.jsx(e.h4,{children:"Install Cobra"}),`
`,s.exports.jsxs(e.p,{children:[`Although the standard library has everything we need to create our utility, we're going to use
`,s.exports.jsx(e.a,{href:"https://github.com/spf13/cobra",children:"Cobra"}),` to simplify things. Cobra is a great tool and library used by the likes of Docker,
Kubernetes and Openshift to create command line applications.`]}),`
`,s.exports.jsx(e.p,{children:"To install Cobra run"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"}),` get github.com/spf13/cobra/cobra
`]})}),`
`,s.exports.jsxs(e.p,{children:["This will download the latest code from github to the directory ",s.exports.jsx(e.code,{children:"$GOPATH/src/github.com/spf13/cobra"}),`
(GOPATH defaults to
$HOME/go if you haven't set it). It will also compile cobra into its binary and save that at `,s.exports.jsx(e.code,{children:"$GOPATH/bin"})]}),`
`,s.exports.jsx(e.h4,{children:"Install Vipslib"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.a,{href:"https://jcupitt.github.io/libvips/",children:"Vipslib"})," is an image processing library that we'll be using to resize our Hero icons. See ",s.exports.jsx(e.a,{href:"https://jcupitt.github.io/libvips/install.html",children:`Install
vipslib`})," for how to install for your operating system. We'll also need to run:"]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"}),` get github.com/DAddYE/vips
`]})}),`
`,s.exports.jsx(e.p,{children:"to install the Go bindings for Vipslib"}),`
`,s.exports.jsx(e.h4,{children:"Creating the project"}),`
`,s.exports.jsx(e.p,{children:"Start by creating a folder Hero and CD into it. Assuming you have $GOPATH/bin on your $PATH, run:"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsx(e.code,{className:"hljs language-go",children:`cobra init
`})}),`
`,s.exports.jsx(e.p,{children:"This will create a LICENSE, a directory cmd containing a single file root.go and your main.go."}),`
`,s.exports.jsx(e.p,{children:`main.go contains package main and function main (which is the starting point for every Go
application), and the import of the generated command. The function main delegates to cmd.Execute &
that's all we'll need to do in main.`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// main.go"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"package"}),` main

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"github.com/sinnott74/TestCmd/cmd"'}),`

`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"main"}),s.exports.jsx(e.span,{className:"hljs-params",children:"()"})]}),` {
    cmd.Execute()
}
`]})}),`
`,s.exports.jsx(e.p,{children:`The generated cmd/root.go will contain a lot more code but for this simple tool we can remove most
of it. After trimming the fat we're left with:`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// cmd/root.go"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"package"}),` cmd

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"}),` (
    `,s.exports.jsx(e.span,{className:"hljs-string",children:'"fmt"'}),`
    `,s.exports.jsx(e.span,{className:"hljs-string",children:'"os"'}),`

    `,s.exports.jsx(e.span,{className:"hljs-string",children:'"github.com/spf13/cobra"'}),`
)

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// rootCmd represents the base command when called without any subcommands"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"var"}),` rootCmd = &cobra.Command{
    Use:   `,s.exports.jsx(e.span,{className:"hljs-string",children:'"Hero image creating utility"'}),`,
    Short: `,s.exports.jsx(e.span,{className:"hljs-string",children:'"Hero creates banner images quickly"'}),`,
    RunE: `,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"}),s.exports.jsxs(e.span,{className:"hljs-params",children:["(cmd *cobra.Command, args []",s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),")"]})]})," ",s.exports.jsx(e.span,{className:"hljs-type",children:"error"}),` {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`
    },
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Execute adds all child commands to the root command and sets flags appropriately."}),`
`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// This is called by main.main(). It only needs to happen once to the rootCmd."}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"Execute"}),s.exports.jsx(e.span,{className:"hljs-params",children:"()"})]}),` {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err := rootCmd.Execute(); err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
        fmt.Println(err)
        os.Exit(`,s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`)
    }
}

`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"init"}),s.exports.jsx(e.span,{className:"hljs-params",children:"()"})]}),` {
}
`]})}),`
`,s.exports.jsx(e.h3,{children:"Creating our Hero Utility"}),`
`,s.exports.jsx(e.h4,{children:"Adding command line arguments"}),`
`,s.exports.jsx(e.p,{children:`Like all good command line utilities we're going to need to take in some arguments. Our init
function in cmd/root.go is the perfect place for this kind of set up work. init() is called when the
package is first imported. Add the following:`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"var"}),` (
    out      `,s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),`
    bgColor  `,s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),`
    icons    []`,s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),`
    height   `,s.exports.jsx(e.span,{className:"hljs-type",children:"int"}),`
    width    `,s.exports.jsx(e.span,{className:"hljs-type",children:"int"}),`
    iconsize `,s.exports.jsx(e.span,{className:"hljs-type",children:"int"}),`
)

`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"init"}),s.exports.jsx(e.span,{className:"hljs-params",children:"()"})]}),` {
    rootCmd.PersistentFlags().StringVarP(&out, `,s.exports.jsx(e.span,{className:"hljs-string",children:'"output"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"o"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"./hero.png"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"File to output"'}),`)
    rootCmd.PersistentFlags().StringVarP(&bgColor, `,s.exports.jsx(e.span,{className:"hljs-string",children:'"color"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"c"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"red"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Background color"'}),`)
    rootCmd.PersistentFlags().StringArrayVarP(&icons, `,s.exports.jsx(e.span,{className:"hljs-string",children:'"icons"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"i"'}),", []",s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),"{}, ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Icons"'}),`)
    rootCmd.PersistentFlags().IntVarP(&width, `,s.exports.jsx(e.span,{className:"hljs-string",children:'"width"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"x"'}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"960"}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Max x coordinate of the hero - width of the hero"'}),`)
    rootCmd.PersistentFlags().IntVarP(&height, `,s.exports.jsx(e.span,{className:"hljs-string",children:'"height"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"y"'}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"480"}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Max y coordinate of the hero - height of the hero"'}),`)
    rootCmd.PersistentFlags().IntVarP(&iconsize, `,s.exports.jsx(e.span,{className:"hljs-string",children:'"iconsize"'}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"s"'}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"300"}),", ",s.exports.jsx(e.span,{className:"hljs-string",children:'"Width and height of the incons on the hero"'}),`)
}
`]})}),`
`,s.exports.jsx(e.p,{children:`This sets up all the arguments we'll need for now. We can now run the application and verify that
all the arguments are there:`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:["$",s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"})," run main.",s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"}),` -h

Hero creates banner images quickly

Usage:
  Hero image creating utility [flags]

Flags:
  -c, --color `,s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),"        Background color (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"red"'}),`)
  -y, --height `,s.exports.jsx(e.span,{className:"hljs-type",children:"int"}),"          Max y coordinate of the hero - height of the hero (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"480"}),`)
  -h, --help                help `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"}),` Hero
  -i, --icons stringArray   Icons
  -s, --iconsize `,s.exports.jsx(e.span,{className:"hljs-type",children:"int"}),"        Width and height of the incons on the hero (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"300"}),`)
  -o, --output `,s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),"       File to output (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"./hero.png"'}),`)
  -x, --width `,s.exports.jsx(e.span,{className:"hljs-type",children:"int"}),"           Max x coordinate of the hero - width of the hero (",s.exports.jsx(e.span,{className:"hljs-keyword",children:"default"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"960"}),`)
`]})}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.code,{children:"go run"}),` compiles and runs a go application. Adding the -h flag to any go application that accepts
arguments will show the help blurb.`]}),`
`,s.exports.jsx(e.h4,{children:"Creating the image"}),`
`,s.exports.jsxs(e.p,{children:["To create an image in go we'll need to import the ",s.exports.jsx(e.code,{children:"image"}),` package. Update our rootCmd's RunE
function in cmd.go to the following.`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:["RunE: ",s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"}),s.exports.jsxs(e.span,{className:"hljs-params",children:["(cmd *cobra.Command, args []",s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),")"]})]})," ",s.exports.jsx(e.span,{className:"hljs-type",children:"error"}),` {

    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Create the picture"}),`
    pic := image.NewRGBA(image.Rect(`,s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`, width, height))

    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Create the file"}),`
    outFile, err := os.Create(out)
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` err
    }

    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Write & encode the file"}),`
    err = png.Encode(outFile, pic)
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` err
    }
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`
},
`]})}),`
`,s.exports.jsx(e.p,{children:`We're now creating a new picture with the dimensions the user specifies with the command line
arguments. We then create a file and write/encode the picture to disk. Running:`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"})," main.",s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"}),`
`]})}),`
`,s.exports.jsxs(e.p,{children:["will by default create an tiny blank file ",s.exports.jsx(e.code,{children:"hero.png"}),`. We haven't specified the color of any pixel
yet, which for an RGBA image is R:0 G:0 B:0 A:0 - an invisible black pixel.`]}),`
`,s.exports.jsx(e.h4,{children:"Setting the color"}),`
`,s.exports.jsxs(e.p,{children:["For our colors, we're going to stick to the ",s.exports.jsx(e.a,{href:"https://material.io/design/color/the-color-system.html',",children:"material design color palette"}),`. Add the following
snippet to the file to set up our color`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// Material Design colors"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"var"}),` (
    Red400        = color.RGBA{`,s.exports.jsx(e.span,{className:"hljs-number",children:"0xef"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0x53"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0x50"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xff"}),"} ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// rgb(239, 83, 80)"}),`
    Red500        = color.RGBA{`,s.exports.jsx(e.span,{className:"hljs-number",children:"0xf4"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0x43"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0x36"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xff"}),"} ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// rgb(244, 67, 54)"}),`
    Red600        = color.RGBA{`,s.exports.jsx(e.span,{className:"hljs-number",children:"0xe5"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0x39"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0x35"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xff"}),"} ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// rgb(229, 57, 53)"}),`
    Blue400       = color.RGBA{`,s.exports.jsx(e.span,{className:"hljs-number",children:"0x42"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xa5"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xf5"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xff"}),"} ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// rgb(66, 165, 245)"}),`
    Blue500       = color.RGBA{`,s.exports.jsx(e.span,{className:"hljs-number",children:"0x21"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0x96"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xf3"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xff"}),"} ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// rgb(33, 150, 243)"}),`
    Blue600       = color.RGBA{`,s.exports.jsx(e.span,{className:"hljs-number",children:"0x1e"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0x88"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xe5"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0xff"}),"} ",s.exports.jsx(e.span,{className:"hljs-comment",children:"// rgb(30, 136, 229)"}),`
    etc...
)

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Map of Color Names to color"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"var"})," Map = ",s.exports.jsx(e.span,{className:"hljs-built_in",children:"make"}),"(",s.exports.jsx(e.span,{className:"hljs-keyword",children:"map"}),"[",s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),"][",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA)

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Multiple init funcs are allowed"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"init"}),s.exports.jsx(e.span,{className:"hljs-params",children:"()"})]}),` {
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"red"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Red400, Red500, Red600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"pink"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Pink400, Pink500, Pink600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"purple"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Purple400, Purple500, Purple600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"deeppurple"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{DeepPurple400, DeepPurple500, DeepPurple600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"indigo"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Indigo400, Indigo500, Indigo600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"blue"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Blue400, Blue500, Blue600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"lightblue"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{LightBlue400, LightBlue500, LightBlue600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"cyan"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Cyan400, Cyan500, Cyan600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"teal"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Teal400, Teal500, Teal600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"green"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Green400, Green500, Green600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"lime"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Lime400, Lime500, Lime600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"yellow"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Yellow500, Yellow600, Yellow700}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"amber"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Amber400, Amber500, Amber600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"orange"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Orange400, Orange500, Orange600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"deeporange"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{DeepOrange400, DeepOrange500, DeepOrange600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"brown"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Brown400, Brown500, Brown600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"grey"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{Grey400, Grey500, Grey600}
    Map[`,s.exports.jsx(e.span,{className:"hljs-string",children:'"bluegrey"'}),"] = [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`]color.RGBA{BlueGrey400, BlueGrey500, BlueGrey600}
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// getColor gets a RGBA color"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"getColor"}),s.exports.jsxs(e.span,{className:"hljs-params",children:["(colorName *",s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),")"]})]})," ([",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),"]color.RGBA, ",s.exports.jsx(e.span,{className:"hljs-type",children:"error"}),`) {
    colors, ok := Map[*colorName]
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"}),` !ok {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," [",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),"]color.RGBA{}, fmt.Errorf(",s.exports.jsx(e.span,{className:"hljs-string",children:'"Color %s could not be found"'}),`, *colorName)
    }
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," colors, ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`
}
`]})}),`
`,s.exports.jsx(e.p,{children:`You may have noticed from the Hero on this blogpost that our background has three sections, divided
by two diagonal lines, increasing in darkness from left to right. To do this we need to loop through
every pixel in the Hero and set the color based on which section it is in.`}),`
`,s.exports.jsx(e.p,{children:`We define a new type represent out diagonal lines - line. It consists of two points. Based on where
each pixel is relative to the diagonal lines, we can set its color.`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"type"})," line ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"struct"}),` {
    p1 image.Point
    p2 image.Point
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// setImageColor sets the background color of an image"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"setImageColor"}),s.exports.jsxs(e.span,{className:"hljs-params",children:["(pic *image.RGBA, bgColor *",s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),")"]})]})," ",s.exports.jsx(e.span,{className:"hljs-type",children:"error"}),` {

    width := pic.Bounds().Max.X
    height := pic.Bounds().Max.Y

    leftLine := line{image.Point{width / `,s.exports.jsx(e.span,{className:"hljs-number",children:"4"}),", ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),"}, image.Point{width / ",s.exports.jsx(e.span,{className:"hljs-number",children:"20"}),`, height}}
    rightLine := line{image.Point{width, height - `,s.exports.jsx(e.span,{className:"hljs-number",children:"2"}),"*height/",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),"}, image.Point{width - width/",s.exports.jsx(e.span,{className:"hljs-number",children:"3"}),`, height}}

    colors, err := getColor(bgColor)
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` err
    }

    leftColor := colors[`,s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`]
    middleColor := colors[`,s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`]
    rightColor := colors[`,s.exports.jsx(e.span,{className:"hljs-number",children:"2"}),`]

    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Update the colour of each pixel"}),`
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"}),` x := pic.Bounds().Min.X; x < pic.Bounds().Max.X; x++ {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"}),` y := pic.Bounds().Min.Y; y < pic.Bounds().Max.Y; y++ {

            p := image.Point{x, y}
            `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"}),` isLeftOfLine(leftLine, p) {
                pic.Set(x, y, leftColor)
            } `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"}),` isRightOfLine(rightLine, p) {
                pic.Set(x, y, rightColor)
            } `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {
                pic.Set(x, y, middleColor)
            }
        }
    }
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// isRightOfLine checks if a point is to the right of the line"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"isRightOfLine"}),s.exports.jsx(e.span,{className:"hljs-params",children:"(l line, p image.Point)"})]})," ",s.exports.jsx(e.span,{className:"hljs-type",children:"bool"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` !isLeftOfLine(l, p)
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// isLeftOfLine checks if a point is to the left of the line"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"isLeftOfLine"}),s.exports.jsx(e.span,{className:"hljs-params",children:"(l line, p image.Point)"})]})," ",s.exports.jsx(e.span,{className:"hljs-type",children:"bool"}),` {
    d := (p.X-l.p1.X)*(l.p2.Y-l.p1.Y) - (p.Y-l.p1.Y)*(l.p2.X-l.p1.X)
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," d < ",s.exports.jsx(e.span,{className:"hljs-number",children:"0"}),`
}
`]})}),`
`,s.exports.jsx(e.p,{children:`We can now call our setImageColor function before we encode the png, without forgetting to check for
errors.`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[`err = setImageColor(pic, &bgColor)
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` err
}
`]})}),`
`,s.exports.jsx(e.p,{children:"Now when we run"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"})," run main.",s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"}),`
`]})}),`
`,s.exports.jsx(e.p,{children:`We'll get a hero.png file with dimensions 960*480 by default, with red background containing our
pattern.`}),`
`,s.exports.jsx(e.img,{src:"https://i.imgur.com/yDqToGj.png",alt:"Red hero",title:"Red hero"}),`
`,s.exports.jsx(e.h3,{children:"Adding icons"}),`
`,s.exports.jsx(e.p,{children:"To add our icons, we'll need to:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"Read them into memory"}),`
`,s.exports.jsx(e.li,{children:"Resize them"}),`
`,s.exports.jsx(e.li,{children:"Determine their position in the Hero"}),`
`,s.exports.jsx(e.li,{children:"Finally, add them to the Hero"}),`
`]}),`
`,s.exports.jsx(e.p,{children:"This can be accomplished with the following code:"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// addIcons add icons to the pic"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"addIcons"}),s.exports.jsxs(e.span,{className:"hljs-params",children:["(pic *image.RGBA, iconPaths []",s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),", iconSize image.Point)"]})]})," ",s.exports.jsx(e.span,{className:"hljs-type",children:"error"}),` {

    width := pic.Bounds().Max.X
    height := pic.Bounds().Max.Y

    numIcons := `,s.exports.jsx(e.span,{className:"hljs-built_in",children:"len"}),`(iconPaths)
    horizonalPaddingNum := numIcons + `,s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`
    paddingWidth := (width - iconSize.Y*numIcons) / horizonalPaddingNum

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"for"})," i, iconPath := ",s.exports.jsx(e.span,{className:"hljs-keyword",children:"range"}),` iconPaths {
        icon, err := readIcon(&iconPath)
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
            `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` err
        }
        resizedIcon, err := resizeIcon(&icon, iconSize)
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
            `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` err
        }

        diff := iconSize.Sub(resizedIcon.Bounds().Max).Div(`,s.exports.jsx(e.span,{className:"hljs-number",children:"2"}),`)
        offset := image.Pt(paddingWidth+iconSize.X*i+paddingWidth*i, height/`,s.exports.jsx(e.span,{className:"hljs-number",children:"2"}),"-iconSize.Y/",s.exports.jsx(e.span,{className:"hljs-number",children:"2"}),`).Add(diff)
        addIconToPic(pic, resizedIcon, offset)
    }
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// readIcon reads in the btyes of a given file"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"readIcon"}),s.exports.jsxs(e.span,{className:"hljs-params",children:["(iconPath *",s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),")"]})]})," ([]",s.exports.jsx(e.span,{className:"hljs-type",children:"byte"}),", ",s.exports.jsx(e.span,{className:"hljs-type",children:"error"}),`) {

    inBuf, err := ioutil.ReadFile(*iconPath)
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`, err
    }
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," inBuf, ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// resizeIcon resizes the file"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"resizeIcon"}),s.exports.jsxs(e.span,{className:"hljs-params",children:["(icon *[]",s.exports.jsx(e.span,{className:"hljs-type",children:"byte"}),", iconSize image.Point)"]})]})," (image.Image, ",s.exports.jsx(e.span,{className:"hljs-type",children:"error"}),`) {
    options := vips.Options{
        Width:        iconSize.X,
        Height:       iconSize.Y,
        Crop:         `,s.exports.jsx(e.span,{className:"hljs-literal",children:"false"}),`,
        Extend:       vips.EXTEND_WHITE,
        Interpolator: vips.BILINEAR,
        Gravity:      vips.CENTRE,
        Quality:      `,s.exports.jsx(e.span,{className:"hljs-number",children:"100"}),`,
        Format:       vips.PNG,
    }

    buf, err := vips.Resize(*icon, options)
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`, err
    }

    resizedIcon, _, err := image.Decode(bytes.NewReader(buf))
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`, err
    }

    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"})," resizedIcon, ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// addIconToPic adds the icon to the picture"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"addIconToPic"}),s.exports.jsx(e.span,{className:"hljs-params",children:"(pic draw.Image, icon image.Image, offset image.Point)"})]}),` {
    draw.Draw(pic, icon.Bounds().Add(offset), icon, image.ZP, draw.Over)
}
`]})}),`
`,s.exports.jsx(e.p,{children:"Add a call to addIcons after setImageColor in out rootCmd"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[`err = addIcons(pic, icons, image.Point{iconsize, iconsize})
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
    `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` err
}
`]})}),`
`,s.exports.jsx(e.h4,{children:"Our Hero"}),`
`,s.exports.jsx(e.p,{children:"Finally run"}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"})," run main.",s.exports.jsx(e.span,{className:"hljs-keyword",children:"go"}),` -i hero_icon.png -i gopher.png -c blue
`]})}),`
`,s.exports.jsxs(e.p,{children:["where hero_icon.png and gopher.png are images on your system, will create our ",s.exports.jsx(e.strong,{children:"HERO!"})]}),`
`,s.exports.jsx(e.img,{src:"https://i.imgur.com/ZVaDnJx.png",alt:"Hero",title:"Hero"}),`
`,s.exports.jsxs(e.h4,{children:["The full source can be seen at ",s.exports.jsx(e.a,{href:"https://github.com/sinnott74/hero",children:"hero"})]})]})}}export{p as author,m as created,j as date,g as default,x as id,h as imageurl,d as tags,c as title};
