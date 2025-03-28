import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const ProjectCard = ({ image, title, description, link = "#", className = "" }) => {
  return (
    <div className={cn("flex flex-col md:w-[80%] md:mx-auto", className)}>
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="md:w-[80%]">
        <h3 className="text-lg font-semibold mb-2 font-serif">{title}</h3>
        <p className="text-gray-600 font-medium text-sm mb-3 font-sans">{description}</p>
        <a href={link} className="inline-flex items-center text-sm font-medium text-black hover:underline mt-auto font-sans">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard