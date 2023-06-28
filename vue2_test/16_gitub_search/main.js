import Vue from 'vue';
import App from './App.vue'


Vue.config.productionTip = false;

//事件总线放在起始的main文件中
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this  //全局事件总线
    },

}) 