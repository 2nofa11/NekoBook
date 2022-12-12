<template>
  <div><SectionEXChild :count="count" @click="catchFromChild" /></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SectionEXChild from "./SectionEXChild.vue";

export default defineComponent({
  components: { SectionEXChild },
  setup() {
    const count = ref<number>(5);
    const catchFromChild = () => {
      alert("子から押された！");
      count.value++;
    };
    return {
      count,
      catchFromChild,
    };
  },
});
</script>

<style></style>
