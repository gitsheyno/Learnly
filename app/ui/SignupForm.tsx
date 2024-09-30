"use client";

import { useFormState } from "react-dom";
import { Input, Button } from "@nextui-org/react";
import { registerUser } from "@/actions/auth";
import Link from "next/link";
import Submit from "./SubmitButton";
export type State = {
  errors?: {
    email?: string;
    password?: string;
  };
  message?: string | null;
};
const initState: State = { message: null, errors: {} };

const SignupForm = () => {
  const [formState, action] = useFormState<State>(
    registerUser as any,
    initState,
  );

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign up</h3>
      <Input
        fullWidth
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
        aria-describedby="email-error"
      />
      {formState.errors?.email && (
        <p id="email-error" className="mt-2 text-sm text-red-500">
          {formState.errors.email}
        </p>
      )}

      <Input
        name="password"
        fullWidth
        size="lg"
        type="password"
        placeholder="Password"
        aria-describedby="password-error"
      />
      {formState.errors?.password && (
        <p id="password-error" className="mt-2 text-sm text-red-500">
          {formState.errors.password}
        </p>
      )}
      <Submit label={"signup"} />
      <div>
        <Link href="/signin">{`Already have an account?`}</Link>
      </div>

      {formState.message && (
        <div
          className="mt-2 text-sm text-red-500"
          aria-live="polite"
          aria-atomic="true"
        >
          {formState.message}
        </div>
      )}
    </form>
  );
};

export default SignupForm;
