import Vue from 'vue'
import Router from 'vue-router'
import Listar from '@/pages/Listar'
import Cadastro from '@/pages/Cadastro'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Listar',
      component: Listar
    },
    {
      path: '/cadastrar',
      name: 'Cadastro',
      component: Cadastro
    }
  ]
})

export default router;