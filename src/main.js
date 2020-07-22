import Vue from "vue";
import jQuery from "jquery";
import "popper.js";
import "bootstrap";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
