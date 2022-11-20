<template>{{ judgeLength }}</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      msg: "hello",
    };
  },
  computed: {
    judgeLength(): string {
      return this.msg.length >= 10 ? "t" : "f";
    },
  },
});
</script>
