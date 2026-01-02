import { useMutation } from "@tanstack/react-query";
import { LoginType } from "../types/login.type";
import axiosInstance from "@/app/lib/axiosInstance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: {
    id: number;
    username: string;
    role: "siswa" | "stan";
    maker_id: number;
    created_at: string;
    updated_at: string;
  };
}

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (body: LoginType) => {
      try {
        const { data: response }: { data: LoginResponse } =
          await axiosInstance.post("/login_siswa", body);

        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("token_type", response.token_type);
        localStorage.setItem("user", JSON.stringify(response.user));

        toast.success("Berhasil masuk");

        if (response.user.role === "siswa") {
          router.push("/student");
        } else if (response.user.role === "stan") {
          router.push("/stan");
        }

        return response;
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message || "Gagal masuk, silakan coba lagi";
        toast.error(errorMessage);

        throw new Error(errorMessage);
      }
    },
  });
};