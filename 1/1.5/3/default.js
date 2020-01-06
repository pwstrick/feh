//"use strict";
// (function() {
  ////console.log("块级作用域之前", func("strick"));	//未定义的错误
  // if(true) {
    // console.log("声明之前", func("freedom"));	//"freedom"
    // function func(name) {
      // return name;
    // }
	// if(true) {
      // console.log("后续块级作用域", func("jane"));	//"jane"
	// }
  // }
  ////console.log("块级作用域之后", func("justify"));	//未定义的错误
// })();


(function() {
  //console.log("块级作用域之前", func("strick"));	//未定义的错误
  if(true) {
    console.log("声明之前", func("freedom"));	//"freedom"
    function func(name) {
      return name;
    }
	{
      console.log("后续块级作用域", func("jane"));	//"jane"
	}
  }
  console.log("块级作用域之后", func("justify"));	//"justify"
})();
