<template>
  <!-- <div><input type="text" v-model="message" /></div> -->
  <div><input type="text" @input="doUpdate" />{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  computed: { ...mapGetters(["message"]) },
  // message: {
  //   get() {
  //     return this.$store.getters.message;
  //   },
  //   set(value) {
  //     this.$store.dispatch("doUpdate", value);
  //   },
  // },

  methods: {
    doUpdate(event: Event) {
      if (!(event.target instanceof HTMLInputElement)) return;
      this.$store.dispatch("doUpdate", event.target!.value);
    },
  },
});
</script>

<style></style>
