import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '@/views/landingPage.vue'
import Login from '@/views/Login.vue'
import Regis from '@/views/Regis.vue'
import Dashboard from '@/views/Dashboard.vue'
import PackageList from '@/views/PackageList.vue'
import Profile from '@/views/Profile.vue'
import Exam from '@/views/Exam.vue'
//
import AddPackageType from '@/views/Admin/AddPackageType.vue'
import PackageTypeDetail from '@/views/Admin/PackageTypeDetail.vue'

import { useUserStore } from '@/stores/User'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: landingPage,
      meta: {
        title: 'Try Out Online - CPNS PPPK SNBT'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login - Try Out Online CPNS PPPK SNBT',
        auth: false,
        authPage: true
      }
    },
    {
      path: '/regis',
      name: 'Regis',
      component: Regis,
      meta: {
        title: 'Daftar - Try Out Online CPNS PPPK SNBT',
        auth: false,
        authPage: true
      }
    },
    {
      path: '/pilih-paket',
      name: 'PackageList',
      component: PackageList,
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
        title: 'Profile Pengguna',
        auth: true
      }
    },
    {
      path: '/ujian',
      name: 'Exam',
      component: Exam,
      meta: {
        title: 'Ujian',
        auth: true
      }
    },
    {
      path: '/tipe-paket',
      name: 'AddPackageType',
      component: AddPackageType,
      meta: {
        title: 'Tipe Paket',
        auth: true
      }
    },
    {
      path: '/tipe-paket/detail/:id',
      name: 'PackageTypeDetail',
      component: PackageTypeDetail,
      meta: {
        title: 'Detail Tipe Paket',
        auth: true
      },
      props: true
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.auth) {
    if (userStore.isAuthenticated) {
      next()
    } else {
      next({
        name: 'Login'
      })
    }
  }

  if (to.meta.authPage) {
    if (!userStore.isAuthenticated) {
      next()
    } else {
      next(from)
    }
  }

  if (to.name === 'landingPage') {
    next()
  }
  document.title = `${to.meta.title}`
})

export default router
