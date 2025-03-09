"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import SHForm from "@/components/ui/core/form/SHForm";
import SHInput from "@/components/ui/core/form/SHInput";
import { Button } from "@/components/ui/button";
import ForgetPassModal from "@/components/ui/core/SHModel/ForgetPassModal";
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";
import { FieldValues } from "react-hook-form";
import { loginUser } from "@/services/AuthService";

const LoginForm = ({
  query,
}: {
  query: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const { setIsLoading } = useUser();
  const [isForgotPopupOpen, setIsForgotPopupOpen] = useState(false);
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
        router.push(redirect || "/");
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
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#537cd9] via-[#6d90df] to-[#ffb300]">
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-lg"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-sm text-gray-600">Login to your account</p>
        </div>

        <SHForm onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <SHInput
              required
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <SHInput
              required
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox text-primary" />
              <span className="text-gray-700 text-sm">Remember Me</span>
            </label>
            <button
              onClick={() => setIsForgotPopupOpen(true)}
              className="text-white text-sm hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#149777] to-[#149777] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300"
          >
            Login
          </Button>
        </SHForm>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-white hover:underline">
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
