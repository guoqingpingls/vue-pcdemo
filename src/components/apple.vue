<template>
    <div>
        <p>I am apple</p>
        <button @click = 'appleIncrement'>increment</button>
        <button @click = 'appleDecrement'>decrement</button>
    </div>
</template>
<script>
export default {
  name: 'apple',
  data () {
    return {
      msg: 'I am apple'
    }
  },
  methods: {
    appleIncrement () {
      this.$store.commit('increment', 5)
    },
    appleDecrement () {
      this.$store.commit('decrement', 5)
    }
  }
}
</script>
<style scoped>
</style>