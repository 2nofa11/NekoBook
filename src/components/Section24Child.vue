<template>
  <header><slot name="header">デフォルトタイトル</slot></header>
  <div class="comp-child"><slot>何もない時</slot></div>
  <footer>デフォルトフッター</footer>
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
