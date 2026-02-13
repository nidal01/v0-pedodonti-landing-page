"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Send, Play, CheckCircle } from "lucide-react"

function MiniForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", phone: "", message: "" })
    }, 3000)
  }

  const isDark = variant === "dark"

  if (submitted) {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${
          isDark ? "bg-[hsl(var(--accent))]/20" : "bg-[hsl(var(--accent))]/10"
        }`}
      >
        <CheckCircle className="mx-auto mb-3 h-12 w-12 text-[hsl(var(--accent))]" />
        <h3
          className={`mb-2 text-xl font-bold ${
            isDark ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          Talebiniz Alındı!
        </h3>
        <p
          className={`text-sm ${
            isDark ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Adınız Soyadınız"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className={`rounded-xl border-2 px-4 py-3 text-sm focus:outline-none sm:px-5 sm:py-3.5 sm:text-base ${
          isDark
            ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))]"
            : "border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
        }`}
      />
      <input
        type="tel"
        placeholder="Telefon Numaranız"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className={`rounded-xl border-2 px-4 py-3 text-sm focus:outline-none sm:px-5 sm:py-3.5 sm:text-base ${
          isDark
            ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))]"
            : "border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
        }`}
      />
      <textarea
        placeholder="Mesajınız (Opsiyonel)"
        rows={2}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`resize-none rounded-xl border-2 px-4 py-3 text-sm focus:outline-none sm:px-5 sm:py-3.5 sm:text-base ${
          isDark
            ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))]"
            : "border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
        }`}
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3.5 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl sm:text-base"
      >
        <Send className="h-5 w-5" />
        Hemen Bilgi Al!
      </button>
    </form>
  )
}

export { MiniForm }

export function ContactForm() {
  return (
    <section id="iletisim" className="bg-primary py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Video / visual side */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-foreground/10">
              <Image
                src="/images/cta-child-teeth.jpg"
                alt="Mutlu çocuk gülümsemesi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[hsl(210,40%,12%)]/30">
                <button
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow-2xl transition-transform hover:scale-110 sm:h-20 sm:w-20"
                  aria-label="Videoyu oynat"
                >
                  <Play className="ml-1 h-6 w-6 sm:h-8 sm:w-8" />
                </button>
              </div>
            </div>
            <p className="mt-3 text-center text-sm font-medium text-primary-foreground/80">
              Pedodonti Hekimimiz Anlatıyor
            </p>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-2 font-serif text-2xl font-extrabold text-primary-foreground sm:text-3xl lg:text-4xl">
              Çocuğunuz İçin Sağlıklı Bir Gülüşe İlk Adım!
            </h2>
            <p className="mb-6 text-base text-primary-foreground/80 sm:mb-8 sm:text-lg">
              Pedodonti Uzmanlarımızdan Detaylı Bilgi Alın!
            </p>
            <MiniForm variant="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}
