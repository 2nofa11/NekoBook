<template>
  <button @click="handleClick">イベント発火</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    handleClick() {
      this.$emit("child-event");
    },
  },
});
</script>

<style></style>
