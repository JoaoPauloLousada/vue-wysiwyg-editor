<template>
  <div :class="classes">
    <select class="custom-select">
      <option value="Arial" selected>Arial</option>
      <option value="Comic Sans">Comic Sans</option>
      <option value="Roboto">Roboto</option>
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
  },
};
</script>

<style>
</style>