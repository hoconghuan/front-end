<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{gender}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return{
            name:'andy',    
            age: 18,
            gender: 'male',
        }
    },
}
</script>

<style>

</style>