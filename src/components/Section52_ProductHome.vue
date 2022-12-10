<template>
  <div class="product-list">
    <h1>商品情報</h1>
    <p>コンページはID.{{ id }}の詳細を表示する</p>
    <p>商品名：{{ item.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product, products } from "./Section51_product";
export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      item: {} as Product,
    };
  },
  watch: {
    id: {
      handler() {
        products.asyncFind(this.id, (item) => {
          if (item === undefined) return;
          this.item = item;
        });
      },
      immediate: true,
    },
  },
});
</script>

<style></style>
