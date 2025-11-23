"use client"

import { useEffect, useState } from "react"

export default function LoadingAnimation() {
  const [lettersVisible, setLettersVisible] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate letters one by one - faster and smoother
    const letterInterval = setInterval(() => {
      setLettersVisible((prev) => {
        if (prev >= 8) {
          clearInterval(letterInterval)
          return 8
        }
        return prev + 1
      })
    }, 80)

    // Smooth progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 20)

    return () => {
      clearInterval(letterInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Enhanced animated geometric shapes */}
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          {/* Outer square with enhanced animation */}
          <div className="absolute inset-0 border-4 border-primary bg-white animate-loader-outer" />

          {/* Middle square */}
          <div className="absolute inset-10 border-4 border-primary bg-primary animate-loader-middle" />

          {/* Inner square */}
          <div className="absolute inset-20 border-4 border-primary bg-white animate-loader-inner" />

          {/* Corner accents - top left */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary border-2 border-primary animate-corner-pulse" />

          {/* Corner accents - top right */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary border-2 border-primary animate-corner-pulse"
               style={{ animationDelay: "0.15s" }} />

          {/* Corner accents - bottom left */}
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary border-2 border-primary animate-corner-pulse"
               style={{ animationDelay: "0.3s" }} />

          {/* Corner accents - bottom right */}
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary border-2 border-primary animate-corner-pulse"
               style={{ animationDelay: "0.45s" }} />

          {/* Floating elements */}
          <div className="absolute top-6 right-6 w-8 h-2 border-2 border-primary bg-primary animate-float-horizontal" />
          <div className="absolute bottom-6 left-6 w-8 h-2 border-2 border-primary bg-primary animate-float-horizontal-reverse" />
        </div>

        {/* KAIROSCV text animation with enhanced styling */}
        <div className="mt-16 text-center">
          <div className="inline-block mb-6">
            {"KAIROSCV".split("").map((letter, idx) => (
              <span
                key={idx}
                className={`inline-block text-4xl md:text-5xl font-black text-primary tracking-widest loading-letter ${
                  idx < lettersVisible ? "letter-visible" : "letter-hidden"
                }`}
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.15em",
                  animationDelay: `${idx * 0.08}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Enhanced progress bar */}
          <div className="relative w-64 mx-auto">
            <div className="h-3 border-3 border-primary bg-white overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Animated stripe overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>
            </div>

            {/* Progress percentage */}
            <div className="mt-3 text-sm font-bold text-muted-foreground tracking-wider">
              Loading... {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

