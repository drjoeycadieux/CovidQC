<template>
  <div class="alert">
    <h1>
      Different alert levels are in force in Québec.<router-link to="/help"
        >Help</router-link
      >
    </h1>
  </div>
</template>

<script>
export default {
  name: "SiteAlert",
};
</script>

<style>
.alert {
  padding: 2rem;
  margin: 0;
  background-color: firebrick;
}
.alert > h1 {
  color: white;
  font-weight: bold;
  font-size: 20px;
  font-family: sans-serif;
}
</style>