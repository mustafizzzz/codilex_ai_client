import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (

    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">

        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Logo and Description - 4 columns */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4">codilex.ai</h3>
            <p className="text-sm text-gray-300">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since.
            </p>
          </div>

          {/* Pages - 2 columns */}
          <div className="md:col-span-3 md:mx-auto">
            <h4 className="text-md font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-gray-300 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Pages - 2 columns */}
          <div className="md:col-span-2 md:mr-auto">
            <h4 className="text-md font-semibold mb-4">Company Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-gray-300 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe - 4 columns */}
          <div className="md:col-span-4">
            <h4 className="text-md font-semibold mb-4">Subscribe</h4>
            <div className="bg-white rounded-full overflow-hidden px-5 py-2 flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email here"
                className="px-4 py-2 rounded-full text-black text-sm flex-grow focus:outline-none"
              />
              <Button className="rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>



        {/* Bottom Section - using the same grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">


          {/* Copyright - 4 columns */}
          <div className="md:col-span-3">
            <h5 className="text-sm font-semibold mb-2">Copyright by</h5>
            <p className="text-xs text-gray-300">Designed by James Ryan</p>
          </div>

          {/* Contact - 2 columns */}
          <div className="md:col-span-3 md:mr-auto">
            <h5 className="text-sm font-semibold mb-2">Contact Us</h5>
            <p className="text-xs text-gray-300">+0 123 456 7890</p>
          </div>

          {/* Address and Social Icons - 6 columns */}
          <div className="md:col-span-6 flex justify-between items-start flex-col gap-4 md:flex-row">
            <div>
              <h5 className="text-sm font-semibold mb-2">Address</h5>
              <p className="text-xs text-gray-300">119 Tanglewood Lane Gulfport, MS 39503</p>
            </div>


            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white rounded-full p-2 flex items-center justify-center">
                <Facebook size={16} className="text-black" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-white rounded-full p-2 flex items-center justify-center">
                <Instagram size={16} className="text-black" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-white rounded-full p-2 flex items-center justify-center">
                <Linkedin size={16} className="text-black" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>


        </div>
      </div>
    </footer>
  )
}

export default Footer