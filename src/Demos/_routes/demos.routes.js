

export const demosRoutes = [
  {
    path: '/demos/global-nav',
    component: () => import('@/Demos/_views/GlobalNavDemo.vue')
  },
  {
    path: '/demos/name/:id',
    component: () => import('@/Demos/_views/Name.vue'),
    props: true
  },
  {
    path: '/demos/users',
    component: () => import('@/Demos/_views/Users.vue')
  },
  {
    path: '/help',
    component: () => import('@/Demos/_views/help/Help.vue')
  },
  {
    path: '/demos/content-tabs',
    component: () => import('@/Demos/_views/content-tabs/Content-Tabs.vue')
  },
  {
    path: '/demos/stepped',
    component: () => import('@/Demos/_views/stepped/Stepped.vue')
  },
  {
    path: '/demos/alerts/growl',
    component: () => import('@/Demos/_views/alerts/Growl.vue')
  },
  {
    path: '/demos/today',
    component: () => import('@/Demos/_views/today/Today.vue')
  },
  {
    path: '/demos/name/:id',
    component: () => import('@/Demos/_views/Name.vue'),
    props: true
  }
]