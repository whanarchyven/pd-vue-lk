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
  props: ["columns", "dates"],
  components: { FilterText, FilterSelect, FilterDate },
  methods: {
    inputKeyup(string, columnKey) {
      this.$emit("inputKeyup", string, columnKey);
    },
    saveDate(date, columnKey) {
      this.$emit("dateFilterChanged", date, columnKey);
    },
    clearDate(columnKey) {
      this.$emit("dateFilterCleared", columnKey);
    },
  },
};
</script>
<style lang="scss">
.v-input__control {
  border: 2px solid #7c7e8f !important;
}

.v-input__slot {
  box-shadow: none!important;
  background-color: #272936 !important;
}

.filter-td {
  border: 0 !important;
}

.v-label {
  color: #7c7e8f !important;
}

.theme--light {
  .v-input__slot {
    background-color: white !important;
  }
}

.data-table-select-option {
  color: #7c7e8f !important;
  white-space: nowrap;
}

@media screen and (max-width: 1200px) {
  .filter-td {
    height: 30px !important;
    padding: 0 5px !important;

    .v-input__control {
      min-height: unset !important;
    }

    .v-input__slot {
      padding-left: 5px !important;
      padding-right: 5px !important;
    }
  }
  .v-label {
    font-size: 14px !important;
  }
  .data-table-select-option {
    font-size: 14px !important;
  }
}
</style>
