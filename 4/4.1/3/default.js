Vue.filter("lowercase", function (value) {
  return value.toLowerCase();
});

var vm = new Vue({
  el: "#container",
  data: {
    name: "MOBILE",
	number: 2,
	threshold: 100
  },
  filters: {
    lowercase: function(value) {
      // return value.toLowerCase();
	  return value.toUpperCase();
    },
	compare: function(left, right, threshold) {
	  console.log("threshold", threshold);
	  return left > right;
	}
  }
});


