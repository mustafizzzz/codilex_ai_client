import { cn } from '@/lib/utils'
import React from 'react'

const ServiceCard = ({ Icon, title, description, variant = "default", className = "" }) => {
  return (
    <div
      className={cn(
        "p-8 rounded-lg transition-all duration-300 hover:shadow-lg",
        variant === "primary" ? "bg-black text-white" : "bg-gray-100",
        className,
      )}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 mb-12">
        <Icon className={cn("w-6 h-6", variant === "primary" ? "text-black" : "text-gray-700")} />
      </div>
      <h3 className={cn("text-lg font-semibold mb-2", variant === "primary" ? "text-white" : "text-black")}>
        {title}
      </h3>
      <p className={cn("text-sm", variant === "primary" ? "text-gray-300" : "text-gray-600")}>{description}</p>
    </div>
  )
}

export default ServiceCard