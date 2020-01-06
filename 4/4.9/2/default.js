
const INTERVAL = "interval";
const store = new Vuex.Store({
  state: {
    digit: 0
  },
  mutations: {
    add: state => state.digit++,
    minus: state => state.digit--,
    interval: (state, payload) => (state.digit += payload.number)
  },
  getters: {
    caculate: (state, getters) => {
      return state.digit + 2;
    },
    sum: state => right => {
      return state.digit + right;
    }
  },
  actions: {
    interval(context, payload) {
      context.commit("interval", payload);
    },
    add(context, payload) {
      context.dispatch("interval", payload).then(() => {
        console.log("success");
      });
    }
  }
});


//State
var vm = new Vue({
  el: "#container",
  store: store,
  //computed: Vuex.mapState([ "digit" ]),	//字符串数组
  computed: {
    name() {},
	...Vuex.mapState([ "digit" ])
  },
  //Vuex.mapState({
    //digit: state => state.digit,		//函数
	//alias: "digit"	//别名	等同于state => state.digit
  //}),
  methods: {
    add() {
      this.$store.commit("add");
    },
    minus() {
      this.$store.commit("minus");
    }
  }
});

//Getter
var vm2 = new Vue({
  el: "#container2",
  store: store,
  computed: Vuex.mapGetters([ "caculate" ]),	//字符串数组
  // computed: Vuex.mapGetters({
	// alias: "caculate"			//别名
  // }),
  methods: {
	add() {
      console.log(this.$store.getters.caculate);
	  console.log(this.$store.getters.sum(1));
	}
  }
});

//Mutation
var vm3 = new Vue({
  el: "#container3",
  store: store,
  computed: Vuex.mapState([ "digit" ]),
  methods: {
	interval() {
      //this.$store.commit("interval", {number: 2});
	  this.$store.commit({ type: INTERVAL, number: 2});
	}
  },
  //methods: Vuex.mapMutations([ "interval" ])
  // methods: Vuex.mapMutations({
	// add: "interval"
  // })
  // methods: {
	// interval(payload) {
	  // this.$store.commit(INTERVAL, payload);
	// }
  // }
});

//Action
var vm4 = new Vue({
  el: "#container4",
  store: store,
  computed: Vuex.mapState(["digit"]),
  methods: {
    interval() {
      this.$store.dispatch("add", { number: 2 });
      // this.$store.dispatch("interval", { number: 2 }).then(() => {
        // console.log("success");
      // });
      //this.$store.dispatch({type: "interval", number: 2});
    }
  }
  //methods: Vuex.mapActions([ "interval" ])
});

