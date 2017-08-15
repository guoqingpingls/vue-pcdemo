<template>
  <div class='order-wrap'>
      <h3>您的订单信息</h3>
      <div class='order-list-choose'>
          <div class='order-list-option'>
              选择产品:
              <v-selection :selections='products' @on-change='selectedProduct'></v-selection>
          </div>
          <div class='order-list-option'>
              开始日期:
              <v-date-picker @on-change='startDateChange'></v-date-picker>
          </div>
          <div class='order-list-option'>
              结束日期:
              <v-date-picker @on-change='endDateChange'></v-date-picker>
          </div>
          <div class='order-list-option'>
              关键词:
              <input type='text' v-model.lazy='query' class='query'>
          </div>
      </div>
      <div class='order-list-table'>
          <table>
              <tr>
                  <th v-for='(item, index) in tableHeads' :key="index" @click='changeOrderList(item)' :class='{active:item.key === activeKey}'>
                    {{ item.label }}
                  </th>
              </tr>
              <tr v-for='(product, index) in orderList' :key="index">
                  <td v-for='(item, index) in tableHeads' :key='index'>{{ product[item.key] }}</td>
              </tr>
          </table>
      </div>
  </div>
</template>
<script>
import VSelection from '../components/base/selection'
import VDatePicker from '../components/base/datePicker'
import _ from 'lodash'
export default {
  name: 'order',
  components: {
    VSelection,
    VDatePicker
  },
  data () {
    return {
      query: '',
      startDate: null,
      endDate: null,
      productId: 0,
      orderList: [],
      activeKey: null,
      currentOrder: 'asc',
      products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ]
    }
  },
  methods: {
    selectedProduct (product) {
      this.productId = product.value
      this.getOrderList()
    },
    startDateChange (date) {
      this.startDate = date
      this.getOrderList()
    },
    endDateChange (date) {
      this.endDate = date
      this.getOrderList()
    },
    getOrderList () {
    //   let reqParam = {
    //     productId: this.productId,
    //     startDate: this.startDate,
    //     endDate: this.endDate,
    //     query: this.query
    //   }
    //   this.$http.post('/api/getOrderList',reqParam).then((res) => {
    //     console.log(res)
    //     this.orderList = res.body.list
    //   }, (err) => {
    //     console.log(err)
    //   })
      this.$http.get('/api/getOrderList').then((res) => {
        console.log(res)
        this.orderList = res.body.list
      }, (err) => {
        console.log(err)
      })
    },
    changeOrderList (item) {
    //   console.log(item)
      this.activeKey = item.key
      if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      } else {
        this.currentOrder = 'asc'
      }
      this.orderList = _.orderBy(this.orderList, item.key, this.currentOrder)
    }
  },
  watch: {
    query () {
    //   this.query = query
      console.log(this.query)
      this.getOrderList()
    }
  },
  mounted () {
    this.getOrderList()
  }
}
</script>
<style>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-list-option {
  display: inline-block
}
.query {
  padding: 5px 10px;
  outline: 0 none;
  border: 1px solid #ccc;
  font-size: 13px;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
</style>
