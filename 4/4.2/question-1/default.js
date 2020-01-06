var vm = new Vue({
  el: "#container",
  data: {
    array: [1, 2, 3]
  },
  computed: {
    newArray: function() {
      return this.array.filter(function(item) {
        return item > 1;
      });
    }
  }
});
