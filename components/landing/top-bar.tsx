"use client"

import React from "react"
import Image from "next/image"
import { Phone } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const navItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Tedavilerimiz", href: "#tedaviler" },
  { label: "Kliniklerimiz", href: "#klinikler" },
  { label: "Neden Trakyadent", href: "#neden-trakyadent" },
  { label: "Ekibimiz", href: "#ekibimiz" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
]

export function TopBar() {
  return (
    <>
      {/* Top info bar */}
      <div className="bg-[hsl(var(--topbar))] text-[hsl(var(--topbar-foreground))]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <span className="hidden font-medium md:block">
            Trakyadent Pedodonti Merkezi | Sağlıklı Gülüşler İçin Yanınızdayız!
          </span>
          <span className="block text-xs font-medium md:hidden">
            Trakyadent Pedodonti Merkezi
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:4442289"
              className="flex items-center gap-1.5 transition-colors hover:text-[hsl(var(--chart-4))]"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="font-semibold">444 22 89</span>
            </a>
            <a
              href="https://wa.me/905001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[hsl(var(--accent))] px-3 py-1 text-xs font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105"
            >
              Hemen Bilgi Al!
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/images/trakyadent-logo.png"
            alt="Trakyadent Logo"
            width={180}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/905001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-4 py-2 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105 lg:flex"
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
            <span
              className={`block h-0.5 w-5 bg-foreground transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
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
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/905001234567"
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
  )
}
