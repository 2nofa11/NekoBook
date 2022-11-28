<template>
  <div>
    <p>親</p>
    <input type="text" v-model="titleComputed" />
  </div>
  <div>
    <p>子</p>
    <Section25Child v-model:title="titleComputed"></Section25Child>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Section25Child from "./Section25Child.vue";

export default defineComponent({
  components: {
    Section25Child,
  },
  data() {
    return { titleComputed: "" as string };
  },
});
</script>

<style></style>
