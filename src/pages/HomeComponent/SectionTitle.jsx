import React from 'react'

const SectionTitle = ({ subtitle, title, className }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <span className="text-primary text-sm font-medium block mb-2">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  )
}

export default SectionTitle