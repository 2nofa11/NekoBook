<template>
  <div>
    <p>親</p>
    <input type="text" v-model="titleComputed" />
  </div>
  <div>
    <p>子</p>
    <section-25-child
      v-model:title="titleComputed"
      v-model:length="titleComputed.length"
    ></section-25-child>
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
