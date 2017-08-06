<template>
    <div class='slide-show' @mouseover="clearInterval" @mouseout="runInv">
        <div class='slide-img'>
            <a :href="slides[nowIndex].href">
                <transition name='nextIndexImg' mode='in-out'>
                    <img v-if='isShow' :src="slides[nowIndex].src">
                </transition>
                <transition name='nowIndexImg' mode='in-out'>
                    <img v-if='!isShow' :src="slides[nowIndex].src">
                </transition>
            </a>
        </div>
        <h2>{{ slides[nowIndex].title }}</h2>
        <ul class='slide-page'>
            <li @click='goto(prevIndex)'>&lt;</li>
            <li v-for="(item, index) in slides"
                :key='index'
                :class="{on:index === nowIndex}"
                @click='goto(index)'
                >
            {{ index + 1 }}
            </li>
            <li @click='goto(nextIndex)'>&gt;</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'sliderShow',
  props: {
    slides: {
      type: Array,
      default: []
    },
    invTime: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      isShow: true,
      nowIndex: 0,
      hello: 'this is a paragraph'
    }
  },
  computed: {
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    },
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      return this.nowIndex - 1
    }
  },
  methods: {
    goto (index) {
      if (this.nowIndex !== index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 1000)
      }
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.invTime)
    },
    clearInterval () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>
<style scoped>
    .slide-show{
        width: 900px;
        height: 344px;
        position: relative;
        overflow: hidden;
        margin: 15px 15px 15px 0;
    }
    h2{
        height: 30px;
        width: 100%;
        padding-left: 15px;
        position: absolute;
        bottom: 0;
        color: #fff;
        background: #000;
        opacity: .5;
        text-align: left;
    }
    .slide-img{
        width: 100%
    }
    .slide-img img{
        width: 100%;
        position: absolute;
        top: 0;
    }
     .slide-page{
        position: absolute;
        bottom: 10px;
        right: 15px;
    } 
    .slide-page li {
         display: inline-block; 
        padding: 0 10px;
        cursor: pointer;
        color: #fff;
    }
    .on{
        text-decoration: underline
    }
    /* 动画 */
    .nowIndexImg-leave-active {
        transform: translateX(-900px);
        transition: all 0.5s;
    }
    .nextIndexImg-enter {
        transform: translateX(900px);
    }
    .nextIndexImg-enter-active {
        transition: all 0.5s;
    }
</style>

