<template>
  <div class="container h-100 p-5">
    <div class="row h-100">
      <div class="col">
        <div class="border rounded h-100 d-flex flex-column">
          <Toolbar />
          <TextArea />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "./Toolbar";
import TextArea from './TextArea'

export default {
  components: { Toolbar, TextArea },
};
</script>

<style></style>
