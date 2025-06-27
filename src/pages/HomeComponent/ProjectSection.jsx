import React from 'react'
import ProjectCard from './ProjectSectionComponent/ProjectCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';


import Section8Img1 from '../../assets/ProjectSectionImage/Section8Img1.png';
import Section8Img2 from '../../assets/ProjectSectionImage/Section8Img2.png';
import Section8Img3 from '../../assets/ProjectSectionImage/Section8Img3.png';
import Section8Img4 from '../../assets/ProjectSectionImage/Section8Img4.png';

const ProjectSection = () => {

  // Sample projects data it will pass as props
  const projects = [
    {
      id: 1,
      image: Section8Img1,
      title: "Law Firms",
      description:
        "Seamlessly integrate AI into your practice and scale your efficiency.",
      link: "#",
    },
    {
      id: 2,
      image: Section8Img2,
      title: "Universities & Legal Education",
      description:
        "Bringing AI-assisted learning to law students and legal scholars.",
      link: "#",
    },
    {
      id: 3,
      image: Section8Img3,
      title: "Resellers & Affiliates",
      description:
        "Earn by referring lawyers and firms to our AI-powered tools.",
      link: "#",
    },
    {
      id: 4,
      image: Section8Img4,
      title: "AI Research & Development",
      description:
        "Help shape the future of AI in law with research collaborations.",
      link: "#",
    },
  ]

  const handleTrialClick = () => {
    console.log("Trial button clicked")
  }

  return (

    <section className="pb-35 pt-35">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Partner With Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Larger Projects */}
          <div className="space-y-14">
            <ProjectCard {...projects[0]} />
            <ProjectCard {...projects[1]} />
          </div>

          {/* Right Column - Trial Button and Projects */}
          <div className="space-y-14 mt-12">
            <div className="flex justify-end mb-12 md:w-[80%] md: mx-auto">

              <Button
                onClick={handleTrialClick}
                className={cn(
                  "bg-black text-white px-4 py-4 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer font-sans"
                )}
              >
                <ChevronRight className=" bg-white text-black rounded-full p-1 min-w-[22px] min-h-[22px]" />
                Contact Us
              </Button>

            </div>

            <ProjectCard {...projects[2]} />
            <ProjectCard {...projects[3]} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProjectSection