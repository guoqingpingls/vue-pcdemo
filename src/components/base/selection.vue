<template>
  <div class='selection-wrap'>
      <div class='selection-show'>
          <span>{{ selections[nowIndex].label }}</span>
          <div class='arrow' @click='toggleShow'></div>
      </div>
      <div class='selection-container' v-if='isShowList'>
          <ul>
            <li v-for='(item, index) in selections' :key='index' @click='chooseListItem(index)'>
                {{ item.label }}
            </li>           
          </ul>
      </div>
  </div>
</template>
<script>
import { eventBus } from '../../eventBus'
export default {
  name: 'selection',
  data () {
    return {
      nowIndex: 0,
      isShowList: false
    }
  },
  props: {
    selections: {
      type: Array,
      default: [
        {
          label: 'test',
          value: 0
        }
      ]
    }
  },
  methods: {
    toggleShow (event) {
      event.stopPropagation()
      eventBus.$emit('reset-component')
      this.isShowList = !this.isShowList
    },
    chooseListItem (index) {
      this.nowIndex = index
      this.isShowList = false
      this.$emit('on-change', this.selections[index])
    }
  },
  mounted () {
    eventBus.$on('reset-component', () => {
      this.isShowList = false
    })
  }
}
</script>
<style scoped>
    .selection-wrap{
        display: inline-block;
        position: relative;
    }
    .selection-show{
        height: 25px;
        line-height: 25px;
        display: inline-block;
        border-radius: 4px;
        background-color: #fff;
        padding: 0 20px 0 10px;
        border: 1px solid #ccc;
    }
    .selection span{
    
    }
    .arrow{
        width: 0px;
        height: 0px;
        display: inline-block;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid #bbb;
        margin-left: 6px;
        margin-top: -3px;
        margin-right: -14px;
        vertical-align: middle;
        cursor: pointer;
    }
    .selection-container {
        position: absolute;
        width: 100%;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        left: 0;
        top: 25px;
        border-radius: 3px;
    }
    .selection-container li {
        padding: 5px 15px 5px 10px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        background-color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
    }
</style>

