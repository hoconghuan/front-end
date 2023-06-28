<template>
  <div id="app">
    <h2 ref="tab">hello vue cli!</h2>
    <button ref="btn" @click="click">click</button>
    <MySchool ref="xx"></MySchool>
  </div>
</template>

<script>
import MySchool from './components/School'
export default {
  name: 'App',
  components: { MySchool },
  methods: {
    click() {
      console.log(this.$refs.btn)
      console.log(this.$refs.tab)
      console.log(this.$refs.xx)
    }
  }
}
</script>

<style></style>