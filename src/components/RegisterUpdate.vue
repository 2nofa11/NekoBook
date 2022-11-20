<template>
  <div>
    <div>{{ judgeLength }}</div>
    <div>{{ msg }}</div>
    <input type="text" :value="msg" />
    <p>{{ count }}</p>
    <button @click="increment">カウントを増やす</button>
  </div>
  <div><p :class="{ 'is-active': isActive }" class="is-active">Text</p></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      msg: "hello" as string,
      count: 0 as number,
      isActive: false as boolean,
      isChild: true as boolean,
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
  },
});
</script>

<style>
.is-active {
  color: aqua;
}
</style>
