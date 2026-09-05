"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false)

  const handleRegisterForm = async (info) => {
    console.log(info, "info");
    const { name, email, password, photoUrl } = info
    console.log(name, email, password);

    const { data, error } = await authClient.signUp.email({
      name: name, // required, The name of the user.
      email: email, // required, The email address of the user.
      password: password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      image: photoUrl, // An optional profile image of the user.
      callbackURL: "/course", // An optional URL to redirect to after the user signs up.
    });
    if (error) {
      alert(error.message);
    }

    if (data)
      alert("Signed up successfully")

    console.log(data, error)
  };
  return (
    <div
      className="max-w-7xl mx-auto flex flex-col justify-center items-center  min-h-[80vh]
    "
    >
      <div className="boder-3 p-5 mt-10 mb-10 md:p-10 bg-gray-100 space-y-5 border-blue-400 rounded-tr-[50px] rounded-bl-[50px]">
        <h3 className="font-bold text-4xl">Register your account</h3>

        <form action="" onSubmit={handleSubmit(handleRegisterForm)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg md:text-xl">
              Name
            </legend>
            <input
              type="name"
              id="name"
              className="input"
              placeholder="Type your name here"
              {...register("name")}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg md:text-xl">
              Photo URL
            </legend>
            <input
              type="text"
              className="input"
              placeholder="Type your URL here"
              {...register("photoUrl", { required: "Photo URL required" })}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg md:text-xl">
              Email
            </legend>
            <input
              type="email"
              className="input"
              placeholder="Type your email here"
              {...register("email", { required: "Email is required" })}
            />
          </fieldset>
          <fieldset className="fieldset relative">
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
            <span className="absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye size={18}/> : <IoMdEyeOff size={18} />
              }
            </span>

            {errors.password && <span className="text-lg md:text-xl text-red-500 ">This field is required</span>}
          </fieldset>

          <button className="flex justify-center mt-5 w-full gap-2 btn rounded-3xl bg-black text-white border-none hover:bg-gray-700">
            <span className="md:text-xl">Register</span>
            <MdAccountCircle className="md:text-2xl text-xl  hover:text-green-500" />
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
