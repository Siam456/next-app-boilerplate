
import React from 'react';

export default function test() {
    return (
        <div className="flex flex-col gap-6 self-stretch">
            <h2 className="text-2xl justify-center font-semibold mb-4">Login</h2>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>  
                Email
            </label>
            <input id='email' type='email' name='email' placeholder='Enter Email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                Proceed
            </button>
          </div>  
        </div>
    );
}
