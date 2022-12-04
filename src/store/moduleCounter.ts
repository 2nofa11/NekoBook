export const moduleCounter = {
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
