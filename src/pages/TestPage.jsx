import TestimonialCardTest from '@/TestComponents/TestimonialCardTest.jsx'
import React from 'react'
import Section7Ellipse from '../../src/assets/Section7Ellipse.png'
import AnimatedTooltip from '@/TestComponents/AnimatedTooltip'

const TestPage = ({ className = "" }) => {

  const items = [
    { id: 1, name: "John Doe", designation: "Senior Lawyer", image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 2, name: "Jane Smith", designation: "Legal Analyst", image: "https://randomuser.me/api/portraits/men/8.jpg" },
  ];


  return (
    // <div className="relative w-[400px] h-[400px]">
    //   {/* Main circular image */}
    //   <div className="relative z-10 w-[300px] h-[300px] rounded-full overflow-hidden mx-auto">
    //     <img
    //       src="/src/assets/dummyImage1.png"
    //       alt="Profile"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>

    //   {/* Ellipse decorations */}
    //   <div className="absolute inset-0 z-0">
    //     {/* Inner ellipse */}
    //     <img
    //       src="/src/assets/Ellipse13.svg"
    //       alt=""
    //       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px]"
    //     />

    //     {/* Middle ellipse */}
    //     <img
    //       src="/src/assets/Ellipse14.svg"
    //       alt=""
    //       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px]"
    //     />

    //     {/* Outer ellipse */}
    //     <img
    //       src="/src/assets/Ellipse15.svg" // Update this path to match your asset location
    //       alt=""
    //       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px]"
    //     />
    //   </div>
    // </div>

    // <div className=" min-h-screen flex flex-col items-center justify-center bg-white p-4">
    //   <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">

    //     <div className={`relative aspect-square w-full max-w-[400px] flex items-center justify-center ${className}`}>
    //       {/* Ellipse decorations - positioned first in the DOM but visually behind */}
    //       <div className="absolute inset-0 flex items-center justify-center">
    //         {/* Outer ellipse */}
    //         <div className="absolute w-[95%] h-[95%]">
    //           <img src="/src/assets/Ellipse13.svg" alt="" className="w-full h-full" />
    //         </div>

    //         {/* Middle ellipse */}
    //         <div className="absolute w-[87.5%] h-[87.5%]">
    //           <img src="/src/assets/Ellipse14.svg" alt="" className="w-full h-full" />
    //         </div>

    //         {/* Inner ellipse */}
    //         <div className="absolute w-[80%] h-[80%]">
    //           <img src="/src/assets/Ellipse15.svg" alt="" className="w-full h-full" />
    //         </div>
    //       </div>

    //       {/* Main circular image - positioned last in the DOM to be visually on top */}
    //       <div className="relative z-10 rounded-full overflow-hidden w-[75%] h-[75%]">
    //         <img src="/src/assets/testimonialDummy1.png" alt="Profile" className="w-full h-full object-cover" />
    //       </div>
    //     </div>

    //   </div>
    // </div>

    // <div className="container mx-auto py-16 px-4">
    //   <TestimonialCardTest
    //     ellipseImage="/src/assets/Section7Ellipse.png"
    //     personImage="/src/assets/testimonialDummy1.png"
    //     altText="Business person in a suit"
    //   />
    // </div>

    <div className="flex justify-center items-center border border-4 bg-gray-100">
      <AnimatedTooltip items={items} />
    </div>


  )
}

export default TestPage