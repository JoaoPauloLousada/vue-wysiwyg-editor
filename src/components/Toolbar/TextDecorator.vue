<template>
  <div>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary"><Bold /></button>
      <button type="button" class="btn btn-secondary"><Italic /></button>
      <button type="button" class="btn btn-secondary">
        <Strikethrough />
      </button>
      <button type="button" class="btn btn-secondary">
        <Underline />
      </button>
    </div>
  </div>
</template>

<script>
import Bold from "vue-material-design-icons/FormatBold.vue";
import Italic from "vue-material-design-icons/FormatItalic.vue";
import Strikethrough from "vue-material-design-icons/FormatStrikethroughVariant.vue";
import Underline from "vue-material-design-icons/FormatUnderline.vue";

export default {
  components: {
    Bold,
    Italic,
    Strikethrough,
    Underline,
  },
};
</script>

<style></style>
