<template>
  <div class="main">
    <svg class="main-icon" aria-hidden="true">
      <use xlink:href="#icon-wuquanxian"></use>
    </svg>
    <div class="main-txt">您无权限访问此页面，点击返回<router-link to="/">首页</router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'NoPermission', // 无权限页面
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
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
      font-size: 150px;
      margin-top: -200px;
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
