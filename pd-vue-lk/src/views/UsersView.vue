<template>
  <div class="users" data-app>
    <div class="d-flex flex-row justify-space-between">
      <bread-crumbs-line page="users" />
    </div>
    <data-table
      :loading="loading"
      :columns="columns"
      :pagination="pagination"
      :items="users"
      @columnFilterChanged=""
      @onFilter=""
      @onRowClick=""
      @onPage=""
      @orderColumn=""
      @orderDir=""
    ></data-table>

    <!--    <book-dialog v-if="!loading" :dialog="newBookDialog" @closed="newBookDialog = false"></book-dialog>-->
  </div>
</template>

<script>
import BreadCrumbsLine from "@/components/BreadCrumbsLine";
import DataTable from "@/components/datatable/DataTable";
import { mapActions } from "vuex";
// import { debounce } from "lodash";
// import BookDialog from "@/views/components/custom/BookDialog";

export default {
  components: { BreadCrumbsLine, DataTable },
  data: () => ({
    loading: false,
    users: [
      {
        id: 1,
        name: "test",
        mail: "test@mail.ru",
        readied: 12,
        "registration-date": new Date(),
      },
    ],
    newBookDialog: false,
    columns: [
      {
        data: "ID",
        name: "id",
        orderable: true,
        searchable: true,
        filter: {
          placeholder: "ID",
          type: "text",
        },
        search: {
          value: "",
          regex: "",
        },
      },
      {
        data: "Имя пользователя",
        name: "name",
        orderable: true,
        searchable: true,
        filter: {
          placeholder: "Имя пользователя",
          type: "text",
        },
        search: {
          value: "",
          regex: "",
        },
      },
      {
        data: "Почта",
        name: "mail",
        orderable: true,
        searchable: true,
        filter: {
          placeholder: "Почта",
          type: "text",
        },
        search: {
          value: "",
          regex: "",
        },
      },
      {
        data: "Прочитанные",
        name: "readied",
        orderable: true,
        searchable: true,
        class: {
          name: "column-badge column-value-",
          dynamic: true,
        },
        filter: {
          placeholder: "По кол-ву",
          type: "select",
          options: ["by-count", "moderation"],
          optionsText: {
            "by-count": "По кол-ву",
            moderation: "На модерации",
          },
        },
        search: {
          value: "",
          regex: "",
        },
      },
      {
        data: "Дата регистрации",
        name: "registration-date",
        orderable: true,
        searchable: true,
        class: {
          name: "column-badge column-value-frequency-",
          dynamic: true,
        },
        filter: {
          placeholder: "Новые",
          type: "select",
          options: ["new", "exists"],
          optionsText: {
            new: "Новые",
            old: "Старые",
          },
        },
        search: {
          value: "",
          regex: "",
        },
      },
    ],
    orderColumn: null,
    orderDesc: false,
    pagination: {
      per_page: 1,
      total: 1,
      current_page: 1,
      first_page: 1,
      last_page: 1,
      prev_page: 1,
      next_page: 1,
    },
  }),
  // mounted() {
  //   this.initData();
  // },
  // watch: {
  //   orderColumn() {
  //     if (this.orderDesc) {
  //       this.orderDesc = false;
  //     }
  //
  //     this.loadData();
  //   },
  //   orderDesc() {
  //     if (this.orderDesc) {
  //       this.loadData();
  //     }
  //   },
  // },
  // methods: {
  //   ...mapActions(['loadBooks']),
  //
  //   async initData() {
  //     this.loading = true;
  //     const page = this.$route.query.page ?? 1;
  //
  //     await Promise.all([
  //       this.loadBooks({page: page, order: [this.order], columns: this.columns}),
  //     ]).then(([
  //                books,
  //              ]) => {
  //       this.setTable(books);
  //     })
  //
  //     this.loading = false;
  //   },
  //
  //   async loadData(page = 1) {
  //     this.loading = true;
  //
  //     const books = await this.loadBooks({
  //       page: page,
  //       order: [{
  //         column: this.orderColumn,
  //         dir: this.orderDesc ? "desc" : "asc",
  //       }],
  //       columns: this.columns,
  //     });
  //     this.setTable(books);
  //
  //     this.loading = false;
  //   },
  //
  //   setTable(books) {
  //     this.pagination = books.pagination;
  //     this.books = books.data;
  //   },
  //
  //   onFilter: debounce(async function () {
  //     await this.loadData();
  //   }, 1000),
  //
  //   columnFilterUpdate(key, value) {
  //     const columns = this.columns;
  //     columns[key].search.value = value;
  //     this.columns = columns;
  //   },
  //
  onRowClick(item) {
    this.$router.push({ name: "User", params: { id: item.id } });
  },

  async onPage(page) {
    history.pushState({}, null, this.$route.path + "?page=" + page);
    // await this.loadData(page);
  },

  setOrderColumn(column) {
    this.orderColumn = column;
  },

  setOrderDirection(dir) {
    this.orderDesc = dir;
  },
};
</script>

<style scoped lang="scss">
.users {
  padding: 0 30px 30px 30px;
}
</style>
