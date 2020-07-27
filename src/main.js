import Vue from "vue";
import "jquery";
import "popper.js";
import "bootstrap";
import App from "./App.vue";
import Store from '@/store'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: Store
}).$mount("#app");
