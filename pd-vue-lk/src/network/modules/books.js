import base from "@/network/base";

export default {
  async loadBooks(token, params) {
    return await base.execute(
      "get",
      base.__adminPrefix__,
      "books",
      params,
      token
    );
  },
};
