<template>
  <div class="p-3 bg-light d-flex flex-wrap">
    <TextDecorator classes="mr-2" />
    <TextAlignment classes="mr-2" />
    <TextColor classes="mr-2" />
    <TextBgColor classes="mr-2" />
    <Hyperlink classes="mr-2" />
    <TextFormat classes="mr-2" />
    <TextFont classes="mr-2" />
    <TextFontSize classes="mr-2" />
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
};
</script>

<style></style>
