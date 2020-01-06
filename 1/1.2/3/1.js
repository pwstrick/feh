let name = "strick";
export default name;//写法一

//表达式
//export default name = "strick";
//export default "strick";
//export default let name = "strick";	//语法错误

// export default function getName() {//写法二
  // return "strick";
// }

// export default function() {//写法三
  // return "strick";
// }
//export { name as default };//写法四



// export class people {
  // getName() {
    // return "strick";
  // }
// }

let age = 28;
function getAge() {
  return 28;
}
export { age, getAge };
 

