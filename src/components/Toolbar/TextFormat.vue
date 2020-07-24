<template>
  <div :class="classes">
    <select class="custom-select">
      <option value="p" selected>Paragraph</option>
      <option value="h1">Heading 1</option>
      <option value="h2">Heading 2</option>
      <option value="h3">Heading 3</option>
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