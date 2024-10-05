
import React, { useEffect, useRef } from 'react';
import "./NoPages.css";
const NoPages = () => {const messageRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
  
        const rotateY = (clientX / innerWidth - 0.5) * 30;
        const rotateX = (clientY / innerHeight - 0.5) * -30;
  
        if (messageRef.current) {
          messageRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div className="page-not-ready">
        <div className="message-container" ref={messageRef}>
          <h1>Page Not Yet Ready</h1>
          <p>We are working hard to bring this page to you soon. Stay tuned!</p>
        </div>
      </div>
    );
}

export default NoPages
