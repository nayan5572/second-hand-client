// "use client";

// // import styles from "../login/LoginForm.module.css";
// import Link from "next/link";
// import SHForm from "@/components/ui/core/form/SHForm";
// import SHInput from "@/components/ui/core/form/SHInput";
// import { FieldValues } from "react-hook-form";
// import { loginUser } from "@/services/AuthService";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { useUser } from "@/context/UserContext";
// import { useState } from "react";

// interface LoginFormProps {
//   query: { [key: string]: string | string[] | undefined };
// }

// import ForgetPassModal from "@/components/ui/core/SHModel/ForgetPassModal";
// import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";
// import { Button } from "@/components/ui/button";

// const LoginForm = ({ query }: LoginFormProps) => {
//   const router = useRouter();
//   const { setIsLoading } = useUser();
//   const [isForgotPopupOpen, setIsForgotPopupOpen] = useState<boolean>(false);

//   const [isConfirmOpen, setIsConfirmOpen] = useState(false);
//   const [modalContent, setModalContent] = useState("");
//   const [modalState, setModalState] = useState("");
//   const redirect = Array.isArray(query?.redirectPath)
//     ? query?.redirectPath[0]
//     : query?.redirectPath;

//   const handleFormSubmit = async (data: FieldValues) => {
//     try {
//       const res = await loginUser(data);
//       if (res.success) {
//         setIsLoading(true);
//         toast.success(res?.message);
//         router.push("/");
//         if (redirect) {
//           router.push(redirect);
//         } else {
//           router.push("/");
//         }
//       } else {
//         toast.error(res?.message || "Login failed. Please try again.");
//       }
//     } catch (error: any) {
//       toast.error(
//         error.message || "An unexpected error occurred. Please try again."
//       );
//     }
//   };

//   // className={`${styles.banner} relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center`}

//   return (
//     <div
//       className={`relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center`}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-[2px]"></div>

//       <div className="relative z-10 w-full max-w-md p-6 bg-[#fdfdfe] rounded-lg shadow-lg">
//         <div className="py-5">
//           <h1 className="text-xl font-semibold">Login</h1>
//           <p className="font-extralight text-sm text-gray-600">Welcome back!</p>
//         </div>
//         <SHForm onSubmit={handleFormSubmit}>
//           <div className="w-full border border-gray-300 rounded-lg p-2 my-3">
//             <SHInput required type="email" name="email" label="Email" />
//           </div>
//           <div className="w-full border border-gray-300 rounded-lg p-2 my-3">
//             <SHInput
//               required
//               type="password"
//               name="password"
//               label="Password"
//             />
//           </div>

//           <div className="flex justify-end items-center my-2">
//             <button
//               onClick={() => setIsForgotPopupOpen(true)}
//               className="text-[#ffb300] text-[16px]"
//             >
//               Forgot password?
//             </button>
//           </div>

//           <Button
//             type="submit"
//             className="w-full py-2 text-white bg-gradient-to-r from-[#149777] to-[#149777] hover:from-[#3a5eb4] hover:to-[#537cd9] rounded-lg"
//           >
//             Login
//           </Button>
//         </SHForm>
//         <p className="text-sm text-gray-600 text-center my-3">
//           Do not have an account ?
//           <Link href="/register" className="text-primary">
//             Register
//           </Link>
//         </p>
//       </div>
//       <ForgetPassModal
//         setIsConfirmOpen={setIsConfirmOpen}
//         setModalContent={setModalContent}
//         setModalState={setModalState}
//         isOpen={isForgotPopupOpen}
//         onClose={() => setIsForgotPopupOpen(false)}
//       />
//       <SuccessModal
//         isOpen={isConfirmOpen}
//         status={modalState}
//         content={modalContent}
//         onOpenChange={() => setIsConfirmOpen(false)}
//       />
//     </div>
//   );
// };

// export default LoginForm;

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
// import Image from "next/image";

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
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg  text-gray-300 custom-shadow">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-black">Welcome Back!</h1>
          <p className="text-sm text-black">Login to your account</p>
        </div>

        <SHForm onSubmit={handleFormSubmit}>
          <div className="mb-4 text-black">
            <SHInput
              required
              type="email"
              name="email"
              label="Email"
              placeholder="Type your email"
            />
          </div>
          <div className="mb-4 text-black">
            <SHInput
              required
              type="password"
              name="password"
              label="Password"
              placeholder="Type your password"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox text-primary" />
              <span className="text-black text-sm">Remember Me</span>
            </label>
            <button
              onClick={() => setIsForgotPopupOpen(true)}
              className="text-yellow-600 text-sm hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full py-2 bg-[#149777] transition-all duration-300 text-white font-semibold rounded-lg shadow-md"
          >
            Login
          </Button>
        </SHForm>

        {/* Social Login Buttons */}
        {/* <div className="mt-6 flex flex-col space-y-3">
          <button className="w-full py-2 flex items-center justify-center bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-200 transition">
            <Image src="" alt="Google" width={20} height={20} /> Sign in with
            Google
          </button>
          <button className="w-full py-2 flex items-center justify-center bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-700 transition">
            <Image src="/github-icon.svg" alt="GitHub" width={20} height={20} />{" "}
            Sign in with GitHub
          </button>
        </div> */}

        {/* Register Link */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Dont have an account?{" "}
          <Link href="/register" className="text-yellow-600 hover:underline">
            Register
          </Link>
        </p>
      </div>

      {/* Modals */}
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
