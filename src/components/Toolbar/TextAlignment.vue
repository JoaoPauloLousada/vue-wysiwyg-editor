<template>
  <div :class="classes">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary"><AlignLeft /></button>
      <button type="button" class="btn btn-secondary"><AlignCenter /></button>
      <button type="button" class="btn btn-secondary"><AlignRight /></button>
      <button type="button" class="btn btn-secondary"><AlignJustify /></button>
    </div>
  </div>
</template>

<script>
import AlignCenter from "vue-material-design-icons/FormatAlignCenter.vue";
import AlignLeft from "vue-material-design-icons/FormatAlignLeft.vue";
import AlignRight from "vue-material-design-icons/FormatAlignRight.vue";
import AlignJustify from "vue-material-design-icons/FormatAlignJustify.vue";

export default {
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
