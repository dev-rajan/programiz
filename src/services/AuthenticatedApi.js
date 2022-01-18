import BaseRequest, { DEFAULT_HEADERS } from "./BaseRequest";

const getToken = () => `Bearer ${process.env.NEXT_PUBLIC_USER_TOKEN}`;

class AuthenticatedApi extends BaseRequest {
  static authenticatedHeaders() {
    const authHeader = { Authorization: getToken() };
    const headers = { ...DEFAULT_HEADERS, ...authHeader };

    return headers;
  }

  static headers() {
    const defaultHeaders = { headers: this.authenticatedHeaders() };

    return { ...defaultHeaders };
  }
}

export default AuthenticatedApi;
