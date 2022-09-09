import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('./views/Settings.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to: any, _from: any, savedPosition: any) {
    return savedPosition || { left: 0, top: 0  };
  }
});

export default router;

