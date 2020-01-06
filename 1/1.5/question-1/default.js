function digit() {
  return 2;
}
function plus1(x, y = digit) {
  return x + (y++);
}
function plus2(x, y = digit()) {
  return x + (y++);
}
console.log("plus1", plus1(1));	//NaN
console.log("plus2", plus2(1));	//3