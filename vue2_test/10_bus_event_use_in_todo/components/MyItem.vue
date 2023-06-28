<template>
  <li>
    <label>
      <input type="checkbox" :checked='todoObj.done' @click="todoChecked(todoObj.id)">   
      <!--  :checked='todoObj.done'  如果不加 '：'的话 todoObj.done默认是true   -->
      <span>{{todoObj.name}}</span>
    </label>
    <button class="btn btn-danger" @click="removeTodo(todoObj.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name:'MyItem',
    props: [
      'todoObj',     
      ],
    methods: {
      todoChecked(id){
        // this.checkTodo(id)
        this.$bus.$emit('checkTodo',id) 
        
        // 在发送里面是直接传递的
        // 在发送里面是直接传递的
        // 在发送里面是直接传递的
      },
      removeTodo(id){
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo',id)
      }
        
    } ,
   
  }
</script>

<style scoped>
  /*item*/
  li {list-style: none;height: 36px;line-height: 36px;padding: 0 5px;
    border-bottom: 1px solid #ddd;}
  li label {float: left;cursor: pointer;}
  li label li input {vertical-align:middle; margin-right:6px; position:relative;top: -1px;}
  li button {float: right;display: none;margin-top: 3px;}
  li:before {content: initial;}
  li:last-child {border-bottom: none;}
  li:hover{background-color: #ddd;}
  li:hover button{display: block;}
</style>