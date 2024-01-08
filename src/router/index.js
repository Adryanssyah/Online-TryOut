import { createRouter, createWebHistory } from 'vue-router'

import { useUserStore } from '@/stores/User'

import sessionCheck from '@/composables/Auth/sessionCheck'
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: () => import('@/views/landingPage.vue'),
      meta: {
        title: 'Try Out Online - CPNS PPPK SNBT'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: 'Login - Try Out Online CPNS PPPK SNBT',
        auth: false,
        authPage: true
      }
    },
    {
      path: '/regis',
      name: 'Regis',
      component: () => import('@/views/Regis.vue'),
      meta: {
        title: 'Daftar - Try Out Online CPNS PPPK SNBT',
        auth: false,
        authPage: true
      }
    },
    {
      path: '/pilih-paket',
      name: 'PackageList',
      component: () => import('@/views/PackageList.vue'),
      meta: {
        title: 'Pilih Paket - Try Out Online CPNS PPPK SNBT',
        auth: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard.vue'),
      meta: {
        title: 'Dashboard - Try Out Online CPNS PPPK SNBT',
        auth: true
      }
    },
    {
      path: '/profil',
      name: 'Profile',
      component: () => import('@/views/Profile.vue'),
      meta: {
        title: 'Profile Pengguna',
        auth: true
      }
    },
    {
      path: '/ujian',
      name: 'Exam',
      component: () => import('@/views/Exam.vue'),
      meta: {
        title: 'Ujian',
        auth: true
      }
    },
    {
      path: '/tipe-paket',
      name: 'AddPackageType',
      component: () => import('@/views/Admin/AddPackageType.vue'),
      meta: {
        title: 'Tipe Paket',
        auth: true
      }
    },
    {
      path: '/tipe-paket/detail/:id',
      name: 'PackageTypeDetail',
      component: () => import('@/views/Admin/PackageTypeDetail.vue'),
      meta: {
        title: 'Detail Tipe Paket',
        auth: true
      },
      props: true
    },
    {
      path: '/paket-tryout',
      name: 'PackageAdmin',
      component: () => import('@/views/Admin/Package.vue'),
      meta: {
        title: 'Paket Try Out',
        auth: true
      }
    },
    {
      path: '/paket-tryout/detail/:id',
      name: 'PackageDetailAdmin',
      component: () => import('@/views/Admin/PackageDetail.vue'),
      meta: {
        title: 'Detail Paket',
        auth: true
      },
      props: true
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const { check } = sessionCheck()

  if (!userStore.initialized) {
    await check()
  }

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
      next({ name: 'Dashboard' })
    }
  }

  if (to.name === 'landingPage') {
    next()
  }
  document.title = `${to.meta.title}`
})

export default router
