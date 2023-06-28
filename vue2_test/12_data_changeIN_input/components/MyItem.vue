<template>
  <li>
    <label>
      <input type="checkbox" :checked='todoObj.done' @click="handleChecked(todoObj.id)">
      <!--  :checked='todoObj.done'  如果不加 '：'的话 todoObj.done默认是true   -->
      <span v-show="!todoObj.isEdit">{{ todoObj.name }}</span>
      <input type="text" v-show="todoObj.isEdit" :value="todoObj.name" @keyup.enter="handleEnter(todoObj, $event)"
        ref="name">
    </label>
    <button class="btn btn-danger" @click="handleRemove(todoObj.id)">delete</button>
    <button class="btn btn-danger" v-show="!todoObj.isEdit" @click="handleChanged(todoObj)">change</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: 'MyItem',
  props: [
    'todoObj',
  ],
  methods: {
    handleChecked(id) {
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)

      // 在发送里面是直接传递的
      // 在发送里面是直接传递的
      // 在发送里面是直接传递的
    },
    handleRemove(id) {
      // this.deleteTodo(id)
      // this.$bus.$emit('deleteTodo',id)
      pubsub.publish('deleteTodo', id)
    },

    // 改变输入的名称

    handleChanged(todoObj) {
      // 如果不判断是否拥有isEdit事件，每次改变名称都会重新调用isEdit事件
      if (todoObj.hasOwnProperty('isEdit')) {   //不能直接用todoObj.isEdit判断，这个判断是判断事件的 不是对象有没有事件
        todoObj.isEdit = true
      } else {

        this.$set(todoObj, 'isEdit', true)  //追加状态用 this.$set(obj,'event',judge)
      }
      this.$nextTick(function () {
        this.$refs.name.focus()
      })
    },
    // 添加更改确认
    handleEnter(todoObj, e) {
      todoObj.isEdit = false
      this.$bus.$emit('updataTodo', todoObj.id, e.target.value)
    }
  },

}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>