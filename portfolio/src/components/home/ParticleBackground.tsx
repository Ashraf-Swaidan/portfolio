import { useEffect } from 'react';
import './ParticleBackground.css'; // Import the CSS styles

const ParticleBackground = ({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) => {
  useEffect(() => {
    const createParticles = () => {
      if (!heroRef.current) return; // Ensure the ref is valid

      const heroRect = heroRef.current.getBoundingClientRect(); // Get dimensions of the Hero section
      const existingParticles = document.querySelectorAll('.particle');
      
      if (existingParticles.length < 150) { // Limit to 150 particles max
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 8 + 4; // Random size between 4px and 12px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`; // Keep it circular

        // Adjust particle positions to ensure they remain within the Hero section boundaries
        const maxLeft = heroRect.width - size; // Ensure it stays within Hero width
        const maxTop = heroRect.height - size; // Ensure it stays within Hero height

        // Set random position within the Hero section
        particle.style.left = `${Math.random() * maxLeft}px`;
        particle.style.top = `${Math.random() * maxTop}px`;

        // Random colors
        particle.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`;

        heroRef.current.appendChild(particle); // Append to Hero section
        
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
  }, [heroRef]);

  return null; // This component does not render anything
};

export default ParticleBackground;
