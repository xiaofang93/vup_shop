import Vue from "vue"

// Message弹框提示组件
import { Button, Form, FormItem, Input, Message,Container,Header,Aside,Main,Menu,
    Submenu,
    MenuItem, 

} from "element-ui"

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

// 把Message挂载Vue原型对象上
// 这样每个组件都可以通过 this.$message 访问
Vue.prototype.$message = Message
