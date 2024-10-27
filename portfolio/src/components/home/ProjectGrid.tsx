import StackIcon from "tech-stack-icons";
import PapionHeroBanner from './PapionHeroBanner';
import { Link } from "react-router-dom";

const projects = [
  {
    year: '2020',
    title: 'Auctions',
    description: 'An online practical auction platform that connects buyers and sellers seamlessly.',
    techStack: ['python', 'django', 'mysql', 'html5', 'css3', 'js', 'bootstrap5'],
    image: '/auctions.png',
    url: '/auctions'
  },
  {
    year: '2021',
    title: 'Coducation',
    description: 'An interactive coding education platform for a community of students and mentors.',
    techStack: ['reactjs', 'reactrouter', 'php', 'mysql', 'css3', 'bootstrap5'],
    image: '/coducation.png',
    url: '/coducation'
  },
  {
    year: '2024',
    title: 'Twodo',
    description: 'A Project & Todo management app that helps you organize and prioritize your daily and heavy tasks.',
    techStack: ['reactjs', 'vitejs', 'reactrouter', 'nodejs', 'mongodb', 'mongoose', 'tailwindcss', 'css3'],
    image: '/twodo.png',
    url: '/twodo'
  },
  // Add more projects as needed
];

const ProjectGrid = () => {
  return (
    <div className="project-grid max-w-screen-xl mx-auto p-4">
      {/* Papion Card */}
      <PapionHeroBanner isDetailPage={false} />
   

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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
            <Link to={project.url}>
            <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              Explore
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
