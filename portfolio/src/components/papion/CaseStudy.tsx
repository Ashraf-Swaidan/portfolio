import React, { useState } from 'react';
import LaserCaseStudy from './LaserCaseStudy';

interface CaseStudyProps {
  id: string;
  title: string;
  content: React.ReactNode;
  special?: boolean; // Optional prop to flag special case studies
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
      special: true, // Mark this case study as special
    },
    {
      id: 'inventory',
      title: 'Managing Stands In Inventory and Sales',
      content: <div>Managing Stands In Inventory and Sales Case Study Content Here</div>,
    },
    // Add more case studies here if needed
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Case Studies</h2>

      <div className="accordion space-y-4">
        {caseStudies.map(({ id, title, content, special }) => (
          <div
            key={id}
            className="accordion-item bg-gray-100 rounded-lg border border-gray-300"
          >
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center cursor-pointer px-6 py-4 bg-gradient-to-t from-red-50 to-red-200 hover:bg-pink-300 transition-colors duration-300"
              onClick={() => toggleAccordion(id)}
            >
              <div className="flex items-center space-x-5">
                {special && (
                  <span className=" bg-red-400 text-white text-xs font-bold uppercase px-2 py-1 rounded">
                    Special
                  </span>
                )}
                <h3 className="text-xl font-semibold">{title}</h3>
                
              </div>
              <span className="text-xl">
                {openAccordion === id ? '−' : '+'}
              </span>
            </div>

            {/* Accordion Content */}
            <div
              className={`accordion-content transition-all duration-500 ease-in-out ${
                openAccordion === id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
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
