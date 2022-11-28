<template>
  <header><slot name="header" text="Hello!">デフォルトタイトル</slot></header>
  <div class="comp-child"><slot>何もない時</slot></div>
  <footer name="footer"></footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style></style>
