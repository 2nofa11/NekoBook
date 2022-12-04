<template>
  <div>カウント{{ storeData }}：{{ age }}</div>
  <div>{{ message }}</div>
  <Section44Child></Section44Child>
  <button @click="output">output</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
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
    age() {
      return this.$store.getters["moduleCounter/age"];
    },
  },
  methods: {
    ...mapActions({ actionType: "moduleCounter/actionType" }),
    output() {
      this.actionType("korekore");
    },
  },
});
</script>

<style></style>
