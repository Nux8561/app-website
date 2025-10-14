# IntroGroup Marketing Website

**Marketing-Website** für **Intro Group Germany** – gebaut mit Next.js 14 (App Router), TypeScript, Tailwind CSS und shadcn/ui.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Analytics**: Plausible (DSGVO-konform)
- **Email**: Resend
- **Deployment**: Vercel / Wazel
- **SEO**: Sitemap, robots.txt, JSON-LD, OpenGraph

---

## 📦 Installation

### Voraussetzungen
- Node.js ≥ 18.18.0
- npm ≥ 9.0.0

### Lokale Entwicklung

1. **Repository klonen**
   ```bash
   git clone <repo-url>
   cd marketing-site
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Environment Variables konfigurieren**
   
   Kopiere `.env.local.example` nach `.env.local` und fülle die Werte aus:
   ```bash
   cp .env.local.example .env.local
   ```

   **Wichtige Variablen:**
   ```env
   NEXT_PUBLIC_COMPANY_NAME=Intro Group Germany
   NEXT_PUBLIC_PRODUCT_NAME=IntroGroup Sales Intelligence
   NEXT_PUBLIC_MARKETING_DOMAIN=de.introgroup
   NEXT_PUBLIC_APP_DOMAIN=introgroupgermany.com
   NEXT_PUBLIC_DEFAULT_LOCALE=de
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=de.introgroup
   RESEND_API_KEY=your_resend_api_key
   RESEND_FROM=Intro Group <no-reply@introgroupgermany.com>
   ```

4. **Development Server starten**
   ```bash
   npm run dev
   ```
   
   Öffne [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Build & Deployment

### Lokaler Build
```bash
npm run build
npm start
```

### Vercel/Wazel Deployment

#### 1. Vercel Projekt erstellen
```bash
npm i -g vercel
vercel login
vercel
```

#### 2. Vercel Dashboard Konfiguration

**Framework Preset:**
- Next.js

**Build & Development Settings:**
- **Build Command**: `npm run build`
- **Output Directory**: *(leer lassen – automatisch `.next`)*
- **Install Command**: `npm ci`
- **Development Command**: `npm run dev`

**Node.js Version:**
- `20.x`

**Root Directory:**
- *(leer lassen, wenn `package.json` im Root liegt)*

#### 3. Environment Variables setzen

Gehe zu **Settings → Environment Variables** und füge hinzu:

**Production & Preview:**
```env
NEXT_PUBLIC_COMPANY_NAME=Intro Group Germany
NEXT_PUBLIC_PRODUCT_NAME=IntroGroup Sales Intelligence
NEXT_PUBLIC_MARKETING_DOMAIN=de.introgroup
NEXT_PUBLIC_APP_DOMAIN=introgroupgermany.com
NEXT_PUBLIC_DEFAULT_LOCALE=de
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/intro-group-germany/
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=de.introgroup
NEXT_PUBLIC_CONTACT_EMAIL=hello@introgroupgermany.com
NEXT_PUBLIC_ENABLE_EN_LOCALE=false
NEXT_PUBLIC_SITE_URL=https://de.introgroup
RESEND_API_KEY=<dein_resend_key>
RESEND_FROM=Intro Group <no-reply@introgroupgermany.com>
```

#### 4. Domain konfigurieren

**Domains → Add Domain:**
- Primär: `de.introgroup` → zeigt auf Vercel Projekt
- Optional: `www.de.introgroup` → Redirect auf `de.introgroup`

**DNS-Einstellungen (bei deinem Domain-Provider):**
```
Type  | Name | Value
------|------|------------------
A     | @    | 76.76.21.21
CNAME | www  | cname.vercel-dns.com
```

*(Werte können abweichen – siehe Vercel Dashboard)*

---

## 📂 Projektstruktur

```
.
├── app/
│   ├── demo/page.tsx                    # Demo-Seite für Hero-Component
│   ├── (marketing)/[locale]/            # Locale-basiertes Routing (de/en)
│   │   ├── layout.tsx                   # Root Layout
│   │   ├── page.tsx                     # Homepage
│   │   └── ...                          # Weitere Marketing-Seiten
│   └── api/
│       └── contact/route.ts             # Contact Form API (Resend)
│
├── components/
│   └── ui/
│       └── underline-hero-section.tsx   # Hero Component
│
├── styles/
│   └── globals.css                      # Globale Styles + shadcn Theme
│
├── config/
│   ├── site.ts                          # Site-Config (Name, URLs, etc.)
│   └── navigation.ts                    # Navigation Items
│
├── lib/
│   ├── seo.ts                           # SEO Helpers (JSON-LD)
│   ├── analytics.ts                     # Plausible Integration
│   └── resend.ts                        # Resend Client
│
├── public/
│   ├── fonts/                           # Lokale Fonts
│   ├── og.png                           # OpenGraph Image
│   └── logos/                           # Integration Logos
│
├── middleware.ts                        # i18n Locale Routing
├── next.config.mjs                      # Next.js Config
├── next-sitemap.config.js               # Sitemap Generation
├── vercel.json                          # Security Headers
├── tailwind.config.ts                   # Tailwind Config
└── package.json
```

---

## 🛡️ Security & Performance

### Security Headers (via `vercel.json`)
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`
- `Strict-Transport-Security: max-age=63072000`

### Performance Optimierungen
- Next.js Image Optimization (AVIF, WebP)
- Font Optimization (lokal gehostet)
- Code Splitting (App Router)
- Compression aktiviert (`compress: true`)
- Package Import Optimization (lucide-react, react)

---

## 📊 SEO

### Sitemap & Robots
```bash
npm run build  # generiert automatisch sitemap.xml und robots.txt
```

Verfügbar unter:
- `https://de.introgroup/sitemap.xml`
- `https://de.introgroup/robots.txt`

### JSON-LD Structured Data
- Organization Schema
- WebSite Schema
- Product Schema (geplant)
- Breadcrumb Schema (geplant)

---

## 🎨 Design System (shadcn/ui)

### UI Components hinzufügen
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

### Theme Customization
Passe `tailwind.config.ts` und `styles/globals.css` an.

---

## 🧪 Testing & Quality

### Linting
```bash
npm run lint
```

### Lighthouse Audit (Ziel: ≥90)
- Performance
- SEO
- Accessibility
- Best Practices

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Startet Dev-Server (Port 3000) |
| `npm run build` | Build für Production + Sitemap |
| `npm start` | Startet Production-Server |
| `npm run lint` | ESLint Checks |

---

## 🌍 i18n (Internationalization)

Das Projekt unterstützt Deutsch (de) und optional Englisch (en).

- Default Locale: `de`
- Routing via Middleware: `/` → `/de`, `/en`
- Locale-Erkennung: manuell (kein Auto-Detect)

Um Englisch zu aktivieren:
```env
NEXT_PUBLIC_ENABLE_EN_LOCALE=true
```

---

## 📧 Kontakt-Formular (Resend)

Das Kontakt-Formular nutzt **Resend** für E-Mail-Versand.

1. **Resend Account erstellen**: [resend.com](https://resend.com)
2. **API Key generieren**
3. **Domain verifizieren** (z.B. `introgroupgermany.com`)
4. **ENV Variable setzen**:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM=Intro Group <no-reply@introgroupgermany.com>
   ```

---

## 📈 Analytics (Plausible)

DSGVO-konformes, cookie-freies Analytics.

1. **Plausible Account erstellen**: [plausible.io](https://plausible.io)
2. **Domain hinzufügen**: `de.introgroup`
3. **ENV Variable setzen**:
   ```env
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=de.introgroup
   ```

Integration erfolgt automatisch nach Cookie-Consent.

---

## 🚨 Troubleshooting

### Build schlägt fehl (ETARGET)
**Ursache**: Inkompatible Dependency-Versionen

**Lösung**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Locale-Routing funktioniert nicht
**Ursache**: Middleware nicht aktiv

**Lösung**: Prüfe `middleware.ts` und Vercel Logs

### Sitemap wird nicht generiert
**Ursache**: `postbuild`-Script fehlt

**Lösung**:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

---

## 📄 Lizenz

Proprietary – Intro Group Germany

---

## 👥 Support

Bei Fragen: `hello@introgroupgermany.com`

