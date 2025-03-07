"use client";

import styles from "../login/LoginForm.module.css";
import Link from "next/link";
import SHForm from "@/components/ui/core/form/SHForm";
import SHInput from "@/components/ui/core/form/SHInput";
import { FieldValues } from "react-hook-form";
import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { useState } from "react";

interface LoginFormProps {
  query: { [key: string]: string | string[] | undefined };
}

import ForgetPassModal from "@/components/ui/core/SHModel/ForgetPassModal";
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";

const LoginForm = ({ query }: LoginFormProps) => {
  const router = useRouter();
  const { setIsLoading } = useUser();
  const [isForgotPopupOpen, setIsForgotPopupOpen] = useState<boolean>(false);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalState, setModalState] = useState("");
  const redirect = Array.isArray(query?.redirectPath)
    ? query?.redirectPath[0]
    : query?.redirectPath;
  const handleFormSubmit = async (data: FieldValues) => {
    try {
      const res = await loginUser(data);
      if (res.success) {
        setIsLoading(true);
        toast.success(res?.message);
        router.push("/");
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else {
        toast.error(res?.message || "Login failed. Please try again.");
      }
    } catch (error: any) {
      toast.error(
        error.message || "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <div
      className={`${styles.banner} relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-[2px]"></div>

      <div className="relative z-10 w-full max-w-md p-6 bg-[#fdfdfe] rounded-lg shadow-lg">
        <div className="py-5">
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600">Welcome back!</p>
        </div>
        <SHForm onSubmit={handleFormSubmit}>
          <div className="w-full border border-gray-300 rounded-lg p-2 my-3">
            <SHInput required type="email" name="email" label="Email" />
          </div>
          <div className="w-full border border-gray-300 rounded-lg p-2 my-3">
            <SHInput
              required
              type="password"
              name="password"
              label="Password"
            />
          </div>

          <div className="flex justify-end items-center my-2">
            <button
              onClick={() => setIsForgotPopupOpen(true)}
              className="text-[#ffb300] text-[16px]"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] rounded-lg"
          >
            Login
          </button>
        </SHForm>
        <p className="text-sm text-gray-600 text-center my-3">
          Do not have an account ?
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>
      </div>
      <ForgetPassModal
        setIsConfirmOpen={setIsConfirmOpen}
        setModalContent={setModalContent}
        setModalState={setModalState}
        isOpen={isForgotPopupOpen}
        onClose={() => setIsForgotPopupOpen(false)}
      />
      <SuccessModal
        isOpen={isConfirmOpen}
        status={modalState}
        content={modalContent}
        onOpenChange={() => setIsConfirmOpen(false)}
      />
    </div>
  );
};

export default LoginForm;
