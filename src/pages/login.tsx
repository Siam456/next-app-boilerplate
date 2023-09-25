
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
        email: data.get('email'),
    });
}

function login() {


    return (
        <div className="flex p-0 items-center justify-center min-h-screen bg-gray-900">

         <form className="p-0" onSubmit={handleSubmit}>


        <div className="flex flex-col gap-6 self-stretch p-0">
            <h2 className="text-2xl text-white justify-center font-semibold mb-4 text-center">Chatbot-23</h2>
            <h2 className="text-2xl text-white justify-center font-semibold mb-4 text-center">Sign in to your account</h2>

            <div className='mb-4 p-0'>
             <label  className=' block text-white text-sm font-bold mb-2' htmlFor='email'>  
               Email Address

                <input id='email'
                 type='email' 
                 name='email' 
                 placeholder='Enter Email' 
                 className='shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline'/>
                 </label>
                <button
                    type="submit"
                    className="flex w-full  justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">       
                    Proceed
                </button>
            </div>  
            <p className="mt-4 text-sm text-center text-gray-500">
                Not a user?{' '}

                <Link href="/" className="text-blue-500 underline">
                    Sign Up
                </Link>
            </p>
            <p className="mt-2 text-sm text-center">
                <Link href="/" className="text-blue-500 underline">
                    Forgot Password?
                </Link>
            </p>
            {/* <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
                </div> */}
            <div className="relative flex justify-center text-sm font-medium leading-6"><span className="bg-gray-900 px-6 text-white">Or</span></div>
            <button
              type="button"
              className="bg-mainColor flex bg-white justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
            >
              <FcGoogle className="mr-4" /> Sign in with Google
            </button>
        </div>
        </form>
    </div>
    );
}
export default login;
