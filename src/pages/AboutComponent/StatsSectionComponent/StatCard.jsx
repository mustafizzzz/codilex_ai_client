import { cn } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'

const StatCard = ({ value, prefix = "", suffix = "", title, description, className = "" }) => {
  return (
    <div className={cn("text-center px-4", className)}>
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <CountUp
          end={value}
          prefix={prefix}
          suffix={suffix}
          duration={2.5}
          enableScrollSpy={false}
          scrollSpyDelay={0}
        />
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600 max-w-xs mx-auto">{description}</p>
    </div>
  )
}

export default StatCard