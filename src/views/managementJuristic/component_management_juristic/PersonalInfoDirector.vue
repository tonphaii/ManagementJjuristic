<script>
import { reactive } from 'vue'
import ValidationForm from '../../../validation/index'
import VueMask from 'vue-the-mask'
import Sections from '../../../components/widget/Section'
import mockData from '../../../store/management_juristic.json'
export default {
  data: () => ({
    mockData: mockData,
  }),
  components: {
    //
    Sections,
  },
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {
          document_type: '', // ประเภทเอกสาร
          prefix: '',
          firstname: '',
          middle_name: '',
          lastname: '',
          birthday: '',
          gender: '',
          nationality: '', // สัญชาติ
          race: '', // เชื้อชาติ
          father_name: '',
          mother_name: '',

          director_type: '', //ประเภทกรรมการ
          committee_operations: '', //การดำเนินงานของคณะกรรมการ
        }
      },
    },
    checkTab: { type: String, default: 'juristic' },
    checkMode: { type: String, default: 'create-mode' },
    checkActionEdit: { type: Boolean },
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
  <v-row class="mt-2 ml-2 text-grey-darken-2">
    <Sections header="ข้อมูลกรรมการ" color="#d8b192" icon="mdi-plus"/>
  </v-row>
  <v-row>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-autocomplete
        persistent-placeholder
        placeholder="--เลือก--"
        density="compact"
        hide-details
        variant="outlined"
        label="ประเภทเอกสาร"
        :items="mockData.document_type_list"
        item-title="name"
        item-value="value"
        v-model="localValue.document_type"
        :rules="[v.requiredInput]"
        :disabled="checkMode === 'create-mode'&& !checkActionEdit"
      ></v-autocomplete>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-autocomplete
        persistent-placeholder
        placeholder="--เลือก--"
        density="compact"
        hide-details
        variant="outlined"
        label="คำนำหน้า"
        :items="['นาย', 'นาง', 'นางสาว']"
        v-model="localValue.prefix"
        :rules="[v.requiredInput]"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-text-field
        variant="outlined"
        label="ชื่อ"
        placeholder="ชื่อ"
        hide-details
        density="compact"
        type="text"
        clearable
        persistent-placeholder
        v-model="localValue.firstname"
        :rules="[v.requiredInput]"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-text-field
        variant="outlined"
        label="ชื่อกลาง"
        placeholder="ชื่อกลาง"
        hide-details
        density="compact"
        type="text"
        clearable
        persistent-placeholder
        v-model="localValue.middle_name"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-text-field
        variant="outlined"
        label="นามสกุล"
        placeholder="นามสกุล"
        hide-details
        density="compact"
        type="text"
        clearable
        persistent-placeholder
        v-model="localValue.lastname"
        :rules="[v.requiredInput]"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      >
      </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-autocomplete
        placeholder="--เลือก--"
        persistent-placeholder
        density="compact"
        hide-details
        variant="outlined"
        label="เพศ"
        :items="['หญิง', 'ชาย']"
        v-model="localValue.gender"
        :rules="[v.requiredInput]"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3">
      <VueDatePicker
        text-input
        format="dd/MM/yyyy"
        v-mask="'##/##/####'"
        v-model="localValue.birthday"
        :rules="[v.requiredInput]"
        :teleport="true"
        placeholder="วันเกิด"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      />
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-autocomplete
        placeholder="--เลือก--"
        persistent-placeholder
        density="compact"
        hide-details
        variant="outlined"
        label="สัญชาติ"
        :items="['ไทย', 'ไทย', 'ไทย']"
        v-model="localValue.nationality"
        :rules="[v.requiredInput]"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-autocomplete
        placeholder="--เลือก--"
        persistent-placeholder
        density="compact"
        hide-details
        variant="outlined"
        label="เชื้อชาติ"
        :items="['ไทย', 'ไทย', 'ไทย']"
        v-model="localValue.race"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      ></v-autocomplete>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="6" sm="12" md="6" lg="6">
      <v-text-field
        variant="outlined"
        persistent-placeholder
        label="ชื่อบิดา"
        placeholder="ชื่อบิดา"
        hide-details
        density="compact"
        type="text"
        clearable
        v-model="localValue.father_name"
        :rules="[v.requiredInput]"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6" sm="12" md="6" lg="6">
      <v-text-field
        variant="outlined"
        persistent-placeholder
        label="ชื่อมารดา"
        placeholder="ชื่อมารดา"
        hide-details
        density="compact"
        type="text"
        clearable
        v-model="localValue.mother_name"
        :rules="[v.requiredInput]"
        :disabled="checkMode === 'create-mode' && !checkActionEdit"
      >
      </v-text-field>
    </v-col>
  </v-row>
</template>
