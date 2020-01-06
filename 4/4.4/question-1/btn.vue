<style>
  button {
    color: red;
  }
</style>
<template>
  <button>{{txt}}</button>
</template>
<script>
  module.exports = {
    data: function() {
      return {
        txt: "提交"
      };
    }
  }
</script>