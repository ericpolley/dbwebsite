import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-row items-center justify-center space-x-24 bg-sky-400 shadow-2xl border-b-2 border-black pt-5 pb-5 text-lg'>
      <div>Logo</div>
      <p className='w-[30%] space-x-14 text-blue-600 '>
        <span className='hover:text-blue-400 active:text-blue-300 cursor-pointer' onClick={()=>navigate('/')}>Home</span>
        <span className='hover:text-blue-400 active:text-blue-300 cursor-pointer' onClick={()=>navigate('/sign-in')}>Sign In</span>
      </p>
    </div>
  )
}
