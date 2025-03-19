import React from 'react'

import FeaturesSection from './HomeComponent/FeaturesSection'
import ServicesSection from './HomeComponent/ServicesSection'
import TestimonialsSection from './HomeComponent/TestimonialsSection'
import ProjectSection from './HomeComponent/ProjectSection'
import CtaSection from './HomeComponent/CtaSection'
import FreeTrailSection1 from './HomeComponent/FreeTrailSection1'
import FreeTrailSection2 from './HomeComponent/FreeTrailSection2'
import FreeTrailSection3 from './HomeComponent/FreeTrailSection3'

const HomePage = () => {
  return (
    <div>
      <CtaSection />
      <ServicesSection />
      <FreeTrailSection1 />
      <FreeTrailSection2 />
      <FreeTrailSection3 />
      <FeaturesSection />
      <TestimonialsSection />
      <ProjectSection />


    </div>
  )
}

export default HomePage