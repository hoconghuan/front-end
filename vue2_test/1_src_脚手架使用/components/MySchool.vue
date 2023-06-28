
<template>
  <div class='div'>
    <h2>{{ name }}</h2>
    <h2>{{address}}</h2>
  </div>
</template>

<script>
export default {

    name: 'MySchool',
    data() {
        return {
            name:'high school',
            address:'chongzhou'
        }
    },

}
</script>

<style>
    .div {
        background-color: red;
    }
</style>