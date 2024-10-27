import Hero from './home/Hero';
import WhoAmI from './home/WhoAmI';
import ProjectGrid from './home/ProjectGrid';
import { useRef } from 'react';

const HomePage = () => {

  const projectsRef = useRef<HTMLDivElement>(null);

  // Function to scroll to projects
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero onScrollToProjects={scrollToProjects}/>
      <WhoAmI />
      <div ref={projectsRef}>
        <ProjectGrid />
      </div>
      
    </div>
  );
};

export default HomePage;
