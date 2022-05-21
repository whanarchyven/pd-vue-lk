<template>
  <div class="users">
    <div class="d-flex flex-row justify-space-between">
      <bread-crumbs-line page="users"/>
    </div>
    <data-table
      :loading="loading"
      :columns="columns"
      :pagination="pagination"
      :items="books"

      @columnFilterChanged=""
      @onFilter=""
      @onRowClick=""
      @onPage=""
      @orderColumn=""
      @orderDir=""
    ></data-table>

<!--    <book-dialog v-if="!loading" :dialog="newBookDialog" :genres="genres" @closed="newBookDialog = false"></book-dialog>-->
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
    loading: true,
    books: null,
    newBookDialog: false,
    genres: {
      all: [],
      select: [],
    },
    columns: [
      {
        data: 'ID',
        name: 'id',
        orderable: true,
        searchable: true,
        filter: {
          placeholder: "ID",
          type: 'text',
        },
        search: {
          value: "",
          regex: "",
        },
      },
      {
        data: 'Название',
        name: 'title',
        orderable: true,
        searchable: true,
        filter: {
          placeholder: "По названию",
          type: 'text',
        },
        search: {
          value: "",
          regex: "",
        },
      },
      {
        data: 'Автор',
        name: 'author',
        orderable: true,
        searchable: true,
        filter: {
          placeholder: "По автору",
          type: 'text',
        },
        search: {
          value: "",
          regex: "",
        },
      },
      {
        data: 'Статус',
        name: 'status',
        orderable: true,
        searchable: true,
        class: {
          name: 'column-badge column-value-',
          dynamic: true,
        },
        naming: {
          active: "Активна",
          moderation: "На модерации",
        },
        filter: {
          placeholder: "По статусу",
          type: 'select',
          options: ['all', 'moderation', 'active'],
          optionsText: {
            all: "Все",
            moderation: "На модерации",
            active: "Активна",
          }
        },
        search: {
          value: "",
          regex: "",
        },
      },
      {
        data: 'Словник',
        name: 'frequency',
        orderable: true,
        searchable: true,
        class: {
          name: 'column-badge column-value-frequency-',
          dynamic: true,
        },
        naming: {
          exists: "Составлен",
          'not-exists': "Не составлен",
        },
        filter: {
          placeholder: "По словнику",
          type: 'select',
          options: ['all', 'exists', 'not-exists'],
          optionsText: {
            all: "Все",
            exists: "Составлен",
            'not-exists': "Не составлен",
          }
        },
        search: {
          value: "",
          regex: "",
        },
      },
      {
        data: 'Добавлена',
        name: 'created_at',
        orderable: true,
        searchable: true,
        filter: {
          placeholder: "По дате добавления",
          type: 'date',
        },
        search: {
          value: "",
          regex: "",
        },
      },
    ],
    orderColumn: null,
    orderDesc: false,
    bookStatuses: [
      { name: "На модерации", code: 'moderation' },
      { name: "Активна", code: 'active' },
    ],
    pagination: {
      per_page: null,
      total: null,
      current_page: null,
      first_page: null,
      last_page: null,
      prev_page: null,
      next_page: null,
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
  //   ...mapActions(['loadBooks', 'loadGenres']),
  //
  //   async initData() {
  //     this.loading = true;
  //     const page = this.$route.query.page ?? 1;
  //
  //     await Promise.all([
  //       this.loadBooks({page: page, order: [this.order], columns: this.columns}),
  //       this.loadGenres(),
  //     ]).then(([
  //                books,
  //                genres,
  //              ]) => {
  //       this.setTable(books);
  //       this.genres.all = genres.data;
  //       this.genres.select = genres.data;
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
  //   // onFilter: debounce(async function () {
  //   //   await this.loadData();
  //   // }, 1000),
  //
  //   columnFilterUpdate(key, value) {
  //     const columns = this.columns;
  //     columns[key].search.value = value;
  //     this.columns = columns;
  //   },
  //
  //   onRowClick (item) {
  //     this.$router.push({ name: "Book", params: { id: item.id } });
  //   },
  //
  //   async onPage(page) {
  //     history.pushState(
  //       {},
  //       null,
  //       this.$route.path + "?page=" + page
  //     );
  //     await this.loadData(page);
  //   },
  //
  //   setOrderColumn (column) {
  //     this.orderColumn = column;
  //   },
  //
  //   setOrderDirection (dir) {
  //     this.orderDesc = dir;
  //   }
  // },
}
</script>


<style scoped lang="scss">
.users {
  padding: 0 30px 30px 30px;
}
</style>
