import Flowchart from './FlowChart';
import './home.css'; // Assuming you continue styling here
import PuzzlePiece from './PuzzlePiece';
import Timeline from './Timeline';

const WhoAmI = () => {
  return (
    <section className="whoami p-10 md:p-20 bg-primary max-w-screen-xl mx-auto text-center md:text-left">
      
      {/* Title Section */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Crafting Solutions to Real-World Problems</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl ">
          Every line of code I write is a solution. From apps to business systems, my work is about making life smarter and more efficient.
        </p>
      </div>

      {/* Section 1: Early Curiosity */}
      <div className="whoami-section mb-12 flex sm:flex-row flex-col items-center">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-semibold text-secondary">Natural Problem-Solver</h3>
          <p className="mt-4 text-md md:text-lg text-gray-700">
            I've always been drawn to challenges — whether it’s solving technical puzzles or improving business operations. Coding is my toolkit to craft effective solutions for real-world problems.
          </p>
        </div>
        <div className="sm:w-1/2 mt-8 md:mt-0">
        <PuzzlePiece />
        </div>
      </div>

      {/* Section 2: Evolution Through Projects */}
      <div className="whoami-section mb-12 lg:flex items-center space-x-4">
        <div className="lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
        <Timeline />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <h3 className="text-2xl lg:text-3xl font-semibold text-secondary">Evolving Through Projects</h3>
          <p className="mt-4 text-lg lg:text-lg text-gray-700">
            From building simple task management apps to designing business systems, each project has sharpened my skills — scaling solutions to solve real pain points efficiently.
          </p>
        </div>
      </div>

      {/* Section 3: Papion Teaser */}
      <div className="whoami-section mb-12 lg:flex items-center">
        <div className="lg:w-1/2">
          <h3 className="text-2xl md:text-3xl font-semibold text-secondary">The Papion System</h3>
          <p className="mt-4 text-md md:text-lg text-gray-700">
            One of my greatest challenges was transforming manual business processes into an automated system for my own venture. Curious about the solution? 
          </p>
          <button className="mt-6 px-6 py-2 bg-secondary text-primary font-semibold rounded-md hover:bg-gray-800">
            Find out how I built the Papion System
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 md:mt-0">
          {/* Papion Visual */}
          <Flowchart />
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-12">
        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
          Whether it's web apps or complex business systems, I build solutions that create impact. Scroll down to explore my projects and see them in action.
        </p>
      </div>
    </section>
  );
};

export default WhoAmI;
