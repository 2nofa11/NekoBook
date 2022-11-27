<template>
  <li>{{ val }}</li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type PropObj = {
  name: string;
  age: number;
};
export default defineComponent({
  props: {
    val: {
      required: true,
      type: String,
    },
    object: {
      type: Object as PropType<PropObj>,
    },
  },
});
</script>

<style></style>
