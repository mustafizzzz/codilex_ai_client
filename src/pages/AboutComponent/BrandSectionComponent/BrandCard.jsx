import { cn } from '@/lib/utils'
import React from 'react'

const BrandCard = ({ src, alt, href, className = "" }) => {
  return (
    <div className={cn("bg-gray-100 p-6 rounded-lg flex items-center justify-center cursor-pointer aspect-[3/2]", className)}>
      <img src={src || "/placeholder.svg?height=40&width=120"} alt={alt} className="w-auto max-h-full" />
    </div>
  )
}
export default BrandCard