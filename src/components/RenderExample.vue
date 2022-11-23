<script lang="ts">
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "AnchoredHeading",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render() {
    // return h(
    //   "h" + this.level, //タグ名
    //   {}, //props属性
    //   this.$slots.default // 子供の配列
    // );
    return h("h" + this.level, {}, this.$slots.default());
  },
});
</script>

<style></style>
