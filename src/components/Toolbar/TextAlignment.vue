<template>
  <div :class="classes">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button 
        type="button"
        class="btn btn-secondary"
        :class="{active: alignLeftActive}"
        @click="e => handleClick(e, 'ALIGN_LEFT', setActiveActions)"
      ><AlignLeft /></button>
      <button 
        type="button" 
        class="btn btn-secondary"
        :class="{active: alignCenterActive}"
        @click="e => handleClick(e, 'ALIGN_CENTER', setActiveActions)"
      ><AlignCenter /></button>
      <button 
        type="button" 
        class="btn btn-secondary"
        :class="{active: alignRightActive}"
        @click="e => handleClick(e, 'ALIGN_RIGHT', setActiveActions)"
      ><AlignRight /></button>
      <button 
        type="button" 
        class="btn btn-secondary"
        :class="{active: alignJustifyActive}"
        @click="e => handleClick(e, 'ALIGN_JUSTIFY', setActiveActions)"
      ><AlignJustify /></button>
    </div>
  </div>
</template>

<script>
import ToolbarMixin from './ToolbarMixin'
import AlignCenter from "vue-material-design-icons/FormatAlignCenter.vue";
import AlignLeft from "vue-material-design-icons/FormatAlignLeft.vue";
import AlignRight from "vue-material-design-icons/FormatAlignRight.vue";
import AlignJustify from "vue-material-design-icons/FormatAlignJustify.vue";

export default {
  mixins: [ToolbarMixin],
  components: {
    AlignCenter,
    AlignLeft,
    AlignRight,
    AlignJustify  
  },
  props: {
    classes: {
      types: String,
      default: ''
    }
  }
};
</script>

<style></style>
