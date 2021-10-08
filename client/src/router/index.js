import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import Workouts_New from '../views/Workouts_New';
import Workouts_History from '../views/Workouts_History';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/workouts_history',
    name: 'Workout History',
    component: Workouts_History
  },
  {
    path: '/workouts_new',
    name: 'New Workout',
    component: Workouts_New
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
