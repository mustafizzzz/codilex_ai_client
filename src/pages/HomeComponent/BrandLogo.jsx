import { cn } from '@/lib/utils'
import React from 'react'

const BrandLogo = ({ src, alt, className = "" }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>
  )
}

export default BrandLogo