<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
         <MyHeader @addTodo="addTodo" ></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter :todos="todos" :checkAllTodos='checkAllTodos' :clearAllTodo='clearAllTodo'></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
  import MyHeader from './components/MyHeader'
  import MyList from './components/MyList'
  import MyFooter from './components/MyFooter'

  export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter },
    data(){
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods: {
      // 增
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      // 查
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.done = !todo.done
        })
      },
      // 删
      deleteTodo(_,id){ // 用Pubsub时需要传递两个参数，第一个是名称，第二个是对象，名称不用所以用下划线占位
        this.todos = this.todos.filter(todo => todo.id !== id )
      },
      // 改
      updataTodo(id,name){
        this.todos.forEach(todo =>{
          if(todo.id === id) todo.name = name
        } )
      },

      checkAllTodos(done){
        this.todos.forEach(todo =>{
          todo.done = done
        } )
      },
      clearAllTodo(){
        this.todos = this.todos.filter(todo =>{
          return !todo.done
        } )
      }
    },
    watch:{
      todos:{
        deep:true,  
        handler(value){
          localStorage.setItem("todos", JSON.stringify(value)) || [] 
        }
        
      }
    },
    mounted(){
      this.$bus.$on('checkTodo',this.checkTodo)
      // this.$bus.$on('deleteTodo',this.deleteTodo)
       this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo) //结束就需要一个返回值

       this.$bus.$on('updataTodo',this.updataTodo)
    },
    beforeDestroy(){
      this.$bus.$off('checkTodo')
      // this.$bus.$off('deleteTodo')
      // pubsub 停止等同于setInterval，需要开启时的返回值用于结束
      pubsub.unsubscribe(this.pubId)
    }
  }
</script>

<style>
  /*base*/
  body {background: #fff;}
  .btn {display: inline-block;padding: 4px 12px;margin-bottom: 0;font-size: 14px;
    line-height: 20px;text-align: center;vertical-align: middle;cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;}
  .btn-danger {color: #fff;background-color: #da4f49;border: 1px solid #bd362f;}
  .btn-danger:hover {color: #fff;background-color: #bd362f;}
  .btn:focus {outline: none;}
  .todo-container {width: 600px;margin: 0 auto;}
  .todo-container .todo-wrap {padding: 10px;border: 1px solid #ddd;border-radius: 5px;}
</style>
