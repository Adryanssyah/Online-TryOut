import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '../views/landingPage.vue'
import Login from '../views/Login.vue'
import Regis from '../views/Regis.vue'
import Dashboard from '../views/Dashboard.vue'
import PacketList from '../views/PacketList.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: landingPage,
      meta: {
        title: 'Try Out Online - CPNS PPPK SNBT'
        // auth: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login - Try Out Online CPNS PPPK SNBT',
        auth: false
      }
    },
    {
      path: '/regis',
      name: 'Regis',
      component: Regis,
      meta: {
        title: 'Daftar - Try Out Online CPNS PPPK SNBT',
        auth: false
      }
    },
    {
      path: '/pilih-paket',
      name: 'PacketList',
      component: PacketList,
      meta: {
        title: 'Pilih Paket - Try Out Online CPNS PPPK SNBT',
        auth: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard - Try Out Online CPNS PPPK SNBT',
        auth: true
      }
    },
    {
      path: '/profil',
      name: 'Profile',
      component: Profile,
      meta: {
        title: 'Profile Pengguna ',
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
