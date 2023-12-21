import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      
      <nav class="flex items-center justify-between px-6 pt-2 mx-auto fixed top-0 w-full z-10">
    <div class="flex items-center">
        <span class="text-lg font-semibold text-gray-800 w-8 ml-4"><img src="https://res.cloudinary.com/dtyombve3/image/upload/f_auto,q_auto/irooasdt8yo7jbvoxqwa" alt="" /></span>
    </div>
    <div class="flex items-center justify-center flex-1">
        <a href="#" class="mx-8 rounded-2xl px-4 py-1 mt-1 bg-white">Home</a>
        <a href="#" class="mx-8 rounded-2xl px-4 py-1 mt-1 bg-white">About</a>
        <a href="#" class="mx-8 rounded-2xl px-4 py-1 mt-1 bg-white">Services</a>
        <a href="#" class="mx-8 rounded-2xl px-4 py-1 mt-1 bg-white">Contact</a>
    </div>
</nav>




    </div>
  )
}

export default Navbar
