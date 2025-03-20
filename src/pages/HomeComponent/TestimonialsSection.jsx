import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import your image
import Section7Group from '../../assets/TestimonialSectionImage/Section7Group.png';
import TestimonialCard from "./TestimonialSectionComponent/TestimonialCard";



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

  const ChevronNavigation = ({ onPrevious, onNext }) => {
    return (
      <div className="flex justify-center md:justify-start gap-4 mt-12">
        <button
          onClick={onPrevious}
          className="p-2 rounded-full bg-black text-white cursor-pointer hover:bg-gray-800 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNext}
          className="p-2 border border-black rounded-full bg-transparent text-black cursor-pointer hover:bg-gray-200 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };



  return (

    <section className="relative py-20 md:py-35 bg-gray-100 overflow-hidden">

      <div className="block h-150 lg:absolute lg:inset-0 lg:w-200 lg:h-full lg:overflow-hidden">
        <img
          src={testimonials[currentIndex].image}
          alt="Testimonial"
          className="w-full h-full object-cover"
        />
      </div>

      {/* <div className="relative lg:hidden border border-8 w-full h-160">
        <div className="absolute inset-0 w-full">
          <img
            src={testimonials[currentIndex].image}
            alt="Testimonial"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}


      <div className="container mx-auto px-4">
        <TestimonialCard
          {...testimonials[currentIndex]}
          chevronButtons={<ChevronNavigation onPrevious={handlePrevious} onNext={handleNext} />}
        />
      </div>


    </section>




  )
}

export default TestimonialsSection

