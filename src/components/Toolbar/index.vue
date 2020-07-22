<template>
  <div class="p-3 bg-light d-flex">
    <div class="mr-2">
      <TextDecorator />
    </div>
    <div>
      <TextAlignment />
    </div>
  </div>
</template>

<script>
import TextDecorator from "./TextDecorator";
import TextAlignment from "./TextAlignment";

export default {
  components: { TextDecorator, TextAlignment },
};
</script>

<style></style>
