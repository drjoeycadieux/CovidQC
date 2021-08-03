import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Navbar from "./components/Navbar";

Vue.component("Navbar", Navbar);

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App)
}).$mount("#app");
