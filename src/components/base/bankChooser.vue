<template>
  <div>
    <ul class='choose-list'>
        <li v-for='(item, index) in payChooses' :key="index" :title="item.label"
        :class="[item.name,{active: nowIndex === index}]" @click="changeBank(index)">
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'bankChooser',
  data () {
    return {
      nowIndex: 0,
      payChooses: [
        {
          id: 201,
          label: '招商银行',
          name: 'zhaoshang'
        },
        {
          id: 301,
          label: '中国建设银行',
          name: 'jianshe'
        },
        {
          id: 601,
          label: '浦发银行',
          name: 'pufa'
        },
        {
          id: 1101,
          label: '交通银行',
          name: 'jiaotong'
        },
        {
          id: 101,
          label: '中国工商银行',
          name: 'gongshang'
        },
        {
          id: 401,
          label: '中国农业银行',
          name: 'nongye'
        },
        {
          id: 1201,
          label: '中国银行',
          name: 'zhongguo'
        },
        {
          id: 501,
          label: '中信银行',
          name: 'zhongxin'
        }
      ]
    }
  },
  methods: {
    changeBank (index) {
      this.nowIndex = index
      this.$emit('bank-change', this.payChooses[index])
    }
  }
}
</script>
<style scoped>
  .choose-list li{
    background-image: url(../../assets/banks/banks.png);
    background-repeat: no-repeat;
    width: 117px;
    height: 32px;
    display: inline-block;
    border: 1px solid #ccc;
    margin-right: 5px;
    cursor: pointer;
  }
  .choose-list li.active{
    border: 1px solid #4fc08d;
  }
  .zhaoshang {
    background-position: -2160px 0;
  }
  .jianshe {
    background-position: -718px 0;
  }
  .pufa {
    background-position: -1804px 0;
  }
  .jiaotong {
    background-position: -3119px 0;
  }
  .gongshang {
    background-position: -2637px 0;
  }
  .nongye {
    background-position: -1682px 0;
  }
  .zhongguo {
    background-position: -2523px 0;
  }
  .zhongxin {
    background-position: -480px 0;
  }
</style>

