import Vue from 'vue'
import App from './App'
import VueMask from 'v-mask'
import router from './router'
import Vuex from 'vuex'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue
  .use(Vuex)
  .use(VueMask)

let store = {
  state:{
    lista: [],
    cidadesMinas: ['Belo Horizonte', 'Ipatinga', 'João Monlevade'],
    cidadesES: ['Vitoria', 'Vila Velha', 'Serra']
  },
  getters:{
    getLista: state => {
      return state.lista
    },
    getCidadesES: state => {
      return state.cidadesES
    },
    getCidadesMinas: state => {
      return state.cidadesMinas
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
