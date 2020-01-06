const moduleA = {
  state: { digit: 0 },
  namespaced: true,
  mutations: {
    add: state => state.digit++,
    minus: state => state.digit--
  },
  getters: {
    caculate: (state, getter, rootState) => {
      console.log("rootState", rootState.number);
      return state.digit + 2;
    }
  },
  actions: {
    interval(context, payload) {
      context.commit("add", payload);
    },
	// interval: {
      // root: true,
      // handler (context, payload) { }
	// },
    add(context, payload) {
      context.dispatch("interval", payload);
    }
  }
};

const store = new Vuex.Store({
  state: {
    number: 0
  },
  mutations: {
    add: state => state.number++
  },
  modules: {
    a: moduleA
  }
});

const {mapState, mapMutations} = Vuex.createNamespacedHelpers("a");

var vm = new Vue({
  el: "#container",
  store: store,
  // computed: {
    // digit() {
      // return this.$store.state.a.digit;
    // }
  // },
  computed: Vuex.mapState("a", {
    digit: state => state.digit
  }),	//命名空间
  methods: {
	...Vuex.mapMutations("a", {
      add: "add"
    }),
    //add() {
      //this.$store.commit("a/add");
	  ////this.$store.dispatch("add", null, { root: true });
	  //this.$store.commit("add", null, { root: true });
    //},
    minus() {
      this.$store.commit("a/minus");
    },
    caculate() {
      console.log("caculate", this.$store.getters["a/caculate"]);
    }
  }
});
