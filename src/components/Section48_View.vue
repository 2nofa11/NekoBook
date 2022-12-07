<template>
  <div>View</div>
  <div>{{ routerPath }}</div>
  <div>{{ routerParam }}</div>
  <div>{{ routerQuery }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  computed: {
    routerPath() {
      return this.$route.path;
    },
    routerParam() {
      return this.$route.params.id;
    },
    routerQuery() {
      return this.$route.query;
    },
  },
});
</script>

<style></style>
