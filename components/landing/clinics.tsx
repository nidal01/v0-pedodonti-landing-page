"use client"

import React from "react"
import { MapPin, Phone, Navigation } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const clinics = [
  {
    name: "Trakyadent Edirne Merkez",
    address: "Sabuni Mah. Talatpaşa Cad. No:123, Edirne",
    phone: "444 22 89",
    mapUrl: "https://maps.google.com",
  },
  {
    name: "Trakyadent Keşan",
    address: "Yunus Emre Mah. Hastane Cad. No:45, Keşan/Edirne",
    phone: "444 22 89",
    mapUrl: "https://maps.google.com",
  },
  {
    name: "Trakyadent Kırklareli",
    address: "Karacaibrahim Mah. İstasyon Cad. No:67, Kırklareli",
    phone: "444 22 89",
    mapUrl: "https://maps.google.com",
  },
  {
    name: "Trakyadent Lüleburgaz",
    address: "Ömer Seyfettin Mah. Cumhuriyet Cad. No:89, Lüleburgaz/Kırklareli",
    phone: "444 22 89",
    mapUrl: "https://maps.google.com",
  },
]

export function Clinics() {
  return (
    <section id="klinikler" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Kliniklerimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            {"Size En Yakın Trakyadent'teyiz!"}
          </h2>
          <p className="text-xl font-semibold text-primary">
            {"4 Şube \u2022 Tek Kalite Standardı"}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Clinic image placeholder */}
              <div className="relative h-44 overflow-hidden bg-primary/5">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-10 w-10 text-primary/40" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {clinic.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                  {clinic.name}
                </h3>
                <p className="mb-4 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {clinic.address}
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 rounded-lg bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    {clinic.phone}
                  </a>
                  <a
                    href="https://wa.me/905001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-4 py-2.5 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-[1.02]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Navigation className="h-4 w-4" />
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
