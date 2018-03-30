// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-core/register"
import "babel-polyfill"
import {MdButton, MdDrawer, MdToolbar, MdIcon, MdList, MdCard} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'


Vue.config.productionTip = false;
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdToolbar);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdCard);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
