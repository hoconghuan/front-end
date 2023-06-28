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

//全局前置路由守卫----初始化和切换路由前被调用  
router.beforeEach((to, from, next) => {
    // next()   执行下一步
    // if (to.name === 'new' || to.name === 'message') {  // 在这里判断很不方便，如果10个怎么判断， 所以使用对应路由的meta配置  meta:{}

    // meta 可以添加自定义键值对外，还可以和后置路由守卫联动 更改网页标题

    console.log(to, from);
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
});

//全局后置路由守卫----更改网页标题
router.afterEach((to, from) => {
    console.log(to, from);
    // to and from are both route objects.
    document.title = to.meta.title || '初始化展示';
})

export default router