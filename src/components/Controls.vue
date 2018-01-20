<template>
  <form class="form">
    <legend>{{title}}</legend>
    <range label="Hue" reference="h" min="0" max="360" :parentvalue="hue" @update="updateColor"/>
    <range label="Saturation" reference="s" min="0" max="100" :parentvalue="saturation" @update="updateColor"/>
    <range label="Lightness" reference="l" min="0" max="100" :parentvalue="lightness" @update="updateColor"/>
  </form>
</template>

<script>
import { mapState } from "vuex"
import Range from "./Range"
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
