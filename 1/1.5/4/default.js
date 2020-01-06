function func1() {
  console.log(typeof new.target);	//"function"
}
new func1();
function func2() {
  console.log(new.target === undefined); 	//true
}
func2();
//new.target; //Uncaught SyntaxError: new.target expression is not allowed here