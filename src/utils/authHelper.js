import Cookies from "js-cookie";
class AuthHelper {
  isAuthenticated = () => Boolean(Cookies.get("access_token"));
  getToken = () => Cookies.get("access_token");
  setToken = (token) => Cookies.set("access_token", token);
  clearToken = () => Cookies.remove("access_token");
  getRefreshToken = () => Cookies.get("refresh_token");
  setRefreshToken = (token) => Cookies.set("refresh_token", token);
  clearRefreshToken = () => Cookies.remove("refresh_token");
  clearAllTokens = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
  };
}

export default AuthHelper;
