<template>
  <section class="output">
    <div class="output--container" :style="{backgroundColor: backgroundColor}">
      <h2 class="output--heading" :style="{color: foregroundColor}">Aa</h2>
      <!-- <p class="output--paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
    </div>
    <slot></slot>
  </section>
</template>

<script>
const getHSL = ({ h, s, l }) => `hsl(${h}deg,${s}%,${l}%)`

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
      return getHSL(this.foreground)
    },
    backgroundColor() {
      return getHSL(this.background)
    }
  }
}
</script>

<style scoped>
.output {
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.output--container {
  /* width: 500px; */
  padding: 4rem 2rem;
  margin-bottom: 1rem;
}

.output--heading {
  text-align:center;
  font-size: 8rem;
  line-height: 1;
  margin:0;
}
</style>
