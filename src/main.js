import Vue from "vue"
import "./plugins/axios"
import App from "./App.vue"
import router from "./router"
import "./plugins/element.js"

// 导入字体图标
import "./assets/fonts/iconfont.css"
// 导入全局样式表
import "./assets/css/global.css"

import TreeTable from 'vue-table-with-tree-grid'

import axios from "axios"
// 配置请求的根路径
axios.defaults.baseURL = "http://timemeetyou.com:8889/api/private/v1/"
// 通过axios请求拦截器添加 token ,保证拥有获取数据的权限
axios.interceptors.request.use((config) => {
  // console.log(config)
  // 需要授权的APi,必须在请求头中使用 Authorization 字段提供token令牌
  config.headers.Authorization = window.sessionStorage.getItem("token")

  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component("tree-table", TreeTable)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
