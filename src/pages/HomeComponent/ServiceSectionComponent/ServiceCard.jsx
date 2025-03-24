import { cn } from '@/lib/utils'
import React from 'react'

const ServiceCard = ({ Icon, title, description, variant = "default", className = "" }) => {
  return (
    <div
      className={cn(
        "p-8 rounded-lg transition-all duration-200 hover:shadow-lg",
        variant === "primary" ? "bg-black text-white" : "bg-gray-100",
        className,
      )}
    >
      <div className={cn("inline-flex items-center justify-center w-15 h-15 rounded-full mb-12", variant === "primary" ? "bg-gray-200" : "bg-black")}>
        <Icon className={cn("w-6 h-6", variant === "primary" ? "text-black" : "text-white")} />
      </div>
      <h3 className={cn("font-serif text-lg font-medium mb-2", variant === "primary" ? "text-white" : "text-black")}>
        {title}
      </h3>
      <p className={cn("font-sans text-sm", variant === "primary" ? "text-gray-300" : "text-gray-800")}>{description}</p>
    </div>
  )
}

export default ServiceCard