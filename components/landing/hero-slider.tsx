"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const slides = [
  {
    image: "/images/hero-child-smile.jpg",
    title: "Çocuk Diş Sağlığında Uzman Çözüm",
    titleHighlight: "Trakyadent Pedodonti",
    subtitle:
      "Minik gülüşler için korkusuz, güvenli ve sevgi dolu bir diş tedavi deneyimi",
  },
  {
    image: "/images/hero-digital-anesthesia.jpg",
    title: "Konforlu Tedavi,",
    titleHighlight: "Dijital Anestezi Güvencesi",
    subtitle:
      "Dijital anestezi sayesinde çocuklar için daha konforlu tedavi",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const isDragging = useRef(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) {
      touchEndX.current = e.touches[0].clientX
    }
  }

  const handleTouchEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
  }

  return (
    <section
      id="hero"
      className="relative h-[75vh] min-h-[480px] overflow-hidden sm:h-[80vh] lg:h-[88vh]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,40%,12%)]/80 via-[hsl(210,40%,12%)]/50 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
              <div className="max-w-xl lg:max-w-2xl">
                <div
                  className={`transition-all duration-700 ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <span className="mb-3 inline-block rounded-full bg-[hsl(var(--accent))]/20 px-3 py-1 text-xs font-semibold text-[hsl(var(--accent))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
                    Trakyadent Pedodonti Merkezi
                  </span>
                </div>

                <h1
                  className={`mb-3 font-serif text-2xl font-extrabold leading-tight text-[hsl(0,0%,100%)] transition-all duration-700 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  {slide.title}
                  <br />
                  <span className="text-[hsl(var(--accent))]">
                    {slide.titleHighlight}
                  </span>
                </h1>

                <p
                  className={`mb-6 max-w-lg text-sm leading-relaxed text-[hsl(0,0%,100%)]/80 transition-all duration-700 sm:mb-8 sm:text-base md:text-lg lg:text-xl ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  {slide.subtitle}
                </p>

                <div
                  className={`flex flex-row flex-wrap gap-2 transition-all duration-700 sm:gap-4 ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  <a
                    href="https://wa.me/905001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-[hsl(var(--accent))] px-3.5 py-2.5 text-xs font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:gap-2 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-base"
                  >
                    <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    WhatsApp ile Randevu
                  </a>
                  <a
                    href="tel:4442289"
                    className="flex items-center justify-center gap-1.5 rounded-lg border-2 border-[hsl(0,0%,100%)]/30 bg-[hsl(0,0%,100%)]/10 px-3.5 py-2.5 text-xs font-bold text-[hsl(0,0%,100%)] backdrop-blur-sm transition-all hover:border-[hsl(0,0%,100%)]/50 hover:bg-[hsl(0,0%,100%)]/20 sm:gap-2 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-base"
                  >
                    444 22 89 Hemen Arayin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider controls - bottom right, desktop only */}
      <button
        onClick={prev}
        className="absolute bottom-24 right-24 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-[hsl(0,0%,100%)]/20 text-[hsl(0,0%,100%)] backdrop-blur-sm transition-all hover:bg-[hsl(0,0%,100%)]/40 lg:flex"
        aria-label="Onceki slayt"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute bottom-24 right-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-[hsl(0,0%,100%)]/20 text-[hsl(0,0%,100%)] backdrop-blur-sm transition-all hover:bg-[hsl(0,0%,100%)]/40 lg:flex"
        aria-label="Sonraki slayt"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3 sm:bottom-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all ${
              i === current
                ? "w-8 bg-[hsl(var(--accent))]"
                : "w-3 bg-[hsl(0,0%,100%)]/40"
            }`}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
