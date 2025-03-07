import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Navbar = () => {


  const navLinks = [
    { name: "Home", path: '/' },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ]
  const isActive = (path) => {
    return location.pathname === path;
  }
  return (
    <header className='sticky top-0 bg-white z-10'>
      <div className="container mx-auto px-4 py-4">
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">codilex.ai</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {
              navLinks.map((link) => (
                <Link to={link.path} key={link.name} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-gray-700"}`} >
                  {link.name}
                </Link>
              ))
            }
          </div>
          {/* Login Button */}
          <div className="hidden md:block">
            <Button variant="default" className="text-white hover:bg-gray-800 rounded-full cursor-pointer">
              Log Out
            </Button>
          </div>
        </nav>
      </div >

    </header >
  )
}

export default Navbar