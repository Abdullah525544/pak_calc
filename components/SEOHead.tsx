import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    faqs?: { question: string; answer: string }[];
    howTo?: {
        name: string;
        description: string;
        steps: { name: string; text: string }[];
    };
    includeWebSite?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonicalUrl, faqs, howTo, includeWebSite }) => {
    const siteUrl = 'https://pakcalc.site';
    const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

    useEffect(() => {
        // 1. Update Title
        document.title = title;

        // 2. Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // 3. Update Canonical Link
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', fullCanonicalUrl);

        // 4. Update JSON-LD Scripts
        // Remove existing PakCalc SEO scripts
        const existingScripts = document.querySelectorAll('script[data-seo="pakcalc"]');
        existingScripts.forEach(s => s.remove());

        const schemas: any[] = [];

        // SoftwareApplication (Generic for all tools)
        schemas.push({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": title.split('|')[0].trim(),
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Any",
            "url": fullCanonicalUrl,
            "description": description,
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "250", "bestRating": "5" }
        });

        // WebSite (Home only)
        if (includeWebSite) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "PakCalc",
                "url": siteUrl,
                "description": "Pakistan's #1 free financial calculator suite.",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": `${siteUrl}/all-tools?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                }
            });
        }

        // FAQ
        if (faqs && faqs.length > 0) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            });
        }

        // HowTo
        if (howTo) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": howTo.name,
                "description": howTo.description,
                "step": howTo.steps.map((step, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": step.name,
                    "text": step.text
                }))
            });
        }

        // Inject all schemas as separate script tags
        schemas.forEach(schema => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-seo', 'pakcalc');
            script.text = JSON.stringify(schema);
            document.head.appendChild(script);
        });

    }, [title, description, fullCanonicalUrl, faqs, howTo, includeWebSite]);

    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default SEOHead;
