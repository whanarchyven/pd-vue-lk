import base from "@/network/base";
// import routes from "@/network/routes";

export default {
  async loadGenres(token, params) {
    return await base.execute(
      "get",
      base.__adminPrefix__,
      "genres",
      params,
      token
    );
  },
};
