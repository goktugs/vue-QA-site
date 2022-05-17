import { createStore } from 'vuex';
import categories from '@/store/modules/categories';
import users from '@/store/modules/users';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    initApp({ dispatch }) {
      dispatch('categories/fetchList');
    },
  },
  modules: {
    categories,
    users,
  },
});
