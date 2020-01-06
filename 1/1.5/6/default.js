"use strict";
function digit(number) {
  return number;
}
//尾调用
function tail1() {
  return digit(28);
}
function tail2(name) {
  if (name == "strick")
    return digit(28);
  return digit(30);
}

//非尾调用
function error1() {
  digit(28);
}
function error2() {
  return digit(28) + 1;
}
function error3() {
  var number = digit(28);
  return number;
}

//尾递归优化
function palindrome(str) {
  if (str.length <= 1)
    return true;
  if (str[0] != str[str.length - 1])
    return false;
  return palindrome(str.substr(1, str.length - 2));
}