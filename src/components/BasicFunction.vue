<template>
  <ol>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ol>
  <button @click="handleClick">Click</button>
  <p>{{ typeof message }}</p>
  <input v-model.number="message" />
  <transition class="parent">
    <p v-if="show" class="child">Hello Vue.js</p>
    <p v-else class="child">Hide</p>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      list: ["りんご", "ばなな", "いちご"] as string[],
      message: "" as string,
      show: true,
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
      // alert(event?.target);
    },
  },
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.child {
  position: absolute;
}
</style>
