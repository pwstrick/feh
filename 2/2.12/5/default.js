window.BrowserRouter = ReactRouterDOM.BrowserRouter;
window.HashRouter = ReactRouterDOM.HashRouter;
window.Router = ReactRouterDOM.Router;
window.Prompt = ReactRouterDOM.Prompt;
window.Switch = ReactRouterDOM.Switch;
window.Route = ReactRouterDOM.Route;
window.NavLink = ReactRouterDOM.NavLink;
window.Link = ReactRouterDOM.Link;
window.withRouter = ReactRouterDOM.withRouter;

window.connect = ReactRedux.connect;
window.Provider = ReactRedux.Provider;


function caculate(previousState = {digit: 0}, action) {		//Reducer
  let state = Object.assign({}, previousState);
  switch (action.type) {
    case "ADD":
      state.digit += 1;
      break;
    case "MINUS":
      state.digit -= 1;
  }
  return state;
}
let store = createStore(caculate);		//Store
function add() {						//Action创建函数
  return {type: "ADD"};
}


let List = (props) => {
  console.log("List", props);
  return <WithArticle content="内容"/>;
};

let Article = (props) => {
  console.log("Article", props);
  //const { match, location, history } = this.props;
  return <h5>{props.content}</h5>;
};
let WithArticle = withRouter(Article);

// function Btn(props) {					//展示组件
  // console.log("btn", props);
  // return <div>
	// <p><Link to="/list">列表</Link></p>
	// <Route path="/list" component={List} />
	// <p>digit：{props.digit}</p>
	// <button onClick={props.add}>提交</button>
  // </div>;
// }

class Btn extends React.Component {
  //shouldComponentUpdate(nextProps, nextState) { return true; }
  render() {
    console.log("btn", this.props);
    return (
      <div>
        <Link to="/list">列表</Link>
        <Route path="/list" component={List} />
        <p>digit：{this.props.digit}</p>
        <button onClick={this.props.add}>提交</button>
      </div>
    );
  }
}


//let Smart = withRouter(connect(mapStateToProps, mapDispatchToProps)(Btn));
let Smart = connect(state => state, { add })(Btn);		//容器组件
let Router = <Provider store={store}>
  <BrowserRouter>
    <Smart />
  </BrowserRouter>
</Provider>;
ReactDOM.render(Router, document.getElementById("container"));





