import React, { useRef } from 'react';
import PapionHeroBanner from './home/PapionHeroBanner';
import CaseStudy from './papion/CaseStudy';
import PapionProjectDetails from './papion/PapionProjectDetails';

const PapionProjectPage = () => {
  // Create a ref to the CaseStudy component
  const caseStudyRef = useRef<HTMLDivElement>(null);

  // Function to scroll to CaseStudy
  const scrollToCaseStudy = () => {
    caseStudyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Pass scroll function as prop */}
      <PapionHeroBanner isDetailPage={true} onScrollToCaseStudy={scrollToCaseStudy} />
      <PapionProjectDetails />
      {/* Attach the ref to the CaseStudy section */}
      <div ref={caseStudyRef}>
        <CaseStudy />
      </div>
    </div>
  );
};

export default PapionProjectPage;
