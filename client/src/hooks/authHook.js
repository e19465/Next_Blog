import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logout, loginSuccess } from "../redux/features/user/userSlice";

export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const useAuthAxios = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const jwtAxios = axios.create({ baseURL: BASE_URL });
  const router = useRouter();
  let retry_attempt = false;
  let retryCounter = 0;

  jwtAxios.interceptors.request.use(
    (config) => {
      if (!retry_attempt) {
        if (user?.access) {
          config.headers.Authorization = `Bearer ${user.access}`;
        }
      }
      retry_attempt = false;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  jwtAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      const errorStatusCode = error.response?.status;

      if (
        (errorStatusCode === 401 || errorStatusCode === 403) &&
        retryCounter < 4
      ) {
        retryCounter++;
        try {
          const response = await axios.post(`${BASE_URL}/tokens/refresh/`, {
            refresh: user?.refresh,
          });
          if (response.status === 200) {
            dispatch(loginSuccess(response.data));
            retry_attempt = true;
            originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
            return jwtAxios(originalRequest);
          } else {
            dispatch(logout());
            router.push("/");
          }
        } catch (err) {
          console.log(err);
          dispatch(logout());
          router.push("/");
        }
      } else {
        dispatch(logout());
        router.push("/");
      }
      throw error;
    }
  );
  return jwtAxios;
};

export default useAuthAxios;
