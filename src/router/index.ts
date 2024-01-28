// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'A TASTE OF NEURONS, EXPLORING AI, IT, EMusic',
        component: () => import('@/views/Home.vue'),
      }
    ],
  },

  {
    path: '/About',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'ABOUT',
        component: () => import('@/views/About.vue'),
      }
    ],
  },

  {
    path: '/engHub',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'ENG.HUB',
        component: () => import('@/views/GrammarHub.vue'),
      }
    ],
  },

  {
    path: '/itsurvival',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'I.T. SURVIVAL TIPS',
        component: () => import('@/views/ItSurvival.vue'),
      }
    ],
  },

  {
    path: '/ai',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'A.I.',
        component: () => import('@/views/AI.vue'),
      }
    ],
  },

  {
    path: '/headphone',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: '8BITNAEL.HEADPHONE',
        component: () => import('@/views/Headphone.vue'),
      }
    ],
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
