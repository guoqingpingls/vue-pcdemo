<template>
  <div class='counter-wrap'>
    <div class='counter-btn' @click='numDel'>-</div>
    <div class='counter-show'>
      <input type='text' @keyup="fixNumber" v-model='number'/>
    </div>
    <div class='counter-btn' @click='numAdd'>+</div>
  </div>
</template>
<script>
export default {
  name: 'counter',
  props: {
    max: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      number: this.min
    }
  },
  methods: {
    numDel () {
      if (this.number === this.min) {
        return
      } else {
        this.number -= 1
      }
    },
    numAdd () {
      if (this.number === this.max) {
        return
      } else {
        this.number += 1
      }
    },
    fixNumber () {
      let fixNum
      if (typeof this.number === 'string') {
        fixNum = this.number.replace(/\D/g, '')
      } else {
        fixNum = this.number
      }
      if (fixNum > this.max || fixNum < this.min) {
        fixNum = this.min
      }
      this.number = fixNum
    }
  },
  watch: {
    number () {
      this.$emit('on-change', this.number)
    }
  }
}
</script>
<style>
  .counter-wrap {
    display: inline-block;
  }
  .counter-btn {
    display: inline-block;
    border: 1px solid #ccc;
    padding: 4px 10px 5px 10px;
    cursor: pointer;
  }
  .counter-btn:hover {
    background-color: #4fc08d;
  }
  .counter-show {
    display: inline-block;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-right: -4px;
    margin-left: -4px;
  }
  .counter-show input {
    width: 40px;
    height: 23px;
    line-height: 23px;
    padding: 0;
    text-align: center;
    border: none;
  }
  input:focus{
    outline: none;
  }
</style>

