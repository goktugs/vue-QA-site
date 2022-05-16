import { createRouter, createWebHistory } from 'vue-router';
import AppHeader from '@/components/AppShared/AppHeader';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    // component: () => import('@/views/HomeView'),
    components: {
      default: () => import('@/views/HomeView'),
      AppHeader,
    },
  },
  {
    path: '/question/:id',
    name: 'QuestionDetailView',
    // component: () => import('@/views/QuestionDetailView'),
    components: {
      default: () => import('@/views/QuestionDetailView'),
      AppHeader,
    },
  },
  {
    path: '/favorites',
    name: 'FavoritesView',
    meta: { authRequired: true },
    // component: () => import('@/views/User/Authenticated/FavoritesView'),
    components: {
      default: () => import('@/views/User/Authenticated/FavoritesView'),
      AppHeader,
    },
  },
  {
    path: '/my-account',
    name: 'MyAccountView',
    meta: { authRequired: true },
    // component: () => import('@/views/User/Authenticated/MyAccountView'),
    components: {
      default: () => import('@/views/User/Authenticated/MyAccountView'),
      AppHeader,
    },
  },
  {
    path: '/my-question',
    name: 'MyQuestionsView',
    meta: { authRequired: true },
    // component: () => import('@/views/User/Authenticated/MyQuestionsView'),
    components: {
      default: () => import('@/views/User/Authenticated/MyQuestionsView'),
      AppHeader,
    },
  },
  {
    path: '/new-question',
    name: 'NewQuestionView',
    meta: { authRequired: true },
    // component: () => import('@/views/User/Authenticated/NewQuestionView'),
    components: {
      default: () => import('@/views/User/Authenticated/NewQuestionView'),
      AppHeader,
    },
  },
  // No header
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/User/LoginView'),
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('@/views/User/RegisterView'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
