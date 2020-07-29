<template>
  <div :class="classes">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button 
        type="button"
        class="btn btn-secondary"
        :class="{active: boldActive}"
        @click="e => handleClick(e, 'BOLD', setActiveActions)"><Bold /></button>
      <button
        type="button"
        class="btn btn-secondary"
        :class="{active: italicActive}"
        @click="e => handleClick(e, 'ITALIC', setActiveActions)"><Italic /></button>
      <button
        type="button"
        class="btn btn-secondary"
        :class="{active: strikethroughActive}"
        @click="e => handleClick(e, 'STRIKETHROUGH', setActiveActions)">
        <Strikethrough />
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        :class="{active: underlineActive}"
        @click="e => handleClick(e, 'UNDERLINE', setActiveActions)">
        <Underline />
      </button>
    </div>
  </div>
</template>

<script>
import ToolbarMixin from './ToolbarMixin'
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
  mixins: [ToolbarMixin],
  props: {
    classes: {
      types: String,
      default: ''
    }
  },
  computed: {
    boldActive () {
      return this.activeActions.includes('BOLD')
    },
    italicActive () {
      return this.activeActions.includes('ITALIC')
    },
    strikethroughActive () {
      return this.activeActions.includes('STRIKETHROUGH')
    },
    underlineActive () {
      return this.activeActions.includes('UNDERLINE')
    }
  }
};
</script>

<style></style>
