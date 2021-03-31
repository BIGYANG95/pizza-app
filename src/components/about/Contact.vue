<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">bigyang</p>

      <router-link :to="{name:'phoneNumber'}">联系电话</router-link>
      <router-link :to="{name:'person'}">联系人</router-link>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>
