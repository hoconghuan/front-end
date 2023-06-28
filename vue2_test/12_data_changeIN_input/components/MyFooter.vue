<template>
  <div class="todo-footer" v-show="total">
   <label for="">
    <input type="checkbox" :checked='isAll' @click="checkALL">
   </label>
   <span>
    <span>done{{doneTotal}}</span>/total{{total}}
   </span>
   <button class="btn btn-danger" @click="clearAll">clear all dones</button>
  </div>
</template>

<script>
  export default {
    name:'MyFooter',
    props: [
      'todos',
      'checkAllTodos',
      'clearAllTodo'
    ],
    computed:{
      total(){
        return this.todos.length
      },
      doneTotal(){
      //   //方法1：
      // //   let i = 0;    
      // //   this.todos.forEach((todo) =>{
      // //     if (todo.done) i++
      // //   })
      // // return i;
      // }

      // 方法2
      return this.todos.reduce((pre,todo) =>{
        return pre + (todo.done? 1 :0)
      } ,0)
      //省略写法  return this.todos.reduce((pre,todo)=> return pre +(todo.done? 1 :0))
    },
    isAll(){
      return this.doneTotal === this.total && this.total > 0
    }
  },
  methods:{
    checkALL(todo){
      this.checkAllTodos(todo.done)
    },
    clearAll(){
      this.clearAllTodo()
    }
  }
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {height: 40px;line-height: 40px;padding-left: 6px;margin-top: 5px;}
  .todo-footer label {display: inline-block;margin-right: 20px;cursor: pointer;}
  .todo-footer label input {position: relative;top: -1px;vertical-align: middle;
    margin-right: 5px;}
  .todo-footer button {float: right;margin-top: 5px;}
</style>