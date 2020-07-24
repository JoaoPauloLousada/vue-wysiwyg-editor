<template>
  <div :class="classes">
    <button type="button" class="btn px-0 py-1">
      <FormatText />
      <ArrowDown />
    </button>
  </div>
</template>

<script>
import FormatText from "vue-material-design-icons/FormatTextVariant.vue";
import ArrowDown from "vue-material-design-icons/ChevronDown.vue";

export default {
  components: {
    FormatText,
    ArrowDown,
  },
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