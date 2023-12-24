// CustomCursor.js
import React from 'react';
import { AnimatedCursor } from 'react-animated-cursor';

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='rgba(255, 255, 255, 0.5)'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
};

export default Cursor;
