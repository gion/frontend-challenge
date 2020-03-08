/* istanbul ignore file */
import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import { getItems } from '../services/getItems'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    error: null,
    items: [],
    selectedItemId: null,
  },
  getters: {
    isLoading: state => state.loading,
    error: state => state.error,
    items: state => state.items,
    selectedItemId: state => state.selectedItemId,
    selectedItem: state => _.find(state.items, { guid: state.selectedItemId }),
  },
  mutations: {
    setLoading(state, loadingState) {
      state.loading = loadingState
    },
    setError(state, error) {
      state.error = error
    },
    selectItem(state, id) {
      state.selectedItemId = id
    },
    setItems(state, items) {
      state.items = items
    },
  },
  actions: {
    async fetchItems({ commit }) {
      commit('setLoading', true)

      try {
        commit('setItems', await getItems())
      } catch (err) {
        commit('setError', err)
      }

      commit('setLoading', false)
    },
  },
  modules: {},
})
