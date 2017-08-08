<template>
  <div class='choose-wrap'>
    <ul>
        <li v-for='(item, index) in chooseList' :class='{active: (Array.isArray(nowIndex) && nowIndex.indexOf(index) !== -1) || nowIndex === index}' :key='index' @click='checkChoose(index)'>
            {{ item.label }}
        </li>
    </ul>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'chooser',
  data () {
    return {
      nowIndex: 0
    }
  },
  props: {
    chooseList: {
      type: Array,
      default: [
        {
          label: 'test',
          value: 0
        }
      ]
    },
    chooseType: {
      type: Number,
      default: 0
    }
  },
  methods: {
    checkChoose (index) {
      if (this.chooseType === 0) {
        this.nowIndex = index
        this.$emit('on-change', this.chooseList[this.nowIndex])
      } else {
        if (this.nowIndex.indexOf(index) === -1) {
          this.nowIndex.push(index)
        } else {
          this.nowIndex = _.remove(this.nowIndex, (idx) => {
            return idx !== index
          })
        }
        let newObjArray = _.map(this.nowIndex, (idx) => {
          return this.chooseList[idx]
        })
        this.$emit('on-change', newObjArray)
      }
    }
  },
  mounted () {
    if (this.chooseType === 0) {
      this.nowIndex = 0
    } else if (this.chooseType === 1) {
      this.nowIndex = [0]
    }
  }
}
</script>
<style scoped>
    .choose-wrap{
        display: inline-block;
    }
    ul {

    }
    li {
        display: inline-block;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 4px;
        margin-right: 10px;
        padding: 0 10px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    li.active {
        background: #4fc08d;
    }
</style>
