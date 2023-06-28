import VueRouter from 'vue-router'

import DemoAbout from '../pages/DemoAbout.vue'
import DemoHome from '../pages/DemoHome.vue'
import DemoNews from '../pages/DemoNews.vue'
import DemoDetail from '../pages/DemoDetail.vue'
import DemoMessages from '../pages/DemoMessages.vue'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: DemoHome,
            children: [
                {
                    path: 'new',
                    component: DemoNews
                },
                {
                    path: 'message',
                    component: DemoMessages,
                    children: [
                        {
                            // query传参正常写法
                            // path: 'detail',
                            // component: DemoDetail

                            //params传参写法
                            path: 'detail/:id/:title',
                            component: DemoDetail
                        }
                    ]
                }
            ]
        },
        {
            path: '/about',
            component: DemoAbout,

        },


    ]
})