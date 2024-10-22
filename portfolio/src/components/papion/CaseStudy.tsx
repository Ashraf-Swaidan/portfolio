import React, { useState } from 'react';
import LaserCaseStudy from './LaserCaseStudy';
import StandCaseStudy from './StandCaseStudy';
import BalloonCaseStudy from './BalloonCaseStudy';
import OrderTrackingCaseStudy from './OrderTrackingCaseStudy';

interface CaseStudyProps {
  id: string;
  title: string;
  content: React.ReactNode;
  special?: boolean;
}

const CaseStudy: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const caseStudies: CaseStudyProps[] = [
    {
      id: 'laser',
      title: 'Laser Board Inventory and Sales Management',
      content: <LaserCaseStudy />,
      special: true,
    },
    {
      id: 'Stands',
      title: 'Managing Stands In Inventory and Sales',
      content: <StandCaseStudy />,
    },
    {
      id: 'balloons',
      title: 'Selling Balloon Stands, a complex issue',
      content: <BalloonCaseStudy />,
    },
    {
      id: 'Calendar',
      title: 'Efficiently Tracking Orders with Due Dates',
      content: <OrderTrackingCaseStudy />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Introduction */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Case Studies
        </h2>
        <p className="text-lg text-gray-600">
          Here lies a collection of professional case studies that showcase my
          approach to solving real-world business problems. Each study outlines
          a unique challenge and details how I logically tackled it, offering
          insights into my problem-solving process and technical expertise.
        </p>
      </div>

      {/* Case Studies Accordion */}
      <div className="accordion space-y-4">
        {caseStudies.map(({ id, title, content, special }) => (
          <div
            key={id}
            className="accordion-item bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center cursor-pointer px-6 py-4 bg-gradient-to-t from-red-50 to-red-200 hover:bg-pink-200 transition-colors duration-300"
              onClick={() => toggleAccordion(id)}
              aria-expanded={openAccordion === id} // ARIA attribute for accessibility
              role="button"
            >
              <div className="flex items-center space-x-5">
                {special && (
                  <span className="bg-red-400 text-white text-xs font-bold uppercase px-2 py-1 rounded">
                    Special
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              </div>
              <span className="text-xl">
                {openAccordion === id ? '−' : '+'}
              </span>
            </div>

            {/* Accordion Content */}
            <div
              className={`accordion-content transition-all duration-500 ease-in-out ${
                openAccordion === id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
              style={{
                transitionProperty: 'max-height, opacity',
              }}
            >
              {openAccordion === id && (
                <div className="px-6 py-4 bg-white max-h-[700px] overflow-y-auto">
                  {content}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
