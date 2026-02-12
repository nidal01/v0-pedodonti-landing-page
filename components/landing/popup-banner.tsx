"use client"

import React, { useEffect, useState } from "react"
import { X, Phone, Gift } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function PopupBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("popup-dismissed")
      if (!dismissed) setShow(true)
    }, 30000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setShow(false)
    sessionStorage.setItem("popup-dismissed", "true")
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md animate-fade-in-up overflow-hidden rounded-2xl bg-card shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20"
          aria-label="Kapat"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="bg-primary px-6 pb-8 pt-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
            <Gift className="h-7 w-7 text-primary-foreground" />
          </div>
          <h3 className="mb-2 font-serif text-2xl font-extrabold text-primary-foreground">
            Ücretsiz Diş Kontrolü!
          </h3>
          <p className="text-sm text-primary-foreground/80">
            Çocuğunuz için ücretsiz pedodonti kontrolü randevunuzu şimdi alın.
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <div className="mb-4 rounded-xl bg-muted p-4 text-center">
            <p className="font-serif text-lg font-bold text-foreground">
              Sağlıklı Gülüşler İçin İlk Adım!
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Uzman pedodonti ekibimiz çocuğunuz için en uygun tedavi planını oluşturur.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/905001234567"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3.5 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp ile Randevu Al
            </a>
            <a
              href="tel:4442289"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-5 w-5" />
              444 22 89 Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
