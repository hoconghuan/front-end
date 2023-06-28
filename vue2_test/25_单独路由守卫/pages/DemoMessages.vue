<template>
    <div>
        <ul>
            <li v-for=" message in messagesList " :key="message.id">

                <!-- 不用命名路由简化的样子： -->
                <!-- <router-link :to="`/home/message?id=${message.id}&title=${message.title}`">{{ message.title }}</router-link> -->

                <!-- 用命名路由简化的样子： -->
                <!-- 跳转的对象写法 -->
                <router-link :to="{             //如果想要携带参数需要跳转时绑定需要传递的参数，并且使用对象形式

                    // 这里使用命名路由的使用可以有效减少路由嵌套路径过长

                    name: 'detail',     //在组件中尽量使用命名路由，因为如果传递的params参数的话，路径 path:'/home/message'下使用params会丢失显示
                    query: {
                        id: message.id,
                        title: message.title
                    }
                }">
                    {{ message.title }}</router-link>





                <button @click="pushShow(message)">push查看</button>
                <button @click="replaceShow(message)">replace查看</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DemoMessages',
    data() {
        return {
            messagesList: [
                { id: '001', title: 'MSG001' },
                { id: '002', title: 'MSG002' },
                { id: '003', title: 'MSG003' },
            ]
        }
    },
    methods: {
        pushShow(message) {
            console.log(this);
            this.$router.push({
                name: 'detail',
                query: {
                    id: message.id,
                    title: message.title
                }
            })
        },
        replaceShow(message) {
            this.$router.replace({
                name: 'detail',
                query: {
                    id: message.id,
                    title: message.title
                }
            })
        }
    }
}
</script>

<style></style>