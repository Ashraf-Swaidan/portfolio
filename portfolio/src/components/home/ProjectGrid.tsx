import React from 'react';
import StackIcon from "tech-stack-icons"; // Import StackIcon for tech stack icons

const projects = [
  {
    year: '2020',
    title: 'Auctions',
    description: 'An online auction platform that connects buyers and sellers seamlessly.',
    techStack: ['python', 'django', 'mysql', 'html5', 'css3', 'js', 'bootstrap5'],
    image: '/auctions.png',
  },
  {
    year: '2021',
    title: 'Coducation',
    description: 'An interactive coding education platform that offers coding challenges and tutorials.',
    techStack: ['reactjs', 'reactrouter', 'php', 'mysql', 'css3', 'bootstrap5'],
    image: '/coducation.png',
  },
  {
    year: '2023',
    title: 'Papion Business System & Dashboard',
    description: 'A comprehensive business management system that automates processes.',
    techStack: ['reactjs', 'vitejs', 'reactrouter', 'firebase', 'bootstrap5', 'materialui', 'css3'],
    image: '/papion.png',
  },
  {
    year: '2024',
    title: 'Twodo',
    description: 'A task management app that helps you organize and prioritize your daily tasks.',
    techStack: ['reactjs', 'vitejs', 'reactrouter', 'nodejs', 'mongodb', 'mongoose', 'tailwindcss', 'css3'],
    image: '/twodo.png',
  },
  // Add more projects as needed
];

const ProjectGrid = () => {
  return (
    <div className="project-grid max-w-screen-xl mx-auto p-4">
      {/* Papion Card */}
      <div className="papion-card bg-white rounded-lg border flex p-6 mb-8 relative overflow-hidden">
        <div className="flex-grow pr-6">
          <h3 className="text-2xl font-semibold mb-2">Papion Business System & Dashboard</h3>
          <p className="text-gray-700 mb-4">
            A comprehensive business management system that automates processes.
          </p>
          <div className="tech-stack mb-4 flex flex-wrap gap-2">
            {projects[2].techStack.map((tech) => (
              <StackIcon key={tech} name={tech} className="w-5 h-5" />
            ))}
          </div>
          <div className="absolute bottom-6 left-6 flex space-x-4">
            <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              Explore
            </button>
            <button className="bg-gray-100 text-secondary px-4 py-2 rounded hover:bg-gray-200 transition">
              View Case Study
            </button>
          </div>
        </div>
        <img src={projects[2].image} alt={projects[2].title} className="h-full object-cover rounded-lg ml-4 w-1/2 " />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.filter(project => project.title !== 'Papion Business System & Dashboard').map((project) => (
          <div key={project.title} className="project-card bg-white rounded border p-4">
            <img src={project.image} alt={project.title} className="w-full h-42 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <h4 className="text-gray-400 mb-2">{project.year}</h4>
            <p className="text-gray-500 mb-2">{project.description}</p>
            <div className="tech-stack mb-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <StackIcon key={tech} name={tech} className="w-5 h-5" />
              ))}
            </div>
            <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
