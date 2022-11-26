<template>
  <div>Width：{{ width }}</div>
  <div>halfWidth：{{ halfWidth }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      width: 800,
    };
  },
  computed: {
    halfWidth() {
      return this.width / 2;
    },
  },
});
</script>

<style></style>
