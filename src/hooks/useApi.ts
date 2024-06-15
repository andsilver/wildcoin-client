import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Alert } from "@/utils/alert";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
api.interceptors.request.use((options) => {
  const token = localStorage.getItem("token");

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  return options;
});

export default function useApi(showErrorAlert = true) {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    api.interceptors.response.use((res) => {
      if (res.status === 401) {
        if (showErrorAlert) {
          Alert.error("Unauthorized request.");
          router.push("/");
        }
        logout();
      }
      return res;
    });

    return () => api.interceptors.response.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return api;
}
