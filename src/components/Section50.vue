<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="`/view/${id}`" tag="button">View</RouterLink>
    <RouterLink :to="{ path: '/view/1' }">View1</RouterLink>
    <RouterLink :to="{ path: '/view/2', query: { id } }">View2</RouterLink>
    <RouterLink :to="{ path: '/view/3', params: { id } }">View3</RouterLink>
    <RouterLink :to="{ name: '', params: { id } }">View4</RouterLink>
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
