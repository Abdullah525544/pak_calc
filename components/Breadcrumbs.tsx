import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CALCULATORS } from '../constants';

export const Breadcrumbs = () => {
    const location = useLocation();
    const path = location.pathname;

    if (path === '/') return null;

    const toolId = path.replace('/', '');
    const tool = CALCULATORS.find(c => c.id === toolId);

    // Breadcrumb Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pakcalc.site/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": tool?.category || "Tools",
                "item": "https://pakcalc.site/all-tools"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": tool?.name || "Current Page",
                "item": `https://pakcalc.site${path}`
            }
        ]
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <nav className="flex text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link to="/" className="hover:text-emerald-600 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <span className="mx-2 text-slate-400">/</span>
                            <Link to="/all-tools" className="hover:text-emerald-600 transition-colors">
                                {tool?.category || "Tools"}
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <span className="mx-2 text-slate-400">/</span>
                            <span className="text-slate-900 font-medium truncate max-w-[200px] md:max-w-none">
                                {tool?.name || "Current Page"}
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
        </>
    );
};
