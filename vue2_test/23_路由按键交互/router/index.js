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
                            // 命名路由    
                            // 命名路由的使用可以有效减少路由嵌套路径过长
                            name: 'detail',

                            // query传参正常写法
                            path: 'detail',
                            component: DemoDetail,

                            // //params传参写法       
                            // path: 'detail/:id/:title',
                            // component: DemoDetail,



                            //使用props之后在路由组件中就可以直接使用具体对象  不用再加 $route.query.id 或者 $route.param.id ， 和vuex一样，把组件对数据的操作挪到对应核心插件上

                            //1\ props:true, 这种只适合传递的是param参数

                            //2\props函数是通用的

                            // query
                            // props($route) {
                            //     return {
                            //         id: $route.query.id,
                            //         title: $route.query.title
                            //     }
                            // }
                            // 这里还有更简便的写法：结构赋值
                            // 重温结构赋值：  
                            // const arr =  arr[1,2] 
                            // const obj = {id:'001',name:'andy'}
                            // 下面就是 数组arr 和 对象obj 的结构赋值 
                            // [1, 2] = arr
                            // {id,name} = obj

                            props({ query }) {   //query和param都是属于路由规则$route的属性，那么就可以用结构赋值读取
                                return {
                                    id: query.id,
                                    title: query.title
                                }
                            }


                            // props
                            // props(param) {
                            //     return {
                            //         id: param.id,
                            //         title: param.title
                            //     }
                            // }

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