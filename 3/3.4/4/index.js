require("./list.js");

document.getElementById("btn").addEventListener("click", function() {
    this.style.color = "red";
  },
  false
);

//console.log(module.hot)
if (module.hot) {
  //module.hot.accept();
  module.hot.accept("./list.js", function() {
    console.log("update");
  });
}
