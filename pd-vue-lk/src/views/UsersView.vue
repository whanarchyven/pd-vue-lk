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
      @columnFilterChanged="columnFilterUpdate"
      @onFilter=""
      @onRowClick=""
      @onPage=""
      @orderColumn="setOrderColumn"
      @orderDir="setOrderDirection"
    ></data-table>

    <!--    <book-dialog v-if="!loading" :dialog="newBookDialog" @closed="newBookDialog = false"></book-dialog>-->
  </div>
</template>

<script>
import BreadCrumbsLine from "@/components/BreadCrumbsLine";
import DataTable from "@/components/datatable/DataTable";
import { mapGetters, mapActions } from "vuex";
// import { debounce } from "lodash";
// import BookDialog from "@/views/components/custom/BookDialog";

export default {
  components: { BreadCrumbsLine, DataTable },
  data: () => ({
    loading: false,
    // users: [
    //   {
    //     id: 1,
    //     name: "test",
    //     mail: "test@mail.ru",
    //     readied: 12,
    //     "registration-date": new Date(),
    //   },
    //   {
    //     id: 2,
    //     name: "test2",
    //     mail: "test2@mail.ru",
    //     readied: 4,
    //     "registration-date": new Date(),
    //   },
    // ],
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
        // naming: {
        //   "by-count": "По кол-ву",
        //   moderation: "На модерации",
        // },
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
        // naming: {
        //   new: "Новые",
        //   old: "Старые",
        // },
        filter: {
          placeholder: "Новые",
          type: "select",
          options: ["new", "old"],
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
  mounted() {
    this.initData();
  },
  watch: {
    orderColumn() {
      if (this.orderDesc) {
        this.orderDesc = false;
      }

      this.loadData();
    },
    orderDesc() {
      if (this.orderDesc) {
        this.loadData();
      }
    },
  },
  computed: mapGetters(["users"]),
  methods: {
    ...mapActions(["getUsers"]),

    async initData() {
      this.loading = true;
      await this.getUsers();
      // await Promise.all([this.getUsers()]).then(([users]) => {
      //   // this.setTable(users);
      // });

      this.loading = false;
    },

    async loadData() {
      this.loading = true;
      await this.getUsers();
      // const users = await this.getUsers();
      // this.setTable(users);

      this.loading = false;
    },

    // setTable(users) {
    //   this.users = users.data;
    // },

    // onFilter: debounce(async function () {
    //   await this.loadData();
    // }, 1000),

    columnFilterUpdate(key, value) {
      const columns = this.columns;
      columns[key].search.value = value;
      this.columns = columns;
    },
    //
    // onRowClick(item) {
    //   console.log("test");
    //   this.$router.push({ name: "user", params: { id: item.id } });
    // },

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
  },
};
</script>

<style scoped lang="scss">
.users {
  padding: 0 30px 30px 30px;
}
@media screen and (max-width: 1200px) {
  .users {
    padding: 0;
  }
}
</style>
