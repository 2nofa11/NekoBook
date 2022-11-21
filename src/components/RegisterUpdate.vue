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
  <ul>
    <li
      v-for="(item, index) in list"
      :key="item.id"
      :class="{ strong: item.hp > 300 }"
    >
      ID.{{ item.id }} {{ item.name }} {{ item.hp }}
      <span v-if="item.hp > 300">つおい</span>
      <button @click="deleteItem(index)">削除</button>
    </li>
  </ul>
  <button @click="addMonster">召喚</button>
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
      list: [
        { id: 1, name: "スライム", hp: 100 },
        { id: 2, name: "ゴブリン", hp: 200 },
        { id: 3, name: "ゴブリンX", hp: 2000 },
      ],
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
    addMonster() {
      const max = this.list.reduce((acc, b) => (acc > b.id ? acc : b.id), 0);
      this.list.push({ id: max, hp: 300, name: "hogeごぶ" });
    },
    deleteItem(index: number) {
      this.list.splice(index, 1);
    },
  },
});
</script>

<style>
.is-active {
  color: green;
}
.strong {
  color: red;
}
</style>
