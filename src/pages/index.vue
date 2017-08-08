<template>
    <div class="index-wrap">
        <div class='index-left'>
            <div class='index-left-block'>
                <h2>全部产品</h2>
                <template v-for="(product, index) in productList">
                    <h3 :key='index'>{{ product.title }}</h3>
                    <ul :key='index'>
                        <li v-for="(item, index) in product.list" :key='index'>
                            <a :href="item.url">{{ item.name }}</a>
                            <span v-if="item.hot" class='hot-tag'>hot</span>
                        </li>
                    </ul>
                    <div v-if='!product.last' class='hr' :key='index'></div>
                </template>
            </div>
            <div class='index-left-block lastest-news'>
                <h2>最新消息</h2>
                <ul>
                    <li v-for="(item, index) in newsList" class='news-item' :key='index'>
                        <a :href="item.url">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class='index-right'>
            <slider-show :slides='slides' :invTime='invTime'></slider-show>
            <div class='index-board-list'>
                <div class='index-board-item'
                v-for="(item, index) in boardList"
                :class="[{'line-last': index%2 !== 0},'index-board-'+item.id]" :key='index'>
                    <div class='index-board-item-inner'>
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                        <button class='index-board-button'>
                            <router-link class='button' :to="{path: item.toKey}">立即购买</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sliderShow from '../components/sliderShow'
export default{
  name: 'index',
  components: { sliderShow },
  created: function () {
    this.$http.get('api/getNewsList').then((response) => {
      this.newsList = response.body
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  },
  data () {
    return {
      invTime: 2000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'the first image',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'the second image',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'the third image',
          href: 'detail/publish'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'the forth image',
          href: 'detail/forecast'
        }
      ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'detail/count'
            },
            {
              name: '数据预测',
              url: 'detail/forecast'
            },
            {
              name: '流量分析',
              url: 'detail/analysis',
              hot: true
            },
            {
              name: '广告发布',
              url: 'detail/publish'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
      newsList: [],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: '/detail/analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: '/detail/count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: '/detail/forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: '/detail/publish',
          saleout: false
        }
      ]
    }
  }
}
</script>
<style scoped>
    .index-wrap {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .index-left{
        float: left;
        width: 300px;
        text-align: center;
    }
    .index-left-block {
        margin: 15px;
        background: #fff;
        box-shadow: 0 0 1px #ddd;
    }
    .index-left-block .hr {
        margin-bottom: 20px;
    }
    .index-left-block h2 {
        background: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
    }
    .index-left-block h3 {
        padding: 0 15px 5px 15px;
        font-weight: bold;
        color: #222;
    }
    .index-left-block ul {
        padding: 10px 15px;
    }
    .index-left-block li {
        padding: 5px;
    }
    .hot-tag {
        background: red;
        color: #fff;
    }
    .lastest-news {
        min-height: 350px;
    }
    .index-right{
        width: 900px;
        float: left;
    }
    .index-board-list{
        overflow: hidden;
    }
    .index-board-item {
        float: left;
        width: 400px;
        background-color: #fff;
        box-shadow: 0 0 1px #ddd;
        padding: 20px;
        margin-bottom: 20px; 
        margin-right: 20px;
    }
    .index-board-item h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .line-last {
        margin-right: 0;
    }
    .index-board-car .index-board-item-inner {
        background: url(../assets/images/1.png) no-repeat;
    }
    .index-board-loud .index-board-item-inner {
        background: url(../assets/images/2.png) no-repeat;
    }
    .index-board-earth .index-board-item-inner {
        background: url(../assets/images/3.png) no-repeat;
    }
    .index-board-hill .index-board-item-inner {
        background: url(../assets/images/4.png) no-repeat;
    }
    .index-board-item-inner {
        min-height: 125px;
        padding-left: 120px;
    }
    .index-board-button {
        margin-top: 20px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        background: #4fc08d;
        border: none;
        cursor: pointer;
    }
    .index-board-button:focus {
        outline: none;
    }
    .news-item {
        width: 230px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
