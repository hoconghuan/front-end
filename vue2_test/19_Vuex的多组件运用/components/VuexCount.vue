<template>
  <div>
    <h1>当前求和：{{ sum }}</h1>
    <h3>{{ name }},{{ age }}</h3>
    <ul>
      <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
    </ul>
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
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: 'VuexCount',
  data() {
    return {
      n: 1, //用户选择的数字

    }
  },
  methods: {
    ...mapActions(['addOdd', 'addWait']),

    ...mapMutations(['increment', 'decrement'])
  },
  computed: {
    ...mapState(['sum', 'name', 'age', 'persons'])
  }

}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>