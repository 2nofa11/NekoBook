<template>
  <div class="product-list">
    <h1>商品情報</h1>
    <p>コンページはID.{{ param }}の詳細を表示する</p>
    <p>商品名：{{ item.name }}</p>
  </div>
  <button @click="nextItem">次へ</button>
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
      param: this.id,
    };
  },
  methods: {
    nextItem() {
      this.param += this.param;
      this.$router.push(`/product/${this.param}`);
    },
  },
  watch: {
    param: {
      handler() {
        products.asyncFind(this.param, (item) => {
          if (item === undefined) return;
          this.item = item;
        });
      },
      immediate: true,
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log("component:beforeRouteUpdate", this);
    next();
  },
});
</script>

<style></style>
