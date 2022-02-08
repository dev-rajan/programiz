import AuthenticatedApi from "../AuthenticatedApi";

const API_URL = {
  GET: "/LearningPaths",
};

class LearningpathApi {
  static getAll() {
    return AuthenticatedApi.get(API_URL.GET);
  }
}

export default LearningpathApi;
