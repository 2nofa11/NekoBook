<template>テスト子：{{ count }}</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    count: Number,
  },
  setup(props) {
    const count = props.count;
    console.log(count);
    return {
      count,
    };
  },
});
</script>

<style></style>
