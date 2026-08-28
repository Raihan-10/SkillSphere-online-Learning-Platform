import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   <div>
     <div className='flex justify-between
      bg-blue-700 text-white p-3 max-w-7xl mx-auto rounded-3xl'>
      <p className='font-bold'><span className='text-red-500'>Skill</span>sphere</p>  
      <div className='flex gap-5 list-none'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>Coures</Link></li>
        <li><Link href={'/'}>My Profile</Link></li>
      </div>
      <div>
        <p><Link href={'/login'}>Log in</Link></p>
      </div>
    </div>
   </div>
  )
}
