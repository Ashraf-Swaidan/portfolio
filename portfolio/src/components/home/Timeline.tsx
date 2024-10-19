import { useEffect, useRef, useState } from 'react';
import StackIcon from "tech-stack-icons";

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the animation triggers
        }
      });
    });

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const projects = [
    {
      year: '2020',
      title: 'Auctions',
      techStack: ['python','django','mysql','html5','css3', 'js', 'bootstrap5'], // Use the icon names from tech-stack-icons
      image: '/auctions.png',
    },
    {
      year: '2021',
      title: 'Coducation',
      techStack: ['reactjs','reactrouter','php', 'mysql', 'css3','bootstrap5'],
      image: '/coducation.png',
    },
    {
      year: '2023',
      title: 'Papion Business System',
      techStack: ['reactjs', 'vitejs', 'reactrouter','firebase', 'bootstrap5', 'materialui', 'css3'],
      image: '/papion.png',
    },
    {
      year: '2024',
      title: 'Twodo',
      techStack: ['reactjs','vitejs','reactrouter' ,'nodejs', 'mongodb', 'mongoose', 'tailwindcss', 'css3'],
      image: '/twodo.png',
    },
    // Add more projects as needed
  ];

  return (
    <div className="timeline max-w-2xl mx-auto p-5" ref={timelineRef}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`timeline-item border-l-2 border-gray-300 pl-4 mb-5 transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
          style={{ animationDelay: `${index * 0.3}s` }} // Stagger animations
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{project.year}</h3>
              <h4 className="text-md font-semibold">{project.title}</h4>
              <div className="flex space-x-2 mt-2">
                {project.techStack.map((tech) => (
                  <StackIcon key={tech} name={tech} className="w-4 h-4" /> // Render StackIcon for each technology
                ))}
              </div>
            </div>

            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className="w-32 h-16 rounded-md border shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
