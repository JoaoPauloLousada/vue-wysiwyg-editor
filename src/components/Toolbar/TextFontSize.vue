<template>
  <div :class="classes">
    <select class="custom-select">
      <option v-for="size in range" :key="size" :selected="size === defaultSize">{{size}}</option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    classes: {
      types: String,
      default: "",
    },
    minSize: {
      type: Number,
      default: 6,
    },
    maxSize: {
      type: Number,
      default: 36,
    },
    defaultSize: {
      type: Number,
      default: 12,
    },
  },
  computed: {
    range: function () {
      return this.processRange(this.maxSize, this.minSize);
    },
  },
  methods: {
    processRange(maxSize, minSize, arr = []) {
      let initial = maxSize;

      if (initial < minSize) {
        return arr.reverse();
      }

      if (initial % 2 !== 0) initial -= 1;

      arr.push(initial);
      initial = initial - 2;

      return this.processRange(initial, minSize, arr);
    },
  },
};
</script>

<style>
</style>