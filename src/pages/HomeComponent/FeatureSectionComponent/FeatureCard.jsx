import React from 'react'
import { cn } from "@/lib/utils"

const FeatureCard = ({ Icon, title, description, className = "" }) => {
  return (
    <div className={cn("text-center p-6 border rounded-2xl hover:bg-gray-50", className)}>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default FeatureCard