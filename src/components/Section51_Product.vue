<template class="product">
  <div>
    <h1>商品情報</h1>
    <p>コンページはID.{{ id }}の詳細を表示する</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  props: {
    id: {
      type: Number,
    },
  },
});
</script>

<style></style>
