<template>
  <div class="hoge">hoge</div>
  <Section35Child>slot利用</Section35Child>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Section35Child from "./Section35Child.vue";

export default defineComponent({
  components: { Section35Child },
  data() {
    return {};
  },
});
</script>

<style scoped>
.hoge {
  color: aqua;
}
</style>
