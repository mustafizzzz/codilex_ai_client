"use client"
import { cn } from "../lib/utils"
import { useEffect, useRef, useState } from "react"
import { createNoise3D } from "simplex-noise"


export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D()
  let w, h, nt, i, x, ctx, canvas
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001
      case "fast":
        return 0.002
      default:
        return 0.001
    }
  }

  const init = () => {
    canvas = canvasRef.current
    if (!canvas) return

    ctx = canvas.getContext("2d")

    // Use container dimensions instead of window dimensions
    const container = containerRef.current
    if (!container) return

    const { width, height } = container.getBoundingClientRect()
    w = ctx.canvas.width = width
    h = ctx.canvas.height = height

    ctx.filter = `blur(${blur}px)`
    nt = 0

    // Update on resize
    const handleResize = () => {
      if (!container || !ctx) return
      const { width, height } = container.getBoundingClientRect()
      w = ctx.canvas.width = width
      h = ctx.canvas.height = height
      ctx.filter = `blur(${blur}px)`
    }

    window.addEventListener("resize", handleResize)
    render()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }

  const waveColors = colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]

  const drawWave = (n) => {
    nt += getSpeed()
    for (i = 0; i < n; i++) {
      ctx.beginPath()
      ctx.lineWidth = waveWidth || 50
      ctx.strokeStyle = waveColors[i % waveColors.length]
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100
        ctx.lineTo(x, y + h * 0.5) // adjust for height, currently at 50% of the container
      }
      ctx.stroke()
      ctx.closePath()
    }
  }

  let animationId
  const render = () => {
    if (!ctx) return
    ctx.fillStyle = backgroundFill || "black"
    ctx.globalAlpha = waveOpacity || 0.5
    ctx.fillRect(0, 0, w, h)
    drawWave(5)
    animationId = requestAnimationFrame(render)
  }

  useEffect(() => {
    const cleanupFn = init()
    return () => {
      cancelAnimationFrame(animationId)
      if (cleanupFn) cleanupFn()
    }
  }, [])

  const [isSafari, setIsSafari] = useState(false)
  useEffect(() => {
    // Safari detection
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome"),
    )
  }, [])

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", containerClassName)}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  )
}

