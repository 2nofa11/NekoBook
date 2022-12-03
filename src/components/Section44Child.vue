<template>
  <div><input type="text" @input="doUpdate" /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    doUpdate(event: Event) {
      if (!(event.target instanceof HTMLInputElement)) return;
      this.$store.dispatch("doUpdate", event.target!.value);
    },
  },
});
</script>

<style></style>
