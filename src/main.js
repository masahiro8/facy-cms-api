import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import { initFirebase } from "./api/api";

//vuetify テーマ適用
//https://vuetifyjs.com/ja/getting-started/installation/#cdn-3067306e4f7f7528

//vuetify テーマ設定
//https://vuetifyjs.com/ja/features/theme/#section-30c630fc30de5bfe5fdc

initFirebase();
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
