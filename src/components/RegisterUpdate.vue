<template>{{ msg.length >= 10 ? "t" : "f" }}</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      msg: "hello",
    };
  },
});
</script>
