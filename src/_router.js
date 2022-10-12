import { createRouter, createWebHistory } from 'vue-router';

import { sharedRoutes } from '@/Shared/_routes/shared.routes';
import { demosRoutes } from '@/Demos/_routes/demos.routes';
import { webRoutes } from '@/Web/_routes/web.routes';
import { fpacnowRoutes } from '@/FPACNow/_routes/fpacnow.routes';

const routes = [
  ...sharedRoutes,
  ...demosRoutes,
  ...webRoutes,
  ...fpacnowRoutes,
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/Shared/_views/NotFound.vue')
  }
];

export const router = createRouter({
  history: createWebHistory('/proto/'), // base diretory option now here createWebHistory('/base-directory/'),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
