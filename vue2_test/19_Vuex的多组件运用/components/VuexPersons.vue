<template>
    <div>
        <h1>persons' list</h1>
        <input type="text" placeholder="please input a name" v-model="name">
        <button @click="AddPersonsName">submit</button>
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
    data() {
        return { name: '' }
    },
    computed: {
        ...mapState(['persons', 'sum']) //想要用就要加载
    },
    methods: {
        AddPersonsName() {
            const person = { id: nanoid(), name: this.name }
            this.$store.commit('AddPersonsName', person)
            this.name = ''
        }
    }
}
</script>

<style></style>