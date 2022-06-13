import base from "@/network/base";
import routes from "@/network/routes";

export default {
  async loadBooks(token, params) {
    return await base.execute(
      "get",
      base.__adminPrefix__,
      routes.books.get,
      params,
      token
    );
  },

  async getBook(token, bookId) {
    return await base.execute(
      "get",
      base.__adminPrefix__,
      routes.books.item(bookId),
      {},
      token
    );
  },

  async createBook(token, params) {
    return await base.execute(
      "post",
      base.__adminPrefix__,
      routes.books.get,
      params,
      token
    );
  },

  async updateBook(token, bookId, params) {
    return await base.execute(
      "put",
      base.__adminPrefix__,
      routes.books.item(bookId),
      params,
      token
    );
  },

  async deleteBook(token, bookId) {
    return await base.execute(
      "delete",
      base.__adminPrefix__,
      routes.books.item(bookId),
      {},
      token
    );
  },

  async loadFileForFrequency(token, bookId, params) {
    return await base.execute(
      "post",
      base.__adminPrefix__,
      routes.books.frequency(bookId),
      params,
      token
    );
  },
};
