import React from 'react'

const CircularImage = ({ imageSrc, className = " " }) => {
  return (
    <div className={`relative aspect-square w-full h-full flex items-center justify-center ${className}`}>
      <img src={imageSrc || "/placeholder.svg"} alt="Featured image" loading="lazy" className="w-full h-full object-contain" />
    </div>
  )
}

export default CircularImage


