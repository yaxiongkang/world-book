import Vue from 'vue'
import App from './App'

//关闭vue开发中的一些提示功能
Vue.config.productionTip = false

//申明当前组件为整个应用
App.mpType = 'app'

//生成当前应用的实例
const app = new Vue(App)
app.$mount()
