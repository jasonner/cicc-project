import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './util/rem'

Vue.use(ElementUI);
Vue.use(VueRouter,)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = ''  //关键代码
// 是否允许跨域携带cookie信息
axios.defaults.withCredentials = true;
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
