import Axios from 'axios';
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import $ from 'jquery'
import chartjs from 'chart.js'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/global.css'//引入全球样式
import '../static/global'
Vue.prototype.$ajax = Axios
Vue.prototype.$ = $
Vue.prototype.$echarts = echarts;

Axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.config.productionTip = false
Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });
new Vue({
  el: '#app',
  router,//在这里安装插件
  chartjs,
  components: { App },
  template: '<App/>'
})

