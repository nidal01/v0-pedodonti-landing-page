"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const doctors = [
  { name: "Dt. Subaykan PANDAR", title: "Kurucu Yönetim Kurulu Üyesi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/subaykan-pandar-1-570x696.jpg" },
  { name: "Dt. Emre PANDAR", title: "Yönetim Kurulu Başkanı", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/11/emre-pandar-2-570x696.jpg" },
  { name: "Dt. Demet PANDAR", title: "Yönetim Kurulu Üyesi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/10/dt-demet-pandar-0001-570x696.jpg" },
  { name: "Uzm. Dt. Bahar AKSAN YENİLMEZ", title: "Pedodonti Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/bahar-hanim-570x696.jpg" },
  { name: "Uzm. Dt. Gamze KILIÇ", title: "Pedodonti Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/12/gamze-hoca-yeni-570x696.jpg" },
]

export function DoctorTeam() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", checkScroll)
    checkScroll()
    return () => el.removeEventListener("scroll", checkScroll)
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.7
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section id="ekibimiz" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Pedodonti Hekimlerimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Uzman Hekim Kadromuz
          </h2>
          <p className="text-base text-muted-foreground lg:text-lg">
            Minik Gülüşler İçin Büyük Uzmanlık! Tüm hekimlerimiz ile tanışın.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-1 top-1/3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground sm:h-11 sm:w-11 lg:-left-4"
              aria-label="Önceki hekimler"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-1 top-1/3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground sm:h-11 sm:w-11 lg:-right-4"
              aria-label="Sonraki hekimler"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex items-stretch justify-center gap-4 overflow-x-auto scroll-smooth pb-4 sm:gap-5 lg:gap-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {doctors.map((doctor, index) => (
              <div key={index} className="w-44 flex-shrink-0 sm:w-48 lg:w-52">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex-shrink-0 overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="aspect-[570/696] w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-3 text-center sm:p-4">
                    <h3 className="mb-0.5 font-serif text-xs font-bold text-foreground sm:text-sm">
                      {doctor.name}
                    </h3>
                    <p className="mb-2.5 flex-1 text-[11px] font-medium text-primary sm:mb-3 sm:text-xs">
                      {doctor.title}
                    </p>
                    <div className="mt-auto flex flex-col gap-1.5">
                      <a
                        href="https://wa.me/905417265212"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg bg-[hsl(var(--accent))] px-3 py-2 text-xs font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        Randevu Al
                      </a>
                      <a
                        href="tel:02129126867"
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-primary bg-primary/5 px-3 py-2 text-xs font-bold text-primary transition-transform hover:scale-105 hover:bg-primary/10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        0212 912 68 67
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor videos section */}
        <div className="mt-16 lg:mt-20">
          <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
            <h2 className="mb-4 font-serif text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
              Hekimlerimiz Anlatıyor!
            </h2>
            <p className="text-base text-muted-foreground lg:text-lg">
              Uzman hekimlerimizin bilgilendirici videolarıyla tedavi süreçleri
              hakkında detaylı bilgi alın.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[
              { id: "Z7qlOedllMg", title: "Çocuklarda Dijital Anestezi Nedir?" },
              { id: "u-KTlvfIJ-Y", title: "Çocuk Diş Tedavisinde Rubber-Dam Kullanımı" },
              { id: "BF19lesZckw", title: "Çocuklarda ilk diş muayenesi nasıl yapılmalıdır?" },
            ].map((video) => (
              <div
                key={video.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm font-bold text-foreground sm:text-base">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
