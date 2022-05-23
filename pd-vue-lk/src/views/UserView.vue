<template>
  <!--  <div class="content-loader" v-if="loading">-->
  <!--    <img src="@/assets/images/horizontal_loader.gif" alt="" />-->
  <!--  </div>-->
  <div>
    <bread-crumbs-line page="users" :custom-end="customBreadCrumb" />
    <div class="content">
      <div class="user-row">
        <div class="user-img">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="user-info">
          <h1 class="user-info-name">{{ user.name }}</h1>
          <h3 class="user-info-email">{{ user.email }}</h3>
          <div class="user-info-books"></div>
        </div>
        <div class="book-actions">
          <div class="book-actions-buttons">
            <v-btn
              class="book-action-button"
              elevation="2"
              large
              plain
              @click="edit = true"
            >
              Изменить
            </v-btn>
            <v-btn
              class="book-action-button button-danger"
              elevation="2"
              large
              plain
              @click="deleteDialog = true"
            >
              Удалить
            </v-btn>
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="deleteDialog" max-width="290" dark>
      <v-card>
        <v-card-title class="text-h5">Подтверждение</v-card-title>
        <v-card-text>Вы уверены, что хотите удалить пользователя?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deleteDialog = false"
            >Отмена
          </v-btn>
          <v-btn color="green darken-1" text @click="deleteItem">Удалить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BreadCrumbsLine from "@/components/BreadCrumbsLine";
// import LineChart from "@/views/components/charts/LineChart";
import { mapActions } from "vuex";

export default {
  components: { BreadCrumbsLine },
  data: () => ({
    loading: true,
    edit: false,
    saveLoader: false,
    deleteDialog: false,
    frequencyDialog: false,
    user: {
      name: "Алена Петрова",
      email: "petrova3674@mail.ru",
    },
    description: null,
    editedUser: null,
    customBreadCrumb: null,
  }),
  async created() {
    //   const id = this.$route.params.id;
    //
    //   await Promise.all([this.getBook(id), this.loadGenres()]).then(
    //     ([book, genres]) => {
    //       this.book = book;
    //       this.genres.all = genres.data;
    //     }
    //   );
    //
    //   document.title = this.book.title + " - WhatToRead";
    //
    //   if (this.book.description) {
    //     this.description = this.book.description.replace(/\n/g, "<br />");
    //   } else {
    //     this.description = "";
    //   }
    //   this.setEditedBook(this.book);
    //
    this.customBreadCrumb = {
      text: this.user.name,
      disabled: true,
      href: "/users/" + this.user.name,
    };
    //
    //   this.genres.select = this.genres.all;
    //
    //   const selectedGenres = [];
    //   this.book.genres.forEach(function (genre) {
    //     selectedGenres.push(genre.id);
    //   });
    //   this.genres.selected = selectedGenres;
    //
    //   this.loading = false;
  },
  methods: {
    ...mapActions([
      // "getBook",
      // "loadGenres",
      // "updateBook",
      "deleteUser",
      // "loadFileForFrequency",
      // "showAlert",
    ]),
    //
    // setEditedBook(book) {
    //   this.editedBook = {};
    //   for (let key in book) {
    //     this.editedBook[key] = book[key];
    //   }
    // },
    //
    // searchGenres() {
    //   this.genres.select = this.genres.all.filter((genre) => {
    //     return (
    //       genre.name
    //         .toLowerCase()
    //         .indexOf(this.searchGenreString.toLowerCase()) > -1
    //     );
    //   });
    // },
    //
    // async save() {
    //   this.saveLoader = true;
    //
    //   const params = {
    //     title: this.editedBook.title,
    //     description: this.editedBook.description,
    //     author: this.editedBook.author,
    //     status: this.editedBook.status,
    //     genres: this.genres.selected,
    //   };
    //
    //   const book = await this.updateBook({
    //     bookId: this.book.id,
    //     params: params,
    //   });
    //
    //   this.book = book;
    //   if (this.book.description) {
    //     this.description = this.book.description.replace(/\n/g, "<br />");
    //   }
    //   this.setEditedBook(book);
    //
    //   this.saveLoader = false;
    //   this.edit = false;
    // },
    //
    async deleteItem() {
      if (await this.deleteUser(this.user.id)) {
        this.$router.push({ name: "users" });
      } else {
        this.deleteDialog = false;
      }
    },
    //
    // cancelEdit() {
    //   this.edit = false;
    //   this.setEditedBook(this.book);
    // },
    //
    // async loadBookFile() {
    //   if (!this.bookFile) {
    //     return;
    //   }
    //
    //   let formData = new FormData();
    //   formData.append("file", this.bookFile);
    //
    //   const response = await this.loadFileForFrequency({
    //     bookId: this.book.id,
    //     params: formData,
    //   });
    //   this.showAlert({ message: response.data.message, type: "success" });
    //
    //   this.frequencyDialog = false;
    // },
  },
};
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
}

.user-row {
  display: flex;
  align-items: flex-start;
}
</style>
