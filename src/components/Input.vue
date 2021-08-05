<template>
  <div>
    <h1>Greeting!</h1>
    <p>{{ msg }}</p>
    <input type="text" v-model="message" name="" id="" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["msg"],
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style>
</style>