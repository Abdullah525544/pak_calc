import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calculator } from '../types';
import { CALCULATORS } from '../constants';

interface HubPageProps {
  title: string;
  description: string;
  toolIds: string[];
  isUrdu: boolean;
}

export const HubPage: React.FC<HubPageProps> = ({ title, description, toolIds, isUrdu }) => {
  const navigate = useNavigate();
  const tools = CALCULATORS.filter(c => toolIds.includes(c.id));

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12 animate-in fade-in duration-700">
      <Helmet>
        <title>{title} | PakCalc</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900">{title}</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((calc) => (
          <button
            key={calc.id}
            onClick={() => navigate(`/${calc.id}`)}
            className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-all text-left flex flex-col h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/5 overflow-hidden"
          >
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-bottom-left">
              {calc.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
              {isUrdu ? calc.nameUrdu : calc.name}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
              {calc.description}
            </p>
            <div className="mt-auto flex items-center text-emerald-600 font-bold text-sm">
              {isUrdu ? 'کھولیں' : 'Open Tool'}
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HubPage;
