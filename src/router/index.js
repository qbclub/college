import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')

    },
    {
      path: '/content',
      name: 'ContentPage',
      component: () => import('../views/ContentPage.vue'),
      children: [
        {
          path: '',
          name: 'Video',
          component: () => import('@/components/Video.vue'),
        },
        {
          path: '/test',
          name: 'Test',
          component: () => import('@/components/Test.vue'),
        },
        {
          path: '/quiz',
          name: 'Quiz',
          component: () => import('@/components/Quiz.vue')
        },
      ]

    },

  ]
})

export default router
