<template>
  <nav class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/support">Support</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
nav a {
  color: white;
  font-weight: 700;
  margin: 10px 20px;
}
.header {
  padding: 100px;
  background-color: #2c3e50;
}
</style>