function* digit() {
  try {
    yield 1;
  } finally {
    yield 2;
  }
  yield 4;
}
var iterator = digit();
console.log(iterator.next());		//{value: 1, done: false}
console.log(iterator.return(3));	//{value: 2, done: false}
console.log(iterator.next());		//{value: 3, done: true}