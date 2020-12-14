
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PagePatient.vue') },
      { path: '/mood', component: () => import('pages/PageMood.vue') },
      { path: '/signup', component: () => import('pages/PageSignup.vue') },
      { path: '/moodlist', component: () => import('pages/PageMoodList.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
