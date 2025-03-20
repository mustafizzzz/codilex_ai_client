import React from "react";

const SiteHeader = ({
  backgroundImage,
  title = "Contact",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero. egestas malesuada viverra gravida libero cursus nulla leo pulvinar.",
  className = "",
  paddingY = "py-16",
  titleClassName = "text-4xl md:text-5xl font-bold mb-4",
  descriptionClassName = "max-w-2xl mx-auto text-gray-300",
}) => {

  return (

    // <div className="container mx-auto px-4">
    //   <div className={`grid grid-cols-12 bg-white ${paddingY} ${className}`}>
    //     <div className="col-start-2 col-end-12 md:col-start-2 md:col-end-12 relative bg-black text-white rounded-xl overflow-hidden">

    //       {backgroundImage && (
    //         <div className="absolute inset-0 flex items-center justify-center">
    //           <img
    //             src={backgroundImage}
    //             alt="Section background"
    //             className="h-full w-full object-cover opacity-100"
    //           />
    //         </div>
    //       )}

    //       <div className="container mx-auto px-4 py-16 text-center relative">
    //         <h1 className={titleClassName}>{title}</h1>
    //         {description && <p className={descriptionClassName}>{description}</p>}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className={`container mx-auto px-4 ${paddingY} ${className}`}>
      <div className="relative bg-black text-white rounded-xl overflow-hidden">
        {backgroundImage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={backgroundImage}
              alt="Section background"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
        )}
        <div className="container mx-auto px-4 py-16 text-center relative">
          <h1 className={titleClassName}>{title}</h1>
          {description && <p className={descriptionClassName}>{description}</p>}
        </div>
      </div>
    </div>



  );
};

export default SiteHeader;