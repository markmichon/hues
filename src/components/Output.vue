<template>
  <div>
    <ul>
      <li v-for="(val, key) in foreground" :key="key">{{key}}: {{val}}</li>
    </ul>
    <ul>
      <li v-for="(val, key) in background" :key="key">{{key}}: {{val}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "output-info",
  props: {
    foreground: {
      type: Object,
      required: true
    },
    background: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
