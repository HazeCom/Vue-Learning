<template>
  <div>
    <button v-on:click="clickMe">Click Me</button>
    <h1 v-if="showMessage">{{ greeting }}</h1>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      showMessage: false,
      greeting: "Hello World!",
    };
  },
  methods: {
    clickMe() {
      this.showMessage = !this.showMessage;
    },
  },
  
};
</script>
<style>
* {
  text-align: center;
}

button {
  color: blue;
  font-weight: bold;
  font-size: 20px;
  border: 1px solid black;
  background-color: white;
}

h1 {
  color: teal;
  font-size: 40px;
}
</style>
