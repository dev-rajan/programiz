import UnAuthenticatedApi from "../UnauthenticatedApi";

const API_URL = {
  GET: "/PaymentGateway/subscriptions?paymentType=1",
};

class SubscriptionApi {
  static get() {
    return UnAuthenticatedApi.get(`${API_URL.GET}`);
  }
}

export default SubscriptionApi;
