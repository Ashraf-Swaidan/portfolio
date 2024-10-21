import { Link } from "react-router-dom";
import StackIcon from "tech-stack-icons";

interface PapionHeroBannerProps {
  isDetailPage: boolean;
}


const PapionHeroBanner: React.FC<PapionHeroBannerProps> = ({isDetailPage}) => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-white w-full py-20 flex items-center justify-center overflow-hidden rounded-t-xl border border-b-0">

      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 relative z-10 space-x-12">

        {/* Text Content */}
        <div className="sm:w-1/3 text-center sm:text-left mb-8 sm:mb-0 z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Papion Business System & Dashboard
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A comprehensive business management system that automates processes
            and improves productivity.
          </p>
          <div className="flex gap-3 mb-4 justify-center sm:justify-start">
            <StackIcon name={'reactjs'} className="w-10 h-10" />
            <StackIcon name={'vitejs'} className="w-10 h-10" />
            <StackIcon name={'firebase'} className="w-10 h-10" />
            <StackIcon name={'bootstrap5'} className="w-10 h-10" />
            <StackIcon name={'materialui'} className="w-10 h-10" />
          </div>
          {!isDetailPage && 
          <div className="flex justify-center sm:justify-start space-x-4 ">
            <a href={'/papion'}>
            <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-gray-700 transition-all">
              Explore
            </button>
            </a>
            <button className="bg-gray-100 text-secondary px-6 py-2 rounded hover:bg-gray-200 transition-all">
              Case Study
            </button>
          </div>}
        </div>

        {/* Image Layers Container */}
        <div className="relative w-full sm:w-2/3 flex justify-center sm:justify-end h-80 sm:h-[30rem] sm:scale-110 scale-150">
          {" "}
          {/* Adjust height for large screens */}
          {/* Layer 1 */}
          <img
            src="/layer11.png"
            alt="Papion Dashboard Layer 1"
            className="absolute top-14 left-14 sm:top-1 sm:left-28 w-3/4 sm:w-full h-auto object-contain transition-transform transform hover:scale-105 hover:translate-y-1 z-30 "
          />
          {/* Layer 2 */}
          <img
            src="/layer22.png"
            alt="Papion Dashboard Layer 2"
            className="absolute top-24  sm:top-16 sm:left-0  w-3/4 sm:w-full h-auto object-contain transition-transform transform hover:scale-105 hover:translate-y-2 z-20"
          />
          {/* Layer 3 */}
          <img
            src="/layer33.png"
            alt="Papion Dashboard Layer 3"
            className="absolute top-32 right-0  sm:right-12 w-3/4 sm:w-full h-auto object-contain transition-transform transform hover:scale-105 hover:translate-y-3 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default PapionHeroBanner;
