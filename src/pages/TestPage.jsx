import TestimonialCardTest from '@/TestComponents/TestimonialCardTest.jsx'
import React, { useRef } from 'react'
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
import { Confetti, ConfettiButton } from '@/AceternityUi/ConfettiButtonComponent'
import axios from 'axios'
import { InfiniteMovingCards } from '@/pages/HomeComponent/InfiniteMovingCard'



const TestPage = ({ className = "" }) => {

  const testimonials = [
    {
      quote:
        "What impresses me most about Codilex is how it streamlines my daily practice. The judgment summarisation feature alone is remarkable—it condenses vast amounts of information into clear, concise points in minutes. This allows me to get to the heart of a matter quicker and prepare my cases more effectively. It has fundamentally changed how I manage my caseload.",
      name: "Nikhil Kaushik",
      title: "Advocate, Punjab & Haryana High Court",
    },
    {
      quote:
        "Integrating Codilex into our workflow has been a game-changer. It handles the time-consuming research and initial drafting that used to bog down our junior associates, freeing them up for higher-value, billable tasks. The AI is incredibly reliable, works 24/7, and has significantly reduced our research overhead. It’s not just a tool; it’s a productivity multiplier for the entire firm.",
      name: "Shubham",
      title: "Partner at Pramnyay Law Firm",
    },
    {
      quote:
        "In the fast-paced environment of the Supreme Court, speed and precision are everything. Codilex delivers on both. Its ability to instantly pull up relevant case law and precedents has saved me countless hours in preparation. On more than one occasion, it has uncovered a crucial insight that has strengthened my arguments in court. It’s an indispensable tool for any serious Advocate.",
      name: "Shrenik Bhardwaj",
      title: "Advocate, Supreme Court of India",
    },
    {
      quote:
        "Practicing independently at the Delhi High Court requires leveraging every possible advantage. Codilex has enhanced my practice by providing a powerful new layer of insight into my cases. The platform helps me approach my work with greater confidence and develop my arguments more robustly. It’s a significant step forward for how solo practitioners can operate.",
      name: "Rajan Saini",
      title: "Advocate, Delhi High Court",
    },
    {
      quote:
        "In a demanding corporate environment like ICICI Lombard, efficiency is paramount. Codilex has become an invaluable asset for our team, significantly streamlining our legal processes. Its capabilities allow us to manage our workload more effectively and dedicate more time to strategic, high-impact activities. It has truly enhanced our day-to-day productivity.",
      name: "Ankit Kashyap",
      title: "Legal Officer, ICICI Lombard",
    },

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

    // <WavyBackground colors={["#134E4A", "#0F172A", "#1E293B", "#475569", "#94A3B8"]} waveWidth={80}>
    //   <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
    //     Hero waves are cool
    //   </p>
    //   <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
    //     Leverage the power of canvas to create a beautiful hero section
    //   </p>
    // </WavyBackground>

    // <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
    //   <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
    //     Confetti
    //   </span>

    //   <Confetti
    //     ref={confettiRef}
    //     className="absolute left-0 top-0 z-0 size-full"
    //     onMouseEnter={() => {
    //       if (confettiRef.current) {
    //         confettiRef.current.fire({});
    //       }
    //     }}
    //   />
    // </div>
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>


  )
}

export default TestPage