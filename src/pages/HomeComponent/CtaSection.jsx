import React from 'react'
import BrandLogo from './BrandLogo';
import { MessageCircle } from 'lucide-react';
import CircularImage from './CircularImage';
import { Button } from '@/components/ui/button';


import greenishBrandLogo from '../../assets/greenishBrandLogo.png';
import automationBrandLogo from '../../assets/automationBrandLogo.png';
import leafBrandLogo from '../../assets/leafBrandLogo.png';
import mindfulnessBrandLogo from '../../assets/mindfulnessBrandLogo.png';
import section1PersonDummy from '../../assets/section1PersonDummy.png';
import section1Ellipse from '../../assets/section1Ellipse.png';
import Ellipse10 from '../../assets/Ellipse10.png';


const CtaSection = () => {

  const brands = [
    { id: 1, src: greenishBrandLogo, alt: "Greenrush" },
    { id: 2, src: automationBrandLogo, alt: "Automation" },
    { id: 3, src: leafBrandLogo, alt: "Leafe" },
    { id: 4, src: mindfulnessBrandLogo, alt: "Mindfulness" },
  ]

  return (

    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to take your <span className="text-teal-400">Lorem Ipsum Dummy</span>
              <br />
              to the next level?
            </h2>

            <p className="text-gray-300 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra
              gravida libero cursus nulla leo pulvinar.
            </p>

            <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
              <MessageCircle className="mr-2 h-4 w-4" />
              Ask Question
            </Button>

            {/* Brands */}
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-4">Trusted by Leading Brands</p>
              <div className="flex flex-wrap gap-8">
                {brands.map((brand) => (
                  <BrandLogo key={brand.id} src={brand.src} alt={brand.alt} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Circular Image */}
          <div className="flex justify-center md:justify-end">
            <CircularImage
              image={Ellipse10}
              ringImage={section1Ellipse}
              alt="Business meeting"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection