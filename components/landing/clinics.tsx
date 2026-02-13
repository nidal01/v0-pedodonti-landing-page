"use client"

import React from "react"
import Image from "next/image"
import { MapPin, Phone, Navigation } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const clinics = [
  {
    name: "Çerkezköy",
    address: "Atatürk Caddesi Mehtap Sokak No:7 Çerkezköy/Tekirdağ",
    phone: "444 22 89",
    image: "/images/clinic-branch.jpg",
    mapUrl: "https://maps.google.com/?q=Trakyadent+%C3%87erkezk%C3%B6y",
  },
  {
    name: "Çorlu",
    address: "Ali Paşa Mah. Çetin Emeç Bulvarı Lale Apt. 132/A Çorlu/Tekirdağ",
    phone: "444 22 89",
    image: "/images/corluuu-841x1024.webp",
    mapUrl: "https://maps.google.com/?q=Trakyadent+%C3%87orlu",
  },
  {
    name: "Lüleburgaz",
    address: "Kocasinan Mah. İstasyon Cd., Canova Apt. No:38/A Lüleburgaz/Kırklareli",
    phone: "444 22 89",
    image: "/images/luleburgaz1w-841x1024.webp",
    mapUrl: "https://maps.google.com/?q=Trakyadent+L%C3%BCleburgaz",
  },
  {
    name: "Maslak",
    address: "Maslak Mah. Büyükdere Caddesi, Nurol Plaza, No: 255, İç Kapı Z01 Sarıyer/İstanbul",
    phone: "444 22 89",
    image: "/images/maslak224.webp",
    mapUrl: "https://maps.google.com/?q=Trakyadent+Maslak",
  },
]

export function Clinics() {
  return (
    <section id="klinikler" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Şubelerimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            {"Size En Yakın Trakyadent'teyiz!"}
          </h2>
          <p className="text-lg font-semibold text-primary">
            {"4 Şube \u2022 Tek Kalite Standardı"}
          </p>
        </div>

        {/* Single row 4-column grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Shared clinic image */}
              <div className="relative h-32 flex-shrink-0 overflow-hidden sm:h-40 lg:h-44">
                <Image
                  src={clinic.image}
                  alt={`Trakyadent ${clinic.name} Şubesi`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,40%,12%)]/60 to-transparent" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                  <span className="rounded-lg bg-primary px-2 py-1 text-[10px] font-bold text-primary-foreground shadow-md sm:px-3 sm:py-1.5 sm:text-xs">
                    {clinic.name}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <p className="mb-3 flex flex-1 items-start gap-1.5 text-[10px] leading-relaxed text-muted-foreground sm:gap-2 sm:text-xs">
                  <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-primary sm:h-3.5 sm:w-3.5" />
                  <span className="line-clamp-3">{clinic.address}</span>
                </p>

                <div className="mt-auto flex flex-col gap-1.5">
                  <a
                    href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-1 rounded-lg bg-primary/10 px-2 py-2 text-[10px] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:gap-1.5 sm:px-3 sm:text-xs"
                  >
                    <Phone className="h-3 w-3" />
                    {clinic.phone}
                  </a>
                  <a
                    href="https://wa.me/905001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 rounded-lg bg-[hsl(var(--accent))] px-2 py-2 text-[10px] font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-[1.02] sm:gap-1.5 sm:px-3 sm:text-xs"
                  >
                    <WhatsAppIcon className="h-3 w-3" />
                    WhatsApp
                  </a>
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 rounded-lg border border-border px-2 py-1.5 text-[10px] font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs"
                  >
                    <Navigation className="h-3 w-3" />
                    Yol Tarifi
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
