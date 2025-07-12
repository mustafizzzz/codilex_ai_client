"use client";
import { WavyBackground } from "@/AceternityUi/WavyBackground";
import { cn } from "../../lib/utils";

const CTABanner = ({
  backgroundImage,
  title = "Enough talk, let's get to work",
  buttonText = "Get in touch",
  buttonHref = "#contact",
  titleClassName = "text-3xl md:text-4xl font-bold text-white text-center mb-6 font-serif",
  buttonClassName = "px-6 py-2 bg-transparent cursor-pointer hover:bg-gray-600 text-white border border-white rounded-full transition-colors duration-300 font-sans",
  className = "",
  paddingY = "py-16",
  onButtonClick,
  waveColors = ["#0c4a6e", "#0369a1", "#0284c7"],
  waveOpacity = 0.5,
  waveSpeed = "fast",
  waveBlur = 10,
  waveWidth = 50,
}) => {
  return (
    <div className={cn(`container mx-auto px-4 ${paddingY}`, className)}>
      <div
        className="relative rounded-xl overflow-hidden mx-4 md:mx-1"
        style={{ minHeight: "200px" }}
      >
        {/* WavyBackground component */}
        <WavyBackground
          colors={waveColors}
          waveOpacity={waveOpacity}
          speed={waveSpeed}
          blur={waveBlur}
          waveWidth={waveWidth}
          backgroundFill="black"
          containerClassName="absolute inset-0 w-full h-full"
        >
          {/* Empty div to ensure proper sizing */}
          <div className="w-full h-full" />
        </WavyBackground>

        {/* Content - highest z-index to appear above everything */}
        <div className="container mx-auto px-4 py-16 text-center relative">
          <h2 className={titleClassName}>{title}</h2>
          <button
            className={buttonClassName}
            onClick={(e) => {
              if (onButtonClick) onButtonClick(e);
              if (buttonHref) window.location.href = buttonHref;
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
