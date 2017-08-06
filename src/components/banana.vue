<template>
    <div>
        <p>{{ msg }}</p>
        <button @click='bananaIncrement'>increment</button>
        <button @click = 'bananaDecrement'>decrement</button>
    </div>
</template>
<script>
export default {
  name: 'banana',
  data () {
    return {
      msg: 'I am banana'
    }
  },
  methods: {
    bananaIncrement () {
      this.$store.commit('increment', 10)
    },
    bananaDecrement () {
      this.$store.commit('decrement', 10)
    }
  }
}
</script>
<style scoped>
    p{
        height: 20px;
        line-height: 20px;
        border: 1px solid #ccc;
        background-color: #ff0;
    }
</style>