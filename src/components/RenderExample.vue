<template>
  <h1 v-if="level === 1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2">
    <slot></slot>
  </h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnchoredHeading",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style></style>
