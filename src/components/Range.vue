<template>
    <div>
      <input class="control--range" type="range" :value="rangevalue" @input="updateValue" :name="reference" :id="reference" :min="min" :max="max">
      <label class="control--label" for="">{{label}}: {{rangevalue}}deg</label>
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
    max: [Number, String]
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
