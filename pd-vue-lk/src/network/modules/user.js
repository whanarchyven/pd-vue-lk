import base from "@/network/base";

export default {
  async getUserInfo(token) {
    return await base.execute("get", base.__prefix__, "user", {}, token);
  },
};
