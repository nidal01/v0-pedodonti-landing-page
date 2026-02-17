"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Users, Clock, ThumbsUp, Building2, Play } from "lucide-react"

const stats = [
  {
    icon: Users,
    title: "Uzman Pedodonti Ekibi",
    desc: "Alanında deneyimli, çocuk psikolojisini bilen uzman hekimler.",
  },
  {
    icon: Clock,
    title: "36 Yıllık Deneyim",
    desc: "36 yılı aşkın süre boyunca binlerce aileye güvenle hizmet.",
  },
  {
    icon: ThumbsUp,
    title: "Yüksek Hasta Memnuniyeti",
    desc: "Hasta odaklı yaklaşımımızla yüksek memnuniyet oranı.",
  },
  {
    icon: Building2,
    title: "4 Modern Klinik",
    desc: "Son teknoloji donanımlı, çocuk dostu klinikler.",
  },
]

export function WhyTrakyadent() {
  const [visible, setVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="neden-trakyadent"
      className="bg-background py-16 lg:py-24"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video */}
          <div
            className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted">
              {!isPlaying ? (
                <>
                  <Image
                    src="/images/maslak-sube.jpeg"
                    alt="Trakyadent Maslak Kliniği"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[hsl(210,40%,12%)]/30">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow-2xl transition-transform hover:scale-110"
                      aria-label="Videoyu oynat"
                    >
                      <Play className="ml-1 h-10 w-10" />
                    </button>
                  </div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/gGiEMZudaD4?autoplay=1"
                  title="Trakyadent Tanıtım"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              )}
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 ${visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Neden Trakyadent?
            </span>
            <h2 className="mb-2 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
              Çocuğunuzun Diş Sağlığı İçin Doğru Adres Maslak Trakyadent!
            </h2>
            <p className="mb-6 text-lg font-medium text-primary">
              Deneyim, Uzmanlık ve Güven Bir Arada
            </p>

            <div className="mb-6">
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                Minik Gülüşler İçin Büyük Bir Deneyim
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Trakyadent Ağız ve Diş Sağlığı, 36 yılı aşkın deneyimiyle çocuk
                diş hekimliği (pedodonti) alanında yüksek standartlarda sağlık
                hizmeti sunmaktadır. Uzman pedodonti ekibimiz; koruyucu ve tedavi
                edici uygulamaları, çocuk psikolojisine uygun yaklaşımla konforlu
                bir deneyime dönüştürür.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                Bugüne Kadar Binlerce Sağlıklı Gülüşe Eşlik Ettik
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                36 yıldır, binlerce aileye hizmet veren kliniğimiz, 4 modern
                şubesi ve hasta memnuniyeti odaklı yaklaşımıyla çocukların diş
                sağlığını güvenle korumaya devam etmektedir.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg ${visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <stat.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h4 className="mb-2 font-serif text-lg font-bold text-foreground">
                {stat.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
