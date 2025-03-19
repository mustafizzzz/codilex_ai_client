import { cn } from '@/lib/utils'
import React from 'react'

const TestimonialCard = ({ image, quote, author, role, className = "" }) => {



  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 items-center", className)}>
      {/* Image Section */}
      <div className="relative flex justify-center">
        <div className={cn("relative aspect-square ")}>
          <img src={image || "/placeholder.svg"} alt={`${author}, ${role}`} className="w-full h-full object-contain max-w-[540px]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed">"{quote}"</blockquote>
        <div>
          <div className="font-semibold text-lg">{author}</div>
          <div className="text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard