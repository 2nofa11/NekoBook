<template>カウント</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state.count);
    this.$store.commit("increment");
    console.log(this.$store.state.count);
  },
});
</script>

<style></style>
