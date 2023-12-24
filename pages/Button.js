import React from 'react';
import Link from 'next/link';
class Button extends React.Component {
  constructor(props) {
    super(props);

    // Create a reference to the audio element
    this.audioRef = React.createRef();
  }

  // Function to handle click and play audio
  handleClick = () => {
    // Play audio when clicked
    this.audioRef.current.play();
  };

  render() {
    return (
      <div>
        {/* Audio element */}
        <audio ref={this.audioRef} src="https://res.cloudinary.com/dtyombve3/video/upload/f_auto:video,q_auto/ruucz8kicbt4z5xrnzti" type="audio/mpeg"></audio>

        {/* Button or element that triggers the sound */}
        <Link href="/Homepage"><p
        
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out"
      >
        Explore
      </p></Link>
      </div>
    );
  }
}

export default Button;
