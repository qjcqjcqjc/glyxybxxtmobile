<template>
  <div class="main">
    <svg class="main-icon" aria-hidden="true">
      <use xlink:href="#icon-shouquanshibai"></use>
    </svg>
    <div class="main-txt">授权失败，点击重新<a @click="onClick">授权</a></div>
  </div>
</template>

<script>
  import { auth } from '@/utils/auth'

  export default {
    name: 'OauthFailed', // 授权失败组件
    data() {
      return {}
    },
    methods: {
      onClick() {
        auth()
      }
    }
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
