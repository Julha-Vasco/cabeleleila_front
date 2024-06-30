import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../components/RegisterForm.vue')
  },
  {
    path: '/novoAgendamento',
    name: 'novoAgendamento',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewAppoitment.vue')
  },
  {
    path: '/meuAgendamento',
    name: 'meuAgendamento',
    component: () => import(/* webpackChunkName: "about" */ '../components/MyAppoitment.vue')
  },
  {
    path: '/editarAgendamento',
    name: 'editarAgendamento',
    component: () => import(/* webpackChunkName: "about" */ '../components/EditAppoitment.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
