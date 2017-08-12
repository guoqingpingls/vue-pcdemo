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
<style>
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
    /* 子页面 */
    .sales-board {
      background: #fff;
    }
    .sales-board-form {

    }
    .sales-board-intro h2 {
      font-size: 20px;
      padding: 20px;
    }
    .sales-board-intro p {
      background: #f7fcff;
      padding: 10px 20px;
      color: #999;
      line-height: 1.8;
    }
    .sales-board-form {
      padding: 30px 20px;
      font-size: 14px;
    }
    .sales-board-line {
      clear: both;
      padding-bottom: 20px;
    }
    .sales-board-line-left {
        display: inline-block;
        width: 100px;
    }
    .sales-board-line-right {
        display: inline-block;
        width: 75%;
    }
    .sales-board-line-right .button {
        width: 100px;
        background-color: #4fc08d;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
    }
    .sales-board-des {
      border-top: 20px solid #f0f2f5;
      padding: 15px 20px;
    }
    .sales-board-des p {
      line-height: 1.6;
    }
    .sales-board-des h2 {
      font-size: 20px;
      padding-bottom: 15px;
    }
    .sales-board-des h3 {
      font-size: 18px;
      font-weight: bold;
      padding: 20px 0 10px 0;
    }
    .sales-board-des li {
      padding: 5px 0;
    }
    .sales-board-table {
      width: 100%;
      margin-top: 20px;
    }
    .sales-board-table th {
      background: #4fc08d;
      color: #fff;
    }
    .sales-board-table td {
        border: 1px solid #f0f2f5;
        padding: 15px;
    }
    /* 确认订单样式 */
    .buy-dialog-title {
      font-size: 16px;
      font-weight: bold;
    }
    .buy-dialog-btn {
      width: 100px;
      background-color: #4fc08d;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
    }
    .buy-dialog-table {
      width: 100%;
      margin-bottom: 20px;
    }
    .buy-dialog-table td,
    .buy-dialog-table th{
      border: 1px solid #e3e3e3;
      text-align: center;
      padding: 5px 0;
    }
    .buy-dialog-table th {
      background: #4fc08d;
      color: #fff;
      border: 1px solid #4fc08d;
    }
</style>
