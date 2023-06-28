import VueRouter from 'vue-router'

import DemoAbout from '../components/DemoAbout.vue'
import DemoHome from '../components/DemoHome.vue'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: DemoHome
        },
        {
            path: '/about',
            component: DemoAbout
        },


    ]
})