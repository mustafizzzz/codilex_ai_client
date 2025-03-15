import React from 'react'
// import Ellipse13 from "../../assets/Ellipse13.svg";
// import Ellipse14 from "../../assets/Ellipse14.svg";
// import Ellipse15 from "../../assets/Ellipse15.svg";

const TestimonialCard = ({ image, quote, author, role, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${className}`}>

      {/* Image with rings */}

      <div className="relative flex justify-center">

        {/* Three separate rings from your Figma exports */}
        {/* <div className="absolute w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-30">
          <img
            src={Ellipse13}
            alt=""
            className="w-full h-full"
            aria-hidden="true"
          />
        </div> */}

        {/* <div className="absolute w-[125%] h-[125%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
          <img
            src={Ellipse14}
            alt=""
            className="w-full h-full"
            aria-hidden="true"
          />
        </div>

        <div className="absolute w-[110%] h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <img
            src={Ellipse15}
            alt=""
            className="w-full h-full"
            aria-hidden="true"
          />
        </div> */}

        {/* Profile image */}
        {/* <div className="relative w-72 h-72 rounded-full overflow-hidden z-10">
          <img
            src={image || "/placeholder.svg"}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div> */}


      </div>


      {/* Content */}
      <div className="space-y-4">
        <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed">"{quote}"</blockquote>
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-gray-600">{role}</div>
        </div>
      </div>
    </div >
  )
}

export default TestimonialCard