import Link from 'next/link';
import React from 'react';
import { InputBox } from '@/components/input';
import { ChatbotLogo } from '@/logos';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  // eslint-disable-next-line no-console
  console.log({
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
    email: data.get('email'),
  });
};

function signin() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-gray-900 px-6 py-12">
      <form className="mx-auto w-full   max-w-md" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 self-stretch">
          <div className="flex items-center justify-center gap-2">
            <ChatbotLogo className="mx-auto h-10 w-auto" />
          </div>
          <h2 className="justify-center py-8 text-center text-2xl font-semibold  text-white">
            Sign up with your details
          </h2>

          <div className="flex flex-col gap-3">
            <InputBox
              type="email"
              placeholder=""
              onChange={() => {}}
              label="Email Address"
              error={false}
              name="email"
            />
            <InputBox
              type="text"
              placeholder=""
              onChange={() => {}}
              label="First Name"
              error={false}
              name="firstName"
            />
            <InputBox
              type="text"
              placeholder=""
              onChange={() => {}}
              label="Last Name"
              error={false}
              name="lastName"
            />
            <button
              type="submit"
              className="hover:bg-blue-400 mt-5 flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Next
            </button>
          </div>
          <p className=" mt-10 text-center text-sm text-gray-500">
            Already a user?{' '}
            <Link href="/login" className="text-blue-500 underline">
              Sign in here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default signin;
