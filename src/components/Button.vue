<template>
  <div>
    <button v-on:click="count++">This page has {{ count }} like.</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
button {
  background-color: greenyellow;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
}
</style>