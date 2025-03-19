import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import your image
import Section7Group from '../../assets/Section7Group.png';
import TestimonialCard from "./TestimonialCard";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    image: Section7Group,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    author: "James Ryan",
    role: "Freelancer",
  },
  // Add more testimonials as needed
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }



  return (

    // <section className="py-16 bg-gray-100 overflow-hidden">
    //   <div className="container mx-auto px-4">
    //     <div className="max-w-6xl mx-auto">

    //       {/* //TODO <TestimonialCard {...testimonials[currentIndex]} /> */}
    //       <TestimonialCard {...testimonials[currentIndex]} />

    //       {/* Navigation */}
    //       <div className="flex justify-center gap-4 mt-8">
    //         <button
    //           onClick={handlePrevious}
    //           className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
    //           aria-label="Previous testimonial"
    //         >
    //           <ChevronLeft className="w-5 h-5" />
    //         </button>
    //         <button
    //           onClick={handleNext}
    //           className="p-2 rounded-full bg-white text-black hover:bg-white-800 transition-colors"
    //           aria-label="Next testimonial"
    //         >
    //           <ChevronRight className="w-5 h-5" />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className="w-full bg-gray-100 py-12 px-4">

      <div className="w-full w-full mx-auto overflow-hidden rounded-xl">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[700px] flex">

          {/* Left side with circular image */}
          <div className="relative w-full h-full">

            {/* Actual image */}
            <img
              src="src/assets/Section7Group.png"
              alt="Testimonial"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain rounded-full"
            />
          </div>

          {/* Right content area with blue border - empty for now */}
          <div className="relative w-1/2 h-full border-l-4 border-blue-500">
            {/* Content will be added here later */}
          </div>
        </div>
      </div>
    </div>


  )
}

export default TestimonialsSection

