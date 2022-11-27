<template>
  <div class="comp-child"><slot>何もない時</slot></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style></style>
