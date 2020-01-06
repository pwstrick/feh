//let thunk = ReduxThunk.default.withExtraArgument;
//import thunk from "redux-thunk";

function asynAction() {
  return dispatch => {
	fetch("server.php").then(
	  response => response.json(),
	  error => console.log(error)
	).then(data => {
	  dispatch(data);	//{type: "ADD"}
	});
  };
}

//Store
function caculate(previousState = {digit:0}, action) {
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
let store = createStore(caculate, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(asynAction());	//{digit: 1}







