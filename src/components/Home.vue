<template>
<div>
  <preview :foreground="foreground" :background="background">
    <controls title="Foreground" target="foreground" v-model="foreground"/>
    <controls title="Background" target="background" v-model="background"/>
  </preview>
</div>

</template>

<script>
import Preview from "./Preview"
import Controls from "./Controls"
export default {
  name: "home",
  components: { Preview, Controls },
  data() {
    return {
      // foreground: {
      //   h: 100,
      //   s: 80,
      //   l: 80
      // }
    }
  },
  computed: {
    foreground: {
      get() {
        return this.$store.state.foreground
      }
    },
    background: {
      get() {
        return this.$store.state.background
      }
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
