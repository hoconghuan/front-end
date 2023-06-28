/* 创建Vue入口文件 */
// 导入vue
import Vue from 'vue';
// 导入app
import App from './App.vue'
Vue.config.productionTip = false;
// 创建vue
new Vue({
    el: '#app',
    render: h => h(App)
})