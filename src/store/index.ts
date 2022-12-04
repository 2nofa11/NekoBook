import { createStore, Payload } from "vuex";

const moduleCounter = {
  namespaced: true,
  state: () => ({
    count: 0,
  }),
  getters: {
    count(state: any) {
      return state.count;
    },
  },
  mutations: {
    increment(state: any) {
      // `state` はモジュールのローカルステート
      state.count++;
    },
  },
  action: {
    incrementIfOddOnRootSum({ state, commit, rootState }: any) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit("increment");
      }
    },
  },
};

const moduleMessage = {
  state: () => ({ message: "初期メッセージ" }),
  mutations: {
    setMessage(state: any, payload: any) {
      state.message = payload.message;
    },
  },
  getters: {
    message(state: any) {
      return state.message;
    },
  },
  actions: {
    doUpdate({ commit }: any, message: any) {
      commit("setMessage", { message });
    },
  },
};

export const store = createStore({
  modules: {
    moduleCounter,
    moduleMessage,
  },
});
