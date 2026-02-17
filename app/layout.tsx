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
  title: 'Trakyadent Pedodonti | Çocuk Diş Sağlığı Merkezi',
  description:
    'Trakyadent Pedodonti Merkezi - Çocuk diş sağlığında uzman çözüm. 36 yıllık deneyim, dijital anestezi ve korkusuz tedavi yaklaşımı. Hemen randevu alın!',
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
