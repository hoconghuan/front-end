<template>
  <div>
    <h2 >{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{gender}}</h2>
    <button @click="sendStudentName">click</button>
  </div>
</template>

<script>
// 引入混合

export default {
    name: 'myStudent',
    props:['getStudentName'],
    data() {
        return{
            name:'andy',    
            age: 18,
            gender: 'male',
        }
    },
  methods:{
    sendStudentName(){
      this.getStudentName(this.name)
    }
  }    
}
</script>

<style>

</style>