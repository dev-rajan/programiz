import UnAuthenticatedApi from "../UnauthenticatedApi";

const API_URL = {
  POST: "/Feedback/enterprise-contacts",
};

const API_URI = {
  GET: "/Feedback/queriestype",
  POST: "Feedback/query",
};

class ContactFormApi {
  static post(data) {
    return UnAuthenticatedApi.post(API_URL.POST, data);
  }
  static getFeed() {
    return UnAuthenticatedApi.get(API_URI.GET);
  }
  static postFeed(data) {
    return UnAuthenticatedApi.post(API_URI.POST, data);
  }
}

export default ContactFormApi;
