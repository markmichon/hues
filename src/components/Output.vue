<template>
  <div>
    <ul>
      <li v-for="(val, key) in colorStrings" :key="key">{{key}}: {{val}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "output",
  props: {
    colorStrings: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
