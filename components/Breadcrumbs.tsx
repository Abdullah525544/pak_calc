import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CALCULATORS } from '../constants';

export const Breadcrumbs = () => {
    const location = useLocation();
    const path = location.pathname;

    if (path === '/') return null;

    const toolId = path.replace('/', '');
    const tool = CALCULATORS.find(c => c.id === toolId);

    return (
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
    );
};
