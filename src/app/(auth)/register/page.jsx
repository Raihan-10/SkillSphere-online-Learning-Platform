"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { MdAccountCircle } from "react-icons/md";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegisterForm = (info) => {
    console.log(info, "info");
    const {name,email,password}=info
    console.log(name, email, password)
  };
  return (
    <div
      className="max-w-7xl mx-auto flex flex-col justify-center items-center  min-h-[80vh]
    "
    >
      <div className="boder-3 p-5 mt-10 mb-10 md:p-10 bg-gray-100 space-y-5 border-blue-400 rounded-tr-[50px] rounded-bl-[50px]">
        <h3 className="font-bold text-4xl">Login to your account</h3>

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
          <fieldset className="fieldset">
            <legend className="fieldset-legend  text-lg md:text-xl">
              Password
            </legend>
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Type your password here"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-lg md:text-xl text-white ">This field is required</span>}
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
