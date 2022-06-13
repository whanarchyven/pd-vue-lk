import base from "@/network/base";

export default {
  async getUsers(token) {
    return await base.execute("get", base.__prefix__, "user", {}, token);
  },
};
