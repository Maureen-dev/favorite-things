import Vue from 'vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


const baseUrl = 'http://ec2-3-84-41-93.compute-1.amazonaws.com:8000/api/v1/';
axios.defaults.baseURL = baseUrl;
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
