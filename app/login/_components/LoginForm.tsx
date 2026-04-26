"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <form className="h-auto w-full text-center space-y-4 inline-block [&_label]:w-full">
      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none">
        <MdOutlineEmail className="opacity-50" />

        <input
          type="text"
          {...register("email")}
          className=" grow"
          placeholder="Email address"
        />
      </label>
      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none">
        <MdLockOutline className="opacity-50" />
        <input
          type="password"
          {...register("password")}
          className="grow"
          placeholder="Password"
        />
      </label>
      <div className="flex justify-between mb-4">
        <label className="label text-sm">
          <input
            type="checkbox"
            {...register("rememberMeCheckBox")}
            className="checkbox checkbox-xs rounded-xs"
          />
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="w-full btn border-0 btn-lg rounded-3xl bg-linear-to-br from-primary to-secondary text-white uppercase text-sm mt-4"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
