import base from "@/network/base";

export default {
  async login(userData) {
    /**
     * userData.email
     * userData.password
     * userData.remember
     */
    return await base.execute("post", base.__prefix__, "login", userData, null);
  },
};
