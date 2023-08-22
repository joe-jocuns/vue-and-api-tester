// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // Your cached data goes here
    savedCards: [],
  },
  mutations: {
    // Mutations to modify the state
    addCardToSaved(state, card) {
      state.savedCards.unshift(card);
    },
  },
  actions: {
    // Actions to commit mutations
    updateUserData({ commit }, data) {
      commit('setUserData', data);
    },
  },
  getters: {
    // Getters to access cached data
    getUserData(state) {
      return state.savedCards;
    },
  },
});

export default store;
