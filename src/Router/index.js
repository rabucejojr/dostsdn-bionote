import StaffCard from '@/components/StaffCard.vue'
import AllStaff from '@/Pages/AllStaff.vue'
import MainDashboard from '@/Pages/MainDashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: MainDashboard,
    children: [
      { path: '', name: 'AllStaff', component: AllStaff },
      { path: ':id', name: 'StaffCard', component: StaffCard },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
