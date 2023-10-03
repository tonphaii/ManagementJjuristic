<script>
export default {
  data: () => ({
    select_keyword_search: undefined,
    field_search: '',

    showContent: false,
  }),
  components: {
    //
  },
  methods: {
    // onClick(name) {
    //   this.$router.push({ name: name })
    // },
    onSearch() {
      console.log('Search', this.select_keyword_search, this.field_search)
      this.showContent = true
    },
  },
  setup() {
    //
  },
  props: {
    headers: { type: Object, default: null, require: true },
    items: { type: Array, default: [], require: true },
  },
}
</script>
<template>
  <v-row class="ma-2 align-center">
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-autocomplete
        placeholder="--เลือก--"
        persistent-placeholder
        density="compact"
        hide-details
        variant="outlined"
        label="ค้นหาด้วย"
        :items="['ชื่อนิติบุคคล', 'เลขทะเบียนนิติบุคคล']"
        v-model="select_keyword_search"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-text-field
        variant="outlined"
        :label="select_keyword_search"
        :placeholder="select_keyword_search"
        persistent-placeholder
        hide-details
        density="compact"
        type="text"
        v-model="field_search"
        @keyup.enter="onSearch"
        :disabled="select_keyword_search === undefined"
      >
      </v-text-field>
    </v-col>
    <v-col cols="3" sm="12" md="6" lg="3">
      <v-btn
        prepend-icon="mdi-magnify"
        variant="elevated"
        color="indigo"
        @click="onSearch"
      >
        ค้นหา
      </v-btn>
    </v-col>
  </v-row>

  <v-card>
    <v-data-table
      v-if="showContent"
      :headers="headers"
      :items="items"
      @click:row="(item, body) => this.$emit('onClick:row', body)"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>ข้อมูลนิติบุคคล</v-toolbar-title>
        </v-toolbar>
      </template>

      <!-- <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
    <tr>
      <td>
        <span class="mr-2 cursor-pointer" @click="() => toggleSort(column)">
          No.
        </span>
      </td>

      <template v-for="column in columns" :key="column.key">
        <td>
          <span class="mr-2 cursor-pointer" @click="() => toggleSort(column)">
            {{ column.title }}
          </span>
          <template v-if="isSorted(column)">
            <v-icon :icon="getSortIcon(column)"></v-icon>
          </template>
          <v-icon
            v-if="column.removable"
            icon="$close"
            @click="() => remove(column.key)"
          ></v-icon>
        </td>
      </template>
    </tr>
  </template> -->
    </v-data-table>
  </v-card>
</template>
