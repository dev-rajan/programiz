import AuthenticatedApi from "../AuthenticatedApi";

const API_URL = {
  GET: "/Challenge",
  POST: "/Challenge/Run",
};

class ChallengeApi {
  static post(data) {
    return AuthenticatedApi.post(API_URL.POST, data);
  }
}

export default ChallengeApi;
