import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import { userService } from "@/domain/services/User.service";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.path !== '/auth' && to.path !== 'auth') && !userService.userIsLogged()) {
    next({ path: '/auth' })
  } else if ((to.path === '/auth' || to.path === 'auth') && userService.userIsLogged()) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
