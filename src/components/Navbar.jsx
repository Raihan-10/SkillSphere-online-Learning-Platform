import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   
     <div className='sticky top-0 z-50 shadow-md grid md:grid-cols-3   justify-between
      bg-gray-800 text-white px-5 py-5 items-center'>
      <p className='font-bold text-3xl'><span className='text-blue-500'>Skill</span>sphere</p>  
      <div className='flex justify-center gap-5 list-none'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>Courses</Link></li>
        <li><Link href={'/'}>My Profile</Link></li>
      </div>
      <div className='flex md:justify-end'>
        <p><Link href={'/login'}>Log in</Link></p>
      </div>
    </div>
  )
}
