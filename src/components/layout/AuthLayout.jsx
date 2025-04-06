import { cn } from "@/lib/utils"

const AuthLayout = ({ children, backgroundImage = "https://dummyimage.com/600x400/ff00ff/fff", className }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <img src={backgroundImage || "/placeholder.svg"} alt="Background"
            loading="lazy"
            className="w-full h-full object-cover" />
        ) :
          (
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          )
        }

      </div>

      {/* Content */}
      <div className={cn("relative w-full max-w-md px-4", className)}>{children}</div>
    </div>

  )
}

export default AuthLayout

