<template>
  <div :class="classes">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button 
        type="button"
        class="btn btn-secondary"
        :class="{active: boldActive}"
        @click="e => handleClick(e, 'BOLD')"><Bold /></button>
      <button
        type="button"
        class="btn btn-secondary"
        :class="{active: italicActive}"
        @click="e => handleClick(e, 'ITALIC')"><Italic /></button>
      <button
        type="button"
        class="btn btn-secondary"
        :class="{active: strikethroughActive}"
        @click="e => handleClick(e, 'STRIKETHROUGH')">
        <Strikethrough />
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        :class="{active: underlineActive}"
        @click="e => handleClick(e, 'UNDERLINE')">
        <Underline />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
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
    },
    ...mapState({
      activeActions: state => state.toolbar.activeActions
    })
  },
  methods: {
    handleClick (e, action) {
      this.setActiveActions(action)
      e.target.blur()
    },
    ...mapActions(['setActiveActions'])
  }
};
</script>

<style></style>
