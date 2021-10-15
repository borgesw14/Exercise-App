import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import Workouts_New from '../views/Workouts_New.vue';
import Workouts_History from '../views/Workouts_History.vue';
import Login from '../views/Login.vue'
import Session from '../services/session';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresLogin: true }
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
      path: '/login',
      name: 'Login',
      component: Login
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from, next) => {
  if(to.meta.requiresLogin && !Session.user){
      next('/login');
  }else{
      next();
  }
})

export default router;
