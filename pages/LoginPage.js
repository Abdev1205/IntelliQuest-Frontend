import React from 'react'
import imageIQ from '../styles/iq.png'
import ImagePreloader from './../node_modules/lottie-web/player/js/utils/imagePreloaderWorkerOverride';

const LoginPage = () => {
  return (
    <div className='w-full h-screen flex bg-zinc-800'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] rounded-lg bg-neutral-300 shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <h2>Left hand side</h2>
            </div>
            <div className='p-4 flex flex-col bg-white rounded-lg justify-around m-2'>
                <form className='text-center py-30'>
                    <imageIQ/>
                    <h2 className='text-4xl font-bold text-center mb-4'>Welcome</h2>
                    <p className='text-center text-xs  text-gray-500'>Please Enter your Details</p>
                    <div className='pt-6'>
                        <input className='p-2 mr-2 w-346' type="text" placeholder='Username' />
                        <input className='border p-2 m-1 w-346' type="password" placeholder='Password' />
                        <p className='text-center text-xs my-5 underline-offset-2 pl-10 text-gray-500'>Forgot Username or Password?</p>
                    </div>
                    <button className='flex-none rounded-full px-20 py-1.5 mt-8 mb-2 text-base text-white bg-zinc-900 hover:bg-neutral-700'>Sign In</button>
                    <button className='flex-none rounded-full px-10 py-1.5  text-black bg-neutral-300 hover:bg-neutral-200'>Login with Google</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
