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
  image: "/images/17 (2).webp",
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
            {"Size En Yakın Trakyadent'teyiz!"}
          </h2>
          <p className="text-lg font-semibold text-primary">
            {"4 Şube \u2022 Tek Kalite Standardı"}
          </p>
        </div>

        {/* Maslak - Featured card */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-card shadow-lg lg:mb-8">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative h-56 overflow-hidden sm:h-64 lg:h-80">
              <Image
                src={maslak.image}
                alt="Trakyadent Maslak Şubesi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,40%,12%)]/60 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                <span className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-md">
                  Maslak / İstanbul
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <h3 className="mb-2 font-serif text-2xl font-extrabold text-foreground lg:text-3xl">
                Trakyadent Maslak
              </h3>
              <p className="mb-4 flex items-start gap-2 text-base leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                {maslak.address}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${maslak.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary/10 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {maslak.phone}
                </a>
                <a
                  href={`https://wa.me/${maslak.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-5 py-3 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
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
