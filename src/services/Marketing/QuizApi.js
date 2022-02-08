const {
  default: UnAuthenticatedRequest,
} = require("services/UnauthenticatedApi");

const API_URL = {
  GET: "/Marketing/featured-contents",
};

class QuizApi {
  static getQuiz() {
    return UnAuthenticatedRequest.get(`${API_URL.GET}`);
  }
}

export default QuizApi;
