import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { userService } from "@/domain/services/User.service";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.path !== '/login' && to.path !== 'login') && !userService.userIsLogged()) {
    next({ path: '/login' })
  } else if ((to.path === '/login' || to.path === 'login') && userService.userIsLogged()) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
