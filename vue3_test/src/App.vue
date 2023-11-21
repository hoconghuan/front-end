<template>
  <Layout></Layout>
</template>

<script setup>
// import { ref, reactive } from "vue";
import { Layout } from './Layout/Layout.vue'

</script>

<style lang="scss">
@include block(test) {
  color: red;

  @include element(el) {
    color: skyblue
  }

  @include modifier(success) {
    color: green;
  }
}
</style>