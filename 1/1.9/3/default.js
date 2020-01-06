function run(taskDef) {
  //	创建迭代器
  let task = taskDef();
  //	启动任务
  let result = task.next();
  //	递归使用函数来进行迭代
  (function step() {
    //	如果还有更多要做的
    if (!result.done) {
      //	决议一个	Promise	，让任务处理变简单
      let promise = Promise.resolve(result.value);
      promise
        .then(function(value) {
          result = task.next(value);
          step();
        })
        .catch(function(error) {
          result = task.throw(error);
          step();
        });
    }
  })();
}


function load() {
  return new Promise(function(resolve, reject) {
    resolve("success");
  });
}
run(function* ()	{
  var result = yield load();
  console.log("run", result);		//"success"
});

(async function() {
  var result = await load();
  console.log("await", result);		//"success"
})();

//图像加载
function preImg(src) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
	img.src = src;
    img.onload = function(){
	  resolve(this);
	};
    img.onerror = function(){
	  reject(this);
	};
  });
};
preImg("../../../assets/img/page.png").then(function(value) {
  console.log(value);
});

//Ajax请求
function ajax() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
	xhr.open("post", "server.php");
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
		if (xhr.status == 200) {
		  resolve(xhr.responseText);
		}
	  }
	};
	xhr.send(null);
  });
}
ajax().then(function(value) {
  console.log(value);
});



