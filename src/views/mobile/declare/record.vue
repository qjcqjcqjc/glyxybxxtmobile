<template>
  <div class="main" ref="main">
    <div class="main-header">
      <div class="title">申报记录</div>
      <div class="back" @click="$router.go(-1)" v-if="authInfo.eid">返回</div>
    </div>
    <div class="main-content" ref="main-content">
      <div v-if="blist.length">
        <div
          v-for="(item, index) in handleBlist"
          :class="['main-content-item', { 'completed': item.state === 2 || item.state === 3 }]"
          :key="index"
          @click="onItemClick(item)"
        >
          <div class="bid">编号：{{ item.id }}</div>
          <div class="date">
            <i class="el-icon-time"></i>
            <span>{{ $moment(item.sbsj.time).format(format) }}</span>
          </div>
          <div class="category">
            报修类别：{{ item.bxlb }}
          </div>
          <div class="state">
            {{ getState(item.state).text }}
          </div>
          <div class="desc">{{ item.bxnr }}</div>
        </div>
      </div>
      <div v-else class="no-data">
        <no-data-show style="height: 300px;" show-text="无申报记录"></no-data-show>
      </div>
    </div>
    <el-backtop target=".main"></el-backtop>
  </div>
</template>

<script>
  import noDataShow from '@/mobile/noDataShow'
  import config from '@/config'
  import { mapGetters } from 'vuex'
  import { getAuthInfo } from '@/utils/cookie'
  import { sortBxd } from '@/utils/common'

  export default {
    name: 'DeclareRecord',
    components: { noDataShow },
    data() {
      return {
        format: 'YYYY/MM/DD HH:mm',
        scrollTop: 0
      }
    },
    computed: {
      ...mapGetters(['blist']),
      authInfo() {
        return getAuthInfo()
      },
      detailPath() {
        return config.declareDetailsPath.replace(':id', '')
      },
      handleBlist() {
        // 对报修单按进度排序
        const sbz = [] // 申报中
        const wxz = [] // 维修中
        const ywx = [] // 已维修
        const def = [] // 其他
        this.blist.forEach((item) => {
          if (item.state == 0) {
            sbz.push(item)
          } else if (item.state == 1) {
            wxz.push(item)
          } else if (item.state == 2) {
            ywx.push(item)
          } else {
            def.push(item)
          }
        })

        // 时间从新到旧排序
        sbz.sort(sortBxd)
        wxz.sort(sortBxd)
        ywx.sort(sortBxd)
        def.sort(sortBxd)

        return sbz.concat(wxz, ywx, def)
      }
    },
    mounted() {
      if (this.authInfo.sf != 1) {
        this.$router.push('/no-permission')
      }

      const mainDiv = this.$refs['main']
      mainDiv.addEventListener('scroll', () => {
        this.scrollTop = mainDiv.scrollTop
      })
      if (!this.blist.length) {
        this.$store.dispatch('sbr/getBxdList')
      }
    },
    activated() {
      this.$refs['main'].scrollTop = this.$route.meta.scrollTop || 0
    },
    // 详情页面的beforeRouteLeave钩子函数
    beforeRouteLeave(to, from, next) {
      if (to.path === config.declarePath) {
        this.scrollTop = 0
      }
      from.meta.scrollTop = this.scrollTop
      next()
    },
    methods: {
      /**
       * 根据状态值返回当前状态
       * @param state
       * @returns {*}
       */
      getState(state) {
        const item = config.progress && config.progress.filter(item => item.value === state)
        return item && item[0]
      },
      onItemClick(item) {
        this.$router.push(`${this.detailPath}${item.id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    box-sizing: border-box;
  }

  .main {
    width: 750px;
    height: 100%;
    background: rgba(244, 246, 248, 1);
    overflow-y: auto;
    overflow-x: hidden;

    &-header {
      width: 750px;
      height: 162px;
      padding: 20px 0;
      background: #fff;
      box-shadow: 4px 6px 16px rgba(150, 150, 150, 0.2);
      position: sticky;
      top: 0;
      z-index: 999;

      .title {
        width: 256px;
        height: 90px;
        float: left;
        font-size: 52px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 90px;
        color: rgba(74, 88, 96, 1);
        margin: 12px 0 10px 48px;
      }

      .back {
        height: 44px;
        float: right;
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 44px;
        color: rgba(16, 175, 90, 1);
        cursor: pointer;
        margin: 34px 52px 34px 0;
      }
    }

    &-content {
      width: 750px;
      height: auto;
      padding: 20px 0;

      &-item {
        width: 690px;
        height: 234px;
        background: rgba(16, 175, 90, 1);
        box-shadow: 4px 6px 16px rgba(150, 150, 150, 0.2);
        border-radius: 32px;
        margin: 24px 30px;
        position: relative;

        .bid {
          position: absolute;
          top: 38px;
          left: 38px;
          width: 320px;
          height: 36px;
          font-size: 26px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 36px;
          color: rgba(255, 255, 255, 1);
          opacity: 0.5;
          word-break: break-all;
        }

        .date {
          position: absolute;
          top: 38px;
          right: 38px;
          width: auto;
          height: 36px;
          font-size: 26px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 36px;
          color: rgba(255, 255, 255, 1);
          opacity: 0.5;
        }

        .category {
          position: absolute;
          bottom: 76px;
          left: 38px;
          width: 570px;
          height: 50px;
          font-size: 34px;
          font-family: PingFang SC;
          font-weight: bold;
          line-height: 50px;
          color: rgba(255, 255, 255, 1);
          opacity: 1;
          word-break: break-all;
        }

        .state {
          position: absolute;
          bottom: 40px;
          right: 36px;
          width: 176px;
          height: 64px;
          font-size: 30px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          /*background: rgba(6, 113, 56, .8);*/
          border-radius: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .desc {
          position: absolute;
          bottom: 30px;
          left: 38px;
          width: 400px;
          height: 40px;
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 40px;
          color: rgba(255, 239, 156, 1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      &-item.completed {
        background: rgba(255, 255, 255, 1);

        .bid, .date, .state {
          color: #4A5860;
        }

        .category {
          color: #10AF5A;
        }

        .state {
          background: transparent;
        }

        .desc {
          color: #4A5860;
        }
      }

      .no-data {
        height: 600px;
      }
    }
  }
</style>
