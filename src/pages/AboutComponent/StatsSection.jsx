import { cn } from '@/lib/utils'
import React from 'react'
import StatCard from './StatsSectionComponent/StatCard'

const StatsSection = ({ stats = [], className = "" }) => {
  return (
    <section className={cn("py-16 rounded-xl border border-gray-200", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection