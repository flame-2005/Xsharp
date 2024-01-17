import Navbar from "./components/Navbar";
import { Parallax } from 'react-parallax';
import { useState, useEffect, useRef  } from 'react';
import Cursor from "./components/Cursor";
import Testimonials from "./components/testimonials/Testimonials";
import Opencard from "./components/opencard/Opencard";
import Movingcard from "./components/movingcard/Movingcard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import Footer from "./components/Footer";

const Homepage = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPosition2nd, setScrollPosition2nd] = useState(0);
  const [scrollPosition3rd, setScrollPosition3rd] = useState(0);
  const scaleValue = 0.012; // Adjust this value to control the scaling
  
  const audioRef = useRef(null);

  const handleClick = () => {
    // Play audio when clicked
    audioRef.current.play();
  }

  useEffect(() => {
    console.log("helo")
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 716.7999877929688) {
        setScrollPosition2nd(window.scrollY - 716.7999877929688)
        // setscrollspeedFactor(0.2)
      }
      // if (window.scrollY<48){
      //   const position = window.window.scrollY;
      //   setScrollPosition3rd(position);
      // }
      // const position = window.pageYOffset;
      // setScrollPosition3rd(position);
      if(window.scrollY<755.2000122070312)[
        setScrollPosition3rd(0)
      ]
      if (window.scrollY>755.2000122070312){
      
        
        if(window.scrollY<820){
          const position = window.pageYOffset
          setScrollPosition3rd(position-755.2000122070312)
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  console.log(scrollPosition)

  return (
    <div>
      <Navbar/>
      <audio ref={audioRef} src="https://res.cloudinary.com/dtyombve3/video/upload/f_auto:video,q_auto/ruucz8kicbt4z5xrnzti" type="audio/mpeg"></audio>

      <div>

        <Parallax
          strength={500}
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="parallaxImage"
            style={{
              transform: `translate(-50%, -50%) scale(${1 + scrollPosition * 0.1})`, // Scale based on scroll position
              opacity: `${1 - scrollPosition * 0.02}`,
              position: 'fixed', // Fix the position of the section content // Reduce opacity based on scroll position
            }}
          >
            {/* Your image content */}
            

            <section class="bg-image image bg-center bg-no-repeat bg-blend-multiply">
              <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                <div class="h-10 flex items-center justify-center">
  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1704911673/lol-01_y5lmqj.png" className="h-custom -z-10" alt="" />
</div>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
              </div>
            </section>
          </div>
        </Parallax>
        <Parallax
          strength={500}
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
          <div
            style={{
              // Scale based on scroll position
              transform: `scale(${1 - scrollPosition3rd * scaleValue})`, // Scale based on scroll position
              transition: 'transform 0.1s ease-out',
              willChange: 'transform',
              opacity: `${1 - scrollPosition2nd * 0.004}`,


              // Fix the position of the section content // Reduce opacity based on scroll position
            }}
          >
            <section class="text-gray-600 body-font mx-24 ">
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 shadow-lg border-2 image1">
                  <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dtyombve3/image/upload/f_auto,q_auto/zja6xadjetzle7kdayit" />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 text-customBlue md:pl-16 flex flex-col md:items-start md:text-left items-center transition-all text-center gradient-text border-2 ml-8  h-96 justify-center card bg-black">
                  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-shadow-md ">Before they sold out
                    <br class="hidden lg:inline-block" />readymade gluten
                  </h1>
                  <p class="mb-8 leading-relaxed bg-">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
       
                <button onClick={handleClick} className="text-customBlue customButtom text-xl p-3 transition-all m-1 ">Know More</button>
           
                </div>
              </div>
            </section>
          </div>
        </Parallax>
        {/* <Parallax 
        strength={500}
          style={{
            height: '100vh',
          }}>
            <div
              style={{
                transformOrigin:'bottom right',
                transform: `rotate(${(scrollPosition-1350)*0.2}deg)`
              }}
            > */}
       
{/* </div>
</Parallax> */}
        {/* <Parallax 
        strength={500}
          style={{
            height: '100vh',
          }}>
            <div
              style={{
                transformOrigin:'bottom left',
                transform: `rotate(${(-scrollPosition-1600)*0.2}deg)`
              }}
     
{/* </div>
</Parallax> */}
{/* <Parallax 
        strength={500}
          style={{
            height: '100vh',
          }}>
            <div
              style={{
                transformOrigin:'bottom right',
                transform: `rotate(${(scrollPosition-2808)*0.2}deg)`
              }}
     
{/* </div>
</Parallax> */}
{/* <Parallax 
        strength={500}
          style={{
            height: '100vh',
          }}>
            <div
              style={{
                transformOrigin:'bottom left',
                // transform: `rotate(0deg)`
                transform: `rotate(${(-scrollPosition-3600)*0.2}deg)`
              }}
            > */}
    
<div className="mt-96">
  
<Testimonials/>
<Movingcard/>
</div>
{/* </div>
</Parallax> */}
       
      </div>


    

<Footer/>
    </div>


  );
};

export default Homepage;
