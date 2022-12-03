import { createStore } from "vuex";

export const store = createStore({
  state: {
    count: 0,
    message: "初期メッセージ",
  },
  getters: {
    message(state) {
      return state.message;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setMessage(state, payload) {
      state.message = payload.message;
    },
  },
  actions: {
    doUpdate({ commit }, message) {
      commit("setMessage", { message });
    },
  },
});
