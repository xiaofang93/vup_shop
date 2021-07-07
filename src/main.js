import Vue from "vue"
import "./plugins/axios"
import App from "./App.vue"
import router from "./router"
import "./plugins/element.js"

// 导入字体图标
import "./assets/fonts/iconfont.css"
// 导入全局样式表
import "./assets/css/global.css"

import TreeTable from "vue-table-with-tree-grid"

// 导入富文本编辑器
import VueQuillEditor from "vue-quill-editor"
// 导入富文本编辑器对应的样式
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"

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
// 将富文本编辑器,注册为全局可用的组件
Vue.use(VueQuillEditor)

Vue.filter("dateFormat", function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear() + "-"
  const m = (dt.getMonth() + 1 < 10 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1) + "-"
  const d = dt.getDate() + " "
  const h = dt.getHours() + ":"
  const mm = dt.getMinutes() + ":"
  const s = dt.getSeconds()
  const df = y + m + d + h + mm + s
  console.log(df)
  // return `${y}${m}${d}${h}${mm}${s}`
  return df
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
