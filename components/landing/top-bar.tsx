"use client"

import React from "react"
import Image from "next/image"
import { Phone, MapPin } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const navItems = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Tedavilerimiz", href: "#tedaviler" },
  { label: "Kliniğimiz", href: "#klinikler" },
  { label: "Neden Trakyadent", href: "#neden-trakyadent" },
  { label: "Ekibimiz", href: "#ekibimiz" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
]

export function StickyHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [visible, setVisible] = React.useState(true)
  const [scrolled, setScrolled] = React.useState(false)
  const lastY = React.useRef(0)
  const headerRef = React.useRef<HTMLDivElement>(null)
  const [headerH, setHeaderH] = React.useState(0)

  React.useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderH(headerRef.current.offsetHeight)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      if (y < 80) {
        setVisible(true)
      } else if (y > lastY.current + 4) {
        setVisible(false)
        setIsOpen(false)
      } else if (y < lastY.current - 4) {
        setVisible(true)
      }
      lastY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Spacer */}
      <div style={{ height: headerH }} />

      <div
        ref={headerRef}
        className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Top Bar */}
        <div className="bg-[hsl(var(--topbar))] text-[hsl(var(--topbar-foreground))]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-0.5 px-3 py-1.5 sm:flex-row sm:gap-0 sm:px-4 sm:py-2">
            <span className="text-center text-[11px] font-medium sm:text-left sm:text-sm">
              Trakyadent Kids | Sağlıklı Gülüşler İçin Yanınızdayız!
            </span>
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="tel:02129126867"
                className="flex items-center gap-1 whitespace-nowrap text-xs transition-colors hover:text-[hsl(var(--chart-4))] sm:gap-1.5 sm:text-sm"
              >
                <Phone className="h-3 w-3 flex-shrink-0 sm:h-3.5 sm:w-3.5" />
                <span className="font-semibold">0212 912 68 67</span>
              </a>
              <span className="flex items-center gap-1 whitespace-nowrap text-xs sm:gap-1.5 sm:text-sm">
                <MapPin className="h-3 w-3 flex-shrink-0 sm:h-3.5 sm:w-3.5" />
                <span className="font-semibold">İstanbul / Maslak</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav
          className={`border-b border-border bg-card/95 backdrop-blur-md ${scrolled ? "shadow-md" : "shadow-sm"}`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:py-5">
            <a href="#hero" className="flex items-center gap-2">
              <Image
                src="/images/trakyadent-logo.png"
                alt="Trakyadent Logo"
                width={200}
                height={56}
                className="h-12 w-auto object-contain lg:h-14"
                style={{ width: "auto" }}
                priority
              />
            </a>

            {/* Desktop Nav */}
            <ul className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-base font-bold text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/905417265212"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105 lg:flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
              aria-label="Menüyü aç/kapat"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 bg-foreground transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="border-t border-border bg-card px-4 pb-4 pt-2 lg:hidden">
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-bold text-foreground transition-colors hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/905417265212"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-4 py-2.5 text-sm font-bold text-[hsl(var(--accent-foreground))]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp ile İletişime Geç
              </a>
            </div>
          )}
        </nav>
      </div>
    </>
  )
}
