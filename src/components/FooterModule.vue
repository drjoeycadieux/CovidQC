<template>
  <div>
    <h1>&copy; {{ getYear() }} Covid-19 Quebec. All rights reserved.</h1>
  </div>
</template>

<script>
export default {
  name: "FooterModule",
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
</style>