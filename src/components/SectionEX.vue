<template>
  <div><SectionEXChild :count="count" /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionEXChild from "./SectionEXChild.vue";

export default defineComponent({
  components: { SectionEXChild },
  data() {
    return {
      count: 0,
    };
  },
});
</script>

<style></style>
