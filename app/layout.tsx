import type { Metadata, Viewport } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'

import './globals.css'

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'Trakyadent Pedodonti Maslak | Çocuk Diş Hekimliği Uzmanı',
  description:
    'Trakyadent Pedodonti Maslak - 36 yıllık deneyim ve uzman kadromuzla çocuğunuzun diş sağlığını güvenle geleceğe taşıyoruz. Dijital anestezi ile ağrısız tedavi. İstanbul Maslak\'ta hizmetinizdeyiz.',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c7abf',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
