import PapionHeroBanner from './home/PapionHeroBanner'
import CaseStudy from './papion/CaseStudy'
import PapionProjectDetails from './papion/PapionProjectDetails'

const PapionProjectPage = () => {
  return (
    <div>
      <PapionHeroBanner isDetailPage={true} />
      <PapionProjectDetails />
      <CaseStudy />
    </div>
  )
}

export default PapionProjectPage