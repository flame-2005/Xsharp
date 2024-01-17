import React from 'react'
import Link from 'next/link'
import { useState, useEffect, useRef  } from 'react';



const Navbar = () => {
  
  const audioRef = useRef(null);

  const handleClick = () => {
    audioRef.current.play();
  }
  return (
    <div>
      <audio ref={audioRef} src="https://res.cloudinary.com/dtyombve3/video/upload/f_auto:video,q_auto/ruucz8kicbt4z5xrnzti" type="audio/mpeg"></audio>

      <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700|Montserrat:400,700|Exo:400,700|Orbitron:400,700|Futura|Aileron:400,700&display=swap" rel="stylesheet"/>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet"/>
      </head>
      <nav class="flex items-center justify-between px-6  mx-auto fixed top-0 w-full z-10 text-xl navFont bg-black">
    <div class="flex items-center">
        <span class="text-lg font-semibold text-gray-800 w-8 ml-4"><img src="https://res.cloudinary.com/dtyombve3/image/upload/v1704911673/lol-01_y5lmqj.png" alt="" /></span>
    </div>
    <div class="flex items-center justify-center flex-1">
        <Link href={'/Homepage'}><p onClick={handleClick} class="mx-8 px-4 py-1 my-1 text-white hover:text-customBlue customButtom transition-transform ease-in-out duration-200"><i className='left-0 h-full w-2 bg-white'></i><span>Home</span></p></Link>
        <Link href={'/about'}><p onClick={handleClick} class="mx-8 px-4 py-1 my-1 text-white hover:text-customBlue customButtom transition-transform ease-in-out duration-200"><i className='left-0 h-full w-2 bg-white'></i><span>About</span></p></Link>
        <Link href={'/team'}><p onClick={handleClick} class="mx-8 px-4 py-1 my-1 text-white hover:text-customBlue customButtom transition-transform ease-in-out duration-200"><i className='left-0 h-full w-2 bg-white'></i><span>Team</span></p></Link>
        <Link href={'contact'}><p onClick={handleClick} class="mx-8 px-4 py-1 my-1 text-white hover:text-customBlue customButtom transition-transform ease-in-out duration-200"><i className='left-0 h-full w-2 bg-white'></i><span>Contact</span></p></Link>
    </div>
</nav>




    </div>
  )
}

export default Navbar
