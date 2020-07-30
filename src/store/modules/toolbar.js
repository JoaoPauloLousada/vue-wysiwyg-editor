import { execDocumentCommand } from '@/services/toolbar'

const toolbarModule = {
  state: {
    activeActions: []
  },
  mutations: {
    updateActiveActions(state, payload) {
      state.activeActions = payload.activeActions;
    }
  },
  actions: {
    async setActiveActions({ commit, state }, {type: action}) {
      execDocumentCommand(action)
      if (state.activeActions.includes(action)) {
        const newActiveActions = state.activeActions.filter(item => item !== action)
        commit('updateActiveActions', {activeActions: newActiveActions});
      } else {
        state.activeActions.push(action)
        commit('updateActiveActions', {activeActions: state.activeActions});
      }
    },
  },
};

export default toolbarModule;