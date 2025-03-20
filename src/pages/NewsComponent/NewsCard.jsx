import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react'


const NewsCard = ({
  image = "/api/placeholder/400/250",
  title = "Lorem Ipsum Dummy",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit netus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
  authorName = "Author Name",
  authorAvatar = "/api/placeholder/40/40",
  coAuthorName = "Coauthor Willkinson",
  coAuthorAvatar = "/api/placeholder/40/40",
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg">
      {/* News Image */}
      <a href='#' className="group relative overflow-hidden rounded-lg mb-4">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>

      {/* <div className="relative w-full h-auto rounded-lg overflow-hidden mb-4">
        <a href='#' className="group relative overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      </div> */}

      {/* News Content */}
      <h3 className="text-lg font-semibold mb-2">
        <a href='#' className="hover:underline">
          {title}
        </a>
      </h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Authors */}
      <div className="flex items-center space-x-2">

        <div className="flex items-center border border-gray-300 rounded-full px-2 py-1">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={authorAvatar} alt={authorName} />
            <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-gray-700">{authorName}</span>
        </div>

        <div className="flex items-center border border-gray-300 rounded-full px-2 py-1">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={coAuthorAvatar} alt={coAuthorName} />
            <AvatarFallback>{coAuthorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-gray-700">{coAuthorName}</span>
        </div>

      </div>

    </div>
  );
};

export default NewsCard;