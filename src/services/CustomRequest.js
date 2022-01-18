import axios from "axios";

const JSON_PATH = "/data";

class CustomRequest {
  static getJson(slug) {
    return axios.get(`${JSON_PATH}/${slug}.json`);
  }
}

export default CustomRequest;
