<template>
  テスト子：{{ count }}
  <div><button @click="increment">親へ</button></div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, defineEmits } from "vue";
export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  emits: ["click"],
  setup(props, context) {
    const { count } = toRefs(props);
    const increment = () => {
      context.emit("click");
    };
    return {
      count,
      increment,
    };
  },
});
</script>

<style></style>
