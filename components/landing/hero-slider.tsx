"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
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

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl bg-[hsl(210,40%,12%)]/70 px-4 py-2.5 backdrop-blur-md sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-3">
      {/* Google G */}
      <svg viewBox="0 0 48 48" className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      </svg>
      <div>
        <p className="text-[11px] font-semibold text-[hsl(0,0%,100%)]/80 sm:text-xs">Google Değerlendirme</p>
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-extrabold text-[hsl(0,0%,100%)] sm:text-xl">4.8</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-[hsl(43,96%,56%)] text-[hsl(43,96%,56%)] sm:h-4 sm:w-4" />
            ))}
          </div>
        </div>
        <p className="text-[10px] text-[hsl(0,0%,100%)]/60 sm:text-[11px]">4.400+ Değerlendirme</p>
      </div>
    </div>
  )
}

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
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider area */}
      <div className="relative h-[56vh] min-h-[360px] sm:h-[70vh] sm:min-h-[480px] lg:h-[88vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-[center_30%] sm:object-center"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,40%,12%)]/80 via-[hsl(210,40%,12%)]/50 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                <div className="max-w-xl lg:max-w-2xl">
                  <div
                    className={`transition-all duration-700 ${index === current
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
                    className={`mb-3 font-serif text-2xl font-extrabold leading-tight text-[hsl(0,0%,100%)] transition-all duration-700 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${index === current
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
                    className={`mb-4 max-w-lg text-sm leading-relaxed text-[hsl(0,0%,100%)]/80 transition-all duration-700 sm:mb-6 sm:text-base md:text-lg lg:text-xl ${index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                      }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* Desktop buttons */}
                  <div
                    className={`hidden transition-all duration-700 sm:flex sm:flex-row sm:items-center sm:gap-4 ${index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                      }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <a
                      href="https://wa.me/905001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3.5 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      WhatsApp ile Randevu
                    </a>
                    <a
                      href="tel:4442289"
                      className="flex items-center justify-center gap-2 rounded-xl border-2 border-[hsl(0,0%,100%)]/30 bg-[hsl(0,0%,100%)]/10 px-6 py-3.5 text-base font-bold text-[hsl(0,0%,100%)] backdrop-blur-sm transition-all hover:border-[hsl(0,0%,100%)]/50 hover:bg-[hsl(0,0%,100%)]/20"
                    >
                      444 22 89 Hemen Arayın
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Slider controls - desktop only */}
        <button
          onClick={prev}
          className="absolute bottom-24 right-24 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-[hsl(0,0%,100%)]/20 text-[hsl(0,0%,100%)] backdrop-blur-sm transition-all hover:bg-[hsl(0,0%,100%)]/40 lg:flex"
          aria-label="Önceki slayt"
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
        {/* Google Rating Badge */}
        <div className="absolute bottom-16 right-4 z-10 sm:bottom-24 sm:right-8 lg:bottom-12 lg:right-12">
          <GoogleBadge />
        </div>



        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-3 sm:bottom-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all ${i === current
                ? "w-8 bg-[hsl(var(--accent))]"
                : "w-3 bg-[hsl(0,0%,100%)]/40"
                }`}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile CTA buttons - below the image */}
      <div className="flex flex-col gap-2.5 bg-[hsl(210,40%,12%)] px-4 py-4 sm:hidden">
        <a
          href="https://wa.me/905001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-5 py-3.5 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-all hover:scale-105"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp ile Randevu
        </a>
        <a
          href="tel:4442289"
          className="flex items-center justify-center gap-2 rounded-xl border-2 border-[hsl(0,0%,100%)]/30 bg-[hsl(0,0%,100%)]/10 px-5 py-3.5 text-sm font-bold text-[hsl(0,0%,100%)] transition-all hover:bg-[hsl(0,0%,100%)]/20"
        >
          444 22 89 Hemen Arayın
        </a>
      </div>
    </section>
  )
}
