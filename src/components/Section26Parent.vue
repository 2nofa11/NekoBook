<template v-if="show">
  <button @click="show = !show">show</button>
  <button @click="current = !current">^てなんぞ</button>
  <component v-if="show" :is="component"></component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Section26ChildA from "./Section26ChildA.vue";
import Section26ChildB from "./Section26ChildB.vue";
const mixin = {
  created: function () {
    this.hello();
  },
  methods: {
    hello() {
      console.log("created");
    },
  },
};

export default defineComponent({
  components: { Section26ChildA, Section26ChildB },
  mixins: [mixin],
  data() {
    return {
      current: true,
      show: true,
    };
  },
  computed: {
    component() {
      // console.log(this.componentsType[this.current]);
      return this.current ? "Section26ChildA" : "Section26ChildB";
    },
  },
});
</script>

<style>
.parent-style {
  color: aqua;
}
</style>
