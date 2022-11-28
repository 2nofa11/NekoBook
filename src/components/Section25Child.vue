<template>
  <input type="text" :value="title" @input="$emit($event.target.value)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },
});
</script>

<style></style>
