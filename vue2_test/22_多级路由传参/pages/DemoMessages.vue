<template>
    <div>
        <ul>
            <li v-for=" message in   messagesList " :key="message.id">
                <!-- 跳转路由携带 query参数 写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{ message.title}}</router-link> -->

                <!-- 跳转的对象写法 -->
                <!-- <router-link :to="{
                        path: '/home/message/detail',
                        query: {
                            id: message.id,
                            title: message.title
                        }
                    }">
                    {{ message.title }}</router-link> -->



                <!-- 用params 传参 -->
                <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{ message.title }}</router-link>
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
}
</script>

<style></style>