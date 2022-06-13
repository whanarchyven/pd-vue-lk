<template>
  <!--  <div class="content-loader" v-if="loading">-->
  <!--    <img src="@/assets/images/horizontal_loader.gif" alt="" />-->
  <!--  </div>-->
  <div data-app>
    <bread-crumbs-line page="users" :custom-end="customBreadCrumb" />
    <div class="content">
      <div class="user-row">
        <div class="user-img">
          <img src="@/assets/photo.jpg" alt="" />
        </div>
        <div class="user-info">
          <h1 class="user-info-name">{{ users[0].name }}</h1>
          <span class="user-info-email">{{ users[0].mail }}</span>
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
                  {{ index + 1 }}. {{ item.title }}
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
                  {{ index + 1 }}. {{ item.title }}
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
                  {{ index + 1 }}. {{ item.title }}
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
        <div class="user-favourite-wrap">
          <h2 class="user-row-title">Предпочтения жанров</h2>
          <div class="user-favourite">
            <div
              v-for="(item, index) in genres"
              v-bind:key="index"
              class="user-favourite-label"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <!--      <div class="user-row">-->
      <!--        <div class="user-favourite-wrap">-->
      <!--          <h2 class="user-row-title">Предпочтения жанров</h2>-->
      <!--          <div class="user-favourite">-->
      <!--            <div-->
      <!--              v-for="(item, index) in favourite"-->
      <!--              v-bind:key="index"-->
      <!--              class="user-favourite-label"-->
      <!--            >-->
      <!--              {{ item }}-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>

    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">Подтверждение</v-card-title>
        <v-card-text>Вы уверены, что хотите удалить пользователя?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteDialog = false"> Отмена </v-btn>
          <v-btn class="button-danger" text @click="deleteItem">Удалить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BreadCrumbsLine from "@/components/BreadCrumbsLine";
// import LineChart from "@/views/components/charts/LineChart";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { BreadCrumbsLine },
  data: () => ({
    loading: true,
    edit: false,
    saveLoader: false,
    deleteDialog: false,
    frequencyDialog: false,
    // user: {
    //   name: "Алена Петрова",
    //   email: "petrova3674@mail.ru",
    // },
    // books: {
    //   readied: [
    //     "Война и мир",
    //     "Горе от ума",
    //     "Убить пересмешника",
    //     "Двенадцать стульев",
    //     "Искра жизни",
    //   ],
    //   wished: [
    //     "Отверженные",
    //     "На западном фронте...",
    //     "Мартин Иден",
    //     "Три товарища",
    //     "Время жить и время...",
    //   ],
    //   recommended: [
    //     "Отверженные",
    //     "На западном фронте...",
    //     "Мартин Иден",
    //     "Три товарища",
    //     "Время жить и время...",
    //   ],
    // },
    // favourite: ["классическая проза", "русская классика"],
    description: null,
    editedUser: null,
    customBreadCrumb: null,
  }),
  async created() {
    // const id = this.$route.params.id;
    await this.getBooks();
    await this.getGenres();
    await this.getUsers();

    // await Promise.all([this.loadBooks(), this.loadGenres()]).then(
    //   ([book, genres]) => {
    //     this.book = book;
    //     this.genres.all = genres.data;
    //   }
    // );

    // document.title = this.book.title + " - WhatToRead";

    // if (this.book.description) {
    //   this.description = this.book.description.replace(/\n/g, "<br />");
    // } else {
    //   this.description = "";
    // }
    // this.setEditedBook(this.book);

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
  computed: mapGetters(["books", "genres", "users"]),
  methods: {
    ...mapActions(["getBooks", "getGenres", "getUsers"]),
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
.user-img {
  img {
    width: 337px;
    height: 451px;
    object-fit: cover;
    border-radius: 6px;
  }
}

.content {
  padding-left: 12px;
  padding-top: 12px;
  padding-right: 44px;
  border-radius: 6px;
  margin-left: 15px;
  margin-right: 26px;
  background-color: #272936;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 21px;
  width: 60%;
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
  color: #7c7e8f;
}

.user-actions {
  margin-left: auto;
}

.user-actions-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-action-button {
  width: 142px;

  &:first-child {
    margin-bottom: 6px;
  }
}

.user-row {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
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
  white-space: nowrap;
}

.user-info-books-column-count {
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #7c7e8f;
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

.theme--light {
  .content {
    background-color: white;
  }

  .user-info-name,
  .user-info-books-column-title,
  .user-info-books-column-list li,
  .user-row-title {
    color: #202020;
  }
}

@media screen and (max-width: 1700px) {
  .content {
    position: relative;
    padding-bottom: 20px;
  }
  .user-img {
    order: 1;
    img {
      width: 133px;
      height: 177px;
    }
  }
  .user-actions {
    order: 3;
  }
  .user-info {
    order: 4;
    margin-left: 0;
    width: 100%;
  }
  .user-info-name {
    font-size: 25px;
    margin-top: 0;
    margin-bottom: 0;
  }
  .user-info-name {
    position: absolute;
    top: 10px;
    left: 166px;
  }
  .user-info-email {
    position: absolute;
    top: 40px;
    left: 166px;
  }
  .user-favourite-wrap {
    position: absolute;
    top: 66px;
    left: 166px;
  }
  .user-favourite-label {
    margin-bottom: 5px;
  }
  .user-row-title {
    font-size: 18px;
  }
  .user-info-books {
    padding-top: 20px;
  }
}
@media screen and (max-width: 1200px) {
  .content {
    padding: 17px;
  }
  .user-info-books {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 37px 65px;
  }
  .user-info-books-column {
    margin-right: 0;
  }
  .user-info-books-column-title {
    font-size: 20px;
    margin-right: 10px;
  }
  .user-info-books-column-count {
    font-size: 16px;
  }
  .user-info-books-column-list {
    padding-left: 0;
    li {
      font-size: 16px;
    }
  }
  .user-info-books-column-top {
    margin-bottom: 0;
  }
  .user-action-button {
    width: fit-content;
    height: 37px !important;
  }
}
@media screen and (max-width: 700px) {
  .user-info-books {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 27px;
  }
}
@media screen and (max-width: 620px) {
  .content {
    padding: 8px;
  }
  .user-actions-buttons {
    position: absolute;
    top: 12px;
    left: 8px;
    right: 8px;
    justify-content: space-between;
    flex-direction: row;
  }
  .user-action-button {
    &:first-child {
      margin-bottom: 0;
    }
  }
  .user-row {
    padding-top: 50px;
  }
  .user-info-name {
    top: 50px;
    left: 130px;
    font-size: 18px;
  }
  .user-info-email {
    top: 80px;
    left: 130px;
    font-size: 14px;
  }
  .user-favourite-wrap {
    top: 80px;
    left: 130px;
  }
  .user-row-title {
    font-size: 16px;
    margin-bottom: 0;
  }
  .user-img {
    img {
      width: 113px;
      height: 144px;
    }
  }
  .user-info-books {
    padding-top: 10px;
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
