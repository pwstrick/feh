const moduleA = {
  state: { digit: 0 },
  namespaced: true,
  mutations: {
    add: state => state.digit++,
    minus: state => state.digit--
  },
  getters: {
    caculate: (state, getter, rootState) => {
      return state.digit + 2;
    }
  }
};

const store = new Vuex.Store();
store.registerModule("a", moduleA);	//{ preserveState: true }

var vm = new Vue({
  el: "#container",
  store: store,
  computed: {
    digit() {
      return this.$store.state.a.digit;
    }
  },
  methods: {
    add() {
      this.$store.commit("a/add");
    },
    minus() {
      this.$store.commit("a/minus");
    }
  }
});
