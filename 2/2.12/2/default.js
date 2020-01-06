window.BrowserRouter = ReactRouterDOM.BrowserRouter;
window.HashRouter = ReactRouterDOM.HashRouter;
window.Router = ReactRouterDOM.Router;
window.Prompt = ReactRouterDOM.Prompt;
window.Route = ReactRouterDOM.Route;
window.Link = ReactRouterDOM.Link;



//BrowserRouter
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}
//<Prompt message="确认要离开吗？" />
let bRouter = <BrowserRouter getUserConfirmation={getConfirmation} basename="/pwstrick">
  <div>
	<Link to="page.html">首页</Link>
  </div>
</BrowserRouter>;
ReactDOM.render(bRouter, document.getElementById("container1"));

//HashRouter
let hRouter = <HashRouter hashType="hashbang">
  <div>
	<Link to="page.html">首页</Link>
  </div>
</HashRouter>;
ReactDOM.render(hRouter, document.getElementById("container2"));

//Router
// let Com1 = () => <div>1</div>;
// let Com2 = () => <div>2</div>;
// ReactDOM.render(<Router>
  // <Com1/>
  // <Com2/>
// </Router>, document.getElementById("container3"));

