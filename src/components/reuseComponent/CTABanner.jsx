import React from "react";

const CTABanner = ({
  backgroundImage,
  title = "Enough talk, let's get to work",
  buttonText = "Get in touch",
  buttonHref = "#contact",
  titleClassName = "text-3xl md:text-4xl font-bold text-white text-center mb-6",
  buttonClassName = "px-6 py-2 bg-transparent cursor-pointer hover:bg-gray-600 text-white border border-white rounded-full transition-colors duration-300",
  className = "",
  paddingY = "py-16",
  onButtonClick,
}) => {
  return (
    <div className={`container mx-auto ${paddingY} ${className}`}>
      <div className="relative bg-gray-200 rounded-xl overflow-hidden">
        {/* Background image */}
        {backgroundImage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={backgroundImage}
              alt="CTA background"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
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