<template>
  <ol>
    <li v-for="item in list" :key="item">{{ item }}</li>
    <button @click="handleClick">Click</button>
    <p>{{ message }}</p>
    <input v-model="message" />
  </ol>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      list: ["りんご", "ばなな", "いちご"] as string[],
      message: "" as string,
    };
  },
  methods: {
    handleClick() {
      alert(event?.target);
    },
  },
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
