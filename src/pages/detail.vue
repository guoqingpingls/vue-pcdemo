<template>
  <div class='detail-wrap'>
      <div class='detail-left'>
          <img :src='productIcon'/>
          <ul>
            <router-link v-for='(item, index) in products' :key='index' tag='li' active-class='active' :to= '{path: item.path}'>
                {{ item.name }}
            </router-link>
          </ul>
      </div>
      <div class='detail-right'>
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
        '/detail/count': require('../assets/images/1.png'),
        '/detail/forecast': require('../assets/images/2.png'),
        '/detail/analysis': require('../assets/images/3.png'),
        '/detail/publish': require('../assets/images/4.png')
      }
    }
  },
  computed: {
    productIcon () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>
<style scoped>
    .detail-wrap {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        padding-top: 20px;
    }
    .detail-left{
        width: 200px;
        float: left;
        text-align: center;
        padding: 20px 0;
        background: #fff;
    }
    .detail-left ul {
        margin-top: 20px;
    }
    .detail-left li {
        text-align: center;
        padding: 10px 15px;
        cursor: pointer;
    }
    .detail-left li.active,.detail-left li:hover {
        background-color: #4fc08d;
        color: #fff;
    }
    .detail-left li a {
        display: block;
    }
    .detail-right {
        float: left;
        width: 980px;
        margin-left: 20px;
    }
</style>
