<template>
  <button @click="list.push(list.length + 1)">追加</button>
  <ul ref="list">
    <li v-for="item in list">
      {{ item }}
    </li>
  </ul>
  <input type="text" v-model="inputText" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return { list: [] as number[], inputText: "" };
  },
  watch: {
    list: {
      handler(val) {
        console.log("配列のウォッチャ");
        console.log("通常:", this.$refs.list.offsetHeight);
        this.$nextTick(() => {
          console.log("nextTick:", this.$refs.list.offsetHeight);
        });
      },
      deep: true,
    },
    inputText: function () {
      console.log("普通のウォッチャ");
    },
  },
});
</script>

<style></style>
