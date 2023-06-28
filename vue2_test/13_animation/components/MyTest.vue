<template>
  <div>
    <button @click="isShow = !isShow">show/show-off</button>
    <transition >
    <h1 v-show="isShow">hello VUE animation</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name:'MyTest',
    data() {
        return {
           isShow: true, 
        }
    },
}
</script>

<style scoped> 
    h1 {
        background-color: orange;
    }
    .v-enter-active{
        animation: slipoff 1s
    }
    .v-leave-active{
        animation: slipoff 1s reverse
    }
    @keyframes slipoff {
        from {
            transform: translateX(-100%);
        }
        to { transform:translateX(0)}
    }
</style>