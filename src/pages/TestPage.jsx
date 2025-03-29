import TestimonialCardTest from '@/TestComponents/TestimonialCardTest.jsx'
import React from 'react'
import Section7Ellipse from '../../src/assets/Section7Ellipse.png'
import AnimatedTooltip from '@/TestComponents/AnimatedTooltip'
import { Cover } from '@/AceternityUi/Cover'
import { HoverBorderGradient } from '@/AceternityUi/HoverBorderGradient'
import ShinyButton from '@/AceternityUi/ShinyButton'
import { HighlightText } from '@/AceternityUi/HighlightText'
import { AnimatedTestimonials } from '@/AceternityUi/AnimatedTestimonials'
import { TypewriterEffectSmooth } from '@/AceternityUi/TypewriterEffect '
import { ShootingStars } from '@/AceternityUi/ShootingStars'
import { StarsBackground } from '@/AceternityUi/StarsBackground'
import { WavyBackground } from '@/AceternityUi/WavyBackground'



const TestPage = ({ className = "" }) => {

  const items = [
    { id: 1, name: "John Doe", designation: "Senior Lawyer", image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 2, name: "Jane Smith", designation: "Legal Analyst", image: "https://randomuser.me/api/portraits/men/8.jpg" },
  ];

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://dummyimage.com/250x300",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://dummyimage.com/250x300",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://dummyimage.com/250x300",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://dummyimage.com/250x300",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://dummyimage.com/250x300",
    },
  ];

  const words = [

    { text: "which is", className: "text-white" }, // White animated text
    { text: "instant,", className: "text-teal-400 font-semibold" }, // Animated in teal-400
    { text: "precise,", className: "text-teal-400 font-semibold" }, // Animated in teal-400
    { text: "and", className: "text-white" }, // White animated text
    { text: "always available.", className: "text-teal-400 font-semibold" }, // Animated in teal-400
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

    // <div className="flex justify-center items-center border border-4 bg-gray-100">
    //   <AnimatedTooltip items={items} />
    // </div>

    // <div >
    //   <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
    //     Build amazing websites <br /> at <Cover>warp speed</Cover>
    //   </h1>
    // </div>

    // <div className="m-40 flex justify-center items-center text-center bg-black h-50">
    //   <HoverBorderGradient
    //     containerClassName="rounded-full border border-0" // Light border for visibility
    //     as="button"
    //     className="bg-black text-white flex items-center space-x-2 border  border-gray-600"

    //   >
    //     <span className="text-lg font-semibold">Aceternity UI</span>
    //   </HoverBorderGradient>
    // </div>

    // <div className="flex justify-center items-center h-screen bg-gray-900">
    //   <ShinyButton onClick={() => alert("Button Clicked!")}>
    //     Tailwind Connect
    //   </ShinyButton>
    // </div>

    // <div className="p-10 text-center text-lg font-semibold">
    //   <p>
    //     This is an <HighlightText>animated text</HighlightText> effect using Framer Motion.
    //   </p>
    // </div>
    // <div>
    //   <AnimatedTestimonials testimonials={testimonials} />
    // </div>

    // <div className="flex flex-col items-center justify-center h-[40rem] w-full bg-black">
    //   <p className="text-3xl md:text-4xl font-medium tracking-tight leading-tight text-white">
    //     We give you <span className="font-semibold">legal assistance</span>{" "}
    //     <TypewriterEffectSmooth words={words} /> {/* which is (white) */}

    //   </p>
    // </div>

    // <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
    //   <ShootingStars minDelay={3000} starWidth={20} />
    //   <StarsBackground starDensity={0.00060} maxTwinkleSpeed={0.5} />
    // </div>

    <WavyBackground colors={["#134E4A", "#0F172A", "#1E293B", "#475569", "#94A3B8"]} waveWidth={80}>
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>


  )
}

export default TestPage