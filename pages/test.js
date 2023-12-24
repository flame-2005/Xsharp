import React from 'react';

class MyComponent extends React.Component {
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
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
