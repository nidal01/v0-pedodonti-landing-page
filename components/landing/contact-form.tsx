"use client"

import React, { useState } from "react"
import { Send, Play } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="iletisim" className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video placeholder */}
          <div className="relative overflow-hidden rounded-2xl bg-foreground/10">
            <div className="aspect-video w-full">
              <div className="flex h-full items-center justify-center bg-[hsl(210,40%,12%)]/30">
                <button
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow-2xl transition-transform hover:scale-110"
                  aria-label="Videoyu oynat"
                >
                  <Play className="ml-1 h-8 w-8" />
                </button>
              </div>
            </div>
            <p className="bg-[hsl(210,40%,12%)]/60 px-4 py-3 text-center text-sm font-medium text-[hsl(0,0%,100%)]">
              Pedodonti Hekimimiz Anlatıyor
            </p>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-2 font-serif text-3xl font-extrabold text-primary-foreground lg:text-4xl">
              Çocuğunuz İçin Sağlıklı Bir Gülüşe İlk Adım!
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Pedodonti Uzmanlarımızdan Detaylı Bilgi Alın!
            </p>

            {submitted ? (
              <div className="rounded-2xl bg-[hsl(var(--accent))] p-8 text-center">
                <div className="mb-4 text-5xl">&#10003;</div>
                <h3 className="mb-2 text-xl font-bold text-[hsl(var(--accent-foreground))]">
                  Talebiniz Alındı!
                </h3>
                <p className="text-[hsl(var(--accent-foreground))]/90">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3.5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3.5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3.5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))] focus:outline-none"
                />
                <textarea
                  placeholder="Mesajınız (Opsiyonel)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="resize-none rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3.5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))] focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-4 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  Hemen Bilgi Al!
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
