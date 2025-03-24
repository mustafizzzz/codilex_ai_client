import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import { ChevronRight } from 'lucide-react';

const ContentImageSection = ({
  subtitle = "Lorem Ipsum",
  title = "Lorem Ipsum is simply dummy",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
  buttonText = "Start your Free Trial",
  buttonOnClick,
  image,
  bgColor = "bg-white",
  imageOnRight = true,
  className = "",
}) => {

  // Determining text color based on background
  const isDarkBg = bgColor.includes("black") || bgColor.includes("gray-900");
  const isLightBg = bgColor.includes("white") || bgColor.includes("gray-100");

  const textColor = isDarkBg ? "text-white" : isLightBg ? "text-black" : "text-gray-900";
  const descriptionColor = isDarkBg ? "text-gray-300" : isLightBg ? "text-gray-600" : "text-gray-700";
  const buttonBg = isDarkBg ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800";

  return (
    <section className={cn(bgColor, className)}>

      <div className="container mx-auto px-4 py-35">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">

          {/* Image Section */}
          <div className={cn("relative", imageOnRight ? "md:order-2" : "md:order-1")}>
            <div className="rounded-lg overflow-hidden">
              <img src={image || "/placeholder.svg"} alt={title}
                className="w-full h-auto object-cover
                sm:max-w-[200px] md:max-w-[350px] lg:max-w-[450px] xl:max-w-[580px]" />
            </div>
          </div>


          {/* Content Section */}
          <div className={cn("space-y-6", imageOnRight ? "md:order-1" : "md:order-2")}>
            <span className="text-teal-400 font-medium block font-serif">{subtitle}</span>
            <h2 className={cn("text-4xl md:text-5xl font-medium tracking-tight font-serif", textColor)}>{title}</h2>
            <p className={cn(" font-sm font-light max-w-xl mb-14 font-sans", descriptionColor)}>{description}</p>

            <Button
              onClick={buttonOnClick}
              className={cn("font-sans rounded-full px-2 py-2 font-medium transition-colors cursor-pointer flex items-center gap-2 pr-4", buttonBg)}
            >
              <div className={cn(
                "rounded-full p-1 flex items-center justify-center",
                bgColor === "bg-black" ? "bg-black text-white" : "bg-white text-black"
              )}>
                <ChevronRight />
              </div>
              {buttonText}
            </Button>

          </div>


        </div>

      </div>

    </section>
  )
}

export default ContentImageSection