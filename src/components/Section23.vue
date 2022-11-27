<template>
  <p>{{ val }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    val: {
      required: true,
      type: String,
    },
  },
});
</script>

<style></style>
