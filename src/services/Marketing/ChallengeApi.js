import UnAuthenticatedRequest from "services/UnauthenticatedApi";

const API_URL = {
  GET: "/Challenge",
  POST: "/Marketing/Challenge/run",
  CHALLENGE: "/Marketing/Course",
};

class ChallengeApi {
  static post(data) {
    return UnAuthenticatedRequest.post(API_URL.POST, data);
  }

  static getChallengeBySlug(slug) {
    return UnAuthenticatedRequest.get(
      `${API_URL.CHALLENGE}/${slug}/FeaturedChallenges`
    );
  }
}

export default ChallengeApi;
