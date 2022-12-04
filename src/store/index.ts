import { createStore, Payload } from "vuex";

const moduleCounter = {
  namespaced: true,
  state: () => ({
    count: 0,
  }),
  getters: {
    count(state: any) {
      return state.count + 1;
    },
    age(state: any, getters: any, rootState: any, rootGetters: any) {
      return getters.count + rootGetters.age;
    },
  },
  mutations: {
    increment(state: any) {
      // `state` はモジュールのローカルステート
      state.count++;
    },
  },
  actions: {
    actionType({ dispatch, commit, getters, rootGetters }, message: any) {
      dispatch("doUpdate", message, { root: true });
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
