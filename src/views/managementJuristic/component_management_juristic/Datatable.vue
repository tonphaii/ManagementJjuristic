<script>
export default {
  data: () => ({}),

  props: {
    headers: { type: Object, default: null, require: true },
    items: { type: Array, default: [], require: true },
  },

  computed: {},

  methods: {},
}
</script>

<template>
  <v-card
  
    :border="true" class="rounded-s"
  
  >
    <v-data-table
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
