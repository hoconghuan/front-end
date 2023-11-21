<template>
  <div>


  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const books = reactive([ref('Vue 3 Guide')])
const b = reactive({ ccc: ref(' b in Vue 3 Guide') })
const a = reactive([])
const c = ref('c')

// 这里需要 .value
console.log(a);
// console.log(b);

console.log(b.ccc);
console.log(books)
console.log(c);
console.log(books[0].value)

// const map = reactive(new Map([['count', ref(0)]]))
// // 这里需要 .value
// console.log(map.get('count').value)
</script>

