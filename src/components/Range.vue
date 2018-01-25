<template>
    <div class="control--container">
      <label class="control--label" for="">{{label}}</label>
      <input class="control--range" :style="{background: bg}" type="range" :value="rangevalue" @input="updateValue" :name="reference" :id="reference" :min="min" :max="max">
      <span class="control--value">{{rangevalue}}{{suffix}}</span>
    </div>
</template>

<script>
export default {
  name: "range",
  props: {
    label: {
      type: String,
      required: true
    },
    parentvalue: {
      type: [String, Number],
      required: true
    },
    reference: {
      type: String,
      required: false
    },
    min: [Number, String],
    max: [Number, String],
    suffix: String,
    bg: String
  },
  data() {
    return {
      rangevalue: ""
    }
  },
  computed: {},
  created: function() {
    this.rangevalue = this.parentvalue
  },
  watch: {
    parentvalue: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.rangevalue = newVal
      }
    }
  },
  methods: {
    updateValue(value) {
      this.rangevalue = value.target.value
      this.$emit("update", {
        val: Number(value.target.value),
        reference: this.reference
      })
    }
  }
}
</script>

<style scoped>
.control--container {
  display: grid;
  grid-template-columns: 2em 1fr 5em;
  grid-gap: 1rem;
}
.control--label {
  display: block;
}
.control--range {
  display: block;
  width: 100%;
}
</style>
