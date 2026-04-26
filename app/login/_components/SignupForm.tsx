import React from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import {
  MdLockOutline,
  MdOutlineEmail,
  MdOutlinePhoneEnabled,
} from "react-icons/md";

type FormInputs = {
  name: string;
  phoneNumber: number;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
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
      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none">
        <MdLockOutline className="opacity-50" />
        <input
          type="password"
          {...register("password")}
          className="grow"
          placeholder="Password"
        />
      </label>

      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none">
        <MdLockOutline className="opacity-50" />
        <input
          type="password"
          {...register("confirmPassword")}
          className="grow"
          placeholder="Confirm Password"
        />
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
