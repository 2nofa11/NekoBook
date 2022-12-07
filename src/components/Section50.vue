<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="`/view/${id}`" tag="button">View</RouterLink>
  </nav>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return { id: "hoge" };
  },
});
</script>

<style></style>
