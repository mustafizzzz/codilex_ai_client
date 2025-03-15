import { Button } from '@/components/ui/button'
import React from 'react'
import ImageStack from './ImageStack'

const HeroSection4 = () => {

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <span className="text-teal-500 font-medium">Lorem Ipsum</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Lorem Ipsum is simply dummy</h1>
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero ut tortor purus tincidunt sed
            lectus ut eros, turpis tincidunt id.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Start your Free Trial</Button>
        </div>

        {/* Right Content */}
        <div className="relative">
          <ImageStack />
        </div>


      </div>
    </div>
  )
}

export default HeroSection4