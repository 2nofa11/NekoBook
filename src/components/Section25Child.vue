<template>
  <input type="text" :value="title" @input="inputEvent" />
  <p>{{ length }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    length: {
      type: Number,
    },
  },
  methods: {
    inputEvent(event: Event) {
      const { target } = event;
      if (!(target instanceof HTMLInputElement)) {
        console.log(target);
        return; // or throw new TypeError();
      }
      this.$emit("update:title", target.value);
    },
  },
});
</script>

<style></style>
