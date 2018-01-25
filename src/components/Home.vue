<template>
<div class="home--container">
  <preview :foreground="foreground" :background="background">
  </preview>
    <div slot="controls" class="control--container">
      <controls title="Foreground" target="foreground" v-model="foreground"/>
      <controls title="Background" target="background" v-model="background"/>
    </div>
    <output-info slot="output" :foreground="foregroundOutput" :background="backgroundOutput" />
</div>

</template>

<script>
import Preview from "./Preview"
import Controls from "./Controls"
import Output from "./Output"
import Color from "color"
export default {
  name: "home",
  components: { Preview, Controls, "output-info": Output },
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
    foregroundOutput() {
      const color = Color(this.$store.state.foreground)
      return {
        hex: color.hex(),
        rgb: color.rgb().string(),
        hsl: color.hsl().string()
      }
    },
    backgroundOutput() {
      const color = Color(this.$store.state.background)
      return {
        hex: color.hex(),
        rgb: color.rgb().string(),
        hsl: color.hsl().string()
      }
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home--container {
  display: grid;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  grid-template-columns: 3fr 2fr 2fr;
}
</style>
