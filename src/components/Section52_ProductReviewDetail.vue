<template>
  <div class="product-list">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{ id, name } in list" :key="id">
        <router-link :to="`/product/${id}`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
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
