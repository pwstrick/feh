//Reducer
function caculate(previousState = {digit: 0}, action) {
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
let action = { type: "ADD" };			//Action
store.dispatch(action);					//触发更新
console.log(store.getState());		 	//读取状态

store.dispatch({ type: "MINUS" });					//触发更新
console.log(store.getState());		 	//读取状态



//store.dispatch({ type: "MINUS" }); 	
//console.log(store.getState());			// 0
//store.subscribe(() => console.log(store.getState()));
//store.dispatch({ type: "ADD" }); 	// 2
//const unsubscribe = 
//unsubscribe();

