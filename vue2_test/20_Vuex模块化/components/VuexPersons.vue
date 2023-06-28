<template>
    <div>
        <h1>persons' list</h1>
        <input type="text" placeholder="please input a name" v-model="name">
        <button @click="AddPersonsName({ id, name })">submit</button>
        <ul>
            <li v-for="person in persons" :key="person.id">{{ person.name }}</li>

        </ul>
        <h3>求和为：{{ sum }}</h3>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from 'vuex'
export default {
    name: 'VuexPersons',

    // 如果想用...mapmutations  就必须配置需要传递的数据，
    //     data() {
    //     return { id:nanoid(),name: ''}
    // },

    computed: {
        ...mapState('PersonList', ['persons']), //想要用就要加载
        ...mapState('CountSum', ['sum'])
    },
    methods: {

        AddPersonsName() {
            const person = { id: nanoid(), name: this.name }
            this.$store.commit('PersonList/AddPersonsName', person)   //在这里提交生成人员时没有 PersonList 这个目标名 ，正确的方式是在 AddPersonsName 之前添加 PersonList/ 确保在 PersonList目标下
            this.name = ''
        },

        // 使用扩展运算符添加，但是在index.js中 需要在人员参数中带 id和传入的name
        // ...mapMutations('PersonList', ['AddPersonsName'])
    }
}
</script>

<style></style>