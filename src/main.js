import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import { initFirebase } from "./api/api";
import "vuetify/dist/vuetify.min.css";

//vuetify テーマ適用
//https://vuetifyjs.com/ja/getting-started/installation/#cdn-3067306e4f7f7528

//vuetify テーマ設定
//https://vuetifyjs.com/ja/features/theme/#section-30c630fc30de5bfe5fdc

initFirebase();
Vue.config.productionTip = false;

Vue.use(Vuetify);

// vuetifyのオプション設定
const opts = {
  icons: { iconfont: "mdiSvg" },
  theme: {
    dark: false,
  },
};

new Vue({
  render: (h) => h(App),
  vuetify: new Vuetify(opts),
}).$mount("#app");
