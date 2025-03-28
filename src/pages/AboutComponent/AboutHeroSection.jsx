import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"


const AboutHeroSection = ({
  subtitle = "Lorem Ipsum is simply dummy text",
  title = "Ready to take",
  highlightedText = "Lorem Dummy",
  afterHighlightedText = "to the  next level",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.",
  image,
  buttonText = "Contact Us",
  buttonOnClick,
  className = "",
}) => {
  return (
    <section className={cn("text-white py-16 md:py-24 overflow-hidden px-4 md:px-25 xxl:px-0", className)}>

      <div className="bg-black rounded-xl container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8">

          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            <p className="text-sm text-gray-300 font-sans">{subtitle}</p>
            <h1 className="text-2xl md:text-4xl font-semibold leading-tight font-serif">
              {title} <br />
              <span className="text-teal-400 font-serif">{highlightedText}</span> <br />
              {afterHighlightedText}
            </h1>
            <p className="text-gray-300 font-sans">{description}</p>
            <Button onClick={buttonOnClick} className="bg-white text-black hover:bg-gray-200 cursor-pointer rounded-full font-sans">
              <div className={cn(
                "rounded-full p-1 flex items-center justify-center bg-black text-white"
              )}>
                <ChevronRight />
              </div>
              {buttonText}
            </Button>
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

