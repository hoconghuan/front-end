<template>
  <br>
  <div class="ah-test">hello</div>
  <div class="ah-test__el">heloo</div>
  <div class="ah-test--success">hello</div>
</template>

<script setup>
// import { ref, reactive } from "vue";


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