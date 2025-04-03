import { Cover } from "@/AceternityUi/Cover"
import { HoverBorderGradient } from "@/AceternityUi/HoverBorderGradient"
import { TypewriterEffectSmooth } from "@/AceternityUi/TypewriterEffect "
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"


const AboutHeroSection = ({
  subtitle = "Lorem Ipsum is simply dummy text",
  title = "Ready to take",
  highlightedText = "Lorem Dummy",
  afterHighlightedText = "to the  next level",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.",
  words,
  image,
  buttonText = "Contact Us",
  buttonOnClick,
  className = "",
}) => {

  return (
    <section className={cn("text-white py-16 md:py-24 overflow-hidden px-4 md:px-25 xxl:px-0", className)}>

      <div className="bg-black rounded-xl container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-1 md:p-8">

          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-sm text-gray-300 font-sans">{subtitle}</p>

            {/* Original Text */}
            {/* <h1 className="text-2xl md:text-4xl font-semibold leading-tight font-serif">
              {title} <br />
              <span className="text-teal-400 font-serif">{highlightedText}</span> <br />
              {afterHighlightedText}
            </h1> */}

            {/* Type writer animation */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight font-serif">
              {title} <br />
              <span className="text-teal-400 font-serif">{highlightedText}</span> <br />
              <span className="block">
                <TypewriterEffectSmooth words={words} />
              </span>
            </h1>

            {/* Wrap animation */}
            {/* <h1 className="text-2xl md:text-4xl font-semibold leading-tight font-serif">
              {title} <br />
              <span className="text-teal-400 font-serif">{highlightedText}</span> <br />
              <Cover>{afterHighlightedText}</Cover>
            </h1> */}

            <p className="text-gray-300 font-sans">{description}</p>

            <div>
              <HoverBorderGradient
                containerClassName="rounded-full border border-0" // Light border for visibility
                as="button"
                className="bg-black text-white flex items-center space-x-2 border border-gray-600 cursor-pointer font-semibold font-sans gap-2"
              >

                <div
                  className="p-1 rounded-full bg-white text-black cursor-pointer hover:bg-gray-800 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
                {buttonText}

              </HoverBorderGradient>
            </div>

          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[1] -mb-20">
              {image ? (
                <img
                  src={image}
                  alt="About Section"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p>Image placeholder</p>
                </div>
              )}
            </div>

            {/* Decorative element */}
            {/* <div className="absolute top-1/4 -right-8 w-full h-full rounded-lg border-2 border-gray-700 -z-10"></div> */}
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection

