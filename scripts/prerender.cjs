/* eslint-disable */
/**
 * Static prerender for PakCalc SPA.
 *
 * Why: vite-plugin-prerender needs Puppeteer, which isn't installed and would
 * bloat the build. Instead we generate a fully-formed HTML file for every
 * route — including unique <title>, <meta>, canonical, OG, Twitter, JSON-LD
 * (WebApplication + FAQPage + WebSite + Organization) — so Google (and any
 * other crawler) sees real, unique content on each URL even before JS runs.
 *
 * Usage: invoked from the npm `postbuild` script after `vite build`.
 *
 * Input : dist/index.html (Vite output) + data/seoMeta.json (per-route data)
 * Output: dist/<route>/index.html (one file per route)
 *         dist/sitemap.xml (regenerated with dynamic lastmod)
 *         dist/robots.txt  (rewritten to point at fresh sitemap)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SEO_META_PATH = path.join(ROOT, 'data', 'seoMeta.json');

const SITE_URL = 'https://pakcalc.site';
const SITE_NAME = 'PakCalc';

function readSeoMeta() {
    if (!fs.existsSync(SEO_META_PATH)) {
        console.error('[prerender] data/seoMeta.json not found — skipping prerender.');
        return {};
    }
    return JSON.parse(fs.readFileSync(SEO_META_PATH, 'utf8'));
}

function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function buildSchema(route, meta) {
    const fullCanonicalUrl = `${SITE_URL}${route}`;
    const schemas = [];

    // 1. WebApplication (every tool/info page)
    schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: meta.title.split('|')[0].trim(),
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        url: fullCanonicalUrl,
        description: meta.description,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        inLanguage: ['en', 'ur'],
    });

    // 2. WebSite + Organization (home only)
    if (meta.includeWebSite) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description:
                "Pakistan's free financial calculator suite — income tax, zakat, loan EMI, real-estate ROI and more.",
            inLanguage: ['en', 'ur'],
            publisher: {
                '@type': 'Organization',
                name: SITE_NAME,
                url: SITE_URL,
                logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.png` },
            },
            potentialAction: {
                '@type': 'SearchAction',
                target: `${SITE_URL}/all-tools?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
            },
        });
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': `${SITE_URL}#organization`,
            name: SITE_NAME,
            url: SITE_URL,
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.png` },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                url: `${SITE_URL}/contact`,
                availableLanguage: ['English', 'Urdu'],
            },
        });
    }

    // 3. FAQPage (when FAQs are defined)
    if (meta.faqs && meta.faqs.length) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: meta.faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
        });
    }

    // 4. HowTo (when a procedure is defined)
    if (meta.howTo) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: meta.howTo.name,
            description: meta.howTo.description,
            step: meta.howTo.steps.map((s, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: s.name,
                text: s.text,
            })),
        });
    }

    // 5. BreadcrumbList (when breadcrumbs are defined)
    if (meta.breadcrumbs && meta.breadcrumbs.length) {
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: meta.breadcrumbs.map((b, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: b.name,
                item: `${SITE_URL}${b.path}`,
            })),
        });
    }

    return schemas
        .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
        .join('\n    ');
}

function injectIntoHtml(html, route, meta) {
    const fullCanonicalUrl = `${SITE_URL}${route}`;
    const finalTitle = meta.title.includes(SITE_NAME) ? meta.title : `${meta.title} | ${SITE_NAME}`;
    const h1 = meta.h1 || meta.title;
    const intro = meta.intro || meta.description;

    // Build a topical-cluster list from the breadcrumb array.
    // We expose internal links in <noscript> so no-JS crawlers see the
    // linking network that the React RelatedTools component renders.
    const clusterLinks = (meta.breadcrumbs || [])
        .map((b) => `<a href="${SITE_URL}${b.path.startsWith('/') ? b.path : `/${b.path}`}" style="color:#065f46;text-decoration:underline;margin-right:8px;">${b.name}</a>`)
        .join('');

    // Replace title
    let out = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(finalTitle)}</title>`);

    // Remove existing dynamic scripts/meta we will replace
    out = out.replace(/<meta name="description"[^>]*>/g, '');
    out = out.replace(/<meta name="keywords"[^>]*>/g, '');
    out = out.replace(/<meta property="og:title"[^>]*>/g, '');
    out = out.replace(/<meta property="og:description"[^>]*>/g, '');
    out = out.replace(/<meta property="og:url"[^>]*>/g, '');
    out = out.replace(/<meta property="og:type"[^>]*>/g, '');
    out = out.replace(/<meta name="twitter:title"[^>]*>/g, '');
    out = out.replace(/<meta name="twitter:description"[^>]*>/g, '');
    out = out.replace(/<link rel="canonical"[^>]*>/g, '');

    const metaTags = [
        `<meta name="description" content="${escapeHtml(meta.description)}">`,
        `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
        `<link rel="canonical" href="${fullCanonicalUrl}">`,
        `<meta property="og:type" content="website">`,
        `<meta property="og:site_name" content="${SITE_NAME}">`,
        `<meta property="og:title" content="${escapeHtml(finalTitle)}">`,
        `<meta property="og:description" content="${escapeHtml(meta.description)}">`,
        `<meta property="og:url" content="${fullCanonicalUrl}">`,
        `<meta property="og:image" content="${SITE_URL}/favicon.png">`,
        `<meta property="og:locale" content="en_PK">`,
        `<meta name="twitter:card" content="summary_large_image">`,
        `<meta name="twitter:title" content="${escapeHtml(finalTitle)}">`,
        `<meta name="twitter:description" content="${escapeHtml(meta.description)}">`,
        `<meta name="twitter:image" content="${SITE_URL}/favicon.png">`,
    ].join('\n    ');

    const schemaTags = buildSchema(route, meta);

    // Inject meta tags just before </head>
    out = out.replace(/<\/head>/, `    ${metaTags}\n    ${schemaTags}\n  </head>`);

    // Inject a visible H1 + intro paragraph in the body so even no-JS users
    // and Google see the page subject immediately.
    const visibleNoJs = `
  <noscript>
    <div style="max-width:760px;margin:24px auto;padding:24px;background:#fff;border:1px solid #e2e8f0;border-radius:16px;font-family:system-ui,sans-serif;color:#0f172a;">
      <h1 style="font-size:28px;line-height:1.2;margin:0 0 12px 0;">${escapeHtml(h1)}</h1>
      <p style="font-size:15px;line-height:1.6;color:#475569;margin:0 0 16px 0;">${escapeHtml(intro)}</p>
      ${clusterLinks ? `<p style="font-size:13px;margin:0 0 8px 0;">Related: ${clusterLinks}</p>` : ''}
      <p style="font-size:13px;color:#64748b;margin:0;">JavaScript is required to run the calculator. Please enable JavaScript to use the full PakCalc tool.</p>
    </div>
  </noscript>`;

    out = out.replace(/<div id="root"><\/div>/, `<div id="root"></div>${visibleNoJs}`);

    return out;
}

function ensureDir(p) {
    fs.mkdirSync(p, { recursive: true });
}

function writeRouteFile(route, html, meta) {
    const injected = injectIntoHtml(html, route, meta);
    const routeDir = route === '/' ? '' : route;
    const filePath = path.join(DIST, routeDir, 'index.html');
    ensureDir(path.dirname(filePath));
    fs.writeFileSync(filePath, injected, 'utf8');
    return filePath;
}

function generateSitemap(routes) {
    const today = new Date().toISOString().split('T')[0];
    const priorityMap = {
        '/': '1.0',
        '/all-tools': '0.8',
        '/income-tax': '0.9',
        '/zakat': '0.9',
        '/freelancer-tax': '0.9',
        '/loan-emi': '0.9',
        '/provident-fund': '0.9',
        '/gratuity': '0.9',
        '/mark-percentage': '0.9',
        '/electricity-bill': '0.9',
        '/slabs': '0.9',
        '/zakat-info': '0.8',
        '/percentage': '0.8',
        '/password-gen': '0.8',
        '/mortgage': '0.8',
        '/profit-margin': '0.8',
        '/retirement-plan': '0.8',
        '/unit-converter': '0.8',
        '/investment-return': '0.8',
        '/real-estate-roi': '0.8',
        '/bmi': '0.7',
        '/cgpa-calc': '0.7',
        '/grade-calc': '0.7',
        '/contact': '0.5',
        '/privacy': '0.3',
        '/terms': '0.3',
        '/disclaimer': '0.3',
    };
    const urls = routes
        .map((r) => {
            const loc = `${SITE_URL}${r === '/' ? '/' : r}`;
            const priority = priorityMap[r] || '0.6';
            return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
        })
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
    fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml, 'utf8');
    console.log(`[prerender] sitemap.xml (${routes.length} urls)`);
}

function main() {
    const indexHtmlPath = path.join(DIST, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
        console.error('[prerender] dist/index.html not found. Did vite build run?');
        process.exit(1);
    }
    const html = fs.readFileSync(indexHtmlPath, 'utf8');
    const meta = readSeoMeta();
    const routes = Object.keys(meta);

    let count = 0;
    for (const route of routes) {
        try {
            const fp = writeRouteFile(route, html, meta[route]);
            count++;
        } catch (err) {
            console.error(`[prerender] failed for ${route}:`, err.message);
        }
    }
    generateSitemap(routes);

    // Re-emit a clean robots.txt
    const robots = `User-agent: *
Allow: /
Disallow: /all-tools?q=

Sitemap: ${SITE_URL}/sitemap.xml
`;
    fs.writeFileSync(path.join(DIST, 'robots.txt'), robots, 'utf8');

    console.log(`[prerender] generated ${count}/${routes.length} static HTML files`);
}

main();
