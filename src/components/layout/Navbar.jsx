import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react';
import companyLogo from '../../assets/companyLogo.png';
import { toast } from 'sonner';

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: '/' },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ]
  const isActive = (path) => {
    return location.pathname === path;
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    toast.success("Logged out successfully!");

    navigate("/login");
  };

  return (
    <header className='sticky top-0 bg-white z-1000'>
      <div className="container mx-auto px-4 py-4">
        <nav className='flex items-center justify-between'>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            {/* <img src={companyLogo} alt="company logo" loading="lazy" className='h-8 w-full object-cover' /> */}
            <span className="text-xl font-bold">CodiLex.ai</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {
              navLinks.map((link) => (
                <Link to={link.path} key={link.name} className={`text-sm transition-colors hover:text-black font-sans 
                ${isActive(link.path) ? "text-black font-bold" : "text-gray-700 font-medium"}`} >
                  {link.name}
                </Link>
              ))
            }
          </div>


          {/* Logout Button */}
          <div className="hidden md:block">
            <Button variant="default"
              onClick={handleLogout}
              className="text-white hover:bg-gray-800 rounded-full cursor-pointer font-sans">
              Log Out
            </Button>
          </div>

          {/* Mobile menu btn */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-sm font-medium transition-colors hover:text-primary font-sans ${isActive(link.path) ? "text-primary" : "text-gray-700"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default"
              onClick={handleLogout}
              className="w-full bg-black text-white hover:bg-gray-800 rounded-md">
              Log Out
            </Button>
          </div>
        )}

      </div >

    </header >
  )
}

export default Navbar