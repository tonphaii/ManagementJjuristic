<script>
import { reactive } from 'vue'
import ValidationForm from '../../../validation/index'
import VueMask from 'vue-the-mask'
// import { useRoute, useRouter } from 'vue-router'
import Sections from '../../../components/widget/Section'

export default {
  data: () => ({
    //
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
          house_id_number: '', //เลขรหัสประจำบ้าน
          registration_office: '',
          house_number: '', //บ้านเลขที่
          moo: '', //หมู่ที่

          condominium: '', //อาคาร
          floor: '', //ชั้น
          village: '', //หมู่บ้าน

          alley: '', // ซอย
          lane: '', //ตรอก
          road: '', //ถนน

          province: '',
          district: '',
          subdistrict: '',

          zip_code: '',
          tel: '',
          fax: '', //โทรสาร

          email: '',
          tax_id: '',

          director_type: '',
          committee_operations: '',
          date_started: '',
        }
      },
    },
    checkTab: { type: String, default: 'juristic' },
    checkMode: { type: String, default: 'create-mode' },
    checkActionEdit: { type: Boolean },
    request: {},
  },
  methods: {
    //
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
  computed: {
    checkView() {
      return (
        this.checkTab === 'director' &&
        this.checkMode === 'create-mode' &&
        this.checkActionEdit === true
      )
    },
    localValue: {
      get() {
        return reactive(this.modelValue)
      },
      set(value) {
        return value
      },
    },
  },
}
</script>

<template>
  <v-row class="mt-2 ml-2 text-grey-darken-2">
    <Sections
      v-show="checkTab !== 'director'"
      header="ที่อยู่แบบเต็ม (กรณีทำการเชื่อมโยง กรมพัฒนาธุรกิจการค้า)"
      color="#d8b192"
      icon="mdi-plus"
    />
  </v-row>
  <v-row>
    <v-col cols="3" lg="3" md="6" sm="12">
      <v-text-field
        variant="outlined"
        label="เลขรหัสประจำบ้าน"
        placeholder="เลขรหัสประจำบ้าน"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        clearable
        v-mask="'#####-######-#'"
        v-model="localValue.house_id_number"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" lg="3" md="6" sm="12">
      <v-autocomplete
        placeholder="--เลือก--"
        persistent-placeholder
        density="compact"
        hide-details
        variant="outlined"
        label="สำนักทะเบียน"
        :items="['A', 'B', 'C']"
        v-model="localValue.registration_office"
        :disabled="checkView"
      ></v-autocomplete>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="3" lg="3" md="6" sm="12">
      <v-text-field
        variant="outlined"
        label="บ้านเลขที่"
        placeholder="บ้านเลขที่"
        persistent-placeholder
        hide-details
        density="compact"
        type="number"
        clearable
        :rules="[v.requiredInput]"
        v-model="localValue.house_number"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" lg="3" md="6" sm="12">
      <v-text-field
        variant="outlined"
        label="หมู่ที่"
        placeholder="หมู่ที่"
        persistent-placeholder
        hide-details
        density="compact"
        type="number"
        clearable
        :rules="[v.numberOnly]"
        v-model="localValue.moo"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-text-field
        variant="outlined"
        label="อาคาร"
        placeholder="อาคาร"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        clearable
        v-model="localValue.condominium"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-text-field
        variant="outlined"
        label="ชั้น"
        placeholder="ชั้น"
        persistent-placeholder
        hide-details
        density="compact"
        type="number"
        clearable
        v-model="localValue.floor"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-text-field
        variant="outlined"
        label="หมู่บ้าน"
        placeholder="หมู่บ้าน"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        clearable
        v-model="localValue.village"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-text-field
        variant="outlined"
        label="ตรอก"
        placeholder="ตรอก"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        clearable
        v-model="localValue.lane"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-text-field
        variant="outlined"
        label="ซอย"
        placeholder="ซอย"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        clearable
        v-model="localValue.alley"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-text-field
        variant="outlined"
        label="ถนน"
        placeholder="ถนน"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        clearable
        v-model="localValue.road"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-autocomplete
        persistent-placeholder
        placeholder="--เลือก--"
        density="compact"
        hide-details
        variant="outlined"
        label="จังหวัด"
        :items="['A', 'B', 'C']"
        v-model="localValue.province"
        :rules="[v.requiredInput]"
        :disabled="checkView"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-autocomplete
        persistent-placeholder
        placeholder="--เลือก--"
        density="compact"
        hide-details
        variant="outlined"
        label="อำเภอ/เขต"
        :items="['A', 'B', 'C']"
        v-model="localValue.district"
        :rules="[v.requiredInput]"
        :disabled="localValue.province === undefined || checkView"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-autocomplete
        persistent-placeholder
        placeholder="--เลือก--"
        density="compact"
        hide-details
        variant="outlined"
        label="ตำบล/แขวง"
        :items="['A', 'B', 'C']"
        v-model="localValue.subdistrict"
        :rules="[v.requiredInput]"
        :disabled="
          localValue.province === undefined ||
          localValue.district === undefined ||
          checkView
        "
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-text-field
        variant="outlined"
        label="รหัสไปรษณีย์"
        placeholder="รหัสไปรษณีย์"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        v-mask="'#####'"
        clearable
        v-model="localValue.zip_code"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-text-field
        variant="outlined"
        label="โทรศัพท์"
        placeholder="โทรศัพท์"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        v-mask="'##-####-####'"
        clearable
        v-model="localValue.tel"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" lg="3" md="4" sm="12">
      <v-text-field
        variant="outlined"
        label="โทรสาร"
        placeholder="โทรสาร"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        v-mask="'##-####-####'"
        clearable
        v-model="localValue.fax"
        :disabled="checkView"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3" v-show="checkTab !== 'director'">
      <v-text-field
        variant="outlined"
        label="อีเมล์"
        placeholder="อีเมล์"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        clearable
        :rules="[v.email]"
        v-model="localValue.email"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" lg="3" md="6" sm="12" v-show="checkTab !== 'director'">
      <v-text-field
        variant="outlined"
        label="เลขประจำตัวผู้เสียภาษีอากรของผู้อนุญาต"
        placeholder="เลขประจำตัวผู้เสียภาษีอากรของผู้อนุญาต"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        v-mask="'#############'"
        clearable
        v-model="localValue.tax_id"
      >
      </v-text-field>
    </v-col>
  </v-row>

  <v-row v-show="checkTab !== 'juristic'">
    <v-col cols="3" class="d-flex" sm="12" md="6" lg="3">
      <v-autocomplete
        placeholder="--เลือก--"
        persistent-placeholder
        density="compact"
        hide-details
        variant="outlined"
        label="ประเภทกรรมการ"
        :items="[
          'กรรมการผู้รับมอบอำนาจ',
          'กรรมการทั่วไป',
          'กรรมการผู้มีอำนาจผูกพันบริษัท',
        ]"
        v-model="localValue.director_type"
        :rules="[v.requiredInput]"
        :disabled="checkView"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" class="d-flex" sm="12" md="6" lg="3">
      <v-autocomplete
        placeholder="--เลือก--"
        persistent-placeholder
        density="compact"
        hide-details
        variant="outlined"
        label="การดำเนินงานของคณะกรรมการ"
        :items="['A', 'B', 'C']"
        v-model="localValue.committee_operations"
        :rules="[v.requiredInput]"
        :disabled="checkView"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" lg="3" md="12" sm="12">
      <VueDatePicker
        text-input
        format="dd/MM/yyyy"
        v-model="localValue.date_started"
        :rules="[v.requiredInput]"
        :disabled="checkView"
        :teleport="true"
      />
    </v-col>
  </v-row>
</template>
