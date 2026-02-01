
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CALCULATORS } from '../constants';
import { Category, Calculator } from '../types';

interface ToolsDirectoryProps {
  onSelect: (calc: Calculator) => void;
  isUrdu: boolean;
}

const ToolsDirectory: React.FC<ToolsDirectoryProps> = ({ onSelect, isUrdu }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = CALCULATORS.filter(c => {
    const matchesCat = activeCategory === 'All' || c.category === activeCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.nameUrdu.includes(searchQuery) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16 space-y-4">
        <h2 className={`text-4xl md:text-6xl font-black text-slate-900 ${isUrdu ? 'urdu' : ''}`}>
          {isUrdu ? 'تمام ٹولز ایک جگہ' : 'All Financial Tools'}
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          {isUrdu
            ? 'پاکستان کے لیے بنائے گئے ہمارے تمام حساب کتاب کے ٹولز کی مکمل فہرست'
            : 'Explore our complete suite of calculators designed specifically for the Pakistani market.'}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="flex flex-wrap justify-center gap-2">
          {['All', ...Object.values(Category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === cat
                ? 'bg-emerald-700 text-white border-emerald-700 shadow-lg shadow-emerald-700/20'
                : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-500'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder={isUrdu ? 'تلاش کریں...' : 'Search tools...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
          <svg className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((calc) => (
          <Link
            key={calc.id}
            to={`/${calc.id}`}
            className="group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col h-full block"
          >
            <div className="w-12 h-12 bg-slate-50 group-hover:bg-emerald-600 group-hover:text-white rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors">
              {calc.icon}
            </div>
            <h4 className={`text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors ${isUrdu ? 'urdu' : ''}`}>
              {isUrdu ? calc.nameUrdu : calc.name}
            </h4>
            <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
              {calc.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-emerald-500 transition-colors">
                {calc.category}
              </span>
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
          <p className="text-slate-400 font-medium">No tools found matching your criteria.</p>
          <button onClick={() => { setActiveCategory('All'); setSearchQuery('') }} className="mt-4 text-emerald-600 font-bold underline">Reset Filters</button>
        </div>
      )}
    </div>
  );
};

export default ToolsDirectory;
