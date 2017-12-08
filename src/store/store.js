
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
  a:999
}

const actions={
  setA:({commit})=>commit('setA')
}

const mutations={
  setA(state){
    state.a++;
  }
}

const getters = {
  getA:state=>state.a
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})




