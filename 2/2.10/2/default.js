//Reducer
function add(previousState, action) {
  let state = Object.assign({}, previousState);
  state.digit = "digit" in state ? (state.digit + 1) : 0;
  return state;
}
function minus(previousState, action) {
  let state = Object.assign({}, previousState);
  state.number = "number" in state ? (state.number - 1) : 0;
  return state;
}

let reducers = combineReducers({add, minus});	//合并Reducer
let store = createStore(reducers);		//Store
let action = { type: "ADD" };			//Action
store.dispatch(action);					//触发更新
console.log("Reducer", store.getState());		 	//读取状态

store.dispatch({ type: "MINUS" });		//触发更新
console.log("Reducer", store.getState());		 	//读取状态

//Store
function caculate(previousState, action) {
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
let store2 = createStore(caculate, { digit: 1 });
let unsubscribe = store2.subscribe(() =>		//注册监听器
  console.log("Store", store2.getState())
);
store2.dispatch({ type: "ADD" });	//{digit: 2}
store2.dispatch({ type: "ADD" });	//{digit: 3}
unsubscribe();						//注销监听器
store2.dispatch({ type: "MINUS" });	//没有输出



