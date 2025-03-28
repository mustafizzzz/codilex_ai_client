import React from 'react'

import FeaturesSection from './HomeComponent/FeaturesSection'
import ServicesSection from './HomeComponent/ServicesSection'
import TestimonialsSection from './HomeComponent/TestimonialsSection'
import ProjectSection from './HomeComponent/ProjectSection'
import CtaSection from './HomeComponent/CtaSection'
import FreeTrailSection1 from './HomeComponent/FreeTrailSection1'
import FreeTrailSection2 from './HomeComponent/FreeTrailSection2'
import FreeTrailSection3 from './HomeComponent/FreeTrailSection3'
import { AnimatedTestimonials } from '@/AceternityUi/AnimatedTestimonials'

const HomePage = () => {

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://dummyimage.com/250x300/1100ff/000000",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://dummyimage.com/250x300/ff00b3/000000",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://dummyimage.com/250x300/4dff00/000000",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://dummyimage.com/250x300/ffd000/000000",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://dummyimage.com/250x300/00ff80/000000",
    },
  ];

  return (
    <>
      <CtaSection
        headline="Ready to revolutionize"
        highlight="your legal practice with AI ?"
        subtext="Streamline legal research, draft documents faster, and analyze cases with precision using our AI-powered legal tools."
        buttonText="Ask Question"
      />
      <ServicesSection />
      <FreeTrailSection1 />
      <FreeTrailSection2 />
      <FreeTrailSection3 />
      <FeaturesSection />
      <TestimonialsSection />
      <div className="border border-4 py-14">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <ProjectSection />
    </>
  )
}

export default HomePage