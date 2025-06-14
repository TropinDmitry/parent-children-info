import { createStore } from 'vuex';
import { ParentState, Child } from './types';
import { v4 } from 'uuid';

export default createStore<ParentState>({
  state: {
    fullName: '' as string,
    age: 0 as number,
    children: [] as Child[]
  },
  mutations: {
    setParentInfo(state, payload: { fullName: string; age: number }) {
      state.fullName = payload.fullName;
      state.age = payload.age;
    },
    addChild(state, child: Omit<Child, 'id'>) {
      state.children.push({
        id: v4(),
        ...child
      });
    },
    removeChild(state, id: string) {
      state.children = state.children.filter(child => child.id !== id);
    },
    updateChild(state, payload: Child) {
      const index = state.children.findIndex(c => c.id === payload.id);
      if (index !== -1) {
        state.children[index] = payload;
      }
    },
    clearData(state) {
      state.fullName = '';
      state.age = 0;
      state.children = [];
    }
  },
  actions: {
    saveParentInfo({ commit }, payload: { fullName: string; age: number }) {
      commit('setParentInfo', payload);
    },
    addNewChild({ commit }, child: Omit<Child, 'id'>) {
      commit('addChild', child);
    },
    deleteChild({ commit }, id: number) {
      commit('removeChild', id);
    },
    updateChild({ commit }, child: Child) {
      commit('updateChild', child);
    },
    resetForm({ commit }) {
      commit('clearData');
    }
  },
  getters: {
    canAddMoreChildren: state => { 
      return state.children.length < 5
    },
    childrenCount: state => {
      return state.children.length
    }
  }
});