"use client"

import React from "react"
import Image from "next/image"
import { MapPin, Phone, Navigation } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const clinics = [
  {
    name: "Çerkezköy Şubesi",
    address: "Atatürk Caddesi Mehtap Sokak No:7 Çerkezköy/Tekirdağ",
    phone: "444 22 89",
    email: "info@trakyadent.com.tr",
    mapUrl: "https://maps.google.com/?q=Trakyadent+Çerkezköy",
    image: "/images/clinic-interior.jpg",
  },
  {
    name: "Çorlu Şubesi",
    address: "Ali Paşa Mah. Çetin Emeç Bulvarı Lale Apt. 132/A Çorlu/Tekirdağ",
    phone: "444 22 89",
    email: "info@trakyadent.com.tr",
    mapUrl: "https://maps.google.com/?q=Trakyadent+Çorlu",
    image: "/images/clinic-interior.jpg",
  },
  {
    name: "Lüleburgaz Şubesi",
    address: "Kocasinan Mah. İstasyon Cd., Canova Apt. No:38/A Lüleburgaz/Kırklareli",
    phone: "444 22 89",
    email: "info@trakyadent.com.tr",
    mapUrl: "https://maps.google.com/?q=Trakyadent+Lüleburgaz",
    image: "/images/clinic-interior.jpg",
  },
  {
    name: "Maslak Şubesi",
    address: "Maslak Mah. Büyükdere Caddesi, Nurol Plaza, No: 255, İç Kapı Z01 Sarıyer/İstanbul",
    phone: "444 22 89",
    email: "info@trakyadent.com.tr",
    mapUrl: "https://maps.google.com/?q=Trakyadent+Maslak",
    image: "/images/clinic-interior.jpg",
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

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Clinic image */}
              <div className="relative h-40 overflow-hidden sm:h-48">
                <Image
                  src={clinic.image}
                  alt={clinic.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,40%,12%)]/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-md sm:text-sm">
                    {clinic.name}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <p className="mb-4 flex items-start gap-2 text-xs text-muted-foreground sm:text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {clinic.address}
                </p>

                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:text-sm"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {clinic.phone}
                    </a>
                    <a
                      href="https://wa.me/905001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-[hsl(var(--accent))] px-3 py-2.5 text-xs font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-[1.02] sm:text-sm"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </div>
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:text-sm"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    Yol Tarifi Al
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
