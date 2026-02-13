"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const faqs = [
  {
    q: "Dijital anestezi nedir? Çocuklar için avantajlı mı?",
    a: "Dijital anestezi, ilacın kontrollü ve yavaş şekilde uygulanmasını sağlayan modern bir uyuşturma yöntemidir. Bu sayede ağrı ve basınç hissi minimuma iner. Özellikle çocuk hastalarda iğne korkusunu azaltarak tedavilerin daha rahat tamamlanmasına yardımcı olur.",
  },
  {
    q: "Çocuklar ilk diş muayenesine ne zaman gitmeli?",
    a: "İlk dişler çıktıktan sonra, genellikle 1 yaş civarında ilk diş hekimi muayenesi önerilir. Erken yapılan pedodonti kontrolleri, çürük oluşumunu önlemeye ve sağlıklı diş gelişimini takip etmeye yardımcı olur.",
  },
  {
    q: "Pedodonti (çocuk diş hekimliği) nedir, hangi tedavileri kapsar?",
    a: "Pedodonti; bebeklikten ergenlik dönemine kadar çocukların ağız ve diş sağlığıyla ilgilenen uzmanlık alanıdır. Koruyucu uygulamalar, dolgu, kanal tedavisi, diş temizliği, fissür örtücü ve yer tutucu gibi birçok tedaviyi kapsar.",
  },
  {
    q: "Çocuklarda diş çürüğü nasıl önlenir?",
    a: "Düzenli diş fırçalama, sağlıklı beslenme alışkanlıkları ve rutin diş hekimi kontrolleri çürük oluşumunu büyük ölçüde engeller. Pedodonti uzmanı tarafından uygulanan koruyucu tedaviler de dişleri ekstra koruma sağlar.",
  },
  {
    q: "Süt dişleri neden önemlidir? Nasıl korunmalıdır?",
    a: "Süt dişleri, çocuğun beslenmesi, konuşma gelişimi ve kalıcı dişlerin doğru konumlanması için çok önemlidir. Bu nedenle \"nasıl olsa düşecek\" düşüncesi yerine düzenli bakım ve tedavi ihmal edilmemelidir.",
  },
  {
    q: "Çocuğum diş hekiminden korkuyor, ne yapmalıyım?",
    a: "Pedodonti kliniklerinde çocuklara özel iletişim teknikleri ve konforlu ortamlar kullanılır. Trakyadent'te çocuk psikolojisine uygun yaklaşımla, korku ve kaygıyı en aza indiren bir tedavi süreci planlanır.",
  },
  {
    q: "Çocuklarda dolgu veya kanal tedavisi yapılır mı?",
    a: "Evet. Süt dişlerinde oluşan çürükler ilerlediğinde dolgu veya kanal tedavisi gerekebilir. Bu işlemler dişin korunmasını sağlar ve erken diş kaybını önler.",
  },
  {
    q: "Fissür örtücü (sealant) nedir, ne işe yarar?",
    a: "Fissür örtücü, azı dişlerinin çiğneme yüzeyine uygulanan koruyucu bir kaplamadır. Bakterilerin dişe tutunmasını engelleyerek çürük riskini azaltır ve özellikle çocuklarda sık tercih edilir.",
  },
  {
    q: "Çocuk diş tedavileri ağrılı mıdır?",
    a: "Modern teknikler ve uygun anestezi yöntemleri sayesinde pedodonti tedavileri genellikle ağrısız ve konforlu şekilde gerçekleştirilir. Amaç çocuğun rahat bir deneyim yaşamasıdır.",
  },
  {
    q: "Tedavi sırasında anestezi veya sedasyon uygulanır mı?",
    a: "Gerekli durumlarda lokal anestezi uygulanabilir. İşlem süresi ve çocuğun durumuna göre hekim tarafından en uygun ve güvenli yöntem belirlenir.",
  },
  {
    q: "Pedodonti randevusu ne kadar sürer, süreç nasıl ilerler?",
    a: "İlk muayenede çocuğun ağız ve diş yapısı değerlendirilir, ardından ihtiyaç duyulan tedaviler planlanır. Çoğu kontrol ve basit işlem kısa sürede tamamlanır, detaylı tedaviler için randevu planlaması yapılır.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="sss" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Sık Sorulan Sorular
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Pedodonti Hakkında Merak Edilenler!
          </h2>
          <p className="text-lg text-muted-foreground">
            Çocuk diş sağlığı ve tedavi süreçleriyle ilgili en çok sorulan soruları
            sizin için yanıtladık.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* FAQ Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-card transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="font-serif text-sm font-bold text-foreground sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:py-5 sm:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual side panel */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              {/* Image */}
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/faq-illustration.jpg"
                  alt="Pedodonti uzmanı çocuk hastaya anlatıyor"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>

              {/* CTA card */}
              <div className="rounded-2xl bg-primary p-6 text-center">
                <h3 className="mb-2 font-serif text-lg font-extrabold text-primary-foreground">
                  Başka Sorularınız Mı Var?
                </h3>
                <p className="mb-4 text-sm text-primary-foreground/80">
                  Pedodonti ekibimizle hemen iletişime geçin.
                </p>
                <a
                  href="https://wa.me/905001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp ile Sorun
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA after FAQ */}
        <div className="mt-10 rounded-2xl bg-primary p-8 text-center lg:hidden">
          <h3 className="mb-3 font-serif text-2xl font-extrabold text-primary-foreground">
            Aklınıza Takılan Başka Sorular Mı Var?
          </h3>
          <p className="mb-6 text-primary-foreground/80">
            Pedodonti ekibimizle hemen iletişime geçin.
          </p>
          <a
            href="https://wa.me/905001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-8 py-4 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp ile Sorun
          </a>
        </div>
      </div>
    </section>
  )
}
