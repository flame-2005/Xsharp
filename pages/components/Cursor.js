// components/Cursor.js

import { useEffect, useState } from 'react';
// import styles from './Cursor.module.css'; // Create a separate CSS module for cursor styles

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      // follower.style.left = `${clientX}px`;
      // follower.style.top = `${clientY}px`;
    };
    
    
    const addListeners = () => {
      document.addEventListener('mousemove', moveCursor);
    };

    addListeners();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);
 

  return (
    <>
    <div>
      <div className="cursor"></div>
      <div className="cursorFollower"></div>
    </div>
    </>
  );
};

export default Cursor;
