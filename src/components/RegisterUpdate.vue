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
  <svg xmlns="https://www.w3.org/2000/svg">
    <ellipse cx="100" cy="75" v-bind:rx="radius" ry="40" fill="lightpink" />
  </svg>
  <p>{{ radius }}</p>
  <input type="range" min="0" max="100" v-model="radius" />
  <div>
    <div v-if="ok" key="if">v-if条件による描画：T</div>
    <div v-else key="else">v-if条件による描画：F</div>
    <div v-show="ok">v-showによる表示</div>
  </div>
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
      radius: 50,
      ok: false as boolean,
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
