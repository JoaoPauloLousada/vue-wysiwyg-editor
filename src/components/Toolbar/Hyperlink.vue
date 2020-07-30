<template>
  <div :class="classes">
    <button 
      type="button" 
      class="btn"
      @click="e => handleClick(e, ToolbarTypes.HYPERLINK, setActiveActions)">
      <Link />
    </button>
  </div>
</template>

<script>
import ToolbarMixin from './ToolbarMixin'
import Link from "vue-material-design-icons/Link.vue";

export default {
  mixins: [ToolbarMixin],
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