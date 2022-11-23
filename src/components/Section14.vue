<template>
  <input type="text" v-model="message" />
  <p>{{ message }}</p>
  <hr />
  <textarea type="text" v-model="message" />
  <pre>{{ message }}</pre>
  <hr />
  <label> <input type="checkbox" v-model="value" />{{ value }} </label>
  <br />
  <div>
    <label> <input type="checkbox" v-model="val" value="A" />A </label>
    <label> <input type="checkbox" v-model="val" value="B" />B </label>
    <label> <input type="checkbox" v-model="val" value="C" />C </label>
    {{ val }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "" as string,
      value: true as boolean,
      val: [] as string[],
    };
  },
});
</script>

<style></style>
