<template>
  <input type="text" v-model="message" />
  <p>{{ message }}</p>
  <hr />
  <textarea type="text" v-model="message" />
  <pre>{{ message }}</pre>
  <hr />
  <label> <input type="checkbox" v-model="value" />{{ value }} </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "" as string,
      value: true as boolean,
    };
  },
});
</script>

<style></style>
