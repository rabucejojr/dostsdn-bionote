import StaffModal from '@/components/StaffCard.vue';
import AllStaff from '@/Pages/AllStaff.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'AlLStaff',
    component: AllStaff,
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
