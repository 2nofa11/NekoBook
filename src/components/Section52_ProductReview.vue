<template>
  <div class="product-list">レビュー</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { products } from "./Section51_product";
export default defineComponent({
  computed: {
    list: () => products.fetch(),
  },
});
</script>

<style></style>
