<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ printMsg }}</div>
    <button @click="printMessage">Click me</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      printMsg: "I'm a message",
    }
  },
  methods: {
    printMessage(event: Event):void {
      event && event.stopPropagation();
      this.printMsg = "Button is clicked";
    }
  }
});
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
