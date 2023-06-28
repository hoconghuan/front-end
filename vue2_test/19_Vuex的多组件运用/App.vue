<template>
  <div class="container">
    <VuexCount></VuexCount>
    <br><br>
    <hr>
    <VuexPersons></VuexPersons>

  </div>
</template>
 
<script>
import VuexCount from './components/VuexCount'
import VuexPersons from './components/VuexPersons.vue';

export default {
  name: 'App',
  components: { VuexCount, VuexPersons }
}
</script>

<style></style>  
