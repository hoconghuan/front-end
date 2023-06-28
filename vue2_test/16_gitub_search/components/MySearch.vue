<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from "axios"
export default {
    name: "MySearch",
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        searchUsers() {
            this.$bus.$emit('getInfo', { isFirst: false, isloading: true, errorMessage: '', users: [] })
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response => {
                    this.$bus.$emit('getInfo', { isloading: false, errorMessage: '', users: response.data.items })
                },
                error => {
                    this.$bus.$emit('getInfo', { isloading: false, errorMessage: 'error.message', users: [] })
                }
            )
        }
    }
}
</script>

<style></style>