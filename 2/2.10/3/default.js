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

let store = createStore(caculate);
function Btn(props) {	//展示组件
  //console.log(props.add);
  return <button onClick={props.add}>{props.txt}</button>;
}

//mapStateToProps
function mapStateToProps(state, ownProps) {
  console.log("state", state);		//{digit: 0}
  console.log("ownProps", ownProps);	//{txt: "提交"}
  return state;
}

function add() {
  return {type: "ADD"};
}
var mapDispatchToProps = { add };						//对象
var mapDispatchToProps = (dispatch, ownProps) => {		//函数
  return {add: bindActionCreators(add, dispatch)};
}

let Smart = connect(mapStateToProps, mapDispatchToProps)(Btn);

ReactDOM.render(
  <Provider store={store}>
    <Smart txt="提交" />
  </Provider>,
  document.getElementById("container")
);




