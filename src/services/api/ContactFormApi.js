import UnAuthenticatedApi from "../UnauthenticatedApi";

const API_URL = {
  POST: "/Feedback/enterprise-contacts",
};

class ContactFormApi {
  static post(data) {
    return UnAuthenticatedApi.post(API_URL.POST, data);
  }
}

export default ContactFormApi;
