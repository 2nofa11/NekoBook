<template>
  <button @click="handleClick($event)">ここの値</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    handleClick(event: Event) {
      alert(`${(event.target as HTMLButtonElement).innerText}クリックしたよ！`);
    },
  },
});
</script>

<style></style>
