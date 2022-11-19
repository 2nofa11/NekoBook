<template>
  <ol>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      list: ["りんご", "ばなな", "いちご"],
    };
  },
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
