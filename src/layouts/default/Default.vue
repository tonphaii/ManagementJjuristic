<template>
  <v-app>
    <AppBar
      :appTitle="appTitle"
      :items="items"
      color="#D8B192"
      :srcImage="sidebarImg"
    />

    <AppView />
    <ScrollTop />

    <AppFooter />
  </v-app>
</template>

<script>
import AppBar from './AppBar.vue'
import AppView from './View.vue'
import AppFooter from './Footer.vue'
import ScrollTop from '@/components/Widget/ScrollTop.vue'

import SidebarImg from '@/assets/images/gun.png'

export default {
  name: 'Default',

  components: {
    AppBar,
    AppView,
    AppFooter,
    ScrollTop,
  },

  data() {
    return {
      appTitle: '',
      appSubTitle: '',
      items: [],
      sidebarImg: SidebarImg,
    }
  },

  mounted() {
    this.appTitle = 'ระบบจัดการนิติบุคคล'
    this.items = [
      // {
      //   title: 'การจัดการข้อมูลนิติบุคคล',
      //   icon: 'mdi-script-text',
      //   // link: "/juristic/create",
      //   children: [
      //     {
      //       title: 'เพิ่มข้อมูลนิติบุคคล/กรรมการ',
      //       icon: 'mdi-script-text',
      //       link: '/juristic/create',
      //     },
      //     {
      //       title: 'แก้ไขข้อมูลนิติบุคคล/กรรมการ',
      //       icon: 'mdi-script-text',
      //       link: '/juristic/edit',
      //     },
      //   ],
      // },
      {
        title: 'เพิ่มข้อมูลนิติบุคคล/กรรมการ',
        icon: 'mdi-file-plus',
        link: '/juristic/create',
      },
      {
        title: 'แก้ไขข้อมูลนิติบุคคล/กรรมการ',
        icon: 'mdi-file-edit',
        link: '/juristic/edit',
      },
    ]
  },
}
</script>
