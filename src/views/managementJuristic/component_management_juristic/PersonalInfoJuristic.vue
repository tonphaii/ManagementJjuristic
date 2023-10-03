<script>
import { reactive } from 'vue'
import ValidationForm from '../../../validation/index'
import VueMask from 'vue-the-mask'
// import { useRoute, useRouter } from 'vue-router'
import Sections from '../../../components/widget/Section'
export default {
  data: () => ({}),
  components: {
    //
    Sections,
  },
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {
          registration_number: '', //เลขทะเบียน
          juristic_type: '', //ประเภทนิติบุคคล
          juristic_name: '',
          registration_location: '', //สถานที่ทำการ
          date_todo: '', //วันที่ทำรายการ

          email: '',
          tax_id: '', //เลขประจำตัวผู้เสียภาษีอากรของผู้อนุญาต
        }
      },
    },
    checkTab: { type: String, default: 'juristic' },
  },

  methods: {},

  computed: {
    localValue: {
      get() {
        return reactive(this.modelValue)
      },
      set(value) {
        return value
      },
    },
  },

  setup(props) {
    const v = ValidationForm()

    return {
      v,
    }
  },
  directives: {
    mask: VueMask.directive,
  },
}
</script>

<template>
  <v-row class="mt-2 ml-2 text-grey-darken-2" v-show="checkTab !== 'director'">
    <Sections header="ข้อมูลนิติบุคคล" color="#d8b192" icon="mdi-plus" />
  </v-row>
  <v-row>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-text-field
        variant="outlined"
        label="ทะเบียนเลขที่"
        placeholder="ทะเบียนเลขที่"
        persistent-placeholder
        density="compact"
        type="text"
        clearable
        hide-details
        :rules="[v.requiredInput]"
        v-model="localValue.registration_number"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-btn color="grey"  hide-details>
        เชื่อมโยงข้อมูล กรมพัฒนาธุรกิจการค้า
      </v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-autocomplete
        placeholder="--เลือก--"
        persistent-placeholder
        density="compact"
        variant="outlined"
        hide-details
        label="ประเภทนิติบุคคล"
        :items="['บริษัทจำกัด', 'ห้างหุ้นส่วนจำกัด', 'C']"
        v-model="localValue.juristic_type"
        :rules="[v.requiredInput]"
      ></v-autocomplete> </v-col
    ><v-col cols="3" sm="12" md="12" lg="3">
      <v-text-field
        variant="outlined"
        label="ชื่อนิติบุคคล"
        placeholder="ชื่อนิติบุคคล"
        persistent-placeholder
        density="compact"
        type="text"
        clearable
        hide-details
        v-model="localValue.juristic_name"
        :rules="[v.requiredInput]"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" sm="12" md="12" lg="3">
      <v-text-field
        variant="outlined"
        label="สถานที่จดทะเบียน"
        placeholder="สถานที่จดทะเบียน"
        persistent-placeholder
        density="compact"
        type="text"
        clearable
        hide-details
        v-model="localValue.registration_location"
        :rules="[v.requiredInput]"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" sm="12" md="12" lg="3">
      <VueDatePicker
        text-input
        format="dd/MM/yyyy"
        v-model="localValue.date_todo"
        v-mask="'##/##/####'"
        label="วันที่และเวลา"
        placeholder="วันที่ก่อตั้ง"
        persistent-placeholder
        :teleport="true"
      />
    </v-col>
  </v-row>
</template>
