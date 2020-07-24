<template>
  <div :class="classes">
    <select class="custom-select">
      <option v-for="size in range" :key="size">size</option>
      <!-- <option value="Arial" selected>12</option> -->
      <!-- <option value="Comic Sans">14</option> -->
      <!-- <option value="Roboto">16</option> -->
      <!-- <option value="Roboto">18</option> -->
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
  },
  computed: {
    range: function () {
      console.log("range");
      const sizeRange = this.processRange(this.maxSize, this.minSize);
      console.log("sizeRange", this.processRange(this.maxSize, this.minSize));
      return sizeRange;
    },
  },
  methods: {
    processRange(maxSize, minSize, arr = []) {
      // console.log("processRange", arr);
      let initial = maxSize;

      if (initial < minSize) {
        console.log("entrou no if", arr);
        return arr;
      }

      if (initial % 2 !== 0) initial -= 1;

      arr.push(initial);
      initial = initial - 2;

      this.processRange(initial, minSize, arr);
    },
  },
};
</script>

<style>
</style>