import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue')
    },
    {
        path: '/manys',
        name: 'Manys',
        component: () => import(/* webpackChunkName: "Manys" */ '../views/Manys.vue')
    },
    {
        path: '/config',
        name: 'Config',
        component: () => import(/* webpackChunkName: "Config" */ '../views/Config.vue')
    },
    {
        path: '/command',
        name: 'Command',
        component: () => import(/* webpackChunkName: "Command" */ '../views/Command.vue')
    },
    {
        path: '/env',
        name: 'Env',
        component: () => import(/* webpackChunkName: "Env" */ '../views/Env.vue')
    },
    
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
