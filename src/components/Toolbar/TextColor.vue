<template>
  <div :class="classes">
    <button 
      type="button" 
      class="btn px-0 py-1"
      @click="e => handleClick(e, ToolbarTypes.TEXT_COLOR, setActiveActions)">
      <FormatText />
      <ArrowDown />
    </button>
  </div>
</template>

<script>
import ToolbarMixin from './ToolbarMixin'
import FormatText from "vue-material-design-icons/FormatTextVariant.vue";
import ArrowDown from "vue-material-design-icons/ChevronDown.vue";

export default {
  mixins: [ToolbarMixin],
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