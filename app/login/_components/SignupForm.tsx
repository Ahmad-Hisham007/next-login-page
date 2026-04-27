import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import {
  MdLockOutline,
  MdOutlineEmail,
  MdOutlinePhoneEnabled,
} from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type FormInputs = {
  name: string;
  phoneNumber: number;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword_2, setShowPassword_2] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();
  return (
    <form className="h-auto w-full text-center space-y-4 inline-block [&_label]:w-full">
      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none">
        <FaRegUser className="opacity-50" />

        <input
          type="text"
          {...register("name")}
          className=" grow"
          placeholder="E.g. John Smith"
        />
      </label>
      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none">
        <MdOutlinePhoneEnabled className="opacity-50" />

        <input
          type="text"
          {...register("phoneNumber")}
          className=" grow"
          placeholder="+xx xxx xxxx"
        />
      </label>
      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none">
        <MdOutlineEmail className="opacity-50" />

        <input
          type="text"
          {...register("name")}
          className=" grow"
          placeholder="Email address"
        />
      </label>
      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none relative">
        <MdLockOutline className="opacity-50" />
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          className="grow"
          placeholder="Password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </label>

      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none relative">
        <MdLockOutline className="opacity-50" />
        <input
          type={showPassword_2 ? "text" : "password"}
          {...register("confirmPassword")}
          className="grow"
          placeholder="Confirm Password"
        />
        <button
          type="button"
          onClick={() => setShowPassword_2(!showPassword_2)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 z-100"
        >
          {showPassword_2 ? <FaEyeSlash /> : <FaEye />}
        </button>
      </label>

      <button
        type="submit"
        className="w-full btn border-0 btn-lg rounded-3xl bg-linear-to-br from-primary to-secondary text-white uppercase text-sm mt-4"
      >
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
