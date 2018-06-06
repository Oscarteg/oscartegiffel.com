import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import fontawesome from "@fortawesome/fontawesome";
import Buefy from "buefy";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";
import _ from "lodash";
import "./assets/sass/main.scss";

import {FontAwesomeIcon, FontAwesomeLayers} from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.component("font-awesome-icon", FontAwesomeIcon,);
Vue.component("font-awesome-layers", FontAwesomeLayers,);


// Add libraries to fontawesome
fontawesome.library.add(brands, solid, regular);

Vue.prototype.$_ = _;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
