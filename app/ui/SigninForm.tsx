"use client";

import { useFormState } from "react-dom";
import { Input, Divider, Card, CardBody, CardHeader } from "@nextui-org/react";
import { signinUser } from "@/actions/auth";
import Link from "next/link";
import Submit from "./SubmitButton";
import { FiMail, FiLock, FiAlertCircle } from "react-icons/fi";

export type State = {
  errors?: {
    email?: string;
    password?: string;
  };
  message?: string | null;
};

const initState: State = { message: null, errors: {} };

const SigninForm = () => {
  const [formState, action] = useFormState<State>(signinUser as any, initState);

  return (
    <Card className="max-w-md w-full mx-auto shadow-xl border-none" isBlurred>
      <CardHeader className="flex flex-col gap-1 pb-0 pt-6 px-6">
        <h2 className="text-2xl font-bold">Welcome back</h2>
        <p className="text-sm text-default-500">
          Sign in to continue your learning journey
        </p>
      </CardHeader>

      <CardBody className="px-6 py-5">
        <form action={action} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Input
              fullWidth
              size="lg"
              placeholder="Email address"
              name="email"
              type="email"
              aria-describedby="email-error"
              startContent={<FiMail className="text-default-400" />}
              classNames={{
                inputWrapper: formState.errors?.email
                  ? "border-2 border-danger focus-within:!border-danger"
                  : "focus-within:border-primary",
              }}
            />
            {formState.errors?.email && (
              <p
                id="email-error"
                className="flex items-center gap-1 text-sm text-danger mt-1"
              >
                <FiAlertCircle size={14} />
                {formState.errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              name="password"
              fullWidth
              size="lg"
              type="password"
              placeholder="Password"
              aria-describedby="password-error"
              startContent={<FiLock className="text-default-400" />}
              classNames={{
                inputWrapper: formState.errors?.password
                  ? "border-2 border-danger focus-within:!border-danger"
                  : "focus-within:border-primary",
              }}
            />
            {formState.errors?.password && (
              <p
                id="password-error"
                className="flex items-center gap-1 text-sm text-danger mt-1"
              >
                <FiAlertCircle size={14} />
                {formState.errors.password}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Submit label="Sign In" />

          {formState.message && (
            <div
              className="p-3 bg-danger-50 border border-danger-200 text-danger rounded-lg flex items-center gap-2 mt-2"
              aria-live="polite"
              aria-atomic="true"
            >
              <FiAlertCircle />
              {formState.message}
            </div>
          )}

          <Divider className="my-4" />

          <div className="text-center">
            <span className="text-default-500">
              Don&apos;t have an account?{" "}
            </span>
            <Link
              href="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default SigninForm;
