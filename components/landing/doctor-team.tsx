"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const doctors = [
  { name: "Dt. Subaykan PANDAR", title: "Diş Hekimi, Kurucu Yönetim Kurulu Üyesi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/subaykan-pandar-1-570x696.jpg" },
  { name: "Dt. Emre PANDAR", title: "Çerkezköy Klinik Başhekimi, YK. Başkanı", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/11/emre-pandar-2-570x696.jpg" },
  { name: "Dt. Demet PANDAR", title: "Diş Hekimi, YK. Üyesi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/10/dt-demet-pandar-0001-570x696.jpg" },
  { name: "Dt. Hikmet AKGÜL", title: "Lüleburgaz Klinik Başhekimi, Lüleburgaz Co-Owner", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/11/dt-hikmet-570x696.jpg" },
  { name: "Dr. Dt. Ezgi AKÇE", title: "Maslak Klinik Başhekimi, Periodontoloji", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/11/dt-ezgi-akce-maslak-570x696.jpg" },
  { name: "Dt. Buse KAŞIKÇI", title: "Çorlu Klinik Başhekimi, Çorlu Co-Owner", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/11/buse-2-570x696.jpg" },
  { name: "Dr. Dt. Fuad NAJAFI", title: "Ağız, Diş ve Çene Cerrahisi, Maslak Co-Owner", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/fuad-najafi-1-570x696.jpg" },
  { name: "Dr. Dt. Burak AKÇE", title: "Ortodonti, Maslak Co-Owner", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/12/dr-dt-burak-akce-570x696.jpg" },
  { name: "Uzm. Dt. Bahar AKSAN YENİLMEZ", title: "Pedodonti Uzmanı", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/bahar-hanim-570x696.jpg" },
  { name: "Uzm. Dt. Ayşegül ATİLLA", title: "Protez Uzmanı", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/12/aysegul-atilla-570x696.jpg" },
  { name: "Uzm. Dt. Ufuk KARACA", title: "Periodontoloji Uzmanı", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/ufuk-karaca-1-570x696.jpg" },
  { name: "Uzm. Dt. Gamze KILIÇ", title: "Pedodonti Uzmanı", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/12/gamze-hoca-yeni-570x696.jpg" },
  { name: "Uzm. Dt. Mert GÖKSU", title: "Endodonti Uzmanı", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/12/mert-goksu-570x696.jpg" },
  { name: "Uzm. Dr. Yasin ESEN", title: "Anestezi ve Reanimasyon Uzmanı", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/uzm-dr-yasin-esen-1-570x696.jpg" },
  { name: "Dr. Dt. Yasemin CANPOLAT", title: "Ortodonti", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/12/yasemin-canpolat-570x696.jpg" },
  { name: "Dr. Dt. Ömer Faruk YENİLMEZ", title: "Endodonti", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/Omer-Faruk-Yenilmez-1-570x696.jpg" },
  { name: "Dt. Nehir DENİZ", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/dt-nehir-deniz-1-570x696.jpg" },
  { name: "Dt. Hilal SAYIN VAROL", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/hilal-dishekimi-1-570x696.jpg" },
  { name: "Dt. Hüseyin TIRPAN", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/dt-huseyin-tirpan-1-570x696.jpg" },
  { name: "Dt. Maruf ÖZTÜRK", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/11/Dt_Maruf_Ozturk-570x696.jpg" },
  { name: "Dt. Pınar ERSAN", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/12/pinar-hoca-foto-570x696.jpg" },
  { name: "Dt. Ulaş Ünal AKTAŞ", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/12/ulas-aktas-570x696.jpg" },
  { name: "Dt. Buse BİLGİN", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/11/dt-buse-yeni-570x696.jpg" },
  { name: "Dt. Merve Gökkuş MUMCU", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/11/Merve-Gokkus-Mumcu-570x696.jpg" },
  { name: "Dt. Mert Tufan BİLGE", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/11/dt-mert-tufan-bilge-570x696.jpg" },
  { name: "Dt. Şura BAŞ", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2021/11/Sura-Bas-570x696.jpg" },
  { name: "Dt. Ozan TÜRKMEN", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/ozan-turkmen-1-570x696.jpg" },
  { name: "Dt. Elif Betül UĞRAÇ", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/dt-elif-betul-ugrac-1-570x696.jpg" },
  { name: "Dt. Fatih Serdar UĞRAÇ", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/dt-fatih-serdar-1-570x696.jpg" },
  { name: "Dt. Şeymanur BİLGİÇ", title: "Diş Hekimi", image: "https://www.trakyadent.com.tr/wp-content/uploads/2025/08/dt-seymanur-bilgic-1-570x696.jpg" },
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
            Uzman Ekibimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            30 Uzman Hekim Kadromuz
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
              className="absolute -left-2 top-1/3 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all hover:bg-primary hover:text-primary-foreground lg:-left-4 lg:flex"
              aria-label="Önceki hekimler"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 top-1/3 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all hover:bg-primary hover:text-primary-foreground lg:-right-4 lg:flex"
              aria-label="Sonraki hekimler"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex items-stretch gap-4 overflow-x-auto scroll-smooth pb-4 sm:gap-5 lg:gap-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {doctors.map((doctor, index) => (
              <div key={index} className="w-44 flex-shrink-0 sm:w-48 lg:w-52">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  {/* Image - uncropped with aspect ratio preserved */}
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
                        href="https://wa.me/905001234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg bg-[hsl(var(--accent))] px-3 py-2 text-xs font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        Randevu Al
                      </a>
                      <a
                        href="tel:4442289"
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-primary bg-primary/5 px-3 py-2 text-xs font-bold text-primary transition-transform hover:scale-105 hover:bg-primary/10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        444 22 89
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground lg:hidden">
            <ChevronLeft className="h-3.5 w-3.5" />
            <span>Kaydırarak tüm hekimleri görün</span>
            <ChevronRight className="h-3.5 w-3.5" />
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
              "Çocuklarda Diş Bakımı",
              "Dijital Anestezi Nedir?",
              "Süt Dişleri Neden Önemli?",
            ].map((title, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden bg-primary/5">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-[hsl(var(--accent))]/10">
                    <button
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16"
                      aria-label={`${title} videosunu oynat`}
                    >
                      <Play className="ml-1 h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm font-bold text-foreground sm:text-base">
                    {title}
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
