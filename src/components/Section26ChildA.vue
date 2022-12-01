<template>
  <div>A</div>
  <div><textarea v-model="msg"></textarea></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      msg: "",
    };
  },
});
</script>

<style></style>
