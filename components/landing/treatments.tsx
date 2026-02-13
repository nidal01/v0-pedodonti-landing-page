"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  Shield,
  Sparkles,
  Heart,
  Syringe,
  SmilePlus,
  Baby,
  Stethoscope,
  ClipboardCheck,
  CheckCircle2,
  ChevronDown,
} from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const treatments = [
  {
    icon: Shield,
    label: "Koruyucu",
    title: "Koruyucu Diş Tedavileri",
    shortDesc: "Fissür örtücü ve flor uygulamaları ile çocuğunuzun dişlerini çürüğe karşı koruyoruz.",
    longDesc:
      "Koruyucu diş hekimliği, çocuğunuzun dişlerini çürük oluşmadan koruyan en etkili yöntemdir. Trakyadent Pedodonti Merkezi olarak, çocuklara özel koruyucu tedaviler ile sağlıklı gülüşlerin temelini atıyoruz.",
    benefits: [
      "Fissür örtücü uygulaması ile çürük riskini minimuma indirir",
      "Profesyonel flor uygulaması ile diş minesini güçlendirir",
      "Düzenli kontroller ile erken teşhis sağlar",
      "Ağrısız ve hızlı bir işlem sürecidir",
    ],
  },
  {
    icon: Sparkles,
    label: "Dolgu",
    title: "Çocuk Dolgu Tedavisi",
    shortDesc: "Çocuklara özel estetik dolgu uygulamaları ile sağlıklı ve güzel gülüşler.",
    longDesc:
      "Çocuklarda oluşan diş çürüklerinin zamanında tedavi edilmesi, dişin yapısının korunması ve sağlıklı bir ağız ortamının sürdürülmesi açısından büyük önem taşır. Modern dolgu malzemeleri ile estetik ve dayanıklı çözümler sunuyoruz.",
    benefits: [
      "Diş renginde estetik dolgu malzemeleri kullanılır",
      "Çocuğun rahat etmesi için konforlu tedavi ortamı",
      "Uzun ömürlü ve dayanıklı dolgu çözümleri",
      "Tedavi sonrası diş bakımı eğitimi verilir",
    ],
  },
  {
    icon: Heart,
    label: "Kanal",
    title: "Süt Dişi Kanal Tedavisi",
    shortDesc: "Süt dişlerinde oluşan ileri çürüklerin tedavisi ile dişin korunmasını sağlıyoruz.",
    longDesc:
      "Süt dişlerinde ilerlemiş çürükler nedeniyle sinir dokusuna kadar ulaşan enfeksiyonlar, uygun kanal tedavisi ile kontrol altına alınır. Bu tedavi, dişin erken kaybını önleyerek kalıcı dişlerin doğru konumlanmasını destekler.",
    benefits: [
      "Dişin erken kaybını önler",
      "Kalıcı dişlerin doğru konumlanmasını destekler",
      "Çocuğun çiğneme ve konuşma fonksiyonunu korur",
      "Dijital anestezi ile ağrısız tedavi deneyimi",
    ],
  },
  {
    icon: Syringe,
    label: "Dijital Anestezi",
    title: "Dijital Anestezi",
    shortDesc: "Ağrısız ve korkusuz tedavi için modern dijital anestezi teknolojisi.",
    longDesc:
      "Dijital anestezi, ilacın kontrollü ve yavaş şekilde uygulanmasını sağlayan modern bir uyuşturma yöntemidir. Bu sayede ağrı ve basınç hissi minimuma iner, işlem daha konforlu gerçekleşir.",
    benefits: [
      "Kontrollü ve yavaş ilaç uygulaması",
      "Ağrı ve basınç hissi minimuma iner",
      "İğne korkusunu azaltır",
      "Çocuklar için çok daha konforlu bir deneyim",
    ],
  },
  {
    icon: SmilePlus,
    label: "Yer Tutucu",
    title: "Yer Tutucu Uygulamaları",
    shortDesc: "Erken kaybedilen süt dişleri için kalıcı dişlerin doğru konumlanmasını sağlayan yer tutucular.",
    longDesc:
      "Erken kaybedilen süt dişlerinin bıraktığı boşluğa komşu dişlerin kaymasını önlemek ve kalıcı dişlerin doğru konumda sürmesini sağlamak amacıyla yer tutucu uygulanır.",
    benefits: [
      "Kalıcı dişlerin doğru konumda sürmesini sağlar",
      "İlerideki ortodontik sorunları önler",
      "Basit ve ağrısız bir uygulamadır",
      "Çocuğun çene gelişimini destekler",
    ],
  },
  {
    icon: Baby,
    label: "Bebek Bakımı",
    title: "Bebek Diş Bakımı",
    shortDesc: "0-3 yaş arası bebeklerin diş sağlığı takibi ve ailelere bilinçlendirme eğitimi.",
    longDesc:
      "Bebeklerin ilk dişleri çıkmaya başladığı andan itibaren ağız bakımı önem kazanır. 0-3 yaş arası bebeklerin diş sağlığı takibini yapıyor, ailelere rehberlik ediyoruz.",
    benefits: [
      "İlk dişten itibaren düzenli takip",
      "Ailelere bilinçlendirme eğitimi verilir",
      "Doğru beslenme alışkanlıkları konusunda danışmanlık",
      "Erken dönemde çürük riskini azaltır",
    ],
  },
  {
    icon: Stethoscope,
    label: "Travma",
    title: "Diş Travması Tedavisi",
    shortDesc: "Çocuklarda sık görülen diş kırıklarının acil ve etkili tedavisi.",
    longDesc:
      "Çocukluk döneminde düşme, çarpma veya spor yaralanmaları sonucu diş travmaları sıkça yaşanabilir. Travma sonrası hızlı müdahale, dişin kurtarılması için kritik öneme sahiptir.",
    benefits: [
      "Acil müdahale ile dişin kurtarılma şansı artar",
      "Kırık ve çatlak dişlerin estetik onarımı",
      "Çocuğa özel travma sonrası takip protokolü",
      "Gerektiğinde koruyucu aparey önerisi",
    ],
  },
  {
    icon: ClipboardCheck,
    label: "Kontrol",
    title: "Periyodik Diş Kontrolü",
    shortDesc: "Düzenli kontrollerle çocuğunuzun ağız sağlığını erken dönemde koruma altına alıyoruz.",
    longDesc:
      "Düzenli diş kontrolleri, çocuğunuzun ağız ve diş sağlığının korunmasında en temel adımdır. 6 ayda bir yapılan kontroller sayesinde olası sorunlar erken tespit edilir.",
    benefits: [
      "6 ayda bir düzenli kontrol önerisi",
      "Erken teşhis ile büyük sorunları önler",
      "Çocuğa diş bakımı alışkanlığı kazandırır",
      "Tedavi ihtiyacını ve maliyetini azaltır",
    ],
  },
]

function TreatmentContent({ treatment }: { treatment: typeof treatments[0] }) {
  return (
    <div className="p-4 sm:p-5 lg:p-10">
      <div className="mb-4 sm:mb-6">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
          {treatment.longDesc}
        </p>
      </div>
      <div className="mb-5 rounded-xl bg-muted/50 p-3 sm:mb-8 sm:p-6">
        <h4 className="mb-2 font-serif text-sm font-bold text-foreground sm:mb-4 sm:text-lg">
          Tedavinin Avantajları
        </h4>
        <ul className="flex flex-col gap-2 sm:gap-3">
          {treatment.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--accent))] sm:h-5 sm:w-5" />
              <span className="text-xs text-muted-foreground sm:text-base">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
        <a
          href="https://wa.me/905001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-4 py-2.5 text-xs font-bold text-[hsl(var(--accent-foreground))] shadow-md transition-all hover:scale-[1.02] hover:shadow-lg sm:px-6 sm:py-3.5 sm:text-sm"
        >
          <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          Bu Tedavi Hakkında Bilgi Al
        </a>
        <a
          href="tel:4442289"
          className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-6 sm:py-3.5 sm:text-sm"
        >
          444 22 89 Hemen Ara
        </a>
      </div>
    </div>
  )
}

export function Treatments() {
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const activeTreatment = treatments[activeTab]

  return (
    <section id="tedaviler" className="bg-background py-16 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`mx-auto mb-10 max-w-2xl text-center transition-all duration-700 lg:mb-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Tedavilerimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Çocuğunuz İçin En İyi Tedavi Seçenekleri
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Uzman pedodonti ekibimiz, modern tekniklerle çocuklara özel konforlu
            tedavi süreci sunar.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Mobile: Accordion */}
          <div className="flex flex-col gap-2 lg:hidden">
            {treatments.map((treatment, index) => {
              const isOpen = mobileOpen === index
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : index)}
                    className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors ${
                      isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                        isOpen ? "bg-primary-foreground/20" : "bg-primary/10"
                      }`}
                    >
                      <treatment.icon
                        className={`h-5 w-5 ${
                          isOpen ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                    </div>
                    <span className="flex-1 text-sm font-bold">{treatment.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      } ${isOpen ? "text-primary-foreground" : "text-muted-foreground"}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {isOpen && <TreatmentContent treatment={treatment} />}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop: Side tabs + Content */}
          <div className="hidden gap-8 lg:grid lg:grid-cols-[280px_1fr]">
            {/* Tab buttons - Desktop sidebar */}
            <div className="flex flex-col gap-1.5">
              {treatments.map((treatment, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                    activeTab === index
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "border border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  <treatment.icon
                    className={`h-5 w-5 flex-shrink-0 ${
                      activeTab === index ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                  <span className="text-sm font-semibold">{treatment.title}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="p-6 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <activeTreatment.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-extrabold text-foreground lg:text-3xl">
                      {activeTreatment.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      Trakyadent Pedodonti Merkezi
                    </p>
                  </div>
                </div>
                <TreatmentContent treatment={activeTreatment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
