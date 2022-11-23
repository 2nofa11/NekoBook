<template>
  <button @click="handleClick($event)">ここの値</button>
  <input :value="message" @input="handleInput($event)" />
  <div @click.capture="handler('div1')">
    <a href="#top" @click.stop="handler('div2')">div2</a>
    example
  </div>
  <div @click.right.prevent="handler">example</div>
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
    handler(event: any) {
      console.log(event);
    },
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
