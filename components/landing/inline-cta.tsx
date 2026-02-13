"use client"

import React from "react"
import Image from "next/image"
import { MiniForm } from "./contact-form"

interface InlineCTAProps {
  title: string
  subtitle: string
  image?: string
  imageAlt?: string
  reversed?: boolean
}

export function InlineCTA({
  title,
  subtitle,
  image = "/images/cta-child-teeth.jpg",
  imageAlt = "Çocuk diş sağlığı",
  reversed = false,
}: InlineCTAProps) {
  return (
    <section className="bg-muted py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
            reversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Image side */}
          <div className={`relative ${reversed ? "lg:[direction:ltr]" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-primary/10 lg:-bottom-4 lg:-right-4" />
          </div>

          {/* Form side */}
          <div className={reversed ? "lg:[direction:ltr]" : ""}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <div className="bg-primary px-5 py-6 text-center sm:px-8 sm:py-8">
                <h2 className="mb-2 font-serif text-xl font-extrabold text-primary-foreground sm:text-2xl lg:text-3xl">
                  {title}
                </h2>
                <p className="text-sm text-primary-foreground/80 sm:text-base">
                  {subtitle}
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <MiniForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
