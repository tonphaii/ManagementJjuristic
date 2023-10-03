// import gunPersonalComponents from './modules/personal'
// import management_juristic from '@/modules/management_juristic'

export default [
  {
    path: '/',
    redirect: '/juristic/create',

    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/juristic/create',
        name: 'juristic-create',
        component: () =>
          import('@/views/managementJuristic/ManagementJuristic.vue'),
      },
      {
        path: '/juristic/edit',
        name: 'juristic-edit',
        component: () =>
          import('@/views/managementJuristic/ManagementJuristic.vue'),
      },
    ],
  },
]
