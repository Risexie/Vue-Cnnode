// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iView';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'iview/dist/styles/iview.css';
import Vuex from 'vuex';


Vue.use(BootstrapVue);
Vue.use(iView);
Vue.use(Vuex);
Vue.prototype.$http = axios;
Vue.config.productionTip = true

/* Vuex */
const store = new Vuex.Store({
  state:{
    accessToken:'',
    loginName:'',
  },
  mutations:{
    getAccessToken(state,accessToken){
      state.accessToken = accessToken;
    },
    getLoginName(state,loginName){
      state.loginName = loginName
    }
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //使用Vuex
  store,
  components: { App },
  template: '<App/>'
})
