<template>
  <div>View</div>
  <div>{{ routerPath }}</div>
  <div>{{ routerParam }}</div>
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
      return this.$route.params;
    },
  },
});
</script>

<style></style>
