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

const database = [
  { id: 1, name: "商品A", price: 100, content: "商品A情報" },
  { id: 2, name: "商品B", price: 120, content: "商品B情報" },
  { id: 3, name: "商品C", price: 130, content: "商品C情報" },
];

const products = {
  fetch: () => database,
  find: (id: number) =>
    database.find((el) => {
      el.id === id;
    }),
  asyncFind: (id: number) => {
    setTimeout(() => {
      database.find((el) => el.id === id);
    }, 1000);
  },
};

export default defineComponent({
  computed: {
    list: () => products.fetch(),
  },
});
</script>

<style></style>
