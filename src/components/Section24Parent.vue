<template>
  <Section24Child>
    <template v-slot:header>Hello Vue.js</template>
    <div class="parent-style">フォールバックコンテンツ</div>
  </Section24Child>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Section24Child from "./Section24Child.vue";
export default defineComponent({
  components: { Section24Child },
  data() {
    return {};
  },
});
</script>

<style>
.parent-style {
  color: aqua;
}
</style>
