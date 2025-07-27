import React, { useEffect, useRef } from 'react';
import particlesConfig from './particle_config/particlesjs-config.json';

declare global {
  interface Window {
    pJSDom: any;
    particlesJS: any;
  }
}

const Particles: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Destroy previous instance if exists
    if (window.pJSDom && window.pJSDom.length) {
      window.pJSDom.forEach((p: any) => p && p.destroy && p.destroy());
      window.pJSDom = [];
    }
    if (particlesRef.current) {
      // @ts-ignore
      window.particlesJS('particles-js', particlesConfig);
    }
    // No need for cleanup here, as we destroy before re-init
  }, [particlesConfig]); // Add config as dependency

  return (
    <div
      id="particles-js"
      ref={particlesRef}
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent'
      }}
    />
  );
};

export default Particles; 