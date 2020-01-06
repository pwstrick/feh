const store = new Vuex.Store({
  state: {
    digit: 0
  },
  mutations: {
    add: state => state.digit++,
    minus: state => state.digit--
  }
});

var vm = new Vue({
  el: "#container",
  store: store,
  computed: {
    digit() {
      return this.$store.state.digit;
    }
  },
  methods: {
    add() {
      this.$store.commit("add");
    },
    minus() {
      this.$store.commit("minus");
    }
  }
});
