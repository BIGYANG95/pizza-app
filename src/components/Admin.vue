<template>
  <h1>admin</h1>
</template>

<script>
export default {
  name: "Admin",
  data(){
    return{
      name:'BIGYANG'
    }
  },
  // 组件路由守卫
  beforeRouteLeave(to,from,next){
    alert('查看现在能否拿到data内的数据'+this.name)
    if(confirm('确定离开吗？？？') == true){
      next()
    }else{
      next(false)
    }
  }
  }
</script>

<style scoped>

</style>
