"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface ParallaxHeroProps {
  children: React.ReactNode
  backgroundImage: string
  backgroundAlt: string
}

export default function ParallaxHero({ children, backgroundImage, backgroundAlt }: ParallaxHeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        parallaxRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative py-32 px-8 overflow-hidden min-h-screen flex items-center">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0 scale-110">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt={backgroundAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">{children}</div>
    </section>
  )
}
