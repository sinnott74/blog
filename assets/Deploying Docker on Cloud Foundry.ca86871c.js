import{j as e}from"./jsx-runtime.7a5a6aec.js";import{u as a}from"./index.d82828d2.js";import"./vendor.76997228.js";const c="Deploying Docker on Cloud Foundry",p="Daniel Sinnott",d="https://i.imgur.com/axoBYe2.png",x=25,h=["Golang","Docker","IBMCloud","TravisCI","CI/CD","Cloud Foundry"],u="Fri, 19th Oct 2018",m=new Date(1539960830019);function j(n={}){const{wrapper:o}=Object.assign({},a(),n.components);return o?e.exports.jsx(o,Object.assign({},n,{children:e.exports.jsx(t,{})})):t();function t(){const s=Object.assign({h2:"h2",p:"p",h3:"h3",a:"a",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",ul:"ul",li:"li",code:"code",img:"img",pre:"pre",span:"span"},a(),n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.h2,{children:"Using CI and Docker to deploy an application to Cloud Foundry"}),`
`,e.exports.jsx(s.p,{children:`I recently found out Cloud Foundry supports Docker containers, so here quick tutorial of to use
continuous integration to build your application into a docker image and deploy it to Cloud Foundry.`}),`
`,e.exports.jsx(s.h3,{children:"Cloud Foundry"}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.a,{href:"https://www.cloudfoundry.org/",children:"Cloud Foundry"})," is an open source platform as a service, created by ",e.exports.jsx(s.a,{href:"https://pivotal.io/",children:"Pivotal"}),`, on which developers
can build, deploy, run and scale applications. It can be deployed onto any cloud provider, like AWS
and is most notably a `,e.exports.jsx(s.a,{href:"https://www.ibm.com/cloud/cloud-foundry",children:"first class citizen"})," on IBM Cloud."]}),`
`,e.exports.jsx(s.h3,{children:"Docker"}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.a,{href:"https://www.docker.com/",children:"Docker"}),` is a computer program that performs operating-system-level virtualization, also known as
"containerization". While similar to a Virtual Machine, Docker allows for much less resource
consumption as containers share the underlying OS. Like VMs its solves the 'it works on my machine'.`]}),`
`,e.exports.jsx(s.h4,{children:"Docker images vs Buildpacks"}),`
`,e.exports.jsxs(s.p,{children:["CloudFoundry pushes ",e.exports.jsx(s.a,{href:"https://docs.cloudfoundry.org/buildpacks/",children:"Buildpacks"}),` as their default means for deploying/running an application,
however they also support running container images through their container runtime `,e.exports.jsx(s.a,{href:"https://docs.cloudfoundry.org/concepts/architecture/garden.html",children:"Garden-runC"})]}),`
`,e.exports.jsx(s.p,{children:"Here's a quick comparison:"}),`
`,e.exports.jsxs(s.table,{children:[e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{children:"Buildpack"}),e.exports.jsx(s.th,{children:"Docker"})]})}),e.exports.jsxs(s.tbody,{children:[e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.strong,{children:"Ease of use"})}),e.exports.jsx(s.td,{children:"When you push an app, Cloud Foundry automatically detects an appropriate buildpack for it. Buildpacks typically examine your apps to determine what dependencies to download and how to configure the apps to communicate with bound services. It saves you DevOp time and allows you to focus on you application."}),e.exports.jsx(s.td,{children:"Docker requires an understanding of how to build an image, but once that initial skill cost is paid building and deploying are a breeze."})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.strong,{children:"Control"})}),e.exports.jsx(s.td,{children:"Buildpack's ease comes at the cost of control. Buildpacks have predefined configurations which may not satisfy your needs. Only recently have you been able to combines multiple programming languages together in a single deployment with multibuildpacks"}),e.exports.jsx(s.td,{children:"Docker on the other hand gives full control to the user. You specify exactly what files / services / users / applications you need and they will be included in the image. Images can be build on top of other images, so there's no need to re-invent the wheel"})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.strong,{children:"Portabillity"})}),e.exports.jsx(s.td,{children:"Buildpacks can only be run on instances of cloud foundry. While cloud foundry can be run on all the major cloud providers, you may not want to run a full Paas just to deploy an single application."}),e.exports.jsx(s.td,{children:"Docker has much greater portability than buildpacks and are perfect for users who are concerned with vendor lock in. Docker containers can be run anywhere that includes a container runtime, which is all major cloud providers and with the advent of Kubernetes containers have become even more prevalent."})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.strong,{children:"Security"})}),e.exports.jsx(s.td,{children:"A major advantage for buildpacks are that they are maintained by Cloud Foundry and as such their security is kept up date. Major security flaws can also be patched at runtime."}),e.exports.jsx(s.td,{children:"Docker falls behind here a bit. While you can lock down your container to large degree, one eye needs to be kept on keep things up to date. Cloud foundry can't silently update your runtime the way it can with Buildpacks"})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.strong,{children:"Debugging"})}),e.exports.jsx(s.td,{children:"Since a lot of the control of whats run is taken away from the user, debugging deployment issues can be more difficult. Though Cloud Foundry does provide some tools to help, such as VMs etc"}),e.exports.jsx(s.td,{children:"Docker solves the 'It works on my machine' issue. Whats runs on your machine is what will run on Cloud Foundry"})]})]})]}),`
`,e.exports.jsx(s.h3,{children:"Before we begin"}),`
`,e.exports.jsx(s.p,{children:"For the following tutorial, you'll need to have installed:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Docker"}),`
`,e.exports.jsx(s.li,{children:"Golang 1.11+"}),`
`,e.exports.jsx(s.li,{children:"Git"}),`
`]}),`
`,e.exports.jsx(s.p,{children:"We'll need accounts on:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Github"}),`
`,e.exports.jsx(s.li,{children:"TravisCI"}),`
`,e.exports.jsx(s.li,{children:"Docker hub"}),`
`,e.exports.jsx(s.li,{children:"IBM Cloud (to use their cloud foundry)"}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["The code for this tutorial can be found ",e.exports.jsx(s.a,{href:"https://github.com/sinnott74/DockerCloudFoundryDemo",children:"here"}),"."]}),`
`,e.exports.jsx(s.h3,{children:"Setting up our Git repo"}),`
`,e.exports.jsx(s.p,{children:"After creating accounts on all of the above. Create a repository on Github for our application."}),`
`,e.exports.jsxs(s.p,{children:["Firstly, create a directory for the project. I'll be calling mine ",e.exports.jsx(s.code,{children:"DockerCloudFoundryDemo"}),`. Then run
the following commands:`]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"git init"})," - to initialise this as a git repository"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"git remote add origin https://github.com/[username]/DockerCloudFoundryDemo.git"}),` - to wire up
our local repo to Github's hosted repo.`]}),`
`]}),`
`,e.exports.jsx(s.h3,{children:"Setting up Travis"}),`
`,e.exports.jsxs(s.p,{children:["Head over to ",e.exports.jsx(s.a,{href:"https://travis-ci.org",children:"TravisCI"}),` and navigate to your settings. From there you can configure which Github
project's Travis will add a webhook for. On each commit to that repo Travis will run you CI code.
For later in the tutorial we'll also need a few enviroment variables set. These are set on a per
repo basis.`]}),`
`,e.exports.jsxs(s.p,{children:[`The following EnvVars are needed:
`,e.exports.jsx(s.img,{src:"https://i.imgur.com/qYzqpli.png",alt:"TravisCI Environment Variables",title:"TravisCI Environment Variables"})]}),`
`,e.exports.jsx(s.h3,{children:"Our application"}),`
`,e.exports.jsxs(s.p,{children:["Our application is a simple ",e.exports.jsx(s.a,{href:"https://golang.org/",children:"Go"}),` hello world web application. It listens on a port specified by the
environment variable `,e.exports.jsx(s.code,{children:"PORT"})," and returns ",e.exports.jsx(s.code,{children:"hello world"}),`. We'll be using Go Modules for this, just to
show how you would go about it but this application so simple that no dependencies are needed.`]}),`
`,e.exports.jsxs(s.p,{children:["Running ",e.exports.jsx(s.code,{children:"go mod init"})," will initialise this as a go module project and create a ",e.exports.jsx(s.code,{children:"go.mod"})," file."]}),`
`,e.exports.jsx(s.pre,{className:"language-go",children:e.exports.jsxs(s.code,{className:"language-go",children:[e.exports.jsx(s.span,{className:"token comment",children:"// main.go"}),`
`,e.exports.jsx(s.span,{className:"token keyword",children:"package"}),` main

`,e.exports.jsx(s.span,{className:"token keyword",children:"import"})," ",e.exports.jsx(s.span,{className:"token punctuation",children:"("}),`
        `,e.exports.jsx(s.span,{className:"token string",children:'"net/http"'}),`
        `,e.exports.jsx(s.span,{className:"token string",children:'"os"'}),`
`,e.exports.jsx(s.span,{className:"token punctuation",children:")"}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"// Application entry point"}),`
`,e.exports.jsx(s.span,{className:"token keyword",children:"func"})," ",e.exports.jsx(s.span,{className:"token function",children:"main"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),e.exports.jsx(s.span,{className:"token punctuation",children:")"})," ",e.exports.jsx(s.span,{className:"token punctuation",children:"{"}),`
        http`,e.exports.jsx(s.span,{className:"token punctuation",children:"."}),e.exports.jsx(s.span,{className:"token function",children:"HandleFunc"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),e.exports.jsx(s.span,{className:"token string",children:'"/"'}),e.exports.jsx(s.span,{className:"token punctuation",children:","})," helloWorld",e.exports.jsx(s.span,{className:"token punctuation",children:")"}),`
        err `,e.exports.jsx(s.span,{className:"token operator",children:":="})," http",e.exports.jsx(s.span,{className:"token punctuation",children:"."}),e.exports.jsx(s.span,{className:"token function",children:"ListenAndServe"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),e.exports.jsx(s.span,{className:"token string",children:'":"'}),e.exports.jsx(s.span,{className:"token operator",children:"+"}),e.exports.jsx(s.span,{className:"token function",children:"port"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),e.exports.jsx(s.span,{className:"token punctuation",children:")"}),e.exports.jsx(s.span,{className:"token punctuation",children:","})," ",e.exports.jsx(s.span,{className:"token boolean",children:"nil"}),e.exports.jsx(s.span,{className:"token punctuation",children:")"}),`
        `,e.exports.jsx(s.span,{className:"token keyword",children:"if"})," err ",e.exports.jsx(s.span,{className:"token operator",children:"!="})," ",e.exports.jsx(s.span,{className:"token boolean",children:"nil"})," ",e.exports.jsx(s.span,{className:"token punctuation",children:"{"}),`
                `,e.exports.jsx(s.span,{className:"token function",children:"panic"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),"err",e.exports.jsx(s.span,{className:"token punctuation",children:")"}),`
        `,e.exports.jsx(s.span,{className:"token punctuation",children:"}"}),`
`,e.exports.jsx(s.span,{className:"token punctuation",children:"}"}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"// Hello world http handler"}),`
`,e.exports.jsx(s.span,{className:"token keyword",children:"func"})," ",e.exports.jsx(s.span,{className:"token function",children:"helloWorld"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),"w http",e.exports.jsx(s.span,{className:"token punctuation",children:"."}),"ResponseWriter",e.exports.jsx(s.span,{className:"token punctuation",children:","})," r ",e.exports.jsx(s.span,{className:"token operator",children:"*"}),"http",e.exports.jsx(s.span,{className:"token punctuation",children:"."}),"Request",e.exports.jsx(s.span,{className:"token punctuation",children:")"})," ",e.exports.jsx(s.span,{className:"token punctuation",children:"{"}),`
        w`,e.exports.jsx(s.span,{className:"token punctuation",children:"."}),e.exports.jsx(s.span,{className:"token function",children:"WriteHeader"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),"http",e.exports.jsx(s.span,{className:"token punctuation",children:"."}),"StatusOK",e.exports.jsx(s.span,{className:"token punctuation",children:")"}),`
        w`,e.exports.jsx(s.span,{className:"token punctuation",children:"."}),e.exports.jsx(s.span,{className:"token function",children:"Write"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),e.exports.jsx(s.span,{className:"token punctuation",children:"["}),e.exports.jsx(s.span,{className:"token punctuation",children:"]"}),e.exports.jsx(s.span,{className:"token function",children:"byte"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),e.exports.jsx(s.span,{className:"token string",children:'"Hello world"'}),e.exports.jsx(s.span,{className:"token punctuation",children:")"}),e.exports.jsx(s.span,{className:"token punctuation",children:")"}),`
`,e.exports.jsx(s.span,{className:"token punctuation",children:"}"}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"// retrieves the Port to start the server on"}),`
`,e.exports.jsx(s.span,{className:"token keyword",children:"func"})," ",e.exports.jsx(s.span,{className:"token function",children:"port"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),e.exports.jsx(s.span,{className:"token punctuation",children:")"})," ",e.exports.jsx(s.span,{className:"token builtin",children:"string"})," ",e.exports.jsx(s.span,{className:"token punctuation",children:"{"}),`
        port `,e.exports.jsx(s.span,{className:"token operator",children:":="})," os",e.exports.jsx(s.span,{className:"token punctuation",children:"."}),e.exports.jsx(s.span,{className:"token function",children:"Getenv"}),e.exports.jsx(s.span,{className:"token punctuation",children:"("}),e.exports.jsx(s.span,{className:"token string",children:'"PORT"'}),e.exports.jsx(s.span,{className:"token punctuation",children:")"}),`
        `,e.exports.jsx(s.span,{className:"token keyword",children:"if"})," port ",e.exports.jsx(s.span,{className:"token operator",children:"=="})," ",e.exports.jsx(s.span,{className:"token string",children:'""'})," ",e.exports.jsx(s.span,{className:"token punctuation",children:"{"}),`
                port `,e.exports.jsx(s.span,{className:"token operator",children:"="})," ",e.exports.jsx(s.span,{className:"token string",children:'"8008"'}),`
        `,e.exports.jsx(s.span,{className:"token punctuation",children:"}"}),`
        `,e.exports.jsx(s.span,{className:"token keyword",children:"return"}),` port
`,e.exports.jsx(s.span,{className:"token punctuation",children:"}"}),`

`]})}),`
`,e.exports.jsxs(s.p,{children:["To quickly verify the above code works, run ",e.exports.jsx(s.code,{children:"go run main.go"})," and the visit ",e.exports.jsx(s.code,{children:"localhost:8008/"}),` to see
`,e.exports.jsx(s.code,{children:"Hello world"})]}),`
`,e.exports.jsx(s.h3,{children:"Build our Docker image"}),`
`,e.exports.jsx(s.p,{children:`Building a Go docker image is much simpler than I have laid out below. I'm building an image which
is as small as I can make it and have rebuilds that a quick and repeatable.`}),`
`,e.exports.jsxs(s.p,{children:["The below ",e.exports.jsx(s.code,{children:"Dockerfile"})," is a multi stage build. In the first stage I'll use ",e.exports.jsx(s.code,{children:"golang:1.11.1-alpine3.8"}),`
as my base as it has the majority of what we need already included.`]}),`
`,e.exports.jsx(s.p,{children:`Docker builds images in layers. Each command creates a new layer on to of the old one. This allows
for faster repeatable builds because we don't need to rebuild layers that haven't change. As such
you should put the layers that are most likely to change last.`}),`
`,e.exports.jsx(s.pre,{className:"language-docker",children:e.exports.jsxs(s.code,{className:"language-docker",children:[e.exports.jsx(s.span,{className:"token comment",children:"# Dockerfile"}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"FROM"})," golang:1.11.1-alpine3.8 ",e.exports.jsx(s.span,{className:"token keyword",children:"as"})," builder"]}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"ENV"})," GO111MODULE on"]}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"WORKDIR"})," ",e.exports.jsx(s.span,{className:"token variable",children:"$GOPATH"}),"/src/github.com/sinnott74/DockerCloudFoundryDemo"]}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"# Go requires Git to download dependencies"}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"RUN"})," apk add git"]}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"# Copy our module definition"}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"COPY"})," go.mod ./"]}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"# Download module dependencies"}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"RUN"})," go mod download"]}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"# Copy source files - this is the layer most likely to change"}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"COPY"})," . ./"]}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"# Build binary, specifying the architecture we want and removing debugging information with the -w -s build flags"}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"RUN"})," CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags=",e.exports.jsx(s.span,{className:"token string",children:'"-w -s"'})]}),`

`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"FROM"})," alpine:3.8"]}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"# Choose port to expose"}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"EXPOSE"})," 8008"]}),`

`,e.exports.jsx(s.span,{className:"token comment",children:"# Copy binary"}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"COPY"})," ",e.exports.jsxs(s.span,{className:"token options",children:[e.exports.jsx(s.span,{className:"token property",children:"--from"}),e.exports.jsx(s.span,{className:"token punctuation",children:"="}),e.exports.jsx(s.span,{className:"token string",children:"builder"})]})," /go/src/github.com/sinnott74/DockerCloudFoundryDemo/DockerCloudFoundryDemo ."]}),`
`,e.exports.jsxs(s.span,{className:"token instruction",children:[e.exports.jsx(s.span,{className:"token keyword",children:"CMD"})," [",e.exports.jsx(s.span,{className:"token string",children:'"./DockerCloudFoundryDemo"'}),"]"]}),`
`]})}),`
`,e.exports.jsxs(s.p,{children:["To build the image run ",e.exports.jsx(s.code,{children:"docker build -t sinnott74/dockercloudfoundrydemo ."}),". Don't forget the ",e.exports.jsx(s.code,{children:"."}),` at
the end as its specifies which directory to use. Docker images are tagged with the `,e.exports.jsx(s.code,{children:"-t"}),` flag which
provides a way for use to reference them later.`]}),`
`,e.exports.jsxs(s.p,{children:["To run the image, ",e.exports.jsx(s.code,{children:"docker run -p 8008:8008 sinnott74/dockercloudfoundrydemo"}),". ",e.exports.jsx(s.code,{children:"-p 8008:8008"}),` tells
docker to map the 8008 port on my local network to 8008 in the container.`]}),`
`,e.exports.jsxs(s.p,{children:["Again visit ",e.exports.jsx(s.code,{children:"localhost:8008/"})," to verify it worked and see ",e.exports.jsx(s.code,{children:"Hello world"})]}),`
`,e.exports.jsx(s.h3,{children:"Defining a Cloud Foundry application"}),`
`,e.exports.jsxs(s.p,{children:["Cloud Foundry uses ",e.exports.jsx(s.code,{children:"yaml"})," files to define an application. Below we are specifying:"]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"The name of the application"}),`
`,e.exports.jsx(s.li,{children:"How many instances we want to run"}),`
`,e.exports.jsx(s.li,{children:"The memory and disk size required"}),`
`,e.exports.jsx(s.li,{children:"The url we want for the application (bare in mind this could be taken)"}),`
`,e.exports.jsx(s.li,{children:`Finally, and most importantly the docker image we want to deploy. Cloud foundry will get the
image from DockerHub and deploy it.`}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["See ",e.exports.jsx(s.a,{href:"https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html',",children:"Deploying with Application Manifests"})," for more configuration options."]}),`
`,e.exports.jsx(s.pre,{className:"language-yaml",children:e.exports.jsxs(s.code,{className:"language-yaml",children:[e.exports.jsx(s.span,{className:"token comment",children:"# manifest.yml"}),`
`,e.exports.jsx(s.span,{className:"token key atrule",children:"applications"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),`
    `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"})," ",e.exports.jsx(s.span,{className:"token key atrule",children:"name"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),` DockerCloudFoundryDemo
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"memory"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),` 32M
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"instances"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"})," ",e.exports.jsx(s.span,{className:"token number",children:"1"}),`
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"disk_quota"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),` 32M
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"routes"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),`
          `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"})," ",e.exports.jsx(s.span,{className:"token key atrule",children:"route"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"})," DockerCloudFoundryDemo.eu",e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),`gb.mybluemix.net
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"docker"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),`
          `,e.exports.jsx(s.span,{className:"token key atrule",children:"image"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),` sinnott74/dockercloudfoundrydemo
`]})}),`
`,e.exports.jsx(s.h3,{children:"Continuous delivery"}),`
`,e.exports.jsxs(s.p,{children:["TravisCI is configured with a ",e.exports.jsx(s.code,{children:".travis.yml"})," file. The following file:"]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Builds our binary then runs our tests."}),`
`,e.exports.jsx(s.li,{children:"Builds our Docker image"}),`
`,e.exports.jsx(s.li,{children:"Pushes the image to DockerHub"}),`
`,e.exports.jsx(s.li,{children:"Deploys that images to IBM's Cloud Foundry."}),`
`]}),`
`,e.exports.jsx(s.pre,{className:"language-yaml",children:e.exports.jsxs(s.code,{className:"language-yaml",children:[e.exports.jsx(s.span,{className:"token comment",children:"# .travis.yml"}),`
`,e.exports.jsx(s.span,{className:"token key atrule",children:"language"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),` go

`,e.exports.jsx(s.span,{className:"token key atrule",children:"go"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),`
    `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),` 1.11.x

`,e.exports.jsx(s.span,{className:"token key atrule",children:"env"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),`
    `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),` GO111MODULE=on

`,e.exports.jsx(s.span,{className:"token key atrule",children:"services"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),`
    `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),` docker

`,e.exports.jsx(s.span,{className:"token key atrule",children:"script"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),`
    `,e.exports.jsx(s.span,{className:"token comment",children:"# Build binary and run test"}),`
    `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"})," go build ",e.exports.jsx(s.span,{className:"token important",children:"&&"})," go test ",e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),"v ",e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),"race ./",e.exports.jsx(s.span,{className:"token punctuation",children:"..."}),`
    `,e.exports.jsx(s.span,{className:"token comment",children:"# Build docker image"}),`
    `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"})," docker build ",e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),`t sinnott74/dockercloudfoundrydemo .

`,e.exports.jsx(s.span,{className:"token key atrule",children:"before_deploy"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),`
    `,e.exports.jsx(s.span,{className:"token comment",children:"# Login to docker hub"}),`
    `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),' echo "$DOCKER_PASSWORD" ',e.exports.jsx(s.span,{className:"token punctuation",children:"|"})," docker login ",e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),'u "$DOCKER_USER" ',e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),"password",e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),`stdin
    `,e.exports.jsx(s.span,{className:"token comment",children:"# Push image to docker"}),`
    `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),` docker push sinnott74/dockercloudfoundrydemo

    `,e.exports.jsx(s.span,{className:"token comment",children:"# Deploy"}),`
    `,e.exports.jsx(s.span,{className:"token comment",children:"# Bluemix / IBM Cloud"}),`
`,e.exports.jsx(s.span,{className:"token key atrule",children:"deploy"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),`
    `,e.exports.jsx(s.span,{className:"token punctuation",children:"-"})," ",e.exports.jsx(s.span,{className:"token key atrule",children:"provider"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),` cloudfoundry
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"username"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"})," $",e.exports.jsx(s.span,{className:"token punctuation",children:"{"}),"IBM_CLOUD_USER",e.exports.jsx(s.span,{className:"token punctuation",children:"}"}),`
      `,e.exports.jsx(s.span,{className:"token comment",children:"#########################"}),`
      `,e.exports.jsx(s.span,{className:"token comment",children:"## Add BLUEMIX_PASSWORD environment variable to your Travis project's settings"}),`
      `,e.exports.jsx(s.span,{className:"token comment",children:"## https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings"}),`
      `,e.exports.jsx(s.span,{className:"token comment",children:"#########################"}),`
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"password"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"})," $",e.exports.jsx(s.span,{className:"token punctuation",children:"{"}),"IBM_CLOUD_PASSWORD",e.exports.jsx(s.span,{className:"token punctuation",children:"}"}),`
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"organization"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"})," $",e.exports.jsx(s.span,{className:"token punctuation",children:"{"}),"IBM_CLOUD_USER",e.exports.jsx(s.span,{className:"token punctuation",children:"}"}),`
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"space"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"}),` staging
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"region"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"})," eu",e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),`gb
      `,e.exports.jsx(s.span,{className:"token key atrule",children:"api"}),e.exports.jsx(s.span,{className:"token punctuation",children:":"})," https",e.exports.jsx(s.span,{className:"token punctuation",children:":"}),"//api.eu",e.exports.jsx(s.span,{className:"token punctuation",children:"-"}),`gb.bluemix.net
`]})}),`
`,e.exports.jsx(s.h3,{children:"Drum roll please"}),`
`,e.exports.jsx(s.p,{children:"All thats left to do is to commit our changes and push our application to Github."}),`
`,e.exports.jsx(s.p,{children:`Travis will listen for commits on Github and run our CI workload. That workload will verify we can
build the application and that it passes all of our tests. It will then build the Docker image and
push it to DockerHub, before finally pushing our application to IBM's Cloud Foundry, which will
retrieve the image from DockerHub and deploy it.`}),`
`,e.exports.jsxs(s.p,{children:["We can then visit ",e.exports.jsx(s.code,{children:"DockerCloudFoundryDemo.eu-gb.mybluemix.net"})," to see ",e.exports.jsx(s.code,{children:"Hello world"})]}),`
`,e.exports.jsx(s.h4,{children:"Voila"}),`
`,e.exports.jsx(s.img,{src:"https://i.imgur.com/VSXI3WT.png",alt:"Live hello world application",title:"Live hello world application"}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Note:"})," I'll probably have taken the above application down by the time you're reading this..."]})]})}}export{p as author,m as created,u as date,j as default,x as id,d as imageurl,h as tags,c as title};
