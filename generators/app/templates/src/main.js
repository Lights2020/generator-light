import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'amfe-flexible';
import axios from './axios/axios.js';
import Vant from 'vant';
import 'vant/lib/index.css';
import './lib/css/common.css'; //公共样式
import './util/rem.js'; //rem
import animated from 'animate.css'
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(Vant);
Vue.use(animated);
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");