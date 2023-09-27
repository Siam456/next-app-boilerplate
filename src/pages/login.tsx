import { ChatbotLogo } from '@/logos';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SInputBox } from '@/components/input';
import { SubmitButton } from '@/components/buttons';
import { FieldValues, useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = () => {};
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-gray-900 px-6 py-12 max-md:p-5">
      <form
        className="mx-auto w-full   max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3 self-stretch">
          <div className="flex items-center justify-center gap-2">
            <ChatbotLogo className="mx-auto h-10 w-auto" />
          </div>
          <h2 className="py-8 text-center text-2xl font-semibold text-white">
            Sign in to your account
          </h2>
          <SInputBox
            type="email"
            label="Email Address"
            name="email"
            register={register}
            error={errors.email as { message: string } | undefined}
          />
          <SubmitButton type="submit" onClick={() => {}} icons={undefined}>
            Proceed
          </SubmitButton>

          <p className="py-5 text-center text-sm text-gray-500">
            Not a user?{' '}
            <Link href="/signin" className="text-blue-500 underline">
              Sign up here
            </Link>
          </p>
          <div className="flex items-center justify-center text-sm font-medium">
            <div className="h-px flex-grow bg-white" />
            <span className="px-4 text-white">Or</span>
            <div className="h-px flex-grow bg-white" />
          </div>

          <button
            type="button"
            className="bg-mainColor flex cursor-pointer items-center justify-center rounded-lg bg-white py-2 outline-none"
          >
            <FcGoogle className="mr-4" /> Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
