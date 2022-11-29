<template>
  <li>
    {{ val }} 君<section-23-child
      @child-event="parentsMethod($event, parentsData)"
    />
  </li>
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
  data() {
    return {
      parentsData: "君",
    };
  },
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
    parentsMethod(childArg: any, data: string) {
      alert(`${childArg.name}：${this.val}${data}が押された。`);
    },
  },
});
</script>

<style></style>
