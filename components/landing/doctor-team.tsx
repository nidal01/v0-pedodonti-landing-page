"use client"

import React from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const doctors = [
  {
    name: "Dr. Ayşe Yılmaz",
    title: "Uzm. Pedodonti",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dr. Mehmet Kaya",
    title: "Uzm. Pedodonti",
    image: "/images/doctor-2.jpg",
  },
  {
    name: "Dr. Elif Demir",
    title: "Uzm. Pedodonti",
    image: "/images/doctor-3.jpg",
  },
  {
    name: "Dr. Ahmet Çelik",
    title: "Uzm. Pedodonti",
    image: "/images/doctor-4.jpg",
  },
]

export function DoctorTeam() {
  return (
    <section id="ekibimiz" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Team section */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Uzman Ekibimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Uzman Pedodonti Ekibimiz
          </h2>
          <p className="text-lg text-muted-foreground">
            Minik Gülüşler İçin Büyük Uzmanlık!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,40%,12%)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-5 text-center">
                <h3 className="mb-1 font-serif text-lg font-bold text-foreground">
                  {doctor.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary">
                  {doctor.title}
                </p>
                <a
                  href="https://wa.me/905001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-4 py-2.5 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor videos section */}
        <div className="mt-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
              Hekimlerimiz Anlatıyor!
            </h2>
            <p className="text-lg text-muted-foreground">
              Uzman hekimlerimizin bilgilendirici videolarıyla tedavi süreçleri
              hakkında detaylı bilgi alın.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110"
                      aria-label={`${title} videosunu oynat`}
                    >
                      <Play className="ml-1 h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base font-bold text-foreground">
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
