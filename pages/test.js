import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

function App() {
  const [open, set] = useState(true);
  const [open1, set1] = useState(true);
  const [open2, set2] = useState(true);
  const [open3, set3]= useState(true);
  return (
    <>
    <div className="container" onClick={() => set((state) => !state)}>
      <Trail open={open}>
        <span className='text-white'>Lorem</span>
        <span className='text-white'>Ipsum</span>
        <span className='text-white'>Dolor</span>
        <span className='text-white'>Sit</span>
      </Trail>
    </div>
    <div className="container" onClick={() => set1((state1) => !state1)}>
      <Trail open={open1}>
        <span className='text-white'>Lorem</span>
        <span className='text-white'>Ipsum</span>
        <span className='text-white'>Dolor</span>
        <span className='text-white'>Sit</span>
      </Trail>
    </div>
    <div className="container" onClick={() => set2((state) => !state)}>
      <Trail open={open2}>
        <span className='text-white'>Lorem</span>
        <span className='text-white'>Ipsum</span>
        <span className='text-white'>Dolor</span>
        <span className='text-white'>Sit</span>
      </Trail>
    </div>
    <div className="container" onClick={() => set3((state) => !state)}>
      <Trail open={open3}>
        <span className='text-white'>Lorem</span>
        <span className='text-white'>Ipsum</span>
        <span className='text-white'>Dolor</span>
        <span className='text-white'>Sit</span>
      </Trail>
    </div>
    </>
  );
}

export default App;
