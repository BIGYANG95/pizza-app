<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
<!--    router-view复用-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: 'app',
  components:{
    //属性名：组件名
    //属性名驼峰式命名的话 ，ES6会自动解析为app-header;如果属性名命名为app-header的话，必须使用引号
    appHeader:Header,
  },
}
</script>

<style>

</style>
