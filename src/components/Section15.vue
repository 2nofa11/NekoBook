<template>
  <header :class="{ compact: scrollY > 1 }">
    1pxよりスクロールしたらcompactを付与
  </header>
  <div />
  <button @click="scrollTop()">上部へ戻る</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import smoothScroll from "smooth-scroll";
const scroll = new smoothScroll();
export default defineComponent({
  data() {
    return {
      scrollY: 0 as number,
      timer: 0 as number,
    };
  },
  created: function () {
    window.addEventListener("scroll", this.handleScroll);
  },
  deforeDestroy: function () {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.timer === 0) {
        console.log("scrollY検知");
        this.timer = setTimeout(() => {
          this.scrollY = window.scrollY;
          clearTimeout(this.timer);
          this.timer = 0;
        }, 200);
      }
    },
    scrollTop() {
      scroll.animateScroll(0);
    },
  },
});
</script>

<style>
.compact {
  color: aqua;
}
div {
  height: 1000px;
}
</style>
