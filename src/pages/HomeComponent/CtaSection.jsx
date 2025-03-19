import React from 'react'
import BrandLogo from './BrandLogo';
import CircularImage from './CircularImage';
import { Button } from '@/components/ui/button';


import greenishBrandLogo from '../../assets/greenishBrandLogo.png';
import automationBrandLogo from '../../assets/automationBrandLogo.png';
import leafBrandLogo from '../../assets/leafBrandLogo.png';
import mindfulnessBrandLogo from '../../assets/mindfulnessBrandLogo.png';
import { MessageCircle } from 'lucide-react';



const CtaSection = () => {

  const brands = [
    { id: 1, src: greenishBrandLogo, alt: "Greenrush" },
    { id: 2, src: automationBrandLogo, alt: "Automation" },
    { id: 3, src: leafBrandLogo, alt: "Leafe" },
    { id: 4, src: mindfulnessBrandLogo, alt: "Mindfulness" },
  ]

  return (

    // <section className="w-full bg-black text-white py-16 md:py-24">

    //   <div className="container mx-auto px-4 md:px-6">

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    //       {/* Left content column */}
    //       <div className="flex flex-col space-y-8">
    //         <div className="space-y-4">
    //           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
    //             Ready to take your <span className="block text-teal-400">Lorem Ipsum Dummy</span> to the next level?
    //           </h1>
    //           <p className="text-gray-400 max-w-md">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit - et ut massa libero egestas malesuada viverra
    //             gravida libero cursus nulla leo pulvinar.
    //           </p>
    //         </div>

    //         <div>
    //           <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
    //             <MessageCircle className="mr-2 h-4 w-4" />
    //             Ask Question
    //           </Button>
    //         </div>

    //         {/* Image appears here on mobile */}
    //         <div className="lg:hidden mx-auto w-full">
    //           <CircularImage imageSrc="/src/assets/circular-meeting-image.png" />
    //         </div>

    //         {/* Brands */}
    //         <div className="pt-8">
    //           <p className="text-sm text-gray-400 mb-4">Trusted by Leading Brands</p>
    //           <div className="flex flex-wrap gap-8">
    //             {brands.map((brand) => (
    //               <BrandLogo key={brand.id} src={brand.src} alt={brand.alt} />
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right image column - hidden on mobile */}
    //       <div className="hidden lg:flex justify-center">
    //         <CircularImage imageSrc="/src/assets/Section1Group.png" className='scale-160' />
    //       </div>

    //     </div>
    //   </div>
    // </section >

    <section className="relative w-full bg-black text-white overflow-hidden">

      {/* Main container with relative positioning */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left content column */}
          <div className="flex flex-col space-y-8 lg:pr-8 relative">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to take your <span className="block text-teal-400">Lorem Ipsum Dummy</span> to the next level?
              </h1>
              <p className="text-gray-400 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit - et ut massa libero egestas malesuada viverra
                gravida libero cursus nulla leo pulvinar.
              </p>
            </div>

            <div>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
                <MessageCircle className="mr-2 h-4 w-4" />
                Ask Question
              </Button>
            </div>

            {/* Image appears here on mobile */}
            <div className="md:hidden mx-auto w-full max-w-[100%]">
              <CircularImage imageSrc="/src/assets/Section1Group.png" className='scale-120' />
            </div>

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

          {/* Right column is empty on mobile, just for layout purposes on desktop */}
          <div className="hidden md:block"></div>
        </div>

      </div>

      {/* Full-width background image - hidden on mobile, positioned absolutely on desktop */}
      <div className="hidden md:block absolute top-10 right-20 w-1/2 h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <CircularImage imageSrc="/src/assets/Section1Group.png" className="scale-140" />
        </div>
      </div>
    </section>


  );
}

export default CtaSection