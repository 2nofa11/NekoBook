<template>
  <li>{{ val }} 君<Section23Child @child-event="parentsMethod" /></li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Section23Child from "./Section23Child.vue";
type PropObj = {
  name: string;
  age: number;
};
export default defineComponent({
  components: { Section23Child },
  props: {
    val: {
      required: true,
      type: String,
    },
    object: {
      type: Object as PropType<PropObj>,
    },
  },
  methods: {
    parentsMethod() {
      alert(`${this.val}が押された。`);
    },
  },
});
</script>

<style></style>
