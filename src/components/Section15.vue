<template>
  <header :class="{ compact: scrollY > 1 }">
    1pxよりスクロールしたらcompactを付与
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
  },
});
</script>

<style>
.compact {
  color: aqua;
}
</style>
