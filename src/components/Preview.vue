<template>
  <section class="output" :style="{backgroundColor: backgroundColor}">
    <div class="output--container" >
      <h2 class="output--heading" :style="{color: foregroundColor}">
        <span :style="{color: foregroundColor}">Aa</span>
        <span :style="{color: step}">Aa</span>
        </h2>
      <p class="output--paragraph" :style="{color: foregroundColor}">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <slot></slot>

  </section>
</template>

<script>
// const getHSL = ({ h, s, l }) => `hsl(${h},${s}%,${l}%)`
import { hslString } from "../utils"
export default {
  name: "preview",
  props: {
    foreground: {
      type: Object,
      required: true
    },
    background: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    foregroundColor() {
      const { h, s, l } = this.foreground
      return hslString(h, s, l)
    },
    backgroundColor() {
      const { h, s, l } = this.background
      return hslString(h, s, l)
    },
    step() {
      const { h, s, l } = this.foreground
      const newL = l < 50 ? l + 20 : l - 20
      return hslString(h, s, newL)
    }
  }
}
</script>

<style scoped>
.output {
  display: grid;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  grid-template-columns: 3fr 2fr;
}

.output--container {
  padding: 4rem 2rem;
  margin-bottom: 1rem;
  align-self: end;
}

.output--heading {
  text-align: left;
  font-size: 8rem;
  line-height: 1;
  margin: 0;
}
</style>
