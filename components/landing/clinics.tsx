"use client"

import React from "react"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const maslak = {
  name: "Maslak",
  address: "Maslak Mah. Büyükdere Caddesi, Nurol Plaza, No: 255, İç Kapı Z01 Sarıyer/İstanbul",
  phone: "0212 912 68 67",
  whatsapp: "905417265212",
  mapUrl: "https://maps.google.com/?q=Trakyadent+Maslak",
}

const galleryImages = [
  { src: "/images/3 (2).webp", alt: "Trakyadent Maslak Kliniği - Bekleme Alanı" },
  { src: "/images/5 (1).webp", alt: "Trakyadent Maslak Kliniği - Tedavi Odası" },
  { src: "/images/4 (1).webp", alt: "Trakyadent Maslak Kliniği - Resepsiyon" },
]

export function Clinics() {
  return (
    <section id="klinikler" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Kliniğimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Trakyadent Maslak
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            Modern ekipman ve deneyimli kadromuzla Maslak'tayız
          </p>
        </div>

        {/* Maslak Info Card */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8 lg:mb-12">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="flex-1">
              <h3 className="mb-3 font-serif text-2xl font-extrabold text-foreground">
                Trakyadent Maslak Pedodonti Merkezi
              </h3>
              <p className="mb-4 flex items-start gap-2 text-base leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                {maslak.address}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${maslak.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  {maslak.phone}
                </a>
                <a
                  href={`https://wa.me/${maslak.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-6 py-3 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp ile Randevu
                </a>
                <a
                  href={maslak.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
                >
                  <MapPin className="h-4 w-4" />
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,40%,12%)]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
