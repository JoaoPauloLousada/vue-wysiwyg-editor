<template>
  <div :class="classes">
    <button type="button" class="btn px-0">
      <span class="bg-secondary py-1 rounded text-light">
        <FormatText />
      </span>
      <ArrowDown />
    </button>
  </div>
</template>

<script>
import FormatText from "vue-material-design-icons/FormatColorText.vue";
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