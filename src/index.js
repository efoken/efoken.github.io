import 'devicon/devicon.css';
import 'ionicons/dist/css/ionicons.css';
import BootstrapVue from 'bootstrap-vue';
import smoothscroll from 'smoothscroll-polyfill';
import Vue from 'vue';

import './assets/main.scss';
import App from './App';

smoothscroll.polyfill();

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
});
