<script lang="ts">
import { defineComponent, h, VNode } from "vue";

/** 子供のノードから再帰的にテキストを取得する */
function getChildrenTextContent(children: object[]): string[] {
  return children.map((node: any) => {
    return typeof node.children === "string"
      ? node.children
      : Array.isArray(node.children)
      ? getChildrenTextContent(node.children)
      : "";
  });
}
export default defineComponent({
  name: "AnchoredHeading",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render() {
    // 配列が入った場合は自動的にstringに変換している
    const headingId = getChildrenTextContent(this.$slots.default())
      .join("")
      .toLocaleLowerCase()
      .replace(/\W+/g, "-") // 英数字とアンダースコア以外の文字を-に置換する
      .replace(/(^-|-$)/g, ""); // 頭と末尾の-を取り除く

    return h("h" + this.level, [
      h(
        "a",
        {
          name: headingId,
          href: "#" + headingId,
        },
        this.$slots.default()
      ),
    ]);
  },
});
</script>

<style></style>
