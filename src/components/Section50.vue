<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/view">View</RouterLink>
  </nav>
  <RouterView />
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
