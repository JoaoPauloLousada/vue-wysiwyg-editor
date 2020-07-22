<template>
  <div>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary"><AlignLeft /></button>
      <button type="button" class="btn btn-secondary"><AlignCenter /></button>
      <button type="button" class="btn btn-secondary"><AlignRight /></button>
    </div>
  </div>
</template>

<script>
import AlignCenter from "vue-material-design-icons/FormatAlignCenter.vue";
import AlignLeft from "vue-material-design-icons/FormatAlignLeft.vue";
import AlignRight from "vue-material-design-icons/FormatAlignRight.vue";

export default {
  components: {
    AlignCenter,
    AlignLeft,
    AlignRight,
  },
};
</script>

<style></style>
