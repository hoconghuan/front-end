<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
    <button @click="sendSchoolName">click</button>
  </div>
</template>

<script>

export default {
    name: 'MyStudent',
    data() {
        return{
            name:'chongqing high school',    
            address: ' chongqing west road',
        }
    },
    methods:{
      sendSchoolName(){
        // 触发school组件实例是身上的‘getSchoolName’事件
        this.$emit('getSchoolName',this.name); //这里只能是this.name！！ 不能直接写name
      }
    }
   
}
</script>

<style>

</style>