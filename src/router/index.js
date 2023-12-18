import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')

    },
    {
      path: '/eom1',
      name: 'ContentPage',
      component: () => import('../views/ContentPage.vue'),
      children: [
        {
          path: '',
          name: 'Interactive',
          component: () => import('@/components/Interactive.vue'),
        },
        {
          path: '/eom2',
          name: 'Quiz',
          component: () => import('@/components/Quiz.vue')
        },
        {
          path: '/eom3',
          name: 'Test',
          component: () => import('@/components/Test.vue'),
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
