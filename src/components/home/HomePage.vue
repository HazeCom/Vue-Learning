<template>
  <button @click="count++">Increase</button>
  <button>{{ count }}</button>
  <button v-on:click="count--">Decrease</button>
  
</template>

<script>
export default {
  name: "HomePage",
  // Component logic here
  data() {
    return {
      showMessage: false,
      greeting: "Hello World!",
      count: 0,
    };
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
