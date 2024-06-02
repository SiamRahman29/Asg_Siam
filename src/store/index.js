import { createStore } from 'vuex';

export default createStore({
  state: {
    profile: {
      name: 'Siam Rahman',
      courseYear: '3 SECJH',
      matrixNo: 'A21MJ0143',
      address: 'KSJ, Kuala Lumpur, Malaysia.'
    }
  },
  mutations: {
    updateProfile(state, payload) {
      state.profile = { ...state.profile, ...payload };
    }
  },
  actions: {
    updateProfile({ commit }, payload) {
      commit('updateProfile', payload);
    }
  },
  getters: {
    profile: state => state.profile
  }
});
