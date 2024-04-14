import axios from "axios";
import { useSelector } from "react-redux";
export const BASE_URL = "https://next-blog-api-g2ys.onrender.com/api";

const useAuthAxios = () => {
  const { user } = useSelector((store) => store.user);
  let accessToken;
  if (user !== null) {
    accessToken = user.access;
  }

  const authInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      common: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  return authInstance;
};

export default useAuthAxios;
