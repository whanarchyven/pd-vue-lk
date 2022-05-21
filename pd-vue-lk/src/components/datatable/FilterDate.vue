<template>
  <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="columns[columnKey].search.value"
      transition="scale-transition"
      offset-y
      left
      min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
          v-model="dates[columnKey].join(' - ')"
          :label="columns[columnKey].filter.placeholder"
          readonly
          clearable
          solo
          hide-details
          v-bind="attrs"
          v-on="on"
          @click:clear="clearDate($event, columnKey)"
      ></v-text-field>
    </template>
    <v-date-picker
        class="filter-date-picker"
        v-model="dates[columnKey]"
        range
        no-title
        scrollable
        dark
        @change="saveDate($event, columnKey)"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ['columns', 'columnKey', 'dates'],
  data: () => ({
    menu: false,
  }),
  methods: {
    saveDate(date, columnKey) {
      this.$emit('dateFilterChanged', date, columnKey);
    },
    clearDate(event, columnKey) {
      this.$emit('dateFilterCleared', columnKey);
    },
  }
}
</script>