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
          name: 'Interactive',
          component: () => import('@/components/Interactive.vue'),
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

  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } {
      return { top: 400 }
    }
  },
})


function hasQueryParams(route) {
  return !!Object.keys(route.query).length
}

router.beforeEach((to, from, next) => {
   if(!hasQueryParams(to) && hasQueryParams(from)){
    next({ name: to.name, query: from.query })
  } else {
    next()
  }
})

export default router
