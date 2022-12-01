<template>
  <div class="huga">
    <div><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped>
.huga {
  color: red;
}
</style>
