"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { RiLoginBoxFill } from "react-icons/ri";

function LoginFormContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackURL") || "/";
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleLoginForm = async (info) => {
    const { data, error } = await authClient.signIn.email({
      email: info.email,
      password: info.password,
      rememberMe: true,
      callbackURL,
    });

    console.log(data, error);
    if (error) {
      alert(error.message);
    }
    if (data) {
      alert("Loged in successfully");
    }
  };

  return (
    <div
      className="max-w-7xl mx-auto flex flex-col justify-center items-center  min-h-[80vh]
    "
    >
      <div className="boder-3 p-5 md:p-10 bg-gray-100 space-y-5 border-blue-400 rounded-tr-[50px] rounded-bl-[50px]">
        <h3 className="font-bold text-4xl">Login to your account</h3>

        <form action="" onSubmit={handleSubmit(handleLoginForm)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg md:text-xl">
              Email
            </legend>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Type your email here"
              {...register("email")}
            />
          </fieldset>
          <fieldset className="w-full fieldset relative">
            <legend className="fieldset-legend  text-lg md:text-xl">
              Password
            </legend>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="input pr-10"
              placeholder="Type your password here"
              {...register("password", { required: true })}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye size={18} /> : <IoMdEyeOff size={18} />}
            </span>
            {errors.password && (
              <span className="text-lg md:text-xl text-red-500 ">
                This field is required
              </span>
            )}
          </fieldset>

          <button className="flex justify-center mt-5 w-full gap-2 btn rounded-3xl bg-black text-white border-none hover:bg-gray-700">
            <span className="md:text-xl">Login</span>
            <RiLoginBoxFill className="md:text-2xl text-xl  hover:text-green-500" />
          </button>
          <hr className="h-1 mt-5 text-gray-400 border-dotted" />
          <p className="flex flex-col items-center justify-center">
            <span>Or</span>{" "}
            <span
              className="btn bg-black text-white rounded-3xl"
              onClick={handleGoogleSignIn}
            >
              Login with Google
            </span>
          </p>
        </form>
        <p>
          Create an account.{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginFormContent />
    </Suspense>
  );
}