import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='flex flex-col justify-center items-center space-y-7 p-8 '>
      <div className='border-2 border-blue-500 w-fit p-8 rounded-xl flex flex-col items-center justify-center bg-blue-200 '>
      <h1 className='mt-4 text-2xl font-semibold border-b-2 border-blue-500 pb-2 w-64 text-center mb-4'>Sign Up</h1>
      <form action="" className='flex flex-col space-y-7 items-center '>
        <input type="text" placeholder='Name' id="name"
        className='border-2 border-blue-500 rounded-lg w-72 text-lg p-1' />
          <input type="email" placeholder='email' id="email"
        className='border-2 border-blue-500 rounded-lg w-72 text-lg p-1' />
          <input type="password" placeholder='password' id="password"
        className='border-2 border-blue-500 rounded-lg w-72 text-lg p-1' />
        <p>Do you have an account? <Link to="/sign-in"><span className='text-red-500 font-medium cursor-pointer'>Sign In</span></Link></p>
        <button className='rounded-lg w-48 bg-sky-500 border-blue-500 border-2 p-2'>Submit</button>
      </form>
      </div>
    </div>
  )
}
