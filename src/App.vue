<template>
  <div id="app" class="h-100">
    <Board />
  </div>
</template>

<script>
import Board from "./components/Board";

export default {
  name: "App",
  components: { Board },
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";
</style>
