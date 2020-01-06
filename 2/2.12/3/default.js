window.BrowserRouter = ReactRouterDOM.BrowserRouter;
window.HashRouter = ReactRouterDOM.HashRouter;
window.Router = ReactRouterDOM.Router;
window.Prompt = ReactRouterDOM.Prompt;
window.Switch = ReactRouterDOM.Switch;
window.Route = ReactRouterDOM.Route;
window.Link = ReactRouterDOM.Link;



/***************路径***************/
let Main = (props) => {
  //console.log(props);
  return <h5>主页</h5>
};
let List = () => {
  return <h5>列表</h5>
};

//BrowserRouter
let bRouter = <BrowserRouter>
  <p><Link to="/main/">主页</Link></p>
  <p><Link to="/main/article">文章</Link></p>
  <p><Link to="/list/1">带页码的列表</Link></p>
  <p><Link to="/list">无页码的列表</Link></p>
  
  <Route path="/main" component={Main} />
  <Route path="/list/:page+" component={List} />
</BrowserRouter>;
ReactDOM.render(bRouter, document.getElementById("container1"));

//HashRouter
let hRouter = <HashRouter>
  <Link to="/main">主页</Link>
  <Route path="/main" component = {Main} />
</HashRouter>;
ReactDOM.render(hRouter, document.getElementById("container2"));

/***************渲染方式***************/
let Name = (props) => {
  console.log(props.match);
  return <h5>Strick</h5>
};

//component
let Route1 = <BrowserRouter>
  <Link to="/name">component</Link>
  <Route path="/name" component={Name} />
</BrowserRouter>;
ReactDOM.render(Route1, document.getElementById("container3"));

//render
let Route2 = <BrowserRouter>
  <Link to="/name">render</Link>
  <Route path="/name" render={Name} />
</BrowserRouter>;
ReactDOM.render(Route2, document.getElementById("container4"));

//children
let Route3 = <BrowserRouter>
  <Link to="/name">children</Link>
  <Route path="/name" children={Name} />
</BrowserRouter>;
ReactDOM.render(Route3, document.getElementById("container5"));

//match
let Route4 = <BrowserRouter>
  <Link to="/list/article/1">match</Link>
  <Route path="/list/:type" component={Name} />
</BrowserRouter>;
ReactDOM.render(Route4, document.getElementById("container6"));

/***************Switch***************/
let Age1 = (props) => {
  return <h5>30</h5>;
};
let Age2 = (props) => {
  return <h5>31</h5>;
};
let Age3 = (props) => {
  return <h5>32</h5>;
};

let Route7 = <BrowserRouter>
  <Route path='/' component={Age1} />
  <Route path='/article' component={Age2} />
  <Route path='/:list' component={Age3} />
  
  <Switch>
    <Route path='/' component={Age1} />
    <Route path='/article' component={Age2} />
    <Route path='/:list' component={Age3} />
  </Switch>
</BrowserRouter>
ReactDOM.render(Route7, document.getElementById("container7"));

/***************嵌套路由***************/
let Children = (props) => {
  return <Route path={`${props.match.path}/:id`} component={Article} />;
};
let Article = (props) => {
  return <h5>文章内容</h5>;
};

let Route8 = <BrowserRouter>
  <Link to="/list/article/1">文章</Link>
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/list/:article' component={Children} />
  </Switch>
</BrowserRouter>
ReactDOM.render(Route8, document.getElementById("container8"));



