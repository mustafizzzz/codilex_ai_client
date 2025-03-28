import React from 'react'
import BrandLogo from './CtaSectionComponent/BrandLogo';
import CircularImage from './CtaSectionComponent/CircularImage';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';


import greenishBrandLogo from '../../assets/BrandLogoImage/greenishBrandLogo.png';
import automationBrandLogo from '../../assets/BrandLogoImage/automationBrandLogo.png';
import leafBrandLogo from '../../assets/BrandLogoImage/leafBrandLogo.png';
import mindfulnessBrandLogo from '../../assets/BrandLogoImage/mindfulnessBrandLogo.png';
import Section1Group from '../../assets/RingImage/Section1Group.png';
import { FlipWords } from '@/AceternityUi/FlipWords';




const CtaSection = ({ headline, highlight, subtext, buttonText }) => {

  const brands = [
    { id: 1, src: greenishBrandLogo, alt: "Greenrush" },
    { id: 2, src: automationBrandLogo, alt: "Automation" },
    { id: 3, src: leafBrandLogo, alt: "Leafe" },
    { id: 4, src: mindfulnessBrandLogo, alt: "Mindfulness" },
  ]

  const words = ["revolutionize", "transform", "elevate", "streamline"];

  return (

    <section className="relative w-full bg-black text-white overflow-hidden">

      {/* Main container with relative positioning */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">

          {/* Left content column */}
          <div className="flex flex-col space-y-6 lg:pr-8 relative">

            <div className="space-y-6">
              <h1 className="font-serif text-3xl md:text-5xl font-medium leading-tight">
                Ready to<FlipWords words={words} duration={1000} className="text-white" /><span className="block text-teal-400">{highlight}</span>
              </h1>
              <p className="font-sans max-w-md">{subtext}</p>
            </div>

            <div>
              <Button className="font-sans bg-white text-black hover:bg-gray-200 rounded-full px-2 cursor-pointer">
                <div

                  className="p-1 rounded-full bg-black text-white cursor-pointer hover:bg-gray-800 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </div>
                {buttonText}
              </Button>
            </div>

            {/* Image appears here on mobile */}
            <div className="lg:hidden mx-auto w-full max-w-[100%]">
              <CircularImage imageSrc={Section1Group || "/src/assets/RingImage/Section1Group.png"} className='scale-140' />
            </div>

            {/* Brands */}
            <div className="pt-20">
              <p className="font-serif text-sm font-medium text-teal-300 mb-2 ml-3">Trusted by Leading Brands</p>
              <div className="flex flex-wrap gap-8">
                {brands.map((brand) => (
                  <BrandLogo key={brand.id} src={brand.src} alt={brand.alt} />
                ))}
              </div>
            </div>

          </div>

          {/* Right column is empty on mobile, just for layout purposes on desktop */}
          <div className="hidden lg:block"></div>
        </div>

      </div>

      {/* Full-width background image - hidden on mobile, positioned absolutely on desktop */}
      <div className="hidden lg:block absolute top-10 right-20 w-1/2 h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <CircularImage imageSrc={Section1Group || "/src/assets/RingImage/Section1Group.png"} className="scale-140" />
        </div>
      </div>
    </section>


  );
}

export default CtaSection