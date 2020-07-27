<template>
  <div class="pt-3 px-3 pb-0 bg-light d-flex flex-wrap">
    <component
      v-for="(Component, index) in visibleComponents"
      :key="index"
      :is="Component"
      classes="mr-2 mb-3"
    />
  </div>
</template>

<script>
import TextDecorator from "./TextDecorator";
import TextAlignment from "./TextAlignment";
import TextColor from "./TextColor";
import TextBgColor from "./TextBgColor";
import Hyperlink from "./Hyperlink";
import TextFormat from "./TextFormat";
import TextFont from "./TextFont";
import TextFontSize from "./TextFontSize";

const visibleComponents = [
  TextDecorator,
  TextAlignment,
  TextColor,
  TextBgColor,
  Hyperlink,
  TextFormat,
  TextFont,
  TextFontSize,
];

export default {
  components: {
    TextDecorator,
    TextAlignment,
    TextColor,
    TextBgColor,
    Hyperlink,
    TextFormat,
    TextFont,
    TextFontSize,
  },
  props: {
    visibleComponents: {
      type: Array,
      default: () => visibleComponents,
    },
  },
};
</script>

<style></style>
