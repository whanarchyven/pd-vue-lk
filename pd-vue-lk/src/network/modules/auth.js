import base from "@/network/base";
import routes from "@/network/routes";

export default {

    async login(userData) {
        /**
         * userData.email
         * userData.password
         * userData.remember
         */
        return await base.execute('post', base.__prefix__, routes.auth.login, userData, null);
    }

}
