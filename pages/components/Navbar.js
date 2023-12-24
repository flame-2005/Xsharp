import React from 'react'
import Link from 'next/link'
import { useState, useEffect, useRef  } from 'react';



const Navbar = () => {
  
  const audioRef = useRef(null);

  const handleClick = () => {
    // Play audio when clicked
    audioRef.current.play();
  }
  return (
    <div>
      <audio ref={audioRef} src="https://res.cloudinary.com/dtyombve3/video/upload/f_auto:video,q_auto/ruucz8kicbt4z5xrnzti" type="audio/mpeg"></audio>

      <head>
        
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet"/>
      </head>
      <nav class="flex items-center justify-between px-6 pt-2 mx-auto fixed top-0 w-full z-10 text-xl font-silkscreen">
    <div class="flex items-center">
        <span class="text-lg font-semibold text-gray-800 w-8 ml-4"><img src="https://res.cloudinary.com/dtyombve3/image/upload/f_auto,q_auto/irooasdt8yo7jbvoxqwa" alt="" /></span>
    </div>
    <div class="flex items-center justify-center flex-1">
        <a href="#" onClick={handleClick} class="mx-8 px-4 py-1 mt-1 hover:skew-x-12 hover:bg-customBlue text-white hover:text-black navButton transition-transform ease-in-out duration-200"><i className='left-0 h-full w-2 bg-white'></i><span>Home</span></a>
        <a href="#" onClick={handleClick} class="mx-8 px-4 py-1 mt-1 hover:skew-x-12 hover:bg-customBlue text-white hover:text-black navButton transition-transform ease-in-out duration-200"><i className='left-0 h-full w-2 bg-white'></i><span>About</span></a>
        <a href="#" onClick={handleClick} class="mx-8 px-4 py-1 mt-1 hover:skew-x-12 hover:bg-customBlue text-white hover:text-black navButton transition-transform ease-in-out duration-200"><i className='left-0 h-full w-2 bg-white'></i><span>Services</span></a>
        <a href="#" onClick={handleClick} class="mx-8 px-4 py-1 mt-1 hover:skew-x-12 hover:bg-customBlue text-white hover:text-black navButton transition-transform ease-in-out duration-200"><i className='left-0 h-full w-2 bg-white'></i><span>Contact</span></a>
    </div>
</nav>




    </div>
  )
}

export default Navbar
