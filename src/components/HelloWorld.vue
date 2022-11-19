<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      msg: "bar",
    };
  },
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
