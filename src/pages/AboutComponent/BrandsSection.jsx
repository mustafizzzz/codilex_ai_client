import { cn } from '@/lib/utils'
import React from 'react'
import BrandCard from './BrandSectionComponent/BrandCard'
import CTABanner from './../../components/reuseComponent/CTABanner';

import CTABackgroundBanner from "../../assets/HeaderBanner/CTABackgroundBanner.png";

const BrandsSection = ({ brands = [], className = "" }) => {

  const waveColors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]

  return (
    <section className={cn("py-24", className)}>
      <div className="container mx-auto px-8">
        {/* <h2 className="text-2xl md:text-6xl font-bold text-center mb-2">Trusted by</h2>
        <h2 className="text-2xl md:text-6xl font-bold text-center mb-2">Top-Class Brands</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {brands.map((brand, index) => (
            <BrandCard key={index} src={brand.logo} alt={brand.name} href={brand.url} />
          ))}
        </div> */}

        <CTABanner
          backgroundImage={CTABackgroundBanner}
          title="Enough talk, lets's get to work"
          buttonText="Get in touch"
          buttonHref="/contact"
          waveColors={waveColors}
          waveOpacity={0.1}
          waveSpeed="fast"
          waveBlur={10}
          waveWidth={40}
          titleClassName="text-3xl md:text-5xl font-bold text-white text-center mb-8 font-serif"
          buttonClassName="px-8 py-3 bg-transparent cursor-pointer hover:bg-white hover:text-black text-white border-2 border-white rounded-full transition-colors duration-300 font-medium font-sans"
        />

      </div>
    </section>
  )
}

export default BrandsSection