document.getElementById("btn").addEventListener("click", function() {
    import(
      /* webpackChunkName: "lodash" */
      "lodash"
    ).then(_ => {});
  },
  false
);