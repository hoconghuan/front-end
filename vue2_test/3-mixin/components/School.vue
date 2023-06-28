<template>
  <div>
    <h2 @click="showName">{{name}}</h2>
    <h2>{{address}}</h2>
    
  </div>
</template>

<script>
import {alerts} from '../common_models'
export default {
    name: 'Student',
    data() {
        return{
            name:'chongqing high school',    
            address: ' chongqing west road',
        }
    },
    mixins: [alerts]
}
</script>

<style>

</style>