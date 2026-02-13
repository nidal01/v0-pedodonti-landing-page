"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Stethoscope } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function StickyButtons() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop: Fixed right side buttons */}
      <div
        className={`fixed bottom-8 right-6 z-50 hidden flex-col gap-3 transition-all duration-500 lg:flex ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        <a
          href="https://wa.me/905001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] shadow-xl transition-transform hover:scale-110"
          aria-label="WhatsApp ile iletişime geç"
        >
          <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)] animate-pulse-ring" />
          <WhatsAppIcon className="relative h-7 w-7" />
        </a>
        <a
          href="tel:4442289"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-110"
          aria-label="Hemen ara"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile: Fixed bottom bar with center bubble */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 lg:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Center bubble - positioned above the bar */}
        <div className="absolute -top-7 left-1/2 z-10 -translate-x-1/2">
          <a
            href="#hero"
            className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-4 border-primary bg-[hsl(0,0%,100%)] shadow-xl"
          >
            <Image
              src="/images/favicon.png"
              alt="Trakyadent"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
          </a>
        </div>

        {/* Bar */}
        <div className="flex items-stretch bg-primary shadow-2xl">
          <a
            href="https://wa.me/905001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-primary-foreground transition-opacity active:opacity-80"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="text-[11px] font-bold leading-none">{"Whatsapp 7/24"}</span>
          </a>

          {/* Center spacer for the bubble */}
          <div className="w-20" />

          <a
            href="tel:4442289"
            className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-primary-foreground transition-opacity active:opacity-80"
          >
            <Stethoscope className="h-5 w-5" />
            <span className="text-[11px] font-bold leading-none">444 22 89</span>
          </a>
        </div>
      </div>
    </>
  )
}
