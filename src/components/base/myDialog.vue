<template>
  <div class='dialog-wrap'>
      <div class='dialog-cover' @click='closeDialog' v-if='dialogShow'></div>
      <transition name='my-dialog'>
        <div class='dialog-content' v-if='dialogShow'>
          <p class='dialog-close' @click='closeDialog'>X</p>
          <slot>empty</slot>
        </div>
      </transition>
  </div>
</template>
<script>
export default {
  name: 'myDialog',
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    },
    dialogName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      hello: 'this is my dialog'
    }
  },
  methods: {
    closeDialog () {
      this.$emit('close-dialog', this.dialogName)
    }
  }
}
</script>
<style scoped>
.dialog-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
}
.dialog-cover {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.3;
    position: fixed;
    top: 0px;
    left: 0px;

}
.dialog-content {
    width: 50%;
    min-width: 415px;
    min-height: 5%;
    background-color:#fff;
    position: fixed;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    padding: 2%;
    border: 1px solid #464068;
    line-height: 1.6;
}
.dialog-close {
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
}
.dialog-close:hover{
    border-radius: 50%;
    background-color: #ccc;
}
/* 弹窗动画 */
.my-dialog-enter{
  transform: translateY(-500px);
}
.my-dialog-enter-active{
  transition: all .5s ease;
}
.my-dialog-leave-active{
  transform: translateY(-500px);
  transition: all .3s ease;
}
</style>
