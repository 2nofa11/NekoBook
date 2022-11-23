<template>
  <button @click="handleClick">クリック</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    handleClick() {
      alert("クリックしたよ！");
    },
  },
});
</script>

<style></style>
