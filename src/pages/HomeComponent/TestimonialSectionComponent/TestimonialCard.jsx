import { cn } from '@/lib/utils'
import React from 'react'

const TestimonialCard = ({ quote, author, role, chevronButtons, className = "" }) => {



  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-4 items-center text-center md:text-left px-4", className)}>
      {/* Image Section */}
      <div className="hidden lg:block"></div>


      {/* Content Section */}
      <div className="space-y-6">
        <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed">"{quote}"</blockquote>
        <div>
          <div className="font-semibold text-lg">{author}</div>
          <div className="text-gray-600">{role}</div>
        </div>

        {/* Render Chevron Buttons */}
        {chevronButtons}
      </div>
    </div>
  )
}

export default TestimonialCard