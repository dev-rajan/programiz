import UnAuthenticatedRequest from "services/UnauthenticatedApi";

const API_URL = {
  GET: "/Marketing/Course",
  CHALLENGE: "/Marketing/SectionContent/slug",
};

const API_URI = {
  GET: "/Marketing",
};

const API_SECTION = {
  GET: "/Marketing/SectionContent",
};

class CourseApi {
  static getAll() {
    return UnAuthenticatedRequest.get(API_URL.GET);
  }

  static getSection(slug) {
    return UnAuthenticatedRequest.get(`${API_SECTION.GET}/${slug}/details`);
  }

  static getChallengeBySlug(courseSlug, challengeSlug) {
    return UnAuthenticatedRequest.get(
      `${API_URL.CHALLENGE}/${courseSlug}/${challengeSlug}/details`
    );
  }

  static getCourseSlug(slug) {
    return UnAuthenticatedRequest.get(`${API_URL.GET}/slug/${slug}`);
  }

  static getCourse() {
    return UnAuthenticatedRequest.get(`${API_URL.GET}/Course`);
  }

  static getCourseToc(id) {
    return UnAuthenticatedRequest.get(`${API_URL.GET}/${id}/toc`);
  }

  static getRecommended() {
    return UnAuthenticatedRequest.get(`${API_URI.GET}/popularCourses`);
  }
}

export default CourseApi;
