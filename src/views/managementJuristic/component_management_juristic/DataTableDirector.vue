<script>
//
export default {
  data() {
    return {
      //
    }
  },
  computed: {},

  methods: {},
  props: {
    headers: { type: Object, default: null, require: true },
    items: { type: Array, default: [], require: true },
  },
}
</script>

<template>
  <v-card class="d-flex flex-row ma-2">
    <v-data-table
      :headers="headers"
      :items="items"
      @click:row="(item, body) => this.$emit('onClick:row', body)"
      class="elevation-1"
    >
      <!-- <template v-slot:item.actions="{ value }">
        <v-chip :color="getManagementJuristic(value)">
          {{ value }}
        </v-chip>
      </template> -->
    </v-data-table>
  </v-card>
</template>
