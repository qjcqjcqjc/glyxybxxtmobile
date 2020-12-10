<template>
  <div class="main">
    <svg class="main-icon" aria-hidden="true">
      <use xlink:href="#icon-404"></use>
    </svg>
    <div class="main-txt">404页面，点击返回<router-link to="/">首页</router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'Page404' // 404页面
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon {
      width: 500px;
      height: 400px;
      margin-top: -300px;
    }
    &-txt {
      position: absolute;
      bottom: 50px;
      font-size: 28px;
      color: #597290;
      a {
        color: #409EFF;
      }
    }
  }
</style>
