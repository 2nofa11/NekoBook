<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import AnchoredHeading from "./components/RenderExample.vue";
import Section14 from "./components/Section14.vue";
</script>

<template>
  あ
  <anchored-heading :level="1"
    ><div><p>Hello Vue</p></div>
  </anchored-heading>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
