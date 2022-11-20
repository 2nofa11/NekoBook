<template>
  <div>
    <div>{{ judgeLength }}</div>
    <div>{{ msg }}</div>
    <input type="text" :value="msg" />
    <p>{{ count }}</p>
    <button @click="changeColor">カウントを増やす</button>
  </div>
  <div><p :class="classObject">Text</p></div>
  <img v-bind="item" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      msg: "hello" as string,
      count: 0 as number,
      classObject: {
        isActive: false as boolean,
        "is-active": true as boolean,
      },
      item: {
        id: "1",
        src: "../src/assets/vue.svg",
        width: 200,
      },
    };
  },
  computed: {
    judgeLength(): string {
      return this.msg.length >= 10 ? "t" : "f";
    },
  },
  methods: {
    increment() {
      this.count += 1;
    },
    changeColor() {
      this.classObject["is-active"] = !this.classObject["is-active"];
    },
  },
});
</script>

<style>
.is-active {
  color: green;
}
</style>
