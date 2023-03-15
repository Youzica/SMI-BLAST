import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/service',
    redirect: '/service/SMI-BLAST',
    children: [
      {
        path: 'SMI-BLAST',
        name: 'SMI-BLAST',
        component: () => import('../views/SMI-BLAST.vue')
      },
      {
        path: 'SMI-HMMER',
        name: 'SMI-HMMER',
        component: () => import('../views/SMI-HMMER.vue')
      },
      {
        path: 'SMI-DELTABLAST',
        name: 'SMI-DELTABLAST',
        component: () => import('../views/SMI-DELTABLAST.vue')
      },
      {
        path: 'SMI-PSIBLASTexB',
        name: 'SMI-PSIBLASTexB',
        component: () => import('../views/SMI-PSIBLASTexB.vue')
      },
      {
        path: 'SMI-PredictCovid-19',
        name: 'SMI-PredictCovid-19',
        component: () => import('../views/PredictCovid-19.vue')
      },
    ]
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('../views/download.vue')
  },
  {
    path: '/citation',
    name: 'Citation',
    component: () => import('../views/citation.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router