<template>
  {{ current }}
  <select v-model="current">
    <option v-for="topic in topics" :value="topic.value">
      {{ topic.name }}
    </option>
  </select>
  <div v-for="item in list" :key="item">{{ item.full_name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      current: "",
      list: [] as any[],
      topics: [
        { value: "vue", name: "Vue.js" },
        { value: "react", name: "React" },
      ],
    };
  },
  watch: {
    current: function (val) {
      let el = this;
      axios
        .get("https://api.github.com/search/repositories", {
          params: { q: "topic:" + val },
        })
        .then(function (response) {
          console.log(response);
          el.list = response.data.items;
        });
    },
  },
});
</script>

<style></style>
