import Navbar from "./components/Navbar";
import { Parallax } from 'react-parallax';
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const[scrollPosition2nd,setScrollPosition2nd] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); 
      if(window.scrollY > 716.7999877929688){
        setScrollPosition2nd(window.scrollY - 716.7999877929688)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  return (
    <div>
    <Navbar/>
    

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
            transform: `translate(-50%, -50%) scale(${1 + scrollPosition  * 0.1})`, // Scale based on scroll position
            opacity: `${1 - scrollPosition * 0.02}`,
            position: 'fixed', // Fix the position of the section content // Reduce opacity based on scroll position
          }}
        >
          {/* Your image content */}
          <section class="image bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dtyombve3/image/upload/f_auto,q_auto/irooasdt8yo7jbvoxqwa')] h-screen bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
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
      }}>
        <div
        style={{
 // Scale based on scroll position
          opacity: `${1 - scrollPosition2nd * 0.003}`,
          
 // Fix the position of the section content // Reduce opacity based on scroll position
        }}
        >
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center border-customBlue shadow-lg border-2 ml-8 text-customBlue h-96 justify-center card">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-shadow-md ">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      
    </div>
  </div>
</section>
</div>
</Parallax>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>




    </div>


  );
};

export default Homepage;
