<template>
  <div :class="classes">
    <button 
      type="button" 
      class="btn px-0"
      @click="e => handleClick(e, ToolbarTypes.BG_COLOR, setActiveActions)">
      <span class="bg-secondary py-1 rounded text-light">
        <FormatText />
      </span>
      <ArrowDown />
    </button>
  </div>
</template>

<script>
import ToolbarMixin from './ToolbarMixin'
import FormatText from "vue-material-design-icons/FormatColorText.vue";
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