<template>
  <div>Width：{{ width }}</div>
  <div>halfWidth：{{ halfWidth }}</div>
  <hr />
  <div>X：{{ halfPoint.x }}</div>
  <div>Y：{{ halfPoint.y }}</div>
  <hr />
  <input v-model.number="halfWidth" />{{ halfWidth }}
  <hr />
  <!-- 算出プロパティ -->
  <ol>
    <li>{{ computedData }}</li>
    <li>{{ computedData }}</li>
  </ol>
  <!-- メソッド -->
  <ol>
    <li>{{ computedDataMethod() }}</li>
    <li>{{ computedDataMethod() }}</li>
  </ol>
  <hr />
  <ul>
    <input v-model.number="budget" />円以下に絞り込む
    <input v-model.number="limit" />件を表示
    <p>{{ matched.length }}中{{ limited.length }}を表示</p>
    <li v-for="item in limited" key="item.id">
      {{ item.name }}：{{ item.price }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      width: 800,
      height: 600,
      limit: 1,
      budget: 300,
      lists: [
        { id: 1, name: "オレンジ", price: 100 },
        { id: 2, name: "バナナ", price: 200 },
        { id: 3, name: "イチゴ", price: 400 },
        { id: 4, name: "りんご", price: 500 },
        { id: 5, name: "めろん", price: 600 },
      ],
    };
  },
  methods: {
    computedDataMethod() {
      return Math.random();
    },
  },
  computed: {
    halfWidth: {
      get: function () {
        return this.width / 2;
      },
      set: function (val: number) {
        this.width = val * 2;
      },
    },
    halfHeight() {
      return this.height / 2;
    },
    halfPoint() {
      return {
        x: this.halfWidth,
        y: this.halfHeight,
      };
    },
    computedData() {
      return Math.random();
    },
    matched() {
      return this.lists.filter((el) => el.price < this.budget);
    },
    limited() {
      return this.matched.slice(0, this.limit);
    },
  },
});
</script>

<style></style>
