<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>流量分析</h2>
        <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  购买数量：
              </div>
              <div class="sales-board-line-right">
                <v-counter :max='20' :min='1' @on-change="dealChangeParam('purchaseNumber', $event)"></v-counter>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品类型：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections='buyTypes' @on-change="dealChangeParam('purchaseType', $event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                 <v-chooser :chooseList='periodList' @on-change="dealChangeParam('purchasePeriod', $event)" :chooseType='0'></v-chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品版本：
              </div>
              <div class="sales-board-line-right">
                 <v-chooser :chooseList='versionList' @on-change="dealChangeParam('purchaseVersion', $event)" :chooseType='1'></v-chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  {{ totalPrice }} 元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click='payForProduct'>
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

        <h3>用户行为指标</h3>
        <ul>
          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
          <li>用户在网站的停留时间；</li>
          <li>用户来源网站（也叫“引导网站”）；</li>
          <li>用户所使用的搜索引擎及其关键词；</li>
          <li>在不同时段的用户访问量情况等。</li>
        </ul>

        <h3>浏览网站方式</h3>
        <ul>
          <li>用户上网设备类型</li>
          <li>用户浏览器的名称和版本</li>
          <li>访问者电脑分辨率显示模式</li>
          <li>用户所使用的操作系统名称和版本</li>
          <li>用户所在地理区域分布状况等</li>
        </ul>
      </div>
      <my-dialog :dialog-show='isShowPayDialog' @close-dialog='closePayDialog'>
        <table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>产品类型</th>
            <th>有效时间</th>
            <th>产品版本</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ purchaseNumber }}</td>
            <td>{{ purchaseType.label }}</td>
            <td>{{ purchasePeriod.label }}</td>
            <td>
               <span v-for="(item, index) in purchaseVersion" :key='index'>{{ item.label }}</span> 
            </td>
            <td>{{ totalPrice }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @bank-change='getBankId'></bank-chooser>
        <div class="button buy-dialog-btn" @click='checkOrder'>
          确认购买
        </div>
      </my-dialog>
      <check-order :is-show-check-dialog='isShowCheckDialog' @close-check-dialog='closeCheckDialog' :order-id='orderId'></check-order>
      <my-dialog :dialog-show='isShowErrorLog' @close-dialog='closeErrorLog'>
        支付失败！
      </my-dialog>
  </div>
</template>

<script>
import VSelection from '../../components/base/selection'
import VCounter from '../../components/base/counter'
import VChooser from '../../components/base/chooser'
import myDialog from '../../components/base/myDialog'
import BankChooser from '../../components/base/bankChooser'
import CheckOrder from '../../components/base/checkOrder'
// import _ from 'lodash'
export default {
  components: {
    VSelection,
    VChooser,
    VCounter,
    BankChooser,
    myDialog,
    CheckOrder
  },
  data () {
    return {
      versionList: [
        {
          label: '客户版',
          value: 0
        },
        {
          label: '代理商版',
          value: 1
        },
        {
          label: '专家版',
          value: 2
        }
      ],
      periodList: [
        {
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ],
      buyTypes: [
        {
          label: '入门版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        }
      ],
      purchaseNumber: 1,
      purchaseType: {},
      purchasePeriod: {},
      purchaseVersion: [],
      totalPrice: 0,
      isShowPayDialog: false,
      bankId: null,
      isShowErrorLog: false,
      isShowCheckDialog: false,
      orderId: null
    }
  },
  methods: {
    dealChangeParam (attr, value) {
      this[attr] = value
      this.getTotalPrice()
    },
    getTotalPrice () {
      // let purchaseVersionList = _.map(this.purchaseVersion, (idx) => {
      //   return idx.value
      // })
      // let reqParam = {
      //   number: this.purchaseNumber,
      //   type: this.purchaseType.value,
      //   period: this.purchasePeriod.value,
      //   version: purchaseVersionList.join(',')
      // }
      // console.log(reqParam)
      // this.$http.post('/api/getPrice', reqParam).then((res) => {
      //   console.log(res)
      //   this.totalPrice = res.body.totalPrice
      // }, (err) => {
      //   console.log(err)
      // })
      this.$http.get('/api/getPrice').then((res) => {
        console.log(res)
        this.totalPrice = res.body.totalPrice
      }, (err) => {
        console.log(err)
      })
    },
    // 点击立即购买，跳转到购买详情页面
    payForProduct () {
      this.isShowPayDialog = true
    },
    // 关闭购买详情页面
    closePayDialog () {
      this.isShowPayDialog = false
    },
    // 获取银行id
    getBankId (bank) {
      this.bankId = bank.id
      console.log(this.bankId)
    },
    checkOrder () {
      // let purchaseVersionList = _.map(this.purchaseVersion, (idx) => {
      //   return idx.value
      // })
      // let reqParam = {
      //   number: this.purchaseNumber,
      //   type: this.purchaseType.value,
      //   period: this.purchasePeriod.value,
      //   version: purchaseVersionList.join(','),
      //   bankId: this.bankId
      // }
      // // 成功会返回一个orderId
      // this.$http.post('/api/createOrder', reqParam).then((res) => {
      //   console.log(res)
      //   this.orderId = res.body.orderId
      //   this.isShowPayDialog = false
      //   this.isShowCheckDialog = true
      // }, (err) => {
      //   console.log(err)
      //   this.isShowPayDialog = false
      //   this.isShowErrorLog = true
      // })
      this.$http.get('/api/createOrder').then((res) => {
        console.log(res)
        this.orderId = res.body.orderId
        this.isShowPayDialog = false
        this.isShowCheckDialog = true
      }, (err) => {
        console.log(err)
        this.isShowPayDialog = false
        this.isShowErrorLog = true
      })
    },
    closeErrorLog () {
      this.isShowErrorLog = false
    },
    closeCheckDialog () {
      this.isShowCheckDialog = false
    }
  },
  mounted () {
    this.purchaseNumber = 1
    this.purchaseType = this.buyTypes[0]
    this.purchasePeriod = this.periodList[0]
    this.purchaseVersion = [this.versionList[0]]
    this.getTotalPrice()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
