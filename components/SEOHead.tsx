import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
    question: string;
    answer: string;
}

interface HowToStep {
    name: string;
    text: string;
}

interface HowTo {
    name: string;
    description: string;
    steps: HowToStep[];
}

interface BreadcrumbItem {
    name: string;
    path: string;
}

interface SEOHeadProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    faqs?: FAQItem[];
    howTo?: HowTo;
    includeWebSite?: boolean;
    type?: 'website' | 'article' | 'product';
    keywords?: string;
    image?: string;
    breadcrumbs?: BreadcrumbItem[];
}

const SITE_URL = 'https://pakcalc.site';
const SITE_NAME = 'PakCalc';
const SITE_AUTHOR = 'PakCalc Team';
const OG_IMAGE = `${SITE_URL}/favicon.png`;

/**
 * SEOHead renders meta tags and JSON-LD directly into the document via
 * react-helmet-async, so that the values are present in the SSR / prerendered
 * HTML that crawlers receive (not just injected after JS hydration).
 *
 * Important: the per-page software/tool schema does NOT include
 * `aggregateRating` — Google penalises fabricated review counts.
 */
const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    canonicalUrl,
    faqs,
    howTo,
    includeWebSite,
    type = 'website',
    keywords,
    image = OG_IMAGE,
    breadcrumbs,
}) => {
    const fullCanonicalUrl = canonicalUrl
        ? `${SITE_URL}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`
        : SITE_URL;

    // Clean title: avoid duplicate "PakCalc" if the page already includes it.
    const finalTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    // Keep client-side document.title in sync as a fallback for crawlers
    // that ignore Helmet's head injection (still harmless if Helmet ran first).
    useEffect(() => {
        document.title = finalTitle;
    }, [finalTitle]);

    // Build the JSON-LD blocks.
    const webAppSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: title.split('|')[0].trim(),
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        url: fullCanonicalUrl,
        description,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        inLanguage: ['en', 'ur'],
    };

    const webSiteSchema = includeWebSite
        ? {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: SITE_NAME,
              url: SITE_URL,
              description:
                  "Pakistan's free financial calculator suite — income tax, zakat, loan EMI, real estate ROI and more.",
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
          }
        : null;

    const organizationSchema = includeWebSite
        ? {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${SITE_URL}#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.png` },
              sameAs: [],
              contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'customer support',
                  url: `${SITE_URL}/contact`,
                  availableLanguage: ['English', 'Urdu'],
              },
          }
        : null;

    const faqSchema = faqs && faqs.length > 0
        ? {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
          }
        : null;

    const howToSchema = howTo
        ? {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: howTo.name,
              description: howTo.description,
              step: howTo.steps.map((step, index) => ({
                  '@type': 'HowToStep',
                  position: index + 1,
                  name: step.name,
                  text: step.text,
              })),
          }
        : null;

    const breadcrumbSchema = breadcrumbs && breadcrumbs.length
        ? {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: breadcrumbs.map((b, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  name: b.name,
                  item: `${SITE_URL}${b.path.startsWith('/') ? b.path : `/${b.path}`}`,
              })),
          }
        : null;

    return (
        <Helmet>
            {/* Primary */}
            <title>{finalTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullCanonicalUrl} />
            <meta name="author" content={SITE_AUTHOR} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonicalUrl} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content="en_PK" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD blocks */}
            <script type="application/ld+json" data-seo="pakcalc">
                {JSON.stringify(webAppSchema)}
            </script>
            {webSiteSchema && (
                <script type="application/ld+json" data-seo="pakcalc">
                    {JSON.stringify(webSiteSchema)}
                </script>
            )}
            {organizationSchema && (
                <script type="application/ld+json" data-seo="pakcalc">
                    {JSON.stringify(organizationSchema)}
                </script>
            )}
            {faqSchema && (
                <script type="application/ld+json" data-seo="pakcalc">
                    {JSON.stringify(faqSchema)}
                </script>
            )}
            {howToSchema && (
                <script type="application/ld+json" data-seo="pakcalc">
                    {JSON.stringify(howToSchema)}
                </script>
            )}
            {breadcrumbSchema && (
                <script type="application/ld+json" data-seo="pakcalc">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
