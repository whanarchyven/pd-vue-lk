<template>
  <tr class="filter-tr">
    <td class="filter-td" v-for="(column, key) in columns">
      <filter-text
          v-if="column.filter.type === 'text'"
          :columns="columns"
          :column-key="key"

          @inputKeyup="inputKeyup"
      ></filter-text>

      <filter-select
          v-if="column.filter.type === 'select'"
          :columns="columns"
          :column-key="key"

          @inputKeyup="inputKeyup"
      ></filter-select>

      <filter-date
          v-if="column.filter.type === 'date'"
          :columns="columns"
          :column-key="key"
          :dates="dates"

          @dateFilterChanged="saveDate"
          @dateFilterCleared="clearDate"
      ></filter-date>
    </td>
  </tr>
</template>

<script>
import FilterText from "@/components/datatable/FilterText";
import FilterSelect from "@/components/datatable/FilterSelect";
import FilterDate from "@/components/datatable/FilterDate";

export default {
  props: ['columns', 'dates'],
  components: { FilterText, FilterSelect, FilterDate },
  methods: {
    inputKeyup (string, columnKey) {
      this.$emit('inputKeyup', string, columnKey);
    },
    saveDate (date, columnKey) {
      this.$emit('dateFilterChanged', date, columnKey);
    },
    clearDate (columnKey) {
      this.$emit('dateFilterCleared', columnKey);
    },
  }
}
</script>