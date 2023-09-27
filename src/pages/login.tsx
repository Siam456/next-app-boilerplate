import { ChatbotLogo } from '@/logos';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { InputBox } from '@/components/input';
import { SubmitButton } from '@/components/buttons';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
        email: data.get('email'),
    });
}
function Login() {
    return (
        <div className="flex flex-col gap-5 max-md:p-5 px-6 py-12 items-center justify-center min-h-screen bg-gray-900">
            <form className="w-full max-w-md   mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 self-stretch">
                    <div className="flex items-center justify-center gap-2">
                    <ChatbotLogo className="w-auto h-10 mx-auto" />
                    </div>
                    <h2 className="text-2xl text-white font-semibold py-8 text-center">Sign in to your account</h2>
                    <InputBox 
                        type="email"
                        placeholder=""
                        onChange={() => {}}
                        label="Email Address"
                        error={false}
                        name="email"
                    />
                    <SubmitButton
                        onClick={() => { } } icons={undefined}                    >
                        Proceed
                    </SubmitButton>

                    <p className="text-sm text-center py-5 text-gray-500">
                        Not a user?{' '}
                        <Link href="/signin" className="text-blue-500 underline">
                            Sign up here
                        </Link>
                    </p>
                    <div className="flex items-center justify-center text-sm font-medium">
                        <div className="bg-white h-px flex-grow" />
                        <span className="text-white px-4">Or</span>
                        <div className="bg-white h-px flex-grow" />
                    </div>  
                                      
                    <button
                        type="button"
                        className="bg-mainColor flex bg-white justify-center items-center py-2 rounded-lg cursor-pointer outline-none"
                    >
                        <FcGoogle className="mr-4" /> Sign in with Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
