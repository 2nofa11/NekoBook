<template>
  <div>Width：{{ width }}</div>
  <div>halfWidth：{{ halfWidth }}</div>
  <hr />
  <div>X：{{ halfPoint.x }}</div>
  <div>Y：{{ halfPoint.y }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      width: 800,
      height: 600,
    };
  },
  computed: {
    halfWidth() {
      return this.width / 2;
    },
    halfHeight() {
      return this.height / 2;
    },
    halfPoint() {
      return {
        x: this.halfWidth,
        y: this.halfHeight,
      };
    },
  },
});
</script>

<style></style>
