import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutSection from '../components/AboutSection.vue'
import CoachesSection from '../components/CoachesSection.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import PricesSection from '../components/PricesSection.vue'
import ClassesSection from '../components/ClassesSection.vue'


const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'AboutSection', component: AboutSection },
  { path: '/coaches', name: 'CoachesSection', component: CoachesSection },
  { path: '/schedule', name: 'ScheduleSection', component: ScheduleSection },
  { path: '/classes', name: 'ClassesSection', component: ClassesSection },
  { path: '/prices', name: 'PricesSection', component: PricesSection },
  // { path: '/contacts', name: 'ContactSection', component: ContactSection },

  
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router