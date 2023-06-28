<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <DemoBanner></DemoBanner>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
          <router-link class="list-group-item " active-class="active" to="/about">DemoAbout</router-link>
          <router-link class="list-group-item " active-class="active" to="/home">DemoHome</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import DemoBanner from './components/DemoBanner.vue'
import router from './router/index'


export default {
  name: 'App',
  components: { DemoBanner },
  router
}
</script>

<style></style>  
