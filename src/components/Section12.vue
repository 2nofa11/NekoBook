<template>
  <p :href="url" v-pre>V-pre {{ message }}</p>
  <p :href="url" v-once>V-once {{ message }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "静的なコンテンツ",
      url: "",
    };
  },
});
</script>

<style></style>
