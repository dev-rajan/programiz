import UnAuthenticatedRequest from "services/UnauthenticatedApi";

const API_URL = {
  GET: "/Marketing/LearningPaths",
  WITH_COURSE: "/Marketing/LearningPathsWithCourse",
};

const API_URI = {
  GET: "/Marketing",
};

class LearningApi {
  static getAll() {
    return UnAuthenticatedRequest.get(API_URL.GET);
  }

  static getWithCourse() {
    return UnAuthenticatedRequest.get(API_URL.WITH_COURSE);
  }

  static getLearnSlug(slug) {
    return UnAuthenticatedRequest.get(`${API_URL.GET}/slug/${slug}`);
  }

  static getLearnPath(id) {
    return UnAuthenticatedRequest.get(`${API_URL.GET}/${id}`);
  }

  static getLearnTopic(id) {
    return UnAuthenticatedRequest.get(
      `${API_URL.GET}/learningPathsWithCourse?courseId=${id}`
    );
  }

  static getRecommended() {
    return UnAuthenticatedRequest.get(`${API_URI.GET}/popularLearningPaths`);
  }
}

export default LearningApi;
