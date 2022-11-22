<template>
  <p :href="url" v-pre>V-pre {{ message }}</p>
  <p :href="url" v-once>V-once {{ message }}</p>
  <p v-text="message"></p>
  <p v-html="message"></p>
  <div v-cloak class="cloak">{{ message }}</div>
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

<style>
.cloak[v-cloak] {
  opacity: 0;
}
.cloak {
  animation: cloak-in 3s;
}
@keyframes cloak-in {
  0% {
    opacity: 0;
  }
}
</style>
