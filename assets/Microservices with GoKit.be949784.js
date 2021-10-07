var e=Object.defineProperty,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(n,t,o)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;import"./vendor.0d5e54d3.js";import{N as i}from"./mdx-react.modern.650372c4.js";const s="Microservices with GoKit",a="Daniel Sinnott",d="https://i.imgur.com/4Ep7VSO.png",c=26,l=["Technical","Microservices","Golang","GoKit"],p="Fri, 2nd Nov 2018",u=new Date(1541190472341);function m(e){var s=e,{components:a}=s,d=((e,r)=>{var i={};for(var s in e)t.call(e,s)&&r.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&n)for(var s of n(e))r.indexOf(s)<0&&o.call(e,s)&&(i[s]=e[s]);return i})(s,["components"]);return i("wrapper",((e,i)=>{for(var s in i||(i={}))t.call(i,s)&&r(e,s,i[s]);if(n)for(var s of n(i))o.call(i,s)&&r(e,s,i[s]);return e})({components:a},d),i("h2",null,"Todo Microservice"),i("h3",null,"Go"),i("p",null,i("a",{href:"https://golang.org/",parentName:"p"},"Golang")," is the perfect language to use for microservices."),i("ul",null,i("li",{parentName:"ul"},"It compiles to a single binary, making deployment a breeze."),i("li",{parentName:"ul"},"It has incredibly low runtime memory."),i("li",{parentName:"ul"},"C & C++ like performance with built in concurrency primitives."),i("li",{parentName:"ul"},"Its standard library supports request cancellation and timeout propagation. Which means less cpu\ncycles if a user cancels or if something is taking too long."),i("li",{parentName:"ul"},"Both Docker & Kubernetes are written in Go.")),i("h4",null,"Installation"),i("p",null,"To install Go, follow the instruction for your platform here: ",i("a",{href:"https://golang.org/doc/install",parentName:"p"},"Go Installation")),i("h3",null,"GoKit"),i("p",null,i("a",{href:"https://gokit.io/",parentName:"p"},"GoKit")," is a lightly opinionated microservice toolkit. It allows developers to focus on writing the\nbusiness logic of their service and plug in transport protocols such as http or gRPC etc, service\ndiscovery, logging and metrics."),i("p",null,"Its been criticised for the amount of boilerplate code that needs to be written, and it is quite\ndaunting on first impression, but this verbosity allows for greater control in the long run. If\nyou're new to GoKit its worth checking out the ",i("a",{href:"https://gokit.io/examples/stringsvc.html",parentName:"p"},"stringsvc example"),"."),i("h4",null,"Installation"),i("p",null,"GoKit can be installed using Go's idiomatic library installation command:"),i("pre",null,i("code",{className:"language-go",parentName:"pre"},"go get github.com/go-kit/kit\n")),i("h3",null,"Business Logic"),i("h4",null,"Our Todo"),i("p",null,"Create a file ",i("inlineCode",{parentName:"p"},"model.go")," to define our Todo. Our ",i("inlineCode",{parentName:"p"},"Todo")," is can be simply modelled like below. Feel\nfree to add whatever attributes you'd like. We're using Struct tags to define what each Todo\nattribute will be named when its converted to JSON. The built in JSON encoder will use reflection to\nlook for these tags, otherwise it'll use the attribute name as its defined in Go."),i("pre",null,i("code",{className:"language-go",parentName:"pre"},'// model.go\npackage todo\n\nimport (\n    "time"\n)\n\n// Todo model\ntype Todo struct {\n    ID        string    `json:"id"`\n    Username  string    `json:"username"`\n    Text      string    `json:"text"`\n    Completed bool      `json:"completed"`\n    CreatedOn time.Time `json:"created_on"`\n}\n\n')),i("h4",null,"Define our service"),i("p",null,"Create a file ",i("inlineCode",{parentName:"p"},"service.go"),". This is going to contain our business logic. Its going to be a single\nInMemory CRUD Todo service. First we'll define an interface for our service. This will allow us to\neasily swap out the implementation later if we want to, for example, store our Todos in a\ndatabase/datastore."),i("p",null,"Our Todo service is a basically a CRUD service for Todos."),i("pre",null,i("code",{className:"language-go",parentName:"pre"},'// service.go\npackage todo\n\nimport (\n    "context"\n)\n\n// TodoService for Todos\ntype TodoService interface {\n    GetAllForUser(ctx context.Context, username string) ([]Todo, error)\n    GetByID(ctx context.Context, id string) (Todo, error)\n    Add(ctx context.Context, todo Todo) (Todo, error)\n    Update(ctx context.Context, id string, todo Todo) error\n    Delete(ctx context.Context, id string) error\n}\n')),i("h4",null,"Implementation"),i("p",null,"Next, we'll implement our service using an InMemory datastore. Go uses duck typing, so If it walks\nlike a duck and it quacks like a duck, then it must be a duck. There's no need to explicitly say\nwe're implementing the interface, e.g. Java."),i("p",null,"We'll added a ",i("inlineCode",{parentName:"p"},"RWMutex")," to lock the map and prevent concurrent access from multiple threads. The\nconstructor function ",i("inlineCode",{parentName:"p"},"NewInmemTodoService")," instantiates our service."),i("pre",null,i("code",{className:"language-go",parentName:"pre"},'// service.go\npackage todo\n\nimport (\n    "context"\n    "errors"\n    "math/rand"\n    "sync"\n    "time"\n\n    "github.com/rs/xid"\n)\n\n// TodoService for Todos\ntype TodoService interface {\n    GetAllForUser(ctx context.Context, username string) ([]Todo, error)\n    GetByID(ctx context.Context, id string) (Todo, error)\n    Add(ctx context.Context, todo Todo) (Todo, error)\n    Update(ctx context.Context, id string, todo Todo) error\n    Delete(ctx context.Context, id string) error\n}\n\n// *** Implementation ***\n\nvar (\n    // ErrInconsistentIDs is when the ID of the Entity you are updating differs from the ID given\n    ErrInconsistentIDs = errors.New("Inconsistent IDs")\n    // ErrNotFound is when the Entity doesn\'t exist\n    ErrNotFound = errors.New("Not found")\n)\n\n// NewInmemTodoService creates an in memory Todo service\nfunc NewInmemTodoService() TodoService {\n    s := &inmemService{\n        m: map[string]Todo{},\n    }\n    rand.Seed(time.Now().UnixNano())\n    return s\n}\n\n// inmemService is a In Memory implementation of the service\ntype inmemService struct {\n    sync.RWMutex\n    m map[string]Todo\n}\n\n// GetAllForUser gets Todos from memory for a user\nfunc (s *inmemService) GetAllForUser(ctx context.Context, username string) ([]Todo, error) {\n    s.RLock()\n    defer s.RUnlock()\n\n    todos := make([]Todo, 0, len(s.m))\n    for _, todo := range s.m {\n        if todo.Username == username {\n            todos = append(todos, todo)\n        }\n    }\n\n    return todos, nil\n}\n\n// Get an Todos from the database\nfunc (s *inmemService) GetByID(ctx context.Context, id string) (Todo, error) {\n    s.Lock()\n    defer s.Unlock()\n\n    if todo, ok := s.m[id]; ok {\n        return todo, nil\n    }\n\n    return Todo{}, ErrNotFound\n}\n\n// Add a Todo to memory\nfunc (s *inmemService) Add(ctx context.Context, todo Todo) (Todo, error) {\n    s.Lock()\n    defer s.Unlock()\n\n    todo.ID = xid.New().String()\n    todo.CreatedOn = time.Now()\n\n    s.m[todo.ID] = todo\n    return todo, nil\n}\n\n// Update a Todo in memory\nfunc (s *inmemService) Update(ctx context.Context, id string, todo Todo) error {\n    s.Lock()\n    defer s.Unlock()\n\n    if id != todo.ID {\n        return ErrInconsistentIDs\n    }\n\n    if _, ok := s.m[id]; !ok {\n        return ErrNotFound\n    }\n\n    s.m[todo.ID] = todo\n    return nil\n}\n\n// Delete a Todo from memory\nfunc (s *inmemService) Delete(ctx context.Context, id string) error {\n    s.Lock()\n    defer s.Unlock()\n\n    if _, ok := s.m[id]; !ok {\n        return ErrNotFound\n    }\n\n    delete(s.m, id)\n    return nil\n}\n\n')),i("h3",null,"Endpoints"),i("p",null,i("inlineCode",{parentName:"p"},"Endpoints")," are our first interaction with GoKit. Each interaction with the microservice will be\nthrough an Endpoint. GoKit provides pluggable transport layers out of the box which know how to\ninteract with Endpoints."),i("p",null,"Endpoints have a simple definition. They take in a context and a request, and return a response and\nan error."),i("pre",null,i("code",{className:"language-go",parentName:"pre"},"type Endpoint func(ctx context.Context, request interface{}) (response interface{}, err error)\n")),i("p",null,"Each method of our service needs to be wrapped in an endpoint. Endpoints force us to explicitly\nwrite what the inputs and outputs of our microservice will look like."),i("p",null,"You may notice that ",i("inlineCode",{parentName:"p"},"MakeTodoEndpoints")," constructor function takes in our ",i("inlineCode",{parentName:"p"},"TodoService"),". Best\npractices for a GoKit microservice are to use Clean/Hexagonal architectural pattern, where each\nlayer can only wraps and only know about the layers within them."),i("pre",null,i("code",{className:"language-go",parentName:"pre"},'// endpoint.go\npackage todo\n\nimport (\n    "context"\n\n    "github.com/go-kit/kit/endpoint"\n)\n\n// Endpoints collects all endpoints which compose the Todo service\ntype TodoEndpoints struct {\n    GetAllForUserEndPoint endpoint.Endpoint\n    GetByIDEndpoint       endpoint.Endpoint\n    AddEndpoint           endpoint.Endpoint\n    UpdateEndpoint        endpoint.Endpoint\n    DeleteEndpoint        endpoint.Endpoint\n}\n\n// MakeTodoEndpoints returns an Endpoints struct where each endpoint invokes\n// the corresponding method on the provided Todo\nfunc MakeTodoEndpoints(s TodoService) TodoEndpoints {\n    return TodoEndpoints{\n        GetAllForUserEndPoint: MakeGetAllForUserEndpoint(s),\n        GetByIDEndpoint:       MakeGetByIDEndpoint(s),\n        AddEndpoint:           MakeAddEndpoint(s),\n        UpdateEndpoint:        MakeUpdateEndpoint(s),\n        DeleteEndpoint:        MakeDeleteEndpoint(s),\n    }\n}\n\ntype GetAllForUserRequest struct {\n}\n\ntype GetAllForUserResponse struct {\n    Todos []Todo `json:"todos"`\n}\n\nfunc MakeGetAllForUserEndpoint(s TodoService) endpoint.Endpoint {\n    return func(ctx context.Context, request interface{}) (interface{}, error) {\n        username := ctx.Value("username").(string)\n        todos, err := s.GetAllForUser(ctx, username)\n        return GetAllForUserResponse{todos}, err\n    }\n}\n\ntype GetByIDRequest struct {\n    ID string\n}\n\ntype GetByIDResponse struct {\n    Todo Todo `json:"todo"`\n}\n\nfunc MakeGetByIDEndpoint(s TodoService) endpoint.Endpoint {\n    return func(ctx context.Context, request interface{}) (interface{}, error) {\n        req := request.(GetByIDRequest)\n        todo, err := s.GetByID(ctx, req.ID)\n        return GetByIDResponse{todo}, err\n    }\n}\n\ntype AddRequest struct {\n    Todo Todo\n}\n\ntype AddResponse struct {\n    Todo Todo `json:"todo"`\n}\n\nfunc MakeAddEndpoint(s TodoService) endpoint.Endpoint {\n    return func(ctx context.Context, request interface{}) (interface{}, error) {\n        req := request.(AddRequest)\n        todo, err := s.Add(ctx, req.Todo)\n        return AddResponse{todo}, err\n    }\n}\n\ntype UpdateRequest struct {\n    ID   string\n    Todo Todo\n}\n\ntype UpdateResponse struct {\n}\n\nfunc MakeUpdateEndpoint(s TodoService) endpoint.Endpoint {\n    return func(ctx context.Context, request interface{}) (interface{}, error) {\n        req := request.(UpdateRequest)\n        err := s.Update(ctx, req.ID, req.Todo)\n        return UpdateResponse{}, err\n    }\n}\n\ntype DeleteRequest struct {\n    ID string\n}\n\ntype DeleteResponse struct {\n}\n\nfunc MakeDeleteEndpoint(s TodoService) endpoint.Endpoint {\n    return func(ctx context.Context, request interface{}) (interface{}, error) {\n        req := request.(DeleteRequest)\n        err := s.Delete(ctx, req.ID)\n        return DeleteResponse{}, err\n    }\n}\n\n')),i("h3",null,"Transport Layer"),i("p",null,"The ",i("inlineCode",{parentName:"p"},"transport.go")," is responsible for converting a transport layer request into an endpoint call.\nFor this tutorial we're using ",i("inlineCode",{parentName:"p"},"HTTP")," as our transport protocol, but we could as easily use something\nlike ",i("inlineCode",{parentName:"p"},"gRPC"),". Go-Kit provides support for ",i("inlineCode",{parentName:"p"},"Http"),", ",i("inlineCode",{parentName:"p"},"gRPC"),", ",i("inlineCode",{parentName:"p"},"NATs")," and ",i("inlineCode",{parentName:"p"},"Thrift")," out of the box, but\nit's relatively simple to add support for other protocols."),i("p",null,"Our ",i("inlineCode",{parentName:"p"},"transport.go")," is responsible for handling everything to do with http, like creating a route for\neach service method or decoding any parameters. We're using great http routing library ",i("a",{href:"https://github.com/go-chi/chi",parentName:"p"},"Chi"),", which\ncomes with some really nice middleware."),i("p",null,"We create a method to decode each request, i.e. read all the input paramaters; and a single method\nto encode the each response, in which we also add some error handling."),i("pre",null,i("code",{className:"language-go",parentName:"pre"},'// transport.go\npackage todo\n\nimport (\n    "context"\n    "encoding/json"\n    "errors"\n    "net/http"\n\n    "github.com/go-chi/render"\n\n    "github.com/go-chi/chi"\n    chiMiddleware "github.com/go-chi/chi/middleware"\n    httptransport "github.com/go-kit/kit/transport/http"\n)\n\n// ErrMissingParam is thrown when an http request is missing a URL Parameter\nvar ErrMissingParam = errors.New("Missing parameter")\n\n// MakeHTTPHandler creates http transport layer for the Todo service\nfunc MakeHTTPHandler(endpoints TodoEndpoints) http.Handler {\n\n    options := []httptransport.ServerOption{\n        httptransport.ServerErrorEncoder(encodeError),\n    }\n\n    r := chi.NewRouter()\n    r.Use(chiMiddleware.Logger)\n    r.Use(chiMiddleware.StripSlashes)\n    r.Use(chiMiddleware.DefaultCompress)\n\n    todoRouter := chi.NewRouter()\n\n    todoRouter.Get("/", httptransport.NewServer(\n        endpoints.GetAllForUserEndPoint,\n        decodeGetRequest,\n        encodeResponse,\n        options...,\n    ).ServeHTTP)\n\n    todoRouter.Get("/{id}", httptransport.NewServer(\n        endpoints.GetByIDEndpoint,\n        decodeGetByIDRequest,\n        encodeResponse,\n        options...,\n    ).ServeHTTP)\n\n    todoRouter.Post("/", httptransport.NewServer(\n        endpoints.AddEndpoint,\n        decodeAddRequest,\n        encodeResponse,\n        options...,\n    ).ServeHTTP)\n\n    todoRouter.Put("/{id}", httptransport.NewServer(\n        endpoints.UpdateEndpoint,\n        decodeUpdateRequest,\n        encodeResponse,\n        options...,\n    ).ServeHTTP)\n\n    todoRouter.Delete("/{id}", httptransport.NewServer(\n        endpoints.DeleteEndpoint,\n        decodeDeleteRequest,\n        encodeResponse,\n        options...,\n    ).ServeHTTP)\n\n    r.Mount("/todos", todoRouter)\n\n    return r\n}\n\nfunc decodeGetRequest(ctx context.Context, r *http.Request) (request interface{}, err error) {\n    return GetAllForUserRequest{}, err\n}\n\nfunc decodeGetByIDRequest(ctx context.Context, r *http.Request) (request interface{}, err error) {\n    id := chi.URLParam(r, "id")\n    if id == "" {\n        return nil, ErrMissingParam\n    }\n    return GetByIDRequest{id}, err\n}\n\nfunc decodeAddRequest(ctx context.Context, r *http.Request) (request interface{}, err error) {\n    var todo Todo\n    err = render.Decode(r, &todo)\n    if err != nil {\n        return nil, err\n    }\n    return AddRequest{todo}, err\n}\n\nfunc decodeUpdateRequest(ctx context.Context, r *http.Request) (request interface{}, err error) {\n    id := chi.URLParam(r, "id")\n    if id == "" {\n        return nil, ErrMissingParam\n    }\n    var todo Todo\n    err = render.Decode(r, &todo)\n    if err != nil {\n        return nil, err\n    }\n    return UpdateRequest{id, todo}, err\n}\n\nfunc decodeDeleteRequest(ctx context.Context, r *http.Request) (request interface{}, err error) {\n    id := chi.URLParam(r, "id")\n    if id == "" {\n        return nil, ErrMissingParam\n    }\n    return DeleteRequest{id}, err\n}\n\nfunc encodeResponse(ctx context.Context, w http.ResponseWriter, response interface{}) error {\n    if err, ok := response.(error); ok && err != nil {\n        encodeError(ctx, err, w)\n        return nil\n    }\n    w.Header().Set("Content-Type", "application/json; charset=utf-8")\n    return json.NewEncoder(w).Encode(response)\n}\n\nfunc encodeError(_ context.Context, err error, w http.ResponseWriter) {\n    if err == nil {\n        panic("encodeError with nil error")\n    }\n    w.Header().Set("Content-Type", "application/json; charset=utf-8")\n    w.WriteHeader(codeFrom(err))\n    json.NewEncoder(w).Encode(map[string]string{\n        "error": err.Error(),\n    })\n}\n\nfunc codeFrom(err error) int {\n    switch err {\n    case ErrNotFound:\n        return http.StatusNotFound\n    case ErrInconsistentIDs, ErrMissingParam:\n        return http.StatusBadRequest\n    default:\n        return http.StatusInternalServerError\n    }\n}\n\n')),i("h3",null,"Main"),i("p",null,"Finally our ",i("inlineCode",{parentName:"p"},"main.go")," is responsible for instantiating everything and starting our Http server. You\ncan see the hexagonal architecture in the way we instantiate an inner layer and pass them as the\ninput into the immediately outer layer."),i("p",null,"Below we create our service, our endpoints and start our transport layer."),i("pre",null,i("code",{className:"language-go",parentName:"pre"},'// main.go\npackage main\n\nimport (\n    "net/http"\n\n    "github.com/sinnott74/TodoService/internal/todo"\n)\n\nfunc main() {\n\n    service := todo.NewInmemTodoService()\n\n    endpoints := todo.MakeTodoEndpoints(service)\n\n    err := http.ListenAndServe(":8000", todo.MakeHTTPHandler(endpoints))\n    if err != nil {\n        panic(err)\n    }\n}\n\n')),i("p",null,"Running ",i("inlineCode",{parentName:"p"},"go run main.go")," will start our Todo service on port 8000."))}m.isMDXComponent=!0;export default m;export{a as author,u as created,p as date,c as id,d as imageurl,l as tags,s as title};