"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ThankYouPage() {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <main className="flex min-h-screen items-center justify-center bg-[hsl(210,40%,12%)] px-4 py-16 text-center">
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WGDDXTFL"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl sm:p-12">
        <h1 className="mb-4 text-3xl font-extrabold text-[hsl(210,40%,12%)] sm:text-4xl">
          Teşekkürler!
        </h1>
        <p className="mb-3 text-base text-slate-600 sm:text-lg">
          Formunuz başarıyla iletildi. Ekibimiz en kısa sürede sizinle iletişime geçecek.
        </p>
        <p className="mb-8 text-sm text-slate-500">
          5 saniye içinde otomatik olarak ana sayfaya yönlendirileceksiniz.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-xl bg-[hsl(200,90%,45%)] px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  )
}
