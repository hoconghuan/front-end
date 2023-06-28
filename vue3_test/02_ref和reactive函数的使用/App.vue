<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>信息地址：{{ info.address }}</h2>
  <h2>时间:{{ info.time }}</h2>
  <button @click="changeInfo">change info</button>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: 'App',

  setup() {

    let name = ref('张三')
    let age = ref(18)

    let info = reactive({
      time: 12 + 'am',
      address: 'chongzhou'
    })

    function changeInfo() {
      console.log(info)
      name.value = 'andy'
      age.value = 30
      info.address = 'wenjiang'
      info.time = 8 + 'pm'
    }
    //返回一个对象
    return {
      name,
      age,
      info,
      changeInfo,

    }

  }
}
</script>

