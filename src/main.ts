import { createApp, App } from "vue";
import "./style.css";
import AppVue from "./App.vue";
import { store } from "./store/index";
import { router } from "./router";

const myPlugin = {
  install(Vue: any, option: { lang: string }) {
    console.log(option);
  },
};
const windowPlugin = {
  install(app: App) {
    let data = {
      scrollY: 0,
    };
    window.addEventListener("scroll", function () {
      let timer: number | null = null;
      if (timer === null) {
        timer = this.setTimeout(function () {
          data.scrollY = window.screenY;
          clearTimeout(timer!);
          timer = null;
        }, 200);
      }
      (app.config as any).myProperty = data.scrollY;
      console.log(data.scrollY);
    });
  },
};

router.beforeEach((to, from, next) => {
  console.log("global:beforeEach");
  next();
});

router.beforeResolve((to, form, next) => {
  console.log("global:afterEach");
  next();
});
const app = createApp(AppVue);
app.use(store);
app.use(router);
// app.use(myPlugin, { lang: "ja" });
// app.use(windowPlugin);
app.mount("#app");
