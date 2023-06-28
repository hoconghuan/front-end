<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h4>{{ msg }}</h4>
    <button @click="test">测试emit</button>
    <br>
    <slot></slot>
</template>

<script>
import { ref } from "vue";
export default {
    name: 'DemoTest',
    props: ['msg'],
    emits: ['sayHi'],
    setup(props, context) {
        console.log(props, context);
        let name = ref('张三')
        let age = ref(18)

        function test() {
            context.emit('sayHi', 666)
        }
        //返回一个对象
        return {
            name,
            age,
            test
        }

    }
}
</script>

<style></style>