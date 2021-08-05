<template>
  <div>
    <SiteAlert />
    <Input :msg="message" />
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import Input from "../components/Input";
import SiteAlert from "../components/SiteAlert";

export default {
  name: "Message",
  props: ["msg"],
  data() {
    return {
      message: "",
    };
  },
  components: {
    Input,
    SiteAlert,
  },
};
</script>

<style>
</style>