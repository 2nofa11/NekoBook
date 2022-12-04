export const moduleMessage = {
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
