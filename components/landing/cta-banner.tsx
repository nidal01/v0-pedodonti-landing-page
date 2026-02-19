"use client"

import React from "react"
import { Phone, Send } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-[hsl(199,89%,30%)] py-16 lg:py-20">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[hsl(var(--accent))]/10" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary-foreground/5" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 font-serif text-3xl font-extrabold text-primary-foreground lg:text-5xl">
          Çocuğunuzun Gülümseyen Geleceği İçin İlk Adımı Atın!
        </h2>
        <p className="mb-8 text-lg text-primary-foreground/80 lg:text-xl">
          Uzman pedodonti ekibimizden bilgi alın. Hemen randevunuzu oluşturun!
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="?text=Merhaba%2C%0AMaslak%20klini%C4%9Finizde%20%C3%A7ocu%C4%9Fum%20i%C3%A7in%20randevu%20almak%20istiyorum.%0AUygun%20saatler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%20REF%3A001?text=Merhaba%2C%0AMaslak%20klini%C4%9Finizde%20%C3%A7ocu%C4%9Fum%20i%C3%A7in%20randevu%20almak%20istiyorum.%0AUygun%20saatler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%20REF%3A001https://wa.me/905417265212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-8 py-4 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp ile Bilgi Al
          </a>
          <a
            href="tel:02129126867"
            className="flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 text-base font-bold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/50 hover:bg-primary-foreground/20"
          >
            <Phone className="h-5 w-5" />
            0212 912 68 67
          </a>
          <a
            href="#iletisim"
            className="flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 text-base font-bold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/50 hover:bg-primary-foreground/20"
          >
            <Send className="h-5 w-5" />
            Form Doldur
          </a>
        </div>
      </div>
    </section>
  )
}
