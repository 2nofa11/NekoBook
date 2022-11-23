<template>
  <input type="text" v-model="message" />
  <p>{{ message }}</p>
  <hr />
  <textarea type="text" v-model="message" />
  <pre>{{ message }}</pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "" as string,
    };
  },
});
</script>

<style></style>
