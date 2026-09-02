"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { RiLoginBoxFill } from "react-icons/ri";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginForm = (data) => {
    console.log(data, "data");
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
            {/* <p className="label">Optional</p> */}
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
            {errors.password && <span className="text-lg md:text-xl text-red-500 ">This field is required</span>}
          </fieldset>

          <button className="flex justify-center mt-5 w-full gap-2 btn rounded-3xl bg-black text-white border-none hover:bg-gray-700">
            <span className="md:text-xl">Login</span>
            <RiLoginBoxFill className="md:text-2xl text-xl  hover:text-green-500" />
          </button>
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
