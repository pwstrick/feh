const m1 = store => next => action => {
  console.log("m1");
  return next(action);
};
const m2 = store => next => action => {
  console.log("m2");
  return next(action);
};

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
//let store = createStore(caculate, applyMiddleware(m1, m2));
let store = applyMiddleware(m1, m2)(createStore)(caculate);
store.dispatch({ type: "ADD" });	//{digit: 1}







