import { createStore, Payload } from "vuex";
import { moduleCounter } from "./moduleCounter";
import { moduleMessage } from "./moduleMessage";
export const store = createStore({
  state() {
    return {
      age: 28,
    };
  },
  getters: {
    age(state: any) {
      return state.age;
    },
  },
  modules: {
    moduleCounter,
    moduleMessage,
  },
});
