import{j as s}from"./jsx-runtime.677020d1.js";import{u as t}from"./index.d409b08a.js";import"./index.6de8143e.js";const c="Deploying Docker on Cloud Foundry",p="Daniel Sinnott",h="https://i.imgur.com/axoBYe2.png",d=25,x=["Golang","Docker","IBMCloud","TravisCI","CI/CD","Cloud Foundry"],j="Fri, 19th Oct 2018",m=new Date(1539960830019);function u(n={}){const{wrapper:r}=Object.assign({},t(),n.components);return r?s.exports.jsx(r,Object.assign({},n,{children:s.exports.jsx(o,{})})):o();function o(){const e=Object.assign({h2:"h2",p:"p",h3:"h3",a:"a",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",ul:"ul",li:"li",code:"code",img:"img",pre:"pre",span:"span"},t(),n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.h2,{children:"Using CI and Docker to deploy an application to Cloud Foundry"}),`
`,s.exports.jsx(e.p,{children:`I recently found out Cloud Foundry supports Docker containers, so here quick tutorial of to use
continuous integration to build your application into a docker image and deploy it to Cloud Foundry.`}),`
`,s.exports.jsx(e.h3,{children:"Cloud Foundry"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.a,{href:"https://www.cloudfoundry.org/",children:"Cloud Foundry"})," is an open source platform as a service, created by ",s.exports.jsx(e.a,{href:"https://pivotal.io/",children:"Pivotal"}),`, on which developers
can build, deploy, run and scale applications. It can be deployed onto any cloud provider, like AWS
and is most notably a `,s.exports.jsx(e.a,{href:"https://www.ibm.com/cloud/cloud-foundry",children:"first class citizen"})," on IBM Cloud."]}),`
`,s.exports.jsx(e.h3,{children:"Docker"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.a,{href:"https://www.docker.com/",children:"Docker"}),` is a computer program that performs operating-system-level virtualization, also known as
"containerization". While similar to a Virtual Machine, Docker allows for much less resource
consumption as containers share the underlying OS. Like VMs its solves the 'it works on my machine'.`]}),`
`,s.exports.jsx(e.h4,{children:"Docker images vs Buildpacks"}),`
`,s.exports.jsxs(e.p,{children:["CloudFoundry pushes ",s.exports.jsx(e.a,{href:"https://docs.cloudfoundry.org/buildpacks/",children:"Buildpacks"}),` as their default means for deploying/running an application,
however they also support running container images through their container runtime `,s.exports.jsx(e.a,{href:"https://docs.cloudfoundry.org/concepts/architecture/garden.html",children:"Garden-runC"})]}),`
`,s.exports.jsx(e.p,{children:"Here's a quick comparison:"}),`
`,s.exports.jsxs(e.table,{children:[s.exports.jsx(e.thead,{children:s.exports.jsxs(e.tr,{children:[s.exports.jsx(e.th,{}),s.exports.jsx(e.th,{children:"Buildpack"}),s.exports.jsx(e.th,{children:"Docker"})]})}),s.exports.jsxs(e.tbody,{children:[s.exports.jsxs(e.tr,{children:[s.exports.jsx(e.td,{children:s.exports.jsx(e.strong,{children:"Ease of use"})}),s.exports.jsx(e.td,{children:"When you push an app, Cloud Foundry automatically detects an appropriate buildpack for it. Buildpacks typically examine your apps to determine what dependencies to download and how to configure the apps to communicate with bound services. It saves you DevOp time and allows you to focus on you application."}),s.exports.jsx(e.td,{children:"Docker requires an understanding of how to build an image, but once that initial skill cost is paid building and deploying are a breeze."})]}),s.exports.jsxs(e.tr,{children:[s.exports.jsx(e.td,{children:s.exports.jsx(e.strong,{children:"Control"})}),s.exports.jsx(e.td,{children:"Buildpack's ease comes at the cost of control. Buildpacks have predefined configurations which may not satisfy your needs. Only recently have you been able to combines multiple programming languages together in a single deployment with multibuildpacks"}),s.exports.jsx(e.td,{children:"Docker on the other hand gives full control to the user. You specify exactly what files / services / users / applications you need and they will be included in the image. Images can be build on top of other images, so there's no need to re-invent the wheel"})]}),s.exports.jsxs(e.tr,{children:[s.exports.jsx(e.td,{children:s.exports.jsx(e.strong,{children:"Portabillity"})}),s.exports.jsx(e.td,{children:"Buildpacks can only be run on instances of cloud foundry. While cloud foundry can be run on all the major cloud providers, you may not want to run a full Paas just to deploy an single application."}),s.exports.jsx(e.td,{children:"Docker has much greater portability than buildpacks and are perfect for users who are concerned with vendor lock in. Docker containers can be run anywhere that includes a container runtime, which is all major cloud providers and with the advent of Kubernetes containers have become even more prevalent."})]}),s.exports.jsxs(e.tr,{children:[s.exports.jsx(e.td,{children:s.exports.jsx(e.strong,{children:"Security"})}),s.exports.jsx(e.td,{children:"A major advantage for buildpacks are that they are maintained by Cloud Foundry and as such their security is kept up date. Major security flaws can also be patched at runtime."}),s.exports.jsx(e.td,{children:"Docker falls behind here a bit. While you can lock down your container to large degree, one eye needs to be kept on keep things up to date. Cloud foundry can't silently update your runtime the way it can with Buildpacks"})]}),s.exports.jsxs(e.tr,{children:[s.exports.jsx(e.td,{children:s.exports.jsx(e.strong,{children:"Debugging"})}),s.exports.jsx(e.td,{children:"Since a lot of the control of whats run is taken away from the user, debugging deployment issues can be more difficult. Though Cloud Foundry does provide some tools to help, such as VMs etc"}),s.exports.jsx(e.td,{children:"Docker solves the 'It works on my machine' issue. Whats runs on your machine is what will run on Cloud Foundry"})]})]})]}),`
`,s.exports.jsx(e.h3,{children:"Before we begin"}),`
`,s.exports.jsx(e.p,{children:"For the following tutorial, you'll need to have installed:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"Docker"}),`
`,s.exports.jsx(e.li,{children:"Golang 1.11+"}),`
`,s.exports.jsx(e.li,{children:"Git"}),`
`]}),`
`,s.exports.jsx(e.p,{children:"We'll need accounts on:"}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"Github"}),`
`,s.exports.jsx(e.li,{children:"TravisCI"}),`
`,s.exports.jsx(e.li,{children:"Docker hub"}),`
`,s.exports.jsx(e.li,{children:"IBM Cloud (to use their cloud foundry)"}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["The code for this tutorial can be found ",s.exports.jsx(e.a,{href:"https://github.com/sinnott74/DockerCloudFoundryDemo",children:"here"}),"."]}),`
`,s.exports.jsx(e.h3,{children:"Setting up our Git repo"}),`
`,s.exports.jsx(e.p,{children:"After creating accounts on all of the above. Create a repository on Github for our application."}),`
`,s.exports.jsxs(e.p,{children:["Firstly, create a directory for the project. I'll be calling mine ",s.exports.jsx(e.code,{children:"DockerCloudFoundryDemo"}),`. Then run
the following commands:`]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"git init"})," - to initialise this as a git repository"]}),`
`,s.exports.jsxs(e.li,{children:[s.exports.jsx(e.code,{children:"git remote add origin https://github.com/[username]/DockerCloudFoundryDemo.git"}),` - to wire up
our local repo to Github's hosted repo.`]}),`
`]}),`
`,s.exports.jsx(e.h3,{children:"Setting up Travis"}),`
`,s.exports.jsxs(e.p,{children:["Head over to ",s.exports.jsx(e.a,{href:"https://travis-ci.org",children:"TravisCI"}),` and navigate to your settings. From there you can configure which Github
project's Travis will add a webhook for. On each commit to that repo Travis will run you CI code.
For later in the tutorial we'll also need a few enviroment variables set. These are set on a per
repo basis.`]}),`
`,s.exports.jsxs(e.p,{children:[`The following EnvVars are needed:
`,s.exports.jsx(e.img,{src:"https://i.imgur.com/qYzqpli.png",alt:"TravisCI Environment Variables",title:"TravisCI Environment Variables"})]}),`
`,s.exports.jsx(e.h3,{children:"Our application"}),`
`,s.exports.jsxs(e.p,{children:["Our application is a simple ",s.exports.jsx(e.a,{href:"https://golang.org/",children:"Go"}),` hello world web application. It listens on a port specified by the
environment variable `,s.exports.jsx(e.code,{children:"PORT"})," and returns ",s.exports.jsx(e.code,{children:"hello world"}),`. We'll be using Go Modules for this, just to
show how you would go about it but this application so simple that no dependencies are needed.`]}),`
`,s.exports.jsxs(e.p,{children:["Running ",s.exports.jsx(e.code,{children:"go mod init"})," will initialise this as a go module project and create a ",s.exports.jsx(e.code,{children:"go.mod"})," file."]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-go",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"// main.go"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"package"}),` main

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"import"}),` (
        `,s.exports.jsx(e.span,{className:"hljs-string",children:'"net/http"'}),`
        `,s.exports.jsx(e.span,{className:"hljs-string",children:'"os"'}),`
)

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Application entry point"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"main"}),s.exports.jsx(e.span,{className:"hljs-params",children:"()"})]}),` {
        http.HandleFunc(`,s.exports.jsx(e.span,{className:"hljs-string",children:'"/"'}),`, helloWorld)
        err := http.ListenAndServe(`,s.exports.jsx(e.span,{className:"hljs-string",children:'":"'}),"+port(), ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),`)
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," err != ",s.exports.jsx(e.span,{className:"hljs-literal",children:"nil"}),` {
                `,s.exports.jsx(e.span,{className:"hljs-built_in",children:"panic"}),`(err)
        }
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// Hello world http handler"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"helloWorld"}),s.exports.jsx(e.span,{className:"hljs-params",children:"(w http.ResponseWriter, r *http.Request)"})]}),` {
        w.WriteHeader(http.StatusOK)
        w.Write([]`,s.exports.jsx(e.span,{className:"hljs-type",children:"byte"}),"(",s.exports.jsx(e.span,{className:"hljs-string",children:'"Hello world"'}),`))
}

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"// retrieves the Port to start the server on"}),`
`,s.exports.jsxs(e.span,{className:"hljs-function",children:[s.exports.jsx(e.span,{className:"hljs-keyword",children:"func"})," ",s.exports.jsx(e.span,{className:"hljs-title",children:"port"}),s.exports.jsx(e.span,{className:"hljs-params",children:"()"})]})," ",s.exports.jsx(e.span,{className:"hljs-type",children:"string"}),` {
        port := os.Getenv(`,s.exports.jsx(e.span,{className:"hljs-string",children:'"PORT"'}),`)
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"if"})," port == ",s.exports.jsx(e.span,{className:"hljs-string",children:'""'}),` {
                port = `,s.exports.jsx(e.span,{className:"hljs-string",children:'"8008"'}),`
        }
        `,s.exports.jsx(e.span,{className:"hljs-keyword",children:"return"}),` port
}

`]})}),`
`,s.exports.jsxs(e.p,{children:["To quickly verify the above code works, run ",s.exports.jsx(e.code,{children:"go run main.go"})," and the visit ",s.exports.jsx(e.code,{children:"localhost:8008/"}),` to see
`,s.exports.jsx(e.code,{children:"Hello world"})]}),`
`,s.exports.jsx(e.h3,{children:"Build our Docker image"}),`
`,s.exports.jsx(e.p,{children:`Building a Go docker image is much simpler than I have laid out below. I'm building an image which
is as small as I can make it and have rebuilds that a quick and repeatable.`}),`
`,s.exports.jsxs(e.p,{children:["The below ",s.exports.jsx(e.code,{children:"Dockerfile"})," is a multi stage build. In the first stage I'll use ",s.exports.jsx(e.code,{children:"golang:1.11.1-alpine3.8"}),`
as my base as it has the majority of what we need already included.`]}),`
`,s.exports.jsx(e.p,{children:`Docker builds images in layers. Each command creates a new layer on to of the old one. This allows
for faster repeatable builds because we don't need to rebuild layers that haven't change. As such
you should put the layers that are most likely to change last.`}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-dockerfile",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"# Dockerfile"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"FROM"})," golang:",s.exports.jsx(e.span,{className:"hljs-number",children:"1.11"}),".",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),"-alpine3.",s.exports.jsx(e.span,{className:"hljs-number",children:"8"}),` as builder
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"ENV"}),` GO111MODULE on
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"WORKDIR"}),s.exports.jsxs(e.span,{className:"bash",children:[" ",s.exports.jsx(e.span,{className:"hljs-variable",children:"$GOPATH"}),"/src/github.com/sinnott74/DockerCloudFoundryDemo"]}),`

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Go requires Git to download dependencies"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"RUN"}),s.exports.jsx(e.span,{className:"bash",children:" apk add git"}),`

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Copy our module definition"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"COPY"}),s.exports.jsx(e.span,{className:"bash",children:" go.mod ./"}),`

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Download module dependencies"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"RUN"}),s.exports.jsx(e.span,{className:"bash",children:" go mod download"}),`

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Copy source files - this is the layer most likely to change"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"COPY"}),s.exports.jsx(e.span,{className:"bash",children:" . ./"}),`

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Build binary, specifying the architecture we want and removing debugging information with the -w -s build flags"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"RUN"}),s.exports.jsxs(e.span,{className:"bash",children:[" CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags=",s.exports.jsx(e.span,{className:"hljs-string",children:'"-w -s"'})]}),`

`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"FROM"})," alpine:",s.exports.jsx(e.span,{className:"hljs-number",children:"3.8"}),`

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Choose port to expose"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"EXPOSE"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"8008"}),`

`,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Copy binary"}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"COPY"}),s.exports.jsx(e.span,{className:"bash",children:" --from=builder /go/src/github.com/sinnott74/DockerCloudFoundryDemo/DockerCloudFoundryDemo ."}),`
`,s.exports.jsx(e.span,{className:"hljs-keyword",children:"CMD"}),s.exports.jsxs(e.span,{className:"bash",children:[" [",s.exports.jsx(e.span,{className:"hljs-string",children:'"./DockerCloudFoundryDemo"'}),"]"]}),`
`]})}),`
`,s.exports.jsxs(e.p,{children:["To build the image run ",s.exports.jsx(e.code,{children:"docker build -t sinnott74/dockercloudfoundrydemo ."}),". Don't forget the ",s.exports.jsx(e.code,{children:"."}),` at
the end as its specifies which directory to use. Docker images are tagged with the `,s.exports.jsx(e.code,{children:"-t"}),` flag which
provides a way for use to reference them later.`]}),`
`,s.exports.jsxs(e.p,{children:["To run the image, ",s.exports.jsx(e.code,{children:"docker run -p 8008:8008 sinnott74/dockercloudfoundrydemo"}),". ",s.exports.jsx(e.code,{children:"-p 8008:8008"}),` tells
docker to map the 8008 port on my local network to 8008 in the container.`]}),`
`,s.exports.jsxs(e.p,{children:["Again visit ",s.exports.jsx(e.code,{children:"localhost:8008/"})," to verify it worked and see ",s.exports.jsx(e.code,{children:"Hello world"})]}),`
`,s.exports.jsx(e.h3,{children:"Defining a Cloud Foundry application"}),`
`,s.exports.jsxs(e.p,{children:["Cloud Foundry uses ",s.exports.jsx(e.code,{children:"yaml"})," files to define an application. Below we are specifying:"]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"The name of the application"}),`
`,s.exports.jsx(e.li,{children:"How many instances we want to run"}),`
`,s.exports.jsx(e.li,{children:"The memory and disk size required"}),`
`,s.exports.jsx(e.li,{children:"The url we want for the application (bare in mind this could be taken)"}),`
`,s.exports.jsx(e.li,{children:`Finally, and most importantly the docker image we want to deploy. Cloud foundry will get the
image from DockerHub and deploy it.`}),`
`]}),`
`,s.exports.jsxs(e.p,{children:["See ",s.exports.jsx(e.a,{href:"https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html',",children:"Deploying with Application Manifests"})," for more configuration options."]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-yaml",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"# manifest.yml"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"applications:"}),`
    `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"name:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"DockerCloudFoundryDemo"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"memory:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"32M"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"instances:"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"1"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"disk_quota:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"32M"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"routes:"}),`
          `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"route:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"DockerCloudFoundryDemo.eu-gb.mybluemix.net"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"docker:"}),`
          `,s.exports.jsx(e.span,{className:"hljs-attr",children:"image:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"sinnott74/dockercloudfoundrydemo"}),`
`]})}),`
`,s.exports.jsx(e.h3,{children:"Continuous delivery"}),`
`,s.exports.jsxs(e.p,{children:["TravisCI is configured with a ",s.exports.jsx(e.code,{children:".travis.yml"})," file. The following file:"]}),`
`,s.exports.jsxs(e.ul,{children:[`
`,s.exports.jsx(e.li,{children:"Builds our binary then runs our tests."}),`
`,s.exports.jsx(e.li,{children:"Builds our Docker image"}),`
`,s.exports.jsx(e.li,{children:"Pushes the image to DockerHub"}),`
`,s.exports.jsx(e.li,{children:"Deploys that images to IBM's Cloud Foundry."}),`
`]}),`
`,s.exports.jsx(e.pre,{children:s.exports.jsxs(e.code,{className:"hljs language-yaml",children:[s.exports.jsx(e.span,{className:"hljs-comment",children:"# .travis.yml"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"language:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"go"}),`

`,s.exports.jsx(e.span,{className:"hljs-attr",children:"go:"}),`
    `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-number",children:"1.11"}),s.exports.jsx(e.span,{className:"hljs-string",children:".x"}),`

`,s.exports.jsx(e.span,{className:"hljs-attr",children:"env:"}),`
    `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"GO111MODULE=on"}),`

`,s.exports.jsx(e.span,{className:"hljs-attr",children:"services:"}),`
    `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"docker"}),`

`,s.exports.jsx(e.span,{className:"hljs-attr",children:"script:"}),`
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Build binary and run test"}),`
    `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"go"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"build"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"&&"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"go"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"test"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"-v"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"-race"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"./..."}),`
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Build docker image"}),`
    `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"docker"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"build"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"-t"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"sinnott74/dockercloudfoundrydemo"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"."}),`

`,s.exports.jsx(e.span,{className:"hljs-attr",children:"before_deploy:"}),`
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Login to docker hub"}),`
    `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"echo"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"$DOCKER_PASSWORD"'})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"|"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"docker"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"login"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"-u"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:'"$DOCKER_USER"'})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"--password-stdin"}),`
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Push image to docker"}),`
    `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"docker"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"push"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"sinnott74/dockercloudfoundrydemo"}),`

    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Deploy"}),`
    `,s.exports.jsx(e.span,{className:"hljs-comment",children:"# Bluemix / IBM Cloud"}),`
`,s.exports.jsx(e.span,{className:"hljs-attr",children:"deploy:"}),`
    `,s.exports.jsx(e.span,{className:"hljs-bullet",children:"-"})," ",s.exports.jsx(e.span,{className:"hljs-attr",children:"provider:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"cloudfoundry"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"username:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"${IBM_CLOUD_USER}"}),`
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"#########################"}),`
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"## Add BLUEMIX_PASSWORD environment variable to your Travis project's settings"}),`
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"## https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings"}),`
      `,s.exports.jsx(e.span,{className:"hljs-comment",children:"#########################"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"password:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"${IBM_CLOUD_PASSWORD}"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"organization:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"${IBM_CLOUD_USER}"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"space:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"staging"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"region:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"eu-gb"}),`
      `,s.exports.jsx(e.span,{className:"hljs-attr",children:"api:"})," ",s.exports.jsx(e.span,{className:"hljs-string",children:"https://api.eu-gb.bluemix.net"}),`
`]})}),`
`,s.exports.jsx(e.h3,{children:"Drum roll please"}),`
`,s.exports.jsx(e.p,{children:"All thats left to do is to commit our changes and push our application to Github."}),`
`,s.exports.jsx(e.p,{children:`Travis will listen for commits on Github and run our CI workload. That workload will verify we can
build the application and that it passes all of our tests. It will then build the Docker image and
push it to DockerHub, before finally pushing our application to IBM's Cloud Foundry, which will
retrieve the image from DockerHub and deploy it.`}),`
`,s.exports.jsxs(e.p,{children:["We can then visit ",s.exports.jsx(e.code,{children:"DockerCloudFoundryDemo.eu-gb.mybluemix.net"})," to see ",s.exports.jsx(e.code,{children:"Hello world"})]}),`
`,s.exports.jsx(e.h4,{children:"Voila"}),`
`,s.exports.jsx(e.img,{src:"https://i.imgur.com/VSXI3WT.png",alt:"Live hello world application",title:"Live hello world application"}),`
`,s.exports.jsxs(e.p,{children:[s.exports.jsx(e.strong,{children:"Note:"})," I'll probably have taken the above application down by the time you're reading this..."]})]})}}export{p as author,m as created,j as date,u as default,d as id,h as imageurl,x as tags,c as title};
