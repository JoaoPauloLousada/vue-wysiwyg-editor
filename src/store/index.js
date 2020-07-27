import Vue from "vue";
import Vuex from "vuex";
import ToolbarModule from "./modules/toolbar";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    toolbar: ToolbarModule,
  },
});

export default store;