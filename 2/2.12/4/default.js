window.BrowserRouter = ReactRouterDOM.BrowserRouter;
window.HashRouter = ReactRouterDOM.HashRouter;
window.Router = ReactRouterDOM.Router;
window.Prompt = ReactRouterDOM.Prompt;
window.Switch = ReactRouterDOM.Switch;
window.Route = ReactRouterDOM.Route;
window.NavLink = ReactRouterDOM.NavLink;
window.Link = ReactRouterDOM.Link;
window.Redirect = ReactRouterDOM.Redirect;



/***************Link***************/
let Main = (props) => {
  //console.log(props);
  props.history.replace("/article");
  return <h5>主页</h5>;
};
let Article = (props) => {
  return <h5>文章</h5>;
};

let Router1 = <BrowserRouter>
  <p><Link to="/main">字符串主页</Link></p>
  <p><Link to={{pathname: "/main", search: "?type=1"}}>对象主页</Link></p>
  
  <Route path="/main" component={Main} />
  <Route path="/article" component={Article} />
</BrowserRouter>;
ReactDOM.render(Router1, document.getElementById("container1"));

/***************NavLink***************/
let List = (props) => {
  return <h5>列表</h5>;
};
let fn = (match, location) => {
  if (!match) {
    return false
  }
  console.log(match, location);
  return match.url.indexOf("article") >= 0;
};
let Router2 = <BrowserRouter>
  <p><NavLink to="/list">NavLink1</NavLink></p>
  <p><NavLink to="/list" activeStyle={{color: "blue"}}>NavLink2</NavLink></p>
  <p><NavLink to="/lists" exact>NavLink3</NavLink></p>
  <p><NavLink to="/list" strict>NavLink4</NavLink></p>
  <p><NavLink to="/list/1" isActive={fn}>NavLink5</NavLink></p>
  <p><NavLink to="/list" aria-current="time">NavLink6</NavLink></p>
  
  <Route path="/list/" component={List} />
  <Route path="/list/:id" component={Article} />
</BrowserRouter>;
ReactDOM.render(Router2, document.getElementById("container2"));


/***************Readrect***************/
let Page = (props) => {
  return <h5>新页</h5>;
};
let Router3 = <BrowserRouter>
  <Switch>
    <Redirect from="/FrondEndInterview" to="/page" />
    <Route path="/page" component={Page} />
  </Switch>
</BrowserRouter>;
ReactDOM.render(Router3, document.getElementById("container3"));

