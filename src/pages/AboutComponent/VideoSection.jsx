import { HighlightText } from '@/AceternityUi/HighlightText'
import ShinyButton from '@/AceternityUi/ShinyButton'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronRight, Play } from 'lucide-react'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const VideoSection = ({
  videoThumbnail,
  videoUrl,
  subtitle = "Lorem Ipsum",
  title = "Lorem Ipsum is simply dummy",
  highlightedText = "is simply",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
  buttonText = "Start your Free Trial",
  buttonOnClick,
  className = "",
}) => {

  const [isPlaying, setIsPlaying] = useState(false);

  const parts = title.split(new RegExp(`(${highlightedText})`, "gi"));

  return (
    <section className={cn("bg-black text-white py-35 mb-12", className)}>

      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Video  */}
          <div className="relative rounded-lg overflow-hidden aspect-video w-full">

            {isPlaying ? (
              <ReactPlayer
                url={videoUrl}
                playing={true}
                controls={true}
                width="100%"
                height="100%"
                className="rounded-lg overflow-hidden"
              />
            ) : (

              <div className="relative w-full h-full">
                <img
                  src={videoThumbnail || "/placeholder.svg?height=400&width=600"}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  aria-label="Play video"
                >
                  <div className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all transform hover:scale-110">
                    <Play className="w-8 h-8 text-black fill-current" />
                  </div>
                </button>

              </div>

            )}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-teal-400 font-medium block font-serif">{subtitle}</span>
            <h2 className="text-3xl md:text-5xl font-semibold font-serif leading-tight">
              {parts.map((part, index) =>
                part.toLowerCase() === highlightedText.toLowerCase() ? (
                  <HighlightText key={index}>{part}</HighlightText>
                ) : (
                  part
                )
              )}
            </h2>
            <p className="text-gray-300 font-sans">{description}</p>

            {/* <Button
              onClick={buttonOnClick}
              className={cn("rounded-full px-2 py-2 font-medium  cursor-pointer flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors")}
            >
              <div className={cn(
                "rounded-full p-1 flex items-center justify-center bg-black text-white",
              )}>
                <ChevronRight />
              </div>
              {buttonText}
            </Button> */}

            <ShinyButton onClick={buttonOnClick}>
              {buttonText}
            </ShinyButton>

          </div>

        </div>

      </div>
    </section>
  )
}

export default VideoSection