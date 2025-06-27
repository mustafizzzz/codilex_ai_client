import React from 'react'

import FeaturesSection from './HomeComponent/FeaturesSection'
import ServicesSection from './HomeComponent/ServicesSection'
import ProjectSection from './HomeComponent/ProjectSection'
import CtaSection from './HomeComponent/CtaSection'
import FreeTrailSection1 from './HomeComponent/FreeTrailSection1'
import FreeTrailSection2 from './HomeComponent/FreeTrailSection2'
import FreeTrailSection3 from './HomeComponent/FreeTrailSection3'
import { AnimatedTestimonials } from '@/AceternityUi/AnimatedTestimonials'
import { InfiniteMovingCards } from '@/pages/HomeComponent/InfiniteMovingCard'
import TestimonialsSection from './HomeComponent/TestimonialsSection'

const HomePage = () => {



  return (
    <>
      <CtaSection
        headline="Ready to revolutionize"
        highlight="your legal practice with AI ?"
        subtext="Streamline legal research, draft documents faster, and analyze cases with precision using our AI-powered legal tools."
        buttonText="Ask Our AI"
      />
      <ServicesSection />
      <FreeTrailSection1 />
      <FreeTrailSection2 />
      <FreeTrailSection3 />
      <FeaturesSection />
      <TestimonialsSection />
      <ProjectSection />
    </>
  )
}

export default HomePage