import React, { useEffect, useRef } from 'react';
import './FadeInObserver.css';


const FadeInObserver = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const childrenElements = ref.current.children;
          for (let i = 0; i < childrenElements.length; i++) {
            childrenElements[i].style.animation = 'fadeInAnimation ease 2s';
            childrenElements[i].style.animationFillMode = 'forwards';
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default FadeInObserver;
