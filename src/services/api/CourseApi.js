import AuthenticatedApi from "../AuthenticatedApi";

const API_URL = {
  GET: "/Course",
};

const API_URI = {
  GET: "/Sync",
};

class CourseApi {
  static getAll() {
    return AuthenticatedApi.get(API_URL.GET);
  }

  static getCourseSlug(slug) {
    return AuthenticatedApi.get(`${API_URL.GET}/slug/${slug}`);
  }

  static getCourse() {
    return AuthenticatedApi.get(`${API_URL.GET}/Course`);
  }

  static getCourseSummary(id) {
    return AuthenticatedApi.get(`${API_URL.GET}/${id}/summary`);
  }

  static getCourseToc(id) {
    return AuthenticatedApi.get(`${API_URL.GET}/${id}/toc`);
  }

  static getCourseTopic(id) {
    return AuthenticatedApi.get(`${API_URL.GET}/${id}/topics`);
  }

  static getRecommended() {
    return AuthenticatedApi.get(`${API_URI.GET}/popularCourses`);
  }
}

export default CourseApi;
