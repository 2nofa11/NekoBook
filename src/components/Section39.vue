<template>カウント{{ scrollY }}a</template>

<script lang="ts">
import { defineComponent } from "vue";
import Vue from "vue";
export default defineComponent({
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state.count);
    this.$store.commit("increment");
    console.log(this.$store.state.count);
  },
  computed: {
    scrollY: function () {
      return this.$data.scrollY;
    },
  },
});
</script>

<style></style>
