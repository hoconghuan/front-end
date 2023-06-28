<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>拿到名字 {{ name }}, 拿到年龄：{{ age }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <button @click="addWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'   //需要先引用 
export default {
  name: 'vuexCount',
  data() {
    return {
      n: 1, //用户选择的数字

    }
  },
  computed: {
    // 在dom中插值语法中要输入 $store.state.sum ，这个太长了， 所有要用到 mapstate 和 mapmuatation 来简化 并且只能将 mapstate 和 mapmuatation 放在computed属性里 ， 而且 mapstate 和 mapmuatation 必须用ES6的扩展字符  ...

    // 解决办法1：   写成对象形式   
    // ...mapState({ sum: 'sum', name: 'name', age: 'age' })

    // 解决办法1：   写成对象形式  
    ...mapState(['sum', 'name', 'age'])

  },
  methods: {
    //因调用的是 commit 所以是muatation

    // increment() {
    //   this.$store.commit('increment', this.n)
    // },
    // decrement() {
    //   this.$store.commit("decrement", this.n)
    // },

    // 对象形式：
    // ...mapMutations({ decrement: 'decrement', increment: 'increment' }),
    // 数组形式：
    ...mapMutations(['decrement', 'increment']),

    // ********************************************************************************

    // 这里调用的是dispatch 所以是action

    // ...mapActions({ addOdd: 'addOdd', addWait: 'addWait' })
    ...mapActions(['addOdd', 'addWait'])


    // addOdd() {
    //   this.$store.dispatch('addOdd', this.n)
    // }
    // ,
    // addWait() {
    //   this.$store.dispatch('addWait', this.n)
    // },
  },
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>