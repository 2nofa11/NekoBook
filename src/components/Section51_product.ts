const database: Product[] = [
  { id: 1, name: "商品A", price: 100, content: "商品A情報" },
  { id: 2, name: "商品B", price: 120, content: "商品B情報" },
  { id: 3, name: "商品C", price: 130, content: "商品C情報" },
];

export type Product = {
  id: number;
  name: string;
  price: number;
  content: string;
};
export const products = {
  fetch: () => database,
  find: (id: number) =>
    database.find((el) => {
      el.id === id;
    }),
  asyncFind: (id: number, callback: (arg0: Product | undefined) => void) => {
    setTimeout(() => {
      callback(database.find((el) => el.id === id));
    }, 1000);
  },
};
