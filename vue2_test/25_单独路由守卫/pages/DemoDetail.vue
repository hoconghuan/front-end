<template>
    <div>
        <ul>

            <!-- query传参 -->
            <li>消息编号：{{ id }}</li>
            <li>消息标题：{{ title }}</li>


            <!-- params传参 -->
            <!-- <li>消息编号：{{ id }}</li>
            <li>消息标题：{{ title }}</li> -->

        </ul>
    </div>
</template>

<script>
export default {
    name: 'DemoDetail',
    props: ['id', 'title']
}
</script>

<style></style> 