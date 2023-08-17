<template>
  <div>
    <router-link to="/">Counter</router-link> |
    <router-link to="/about">Hello</router-link>
  </div>
  <br>
  <router-view />
</template>

<script>
export default {
  
};
</script>
<style>
a{
  font-family: 'Times New Roman', Times, serif;
  font-weight: 600;
  font-size: 20px;
}
</style>