<template>
  <input type="text" v-model="message" />
  <p>{{ message }}</p>
  <hr />
  <textarea type="text" v-model="message" />
  <pre>{{ message }}</pre>
  <hr />
  <label> <input type="checkbox" v-model="value" />{{ value }} </label>
  <br />
  <div>
    <label> <input type="checkbox" v-model="val" value="A" />A </label>
    <label> <input type="checkbox" v-model="val" value="B" />B </label>
    <label> <input type="checkbox" v-model="val" value="C" />C </label>
    {{ val }}
  </div>
  <div>
    <label> <input type="radio" v-model="radioVal" value="a" />A </label>
    <label> <input type="radio" v-model="radioVal" value="b" />B </label>
    <label> <input type="radio" v-model="radioVal" value="c" />C </label>
    {{ radioVal }}
  </div>
  <select v-model="selectVal" multiple>
    <option disabled="false">選択</option>
    <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option>
  </select>
  {{ selectVal }}
  <hr />
  <div>
    <input type="file" @change="handleChange" />
    <div v-if="preview">!<img :src="preview" /></div>
  </div>
  <hr />
  <input type="range" v-model.number="html5Val" />{{ html5Val }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "" as string,
      value: true as boolean,
      val: [] as string[],
      radioVal: "" as string,
      selectVal: [] as string[],
      preview: "" as string,
      html5Val: 0 as number,
    };
  },
  methods: {
    handleChange(e: Event) {
      if (e.target instanceof HTMLInputElement && e.target.files) {
        const file = e.target.files[0];
        if (!file.type.match(/^image\/(png|jpeg)$/)) return;
        this.preview = window.URL.createObjectURL(file);
      }
    },
  },
});
</script>

<style></style>
