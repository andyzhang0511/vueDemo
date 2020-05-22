// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 公共样式
import '@/assets/style/reset.css'
import '@/assets/images/marker-icon.png'

// 引入echarts
import echarts from 'echarts'

import axios from 'axios'

// 引入iconfont.css样式
import './assets/icon/iconfont.css'

// 引入leaflet
import * as L from 'leaflet'
// import L from 'leaflet'
import '@/components/mapStudy/sourceFile/leaflet.css'

import XLSX from 'js-xlsx'
Vue.prototype.axios = axios

// 全局过滤器
Vue.filter('globalFilter', function (value) {
  return value + '!!!'
})

Vue.L = Vue.prototype.$L = L
Vue.use(XLSX)

Vue.use(ElementUI)
Vue.use(L)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
