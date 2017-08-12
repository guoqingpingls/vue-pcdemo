<template>
  <div class='order-wrap'>
    <my-dialog :dialogShow='isShowCheckDialog' @close-dialog='closeCheckDialog'>
        <span>请检查你的支付状态！</span>
        <button @click='checkPayStatus'>支付成功</button>
        <button @click='checkPayStatus'>支付失败</button>
    </my-dialog>
    <my-dialog :dialogShow='isShowSuccessDialog' @close-dialog='closeSuccessDialog'>
        支付成功!!!
    </my-dialog>
    <my-dialog :dialogShow = 'isShowFailDialog' @close-dialog='closeFailDialog'>
        支付失败!!!
    </my-dialog>
  </div>
</template>
<script>
import myDialog from './myDialog'
export default {
  name: 'checkOrder',
  components: {
    myDialog
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [Boolean, String]
    }
  },
  methods: {
    checkPayStatus () {
      // 根据orderId确认该订单是否支付成功
      // this.$http.post('/api/orderStatus', this.orderId).then((res) => {
      //   console.log(res)
      //   this.closeCheckDialog()
      //   if (res.body.payStatus) {
      //   // 支付成功
      //     this.isShowSuccessDialog = true
      //   } else {
      //     this.isShowFailDialog = true
      //   }
      // }, (err) => {
      //   console.log(err)
      //   this.closeCheckDialog()
      //   this.isShowFailDialog = true
      // })
      this.$http.get('/api/orderStatus').then((res) => {
        console.log(res)
        this.closeCheckDialog()
        if (res.body.payStatus) {
        // 支付成功
          this.isShowSuccessDialog = true
        } else {
          this.isShowFailDialog = true
        }
      }, (err) => {
        console.log(err)
        this.closeCheckDialog()
        this.isShowFailDialog = true
      })
    },
    closeSuccessDialog () {
      this.isShowSuccessDialog = false
    },
    closeFailDialog () {
      this.isShowFailDialog = false
    },
    closeCheckDialog () {
      this.$emit('close-check-dialog')
    }
  }
}
</script>
<style scoped>
  .order-wrap button {
    width: 100px;
    height: 35px;
    line-height: 35px;
    background: #4fc08d;
    border-radius: 4px;
    margin-right: 5px;
    border: none;
  }
</style>
