import AuthenticatedApi from "../AuthenticatedApi";

const API_URL = {
  GET: "/LearningPaths",
};

const API_URI = {
  GET: "/Sync",
};

class LearningApi {
  static getAll() {
    return AuthenticatedApi.get(API_URL.GET);
  }

  static getLearnSlug(slug) {
    return AuthenticatedApi.get(`${API_URL.GET}/slug/${slug}`);
  }

  static getLearnPath(id) {
    return AuthenticatedApi.get(`${API_URL.GET}/${id}`);
  }

  static getLearnTopic(id) {
    return AuthenticatedApi.get(
      `${API_URL.GET}/learningPathsWithCourse?courseId=${id}`
    );
  }

  static getRecommended() {
    return AuthenticatedApi.get(`${API_URI.GET}/popularLearningPaths`);
  }
}

export default LearningApi;
