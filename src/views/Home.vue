<template>
  <div>
    <SiteAlert />
    <h1>Coronavirus disease (COVID-19) in Québec</h1>
    <Button />
    <div class="content"></div>
  </div>
</template>

<script>
import Button from "../components/Button";
import SiteAlert from "../components/SiteAlert";

export default {
  name: "Home",
  components: {
    Button,
    SiteAlert,
  },
  data() {
    return {};
  },
};
</script>

<style>
h1 {
  font-size: 20px;
}
</style>