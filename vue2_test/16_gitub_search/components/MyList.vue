<template>
  <div class="row">
    <!-- 展示列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px' />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 初始界面 -->
    <h1 v-show="info.isFirst"> welcome to github search</h1>
    <!-- 载入数据 -->
    <h1 v-show="info.isloading">loading...</h1>
    <!-- 报错 -->
    <h1 v-show="info.errorMessage">{{ info.errorMessage }}</h1>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errorMessage: '',
        users: []
      }
    }
  },
  mounted() {
    this.$bus.$on('getInfo', (userObj) => {
      this.info = { ...this.info, ...userObj }
    })
  }
}
</script>

<style>
.album {
  min-height: 50rem;
  /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card>img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>