"use client"

import React from "react"
import Image from "next/image"
import { Phone, MapPin, Instagram, Youtube } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--topbar))] pb-16 text-[hsl(var(--topbar-foreground))] lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/trakyadent-logo.png"
                alt="Trakyadent Logo"
                width={160}
                height={44}
                className="h-10 w-auto brightness-0 invert object-contain"
                style={{ width: "auto" }}
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[hsl(var(--topbar-foreground))]/70">
              36 yılı aşkın deneyimle çocuk diş sağlığında güvenilir çözüm ortağınız.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/trakyadent/" },
                { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@trakyadentdentalhealthgrou3384" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--topbar-foreground))]/10 transition-colors hover:bg-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold">Hızlı Erişim</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Tedavilerimiz", href: "#tedaviler" },
                { label: "Şubelerimiz", href: "#klinikler" },
                { label: "Neden Trakyadent", href: "#neden-trakyadent" },
                { label: "Ekibimiz", href: "#ekibimiz" },
                { label: "SSS", href: "#sss" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(var(--topbar-foreground))]/70 transition-colors hover:text-[hsl(var(--accent))]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold">İletişim</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:02129126867" className="transition-colors hover:text-[hsl(var(--topbar-foreground))]">
                  0212 912 68 67
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
                <WhatsAppIcon className="h-4 w-4 text-[hsl(var(--accent))]" />
                <a
                  href="https://wa.me/905417265212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[hsl(var(--topbar-foreground))]"
                >
                  0541 726 52 12
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Maslak Mah. Büyükdere Cad. Nurol Plaza, No: 255, İç Kapı Z01 Sarıyer/İstanbul</span>
              </li>
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h4 className="mb-4 font-serif text-base font-bold">Çalışma Saatleri</h4>
            <ul className="flex flex-col gap-2 text-sm text-[hsl(var(--topbar-foreground))]/70">
              <li className="flex justify-between">
                <span>Pazartesi - Cuma</span>
                <span>09:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Cumartesi</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Pazar</span>
                <span>Kapalı</span>
              </li>
            </ul>
            <a
              href="https://wa.me/905417265212"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-4 py-2.5 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Hemen Randevu Al
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(var(--topbar-foreground))]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 text-center text-xs text-[hsl(var(--topbar-foreground))]/50 md:flex-row md:justify-between">
          <p>
            &copy; 2026 Trakyadent Ağız ve Diş Sağlığı. Tüm hakları saklıdır.
          </p>

          <p className="max-w-lg font-medium text-[hsl(var(--topbar-foreground))]/60">
            Sayfa içeriği sadece bilgilendirme amaçlıdır. Tanı ve tedavi için
            mutlaka doktorunuza başvurunuz.
          </p>

          <p>
            Yazılım ve Tasarım:{" "}
            <a
              href="https://www.needsolutions.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:underline"
            >
              Need Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}