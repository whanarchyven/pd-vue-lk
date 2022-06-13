import axios from "axios";
import qs from "qs";

const URL = "http://997a-95-29-161-222.ngrok.io";

export default {
  __host__: URL.endsWith("/") ? URL : URL + "/",
  __prefix__: "api/v1/",
  __adminPrefix__: "api/v1/admin/",

  async execute(method, prefix, path, params = {}, token = null) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-requested-with": "XMLHttpRequest",
    };

    if (token) {
      headers["Authorization"] = token;
    }

    const request = {
      method: method,
      url: this.__host__ + prefix + path,
      headers: headers,
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    };

    if (method === "get") {
      request.params = params;
    } else {
      request.data = params;
    }

    try {
      const response = await axios(request);

      return {
        status: response.status,
        headers: response.headers,
        body: response.data,
      };
    } catch (e) {
      if (e.response.status >= 300 && e.response.status < 400) {
        return {
          status: e.response.status,
          headers: e.response.headers,
          body: e.response.data,
        };
      }

      throw e;
    }
  },
};
