<template>
  <div>カウント{{ storeData }}</div>
  <div>{{ message }}</div>
  <Section44Child></Section44Child>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Section44Child from "./Section44Child.vue";
export default defineComponent({
  components: { Section44Child },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.getters["moduleCounter/count"]);
    this.$store.commit("moduleCounter/increment");
    console.log(this.$store.getters["moduleCounter/count"]);
  },
  computed: {
    storeData: function () {
      return this.$store.getters["moduleCounter/count"];
    },
    message() {
      return this.$store.getters.message;
    },
  },
});
</script>

<style></style>
