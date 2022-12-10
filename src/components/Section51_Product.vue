<template class="product">
  <div>
    <nav>
      <router-link :to="{ name: 'product-home' }">詳細</router-link>
      <router-link :to="{ name: 'product-review' }">レビュー</router-link>
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style></style>
