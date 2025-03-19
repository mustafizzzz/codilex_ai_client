import React from 'react'
import { Button } from '@/components/ui/button'
import ImageStack from './ImageStack'
import ContentImageSection from './ContentImageSection'
import Section4Group from '../../assets/Section4Group.png'

const FreeTrailSection2 = () => {

  const handleButtonClick = () => {
    console.log("Free trial button clicked")
  }

  return (
    // <div className="container mx-auto px-4 py-16">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    //     {/* Left Content */}
    //     <div className="space-y-6">
    //       <span className="text-teal-500 font-medium">Lorem Ipsum</span>
    //       <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Lorem Ipsum is simply dummy</h1>
    //       <p className="text-gray-600 max-w-md">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero ut tortor purus tincidunt sed
    //         lectus ut eros, turpis tincidunt id.
    //       </p>
    //       <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Start your Free Trial</Button>
    //     </div>

    //     {/* Right Content */}
    //     <div className="relative">
    //       {/* TODO  Replace here  */}
    //       {/* <ImageStack /> */}
    //     </div>


    //   </div>
    // </div>

    <ContentImageSection
      subtitle="Lorem Ipsum"
      title="Lorem Ipsum is simply dummy"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id."
      buttonText="Start your Free Trial"
      buttonOnClick={handleButtonClick}
      image={Section4Group}
      bgColor="bg-white"
      imageOnRight={true} // Image will be on the right
    />
  )
}

export default FreeTrailSection2