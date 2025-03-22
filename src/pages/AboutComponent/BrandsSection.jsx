import { cn } from '@/lib/utils'
import React from 'react'
import BrandCard from './BrandSectionComponent/BrandCard'
import CTABanner from './../../components/reuseComponent/CTABanner';

import CTABackgroundBanner from "../../assets/HeaderBanner/CTABackgroundBanner.png";

const BrandsSection = ({ brands = [], className = "" }) => {
  return (
    <section className={cn("py-35", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-6xl font-bold text-center mb-2">Trusted by</h2>
        <h2 className="text-2xl md:text-6xl font-bold text-center mb-2">Top-Class Brands</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {brands.map((brand, index) => (
            <BrandCard key={index} src={brand.logo} alt={brand.name} href={brand.url} />
          ))}
        </div>

        <CTABanner
          backgroundImage={CTABackgroundBanner}
          title="Enough talk, lets's get to work"
          buttonText="Get in touch"
          buttonHref="/contact" />

      </div>
    </section>
  )
}

export default BrandsSection