import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import your image
import testimonialDummy1 from '../../assets/testimonialDummy1.png';
import TestimonialCard from "./TestimonialCard.jsx";

const testimonials = [
  {
    image: testimonialDummy1,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    author: "James Ryan",
    role: "Freelancer",
  },
  // Add more testimonials as needed
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <TestimonialCard {...testimonials[currentIndex]} />

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

