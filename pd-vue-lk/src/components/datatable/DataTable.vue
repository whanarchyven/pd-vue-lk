<template>
  <v-theme-provider root>
    <v-data-table
      v-if="loading && headers && columns"
      class="data-table"
      :headers="headers"
      loading
      loading-text="Загружаем данные..."
      hide-default-footer
    >
      <template v-slot:body.prepend>
        <filters
          :columns="columns"
          :dates="dates"
          @inputKeyup="inputKeyup"
          @dateFilterChanged="saveDate"
          @dateFilterCleared="clearDate"
        ></filters>
      </template>

      <template v-slot:footer>
        <v-pagination
          disabled
          class="data-table-pagination"
          v-model="loaderPage"
          :length="1"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </template>
    </v-data-table>

    <v-data-table
      v-if="!loading && headers"
      class="data-table"
      :headers="headers"
      :items="items"
      :items-per-page="pagination.per_page"
      :page="pagination.current_page"
      :server-items-length="pagination.total"
      hide-default-footer
      @update:sort-by="sortAsc($event[0])"
      @update:sort-desc="sortDesc($event[0])"
    >
      <template v-slot:body.prepend>
        <filters
          :columns="columns"
          :dates="dates"
          @inputKeyup="inputKeyup"
          @dateFilterChanged="saveDate"
          @dateFilterCleared="clearDate"
        ></filters>
      </template>

      <template v-slot:item="{ item }">
        <tr>
          <td v-for="column in columns" class="text-start">
            <router-link
              class="data-table-link"
              :to="{ name: 'user', params: { id: item.id } }"
            >
              <span
                v-if="column.class && column.class.dynamic"
                :class="column.class.name + item[column.name]"
              >
                {{
                  column.naming
                    ? column.naming[item[column.name]]
                    : item[column.name]
                }}
              </span>
              <span v-else-if="column.class" :class="column.class.name">
                {{
                  column.naming
                    ? column.naming[item[column.name]]
                    : item[column.name]
                }}
              </span>
              <span v-else>
                {{
                  column.naming
                    ? column.naming[item[column.name]]
                    : item[column.name]
                }}
              </span>
            </router-link>
          </td>
        </tr>
      </template>

      <!--      <template v-slot:footer>-->
      <!--        <v-pagination-->
      <!--          class="data-table-pagination"-->
      <!--          v-model="pagination.current_page"-->
      <!--          :length="pagination.last_page"-->
      <!--          :total-visible="7"-->
      <!--          prev-icon="mdi-menu-left"-->
      <!--          next-icon="mdi-menu-right"-->
      <!--          @input="paginationInput"-->
      <!--        ></v-pagination>-->
      <!--      </template>-->
    </v-data-table>
  </v-theme-provider>
</template>

<script>
import Filters from "@/components/datatable/Filters";
import FilterText from "@/components/datatable/FilterText";
import FilterSelect from "@/components/datatable/FilterSelect";
import FilterDate from "@/components/datatable/FilterDate";

export default {
  name: "DataTable",
  props: ["loading", "columns", "pagination", "items"],
  components: { Filters, FilterText, FilterSelect, FilterDate },
  data: () => ({
    headers: null,
    menu: false,
    loaderPage: 1,
    dates: [],
    sort: {
      column: null,
      dir: null
    }
  }),
  mounted() {
    const dates = [];
    const headers = [];

    this.columns.forEach(function(column, key) {
      if (column.filter.type === "date") {
        dates[key] = [];
      }

      headers.push({
        text: column.data,
        value: column.name,
        sortable: column.orderable
      });
    });

    this.dates = dates;
    this.headers = headers;
  },
  methods: {
    inputKeyup(string, columnKey) {
      this.columns[columnKey].search.value = string;
      this.$emit("onFilter");
    },

    saveDate(date, columnKey) {
      const d1 = Date.parse(date[0]);
      const d2 = Date.parse(date[1]);
      let value = "";

      if (d1 < d2) {
        value = date.join("_");
      } else {
        value = date.reverse().join("_");
      }

      this.$emit("columnFilterChanged", columnKey, value);
      this.$emit("onFilter");
    },

    clearDate(columnKey) {
      this.dates[columnKey] = [];

      this.$emit("columnFilterChanged", columnKey, "");
      this.$emit("onFilter");
    },

    paginationInput(page) {
      this.$emit("onPage", page);
    },

    sortAsc(column) {
      this.$emit("orderColumn", column);
    },

    sortDesc(dir) {
      this.$emit("orderDir", dir);
    }
  }
};
</script>

<style lang="scss">
.v-data-table {
  background-color: #272936 !important;
  border-radius: 20px !important;
  overflow: hidden;
  padding-bottom: 20px;
}

.data-table-link {
  color: var(--v-primary-base) !important;
  text-decoration: none;
}

.v-data-table-header {
  th {
    border-bottom: 0 !important;
    color: white !important;
    font-weight: 400 !important;
    font-size: 15px !important;
    line-height: 18px !important;
  }
}

.v-data-table__wrapper {
  tr:last-child {
    td {
      border-bottom: thin solid hsla(0, 0%, 100%, 0.12) !important;
    }
  }
}

.theme--light {
  .v-data-table {
    background-color: white !important;
  }

  .v-data-table-header {
    th {
      color: black !important;
    }
  }
}

@media screen and (max-width: 1200px) {
  .v-data-table-header {
    th {
      padding: 0 5px !important;
      white-space: nowrap;
      font-size: 14px !important;
      line-height: 16px !important;
    }
  }
  .data-table-link {
    span {
      font-size: 14px !important;
    }
  }
}
</style>
