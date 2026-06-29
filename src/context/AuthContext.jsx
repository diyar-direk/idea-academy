import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import Loading from "./../components/loading/Loading";
import { Outlet, useNavigate } from "react-router";
import axiosInstance from "../utils/axios";
import { extarctErrorMessage } from "../utils/extarctErrorMessage";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import endPoints from "../constants/endPoints";
import AuthHelper from "../utils/authHelper";

const AuthContext = createContext();

const authHelper = new AuthHelper();
export const AuthProvider = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const query = useQueryClient();
  const isRefreshing = useRef(false);
  const failedQueue = useRef([]);

  const logout = useCallback(async () => {
    await axiosInstance.post(endPoints.logout);
    query.clear();
    authHelper.clearAllTokens();
    nav("/");
  }, [query, nav]);

  const processQueue = (error, token = null) => {
    failedQueue.current.forEach(({ resolve, reject }) => {
      if (error) reject(error);
      else resolve(token);
    });
    failedQueue.current = [];
  };

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        const token = authHelper.getToken();
        if (token) config.headers["Authorization"] = `Bearer ${token}`;

        if (config.method !== "get") setLoading(true);
        return config;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      },
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        setLoading(false);

        if (response.config.method !== "get") {
          const message = response?.message || "Operation done successfully";
          toast.success(message);
        }

        return response;
      },
      async (error) => {
        setLoading(false);

        const originalRequest = error.config;
        const status = error.response?.status;
        const { url } = originalRequest || {};

        if (url === endPoints.me || url === endPoints.refresh) {
          return Promise.reject(error);
        }

        if (status === 401 && !originalRequest._retry) {
          if (isRefreshing.current) {
            return new Promise((resolve, reject) => {
              failedQueue.current.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers["Authorization"] = `Bearer ${token}`;
                return axiosInstance(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          originalRequest._retry = true;
          isRefreshing.current = true;

          try {
            const { data } = await axiosInstance.post(endPoints.refresh);
            const newToken = data.accessToken;

            axiosInstance.defaults.headers.common["Authorization"] =
              `Bearer ${newToken}`;
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
            authHelper.setToken(newToken);

            processQueue(null, newToken);

            return axiosInstance(originalRequest);
          } catch (refreshError) {
            processQueue(refreshError, null);
            logout();
            return Promise.reject(refreshError);
          } finally {
            isRefreshing.current = false;
          }
        }

        toast.error(extarctErrorMessage(error));

        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [logout]);

  const { data: user, isLoading } = useQuery({
    queryKey: [endPoints.me],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endPoints.me);
      return data.data || null;
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: authHelper.isAuthenticated(),
  });

  if (isLoading) return <Loading />;

  return (
    <AuthContext.Provider value={{ user, logout }}>
      <Outlet />
      {loading && <Loading />}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
