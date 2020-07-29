import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

let store = {
  state:{
    lista: []
  },
  getters:{
    getLista: state => {
      return state.lista
    }
  },
  mutations:{
    setLista(state, n){
      state.lista.push(n)
    }
  }
}

new Vue({
  render: h => h(App),
  store: new Vuex.Store(store),
  router,
}).$mount('#app')
