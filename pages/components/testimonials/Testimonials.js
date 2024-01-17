import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <section class="flex items-center lg:h-screen bg-black">
        <div class="flex flex-wrap gap-4 p-4 mx-auto max-w-7xl">
            <div class="w-full text-center lg:text-left lg:w-[30%] info my-10 lg:my-0 ">
                <h1 class="mb-4 text-3xl font-bold text-customBlue ">Web development</h1>
                <p class="text-gray-500 text-Cus"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam
                    nostrum harum non in atb
                    eaque quibusdam eum ratione.</p>
            </div>
            <div class="flex-1">
                <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <div class=" card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/j5N31VjJ/jason-yoder-s4n-S3mun-Sg8-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></SwiperSlide>
        <SwiperSlide>    <section class="flex items-center lg:h-screen bg-black">
        <div class="flex flex-wrap gap-4 p-4 mx-auto max-w-7xl">
            <div class="w-full text-center lg:text-left lg:w-[30%] info my-10 lg:my-0 ">
                <h1 class="mb-4 text-3xl font-bold text-customBlue "> WebSite Management</h1>
                <p class="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam
                    nostrum harum non in at
                    eaque quibusdam eum ratione.</p>
            </div>
            <div class="flex-1">
                <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/j5N31VjJ/jason-yoder-s4n-S3mun-Sg8-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></SwiperSlide>
        <SwiperSlide>    <section class="flex items-center bg-black lg:h-screen">
        <div class="flex flex-wrap gap-4 p-4 mx-auto max-w-7xl">
            <div class="w-full text-center lg:text-left lg:w-[30%] info my-10 lg:my-0 ">
                <h1 class="mb-4 text-3xl font-bold text-customBlue "> Video Editing </h1>
                <p class="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam
                    nostrum harum non in at
                    eaque quibusdam eum ratione.</p>
            </div>
            <div class="flex-1">
                <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/j5N31VjJ/jason-yoder-s4n-S3mun-Sg8-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></SwiperSlide>
        <SwiperSlide>    <section class="flex items-center lg:h-screen bg-black">
        <div class="flex flex-wrap gap-4 p-4 mx-auto max-w-7xl">
            <div class="w-full text-center lg:text-left lg:w-[30%] info my-10 lg:my-0 ">
                <h1 class="mb-4 text-3xl font-bold text-customBlue "> Graphic Designing </h1>
                <p class="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam
                    nostrum harum non in at
                    eaque quibusdam eum ratione.</p>
            </div>
            <div class="flex-1">
                <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/j5N31VjJ/jason-yoder-s4n-S3mun-Sg8-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></SwiperSlide>
        <SwiperSlide>    <section class="flex items-center lg:h-screen bg-black">
        <div class="flex flex-wrap gap-4 p-4 mx-auto max-w-7xl">
            <div class="w-full text-center lg:text-left lg:w-[30%] info my-10 lg:my-0 ">
                <h1 class="mb-4 text-3xl font-bold text-customBlue "> Digital Mackting </h1>
                <p class="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam
                    nostrum harum non in at
                    eaque quibusdam eum ratione.</p>
            </div>
            <div class="flex-1">
                <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/j5N31VjJ/jason-yoder-s4n-S3mun-Sg8-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></SwiperSlide>
        <SwiperSlide>    <section class="flex items-center lg:h-screen bg-black">
        <div class="flex flex-wrap gap-4 p-4 mx-auto max-w-7xl">
            <div class="w-full text-center lg:text-left lg:w-[30%] info my-10 lg:my-0 ">
                <h1 class="mb-4 text-3xl font-bold text-customBlue "> Social Media management </h1>
                <p class="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam
                    nostrum harum non in at
                    eaque quibusdam eum ratione.</p>
            </div>
            <div class="flex-1">
                <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                    <div class="card mb-0 overflow-hidden rounded shadow bg-black" href="#">
                        <div class="relative overflow-hidden h-72">
                            <img class="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/j5N31VjJ/jason-yoder-s4n-S3mun-Sg8-unsplash.jpg" alt=""/>
                        </div>
                        <div class="relative z-20 p-8 -mt-14 ">
                            <span class="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-quote" viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                            </span>

                            <p class="mb-4 text-base leading-7 text-customBlue">
                                Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                your
                                bone density as well
                            </p>

                            <h2 class="text-lg font-bold leading-9 text-black dark:text-white">
                                John Doe
                            </h2>
                            <span class="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                Senior Vice President
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></SwiperSlide>
      </Swiper>
    </>
  );
}
