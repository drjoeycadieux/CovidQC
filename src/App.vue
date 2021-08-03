<template>
  <div id="app">
    <Navbar />
    <!-- 
      The <RouterView /> component helps us display the
      current page depending on wethe route/page that
      we are on. 
    -->
    <RouterView />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
/**
 * Here we import the navbar and register it as a component.
 */
export default {
  name: "App",
  props: ["Support Page"],
  data() {
    return {
      Navbar,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
