import { useState, MouseEvent, useRef } from "react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: -200, y: -200 });
  const heroRef = useRef<HTMLDivElement>(null); // Reference for the hero section

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img:first-child') as HTMLImageElement;
    const imgRect = img.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - imgRect.left,
      y: e.clientY - imgRect.top,
    });
  };

  const handleMouseLeave = () => {
    setCursorPosition({ x: -200, y: -200 });
  };

  return (
    <section 
      ref={heroRef} // Attach ref here
      className="hero p-10 md:p-20 flex flex-col md:flex-row-reverse items-center justify-center bg-primary max-w-screen-xl mx-auto gap-8"
    >
      <div className="relative">
        <ParticleBackground heroRef={heroRef} /> {/* Pass the ref to ParticleBackground */}
      </div>
      
      {/* Right Side - Profile Picture */}
      <div
        className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Masked Colored Profile Picture */}
        <img
          src="/pfp-colored.jpg"
          alt="Ash's Profile Picture"
          className="absolute w-96 object-cover transition duration-300 rounded-xl"
          style={{
            clipPath: `circle(100px at ${cursorPosition.x}px ${cursorPosition.y}px)`,
            zIndex: 1,
          }}
        />
        {/* Original Profile Picture (grayscale) */}
        <img
          src="/pfp-colored.jpg"
          alt="Ash's Profile Picture"
          className="w-96 object-cover border-4 border-gray-300 rounded-xl transition duration-300 filter grayscale"
        />
      </div>

      {/* Left Side - Text Section */}
      <div className="sm:w-1/2 px-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary">Hi, I'm Ashraf Swaidan!</h1>
        <p className="mt-4 text-md md:text-lg text-gray-700">
          I create real-world solutions. Let's build something amazing together!
        </p>
        <button className="mt-8 px-6 py-2 bg-secondary text-primary font-semibold rounded-md hover:bg-gray-800">
          See My Work
        </button>
      </div>
    </section> 
  );
};

export default Hero;
