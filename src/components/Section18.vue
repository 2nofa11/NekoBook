<template>
  <div>{{ localeNum }}円</div>
</template>

<script lang="ts">
import { values } from "lodash";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      price: 30000 as number,
    };
  },
  // vue3で廃止（算出プロパティで置き換えを行う）
  // filters: {
  //   localeNum(val: number) {
  //     return val.toLocaleString;
  //   },
  // },
  computed: {
    localeNum() {
      return this.price.toLocaleString();
    },
  },
});
</script>

<style></style>
