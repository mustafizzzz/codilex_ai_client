import React from "react";
import rectangleContact from "../../assets/RectangleContact.png";

const ContactHeader = () => {
  return (
    <div div className="grid grid-cols-12 bg-white py-16" >
      <div className="col-start-2 col-end-12 md:col-start-2 md:col-end-12 relative bg-black text-white rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={rectangleContact}
            alt="Contact background"
            className="h-full w-full object-cover opacity-80"
          />
        </div>
        <div className="container mx-auto px-4 py-16 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero. egestas malesuada viverra gravida
            libero cursus nulla leo pulvinar.
          </p>
        </div>
      </div>
    </div >
  );
};

export default ContactHeader;