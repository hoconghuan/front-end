<template>
  <DemoTest @sayHi="sayHi" msg="Hello">
    <span>slot的使用</span>
  </DemoTest>
</template>

<script>
import DemoTest from './components/DemoTest.vue';
export default {
  name: 'App',
  components: { DemoTest },
  setup() {
    function sayHi(value) {
      console.log(`'I got a ${value}'`);
    }
    return {
      sayHi
    }
  }

}
</script>

