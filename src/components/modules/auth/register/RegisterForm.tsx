"use client";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { registerUser } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import SHForm from "@/components/ui/core/form/SHForm";
import SHInput from "@/components/ui/core/form/SHInput";
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiLock } from "react-icons/fi";

const RegisterForm = () => {
  const { setIsLoading } = useUser();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalState, setModalState] = useState("");

  const handleFormSubmit = async (data: FieldValues) => {
    try {
      const res = await registerUser(data);
      if (res.success) {
        setIsLoading(true);
        setIsConfirmOpen(true);
        setModalState("success");
        setModalContent("You have successfully registered");
      } else {
        setIsConfirmOpen(true);
        setModalContent(
          res?.message || "Registration failed. Please try again."
        );
        setModalState("failed");
      }
    } catch (error: any) {
      setModalContent(
        error.message || "An unexpected error occurred. Please try again."
      );
      setIsConfirmOpen(true);
      setModalState("failed");
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#537cd9] via-[#6d90df] to-[#ffb300]">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/30"
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-white">Sign Up</h1>
          <p className="text-white/70 text-sm">
            Join us today and start your journey!
          </p>
        </div>
        <SHForm onSubmit={handleFormSubmit}>
          {[
            { name: "name", type: "text", icon: <FiUser /> },
            { name: "email", type: "email", icon: <FiMail /> },
            { name: "phoneNumber", type: "text", icon: <FiPhone /> },
            { name: "password", type: "password", icon: <FiLock /> },
          ].map(({ name, type, icon }) => (
            <div
              key={name}
              className="relative flex items-center border border-white/50 rounded-lg p-3 my-3 bg-white/20"
            >
              <span className="text-white/70 mr-2">{icon}</span>
              <SHInput
                required
                type={type}
                name={name}
                label={name.charAt(0).toUpperCase() + name.slice(1)}
              />
            </div>
          ))}
          <div className="flex justify-end my-2">
            <a href="#" className="text-white text-sm hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-[#149777] to-[#149777] hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
          >
            Register
          </button>
        </SHForm>
        <p className="text-white text-center mt-4 text-sm">
          Already have an account?
          <Link href="/login" className="hover:underline ml-1">
            Login
          </Link>
        </p>
      </motion.div>
      <SuccessModal
        isOpen={isConfirmOpen}
        status={modalState}
        content={modalContent}
        onOpenChange={() => setIsConfirmOpen(false)}
      />
    </div>
  );
};

export default RegisterForm;
