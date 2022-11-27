<template>
  <input value="2" />
  <input v-focus="value" value="1" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return { value: "" };
  },
  directives: {
    focus: {
      mounted: function (el: any) {
        el.focus();
      },
    },
  },
});
</script>

<style></style>
