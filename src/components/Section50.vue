<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="`/view/${id}`" tag="button">View</RouterLink>
    <RouterLink :to="{ path: '/view/1' }">View1</RouterLink>
    <RouterLink :to="{ path: '/view/2', query: { id } }">View2</RouterLink>
    <RouterLink :to="{ path: '/view/3', params: { id } }">View3</RouterLink>
    <RouterLink :to="{ path: '/hoge', params: { id } }">View4</RouterLink>
  </nav>
  <button @click="change()">push</button>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return { id: "hoge" };
  },
  methods: {
    change() {
      this.$router.push({ path: `/view/${this.id}`, query: { id: "query" } });
    },
  },
});
</script>

<style>
.router-link-active {
  background: red;
}
</style>
