import React from 'react'
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

const TeamMemberCard = ({
  image,
  name,
  title,
  facebookUrl,
  linkedinUrl,
  instagramUrl,
  bgColor = "default",
  className = "",
}) => {

  // Background color variants
  const bgVariants = {
    default: "bg-white",
    primary: "bg-blue-800",
    secondary: "bg-gray-200",
  }

  // Text color based on background
  const isDarkBg = bgColor === "primary"
  const textColor = isDarkBg ? "text-white" : "text-black"

  return (
    <div className={cn("max-w-lg mx-auto rounded-lg overflow-hidden", bgVariants[bgColor] || bgVariants.default, className)}>
      {/* Image container */}
      <div className="relative aspect-[3/4] w-full">
        <img src={image || "/placeholder.svg?height=400&width=300"} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform overflow-hidden rounded-lg" />

        {/* Social media icons */}
        <div className="absolute top-3 right-3 flex gap-2">
          {facebookUrl && (
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={`${name}'s Facebook profile`}
            >
              <Facebook className="w-4 h-4" />
            </a>
          )}

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={`${name}'s Instagram profile`}
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>

      {/* Name and title */}
      <div className="mt-4 p-1">
        <h3 className={cn("font-semibold text-lg", textColor)}>{name}</h3>
        <p className={cn("text-sm", isDarkBg ? "text-gray-300" : "text-gray-600")}>{title}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard