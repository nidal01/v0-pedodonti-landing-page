import Link from "next/link"

export default function ThankYouPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  return (
    <main className="flex min-h-screen items-center justify-center bg-[hsl(210,40%,12%)] px-4 py-16 text-center">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl sm:p-12">
        <h1 className="mb-4 text-3xl font-extrabold text-[hsl(210,40%,12%)] sm:text-4xl">
          Teşekkürler!
        </h1>
        <p className="mb-8 text-base text-slate-600 sm:text-lg">
          Formunuz başarıyla iletildi. Ekibimiz en kısa sürede sizinle iletişime geçecek.
        </p>
        <Link
          href={`${basePath}/`}
          className="inline-flex items-center rounded-xl bg-[hsl(200,90%,45%)] px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  )
}
