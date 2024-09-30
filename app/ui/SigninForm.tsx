"use client";

import { useFormState } from "react-dom";
import { Input, Button } from "@nextui-org/react";
import { signinUser } from "@/actions/auth";
import Link from "next/link";
import Submit from "./SubmitButton";

export type State = {
  errors?: {
    emailError?: string;
    passError?: string;
  };
  message?: string | null;
};

const initState: State = { message: null, errors: {} };

const SigninForm = () => {
  const [formState, action] = useFormState<State>(signinUser as any, initState);

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        // required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        // required
        size="lg"
        type="password"
        placeholder="Password"
      />
      <Submit label={"signin"} />
      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {formState.errors && (
          <>
            {Object.entries(formState.errors).map(([key, value]) => (
              <p className="mt-2 text-sm text-red-500" key={key}>
                {value as string}
              </p>
            ))}
          </>
        )}
      </div>
    </form>
  );
};

export default SigninForm;
