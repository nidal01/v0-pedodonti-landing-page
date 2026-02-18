# GitHub + Özel Domain ile Yayınlama (Next.js)

Bu proje Next.js tabanlıdır (`next`, `build`, `start` script'leri mevcut).

## 1) GitHub'a public repo olarak yükle

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<kullanici>/<repo>.git
git push -u origin main
```

GitHub'da repo ayarından **Public** yap.

## 2) Vercel ile deploy et (önerilen)

1. https://vercel.com/new adresinde **Import Git Repository** ile bu repoyu seç.
2. Framework otomatik olarak **Next.js** algılanır.
3. Build komutu: `next build` (varsayılan).
4. Deploy'a bas.

## 3) Özel domain bağla

Vercel projesi içinde:

- **Settings → Domains → Add Domain**
- Domain'ini ekle (`ornekdomain.com` ve tercihen `www.ornekdomain.com`)

Vercel sana DNS kayıtlarını verecek. Genelde:

- Apex (`@`) için A kaydı: `76.76.21.21`
- `www` için CNAME: `cname.vercel-dns.com`

> Not: DNS yönetimini domaini aldığın firmadan (Cloudflare, Namecheap, Turhost vb.) yaparsın.

## 4) Bu projeyi `/pedodonti` altında yayınlama

Bu repo `BASE_PATH` (geriye dönük uyum için `NEXT_PUBLIC_BASE_PATH` da desteklenir) ile alt dizin altında çalışır (örnek: `/pedodonti`).

### Vercel ayarı

- **Project → Settings → Environment Variables**
- Production (ve Preview gerekirse) için ekle:
  - `BASE_PATH=/pedodonti`
- Sonra **Redeploy** yap.
- Not: Env eksikse bile uygulama `vercel` üzerinde `/pedodonti` isteklerini rewrites ile root'a düşürür; böylece `/pedodonti` 404 vermez.

### Önemli not (path bazlı yayın)

Ek olarak `vercel.json` içinde `/` -> `/pedodonti` geçici yönlendirmesi var; böylece domain köküne gelen kullanıcılar 404 yerine landing sayfaya düşer.


- DNS tek başına `trakyadentmaslak.com/pedodonti` yönlendirmesi yapamaz.
- Eğer ana domain (`trakyadentmaslak.com`) başka bir yerde host ediliyorsa, `/pedodonti` path'ini bu Vercel projesine reverse proxy ile yönlendirmen gerekir (Cloudflare Worker/Rules, Nginx, vb.).
- Eğer domain tamamen bu Vercel projesine bağlıysa, site `trakyadentmaslak.com/pedodonti` altında açılır.

## 5) DNS propagasyonunu bekle

- Genellikle 5 dk – 24 saat.
- Vercel Domains ekranında "Valid Configuration" görünce tamamdır.

## 6) SSL (HTTPS)

- Vercel otomatik Let's Encrypt SSL tanımlar.
- `https://domainin.com` çalıştığını doğrula.

## 7) Form/API için güvenli ayar (öneri)

Örnek değişkenler:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_TO`

Vercel:

- **Project → Settings → Environment Variables**
- Sonra **Redeploy** yap.
- Not: Env eksikse bile uygulama `vercel` üzerinde `/pedodonti` isteklerini rewrites ile root'a düşürür; böylece `/pedodonti` 404 vermez.

## 8) İsteğe bağlı: GitHub Pages neden uygun değil?

Bu repo Next.js server-side özellikleri ve API route içerdiği için GitHub Pages doğrudan uygun değildir.

Alternatif platformlar:

- Vercel (en kolay)
- Netlify
- Cloudflare Pages (+ Functions)
- VPS + Docker/Nginx
