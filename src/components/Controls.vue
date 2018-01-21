<template>
  <form class="form">
    <legend>{{title}}</legend>
    <range label="Hue" suffix="deg" :bg="setHueBackground" reference="h" min="0" max="360" :parentvalue="hue" @update="updateColor"/>
    <range label="Saturation" :bg="setSaturationBackground" suffix="%" reference="s" min="0" max="100" :parentvalue="saturation" @update="updateColor"/>
    <range label="Lightness" :bg="setLightnessBackground" suffix="%" reference="l" min="0" max="100" :parentvalue="lightness" @update="updateColor"/>
  </form>
</template>

<script>
import { mapState } from "vuex"
import Range from "./Range"

const makeGradient = ({ saturation, lightness }) =>
  `linear-gradient(90deg,hsl(0, ${saturation}%, ${lightness}%),hsl(60, ${saturation}%, ${lightness}%),hsl(120, ${saturation}%, ${lightness}%),hsl(180, ${saturation}%, ${lightness}%),hsl(240, ${saturation}%, ${lightness}%),hsl(300, ${saturation}%, ${lightness}%),hsl(360, ${saturation}%, ${lightness}%))`

export default {
  name: "controls",
  components: { Range },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    target: [String]
  },
  data() {
    return {}
  },
  computed: {
    hue: function() {
      return this.value.h
    },
    saturation: function() {
      return this.value.s
    },
    lightness: function() {
      return this.value.l
    },
    setHueBackground() {
      return `linear-gradient(90deg,hsl(0, ${this.saturation}%, ${this.lightness}%),hsl(60, ${this.saturation}%, ${this.lightness}%),hsl(120, ${this.saturation}%, ${this.lightness}%),hsl(180, ${this.saturation}%, ${this.lightness}%),hsl(240, ${this.saturation}%, ${this.lightness}%),hsl(300, ${this.saturation}%, ${this.lightness}%),hsl(360, ${this.saturation}%, ${this.lightness}%))`
    },
    setSaturationBackground: function() {
      
      return `linear-gradient(90deg, hsl(${this.hue}, 0%, ${this.lightness}%), hsl(${this.hue}, 100%, ${this.lightness}%))`
    },
    setLightnessBackground: function() {
      return `linear-gradient(90deg, hsl(${this.hue}, ${this.saturation}%, 0%), hsl(${this.hue}, ${this.saturation}%, 100%)`
    }
  },
  methods: {
    updateColor(data) {
      const payload = {
        target: this.target,
        ...data
      }
      this.$store.commit("updateColor", payload)
    }
  }
}
</script>

<style scoped>
.form {
  background-color: #efefef;
  border-radius: 4px;
  padding: 0.5rem;
}
.control--label {
  display: block;
}
.control--range {
  display: block;
}
</style>
