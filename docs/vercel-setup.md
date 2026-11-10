# Nastavení Vercelu pro GOL Help

Tento projekt je běžná Next.js aplikace (App Router). Vercel ji umí nasadit bez vlastního `vercel.json`.

## Předpoklady

1. Kód je v **Git** repozitáři na **GitHubu** (nebo GitLab / Bitbucket podporované Vercelem).
2. V kořeni repa je `package.json` a `next.config.mjs` (u tebe ano).

## Postup v dashboardu

1. Přihlas se na [vercel.com](https://vercel.com) a vytvoř tým (Team), pokud ho ještě nemáš.
2. **Add New… → Project**.
3. **Import Git Repository** – vyber repozitář s `gol_help_en` a klikni **Import**.

### Build nastavení

Většinou stačí výchozí hodnoty:

| Pole | Hodnota |
|------|---------|
| Framework Preset | Next.js (detekuje se sám) |
| Root Directory | `.` (pokud je v repu jen tento projekt v kořeni) |
| Build Command | `npm run build` (výchozí) |
| Output Directory | prázdné / výchozí (Next to řeší sám) |
| Install Command | `npm install` (výchozí) |

Pokud máš **monorepo** a tento web je v podsložce (např. `apps/gol_help_en`), nastav **Root Directory** na tu složku.

### Proměnné prostředí (důležité)

V projektu: **Settings → Environment Variables** přidej:

| Name | Value | Prostředí |
|------|--------|-----------|
| `NEXT_PUBLIC_SITE_URL` | Tvá veřejná URL **bez** koncového lomítka, např. `https://help.tvoje-firma.cz` | Production (a volitelně Preview, pokud chceš stejnou doménu v náhledech) |

- **Production:** použij finální doménu po připojení vlastní domény.
- **Preview / Development:** můžeš nechat prázdné – aplikace použije `VERCEL_URL`, které Vercel doplní sám (náhledové URL typu `*.vercel.app`).

Bez `NEXT_PUBLIC_SITE_URL` na produkci budou v `sitemap.xml` a v metadatech URL odvozené z prostředí (často v pohodě na Vercelu díky `VERCEL_URL`), ale **kanonická adresa** je spolehlivější s explicitní proměnnou.

## Vlastní doména

1. Project → **Settings → Domains**.
2. Zadej doménu (např. `help.example.com`).
3. Postupuj podle DNS záznamů, které Vercel ukáže (typicky **CNAME** na `cname.vercel-dns.com` nebo A záznamy).
4. Po ověření domény **doplň / uprav** `NEXT_PUBLIC_SITE_URL` na tuto adresu a znovu nasaď (nebo redeploy).

## Co se stane po pushi

- Push do výchozí větve (obvykle `main`) spustí **produkční deploy**.
- Ostatní větve a Pull Requesty dostanou **Preview URL** (unikátní odkaz pro kontrolu změn).

GitHub integrace: při PR uvidíš odkaz na preview v kontrolkách (pokud máš propojený GitHub účet a Vercel aplikaci).

## Kontrola po prvním deployi

- Otevři produkční URL (nebo preview).
- Ověř `/sitemap.xml` a `/robots.txt`.
- Ověř, že navigace a články z `content/docs/` jdou otevřít.

## Časté problémy

- **Build spadne na TypeScript / npm:** lokálně spusť `npm install` a `npm run build` – stejný příkaz běží na Vercelu v CI.
- **Špatná Root Directory:** pokud Vercel „nehledá“ Next.js, zkontroluj, že Root Directory ukazuje na složku s `package.json`.
- **Špatné URL v sitemap:** nastav `NEXT_PUBLIC_SITE_URL` pro Production na finální https adresu.

## Build

Pro deploy stačí `npm run build` (před ním se automaticky spustí `scripts/generate-site-data.mjs`).
