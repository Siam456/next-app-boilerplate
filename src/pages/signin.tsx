import Link from 'next/link';
import React from 'react';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
    });
}

function signin() {
    return (
        <div className="flex p-0 items-center justify-center min-h-screen bg-gray-900">
            <form className="p-0" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 self-stretch p-0">
                    <h2 className="text-2xl text-white justify-center font-semibold mb-4 text-center">Chatbot-23</h2>
                    <h2 className="text-2xl text-white justify-center font-semibold mb-4 text-center">Sign up with your details</h2>

                    <div className='flex flex-col gap-3'>
                        <label className='text-white text-sm font-bold' htmlFor='firstName'>  
                            First Name
                            <input
                                id='firstName'
                                type='text'
                                name='firstName'
                                placeholder='Enter First Name'
                                className='shadow mt-3 border-gray-500 appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                            />
                        </label>
                        <label className='text-white text-sm font-bold' htmlFor='lastName'>  
                            Last Name
                            <input
                                id='lastName'
                                type='text'
                                name='lastName'
                                placeholder='Enter Last Name'
                                className='shadow mt-3 border-gray-500 appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                            />
                        </label>
                        <label className='text-white text-sm font-bold' htmlFor='email'>  
                            Email Address
                            <input
                                id='email'
                                type='email'
                                name='email'
                                placeholder='Enter Email'
                                className='shadow mt-3 border-gray-500 appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                            />
                        </label>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">       
                            Next
                        </button>
                    </div>  
                    <p className="mt-4 text-sm text-center text-gray-500">
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
