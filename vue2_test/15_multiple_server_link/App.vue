<template>
  <div>
    <button @click="getStudents">get students' information</button>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'App',
    methods:{
      getStudents(){
        axios.get('http://localhost:8080/api/students').then(   //第二种的话要在端口后指定定义的接口api
          response => {
            console.log('respones got',response.data);
          },
          error => {
            console.log('respones failed',error.message);
          }
        )
      }
    }
  }
</script>

