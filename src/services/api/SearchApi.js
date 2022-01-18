import UnAuthenticatedApi from "../UnauthenticatedApi";

const API_URL = {
  GET: "/Search",
};

class SearchApi {
  static getSearch(keyword) {
    return UnAuthenticatedApi.get(`${API_URL.GET}?q=${keyword}`);
  }
}

export default SearchApi;
