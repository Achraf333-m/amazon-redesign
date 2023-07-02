import useAuth from "@/cHooks/useAuth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Input {
  email: string,
  password: string
}

function SignUp() {
  const { signUp } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = async ({ email, password }) => {
    await signUp(email, password)
  }

  return (
   <div className="mx-auto max-w-5xl">
      <img
        className="w-[120px] invert"
        src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
        alt=""
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Log In!</h1>
        <div>
          <label>
            <input className="bg-transparent" type="email" placeholder="email" {...register('email', {required: true})} />
            {errors.email && <p>Emails must be correct</p>}
          </label>

          <label>
            <input className="bg-transparent" type="password" placeholder="password" {...register('password', {required: true})} />
            {errors.password && <p>Passwords must be correct</p>}
          </label>
        </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
