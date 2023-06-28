<template>
  <div>
    <h2 @click="showName">{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{gender}}</h2>
  </div>
</template>

<script>
// 引入混合
import {alerts} from '../common_models'
export default {
    name: 'Student',
    data() {
        return{
            name:'andy',    
            age: 18,
            gender: 'male',
        }
    },
    mixins: [alerts]
    
}
</script>

<style>

</style>