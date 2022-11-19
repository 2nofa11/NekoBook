<template>{{ const = "aaa" + msg }}</template>

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
