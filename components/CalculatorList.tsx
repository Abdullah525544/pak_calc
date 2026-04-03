
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CALCULATORS } from '../constants';
import { Category, Calculator, View } from '../types';

interface CalculatorListProps {
  onSelect: (calc: Calculator) => void;
  onNavigate: (view: View) => void;
  isUrdu: boolean;
}

const CalculatorList: React.FC<CalculatorListProps> = ({ onSelect, onNavigate, isUrdu }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = Object.values(Category);

  const filteredCalculators = CALCULATORS.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.nameUrdu.includes(searchTerm) ||
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-20 space-y-32">
      {/* Hero Section */}
      <div className="relative pt-12 md:pt-24 pb-16 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
            <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
            Updated for FBR 2025-26
          </div>
          <h1 className={`text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight ${isUrdu ? 'urdu' : ''}`}>
            {isUrdu ? 'پاکستان کے مالی فیصلوں کا ' : 'Smart Finance for '}
            <span className="text-emerald-600">{isUrdu ? 'جدید حل' : 'Modern Pakistan'}</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {isUrdu
              ? 'انکم ٹیکس، زکوٰۃ اور کاروباری حساب کتاب کے لیے جدید اور آسان ترین ٹولز'
              : 'The only suite of tools you need for tax planning, religious obligations, and business intelligence, tailored for our local landscape.'}
          </p>

          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-slate-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder={isUrdu ? 'ٹول تلاش کریں (ٹیکس، زکوٰۃ، قرض...)' : 'Search for a tool (tax, zakat, loan...)'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl shadow-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all text-lg placeholder-slate-400 font-medium"
            />
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {categories.map(cat => {
          const catCalcs = filteredCalculators.filter(c => c.category === cat);
          if (catCalcs.length === 0) return null;

          return (
            <section key={cat} className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-extrabold text-slate-900">{cat}</h3>
                <div className="h-px flex-grow bg-slate-200"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{catCalcs.length} Tools</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {catCalcs.map(calc => (
                  <Link
                    key={calc.id}
                    to={`/${calc.id}`}
                    className="tool-card group bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden relative block"
                  >
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="icon-box w-16 h-16 bg-slate-50 group-hover:bg-emerald-600 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-500 shadow-inner group-hover:shadow-emerald-200">
                        {calc.icon}
                      </div>
                      <h4 className={`text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors ${isUrdu ? 'urdu' : ''}`}>
                        {isUrdu ? calc.nameUrdu : calc.name}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8">
                        {calc.description}
                      </p>
                      <div className="mt-auto flex items-center text-emerald-600 font-bold text-sm tracking-wide group-hover:gap-2 transition-all">
                        <span>{isUrdu ? 'ابھی استعمال کریں' : 'Start Tool'}</span>
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {filteredCalculators.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <div className="text-6xl mb-4 text-slate-300">No results</div>
            <h4 className="text-xl font-bold text-slate-800">No tools found for "{searchTerm}"</h4>
            <p className="text-slate-500 mt-2">Try searching for generic terms like "Tax" or "Business".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-6 text-emerald-600 font-bold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* RE-DESIGNED SECTION 1: Why Choose PakCalc */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
              Precision Redefined
            </div>
            <h3 className={`text-5xl md:text-6xl font-black text-slate-900 leading-tight ${isUrdu ? 'urdu' : ''}`}>
              {isUrdu ? 'اعتماد جو برسوں سے قائم ہے' : 'Precision Built for Pakistan'}
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
              {isUrdu
                ? 'پاک کیلک انکم ٹیکس، زکوٰۃ اور کاروباری حساب کتاب کے لیے جدید ترین اور درست ترین پلیٹ فارم ہے۔'
                : 'More than just a calculator, PakCalc is a financial companion. We integrate the latest SBP policies and FBR directives directly into our logic to give you results you can take to the bank.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: '🛡️', t: 'Bank-Grade Accuracy', d: 'Validated calculations.' },
                { icon: '🔒', t: 'Privacy Absolute', d: 'Zero server-side storage.' },
                { icon: '⚖️', t: 'Shariah Compliant', d: 'Fatwa-verified logic.' },
                { icon: '⚡', t: 'Real-time Updates', d: 'FBR slabs 2025-26.' }
              ].map((feat, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{feat.t}</h5>
                    <p className="text-slate-400 text-xs mt-1">{feat.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-600/5 blur-[100px] rounded-full"></div>
            <div className="relative grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-50 flex flex-col items-center text-center">
                  <span className="text-4xl font-black text-emerald-600 mb-2">1M+</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Active Users</span>
                </div>
                <div className="bg-slate-900 p-8 rounded-[3rem] shadow-2xl text-white flex flex-col items-center text-center">
                  <span className="text-4xl font-black text-emerald-400 mb-2">99%</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Accuracy</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-emerald-600 p-8 rounded-[3rem] shadow-2xl text-white flex flex-col items-center text-center">
                  <span className="text-4xl font-black mb-2">FREE</span>
                  <span className="text-[10px] uppercase font-bold text-emerald-100 tracking-widest">Forever</span>
                </div>
                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-50 flex flex-col items-center text-center">
                  <span className="text-4xl font-black text-slate-900 mb-2">AI</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Integrated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RE-DESIGNED SECTION 2: How It Works & Final Get Started */}
      <section className="bg-white py-32 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h3 className={`text-4xl md:text-5xl font-black text-slate-900 ${isUrdu ? 'urdu' : ''}`}>
              {isUrdu ? 'یہ کیسے کام کرتا ہے؟' : 'Three Simple Steps'}
            </h3>
            <p className="text-slate-500 text-lg">Hassle-free financial calculations for everyone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { step: '01', title: 'Choose Your Goal', desc: 'Select from our wide range of specific calculators tailored for Pakistan.', color: 'emerald' },
              { step: '02', title: 'Input Details', desc: 'Securely enter your figures. No personal identifiers or registrations needed.', color: 'blue' },
              { step: '03', title: 'Insights & AI Advice', desc: 'Get instant reports with smart AI suggestions for your financial growth.', color: 'amber' }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 h-full hover:shadow-2xl transition-all duration-500">
                  <span className={`text-6xl font-black text-slate-50 absolute -top-6 -left-2 z-0 group-hover:text-${item.color}-50 transition-colors`}>
                    {item.step}
                  </span>
                  <div className="relative z-10 space-y-6">
                    <div className={`w-14 h-14 bg-${item.color}-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                      {i === 0 ? '🎯' : i === 1 ? '✍️' : '📋'}
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* HIGH-IMPACT FINAL GET STARTED SECTION */}
          <div className="relative group overflow-hidden bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center shadow-[0_50px_100px_-20px_rgba(6,95,70,0.3)]">
            {/* Decorative background effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent_70%)]"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <div className="flex justify-center -space-x-4 mb-6">
                {[1, 2, 3, 4, 5].map(n => (
                  <div key={n} className="w-14 h-14 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden ring-2 ring-emerald-500/20">
                    <img src={`https://i.pravatar.cc/150?img=${n + 25}`} alt="User" />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-slate-900 bg-emerald-600 flex items-center justify-center text-xs font-bold text-white ring-2 ring-emerald-500/20">
                  +50k
                </div>
              </div>

              <h3 className={`text-4xl md:text-6xl font-black text-white leading-tight ${isUrdu ? 'urdu' : ''}`}>
                {isUrdu ? 'آج ہی اپنے مالی سفر کا آغاز کریں' : 'Take Control of Your Future Today'}
              </h3>

              <p className="text-slate-400 text-lg md:text-xl font-medium">
                {isUrdu
                  ? 'ہزاروں پاکستانیوں کی طرح آپ بھی اپنی بچت اور ٹیکس کو بہتر بنائیں۔'
                  : 'Join over 50,000 monthly active users who trust PakCalc to navigate their financial landscape with confidence.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <button
                  onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}
                  className="bg-emerald-500 text-slate-950 px-12 py-5 rounded-3xl font-black text-xl hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
                >
                  {isUrdu ? 'ابھی شروع کریں' : 'Get Started Now'}
                </button>
                <button
                  onClick={() => onNavigate('all-tools')}
                  className="bg-white/5 text-white border border-white/10 px-12 py-5 rounded-3xl font-bold text-xl hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm"
                >
                  {isUrdu ? 'تمام ٹولز دیکھیں' : 'View All Tools'}
                </button>
              </div>

              <div className="pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-500 text-sm font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> 100% Free</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> No Signup</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> FBR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorList;
