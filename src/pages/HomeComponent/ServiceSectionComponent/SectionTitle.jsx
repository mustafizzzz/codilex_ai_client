import React from 'react'

const SectionTitle = ({ subtitle, title, className }) => {
  return (
    <div className={`text-center mb-18 ${className}`}>
      <span className="text-primary text-teal-500 text-xl font-medium block mb-6">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-[250px] md:max-w-[450px] mx-auto">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle