import VueRouter from 'vue-router'

import DemoAbout from '../pages/DemoAbout.vue'
import DemoHome from '../pages/DemoHome.vue'
import DemoNews from '../pages/DemoNews.vue'
import DemoDetail from '../pages/DemoDetail.vue'
import DemoMessages from '../pages/DemoMessages.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: DemoHome,
            meta: { title: '主页' },
            children: [
                {
                    name: 'new',
                    path: 'new',
                    component: DemoNews,
                    meta: { IsAuthenticated: true, title: '新闻' }
                },
                {
                    name: 'message',
                    path: 'message',
                    component: DemoMessages,
                    meta: { IsAuthenticated: true, title: '消息' },
                    beforeEnter: (to, from, next) => {                        //单独路由守卫是在对应的需要绑定守卫的组件
                        // console.log(to, from);
                        if (to.meta.IsAuthenticated) {
                            if (localStorage.getItem('name') === 'andy') {
                                next()
                            } else {
                                alert('name is not right,please check and try again')
                            }
                        }
                        else {
                            next()
                        }
                    },


                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            meta: { title: '详情' },
                            component: DemoDetail,

                            props({ query }) {
                                return {
                                    id: query.id,
                                    title: query.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/about',
            component: DemoAbout,
            meta: { title: '关于' }
        },
    ]
})

// router.afterEach((to, from) => {
//     // console.log(to, from);
//     // to and from are both route objects.
//     document.title = to.meta.title || '初始化展示';
// })


export default router