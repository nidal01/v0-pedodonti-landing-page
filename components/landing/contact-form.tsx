"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Send, CheckCircle } from "lucide-react"

function MiniForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!/^\d{11}$/.test(formData.phone)) {
      alert("Telefon numarası 11 haneli ve sadece rakamlardan oluşmalıdır.")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/pedodonti/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", phone: "", message: "" })
        setTimeout(() => {
          router.push("/tesekkur.html")
        }, 800)
      } else {
        alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      alert("Bir hata oluştu. Lütfen tekrar deneyin.")
    } finally {
      setIsLoading(false)
    }
  }

  const isDark = variant === "dark"

  if (submitted) {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${isDark ? "bg-[hsl(var(--accent))]/20" : "bg-[hsl(var(--accent))]/10"
          }`}
      >
        <CheckCircle className="mx-auto mb-3 h-12 w-12 text-[hsl(var(--accent))]" />
        <h3
          className={`mb-2 text-xl font-bold ${isDark ? "text-primary-foreground" : "text-foreground"
            }`}
        >
          Talebiniz Alındı!
        </h3>
        <p
          className={`text-sm ${isDark ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
        >
          Teşekkürler! Yönlendiriliyorsunuz...
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
        className={`rounded-xl border-2 px-4 py-3 text-sm focus:outline-none sm:px-5 sm:py-3.5 sm:text-base ${isDark
          ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))]"
          : "border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
          }`}
      />
      <input
        type="tel"
        placeholder="0532 xxx xx xx"
        required
        value={formData.phone}
        onChange={(e) => {
          const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 11)
          setFormData({ ...formData, phone: digitsOnly })
        }}
        inputMode="numeric"
        pattern="[0-9]{11}"
        minLength={11}
        maxLength={11}
        className={`rounded-xl border-2 px-4 py-3 text-sm focus:outline-none sm:px-5 sm:py-3.5 sm:text-base ${isDark
          ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-[hsl(var(--accent))]"
          : "border-border bg-card text-foreground placeholder:text-muted-foreground/70 focus:border-primary"
          }`}
      />
      <textarea
        placeholder="Mesajınız (Opsiyonel)"
        rows={2}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`resize-none rounded-xl border-2 px-4 py-3 text-sm focus:outline-none sm:px-5 sm:py-3.5 sm:text-base ${isDark
          ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-[hsl(var(--accent))]"
          : "border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary"
          }`}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3.5 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
      >
        <Send className="h-5 w-5" />
        {isLoading ? "Gönderiliyor..." : "Hemen Bilgi Al!"}
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
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-foreground/10">
              <iframe
                src="https://www.youtube.com/embed/R3iy2821E3A"
                title="Pedodonti Hekimimiz Anlatıyor"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>

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
