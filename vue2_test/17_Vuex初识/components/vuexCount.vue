<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addOdd">当前求和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
  </div>
</template>


<script>
export default {
  name: 'vuexCount',
  data() {
    return {
      n: 1, //用户选择的数字

    }
  },
  methods: {

    // 在操作之前时对条件判断  属于action环节
    addOdd() {
      this.$store.dispatch('addOdd', this.n)
    }
    ,
    addWait() {
      this.$store.dispatch('addWait', this.n)
    },


    // 具体执行操作 属于muatation环节
    increment() {
      this.$store.commit('increment', this.n)
    },
    decrement() {
      this.$store.commit("decrement", this.n)
    },

  },

}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>