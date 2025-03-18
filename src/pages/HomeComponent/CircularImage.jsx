import { cn } from '@/lib/utils'
import React from 'react'

const CircularImage = ({ image, ringImage, alt = "Image", className = "" }) => {
  return (
    <div className={cn("relative inline-block w-full", className)}>
      {/* Ring image */}
      {ringImage && (
        <img
          src={ringImage || "/placeholder.svg"}
          alt=""
          className="w-full h-auto"
          aria-hidden="true"
        />
      )}

      {/* Main circular image using percentage positioning */}
      <div
        className="absolute rounded-full overflow-hidden"
        style={{
          top: '25%',
          left: '34.5%',
          width: '40%',
          height: '40%'
        }}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default CircularImage