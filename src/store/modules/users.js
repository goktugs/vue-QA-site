import appAxios from '@/axios/appAxios';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      appAxios
        .get(`/users?email=${email}&password=${password}`)
        .then(({ status, data: userList }) => {
          console.log(status, userList);
          if (status === 200 && userList?.length === 1) {
            commit('setUser', userList[0]);
            router.push({ name: 'HomeView' });
          }
        });
    },
    register({ commit }, userData) {
      appAxios.post('/users', userData).then(({ data: user }) => {
        commit('setUser', user);

        router.push({ name: 'HomeView' });
      });
    },
  },
  getters: {},
};
