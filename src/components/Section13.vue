<template>
  <button @click="handleClick($event)">ここの値</button>
  <input :value="message" @input="handleInput($event)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "" as string,
    };
  },
  methods: {
    handleClick(event: Event) {
      alert(`${(event.target as HTMLButtonElement).innerText}クリックしたよ！`);
    },
    handleInput(event: Event) {
      const message = (event.target as HTMLInputElement).value;
      if (message === "あああ") {
        this.message = "";
        return alert(message);
      }
      this.message = message;
    },
  },
});
</script>

<style></style>
