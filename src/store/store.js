
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
  a:999,
  isLogin:false
}

const actions={
  setA:({commit})=>commit('setA'),
  Login:({commit})=>commit('Login')
}

const mutations={
  setA(state){
    state.a++;

  },
  Login(state){
    state.isLogin=!state.isLogin;
  }
}

const getters = {
  getA:state=>state.a,
  getLogin:state=>state.isLogin
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})




