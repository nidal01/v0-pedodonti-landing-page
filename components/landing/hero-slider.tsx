"use client"

import React, { useState, useEffect, useCallback } from "react"
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

  return (
    <section id="hero" className="relative h-[85vh] min-h-[550px] overflow-hidden lg:h-[90vh]">
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
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,40%,12%)]/80 via-[hsl(210,40%,12%)]/50 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4">
              <div className="max-w-2xl">
                <div
                  className={`transition-all duration-700 ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <span className="mb-4 inline-block rounded-full bg-[hsl(var(--accent))]/20 px-4 py-1.5 text-sm font-semibold text-[hsl(var(--accent))]">
                    Trakyadent Pedodonti Merkezi
                  </span>
                </div>

                <h1
                  className={`mb-4 font-serif text-4xl font-extrabold leading-tight text-[hsl(0,0%,100%)] transition-all duration-700 md:text-5xl lg:text-6xl ${
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
                  className={`mb-8 max-w-lg text-lg leading-relaxed text-[hsl(0,0%,100%)]/80 transition-all duration-700 md:text-xl ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  {slide.subtitle}
                </p>

                <div
                  className={`flex flex-col gap-3 transition-all duration-700 sm:flex-row sm:gap-4 ${
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
                    className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3.5 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp ile Randevu Al
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

      {/* Slider controls - moved to bottom corners to not block text */}
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

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all ${
              i === current ? "w-8 bg-[hsl(var(--accent))]" : "w-3 bg-[hsl(0,0%,100%)]/40"
            }`}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
