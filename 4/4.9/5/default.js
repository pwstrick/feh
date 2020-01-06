const store = new Vuex.Store({
  state: {
    digit: 0
  },
  mutations: {
    add: (state, value) => {
      state.digit = value;
    }
  }
});

var vm = new Vue({
  el: "#container",
  store: store,
  //computed: Vuex.mapState(["digit"]),
  computed: {
    digit: {
      get() {
        console.log(this.$store.state.digit);
        return this.$store.state.digit;
      },
      set(value) {
        this.$store.commit("add", value);
      }
    }
  },
  methods: {
    add(e) {
      console.log(this.$store.state.digit);
      this.$store.commit("add", e.target.value);
    }
  }
});


