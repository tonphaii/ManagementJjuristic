import Request from '@/views/personal/request/Request.vue'
import Manage from '@/views/personal/manage/Manage.vue'

export default [
  {
    path: '/gun/personal/request',
    name: 'personalRequest',
    component: Request,
    meta: { title: 'ทะเบียนปืน - คำขอปืนบุคคล' }
  },
  {
    path: '/gun/personal/manage',
    name: 'personalManage',
    component: Manage,
    meta: { title: 'ทะเบียนปืน - จัดการคำขอ' }
  },
]
