import StaffModal from '@/components/StaffCard.vue';
import MainDashboard from '@/Pages/MainDashboard.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'MainDashboard',
    component: MainDashboard,
  },
  {
    path: '/:id',
    name: 'StaffModal',
    component: StaffModal,
    props: true // Pass route params as props
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
