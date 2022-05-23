<template>
  <!--  <div class="content-loader" v-if="loading">-->
  <!--    <img src="@/assets/images/horizontal_loader.gif" alt="" />-->
  <!--  </div>-->
  <div data-app>
    <bread-crumbs-line page="users" :custom-end="customBreadCrumb" />
    <div class="content">
      <div class="user-row">
        <div class="user-img">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="user-info">
          <h1 class="user-info-name">{{ user.name }}</h1>
          <span class="user-info-email">{{ user.email }}</span>
          <div class="user-info-books">
            <div class="user-info-books-column">
              <div class="user-info-books-column-top">
                <h3 class="user-info-books-column-title">Прочитанные</h3>
                <span class="user-info-books-column-count">
                  Все({{ books.readied.length }})
                </span>
              </div>
              <ul class="user-info-books-column-list">
                <li v-for="(item, index) in books.readied" v-bind:key="index">
                  {{ index + 1 }}. {{ item }}
                </li>
              </ul>
            </div>
            <div class="user-info-books-column">
              <div class="user-info-books-column-top">
                <h3 class="user-info-books-column-title">Желаемые книги</h3>
                <span class="user-info-books-column-count">
                  Все({{ books.wished.length }})
                </span>
              </div>
              <ul class="user-info-books-column-list">
                <li v-for="(item, index) in books.wished" v-bind:key="index">
                  {{ index + 1 }}. {{ item }}
                </li>
              </ul>
            </div>
            <div class="user-info-books-column">
              <div class="user-info-books-column-top">
                <h3 class="user-info-books-column-title">Рекомендации</h3>
                <span class="user-info-books-column-count">
                  Все({{ books.recommended.length }})
                </span>
              </div>
              <ul class="user-info-books-column-list">
                <li
                  v-for="(item, index) in books.recommended"
                  v-bind:key="index"
                >
                  {{ index + 1 }}. {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="user-actions">
          <div class="user-actions-buttons">
            <v-btn
              class="user-action-button"
              elevation="2"
              large
              plain
              @click="edit = true"
            >
              Изменить
            </v-btn>
            <v-btn
              class="user-action-button button-danger"
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
      <div class="user-row">
        <div class="user-favourite-wrap">
          <h2 class="user-row-title">Предпочтения жанров</h2>
          <div class="user-favourite">
            <div
              v-for="(item, index) in favourite"
              v-bind:key="index"
              class="user-favourite-label"
            >
              {{ item }}
            </div>
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
    books: {
      readied: [
        "Война и мир",
        "Горе от ума",
        "Убить пересмешника",
        "Двенадцать стульев",
        "Искра жизни",
      ],
      wished: [
        "Отверженные",
        "На западном фронте...",
        "Мартин Иден",
        "Три товарища",
        "Время жить и время...",
      ],
      recommended: [
        "Отверженные",
        "На западном фронте...",
        "Мартин Иден",
        "Три товарища",
        "Время жить и время...",
      ],
    },
    favourite: ["классическая проза", "русская классика"],
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
      this.$router.push({ name: "users" });
      // if (await this.deleteUser(this.user.id)) {
      //   this.$router.push({ name: "users" });
      // } else {
      //   this.deleteDialog = false;
      // }
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
  padding-left: 12px;
  padding-top: 12px;
  padding-right: 44px;
  border-radius: 6px;
  margin-left: 15px;
  margin-right: 26px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 21px;
}

.user-info-name {
  font-weight: 400;
  font-size: 33px;
  line-height: 39px;
  color: #f4f4f4;
  margin-top: 11px;
  margin-bottom: 10px;
}

.user-info-email {
  text-align: left;
  margin-bottom: 44px;
}

.user-actions {
  margin-left: auto;
}

.user-actions-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-row {
  display: flex;
  align-items: flex-start;
}

.user-info-books {
  display: flex;
}

.user-info-books-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 72px;
}

.user-info-books-column-top {
  display: flex;
  align-items: center;
  margin-bottom: 19px;
}
.user-info-books-column-title {
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: #f4f4f4;
  margin-right: 14px;
}

.user-info-books-column-count {
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
}

.user-info-books-column-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  li {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #f4f4f4;
  }
}

.user-favourite-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 28px;
}

.user-row-title {
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: #f4f4f4;
  margin-bottom: 10px;
}

.user-favourite {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.user-favourite-label {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #376482;
  padding: 6px;
  background: #b7e2f4;
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
