<template>
  <div :class="classes">
    <button type="button" class="btn">
      <Link />
    </button>
  </div>
</template>

<script>
import Link from "vue-material-design-icons/Link.vue";

export default {
  components: { Link },
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