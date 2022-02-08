import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = `${apiUrl}/api`;

export const DEFAULT_HEADERS = {
  Accept: "application/json",
};

class BaseRequest {
  static headers() {
    return { headers: DEFAULT_HEADERS };
  }

  static get(url) {
    return axios.get(url, this.headers());
  }

  static post(url, data) {
    return axios.post(url, data, this.headers());
  }

  static postAuth(url, data, header) {
    return axios.post(url, data, header);
  }

  static patch(url, data) {
    return axios.patch(url, data, this.headers());
  }

  static put(url, data) {
    return axios.put(url, data, this.headers());
  }

  static delete(url) {
    return axios.delete(url, this.headers());
  }
}

export default BaseRequest;
