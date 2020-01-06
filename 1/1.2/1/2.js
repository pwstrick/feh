export * from "./1.js";	//导出全部
// export { name, age } from "./1.js";//导出部分
export { getAge as getMyAge } from "./1.js";//导出部分并设置别名

import { name, age } from "./1.js";
export { name, age };

