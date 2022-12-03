<template>
  <div><input type="text" v-model="message" /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  computed: {
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("doUpdate", value);
      },
    },
  },
  methods: {
    doUpdate(event: Event) {
      if (!(event.target instanceof HTMLInputElement)) return;
      this.$store.dispatch("doUpdate", event.target!.value);
    },
  },
});
</script>

<style></style>
