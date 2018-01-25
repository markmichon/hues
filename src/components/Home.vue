<template>
<div>
  <preview :foreground="foreground" :background="background">
    <div slot="controls" class="control--container">
      <controls title="Foreground" target="foreground" v-model="foreground"/>
      <controls title="Background" target="background" v-model="background"/>
    </div>
    <output slot="output" colorStrings="colors" />
  </preview>
</div>

</template>

<script>
import Preview from "./Preview"
import Controls from "./Controls"
import Output from "./Output"
import Color from "color"
export default {
  name: "home",
  components: { Preview, Controls, Output },
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
    },
    colors() {
      const color = Color(this.$store.state.foreground)
      return {
        hex: color.hex(),
        rgb: color.rgb(),
        hsl: color.hsl()
      }
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.control--container {
  /* display: grid;
  grid-template-rows: 1fr 1fr; */
}
</style>
