<template>
  テスト子：{{ displayCount }}
  <div><button @click="increment">親へ</button></div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { count } = toRefs(props);
    const displayCount = ref(0);
    console.log(count);
    const increment = () => {
      displayCount.value++;
    };
    return {
      displayCount,
      increment,
    };
  },
});
</script>

<style></style>
