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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      width: 800,
      height: 600,
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
  },
});
</script>

<style></style>
