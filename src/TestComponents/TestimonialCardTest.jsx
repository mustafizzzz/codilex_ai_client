import React from 'react'
import Section7Ellipse from '../../src/assets/Section7Ellipse.png'

const TestimonialCardTest = ({ ellipseImage, personImage, altText = "Person image" }) => {
  return (

    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center `}>
      <div className="relative flex items-center justify-center w-full max-w-md mx-auto border border-orange-500">
        {/* Container with relative positioning */}
        <div className="relative w-full pb-full">
          {/* Ellipse background */}
          <img
            src={ellipseImage}
            alt="Ellipse background"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* Person image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full overflow-hidden">
              <img
                src={personImage}
                alt={altText}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default TestimonialCardTest