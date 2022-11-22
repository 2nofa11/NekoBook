<template>
  <p :href="url" v-pre>V-pre {{ message }}</p>
  <p :href="url" v-once>V-once {{ message }}</p>
  <p v-text="message"></p>
  <p v-html="message"></p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "静的な<strong>コンテンツ</strong>",
      url: "",
    };
  },
});
</script>

<style></style>
