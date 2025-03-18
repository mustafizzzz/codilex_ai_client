import React from 'react'
import Section8Img1 from '../../assets/Section8Img1.png';
import Section8Img2 from '../../assets/Section8Img2.png';
import Section8Img3 from '../../assets/Section8Img3.png';
import Section8Img4 from '../../assets/Section8Img4.png';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

const ProjectSection = () => {

  // Sample projects data it will pass as props
  const projects = [
    {
      id: 1,
      image: Section8Img1,
      title: "Lorem Ipsum Dummy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
      link: "#",
    },
    {
      id: 2,
      image: Section8Img2,
      title: "Lorem Ipsum Dummy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
      link: "#",
    },
    {
      id: 3,
      image: Section8Img3,
      title: "Lorem Ipsum Dummy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
      link: "#",
    },
    {
      id: 4,
      image: Section8Img4,
      title: "Lorem Ipsum Dummy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
      link: "#",
    },
  ]

  const handleTrialClick = () => {
    console.log("Trial button clicked")
  }
  return (

    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-30">Lorem Ipsum is simply</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Column - Larger Projects */}
          <div className="space-y-14">
            <ProjectCard {...projects[0]} />
            <ProjectCard {...projects[1]} />
          </div>

          {/* Right Column - Trial Button and Projects */}
          <div className="space-y-14 mt-12">
            <div className="flex justify-end mb-4">
              <Button
                onClick={handleTrialClick}
                className={cn(
                  "bg-black text-white px-4 py-4 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
                )}
              >
                <ChevronRight className=" bg-white text-black rounded-full p-1 min-w-[22px] min-h-[22px]" />
                Start your Free Trial
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