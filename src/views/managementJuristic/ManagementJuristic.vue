<script>
import PersonalInfoDirector from '../managementJuristic/component_management_juristic/PersonalInfoDirector'
import PersonalInfoJuristic from '../managementJuristic/component_management_juristic/PersonalInfoJuristic'
import Sections from '../../components/widget/Section'
import Residence from '../managementJuristic/component_management_juristic/Residence'
import DataTableDirector from '../managementJuristic/component_management_juristic/DataTableDirector'
// import DataTable from '../managementJuristic/component_management_juristic/Datatable'

import dataConstructor from '../../store/constructor'
// import { reactive } from 'vue'
import ManagementJuristicSearch from '../managementJuristic/component_management_juristic/ManagementJuristicSearch'
import Swal from 'sweetalert2'

import mockData from '../../store/management_juristic.json'

export default {
  data: () => ({
    // queryTab: '1',
    // open: true,
    mockData: mockData,
    headersJuristic: [
      { title: 'ลำดับที่', key: 'no' },
      { title: 'เลขทะเบียนนิติบุคคล', key: 'registration_number' },
      { title: 'ประเภทนิติบุคคล', key: 'juristic_type' },
      { title: 'ชื่อนิติบุคคล', key: 'juristic_name' },
    ],

    headersDirector: [
      { title: 'ลำดับที่', key: 'no' },
      { title: 'ชื่อ', key: 'firstname' },
      { title: 'นามสกุล', key: 'lastname' },
      { title: 'เลขประจำตัวประชาชน', key: 'id_card' },
      { title: 'เลขหนังสือเดินทาง', key: 'juristic_name' },
      { title: 'ประเภทกรรมการ', key: 'director_type' },
    ],

    //สำหรับค้นหา ข้อมูลนิติบุคคล
    select_keyword_search: undefined,
    field_search: '',

    // แสดง data table ตอนค้นหา
    showContent: false,

    tab: null,

    // check action เมื่อกดข้อมูลจาก datatable
    checkActionEdit: false,

    // data
    request: {
      juristicConstructor: new dataConstructor.JuristicConstructor(),
      directorConstructor: new dataConstructor.DirectorConstructor(),
    },
  }),
  components: {
    PersonalInfoDirector,
    Residence,
    PersonalInfoJuristic,
    DataTableDirector,
    Sections,
    ManagementJuristicSearch,
  },
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {}
      },
    },

    checkMode: { type: String, default: 'create-mode' },
  },
  computed: {
    queryTab: {
      // check route เพื่อแสดง tab
      // getter
      get() {
        return this.$route.name === 'juristic-create'
          ? this.$route.query.queryTab
            ? this.$route.query.queryTab
            : 'juristic'
          : 'searching-juristic'
      },
      // setter
      set(value) {
        return value
      },
    },
  },

  methods: {
    async onSaveJuristic() {
      const result = await Swal.fire({
        title: 'ยืนยันการบันทึกข้อมูลนิติบุคคล?',
        text: 'คุณต้องการบันทึกข้อมูลหรือไม่?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'บันทึก',
        cancelButtonText: 'ยกเลิก',
      })

      if (result.isConfirmed) {
        // ดำเนินการบันทึกข้อมูล
        // เช่น เรียก API หรือบันทึกข้อมูลลงในฐานข้อมูล
        Swal.fire('บันทึกแล้ว!', 'ข้อมูลถูกบันทึกแล้ว', 'success')
      } else {
        // ผู้ใช้เลือกยกเลิก
        Swal.fire('ยกเลิก', 'ไม่มีการบันทึกข้อมูล', 'info')
      }
    },

    async onUpdateJuristic() {
      const result = await Swal.fire({
        title: 'ยืนยันการอัพเดตข้อมูลนิติบุคคล?',
        text: 'คุณต้องการอัพเดตข้อมูลหรือไม่?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'อัพเดต',
        cancelButtonText: 'ยกเลิก',
      })

      if (result.isConfirmed) {
        // ดำเนินการบันทึกข้อมูล
        // เช่น เรียก API หรือบันทึกข้อมูลลงในฐานข้อมูล
        Swal.fire('อัพเดตข้อมูลแล้ว!', 'ข้อมูลถูกอัพเดตแล้ว', 'success')
      } else {
        // ผู้ใช้เลือกยกเลิก
        Swal.fire('ยกเลิก', 'ไม่มีการอัพเดตข้อมูลนิติบุคคล', 'info')
      }
    },
    async onDistributeJuristic() {
      this.request.managementJuristicConstuctor
      const result = await Swal.fire({
        title: 'ยืนยันการจำหน่ายข้อมูลนิติบุคคล?',
        text: 'คุณต้องการจำหน่ายข้อมูลนิติบุคคลหรือไม่?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'จำหน่าย',
        cancelButtonText: 'ยกเลิก',
      })

      if (result.isConfirmed) {
        // ดำเนินการบันทึกข้อมูล
        // เช่น เรียก API หรือบันทึกข้อมูลลงในฐานข้อมูล
        Swal.fire('จำหน่ายแล้ว!', 'ข้อมูลถูกจำหน่ายแล้ว', 'success')
      } else {
        // ผู้ใช้เลือกยกเลิก
        Swal.fire('ยกเลิก', 'ไม่มีการจำหน่ายนิติบุคคล', 'info')
      }
    },
    async onClearDataJuristic() {
      const result = await Swal.fire({
        title: 'ยืนยันการล้างข้อมูลข้อมูลนิติบุคคล?',
        text: 'คุณต้องการการล้างข้อมูลนิติบุคคลหรือไม่?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'ยืนยัน',
        cancelButtonText: 'ยกเลิก',
      })

      if (result.isConfirmed) {
        // ดำเนินการบันทึกข้อมูล
        // เช่น เรียก API หรือบันทึกข้อมูลลงในฐานข้อมูล
        Swal.fire('ล้างข้อมูลแล้ว!', 'ข้อมูลถูกล้างเรียบร้อยแล้ว', 'success')
      } else {
        // ผู้ใช้เลือกยกเลิก
        Swal.fire('ยกเลิก', 'ไม่ต้องการล้างข้อมูล', 'info')
      }
    },
    async onSaveDirector() {
      const result = await Swal.fire({
        title: 'ยืนยันการบันทึกข้อมูลกรรมการ?',
        text: 'คุณต้องการบันทึกข้อมูลหรือไม่?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'บันทึก',
        cancelButtonText: 'ยกเลิก',
      })

      if (result.isConfirmed) {
        // ดำเนินการบันทึกข้อมูล
        // เช่น เรียก API หรือบันทึกข้อมูลลงในฐานข้อมูล
        Swal.fire('บันทึกแล้ว!', 'ข้อมูลถูกบันทึกแล้ว', 'success')
      } else {
        // ผู้ใช้เลือกยกเลิก
        Swal.fire('ยกเลิก', 'ไม่มีการบันทึกข้อมูลกรรมการ', 'info')
      }
    },
    onChangeTab(v) {
      this.$router.replace({ query: { queryTab: v } })
    },
    async onUpdateDirector() {
      this.request.managementJuristicConstuctor
      const result = await Swal.fire({
        title: 'ยืนยันการอัพเดตข้อมูลกรรมการ?',
        text: 'คุณต้องการอัพเดตข้อมูลหรือไม่?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'อัพเดต',
        cancelButtonText: 'ยกเลิก',
      })

      if (result.isConfirmed) {
        // ดำเนินการบันทึกข้อมูล
        // เช่น เรียก API หรือบันทึกข้อมูลลงในฐานข้อมูล
        Swal.fire('อัพเดตแล้ว!', 'ข้อมูลถูกอัพเดตแล้ว', 'success')
      } else {
        // ผู้ใช้เลือกยกเลิก
        Swal.fire('ยกเลิก', 'ไม่มีการอัพเดตข้อมูลกรรมการ', 'info')
      }
    },
    async onAddDirector() {
      this.request.managementJuristicConstuctor
      const result = await Swal.fire({
        title: 'ยืนยันการเพิ่มข้อมูลกรรมการ?',
        text: 'คุณต้องการเพิ่มข้อมูลหรือไม่?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'บันทึก',
        cancelButtonText: 'ยกเลิก',
      })

      if (result.isConfirmed) {
        // ดำเนินการบันทึกข้อมูล
        // เช่น เรียก API หรือบันทึกข้อมูลลงในฐานข้อมูล
        Swal.fire('บันทึกแล้ว!', 'ข้อมูลถูกบันทึกแล้ว', 'success')
      } else {
        // ผู้ใช้เลือกยกเลิก
        Swal.fire('ยกเลิก', 'ไม่มีการเพิ่มข้อมูลกรรมการ', 'info')
      }
    },
    async onDeleteDirector() {
      this.request.managementJuristicConstuctor
      const result = await Swal.fire({
        title: 'ยืนยันการลบข้อมูลกรรมการ?',
        text: 'คุณต้องการลบข้อมูลหรือไม่?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'ลบ',
        cancelButtonText: 'ยกเลิก',
      })

      if (result.isConfirmed) {
        // ดำเนินการบันทึกข้อมูล
        // เช่น เรียก API หรือบันทึกข้อมูลลงในฐานข้อมูล
        Swal.fire('ลบแล้ว!', 'ข้อมูลถูกลบแล้ว', 'success')
      } else {
        // ผู้ใช้เลือกยกเลิก
        Swal.fire('ยกเลิก', 'ไม่มีการลบข้อมูลกรรมการ', 'info')
      }
    },
    // onClick(name) {
    //   this.$router.push({ name: name })
    // },
    onSearch() {
      this.showContent = true
    },

    onClickRow(e) {
      // console.log(e.item)
      // this.open = true
      // this.queryTab = 'juristic'
      this.request.juristicConstructor = { ...e.item }
      this.checkActionEdit = true
      this.$router.push({ name: 'juristic-create' })
    },
    onClickRowDataTableDirector(e) {
      console.log(e.item)
      this.request.directorConstructor = { ...e.item }
      this.checkActionEdit = true
      this.$router.push({ name: 'juristic-create' })
    },
  },

  setup() {},
}
</script>
<template>
  <v-container>
    <!-- {{ mockData.mock_data_list }} -->
    <v-tabs v-model="queryTab" grow>
      <v-tab
        @click="onChangeTab('juristic')"
        value="juristic"
        color="#d8b192"
        v-if="$route.name === 'juristic-create'"
      >
        ข้อมูลนิติบุคคล
      </v-tab>
      <v-tab
        @click="onChangeTab('director')"
        value="director"
        color="#d8b192"
        v-if="$route.name === 'juristic-create'"
      >
        ข้อมูลกรรมการ
      </v-tab>
    </v-tabs>

    <v-window v-model="queryTab">
      <v-window-item value="juristic">
        <PersonalInfoJuristic v-model="request.juristicConstructor" />
        <Residence v-model="request.juristicConstructor" />
        <v-footer app color="white">
          <v-spacer></v-spacer>
          <div v-if="checkActionEdit">
            <v-btn
              class="mr-2"
              color="red"
              prepend-icon="mdi-file-document-remove"
              @click="onDistributeJuristic"
              v-if="checkActionEdit"
            >
              จำหน่าย
            </v-btn>
          </div>
          <div v-if="checkActionEdit">
            <v-btn
              color="yellow-darken-1"
              class="mr-2"
              prepend-icon="mdi-file-edit"
              @click="onUpdateJuristic"
            >
              <template v-slot:prepend>
                <v-icon />
              </template>

              ปรับปรุง</v-btn
            >
          </div>
          <div if="!checkActionEdit">
            <v-btn
              color="grey"
              class="mr-2"
              prepend-icon="mdi-refresh"
              @click="onClearDataJuristic"
            >
              ล้างข้อมูล</v-btn
            >
            <v-btn
              color="blue"
              class="mr-2"
              prepend-icon=" mdi-content-save"
              @click="onSaveJuristic"
            >
              บันทึก
            </v-btn>
          </div>
        </v-footer>
      </v-window-item>
      <v-window-item value="director">
        <v-row class="mt-2 ml-2 text-grey-darken-2">
          <Sections header="ข้อมูลกรรมการ" color="#d8b192" icon="mdi-plus" />
        </v-row>
        {{ mockData.mock_data_list_director }}
        <DataTableDirector
          @onClick:row="onClickRowDataTableDirector"
          :disabled="!checkActionEdit"
          :headers="headersDirector"
          :items="mockData.mock_data_list_director"
        />
        <PersonalInfoDirector
          v-model="request.directorConstructor"
          checkMode="create-mode"
          :checkActionEdit="checkActionEdit"
        />
        <Residence v-model="request.directorConstructor" :checkTab="queryTab" />
        <v-footer app color="white">
          <v-spacer></v-spacer>
          <div>
            <div>
              <!-- <v-btn
               
                color="green"
                class="mr-2"
                prepend-icon="mdi-plus"
                @click="onAddDirector"
                :disabled="!checkActionEdit"
              >
                เพิ่มรายการ
              </v-btn> -->

              <v-btn
                color="yellow-darken-1"
                class="mr-2"
                prepend-icon="mdi-file-edit"
                @click="onUpdateDirector"
                v-if="checkActionEdit"
              >
                ปรับปรุง
              </v-btn>
              <v-btn
                color="blue"
                prepend-icon=" mdi-content-save"
                @click="onSaveDirector"
                :disabled="!checkActionEdit"
              >
                บันทึก
              </v-btn>
              <!-- <v-btn
               
                color="red"
                class="ml-2"
                prepend-icon="mdi-delete"
                @click="onDeleteDirector"
                v-if="checkActionEdit"
              >
                ลบ
              </v-btn> -->
            </div>
          </div>
        </v-footer>
      </v-window-item>
    </v-window>
    <ManagementJuristicSearch
      v-if="$route.name === 'juristic-edit'"
      @onClick:row="onClickRow"
      :headers="headersJuristic"
      :items="mockData.mock_data_list"
      :select_keyword_search="select_keyword_search"
      :field_search="field_search"
    />
  </v-container>
</template>
