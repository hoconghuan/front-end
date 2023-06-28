<template>    
    <div class="container">
      <MySearch></MySearch>
      <MyList></MyList>
    </div>
</template>

<script>
import MySearch from '../src/components/MySearch.vue'
import MyList from '../src/components/MyList.vue'
  export default {
    name: 'App',
    components:{MyList, MySearch}
  }
</script>

<style>

</style>  
