import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { store } from "./store/Section39_Store";

const myPlugin = {
  install(Vue: any, option: { lang: string }) {
    console.log(option);
  },
};
const app = createApp(App);
app.use(store);
app.use(myPlugin, { lang: "ja" });
app.mount("#app");
