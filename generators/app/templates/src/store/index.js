import Vue from "vue";
import Vuex from "vuex";
import base from "./base"; //引入vuex的adv模块

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        base
    },
});