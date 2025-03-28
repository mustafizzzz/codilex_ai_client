import React from 'react'
import { cn } from "@/lib/utils"
import { MagicCard } from '@/AceternityUi/MagicCard'

const FeatureCard = ({ Icon, title, description, className = "" }) => {
  return (

    <MagicCard
      gradientColor={"rgba(100, 100, 255, 0.1)"}
      gradientFrom="#6366F1"
      gradientTo="#EC4899"
      gradientOpacity={1}
      gradientSize={150}
      className={cn("text-center p-6 border rounded-2xl bg-white", className)}>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2 font-serif">{title}</h3>
      <p className="text-gray-600 text-sm font-sans">{description}</p>
    </MagicCard>
  )
}

export default FeatureCard