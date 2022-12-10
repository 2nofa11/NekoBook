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
  beforeRouteEnter(to, from, next) {
    console.log("component:beforeRouteEnter", this);
    next();
  },
});
</script>

<style></style>
