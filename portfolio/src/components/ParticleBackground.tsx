import React, { useEffect } from 'react';
import './ParticleBackground.css'; // Import the CSS styles

const ParticleBackground = () => {
  useEffect(() => {
    const createParticles = () => {
      // Limit particle count for better performance
      const existingParticles = document.querySelectorAll('.particle');
      if (existingParticles.length < 150) { // Limit to 150 particles max
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 8 + 4; // Random size between 4px and 12px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`; // Keep it circular

        // Adjust particle positions to ensure they remain within the viewport boundaries
        const maxLeft = window.innerWidth - size; // Ensure it stays within viewport width
        const maxTop = window.innerHeight - size; // Ensure it stays within viewport height
        particle.style.left = `${Math.random() * maxLeft}px`; // Use pixels instead of viewport width (vw)
        particle.style.top = `${Math.random() * maxTop}px`; // Use pixels instead of viewport height (vh)

        // Random colors
        particle.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`;

        document.body.appendChild(particle);
        
        setTimeout(() => {
          particle.classList.add('fade-out'); // Add fade-out class
          setTimeout(() => {
            particle.remove();
          }, 1000); // Wait for fade-out duration before removal
        }, 3000); // Wait 3 seconds before starting fade-out
      }
    };

    const interval = setInterval(createParticles, 500); // Create particles every 500ms
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return null; // This component does not render anything
};

export default ParticleBackground;
