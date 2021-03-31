<template>
  <div class="container">
    <h1>home</h1>
    <button @click="goToMenu" class="btn btn-success">just do it</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods:{
    goToMenu(){
      //跳转到上一次浏览的页面
      // this.$router.go(-1);
      //指定跳转
      //或者是通过name属性
      this.$router.push({name:'menuLink'})
    }
  }
}
</script>

<style scoped>

</style>
